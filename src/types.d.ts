import type { ImageMetadata } from "astro";

export interface Project {
  slug: string;
  data: {
    title: string;
    images: Array<ImageMetadata>;
    image_full?: ImageMetadata;
  };
}
