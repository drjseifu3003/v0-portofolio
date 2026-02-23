import type { MetadataRoute } from "next"

const SITE_URL = "https://www.derejeseifu.com"   // ← match layout.tsx

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url:              SITE_URL,
      lastModified:     new Date(),
      changeFrequency:  "monthly",
      priority:         1,
    },
    {
      url:              `${SITE_URL}/blog`,
      lastModified:     new Date(),
      changeFrequency:  "weekly",
      priority:         0.8,
    },
  ]
}
