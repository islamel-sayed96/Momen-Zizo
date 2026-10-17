// Videos live in Momen's Google Drive and play through Drive's player.
// `year` comes from the file dates on Drive; correct it if a project is from another year.

export type FilmType = 'drone' | 'event' | 'brand' | 'podcast';

export interface Film {
  id: string; // Google Drive file id
  title: string;
  type: FilmType;
  year: number;
  featured?: boolean;
}

// The hero showreel: aerial footage over Palm Jumeirah.
export const showreel: Film = {
  id: '1YOK8p4Ef-U_SyIvtgWqeYyHroLWuphBG', title: 'Palm Jumeirah', type: 'drone', year: 2026,
};

export const films: Film[] = [
  showreel,
  { id: '1c17WtmjV4_QF-aLxhLnfm_HXnP_8CXil', title: 'Jewellery & Bride Arabia', type: 'event', year: 2025, featured: true },
  { id: '15_vYDgulGrFjvuaL85mIedCYO3AZfDC1', title: 'One Billion', type: 'brand', year: 2026, featured: true },
  { id: '1wXcexjl--CSbrt927DnLdlc1W6dPa7zp', title: 'Summit Gym', type: 'brand', year: 2026, featured: true },
  { id: '1t2X8scpaWZYML8AqIvYHELTVnfrZprAU', title: 'Mena Capital Place', type: 'brand', year: 2026, featured: true },
  { id: '1Z3zQulc29IyIzixCgo2AoMH7qsR3qaCK', title: 'Karizma Podcast', type: 'podcast', year: 2025 },
  { id: '1QVvjBH0pNM2X8gO5-gkcBqFCtAeHq_ge', title: 'Dr Shift', type: 'brand', year: 2025 },
  { id: '14C55YtXZ1MpwBlI9pcGQcb1r79V9Mpa9', title: 'Mango Talaat', type: 'brand', year: 2024 },
  { id: '1IIxXfWiCwXxCZByM0xRZJEmKSSFCQPve', title: 'Arab Academy', type: 'event', year: 2024 },
  { id: '13pf8x5Z9sGpmzZzM4yXI2w1xSecAiRcg', title: 'Serena', type: 'brand', year: 2024 },
  { id: '16iw09mokbuesImKMpSVLCO5Rmugqh8sX', title: 'A Plus', type: 'brand', year: 2024 },
  { id: '1QJ8Kj_oglNelYoMXpnajGg-GdBFFYkF6', title: 'EMA Contracting', type: 'event', year: 2024 },
  { id: '1GBJSRTg9Wbtf9_Ye0s2djP0-NXIprpF9', title: 'Boba Spot', type: 'brand', year: 2022 },
];

export const player = (id: string) => `https://drive.google.com/file/d/${id}/preview`;
export const watchUrl = (id: string) => `https://drive.google.com/file/d/${id}/view`;
export const poster = (id: string, w = 1280) => `https://drive.google.com/thumbnail?id=${id}&sz=w${w}`;
