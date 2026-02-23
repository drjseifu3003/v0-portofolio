import type { Metadata, Viewport } from "next"
import type { ReactNode } from "react"
import type React from "react"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { JsonLd } from "@/components/json-Id"

const inter = Inter({ subsets: ["latin"] })

/* ─── Site constants ──────────────────────────────────────────── */
const SITE_URL  = "https://www.derejeseifu.vercel.app"   // ← change to your domain
const FULL_NAME = "Dereje Seifu"
const TITLE     = "Dereje Seifu — Senior Full-Stack Engineer"
const DESC      = "Senior Full-Stack Engineer specialising in Next.js, React, TypeScript, Node.js, and AWS. I help startups and product teams ship reliable software with clear scope, fast delivery, and strong engineering discipline."
const OG_IMAGE  = `${SITE_URL}/og_image.png`      // 1200×630 — create this

/* ─── Viewport ────────────────────────────────────────────────── */
export const viewport: Viewport = {
  width:        "device-width",
  initialScale: 1,
  themeColor:   "#0c0c0c",
}

/* ─── Metadata ────────────────────────────────────────────────── */
export const metadata: Metadata = {
  /*
   * metadataBase tells Next.js how to resolve relative URLs
   * (open-graph images, sitemap, canonical links, etc.)
   */
  metadataBase: new URL(SITE_URL),

  /* ── Core ───────────────────────────────────────────────────── */
  title: {
    default:  TITLE,
    template: `%s | ${FULL_NAME}`,
  },
  description: DESC,
  keywords: [
    "Full-Stack Engineer",
    "Senior Software Engineer",
    "Next.js developer",
    "React developer",
    "TypeScript developer",
    "Node.js developer",
    "AWS developer",
    "PostgreSQL",
    "Supabase",
    "CI/CD",
    "DevOps engineer",
    "freelance developer",
    "Upwork developer",
    "remote software engineer",
    "Dereje Seifu",
    "Ethiopian developer",
    "web application development",
    "SaaS development",
    "startup engineer",
  ],
  authors:  [{ name: FULL_NAME, url: SITE_URL }],
  creator:  FULL_NAME,
  publisher: FULL_NAME,

  /* ── Canonical ──────────────────────────────────────────────── */
  alternates: {
    canonical: SITE_URL,
  },

  /* ── Open Graph ─────────────────────────────────────────────── */
  openGraph: {
    type:        "website",
    url:         SITE_URL,
    siteName:    FULL_NAME,
    title:       TITLE,
    description: DESC,
    locale:      "en_US",
    images: [
      {
        url:    OG_IMAGE,
        width:  1200,
        height: 630,
        alt:    `${FULL_NAME} — Senior Full-Stack Engineer portfolio`,
      },
    ],
  },

  /* ── Twitter / X card ──────────────────────────────────────── */
  twitter: {
    card:        "summary_large_image",
    title:       TITLE,
    description: DESC,
    images:      [OG_IMAGE],
    creator:     "@derejeseifu",   // ← update if you have a Twitter handle
  },

  /* ── Robots ─────────────────────────────────────────────────── */
  robots: {
    index:               true,
    follow:              true,
    googleBot: {
      index:               true,
      follow:              true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet":       -1,
    },
  },

  /* ── Verification tokens (add when you get them) ───────────── */
  verification: {
    google: "REPLACE_WITH_GOOGLE_SEARCH_CONSOLE_TOKEN",
    // yandex: "REPLACE_WITH_YANDEX_TOKEN",
    // bing:   "REPLACE_WITH_BING_TOKEN",
  },

  /* ── App metadata ───────────────────────────────────────────── */
  applicationName: FULL_NAME,
  category:        "technology",
  classification:  "Portfolio",

  /* ── Icons ──────────────────────────────────────────────────── */
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png",  sizes: "16x16",  type: "image/png" },
      { url: "/favicon-32x32.png",  sizes: "32x32",  type: "image/png" },
    ],
    apple:   [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
    other:   [{ rel: "mask-icon", url: "/safari-pinned-tab.svg", color: "#dedad2" }],
  },

  /* ── Manifest ───────────────────────────────────────────────── */
  manifest: "/manifest.json",
}

/* ─── Layout ──────────────────────────────────────────────────── */
export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Preconnect to Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={inter.className} style={{ margin: 0, padding: 0, background: "#0c0c0c" }}>
        <JsonLd />
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}