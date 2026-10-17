// Everything about Momen that appears across the site. Edit here, not in the pages.

const drive = (id: string) => `https://drive.google.com/file/d/${id}/view`;

export const site = {
  brand: 'Momen Zizo',
  fullName: 'Momen Abd Elhady',
  handle: 'momenzizo.visuals',
  email: 'momenzizo50@gmail.com',
  phone: '+971 54 535 8380',
  phoneHref: '+971545358380',
  instagram: 'https://www.instagram.com/momenzizo.visuals/',
  whatsapp: 'https://wa.me/971545358380',
  since: 2010,
  cv: drive('1dvg9OqHgFeIChXe6BQ6jzc0nPU2CjWjS'),
  portfolioPdf: drive('1PdaFTLpVFW5LUN2ix9FvoY2daob9ScPy'),
  driveFolder: 'https://drive.google.com/drive/folders/1Kh3WAcyo-3jT2U-Hd2LFvgY7DyMBshLS',
};

export const yearsActive = new Date().getFullYear() - site.since;

// Artists Momen has photographed on stage (from his CV).
export const artists = [
  'Tamer Hosny', 'Tamer Ashour', 'Hamaki', 'Bahaa Sultan', 'Ramy Sabry',
  'Ramy Gamal', 'Moustafa Hagag', 'Mahmoud El Esseily', 'Ahmed Sheba', 'Omar Kamal',
];

// Brands, agencies and events from his CV and Drive portfolio.
export const clients = [
  'Save in Gold', 'ADNOC', 'BIG 5', 'Dubai Derma', 'Jewellery & Bride Arabia',
  'Al Alamein Drama Festival', 'Arab Academy', 'Udjat Agency', 'Layer Agency',
  'Soul Media Production', 'Brightery', 'Wedding Studio',
];

export const gear = {
  camera: 'Sony A7 IV',
  lens: 'Sony 24–70 GM II',
  motion: 'DJI gimbal · DJI drone · DJI Mic',
  software: 'Premiere Pro · After Effects · Photoshop · Lightroom',
};
