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
  nav: { video: string; photo: string; drone: string; about: string; contact: string };
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
  brandsLabel: string; eventsLabel: string;
  servicesTitle: string;
  services: { title: string; text: string; items: string[] }[];
  contactTitle: [string, string]; contactLede: string; socialTitle: string;
  email: string; whatsapp: string; instagram: string; copy: string; copied: string;
  downloads: string; cv: string; portfolioPdf: string; driveFolder: string;
  photoPageTitle: string; photoPageLede: string; all: string;
  filmPageTitle: string; filmPageLede: string;
  dronePageTitle: string; dronePageLede: string;
  aboutTitle: string; aboutLede: string; bio: string[];
  historyTitle: string; history: { years: string; role: string; place: string }[];
  equipmentTitle: string; softwareTitle: string;
  languagesTitle: string; languages: string;
  portraitNote: string;
  cats: Record<Category, string>; realEstate: string; soon: string;
  contactUs: string; call: string;
  filmTypes: Record<FilmType, string>;
  watch: string; openDrive: string; prev: string; next: string;
  footerLine: string; rights: string;
  notFoundTitle: string; notFoundText: string; backHome: string;
  meta: {
    home: { title: string; description: string };
    photography: { title: string; description: string };
    films: { title: string; description: string };
    drone: { title: string; description: string };
    about: { title: string; description: string };
  };
};

