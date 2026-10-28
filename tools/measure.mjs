/* قياس صفحات الموقع على الجوال واللوح والحاسب بكروم المثبت محليا، على طريقة tools/measure.mjs في موقع مستر زاهي.
   الاستعمال:  npm i   ثم   node tools/measure.mjs index,about   (بلا وسيط: كل الصفحات)
   اللغات: LANGS=ar,en,fr,ur (الافتراضي ar,en)، المظاهر: THEMES=dark,light، العروض: SIZES=375,768,1280.
   المطلوب قبل اي نشر يمس الصفحات: overflow=no و err=0 في كل سطر.
   اللقطات والتقرير في .measure-shots/ (متجاهلة في git ولا ترفع مع الموقع). */
import puppeteer from "puppeteer-core";
import http from "http"; import fs from "fs"; import path from "path";
const ROOT = path.resolve(path.dirname(new URL(import.meta.url).pathname), "..");
const OUT = process.env.OUT || path.join(ROOT, ".measure-shots");
fs.mkdirSync(OUT, { recursive: true });
const pages = (process.argv[2] || "index,about,blog,support,privacy,terms,licenses").split(",");
const languages = (process.env.LANGS || "ar,en").split(",");
const themes = (process.env.THEMES || "dark,light").split(",");
const sizes = (process.env.SIZES || "375,768,1280").split(",").map((width) => Number(width));
const HEIGHTS = { 375: 812, 768: 1024, 1280: 900 };
const TYPES = { ".html": "text/html; charset=utf-8", ".js": "text/javascript", ".css": "text/css", ".png": "image/png", ".jpg": "image/jpeg", ".svg": "image/svg+xml", ".ttf": "font/ttf", ".webmanifest": "application/manifest+json" };

/* خادم محلي يخدم الملفات كما يخدمها الـ Worker: /about يقرا about.html، والمسار المجهول 404 */
const server = http.createServer((request, response) => {
  const url = new URL(request.url, "http://localhost");
  let file = path.join(ROOT, decodeURIComponent(url.pathname));
  if (url.pathname === "/") file = path.join(ROOT, "index.html");
  else if (!path.extname(file) && fs.existsSync(file + ".html")) file += ".html";
  if (!file.startsWith(ROOT) || !fs.existsSync(file) || fs.statSync(file).isDirectory()) { response.statusCode = 404; return response.end("not found"); }
  response.setHeader("Content-Type", TYPES[path.extname(file)] || "application/octet-stream");
  response.end(fs.readFileSync(file));
}).listen(0);
const base = "http://localhost:" + server.address().port;
const chrome = process.env.CHROME || "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";
const browser = await puppeteer.launch({ executablePath: chrome, headless: true, args: ["--no-sandbox", "--disable-gpu"] });
const report = [];
let missingFavicon = false;
for (const name of pages) {
  for (const width of sizes) {
    for (const language of languages) {
      for (const theme of themes) {
        const context = await browser.createBrowserContext();
        const page = await context.newPage();
        await page.setViewport({ width, height: HEIGHTS[width] || 900, deviceScaleFactor: 1, isMobile: width < 900, hasTouch: width < 900 });
        await page.setBypassServiceWorker(true);
        const errors = [];
        page.on("pageerror", (error) => errors.push(String(error.message).slice(0, 200)));
        /* طلب فاشل يسجل مرة واحدة بعنوانه من سطر response، فلا يعد مرة ثانية من رسالة الكونسول */
        page.on("console", (message) => { if (message.type() === "error" && !message.text().startsWith("Failed to load resource")) errors.push("console: " + message.text().slice(0, 160)); });
        page.on("response", (response) => {
          const address = response.url().replace(base, "");
          /* المتصفح يطلب /favicon.ico من تلقاء نفسه، والصفحات لا تعلن ايقونة: يذكر في الختام ولا يعد خطأ صفحة */
          if (address === "/favicon.ico") { missingFavicon = response.status() >= 400; return; }
          if (response.status() >= 400) errors.push("http " + response.status() + ": " + address.slice(0, 120));
        });
        await page.evaluateOnNewDocument((chosenLanguage, chosenTheme) => {
          localStorage.setItem("thundermoon_lang", chosenLanguage);
          localStorage.setItem("thundermoon_theme", chosenTheme);
        }, language, theme);
        try { await page.goto(base + "/" + (name === "index" ? "" : name), { waitUntil: "networkidle0", timeout: 45000 }); } catch (error) { errors.push("goto: " + error.message.slice(0, 120)); }
        await page.evaluate(() => document.fonts.ready);
        await new Promise((resolve) => setTimeout(resolve, 600));
        const measured = await page.evaluate((chosenLanguage) => {
          const root = document.documentElement; const viewportWidth = window.innerWidth;
          /* عنصر ظاهر يخرج عن الشاشة ولا يقصه اب له overflow مخفي */
          const clipped = (element) => { for (let ancestor = element.parentElement; ancestor && ancestor !== document.body; ancestor = ancestor.parentElement) { const style = getComputedStyle(ancestor); if (style.overflowX !== "visible" || style.overflow !== "visible") return true; } return false; };
          const wide = [];
          document.querySelectorAll("body *").forEach((element) => {
            const box = element.getBoundingClientRect(); const style = getComputedStyle(element);
            if (box.width > 0 && (box.right > viewportWidth + 1 || box.left < -1) && style.position !== "fixed" && style.visibility !== "hidden" && style.display !== "none" && !clipped(element))
              wide.push(element.tagName.toLowerCase() + (typeof element.className === "string" && element.className ? "." + element.className.trim().split(/\s+/).slice(0, 2).join(".") : "") + " " + Math.round(box.left) + "→" + Math.round(box.right));
          });
          /* في غير العربية والاردية: لا يبقى نص عربي في عنصر مترجم */
          const untranslated = chosenLanguage === "ar" || chosenLanguage === "ur" ? 0 : [...document.querySelectorAll("[data-i18n]")].filter((element) => /[؀-ۿ]/.test(element.textContent)).length;
          return { overflow: root.scrollWidth > viewportWidth + 1, scrollWidth: root.scrollWidth, innerWidth: viewportWidth, wide: wide.slice(0, 5), wideCount: wide.length, dir: root.dir, lang: root.lang, untranslated };
        }, language);
        await page.screenshot({ path: `${OUT}/${name}-${width}-${language}-${theme}.png`, fullPage: false });
        report.push({ page: name, width, language, theme, ...measured, errors: errors.slice(0, 4) });
        await context.close();
      }
    }
  }
}
await browser.close(); server.close();
fs.writeFileSync(OUT + "/report.json", JSON.stringify(report, null, 1));
let failed = 0;
for (const row of report) {
  const bad = row.overflow || row.errors.length || row.untranslated || row.wideCount;
  if (bad) failed++;
  console.log(`${row.page.padEnd(9)} ${String(row.width).padEnd(5)} ${row.language} ${row.theme.padEnd(5)} overflow=${row.overflow ? "YES " + row.scrollWidth + ">" + row.innerWidth : "no "} wide=${row.wideCount} dir=${row.dir} untranslated=${row.untranslated} err=${row.errors.length}${row.wide.length ? "\n    wide: " + row.wide.join(" | ") : ""}${row.errors.length ? "\n    err: " + row.errors.slice(0, 2).join(" | ") : ""}`);
}
if (missingFavicon) console.log("note: /favicon.ico is missing (the browser asks for it on its own; no page declares an icon)");
console.log(failed ? `${failed} of ${report.length} runs failed` : `all ${report.length} runs passed`);
process.exit(failed ? 1 : 0);
