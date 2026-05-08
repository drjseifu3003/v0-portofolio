import type { MetadataRoute } from "next"
import { getSiteUrl } from "@/lib/site-seo"
import { studies } from "./case-study/data"

export default function sitemap(): MetadataRoute.Sitemap {
  const SITE_URL = getSiteUrl()

  const caseStudyPages: MetadataRoute.Sitemap = studies.map((study) => ({
    url: `${SITE_URL}/case-study/${study.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.85,
  }))

  return [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${SITE_URL}/blog`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${SITE_URL}/case-study`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/llms.txt`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.35,
    },
    ...caseStudyPages,
  ]
}
