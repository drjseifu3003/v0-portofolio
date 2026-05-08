import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { studies } from "./data"
import { SiteHeader, SITE_HEADER_H } from "@/components/site-header"
import { ContactSectionWithLiya } from "@/components/contact-section-with-liya"
import { SpTrustPill } from "@/components/sp-trust-pill"
import { absoluteUrl, getSiteUrl, SITE_FULL_NAME } from "@/lib/site-seo"

const listUrl = `${getSiteUrl()}/case-study`

export const metadata: Metadata = {
  title: "Work & case studies",
  description:
    "Real products and measurable outcomes: architecture, constraints, delivery, and impact—documented for stakeholders and engineers.",
  alternates: { canonical: listUrl },
  openGraph: {
    url: listUrl,
    title: `Work & case studies | ${SITE_FULL_NAME}`,
    description:
      "Case studies spanning full-stack apps, AI/RAG, voice automation, and SaaS—how problems were framed, built, and validated.",
    siteName: SITE_FULL_NAME,
    locale: "en_US",
    type: "website",
    images: [{ url: absoluteUrl("/og_image.png"), width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: `Work & case studies | ${SITE_FULL_NAME}`,
    description:
      "Case studies covering architecture, delivery, and measurable impact across AI, SaaS, and production web platforms.",
    images: [absoluteUrl("/og_image.png")],
  },
}

const TINTS = ["#e8f5e9", "#e3f2fd", "#ede7f6", "#fff4e6", "#fce4ec"]

export default function CaseStudyListPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      <main style={{ paddingTop: SITE_HEADER_H }}>
        <div
          style={{
            borderBottom: "1px solid hsl(var(--border))",
            background: "hsl(var(--card))",
            padding: "clamp(24px, 4.5vw, 52px) clamp(20px, 5vw, 88px) clamp(40px, 6vw, 64px)",
          }}
        >
          <div style={{ maxWidth: 900, margin: "0 auto", textAlign: "center" }}>
            <p style={{ fontSize: 12, letterSpacing: "0.14em", textTransform: "uppercase", color: "hsl(var(--brand-accent))", marginBottom: 10, fontWeight: 700 }}>
              My work
            </p>
            <h1
              style={{
                margin: "0 0 16px",
                fontSize: "clamp(32px, 4.5vw, 52px)",
                fontWeight: 800,
                lineHeight: 1.06,
                letterSpacing: "-0.035em",
                color: "hsl(var(--foreground))",
              }}
            >
              Case studies built for clarity
            </h1>
            <p style={{ margin: "0 auto", color: "hsl(var(--muted-foreground))", lineHeight: 1.65, fontSize: 16, maxWidth: 560 }}>
              Architecture, constraints, ships, and impact, documented the way stakeholders and engineers both can use.
            </p>
            <div style={{ marginTop: 14, display: "flex", justifyContent: "center", width: "100%" }}>
              <SpTrustPill variant="hero" />
            </div>
          </div>
        </div>

        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "clamp(44px, 6vw, 88px) clamp(20px, 5vw, 88px) clamp(64px, 10vw, 120px)" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 360px), 1fr))",
              gap: "clamp(22px, 3vw, 32px)",
            }}
          >
            {studies.map((study, i) => (
              <Link key={study.slug} href={`/case-study/${study.slug}`} style={{ textDecoration: "none", display: "block", color: "inherit" }}>
                <article
                  style={{
                    background: "#fff",
                    border: "1px solid #e5e7eb",
                    borderRadius: 18,
                    display: "flex",
                    flexDirection: "column",
                    height: "100%",
                    cursor: "pointer",
                    overflow: "hidden",
                    boxShadow: "0 4px 24px rgba(15,23,42,0.05)",
                  }}
                >
                  <div
                    style={{
                      position: "relative",
                      width: "100%",
                      aspectRatio: "16 / 9",
                      background: TINTS[i % TINTS.length],
                      overflow: "hidden",
                      flexShrink: 0,
                    }}
                  >
                    {study.image ? (
                      <Image
                        src={study.image}
                        alt={study.title}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        style={{ objectFit: "cover", objectPosition: "center top" }}
                      />
                    ) : (
                      <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", color: "#9ca3af", fontSize: 13 }}>
                        Preview coming soon
                      </div>
                    )}
                    <span
                      style={{
                        position: "absolute",
                        top: 12,
                        left: 12,
                        fontSize: 11,
                        fontWeight: 700,
                        color: "#fff",
                        background: "rgba(17,24,39,0.85)",
                        padding: "5px 10px",
                        borderRadius: 8,
                      }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <div style={{ padding: "clamp(20px, 3vw, 28px)", display: "flex", flexDirection: "column", flex: 1, gap: 10 }}>
                    <p style={{ margin: 0, fontSize: 11, letterSpacing: "0.1em", textTransform: "uppercase", color: "#9ca3af", fontWeight: 700 }}>
                      {study.tag.split(" - ")[1] ?? study.tag}
                    </p>
                    <h2 style={{ margin: 0, fontSize: "clamp(18px, 2vw, 22px)", fontWeight: 700, lineHeight: 1.2, letterSpacing: "-0.02em", color: "hsl(var(--foreground))" }}>
                      {study.title}
                    </h2>
                    <p style={{ margin: 0, color: "#6b7280", lineHeight: 1.65, fontSize: 14, flex: 1 }}>{study.subtitle}</p>
                    <div style={{ display: "flex", alignItems: "center", gap: 6, marginTop: 6, fontSize: 12, fontWeight: 700, letterSpacing: "0.06em", textTransform: "uppercase", color: "hsl(var(--brand-accent))" }}>
                      Read case study <ArrowUpRight size={14} strokeWidth={2} />
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>

        <ContactSectionWithLiya />
      </main>
    </div>
  )
}
