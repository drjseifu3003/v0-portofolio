import type { Metadata } from "next"
import type { ReactNode } from "react"
import { absoluteUrl, getSiteUrl, SITE_FULL_NAME } from "@/lib/site-seo"

const pageUrl = `${getSiteUrl()}/blog`

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Notes on scalable architecture, hardened security, and revenue-ready delivery—practical engineering from production systems.",
  alternates: { canonical: pageUrl },
  openGraph: {
    url: pageUrl,
    title: `Engineering notes | ${SITE_FULL_NAME}`,
    description:
      "Strategic engineering insights: scalable architecture, security, and shipping velocity—grounded in real production work.",
    siteName: SITE_FULL_NAME,
    locale: "en_US",
    type: "website",
    images: [{ url: absoluteUrl("/og_image.png"), width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: `Engineering notes | ${SITE_FULL_NAME}`,
    description:
      "Strategic engineering insights from production environments: architecture, security, and sustainable speed.",
    images: [absoluteUrl("/og_image.png")],
  },
}

export default function BlogLayout({ children }: { children: ReactNode }) {
  return children
}
