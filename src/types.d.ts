import type { ImageMetadata } from "astro";

export interface Project {
  slug: string;
  data: {
    title: string;
    cover: ImageMetadata;
    coverAlt: string;
  };
}