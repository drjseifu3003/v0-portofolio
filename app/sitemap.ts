import type { MetadataRoute } from "next"
import { studies } from "./case-study/data"

const SITE_URL = "https://www.derejeseifu.com"   // ← match layout.tsx

export default function sitemap(): MetadataRoute.Sitemap {
  const caseStudyPages: MetadataRoute.Sitemap = studies.map((study) => ({
    url: `${SITE_URL}/case-study/${study.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.85,
  }))

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
    {
      url:              `${SITE_URL}/about`,
      lastModified:     new Date(),
      changeFrequency:  "monthly",
      priority:         0.85,
    },
    {
      url:              `${SITE_URL}/case-study`,
      lastModified:     new Date(),
      changeFrequency:  "monthly",
      priority:         0.9,
    },
    ...caseStudyPages,
  ]
}
