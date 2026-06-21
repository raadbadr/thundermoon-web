// ThunderMoon Security Middleware
// Rate Limiting + Bot Blocking + Request Sanitization

// Suspicious user agents (bots, scanners, crawlers)
const BLOCKED_UA = [
  /sqlmap/i, /nikto/i, /nmap/i, /masscan/i, /acunetix/i, /nessus/i,
  /burp/i, /hydra/i, /metasploit/i, /dirbuster/i, /wpscan/i,
  /havij/i, /fimap/i, /skipfish/i, /w3af/i, /arachni/i,
  /libwww-perl/i, /python-requests\/[0-9]/i, /curl\/[0-9]/i,
  /wget\/[0-9]/i, /scrapy/i, /semrush/i, /ahrefs/i, /dotbot/i,
  /petalbot/i, /dataforseo/i, /mj12bot/i, /blexbot/i,
];

// Suspicious request patterns (SQLi, XSS, path traversal, RCE)
// Tested against decoded URL — worker decodes before matching
const SUSPICIOUS_PATTERNS = [
  // SQLi — keywords in sequence (UNION SELECT, DROP TABLE, etc.)
  /(union\s+select|union\s+all\s+select|select\s+.*\s+from|insert\s+into|drop\s+table|delete\s+from|update\s+.*\s+set)/i,
  /(\bunion\b.*\bfrom\b|\bselect\b.*\bfrom\b)/i,
  // XSS
  /(<script|<iframe|<img[^>]+onerror|javascript:|onerror\s*=|onload\s*=|onclick\s*=|onmouseover\s*=|<svg[^>]+onload)/i,
  /(<script[^>]*>|<\/script>|<script\s+src)/i,
  // Path traversal
  /(\.\.[\/\\]|\.\.%2f|\.\.%5c|%2e%2e%2f|%2e%2e%5c|%2e%2e\.)/i,
  // LFI/RFI
  /(\/etc\/passwd|\/etc\/shadow|\/proc\/self\/|\/etc\/group|\/etc\/hosts)/i,
  // PHP wrappers
  /(php:\/\/input|php:\/\/filter|data:\/\/|expect:\/\/|zip:\/\/|phar:\/\/)/i,
  // RCE
  /(\beval\b\s*\(|\bexec\b\s*\(|\bsystem\b\s*\(|\bpassthru\b\s*\(|\bshell_exec\b\s*\(|\bpopen\b\s*\()/i,
  // SSRF
  /(127\.0\.0\.1|localhost|0\.0\.0\.0|169\.254\.169\.254|metadata\.google|169\.254\.)/i,
  // Command injection
  /(\$\(|\$\{|\`.*\`|\|.*\|\||&&.*;|\|\|.*;)/i,
  // SSTI
  /(\{\{.*\}\}|\{%.*%\}|\{\{.*\}\}|\{\{.*\}|\{.*\}\})/i,
  // XXE
  /(!ENTITY|!DOCTYPE.*\[|SYSTEM\s+)/i,
  // NoSQL injection
  /(\$\[.*\]|\$gt:|\$ne:|\$regex:|\$where:)/i,
  // Common exploit signatures
  /(jndi:|log4j|\$\{jndi:|\$\{lower:|\$\{upper:|\$\{env:)/i,
  // XML/XSLT
  /(<\?xml|<!DOCTYPE|xsl:|transform)/i,
];

// Rate limiting: max requests per IP per minute
const RATE_LIMIT = 60;
const RATE_WINDOW = 60; // seconds

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    const userAgent = request.headers.get('User-Agent') || '';
    const ip = request.headers.get('CF-Connecting-IP') || 'unknown';

    // 1. Block suspicious user agents
    for (const pattern of BLOCKED_UA) {
      if (pattern.test(userAgent)) {
        return new Response('Forbidden', { status: 403 });
      }
    }

    // 2. Block empty user agents (most bots)
    if (!userAgent || userAgent.length < 10) {
      // Allow health checks from Cloudflare
      if (request.headers.get('CF-Worker') !== undefined) {
        // OK to proceed for CF internal
      } else if (url.pathname === '/favicon.ico' || url.pathname === '/robots.txt' || url.pathname === '/manifest.webmanifest') {
        // Allow standard files
      } else {
        return new Response('Forbidden', { status: 403 });
      }
    }

    // 3. Check URL path for suspicious patterns (decode first)
    const rawPath = url.pathname + url.search;
    let decodedPath = rawPath;
    try { decodedPath = decodeURIComponent(rawPath); } catch (e) {}
    const testPath = rawPath + ' ' + decodedPath;
    for (const pattern of SUSPICIOUS_PATTERNS) {
      if (pattern.test(testPath)) {
        return new Response('Forbidden', { status: 403 });
      }
    }

    // 4. Block common attack paths
    const attackPaths = [
      '/wp-admin', '/wp-login', '/wp-content', '/wp-includes',
      '/.env', '/.git', '/.ssh', '/.aws',
      '/admin', '/administrator', '/phpmyadmin', '/pma',
      '/config.php', '/xmlrpc.php', '/wp-config',
      '/.well-known/security.txt',
      '/vendor/', '/node_modules/', '/composer.',
    ];
    for (const path of attackPaths) {
      if (url.pathname.toLowerCase().startsWith(path)) {
        return new Response('Not Found', { status: 404 });
      }
    }

    // 5. Rate limiting using Cache API
    const rateLimitKey = `rate-limit:${ip}`;
    let count = 1;
    try {
      const cache = caches.default;
      const cacheKey = new Request(`https://rate-limit.local/${rateLimitKey}`, { method: 'GET' });
      const cached = await cache.match(cacheKey);
      if (cached) {
        const data = await cached.json();
        count = (data.count || 0) + 1;
        const now = Date.now();
        const age = (now - data.firstRequest) / 1000;
        if (count > RATE_LIMIT && age < RATE_WINDOW) {
          return new Response('Too Many Requests', {
            status: 429,
            headers: { 'Retry-After': String(Math.ceil(RATE_WINDOW - age)) }
          });
        }
        if (age >= RATE_WINDOW) {
          count = 1;
        }
        const newData = JSON.stringify({ count, firstRequest: age >= RATE_WINDOW ? now : data.firstRequest });
        const newResponse = new Response(newData, { headers: { 'Content-Type': 'application/json' } });
        ctx.waitUntil(cache.put(cacheKey, newResponse.clone()));
      } else {
        const newData = JSON.stringify({ count: 1, firstRequest: Date.now() });
        const newResponse = new Response(newData, { headers: { 'Content-Type': 'application/json' } });
        ctx.waitUntil(cache.put(cacheKey, newResponse.clone()));
      }
    } catch (e) {
      // Rate limiting is best-effort — don't block on errors
    }

    // 6. Block non-GET/HEAD requests to static files (prevent abuse)
    if (request.method !== 'GET' && request.method !== 'HEAD') {
      // Only allow POST to newsletter (which is client-side only)
      return new Response('Method Not Allowed', { status: 405 });
    }

    // 7. Serve static assets
    const response = await env.ASSETS.fetch(request);

    // 8. Add security headers to response
    const newHeaders = new Headers(response.headers);
    newHeaders.set('X-Frame-Options', 'DENY');
    newHeaders.set('X-Content-Type-Options', 'nosniff');
    newHeaders.set('Referrer-Policy', 'strict-origin-when-cross-origin');
    newHeaders.set('Strict-Transport-Security', 'max-age=31536000; includeSubDomains; preload');
    newHeaders.set('Permissions-Policy', 'camera=(), microphone=(), geolocation=(), payment=(), usb=(), interest-cohort=()');

    return new Response(response.body, {
      status: response.status,
      statusText: response.statusText,
      headers: newHeaders,
    });
  },
};
