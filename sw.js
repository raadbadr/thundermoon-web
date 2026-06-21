/* ThunderMoon — offline cache (same-origin only) */
const CACHE_NAME = "thundermoon-offline-v1";

const PRECACHE_URLS = [
  "./index.html",
  "./about.html",
  "./blog.html",
  "./support.html",
  "./privacy.html",
  "./terms.html",
  "./header.css",
  "./footer.css",
  "./i18n.js",
  "./Monoton-Regular.ttf",
  "./assets/laserbeam_logo.png",
  "./assets/laserbeam_preview.png",
  "./assets/laserbeam_launch.png"
];

function scopeBase() {
  return self.registration.scope;
}

function isDocumentRequest(request, url) {
  if (request.mode === "navigate") return true;
  const p = url.pathname;
  if (p.endsWith(".html")) return true;
  if (p === "/" || p.endsWith("/")) return true;
  return false;
}

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches
      .open(CACHE_NAME)
      .then((cache) =>
        Promise.allSettled(
          PRECACHE_URLS.map((path) =>
            cache.add(new URL(path, scopeBase()).href).catch(() => {})
          )
        )
      )
      .then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) =>
        Promise.all(keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k)))
      )
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (event) => {
  const { request } = event;
  if (request.method !== "GET") return;

  const url = new URL(request.url);
  if (url.origin !== self.location.origin) return;

  if (isDocumentRequest(request, url)) {
    event.respondWith(
      fetch(request)
        .then((response) => {
          if (response.ok) {
            const copy = response.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(request, copy));
          }
          return response;
        })
        .catch(() =>
          caches.match(request).then((cached) => {
            if (cached) return cached;
            return caches.match(new URL("./index.html", scopeBase()).href);
          })
        )
    );
    return;
  }

  event.respondWith(
    caches.match(request).then((cached) => {
      if (cached) return cached;
      return fetch(request)
        .then((response) => {
          if (response.ok) {
            const copy = response.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(request, copy));
          }
          return response;
        })
        .catch(() => Promise.resolve());
    })
  );
});
