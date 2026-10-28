// Everything about Momen that appears across the site. Edit here, not in the pages.

const drive = (id: string) => `https://drive.google.com/file/d/${id}/view`;

export const site = {
  brand: 'Momen Zizo',
  brandLine: 'Momen Zizo | Visuals',
  fullName: 'Momen Abd Elhady',
  handle: 'momenzizo.visuals',
  email: 'momenzizo50@gmail.com',
  phone: '+971 54 535 8380',
  phoneHref: '+971545358380',
  instagram: 'https://www.instagram.com/momenzizo.visuals/',
  behance: 'https://www.behance.net/momenzizo40',
  behance2: 'https://www.behance.net/momenabdel-hady',
  linkedin: 'https://www.linkedin.com/in/momen-abd-elhady/',
  whatsapp: 'https://api.whatsapp.com/send?phone=971545358380',
  since: 2010,
  cv: drive('1dvg9OqHgFeIChXe6BQ6jzc0nPU2CjWjS'),
  portfolioPdf: drive('1mm3PneR84inU_Te4UNeLSpCPtxGoB_k-'),
  driveFolder: 'https://drive.google.com/drive/folders/1Kh3WAcyo-3jT2U-Hd2LFvgY7DyMBshLS',
};

export const yearsActive = new Date().getFullYear() - site.since;

// Artists Momen has photographed on stage (from his CV).
export const artists = [
  'Tamer Hosny', 'Tamer Ashour', 'Hamaki', 'Bahaa Sultan', 'Ramy Sabry',
  'Ramy Gamal', 'Moustafa Hagag', 'Mahmoud El Esseily', 'Ahmed Sheba', 'Omar Kamal',
];

// Brands and events Momen has worked with (his list).
export const brands = [
  'Save In Gold', 'MenaCapital', 'ADNOC', 'Tarrad Development', 'ZEN Clinic', 'Solitaire Medical Center',
  'Karizma Clinic', 'BBlash Clinic', 'A Plus Clinic', 'Begad Hospital', 'Merz Aesthetics', 'Teoxane',
  'Boba Spot', 'Summit Gym', 'Cocomelon', 'Spacetoon', 'Tigris Gold', 'INZO', 'Chaihona', 'Mango Talaat',
  'La Pergola', 'Tableya Restaurant', 'Colizuem', 'Khaleej Times', 'Al Etihad News', 'Emarat Alyoum',
  'Alexandria University', 'Arab Academy', 'Multi Solution', 'UAE Flowers', 'Marseilia Beach',
  'Zaher Super Market', 'Kenan Restaurant', 'Rokn El Sultan Restaurant', 'Omaya Ice Cream',
  "Wallen's Caffe", 'Space Caffe', '1961 Caffe', 'Udjat Agency', 'Layer Agency', 'Brightery Agency',
  'Soul Media Production', 'Wedding Studio',
];

export const events = [
  'Big 5', 'Forex Expo', 'IFX Expo', 'One Billion', 'Jewellery & Bride Arabia', 'Dubai Derma', 'AMWC',
  'Entree Ramadan Tent', 'Al Alamein Festival', 'EMA',
];

export const socials = [
  { name: 'Instagram', handle: '@momenzizo.visuals', href: site.instagram },
  { name: 'Behance', handle: 'momenzizo40', href: site.behance },
  { name: 'Behance', handle: 'momenabdel-hady', href: site.behance2 },
  { name: 'LinkedIn', handle: 'momen-abd-elhady', href: site.linkedin },
];

export const equipment = [
  'Camera Sony A7 IV',
  'Sony 24-70 GM 2',
  'Sony 70-200 GM 2',
  'DJI Gimbal',
  'DJI Drone',
  'DJI Microphone',
  'Professional Lighting Equipment and Lighting accessories',
  'Tripods, Camera Support Equipment & Gimbal Support Equipment',
];

export const software = ['Adobe Premiere Pro', 'Adobe After Effects', 'DaVinci Resolve', 'Adobe Photoshop', 'Adobe Lightroom'];
