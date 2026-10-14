# Momen Zizo — Portfolio

موقع بورتفوليو لمؤمن زيزو (تصوير فوتوغرافي وفيديو). صفحة واحدة: `index.html`، من غير أي build أو مكتبات.

## تشغيله

افتح `index.html` في المتصفح مباشرة، أو انشره على GitHub Pages:
Settings › Pages › Source: `Deploy from a branch` › Branch: `main` / `(root)`.

## التعديل

كل بيانات العميل موجودة في أول الـ `<script>` في `index.html`:

- `CLIENT`: الاسم، المدينة، الإيميل، الواتساب، الإنستجرام، ورقم فيديو الشوريل على Vimeo.
- `PHOTOS`: الصور. حالياً بتتعرض من Google Drive بالـ id بتاعها في `drive` (لازم الملف يكون متشارك Anyone with the link). عشان تستضيف صورة في المستودع نفسه، حط مسارها في `src` (مثلاً `assets/photos/weddings-01.jpg`) وشيل `drive`.
- `FILMS`: الأفلام. حط رقم فيديو Vimeo في `vimeo` أو id الدرايف في `drive`. Vimeo أسرع وأوضح في التشغيل.

الصور بتترفع في فولدر `assets/photos/`.

## الأقسام

Showreel · Stills (جاليري بفلاتر وعرض مكبّر) · Films · Services · About · Clients · Contact
