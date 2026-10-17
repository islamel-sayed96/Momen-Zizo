# Momen Zizo — Portfolio

موقع بورتفوليو لمؤمن عبد الهادي (Momen Zizo)، مصوّر فوتوغرافي وفيديو في دبي.
مبني بـ [Astro](https://astro.build) + [GSAP](https://gsap.com)، وبيطلع صفحات HTML جاهزة وسريعة.

- إنجليزي (الأساسي) على `/`، وعربي على `/ar/`
- الوضع الداكن هو الأساسي، ومعاه زرار للوضع الفاتح
- الصفحات: الرئيسية · Photography · Films · About

## التشغيل محلياً

```bash
npm install
npm run dev      # http://localhost:4321/Momen-Zizo/
npm run build    # يطلع الموقع في dist/
```

## النشر على GitHub Pages

مرة واحدة بس: **Settings › Pages › Source** اختار **GitHub Actions**.
بعد كده أي push على `main` بينشر الموقع تلقائياً على
`https://islamel-sayed96.github.io/Momen-Zizo/`.

لو اتربط دومين خاص: غيّر `site` و`base` في `astro.config.mjs` وسطر الـ Sitemap في `public/robots.txt`.

## التعديل

كل المحتوى في ملفات بيانات، مش جوه الصفحات:

| الملف | فيه إيه |
| --- | --- |
| `src/data/site.ts` | الاسم والتواصل ولينكات السي في والبورتفوليو PDF والعملاء والفنانين والمعدات |
| `src/data/photos.ts` | الصور (id من Google Drive + الفئة). `featured: true` تظهر في الرئيسية |
| `src/data/films.ts` | الفيديوهات (id من Google Drive) والشوريل |
| `src/i18n/ui.ts` | كل النصوص بالإنجليزي والعربي، وعناوين ووصف الـ SEO لكل صفحة |

الصور والفيديوهات بتتعرض من Google Drive مباشرة، فلازم الملفات تفضل متشاركة **Anyone with the link**.
