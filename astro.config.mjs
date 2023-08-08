import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import robotsTxt from 'astro-robots-txt';
import compress from '@otterlord/astro-compress';

export default defineConfig({
  outDir: './publico',
  publicDir: './recursos',
  site: 'https://imagina.uniandes.edu.co',
  integrations: [
    sitemap(),
    robotsTxt(),
    compress({
      path: './publico',
    }),
  ],
  base: '/especiales/vacs',
  build: {
    assets: 'recursos',
  },
});
