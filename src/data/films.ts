// Videos live in Momen's Google Drive and play through Drive's player.
// `year` comes from the file dates on Drive; correct it if a project is from another year.

export type FilmType =
  | 'events' | 'medical' | 'products' | 'places' | 'restaurant' | 'social' | 'podcast' | 'drone';

export interface Film {
  id: string; // Google Drive file id
  title: string;
  type: FilmType;
  year: number;
  featured?: boolean;
}

// Filter order on the Videography page. Empty ones are hidden; drone films live on the Drone page.
export const filmCategories: FilmType[] = ['events', 'medical', 'products', 'places', 'restaurant', 'social', 'podcast'];

// Aerial footage over Palm Jumeirah (Drone page).
export const showreel: Film = {
  id: '1YOK8p4Ef-U_SyIvtgWqeYyHroLWuphBG', title: 'Palm Jumeirah', type: 'drone', year: 2026,
};

export const films: Film[] = [
  showreel,
  { id: '1c17WtmjV4_QF-aLxhLnfm_HXnP_8CXil', title: 'Jewellery & Bride Arabia', type: 'events', year: 2025, featured: true },
  { id: '15_vYDgulGrFjvuaL85mIedCYO3AZfDC1', title: 'One Billion', type: 'events', year: 2026, featured: true },
  { id: '1wXcexjl--CSbrt927DnLdlc1W6dPa7zp', title: 'Summit Gym', type: 'places', year: 2026, featured: true },
  { id: '1t2X8scpaWZYML8AqIvYHELTVnfrZprAU', title: 'Mena Capital Place', type: 'places', year: 2026, featured: true },
  { id: '1s8sKP9B0qa9lS_5AWKuz7WG25lNvZP2L', title: 'Save in Gold · Zodiac Necklace', type: 'products', year: 2026 },
  { id: '1Uvywfri6d464rRnXZcq0977CYHFxcVH8', title: 'Save in Gold · Gold Bars', type: 'products', year: 2026 },
  { id: '1-k_ZF-eSQUUdEgvo-4QqxkNuXSBhcrez', title: "Save in Gold · Valentine's Day", type: 'social', year: 2026 },
  { id: '1pfjqDar02O0_ehhVHHVIPGtA5MJpht-m', title: 'Save in Gold · Magic Bar', type: 'social', year: 2026 },
  { id: '1UKuMDRUuCZqhc_Zu6_kjb7ceU86Okgvq', title: 'Save in Gold · National Day Offer', type: 'social', year: 2025 },
  { id: '1Z3zQulc29IyIzixCgo2AoMH7qsR3qaCK', title: 'Karizma Podcast', type: 'podcast', year: 2025 },
  { id: '122YNiwKAlWxPH_t_tC7cgieHiMF5hV1O', title: 'Podcast Highlight', type: 'podcast', year: 2026 },
  { id: '1QVvjBH0pNM2X8gO5-gkcBqFCtAeHq_ge', title: 'Dr Shift', type: 'medical', year: 2025 },
  { id: '16iw09mokbuesImKMpSVLCO5Rmugqh8sX', title: 'A Plus Clinic', type: 'medical', year: 2024 },
  { id: '14C55YtXZ1MpwBlI9pcGQcb1r79V9Mpa9', title: 'Mango Talaat', type: 'restaurant', year: 2024 },
  { id: '1GBJSRTg9Wbtf9_Ye0s2djP0-NXIprpF9', title: 'Boba Spot', type: 'restaurant', year: 2022 },
  { id: '1IIxXfWiCwXxCZByM0xRZJEmKSSFCQPve', title: 'Arab Academy', type: 'events', year: 2024 },
  { id: '1QJ8Kj_oglNelYoMXpnajGg-GdBFFYkF6', title: 'EMA', type: 'events', year: 2024 },
  { id: '13pf8x5Z9sGpmzZzM4yXI2w1xSecAiRcg', title: 'Serena', type: 'places', year: 2024 },
  { id: '1nRSpTN6wgrXSoPWawkKu1h9Gyah4cY3L', title: 'Aerial Reel', type: 'drone', year: 2026 },
];

export const player = (id: string) => `https://drive.google.com/file/d/${id}/preview`;
export const watchUrl = (id: string) => `https://drive.google.com/file/d/${id}/view`;
export const poster = (id: string, w = 1280) => `https://drive.google.com/thumbnail?id=${id}&sz=w${w}`;
