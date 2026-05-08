import type { Metadata } from "next"
import type { ReactNode } from "react"
import { absoluteUrl, getSiteUrl, SITE_FULL_NAME } from "@/lib/site-seo"

const pageUrl = `${getSiteUrl()}/about`

export const metadata: Metadata = {
  title: "About",
  description:
    "Senior full-stack engineer (4+ yrs). MERN, PERN, Next.js, AI, RAG, voice, AWS, Supabase, integrations. Remote. Clear about how I build and what I ship.",
  alternates: { canonical: pageUrl },
  openGraph: {
    url: pageUrl,
    title: `About ${SITE_FULL_NAME}`,
    description:
      "Production-first delivery, realistic scope, and hands-on stack: MERN/PERN, FastAPI, AI, voice, AWS & Supabase.",
    siteName: SITE_FULL_NAME,
    locale: "en_US",
    type: "website",
    images: [{ url: absoluteUrl("/og_image.png"), width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: `About ${SITE_FULL_NAME}`,
    description:
      "Production-first delivery, realistic scope, and hands-on stack: MERN/PERN, FastAPI, AI, voice, AWS & Supabase.",
    images: [absoluteUrl("/og_image.png")],
  },
}

export default function AboutLayout({ children }: { children: ReactNode }) {
  return children
}
