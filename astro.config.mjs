import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  // Used for absolute OG/canonical URLs in link previews
  site: 'https://aggieewop.org',
  integrations: [tailwind({ applyBaseStyles: false })],
});
