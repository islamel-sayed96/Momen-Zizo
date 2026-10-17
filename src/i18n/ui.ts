import type { Category } from '../data/photos';
import type { FilmType } from '../data/films';

export type Lang = 'en' | 'ar';
export const langs: Lang[] = ['en', 'ar'];

const base = import.meta.env.BASE_URL.replace(/\/$/, '');

/** Builds a site URL for a page key ('' = home) in a language. */
export function path(lang: Lang, page = '') {
  const p = page ? `${page}/` : '';
  return lang === 'en' ? `${base}/${p}` : `${base}/ar/${p}`;
}
export const asset = (file: string) => `${base}/${file}`;

type Strings = {
  dir: 'ltr' | 'rtl';
  nav: { work: string; films: string; about: string; contact: string };
  menu: string; close: string;
  langSwitch: string; themeDark: string; themeLight: string;
  skip: string;
  role: string; based: string; city: string; since: string;
  heroLede: string;
  ctaBook: string; ctaWork: string;
  reelLabel: string; reelPlay: string;
  stillsTitle: string; stillsLede: string; seeAllPhotos: string;
  filmsTitle: string; filmsLede: string; seeAllFilms: string;
  stageTitle: string; stageLede: string; alsoOnStage: string;
  trustedTitle: string;
  stats: { years: string; artists: string; countries: string; categories: string };
  servicesTitle: string;
  services: { title: string; text: string; items: string[] }[];
  contactTitle: [string, string]; contactLede: string;
  email: string; whatsapp: string; instagram: string; copy: string; copied: string;
  downloads: string; cv: string; portfolioPdf: string; driveFolder: string;
  photoPageTitle: string; photoPageLede: string; all: string;
  filmPageTitle: string; filmPageLede: string;
  aboutTitle: string; aboutLede: string; bio: string[];
  historyTitle: string; history: { years: string; role: string; place: string }[];
  kitTitle: string; kit: { camera: string; lens: string; motion: string; software: string };
  languagesTitle: string; languages: string;
  portraitNote: string;
  cats: Record<Category, string>;
  filmTypes: Record<FilmType, string>;
  watch: string; openDrive: string; prev: string; next: string;
  footerLine: string; rights: string;
  notFoundTitle: string; notFoundText: string; backHome: string;
  meta: {
    home: { title: string; description: string };
    photography: { title: string; description: string };
    films: { title: string; description: string };
    about: { title: string; description: string };
  };
};

