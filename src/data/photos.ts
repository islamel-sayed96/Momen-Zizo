// Photos live in Momen's Google Drive (shared as "Anyone with the link").
// `id` is the Drive file id. `featured` photos appear on the home page.

export type Category =
  | 'events' | 'conferences' | 'concerts' | 'medical' | 'products'
  | 'weddings' | 'parties' | 'places' | 'food';

export interface Photo {
  id: string;
  cat: Category;
  label?: string; // event or artist name
  featured?: boolean;
}

// Filter order on the Photography page. Empty categories are hidden.
export const categories: Category[] = [
  'events', 'conferences', 'concerts', 'medical', 'products', 'weddings', 'parties', 'places', 'food',
];

export const photos: Photo[] = [
  { id: '1z2sOTtVe_pqX3eDYOlD35kltxva0XFdo', cat: 'events', label: 'Jewellery & Bride Arabia', featured: true },
  { id: '1eiQigVdBLNiF2fP0vUWXt_0cASA96yiV', cat: 'concerts', label: 'Tamer Hosny', featured: true },
  { id: '1SMZi8nBO3ZbMDQQ01d2HxiytW9k2vmYT', cat: 'weddings', featured: true },
  { id: '1PPnVOO8IAYSA5kiQqKWYlwo0Ef9SAmuM', cat: 'conferences', label: 'Dubai Derma', featured: true },
  { id: '1bqiydJ7JD5EqZs4S5JkMAkWjgtlzZqbP', cat: 'products', featured: true },
  { id: '1t8Ez7lGPkXRU0xc279BKLVL47JeK0Xf6', cat: 'food', featured: true },
  { id: '12RUmOGUKBgAga65b4tuwglq8_yhMN__5', cat: 'concerts', label: 'Tamer Ashour', featured: true },
  { id: '1uHOD3O15JSaY0sAV_Iajot0MO67Yv-tp', cat: 'medical', featured: true },
  { id: '1cykWb6jR6d9nNIOLEmcLwxdtf5ZNfRQn', cat: 'events', featured: true },
  { id: '1LtG1yCIo8pPPgJcgsgAPnd-3up-UZZUF', cat: 'conferences', label: 'BIG 5', featured: true },
  { id: '1rU1ngxVFBODOEBeRRx-bTmmOzVBszv1W', cat: 'weddings', featured: true },
  { id: '1W-aJrKWB5i9oI8l9Y7w3y3EtfX3UjUk0', cat: 'places', featured: true },
  { id: '1QYDOhq25QujJyxFTmfusp3R1CxDnABUq', cat: 'products', featured: true },

  { id: '1nxb9F1NEqEJextmsKavIYSRT_AZvMreU', cat: 'events', label: 'Al Alamein Drama Festival' },
  { id: '1BPCw2eeYehZLZBlKV9hsivct3tAquvFQ', cat: 'events', label: 'Al Alamein Drama Festival' },
  { id: '1c0BM2rQWKfpbeLaulmYYEr-UANb-y3U7', cat: 'events' },
  { id: '1T7U-2bJ53TW1DSkS66v8kK0Ei0HrqIgw', cat: 'events' },
  { id: '141ua33mSy9m3_N0h7ppqH3FV7qkULbPO', cat: 'events' },
  { id: '1BHbGKXynCvK2iA3d0xOR0r8fnW1FiPaI', cat: 'events', label: 'BIG 5' },
  { id: '1RoUf7aiVsaUxK0qVIdAkUvitBwdg2uXd', cat: 'events' },
  { id: '1tEvPsoP3CUIJBoGyOFvtHlkPy33y66ka', cat: 'events', label: 'Dubai Derma' },
  { id: '1UIXW_H5QHTE3AF28fsuEeiIZNaVJVG7w', cat: 'events', label: 'Dubai Derma' },
  { id: '15zAlrj8qFLdDjUEks44iGNrGJ0vdNWmQ', cat: 'events', label: 'Dubai Derma' },
  { id: '1rXQDW7d0GDDoNwjx-tiSXgSJhMsznsAu', cat: 'events' },
  { id: '169THNy6DoNzRdxe-A77sExS0xD-5wq9c', cat: 'events' },
  { id: '1K0BW4rymwdRTC_mbvwKGUC2w1-YRLYj4', cat: 'conferences', label: 'Dubai Derma' },
  { id: '12YjjghdYlyBwdtXDelISSXbTzVxEuJD7', cat: 'conferences', label: 'ADNOC' },
  { id: '1lymTEuvFnzob_AfT43Qs6vSOw6e-kzPh', cat: 'conferences', label: 'BIG 5' },
  { id: '1CgC_pINg6HeHyYgVQziiU-7t_A70Sb0c', cat: 'conferences', label: 'ADNOC' },
  { id: '1W82fDob0xV3U7Rt8DDURE6SlK-0LiugA', cat: 'conferences', label: 'Dubai Derma' },
  { id: '1CoZNMgma3It_5OcZcDoJOYQdj-R20QNh', cat: 'conferences' },
  { id: '1PEuyG9CIIfpIekCAgf4IOSC8ahRxb8AD', cat: 'conferences' },
  { id: '1qH7vxQb5EpKtWGai7or4P8lYzGBYNIpV', cat: 'conferences' },
  { id: '12QzR8nCZe_Jptri3cblAoTURghY7Oy12', cat: 'conferences' },
  { id: '1GCQFbZZxHXMc_cuQNEXYEsZ45aEj9ADX', cat: 'conferences' },
  { id: '1XyopjhYLqaeCuYLyzUvfoOscp5SQXRbL', cat: 'conferences' },
  { id: '1T18WROPo6XdmetFN8dKmeh7UfhbHEqnj', cat: 'conferences' },
  { id: '13WBkMzeLw0D8YuHLrjjXitGXDb7xv-jX', cat: 'conferences' },
  { id: '1QkP4Xg4COiTb78gaAe0zOBFaC0Ul2XSs', cat: 'concerts', label: 'Bahaa Sultan' },
  { id: '1ExqkAfOzpYW2ZOoXaQW79HZguh7I6yy9', cat: 'concerts', label: 'Tamer Hosny' },
  { id: '1HX5R83xlK9hVURnoCtWTMq8Vm3kmCX5O', cat: 'concerts', label: 'Tamer Ashour' },
  { id: '1sScGwJtUMJGmOq_yzNjg-kqHCDGo0i_v', cat: 'concerts', label: 'Bahaa Sultan' },
  { id: '1ggGJd_qmJxTHX2fgLlgR84B6KhUyLqSJ', cat: 'concerts' },
  { id: '1227ml0o0vC9BVJdzJ8uT3Ol3k8m_2E1v', cat: 'concerts' },
  { id: '1fucdNXfIBRM8ddxEiPcrSzIXDxypIS6q', cat: 'concerts' },
  { id: '1TeCWt4aVfzGuy39VgeRddaA2IKxkIJQG', cat: 'concerts' },
  { id: '1RjzoDLNbTxNSoC7Il7c3E_xJh6-lg-xU', cat: 'concerts' },
  { id: '1To4_1fcyxnz99ARuUqYYBkPBl1YFfvK6', cat: 'concerts' },
  { id: '1QNB3dneBZU_PJxHzqiCHz0mT4fojZXeI', cat: 'concerts' },
  { id: '1VTgiHaZ9wmjrPxdnTBKx4PgAiHjTItru', cat: 'concerts', label: 'Tamer Hosny' },
  { id: '15h1fX9zFW2JcVrniVlffappGeKJsp3Ad', cat: 'concerts' },
  { id: '1gt-4IltV4VgxE4vVKul5glfF3MwoUXCS', cat: 'concerts' },
  { id: '1Qw_UNT5yZzdSwpYnRts_G_ndNo_wa5XG', cat: 'concerts' },
  { id: '14vxTPJp8SNkAlf7KnKD9YKcrEhvQSRBC', cat: 'concerts' },
  { id: '1W4zhBJSbSFTdWdlrbEBKbXlDSQIxCA_K', cat: 'concerts' },
  { id: '17jNxB3B231-UDOU1P_7yldC1gMZ3U6ib', cat: 'concerts', label: 'Ramy Sabry' },
  { id: '1jTWdZSE36pJ02Ks_ec9_37vWaxznl30M', cat: 'concerts' },
  { id: '1CTfaCFI61YZ3-r85yuhapuDEflMt06ih', cat: 'medical' },
  { id: '1iwocM4Wrj_jeDWf5dv4S1-nZhKZdBody', cat: 'medical' },
  { id: '1MVSu3oEjm8elB3Wo470nLHsekhPS0YZs', cat: 'medical' },
  { id: '1UJnrnDVzQQIkI_RiHHRlIv-BnhMH2toT', cat: 'medical' },
  { id: '1AhlcfFql8kIX0rzwIgY-y3P74VctvqXo', cat: 'medical' },
  { id: '1Ep1gCncDssGTuPHwWHImUG_8Ex6n4OEJ', cat: 'medical' },
  { id: '1qTehCc6MqdgEx4n6JqleC8d1nx7kjtyV', cat: 'medical' },
  { id: '1M9FK3HellUhxq4wUOv0D9z45ho4WSGql', cat: 'medical' },
  { id: '1JmQyUVQ16o_IlrMk-e7Q6gNXq2bTuyET', cat: 'products' },
  { id: '1nd01pfcSZBNj4DqllA261-phhImT2y2y', cat: 'products' },
  { id: '1-6szZp9FUcDltpUPT6o4E3P-ax5tvC5O', cat: 'products' },
  { id: '1L69n7R9zOZIT19NZ6-uyLVsb0Y8xM0VG', cat: 'products' },
  { id: '1cL89VbLZVb__fQHiibIf1bY4W-_70EaZ', cat: 'products' },
  { id: '1M7aIKSKK2z0c24sI_QoEc6VxRTHiHeSc', cat: 'products' },
  { id: '1cKGRnOhvxvR5irWClv0M3QiLIxgfMvMo', cat: 'products' },
  { id: '172oHJOoVP9F4XQHq5zjWHljs7chKZNVG', cat: 'products' },
  { id: '1mXav2sjIlXkCOBM61d3GYfQ4vEoDh2wJ', cat: 'weddings' },
  { id: '1OoPHooQHUiFlBZ0WXMBlqJlsVR7yZgjE', cat: 'weddings' },
  { id: '18YgGFVO20Re0kwCu2SkmENIa_2T6GTrT', cat: 'weddings' },
  { id: '1iSvbSd-aTCI75wEObBctxl-YdzBHEo29', cat: 'weddings' },
  { id: '1SUNY20B4MUM90pLAtoPEkxsRvrh--6K9', cat: 'weddings' },
  { id: '1rfX8wIITvp_f1voU-NWS7dKdIhlScyxz', cat: 'weddings' },
  { id: '17d2-U0uOjegBqYCV8kHUlvjQfX0GdD4a', cat: 'weddings' },
  { id: '1y7dNoOmB3Ba5O8Cu-qJHRhtZ_QUf0zdQ', cat: 'weddings' },
  { id: '1S0duihvSo34PdDHefi31UnsKMe27X9gV', cat: 'weddings' },
  { id: '1mZGw9H_pcFzuhUVZktZjt0HexBCzL_na', cat: 'weddings' },
  { id: '1uJ1XSoGLahy2rC9MYFg5Euac1mVPwyui', cat: 'weddings' },
  { id: '1yEB5agI_Qg_yoZkjQP735D11cAmXofS8', cat: 'weddings' },
  { id: '1KIETfkskrooa15XQv8yuV2usEFgwA4u0', cat: 'weddings' },
  { id: '1GTWVI-tBZANYa64yfBgJUu1o585sXYQM', cat: 'weddings' },
  { id: '11kpcOal7Tgc51BBbeom9B5yjh0UXw6KC', cat: 'weddings' },
  { id: '1nZ6npuQgie-nzoMQjx8u7gOgqGUZMmHa', cat: 'weddings' },
  { id: '1dI3fSS5UlXOy_O4FUM3viYBAnZYqUmX8', cat: 'weddings' },
  { id: '1fnaD795ACk3zvAQ4CQrWvOa-b-Z_Wrjo', cat: 'weddings' },
  { id: '1q1yTgMW65ulHwkHmol79aKh44YB0xQS7', cat: 'weddings' },
  { id: '1IasVcs-ajQYnSsT7uok0ppEDG9ObmU5S', cat: 'weddings' },
  { id: '1pjOkUDKxqHtZqA3N3UAVr5qMAS2zQ_RB', cat: 'weddings' },
  { id: '1QeeLNygqAEejILuCjZNdm9tX-_em-VoD', cat: 'places' },
  { id: '1tm4Qwix0xDIeLeOT0WoaR17Nk_-wS6iK', cat: 'places' },
  { id: '1IWUukXutW0hQwUQkcKIq0-VI9cf6TfyI', cat: 'places' },
  { id: '1kvPvo4sIuHv5PlccPgIhR0AVREQouMna', cat: 'places' },
  { id: '1A8LK7vpsum631oUYf9SaWLG_FiG6VLem', cat: 'places' },
  { id: '1rsM6ZzaM_G9Lo8tgHswPoKWtJBueWNUr', cat: 'food' },
  { id: '15LSspYhtmSfYlI2yvL6XfCeUbSE2gj2J', cat: 'food' },
  { id: '1UxBxLzWfJHsOJi9qLUmwbC6fz9c214VM', cat: 'food' },
  { id: '1SzoHimafz9QKWq-P0BBdZ48EvkHeqzk_', cat: 'food' },
  { id: '1HosmB9p8eSqGRLBPtNmw4UocmCWTfmUD', cat: 'food' },
  { id: '1imyU6GxQPUDR-Qnvpsd2Ns8zfqUJ74hJ', cat: 'food' },
  { id: '10wVQvuOtVXb3FBZ2FkydvlVFTRh0p345', cat: 'food' },
  { id: '1N-aWxDLZALAZxIXk6J3uPNmHYfeyz2Lf', cat: 'food' },
];

// Concert photos used for the "On stage with" cards.
export const onStage = [
  { artist: 'Tamer Hosny', id: '1VTgiHaZ9wmjrPxdnTBKx4PgAiHjTItru' },
  { artist: 'Ramy Sabry', id: '17jNxB3B231-UDOU1P_7yldC1gMZ3U6ib' },
  { artist: 'Tamer Ashour', id: '1yTTzeFFz9Kb_UJGSQlxOIDNx52MEqa4V' },
]

export const img = (id: string, w: number) => `https://lh3.googleusercontent.com/d/${id}=w${w}`;
export const thumb = (id: string, w: number) => `https://drive.google.com/thumbnail?id=${id}&sz=w${w}`;
