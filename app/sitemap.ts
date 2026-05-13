import type { MetadataRoute } from "next";
import { siteBaseUrl } from "./seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    {
      url: siteBaseUrl,
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
    },
  ];
}
