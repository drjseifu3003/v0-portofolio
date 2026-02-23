import type { MetadataRoute } from "next"

const SITE_URL = "https://www.derejeseifu.com"   // ← match layout.tsx

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow:     "/",
        disallow:  ["/api/", "/_next/", "/private/"],
      },
    ],
    sitemap:    `${SITE_URL}/sitemap.xml`,
    host:       SITE_URL,
  }
}
