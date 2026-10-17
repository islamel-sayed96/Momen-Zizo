// Photos live in Momen's Google Drive (shared as "Anyone with the link").
// `id` is the Drive file id. `featured` photos appear on the home page.

export type Category =
  | 'weddings' | 'concerts' | 'events' | 'yachts'
  | 'food' | 'products' | 'places' | 'medical';

export interface Photo {
  id: string;
  cat: Category;
  label?: string; // event or artist name
  featured?: boolean;
}

export const categories: Category[] = [
  'weddings', 'concerts', 'events', 'yachts', 'food', 'products', 'places', 'medical',
];

export const photos: Photo[] = [
  { id: '1UwQ2Ec8V4j5MXAqRALyOEkO4dFDcag6c', cat: 'weddings', featured: true },
  { id: '1eiQigVdBLNiF2fP0vUWXt_0cASA96yiV', cat: 'concerts', label: 'Tamer Hosny', featured: true },
  { id: '1sQYEZVf4KwkZSxJ0tHGkHIkDaDm0g40X', cat: 'yachts', featured: true },
  { id: '1PPnVOO8IAYSA5kiQqKWYlwo0Ef9SAmuM', cat: 'events', label: 'Dubai Derma', featured: true },
  { id: '1t8Ez7lGPkXRU0xc279BKLVL47JeK0Xf6', cat: 'food', featured: true },
  { id: '12RUmOGUKBgAga65b4tuwglq8_yhMN__5', cat: 'concerts', label: 'Tamer Ashour', featured: true },
  { id: '1O3japVopfFIfx05riA3q5-vA5lvdf4bI', cat: 'weddings', featured: true },
  { id: '1QYDOhq25QujJyxFTmfusp3R1CxDnABUq', cat: 'products', featured: true },
  { id: '1LtG1yCIo8pPPgJcgsgAPnd-3up-UZZUF', cat: 'events', label: 'BIG 5', featured: true },
  { id: '1W-aJrKWB5i9oI8l9Y7w3y3EtfX3UjUk0', cat: 'places', featured: true },
  { id: '1QkP4Xg4COiTb78gaAe0zOBFaC0Ul2XSs', cat: 'concerts', label: 'Bahaa Sultan', featured: true },
  { id: '1z2sOTtVe_pqX3eDYOlD35kltxva0XFdo', cat: 'events', label: 'Jewellery & Bride Arabia', featured: true },

  { id: '10sD8lJRmVTQviq4VPY5pnIVsIaCet6u-', cat: 'weddings', label: 'UAE' },
  { id: '1mZGw9H_pcFzuhUVZktZjt0HexBCzL_na', cat: 'weddings' },
  { id: '1XAH4Y0AnTLqPt-WFhvuZiU8_xK1rwDDY', cat: 'yachts' },
  { id: '1K0BW4rymwdRTC_mbvwKGUC2w1-YRLYj4', cat: 'events', label: 'Dubai Derma' },
  { id: '1ExqkAfOzpYW2ZOoXaQW79HZguh7I6yy9', cat: 'concerts', label: 'Tamer Hosny' },
  { id: '1rsM6ZzaM_G9Lo8tgHswPoKWtJBueWNUr', cat: 'food' },
  { id: '1EIZPcJxNxISr8HkBatO2pZVthW-_Sf05', cat: 'weddings' },
  { id: '12YjjghdYlyBwdtXDelISSXbTzVxEuJD7', cat: 'events', label: 'ADNOC' },
  { id: '1-KXmUovKXiSxndUqnSuGI6nOY5YVPeXI', cat: 'products' },
  { id: '1nkFMiL4ec_vETzM5jLWUC7rEIRsQlSBx', cat: 'yachts' },
  { id: '1HX5R83xlK9hVURnoCtWTMq8Vm3kmCX5O', cat: 'concerts', label: 'Tamer Ashour' },
  { id: '1QeeLNygqAEejILuCjZNdm9tX-_em-VoD', cat: 'places' },
  { id: '1BHbGKXynCvK2iA3d0xOR0r8fnW1FiPaI', cat: 'events', label: 'BIG 5' },
  { id: '1uLkrz02IxqgJg9rVpbGau89_O9kjAdQ0', cat: 'weddings' },
  { id: '15LSspYhtmSfYlI2yvL6XfCeUbSE2gj2J', cat: 'food' },
  { id: '1v31hDNpwVi52xKXqY1EpMiivgmJiB5hm', cat: 'medical' },
  { id: '1sScGwJtUMJGmOq_yzNjg-kqHCDGo0i_v', cat: 'concerts', label: 'Bahaa Sultan' },
  { id: '1nxb9F1NEqEJextmsKavIYSRT_AZvMreU', cat: 'events', label: 'Al Alamein Drama Festival' },
  { id: '1OoPHooQHUiFlBZ0WXMBlqJlsVR7yZgjE', cat: 'yachts' },
  { id: '1BEJWY77TQpa7GXFi5KB-dDhk-4TtqcsL', cat: 'products' },
  { id: '1pjOkUDKxqHtZqA3N3UAVr5qMAS2zQ_RB', cat: 'weddings', label: 'UAE' },
  { id: '1dRKnRYXJhnoKHDCiorENlv2lZCaahzGQ', cat: 'events', label: 'Jewellery & Bride Arabia' },
  { id: '1tm4Qwix0xDIeLeOT0WoaR17Nk_-wS6iK', cat: 'places' },
  { id: '1UxBxLzWfJHsOJi9qLUmwbC6fz9c214VM', cat: 'food' },
  { id: '1le0dQT0N4MSx_hM5xQPVZtfcoL3Rwdjr', cat: 'medical' },
  { id: '1lymTEuvFnzob_AfT43Qs6vSOw6e-kzPh', cat: 'events', label: 'BIG 5' },
  { id: '1TTBbGKbxZWpe56QA9ESyH3kLp0wICqjy', cat: 'weddings' },
  { id: '1oE4As_sYH7xtAcssevY-mYlNGMnDjrnU', cat: 'yachts' },
  { id: '1CgC_pINg6HeHyYgVQziiU-7t_A70Sb0c', cat: 'events', label: 'ADNOC' },
  { id: '1oelc-pgHKPNFmvPIAlvsrJjOsRpxxAeA', cat: 'products' },
  { id: '1W82fDob0xV3U7Rt8DDURE6SlK-0LiugA', cat: 'events', label: 'Dubai Derma' },
  { id: '1IWUukXutW0hQwUQkcKIq0-VI9cf6TfyI', cat: 'places' },
  { id: '1SzoHimafz9QKWq-P0BBdZ48EvkHeqzk_', cat: 'food' },
  { id: '1KIETfkskrooa15XQv8yuV2usEFgwA4u0', cat: 'weddings' },
  { id: '1BPCw2eeYehZLZBlKV9hsivct3tAquvFQ', cat: 'events', label: 'Al Alamein Drama Festival' },
  { id: '1X-px8ZCNA_UextIxeYmOlYBTS5OqNi1g', cat: 'medical' },
  { id: '1JuYvdYzWzP_s9ArUsm8kFMmWMw1jq_Ka', cat: 'weddings' },
];

// Concert photos used for the "On stage with" cards.
export const onStage = [
  { artist: 'Tamer Hosny', id: '1dx9jdq-5VF4y_MZNCjjv21pjgD_9Mc4t' },
  { artist: 'Tamer Ashour', id: '1yTTzeFFz9Kb_UJGSQlxOIDNx52MEqa4V' },
  { artist: 'Bahaa Sultan', id: '1Nabq3gDTFtVC5l4g60vt8LV6H6DDai8e' },
];

export const img = (id: string, w: number) => `https://lh3.googleusercontent.com/d/${id}=w${w}`;
export const thumb = (id: string, w: number) => `https://drive.google.com/thumbnail?id=${id}&sz=w${w}`;