export const ui: Record<Lang, Strings> = {
  en: {
    dir: 'ltr',
    nav: { work: 'Photography', films: 'Films', about: 'About', contact: 'Contact' },
    menu: 'Menu', close: 'Close',
    langSwitch: 'العربية', themeDark: 'Switch to dark theme', themeLight: 'Switch to light theme',
    skip: 'Skip to content',
    role: 'Photographer & Videographer', based: 'Based in', city: 'Dubai, UAE', since: 'Behind the camera since',
    heroLede: 'Photographer, videographer and editor with over 15 years behind the camera. Weddings, concerts, events, brands and aerial work across the UAE and Egypt, shot and edited from the first frame to the final cut.',
    ctaBook: 'Book a shoot', ctaWork: 'See the work',
    reelLabel: 'Showreel · Palm Jumeirah from above', reelPlay: 'Play showreel',
    stillsTitle: 'Selected stills', stillsLede: 'A few favourite frames from weddings, stages, yachts and kitchens.', seeAllPhotos: 'See all photography',
    filmsTitle: 'Selected films', filmsLede: 'Event films, brand videos and drone work, filmed and edited by Momen.', seeAllFilms: 'See all films',
    stageTitle: 'On stage with', stageLede: 'Concert photography for some of the biggest names in Arabic music.', alsoOnStage: 'Also on stage with',
    trustedTitle: 'Brands & events',
    stats: { years: 'Years behind the camera', artists: 'Artists photographed on stage', countries: 'Countries: UAE and Egypt', categories: 'Kinds of shoots' },
    servicesTitle: 'Services',
    services: [
      { title: 'Photography', text: 'Weddings, events, conferences, products, restaurants, real estate and yachts.', items: ['Lighting and camera setup on location', 'Selection, colour correction and retouching', 'High-res files for web and print'] },
      { title: 'Videography', text: 'Event films, brand videos, Reels, podcasts and concerts.', items: ['Sony A7 IV, gimbal and wireless audio', 'Horizontal films and vertical Reels', 'Aerial footage by drone'] },
      { title: 'Editing', text: 'Already have footage? Momen will finish it.', items: ['Video editing in Premiere Pro', 'Motion graphics in After Effects', 'Photo retouching in Photoshop & Lightroom'] },
    ],
    contactTitle: ["Let's make", 'something.'], contactLede: 'Tell Momen about your date, place and what you need, and he will get back to you with the details.',
    email: 'Email', whatsapp: 'WhatsApp', instagram: 'Instagram', copy: 'Copy', copied: 'Copied',
    downloads: 'Documents', cv: 'Download CV', portfolioPdf: 'Portfolio PDF', driveFolder: 'Full archive on Google Drive',
    photoPageTitle: 'Photography', photoPageLede: 'Weddings, concerts, events, yachts, food, products, places and clinics. Tap any photo to view it full size.', all: 'All',
    filmPageTitle: 'Films', filmPageLede: 'Event films, brand videos, podcasts and aerial work. Every video is filmed and edited by Momen.',
    aboutTitle: 'About', aboutLede: 'Behind the lens',
    bio: [
      "I'm Momen Abd Elhady, known as Momen Zizo. I've been working as a videographer, photographer and editor since 2010, and I care most about light, composition and the story inside a moment.",
      'I started in Alexandria, Egypt, and now work from Dubai for agencies, brands and private clients. I shoot weddings, conferences, concerts, products, restaurants, real estate and yachts, and I fly a drone for aerial photos and video.',
    ],
    historyTitle: 'Experience',
    history: [
      { years: '2025 – now', role: 'Videographer, photographer & editor', place: 'Save in Gold, UAE' },
      { years: '2025 – now', role: 'Freelance photographer & videographer', place: 'UAE' },
      { years: '2022 – 2024', role: 'Videographer & photographer', place: 'Layer Agency, Egypt' },
      { years: '2022 – 2023', role: 'Videographer & photographer', place: 'Soul Media Production, Egypt' },
      { years: '2022', role: "Bahaa Sultan's photographer", place: 'Egypt' },
      { years: '2020 – 2024', role: 'Videographer & photographer', place: 'Udjat Agency, Egypt & UAE' },
      { years: '2016 – 2021', role: 'Videographer, photographer & photo editor', place: 'Wedding Studio, Egypt' },
      { years: '2013 – 2017', role: 'Photographer & photo editor', place: 'Brightery Agency, Egypt' },
      { years: '2010 – 2012', role: 'Photographer & photo editor', place: 'Focus Team, Egypt' },
    ],
    kitTitle: 'Kit', kit: { camera: 'Camera', lens: 'Lens', motion: 'Motion & audio', software: 'Software' },
    languagesTitle: 'Languages', languages: 'Arabic (native) · English (very good)',
    portraitNote: 'Portrait coming soon',
    cats: { weddings: 'Weddings', concerts: 'Concerts', events: 'Events', yachts: 'Yachts', food: 'Food & Coffee', products: 'Products', places: 'Places', medical: 'Clinics' },
    filmTypes: { drone: 'Drone', event: 'Event', brand: 'Brand', podcast: 'Podcast' },
    watch: 'Watch', openDrive: 'Open on Google Drive ↗', prev: 'Previous', next: 'Next',
    footerLine: 'Photography · Videography · Editing', rights: 'All rights reserved.',
    notFoundTitle: 'Out of frame', notFoundText: "This page doesn't exist. The work is still here.", backHome: 'Back to home',
    meta: {
      home: { title: 'Momen Zizo · Photographer & Videographer in Dubai', description: 'Momen Abd Elhady (Momen Zizo) is a Dubai-based photographer, videographer and editor with 15+ years of experience in weddings, concerts, events, brands and drone work.' },
      photography: { title: 'Photography · Momen Zizo', description: 'Wedding, concert, event, yacht, food and product photography by Momen Zizo, a photographer based in Dubai, UAE.' },
      films: { title: 'Films · Momen Zizo', description: 'Event films, brand videos, podcasts and drone footage filmed and edited by Momen Zizo in Dubai and Egypt.' },
      about: { title: 'About · Momen Zizo', description: 'Momen Abd Elhady (Momen Zizo): experience, kit and CV of a Dubai-based photographer and videographer working since 2010.' },
    },
  },
  ar: {
    dir: 'rtl',
    nav: { work: 'التصوير', films: 'الفيديو', about: 'عنّي', contact: 'تواصل' },
    menu: 'القائمة', close: 'إغلاق',
    langSwitch: 'English', themeDark: 'الوضع الداكن', themeLight: 'الوضع الفاتح',
    skip: 'تخطَّ إلى المحتوى',
    role: 'مصوّر فوتوغرافي وفيديو', based: 'مقيم في', city: 'دبي، الإمارات', since: 'خلف الكاميرا منذ',
    heroLede: 'مصوّر فوتوغرافي ومصوّر فيديو ومونتير بخبرة تزيد عن 15 سنة. أفراح وحفلات ومؤتمرات وبراندات وتصوير جوي في الإمارات ومصر، من أول لقطة لحد آخر مونتاج.',
    ctaBook: 'احجز تصوير', ctaWork: 'شوف الأعمال',
    reelLabel: 'شوريل · نخلة جميرا من فوق', reelPlay: 'شغّل الشوريل',
    stillsTitle: 'صور مختارة', stillsLede: 'مجموعة من أحب اللقطات من الأفراح والمسارح واليخوت والمطاعم.', seeAllPhotos: 'كل الصور',
    filmsTitle: 'فيديوهات مختارة', filmsLede: 'فيديوهات إيفنتات وبراندات وتصوير جوي، تصوير ومونتاج مؤمن.', seeAllFilms: 'كل الفيديوهات',
    stageTitle: 'على المسرح مع', stageLede: 'تصوير حفلات لأكبر نجوم الغناء العربي.', alsoOnStage: 'وكمان على المسرح مع',
    trustedTitle: 'براندات وإيفنتات',
    stats: { years: 'سنة خلف الكاميرا', artists: 'فنانين صوّرهم على المسرح', countries: 'دولتين: الإمارات ومصر', categories: 'أنواع تصوير' },
    servicesTitle: 'الخدمات',
    services: [
      { title: 'تصوير فوتوغرافي', text: 'أفراح وإيفنتات ومؤتمرات ومنتجات ومطاعم وعقارات ويخوت.', items: ['تجهيز الإضاءة والكاميرا في الموقع', 'اختيار الصور وتصحيح الألوان والريتاتش', 'ملفات عالية الجودة للنشر والطباعة'] },
      { title: 'تصوير فيديو', text: 'فيديوهات إيفنتات وبراندات وريلز وبودكاست وحفلات.', items: ['Sony A7 IV مع جيمبال وصوت وايرلس', 'فيديوهات بالعرض وريلز بالطول', 'تصوير جوي بالدرون'] },
      { title: 'مونتاج', text: 'عندك فيديو متصوّر؟ مؤمن يكمّله.', items: ['مونتاج على Premiere Pro', 'موشن جرافيك على After Effects', 'ريتاتش صور على Photoshop وLightroom'] },
    ],
    contactTitle: ['يلا نعمل', 'حاجة حلوة.'], contactLede: 'قول لمؤمن على الميعاد والمكان واللي محتاجه، وهو هيرد عليك بالتفاصيل.',
    email: 'الإيميل', whatsapp: 'واتساب', instagram: 'إنستجرام', copy: 'نسخ', copied: 'اتنسخ',
    downloads: 'ملفات', cv: 'تحميل السي في', portfolioPdf: 'البورتفوليو PDF', driveFolder: 'الأرشيف الكامل على جوجل درايف',
    photoPageTitle: 'التصوير الفوتوغرافي', photoPageLede: 'أفراح وحفلات وإيفنتات ويخوت وأكل ومنتجات وأماكن وعيادات. دوس على أي صورة عشان تشوفها كبيرة.', all: 'الكل',
    filmPageTitle: 'الفيديو', filmPageLede: 'فيديوهات إيفنتات وبراندات وبودكاست وتصوير جوي. كل فيديو تصوير ومونتاج مؤمن.',
    aboutTitle: 'عنّي', aboutLede: 'ورا العدسة',
    bio: [
      'أنا مؤمن عبد الهادي، معروف باسم مؤمن زيزو. شغال مصوّر فيديو وفوتوغرافي ومونتير من سنة 2010، وأكتر حاجة بهتم بيها هي الإضاءة والتكوين والحكاية اللي جوه كل لحظة.',
      'بدأت في إسكندرية، ودلوقتي شغال من دبي مع وكالات وبراندات وعملاء أفراد. بصوّر أفراح ومؤتمرات وحفلات ومنتجات ومطاعم وعقارات ويخوت، وبطيّر درون للتصوير الجوي.',
    ],
    historyTitle: 'الخبرة',
    history: [
      { years: '2025 – الآن', role: 'مصوّر فيديو وفوتوغرافي ومونتير', place: 'Save in Gold، الإمارات' },
      { years: '2025 – الآن', role: 'مصوّر فيديو وفوتوغرافي فري لانس', place: 'الإمارات' },
      { years: '2022 – 2024', role: 'مصوّر فيديو وفوتوغرافي', place: 'Layer Agency، مصر' },
      { years: '2022 – 2023', role: 'مصوّر فيديو وفوتوغرافي', place: 'Soul Media Production، مصر' },
      { years: '2022', role: 'مصوّر الفنان بهاء سلطان', place: 'مصر' },
      { years: '2020 – 2024', role: 'مصوّر فيديو وفوتوغرافي', place: 'Udjat Agency، مصر والإمارات' },
      { years: '2016 – 2021', role: 'مصوّر فيديو وفوتوغرافي ومعدّل صور', place: 'Wedding Studio، مصر' },
      { years: '2013 – 2017', role: 'مصوّر فوتوغرافي ومعدّل صور', place: 'Brightery Agency، مصر' },
      { years: '2010 – 2012', role: 'مصوّر فوتوغرافي ومعدّل صور', place: 'Focus Team، مصر' },
    ],
    kitTitle: 'المعدات', kit: { camera: 'الكاميرا', lens: 'العدسة', motion: 'الحركة والصوت', software: 'البرامج' },
    languagesTitle: 'اللغات', languages: 'العربية (لغة أم) · الإنجليزية (جيد جداً)',
    portraitNote: 'الصورة الشخصية قريباً',
    cats: { weddings: 'أفراح', concerts: 'حفلات', events: 'إيفنتات', yachts: 'يخوت', food: 'أكل وقهوة', products: 'منتجات', places: 'أماكن', medical: 'عيادات' },
    filmTypes: { drone: 'درون', event: 'إيفنت', brand: 'براند', podcast: 'بودكاست' },
    watch: 'شاهد', openDrive: 'افتح على جوجل درايف ↗', prev: 'السابق', next: 'التالي',
    footerLine: 'تصوير فوتوغرافي · فيديو · مونتاج', rights: 'جميع الحقوق محفوظة.',
    notFoundTitle: 'خارج الكادر', notFoundText: 'الصفحة دي مش موجودة، بس الشغل لسه هنا.', backHome: 'ارجع للرئيسية',
    meta: {
      home: { title: 'مؤمن زيزو · مصوّر فوتوغرافي وفيديو في دبي', description: 'مؤمن عبد الهادي (مؤمن زيزو) مصوّر فوتوغرافي وفيديو ومونتير في دبي، بخبرة أكتر من 15 سنة في الأفراح والحفلات والإيفنتات والبراندات والتصوير الجوي.' },
      photography: { title: 'التصوير الفوتوغرافي · مؤمن زيزو', description: 'تصوير أفراح وحفلات وإيفنتات ويخوت وأكل ومنتجات بعدسة مؤمن زيزو، مصوّر في دبي.' },
      films: { title: 'الفيديو · مؤمن زيزو', description: 'فيديوهات إيفنتات وبراندات وبودكاست وتصوير جوي، تصوير ومونتاج مؤمن زيزو.' },
      about: { title: 'عن مؤمن زيزو', description: 'خبرة ومعدات والسي في بتاع مؤمن عبد الهادي (مؤمن زيزو)، مصوّر فوتوغرافي وفيديو في دبي من 2010.' },
    },
  },
};
