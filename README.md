# ⚡ ThunderMoon

موقع ThunderMoon — استوديو الألعاب المستقل.

## 🌐 الروابط
- **الموقع:** raadbadr.com
- **GitHub:** github.com/raadbadr/thundermoon-web
- **Cloudflare Pages:** thundermoon.pages.dev

## 🚀 طريقة النشر (GitHub → Cloudflare Pages)
- **المستودع:** `github.com/raadbadr/thundermoon-web`
- **لوحة Cloudflare:** Workers & Pages → thundermoon → Settings → Builds & deployments
- **الربط:** Connect to Git → GitHub → `raadbadr/thundermoon-web` → الفرع `main`
- **إعدادات البناء:** Build command = فارغ، Build output directory = `/`
- **كل `git push` للفرع `main` ينشر تلقائياً خلال ثوانٍ.**
- **لا تستخدم `wrangler deploy` يدوياً — النشر فقط من GitHub.**

## 📂 الملفات
```
thundermoon-web/
├── index.html              # الصفحة الرئيسية
├── about.html              # من نحن
├── blog.html               # المدونة
├── support.html            # الدعم
├── privacy.html            # سياسة الخصوصية
├── terms.html              # شروط الاستخدام
├── header.css              # هيدر موحد
├── footer.css              # فوتر موحد
├── i18n.js                 # تعدد اللغات
├── sw.js                   # Service Worker
├── worker.js               # Cloudflare Worker (WAF)
├── _headers                # أمان الرؤوس
├── manifest.webmanifest    # PWA manifest
├── wrangler.toml           # إعدادات Wrangler
└── assets/                 # الصور والأصول
```

## ⚠️ تعليمات ثابتة — لا تُعدّل
- لا تغيّر `_headers` أو `worker.js` بدون مراجعة — يحتوي على إعدادات أمان (WAF, CSP, HSTS).
- لا تغيّر `wrangler.toml` بدون التأكد من توافقه مع Cloudflare Pages.

---

**النسخة:** 1.0
**آخر تحديث:** 2026-06-21
**الحالة:** ✅ Production Ready
