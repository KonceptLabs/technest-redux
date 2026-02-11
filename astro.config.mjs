import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare'; // The new adapter we just installed

export default defineConfig({
  output: 'server',
  adapter: cloudflare({
    imageService: 'compile',
    platformProxy: {
      enabled: true,
    },
  }),
});