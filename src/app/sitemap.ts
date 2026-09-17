import type { MetadataRoute } from "next";
import { content } from "@/content/content";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: content.seo.url,
      lastModified: new Date("2026-09-14"),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
