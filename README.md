# ⚡ ThunderMoon

موقع ThunderMoon — استوديو الألعاب المستقل.

## 🌐 الروابط
- **الموقع:** raadbadr.com و www.raadbadr.com
- **GitHub:** github.com/raadbadr/thundermoon-web
- **Cloudflare Worker:** thundermoon

## 📂 الملفات
```
thundermoon-web/
├── index.html              # الصفحة الرئيسية
├── about.html              # من نحن
├── blog.html               # المدونة
├── support.html            # الدعم
├── privacy.html            # سياسة الخصوصية
├── terms.html              # شروط الاستخدام
├── licenses.html           # التراخيص (ترتبط بها لعبة جدار الرعد)
├── Monoton-Regular.ttf     # خط اسم الاستوديو
├── header.css              # هيدر موحد
├── footer.css              # فوتر موحد
├── i18n.js                 # تعدد اللغات
├── sw.js                   # Service Worker
├── worker.js               # Cloudflare Worker (WAF) — لا يخدم كملف
├── .github/workflows/deploy.yml  # النشر التلقائي (GitHub Actions)
├── .assetsignore           # ما لا يرفع مع ملفات الموقع
├── _headers                # أمان الرؤوس
├── manifest.webmanifest    # PWA manifest
├── wrangler.toml           # إعدادات Wrangler (الـ Worker ونطاقاه)
└── assets/                 # الصور والأصول
```

## ⚠️ تعليمات ثابتة — لا تعدل

### طريقة النشر (GitHub → Cloudflare Workers) — نفس طريقة موقع مستر زاهي
- **المستودع:** `github.com/raadbadr/thundermoon-web`
- **الـ Worker:** `thundermoon` — النطاقان `raadbadr.com` و `www.raadbadr.com` يصلان اليه بمسارين (routes) معلنين في `wrangler.toml`.
  سجلات DNS للنطاقين تشير الى مشروع Cloudflare Pages القديم بالاسم نفسه: لا يحذف، ولا تستخدم `wrangler pages deploy`.
- **كل `git push` للفرع `main` ينشر تلقائيا** عبر GitHub Actions (`.github/workflows/deploy.yml`) الذي يشغل `wrangler deploy` بالسر `CLOUDFLARE_API_TOKEN`.
- **الرمز `CLOUDFLARE_API_TOKEN` يعيش في GitHub Secrets فقط** — لا يكتب في اي ملف. الى ان يضاف يتخطى العمل النشر بنجاح،
  وينشر بـ `npx wrangler@4 deploy` يدويا (Node 22 او احدث) من نسخة نظيفة على HEAD ثم يدفع الالتزام.
- **الالتزام:** `git add` لملفاتك انت فقط بمساراتها (لا `git add -A`)، ولا stash ولا checkout على ملفات مشتركة،
  و`git diff --cached` قبل كل التزام.
- **قبل اي نشر:** لا تشكيل في اي نص عربي (`grep -rlP "[\x{064B}-\x{0652}\x{0670}\x{0653}-\x{0655}]" --include="*.js" --include="*.html" --include="*.css" --include="*.md" .` يخرج فارغا)،
  والصفحات تقاس في متصفح على 375 و768 و1280، باللغات الاربع وفي المظهرين: بلا تجاوز للعرض وبلا اخطاء.
  (فحص التشكيل يحتاج grep من GNU، او بايثون.) ادوات الفحص تبقى على جهاز المطور ولا تدخل هذا المستودع العام.
- **بعد اي نشر:** تقرا الصفحات من النطاق الحي، وكل ملف ليس جزءا من الموقع (`worker.js`، `wrangler.toml`، `README.md`، `.github/`) يرد 404.
- **اي ملف او مجلد جديد في جذر المستودع ليس جزءا من الموقع** يضاف الى `.assetsignore` في الالتزام نفسه.

### الامان
- لا تغير `_headers` او `worker.js` بدون مراجعة — يحتويان على اعدادات امان (WAF، CSP، HSTS).
- `worker.js` يعمل لكل طلب لا يطابق ملفا من ملفات الموقع؛ الملفات نفسها تخدم مباشرة مع رؤوس `_headers`.

---

**النسخة:** 1.0
**آخر تحديث:** 2026-10-28
**الحالة:** ✅ Production Ready
