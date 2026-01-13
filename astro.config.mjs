import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [tailwind()],
  site: 'https://alpertorun.com',
  vite: {
    ssr: {
      noExternal: []
    }
  }
});
