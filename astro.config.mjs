import { defineConfig } from 'astro/config';

import react from '@astrojs/react';

export default defineConfig({
  server: {
    port: 3000,
    host: true
  },

  integrations: [react()],

  site: 'https://freakscode.github.io',
  base: '/ia_pages',
  output: 'static',
});