import type { Metadata, Viewport } from "next"
import type { ReactNode } from "react"
import type React from "react"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { JsonLd } from "@/components/json-Id"
import { brandTheme } from "@/lib/brand-theme"
import {
  absoluteUrl,
  buildRootMetadataVerification,
  getSiteUrl,
  SITE_DEFAULT_DESCRIPTION,
  SITE_DEFAULT_TITLE,
  SITE_FULL_NAME,
} from "@/lib/site-seo"

const inter = Inter({ subsets: ["latin"] })

const siteUrl = getSiteUrl()
const OG_IMAGE = absoluteUrl("/og_image.png")
const rootVerification = buildRootMetadataVerification()

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: brandTheme.hex.canvas,
}

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: SITE_DEFAULT_TITLE,
    template: `%s | ${SITE_FULL_NAME}`,
  },
  description: SITE_DEFAULT_DESCRIPTION,
  keywords: [
    "Senior Full-Stack Engineer",
    "AI Engineer",
    "Full-Stack Engineer",
    "AI Agents",
    "RAG Systems",
    "Voice AI",
    "N8N Automation",
    "Vapi developer",
    "LangChain developer",
    "Next.js developer",
    "React developer",
    "TypeScript developer",
    "Node.js developer",
    "NestJS developer",
    "FastAPI developer",
    "AWS developer",
    "Supabase developer",
    "SaaS development",
    "MVP development",
    "Founding Engineer",
    "freelance AI developer",
    "Upwork AI developer",
    "remote senior full-stack engineer",
    "Dereje Seifu",
    "AI product development",
    "enterprise systems",
    "healthcare platform development",
  ],
  authors: [{ name: SITE_FULL_NAME, url: siteUrl }],
  creator: SITE_FULL_NAME,
  publisher: SITE_FULL_NAME,

  alternates: {
    canonical: siteUrl,
  },

  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: SITE_FULL_NAME,
    title: SITE_DEFAULT_TITLE,
    description: SITE_DEFAULT_DESCRIPTION,
    locale: "en_US",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: `${SITE_FULL_NAME}, Senior Full-Stack Engineer & AI Engineer portfolio`,
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: SITE_DEFAULT_TITLE,
    description: SITE_DEFAULT_DESCRIPTION,
    images: [OG_IMAGE],
    creator: "@derejeseifu",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  ...(rootVerification ? { verification: rootVerification } : {}),

  applicationName: SITE_FULL_NAME,
  category: "technology",
  classification: "Portfolio",

  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
    other: [{ rel: "mask-icon", url: "/safari-pinned-tab.svg", color: brandTheme.hex.primary }],
  },

  manifest: "/manifest.json",
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={`${inter.className} min-h-screen bg-background text-foreground`} style={{ margin: 0, padding: 0 }}>
        <JsonLd />
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
