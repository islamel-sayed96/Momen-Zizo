// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// GitHub Pages serves the site from /Momen-Zizo/. With a custom domain, set `site` to it and `base` to '/'.
export default defineConfig({
  site: 'https://islamel-sayed96.github.io',
  base: '/Momen-Zizo',
  trailingSlash: 'always',
  integrations: [
    sitemap({
      i18n: { defaultLocale: 'en', locales: { en: 'en', ar: 'ar' } },
    }),
  ],
  build: { inlineStylesheets: 'auto' },
});
