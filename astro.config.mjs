import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import compress from 'astro-compress';

// https://astro.build/config
export default defineConfig({
  experimental: {
    viewTransitions: true,
  },
  integrations: [tailwind(), compress()],
<<<<<<< HEAD
  site: 'https://maguaihuang.github.io',
  base: '/website/'
=======
  site: 'https://maguaihuang.github.io'
  base: '/website/',
>>>>>>> a6218f47fa7df05e61a7f79fd2ddf2e082b807df
});