export const ui: Record<Lang, Strings> = {
  en: {
    dir: 'ltr',
    nav: { video: 'Videography', photo: 'Photography', drone: 'Drone', about: 'About', contact: 'Contact Us' },
    menu: 'Menu', close: 'Close',
    langSwitch: 'العربية', themeDark: 'Switch to dark theme', themeLight: 'Switch to light theme',
    skip: 'Skip to content',
    role: 'Videographer | Photographer | Filmmaker | Drone Pilot', based: 'Based in', city: 'Dubai, UAE', since: 'Behind the camera since',
    heroLede: 'I am a Videographer, Photographer, and Editor with over 15 years of professional experience in creating high-quality visual content.',
    ctaBook: 'Book a shoot', ctaWork: 'Explore the work',
    reelLabel: 'Intro · Momen Zizo | Visuals', reelPlay: 'Play showreel',
    stillsTitle: 'Selected stills', stillsLede: 'A few favourite frames from Events, Conferences, Concerts, Medical, Products, Weddings, Parties, Places, Restaurant.', seeAllPhotos: 'See all photography',
    filmsTitle: 'Selected films', filmsLede: 'A few favourite frames from Events, Conferences, Concerts, Medical, Products, Weddings, Parties, Places, Restaurant.', seeAllFilms: 'See all videography',
    stageTitle: 'On stage with', stageLede: 'Concert photography for some of the biggest names in Arabic music.', alsoOnStage: 'Also on stage with',
    trustedTitle: 'Brands & events', brandsLabel: 'Brands', eventsLabel: 'Events',
    stats: { years: 'Years behind the camera', artists: 'Artists photographed on stage', countries: 'Countries: UAE and Egypt', categories: 'Kinds of shoots' },
    servicesTitle: 'Services',
    services: [
      { title: 'Videography', text: 'Professional video production for events, brands, commercials, and social media, creating engaging visual stories that bring every moment to life.', items: ['Event & Concert Videography', 'Commercial & Promotional Videos', 'Corporate & Conference Videos', 'Social Media Reels & Short-Form Content', 'Product & Jewelry Videos', 'Wedding & Special Event Films', 'Real Estate Videography', 'Cinematic Travel Films'] },
      { title: 'Photography', text: 'Professional photography that captures moments, details, and products through creative composition and a distinctive visual style.', items: ['Event & Concert Photography', 'Corporate & Conference Photography', 'Fashion & Portrait Photography', 'Product & Jewelry Photography', 'Wedding & Engagement Photography', 'Graduation & Party Photography', 'Real Estate Photography', 'Lifestyle & Brand Photography'] },
      { title: 'Drone Filming', text: 'Cinematic aerial photography and videography that deliver unique perspectives and elevate projects with stunning overhead visuals.', items: ['Aerial Videography', 'Aerial Photography', 'Real Estate & Property Showcases', 'Events & Outdoor Productions', 'Travel & Destination Films', 'Commercial & Promotional Drone Footage', 'Establishing Shots & Cinematic Aerial Sequences'] },
      { title: 'Video Editing & Post-Production', text: 'Video Editing · Color Grading · Sound Design · Social Media Cutdowns', items: ['Professional Video Editing', 'Cinematic Color Grading', 'Sound Design & Audio Enhancement', 'Social Media Reels & Short-Form Edits', 'Video Transitions & Visual Enhancements'] },
      { title: 'Photo Editing & Retouching', text: 'Color Correction · Portrait Retouching · Product Retouching · Image Enhancement', items: ['Professional Photo Editing', 'Color Correction & Color Grading', 'Portrait Retouching & Skin Refinement', 'Product & Jewelry Retouching', 'Background Removal & Replacement', 'Image Enhancement & Detail Refinement'] },
    ],
    contactTitle: ["Let's make", 'something amazing.'], contactLede: 'Tell Momen about your date, place and what you need, and he will get back to you with the details.',
    socialTitle: 'Social media', contactUs: 'Contact Us', call: 'Call',
    email: 'Email', whatsapp: 'WhatsApp', instagram: 'Instagram', copy: 'Copy', copied: 'Copied',
    downloads: 'Documents', cv: 'Download CV', portfolioPdf: 'Portfolio PDF', driveFolder: 'Full archive on Google Drive',
    photoPageTitle: 'Photography', photoPageLede: 'Events, Conferences, Concerts, Medical, Products, Weddings, Parties, Places, Restaurant and Real Estate <span class="soon">(soon)</span>. Tap any photo to view it full size.', all: 'All',
    filmPageTitle: 'Videography', filmPageLede: 'Events, Medical, Products, Places, Restaurant, Social media, Podcast and Real Estate <span class="soon">(soon)</span>. Every video is filmed and edited by Momen.',
    dronePageTitle: 'Drone', dronePageLede: 'Aerial footage across the UAE, filmed by Momen as a drone pilot.',
    aboutTitle: 'About', aboutLede: 'Behind the lens',
    bio: [
      'I have been working as a Videographer, Photographer, Video Editor, Photo Editor and Content Creator since 2010.',
      'I am a passionate and creative videographer and photographer with a keen eye for detail and a commitment to capturing the essence of every moment. With 15 years of experience, I have developed a strong technical proficiency in both photography and videography, specializing in Conferences, Fashion, Parties, Graduation Parties, Weddings, Products, Events, Trips and Real Estate. My work reflects a deep understanding of lighting, composition, and storytelling, allowing me to deliver visually compelling content that resonates with audiences.',
    ],
    historyTitle: 'Experience',
    history: [
      { years: '2025 – now', role: 'Videographer, photographer & editor', place: 'Save in Gold, UAE' },
      { years: '2025 – now', role: 'Videographer, Photographer & Editor', place: 'Freelance, UAE' },
      { years: '2022 – 2024', role: 'Videographer & photographer', place: 'Layer Agency, Egypt' },
      { years: '2022 – 2023', role: 'Videographer & photographer', place: 'Soul Media Production, Egypt' },
      { years: '2022', role: 'Photographer & Photo Editor', place: 'Bahaa Sultan, Egypt' },
      { years: '2020 – 2024', role: 'Videographer & photographer', place: 'Udjat Agency, Egypt & UAE' },
      { years: '2016 – 2021', role: 'Videographer, photographer & photo editor', place: 'Wedding Studio, Egypt' },
      { years: '2013 – 2017', role: 'Photographer & photo editor', place: 'Brightery Agency, Egypt' },
      { years: '2010 – 2012', role: 'Photographer & photo editor', place: 'Focus Team, Egypt' },
    ],
    equipmentTitle: 'Equipment', softwareTitle: 'Software',
    languagesTitle: 'Languages', languages: 'Arabic (native) · English (very good)',
    portraitNote: 'Portrait coming soon',
    cats: { events: 'Events', conferences: 'Conferences', concerts: 'Concerts', medical: 'Medical', products: 'Products', weddings: 'Weddings', parties: 'Parties', places: 'Places', food: 'Restaurant' }, realEstate: 'Real Estate', soon: 'soon',
    filmTypes: { events: 'Events', medical: 'Medical', products: 'Products', places: 'Places', restaurant: 'Restaurant', social: 'Social media', podcast: 'Podcast', drone: 'Drone' },
    watch: 'Watch', openDrive: 'Open on Google Drive ↗', prev: 'Previous', next: 'Next',
    footerLine: 'Videography · Photography · Editing', rights: 'All rights reserved.',
    notFoundTitle: 'Out of frame', notFoundText: "This page doesn't exist. The work is still here.", backHome: 'Back to home',
    meta: {
      home: { title: 'Momen Zizo | Visuals · Videographer & Photographer in Dubai', description: 'Momen Abd Elhady (Momen Zizo) is a Dubai-based videographer, photographer, filmmaker and drone pilot with 15+ years of experience in events, concerts, weddings and brands.' },
      photography: { title: 'Photography · Momen Zizo', description: 'Wedding, concert, event, yacht, food and product photography by Momen Zizo, a photographer based in Dubai, UAE.' },
      films: { title: 'Videography · Momen Zizo', description: 'Event films, brand videos and podcasts filmed and edited by Momen Zizo, a videographer in Dubai.' },
      drone: { title: 'Drone · Momen Zizo', description: 'Drone and aerial videography in Dubai by Momen Zizo, videographer and drone pilot.' },
      about: { title: 'About · Momen Zizo', description: 'Momen Abd Elhady (Momen Zizo): experience, equipment and CV of a Dubai-based videographer and photographer working since 2010.' },
    },
  },
  ar: {
    dir: 'rtl',
    nav: { video: 'الفيديو', photo: 'التصوير', drone: 'الدرون', about: 'عنّي', contact: 'تواصل معنا' },
    menu: 'القائمة', close: 'إغلاق',
    langSwitch: 'English', themeDark: 'الوضع الداكن', themeLight: 'الوضع الفاتح',
    skip: 'تخطَّ إلى المحتوى',
    role: 'مصوّر فيديو | مصوّر فوتوغرافي | صانع أفلام | طيّار درون', based: 'مقيم في', city: 'دبي، الإمارات', since: 'خلف الكاميرا منذ',
    heroLede: 'أنا مصوّر فيديو ومصوّر فوتوغرافي ومونتير بخبرة مهنية تزيد عن 15 سنة في صناعة محتوى بصري عالي الجودة.',
    ctaBook: 'احجز تصوير', ctaWork: 'استكشف الأعمال',
    reelLabel: 'انترو · مؤمن زيزو | فيجوالز', reelPlay: 'شغّل الشوريل',
    stillsTitle: 'صور مختارة', stillsLede: 'مجموعة من أحب اللقطات من إيفنتات، مؤتمرات، حفلات، طبي، منتجات، أفراح، حفلات خاصة، أماكن، مطاعم.', seeAllPhotos: 'كل الصور',
    filmsTitle: 'فيديوهات مختارة', filmsLede: 'مجموعة من أحب اللقطات من إيفنتات، مؤتمرات، حفلات، طبي، منتجات، أفراح، حفلات خاصة، أماكن، مطاعم.', seeAllFilms: 'كل الفيديوهات',
    stageTitle: 'على المسرح مع', stageLede: 'تصوير حفلات لأكبر نجوم الغناء العربي.', alsoOnStage: 'وكمان على المسرح مع',
    trustedTitle: 'براندات وإيفنتات', brandsLabel: 'براندات', eventsLabel: 'إيفنتات',
    stats: { years: 'سنة خلف الكاميرا', artists: 'فنانين صوّرهم على المسرح', countries: 'دولتين: الإمارات ومصر', categories: 'أنواع تصوير' },
    servicesTitle: 'الخدمات',
    services: [
      { title: 'تصوير الفيديو', text: 'إنتاج فيديو احترافي للإيفنتات والبراندات والإعلانات والسوشيال ميديا، بقصص بصرية جذابة بتخلي كل لحظة عايشة.', items: ['تصوير فيديو الإيفنتات والحفلات', 'فيديوهات إعلانية وترويجية', 'فيديوهات الشركات والمؤتمرات', 'ريلز ومحتوى قصير للسوشيال ميديا', 'فيديوهات المنتجات والمجوهرات', 'أفلام الأفراح والمناسبات الخاصة', 'تصوير فيديو العقارات', 'أفلام سفر سينمائية'] },
      { title: 'التصوير الفوتوغرافي', text: 'تصوير احترافي بيلتقط اللحظات والتفاصيل والمنتجات بتكوين مبدع وأسلوب بصري مميز.', items: ['تصوير الإيفنتات والحفلات', 'تصوير الشركات والمؤتمرات', 'تصوير الفاشون والبورتريه', 'تصوير المنتجات والمجوهرات', 'تصوير الأفراح والخطوبة', 'تصوير حفلات التخرج والحفلات الخاصة', 'تصوير العقارات', 'تصوير لايف ستايل وبراندات'] },
      { title: 'التصوير بالدرون', text: 'تصوير جوي فوتوغرافي وفيديو بشكل سينمائي، بيقدّم زوايا مختلفة ويرفع مستوى أي مشروع بلقطات مبهرة من فوق.', items: ['تصوير فيديو جوي', 'تصوير فوتوغرافي جوي', 'عرض العقارات والمشروعات', 'الإيفنتات والإنتاج الخارجي', 'أفلام السفر والوجهات السياحية', 'لقطات درون إعلانية وترويجية', 'لقطات افتتاحية ومشاهد جوية سينمائية'] },
      { title: 'مونتاج الفيديو وما بعد الإنتاج', text: 'مونتاج · تلوين · هندسة صوت · نسخ قصيرة للسوشيال ميديا', items: ['مونتاج فيديو احترافي', 'تلوين سينمائي', 'هندسة صوت وتحسين الصوت', 'مونتاج ريلز ومحتوى قصير للسوشيال ميديا', 'ترانزيشنز وتحسينات بصرية'] },
      { title: 'تعديل الصور والريتاتش', text: 'تصحيح ألوان · ريتاتش بورتريه · ريتاتش منتجات · تحسين الصور', items: ['تعديل صور احترافي', 'تصحيح وتلوين الألوان', 'ريتاتش البورتريه وتنعيم البشرة', 'ريتاتش المنتجات والمجوهرات', 'إزالة وتغيير الخلفية', 'تحسين الصور وإبراز التفاصيل'] },
    ],
    contactTitle: ['يلا نعمل', 'حاجة مميزة.'], contactLede: 'قول لمؤمن على الميعاد والمكان واللي محتاجه، وهو هيرد عليك بالتفاصيل.',
    socialTitle: 'السوشيال ميديا', contactUs: 'تواصل معنا', call: 'اتصال',
    email: 'الإيميل', whatsapp: 'واتساب', instagram: 'إنستجرام', copy: 'نسخ', copied: 'اتنسخ',
    downloads: 'ملفات', cv: 'تحميل السي في', portfolioPdf: 'البورتفوليو PDF', driveFolder: 'الأرشيف الكامل على جوجل درايف',
    photoPageTitle: 'التصوير الفوتوغرافي', photoPageLede: 'إيفنتات، مؤتمرات، حفلات، طبي، منتجات، أفراح، حفلات خاصة، أماكن، مطاعم وعقارات <span class="soon">(قريباً)</span>. دوس على أي صورة عشان تشوفها كبيرة.', all: 'الكل',
    filmPageTitle: 'تصوير الفيديو', filmPageLede: 'إيفنتات، طبي، منتجات، أماكن، مطاعم، سوشيال ميديا، بودكاست وعقارات <span class="soon">(قريباً)</span>. كل فيديو تصوير ومونتاج مؤمن.',
    dronePageTitle: 'الدرون', dronePageLede: 'تصوير جوي في الإمارات، بعدسة مؤمن كطيّار درون.',
    aboutTitle: 'عنّي', aboutLede: 'ورا العدسة',
    bio: [
      'شغال مصوّر فيديو ومصوّر فوتوغرافي ومونتير فيديو ومعدّل صور وصانع محتوى من سنة 2010.',
      'أنا مصوّر فيديو وفوتوغرافي شغوف ومبدع، بهتم بأدق التفاصيل وبحرص إني ألتقط روح كل لحظة. خلال 15 سنة خبرة طورت مهارة تقنية قوية في التصوير الفوتوغرافي والفيديو، ومتخصص في المؤتمرات والفاشون والحفلات وحفلات التخرج والأفراح والمنتجات والإيفنتات والرحلات والعقارات. شغلي بيعكس فهم عميق للإضاءة والتكوين والحكي البصري، وده بيخليني أقدّم محتوى بصري مؤثر بيوصل للناس.',
    ],
    historyTitle: 'الخبرة',
    history: [
      { years: '2025 – الآن', role: 'مصوّر فيديو وفوتوغرافي ومونتير', place: 'Save in Gold، الإمارات' },
      { years: '2025 – الآن', role: 'مصوّر فيديو وفوتوغرافي ومونتير', place: 'فري لانس، الإمارات' },
      { years: '2022 – 2024', role: 'مصوّر فيديو وفوتوغرافي', place: 'Layer Agency، مصر' },
      { years: '2022 – 2023', role: 'مصوّر فيديو وفوتوغرافي', place: 'Soul Media Production، مصر' },
      { years: '2022', role: 'مصوّر فوتوغرافي ومعدّل صور', place: 'بهاء سلطان، مصر' },
      { years: '2020 – 2024', role: 'مصوّر فيديو وفوتوغرافي', place: 'Udjat Agency، مصر والإمارات' },
      { years: '2016 – 2021', role: 'مصوّر فيديو وفوتوغرافي ومعدّل صور', place: 'Wedding Studio، مصر' },
      { years: '2013 – 2017', role: 'مصوّر فوتوغرافي ومعدّل صور', place: 'Brightery Agency، مصر' },
      { years: '2010 – 2012', role: 'مصوّر فوتوغرافي ومعدّل صور', place: 'Focus Team، مصر' },
    ],
    equipmentTitle: 'المعدات', softwareTitle: 'البرامج',
    languagesTitle: 'اللغات', languages: 'العربية (لغة أم) · الإنجليزية (جيد جداً)',
    portraitNote: 'الصورة الشخصية قريباً',
    cats: { events: 'إيفنتات', conferences: 'مؤتمرات', concerts: 'حفلات', medical: 'طبي', products: 'منتجات', weddings: 'أفراح', parties: 'حفلات خاصة', places: 'أماكن', food: 'مطاعم' }, realEstate: 'عقارات', soon: 'قريباً',
    filmTypes: { events: 'إيفنتات', medical: 'طبي', products: 'منتجات', places: 'أماكن', restaurant: 'مطاعم', social: 'سوشيال ميديا', podcast: 'بودكاست', drone: 'درون' },
    watch: 'شاهد', openDrive: 'افتح على جوجل درايف ↗', prev: 'السابق', next: 'التالي',
    footerLine: 'فيديو · تصوير فوتوغرافي · مونتاج', rights: 'جميع الحقوق محفوظة.',
    notFoundTitle: 'خارج الكادر', notFoundText: 'الصفحة دي مش موجودة، بس الشغل لسه هنا.', backHome: 'ارجع للرئيسية',
    meta: {
      home: { title: 'مؤمن زيزو | فيجوالز · مصوّر فيديو وفوتوغرافي في دبي', description: 'مؤمن عبد الهادي (مؤمن زيزو) مصوّر فوتوغرافي وفيديو ومونتير في دبي، بخبرة أكتر من 15 سنة في الأفراح والحفلات والإيفنتات والبراندات والتصوير الجوي.' },
      photography: { title: 'التصوير الفوتوغرافي · مؤمن زيزو', description: 'تصوير أفراح وحفلات وإيفنتات ويخوت وأكل ومنتجات بعدسة مؤمن زيزو، مصوّر في دبي.' },
      films: { title: 'تصوير الفيديو · مؤمن زيزو', description: 'فيديوهات إيفنتات وبراندات وبودكاست، تصوير ومونتاج مؤمن زيزو في دبي.' },
      drone: { title: 'الدرون · مؤمن زيزو', description: 'تصوير جوي بالدرون في دبي بعدسة مؤمن زيزو، مصوّر فيديو وطيّار درون.' },
      about: { title: 'عن مؤمن زيزو', description: 'خبرة ومعدات والسي في بتاع مؤمن عبد الهادي (مؤمن زيزو)، مصوّر فوتوغرافي وفيديو في دبي من 2010.' },
    },
  },
};
