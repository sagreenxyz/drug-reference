import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://sagreenxyz.github.io',
  base: '/drug-reference',
  output: 'static',
  integrations: [tailwind()],
});
