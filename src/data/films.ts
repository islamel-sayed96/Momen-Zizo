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
  // Events
  { id: '1c17WtmjV4_QF-aLxhLnfm_HXnP_8CXil', title: 'Jewellery & Bride Arabia', type: 'events', year: 2025, featured: true },
  { id: '15_vYDgulGrFjvuaL85mIedCYO3AZfDC1', title: 'One Billion', type: 'events', year: 2026, featured: true },
  { id: '1DGAdBLEe6RUAIMYYvWzlWHQwNvttQPeD', title: 'Event Coverage', type: 'events', year: 2025 },
  { id: '1f073nbrIhAu4-gXHmQTJR0cu08h_GEYn', title: 'Event Day 3', type: 'events', year: 2026 },
  // Medical
  { id: '1s4O_GgORIsy7W7BXMWyh0q0CXxNtcqDN', title: 'Clinic Model Shoot', type: 'medical', year: 2026 },
  { id: '1F-eKd-m3-HbtlaYufx2BTCyuwIqPmX2X', title: 'Client Story', type: 'medical', year: 2024 },
  { id: '12I6Meki6DABRZPVwwhDWOfuNKg8JSvrl', title: 'Client Session', type: 'medical', year: 2024 },
  // Products
  { id: '17aKFmyX9AEAfUy6aSJtUU8nmgeSGJnnY', title: 'Save in Gold · Ayat Al Kursi', type: 'products', year: 2026 },
  { id: '1s8sKP9B0qa9lS_5AWKuz7WG25lNvZP2L', title: 'Save in Gold · Zodiac Necklace', type: 'products', year: 2026 },
  { id: '1Uvywfri6d464rRnXZcq0977CYHFxcVH8', title: 'Save in Gold · Gold Bars', type: 'products', year: 2026 },
  { id: '15MM3oLq7_Q9qm-Z2_pbRwNTg9wcKsMtE', title: 'Save in Gold · Silver Launch', type: 'products', year: 2026 },
  { id: '1hDjceoMoTNHqVzksLcskXyFxunYMKtpw', title: 'Save in Gold · Zodiac Bars', type: 'products', year: 2026 },
  { id: '1-k_ZF-eSQUUdEgvo-4QqxkNuXSBhcrez', title: "Save in Gold · Valentine's Day", type: 'products', year: 2026 },
  // Places
  { id: '1t2X8scpaWZYML8AqIvYHELTVnfrZprAU', title: 'Mena Capital Place', type: 'places', year: 2026, featured: true },
  { id: '1jGZV2hqvxEUosWUVGI8iyqxO8zOHY9y6', title: 'Place Tour', type: 'places', year: 2025 },
  { id: '1HwAsfdb3yTZn-2zhlRsgoDPxKyNYFRw8', title: 'Colizuem', type: 'places', year: 2024 },
  { id: '13WTjOp94EpbWrRgPWDWKAAfuUOfaccK1', title: 'Chaihona', type: 'places', year: 2024 },
  { id: '1Bw18k7FBZL78pyx9EBJEwUwcTXLg9m5b', title: 'Save in Gold · Kiosk', type: 'places', year: 2025 },
  { id: '1wXcexjl--CSbrt927DnLdlc1W6dPa7zp', title: 'Summit Gym', type: 'places', year: 2026, featured: true },
  { id: '13pf8x5Z9sGpmzZzM4yXI2w1xSecAiRcg', title: 'Serena', type: 'places', year: 2024 },
  // Restaurant
  { id: '14C55YtXZ1MpwBlI9pcGQcb1r79V9Mpa9', title: 'Mango Talaat', type: 'restaurant', year: 2024 },
  { id: '1GBJSRTg9Wbtf9_Ye0s2djP0-NXIprpF9', title: 'Boba Spot', type: 'restaurant', year: 2022 },
  { id: '1nHylqSd22hWvyUk9_ymJ3etLPfl3TCqU', title: 'Restaurant Reel', type: 'restaurant', year: 2024 },
  // Social media
  { id: '1UKuMDRUuCZqhc_Zu6_kjb7ceU86Okgvq', title: 'Save in Gold · National Day Offer', type: 'social', year: 2025 },
  { id: '1FSV0ND2YIFVkBZi2tsV-hwd-XD_E0k0W', title: 'Save in Gold · Kate', type: 'social', year: 2026 },
  { id: '1NbPz79PFDoRvhlSiGe4Rn5HWKklZgPWO', title: 'Save in Gold · Scan Bar', type: 'social', year: 2026 },
  { id: '1xBWUCyEbvfiH_qw0r6Ubh1hpSidqdo1X', title: 'Save in Gold · Reel 2', type: 'social', year: 2026 },
  { id: '1jVx-wvO9iUVuhoiXRO7BHjv8yKme9pLp', title: 'Save in Gold · Reel 4', type: 'social', year: 2026 },
  { id: '1O_ct3R6VffI1V5MXrx8Z_cpmsV460R8h', title: 'Save in Gold · Widad Silver', type: 'social', year: 2026 },
  { id: '1ux_HU-PSJyd2C7M9sduCHOBMnnG4kKE6', title: 'Save in Gold · World Cup', type: 'social', year: 2026 },
  { id: '1Ip3tlUzT2y3ziFGJWQpIpET2b_hy0dSn', title: 'Save in Gold · Yara', type: 'social', year: 2026 },
  // Podcast
  { id: '1Z3zQulc29IyIzixCgo2AoMH7qsR3qaCK', title: 'Karizma Podcast', type: 'podcast', year: 2025 },
  { id: '1_iQbCCj1ktywRkrQWvGbvSZgk6k2nFBX', title: 'Podcast Episode 1', type: 'podcast', year: 2026 },
  { id: '17cAMs5NmAB-547EsFyh6sdEnL7_iFzlp', title: 'Podcast Episode 2', type: 'podcast', year: 2026 },
  // Drone
  { id: '1nRSpTN6wgrXSoPWawkKu1h9Gyah4cY3L', title: 'Aerial Reel', type: 'drone', year: 2026 },
];

export const player = (id: string) => `https://drive.google.com/file/d/${id}/preview`;
export const watchUrl = (id: string) => `https://drive.google.com/file/d/${id}/view`;
export const poster = (id: string, w = 1280) => `https://drive.google.com/thumbnail?id=${id}&sz=w${w}`;
