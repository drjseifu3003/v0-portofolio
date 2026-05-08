import type { MetadataRoute } from "next"
import { getSiteUrl } from "@/lib/site-seo"

export default function robots(): MetadataRoute.Robots {
  const origin = getSiteUrl()

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/_next/", "/private/"],
      },
    ],
    sitemap: `${origin}/sitemap.xml`,
    host: origin,
  }
}
