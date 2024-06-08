// https://astro.build/config
import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  integrations: [
    tailwind(),
  ],
  ...(import.meta.env.SITE && {
    site: import.meta.env.SITE
  }),
  ...(import.meta.env.BASE_URL && {
    base: import.meta.env.BASE_URL
  })
});