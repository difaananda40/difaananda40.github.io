import { defineCollection, z } from "astro:content";

const projectCollection = defineCollection({
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      link: z.string().optional(),
      images: z.array(
        image().refine((img) => img.width >= 1000, {
          message: "Image must be at least 1000 pixels wide!",
        }),
      ),
      image_full: image()
        .refine((img) => img.width >= 1000, {
          message: "Image must be at least 1000 pixels wide!",
        })
        .optional(),
    }),
});

export const collections = {
  projects: projectCollection,
};
