import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import robotsTxt from 'astro-robots-txt';
import compress from 'astro-compress';

// https://astro.build/config
export default defineConfig({
  outDir: './publico',
  publicDir: './recursos',
  site: 'https://enflujo.com',
  integrations: [
    sitemap(),
    robotsTxt(),
    compress({
      path: './publico',
    }),
  ],
});
