import { defineCollection, z } from "astro:content";

const projectCollection = defineCollection({
  schema: ({ image }) => z.object({
    title: z.string(),
    cover: image().refine((img) => img.width >= 1000, {
      message: "Cover image must be at least 1000 pixels wide!",
    }),
    coverAlt: z.string(),
  }),
});

export const collections = {
  projects: projectCollection,
};