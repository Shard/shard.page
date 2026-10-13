// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://shard.page',
  trailingSlash: 'ignore',
  markdown: {
    shikiConfig: { theme: 'rose-pine-dawn' },
  },
});
