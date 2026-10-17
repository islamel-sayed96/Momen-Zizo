# Momen Zizo — Portfolio

موقع بورتفوليو لمؤمن عبد الهادي (Momen Zizo)، مصوّر فوتوغرافي وفيديو في دبي.
مبني بـ [Astro](https://astro.build) + [GSAP](https://gsap.com)، وبيطلع صفحات HTML جاهزة وسريعة.

- إنجليزي (الأساسي) على `/`، وعربي على `/ar/`
- الوضع الداكن هو الأساسي، ومعاه زرار للوضع الفاتح
- الصفحات: الرئيسية · Photography · Films · About

## التشغيل محلياً

```bash
npm install
npm run dev      # http://localhost:4321/
npm run build    # يطلع الموقع الجاهز في dist/
```

## النشر على Hostinger

Hostinger بينسخ المستودع زي ما هو في `public_html` ومش بيعمل build، عشان كده:

- الموقع الجاهز موجود في فولدر `dist/` ومرفوع على المستودع.
- ملف `.htaccess` اللي في الروت بيوجّه كل الطلبات لـ `dist/`.
- أي تعديل في `src/` أو `public/` بيتعمله build تلقائي من GitHub Actions، و`dist/` الجديد بيترفع لوحده.

لما يبقى فيه دومين: حطه في `SITE_URL` في `astro.config.mjs`، وده بيشغّل الـ canonical والـ sitemap.

## التعديل

كل المحتوى في ملفات بيانات، مش جوه الصفحات:

| الملف | فيه إيه |
| --- | --- |
| `src/data/site.ts` | الاسم والتواصل ولينكات السي في والبورتفوليو PDF والعملاء والفنانين والمعدات |
| `src/data/photos.ts` | الصور (id من Google Drive + الفئة). `featured: true` تظهر في الرئيسية |
| `src/data/films.ts` | الفيديوهات (id من Google Drive) والشوريل |
| `src/i18n/ui.ts` | كل النصوص بالإنجليزي والعربي، وعناوين ووصف الـ SEO لكل صفحة |

الصور والفيديوهات بتتعرض من Google Drive مباشرة، فلازم الملفات تفضل متشاركة **Anyone with the link**.
