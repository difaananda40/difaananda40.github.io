import { defineConfig } from 'astro/config';

// https://astro.build/config
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
import partytown from "@astrojs/partytown";

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind(),
    partytown({
      // Adds dataLayer.push as a forwarding-event.
      config: {
        forward: ["dataLayer.push"],
      },
    }),
  ],
  ...(import.meta.env.SITE && {
    site: import.meta.env.SITE
  }),
  ...(import.meta.env.BASE_URL && {
    base: import.meta.env.BASE_URL
  })
});