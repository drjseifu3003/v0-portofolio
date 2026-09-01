import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft, ArrowUpRight, BookOpen } from "lucide-react"
import { FALLBACK_POSTS, SUBSTACK_URL } from "@/lib/substack"
import { BlogCard } from "@/components/blog-card"
import { SiteHeader, SITE_HEADER_H } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export const metadata: Metadata = {
  title: "Articles & Technical Insights | Dereje Seifu",
  description:
    "Production engineering notes, Healthcare AI architecture, HIPAA compliance blueprints, and cloud optimization insights by Dereje Seifu.",
}

export default function BlogPage() {
  const posts = FALLBACK_POSTS

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <main style={{ paddingTop: SITE_HEADER_H }}>
        <section
          style={{
            background: "hsl(var(--card))",
            borderBottom: "1px solid hsl(var(--border))",
            padding: "clamp(36px, 5vw, 64px) clamp(16px, 4vw, 36px)",
          }}
        >
          <div style={{ maxWidth: 1200, margin: "0 auto" }}>
            <Link
              href="/"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 6,
                fontSize: 14,
                fontWeight: 600,
                color: "#6b7280",
                textDecoration: "none",
                marginBottom: 20,
              }}
            >
              <ArrowLeft size={16} />
              Back to Home
            </Link>

            <div style={{ display: "flex", flexWrap: "wrap", alignItems: "flex-end", justifyContent: "space-between", gap: 20 }}>
              <div style={{ maxWidth: 680 }}>
                <div
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 6,
                    fontSize: 13,
                    fontWeight: 700,
                    color: "#7c3aed",
                    marginBottom: 10,
                    textTransform: "uppercase",
                    letterSpacing: "0.04em",
                  }}
                >
                  <BookOpen size={16} />
                  Technical Notes &amp; Insights
                </div>
                <h1
                  style={{
                    fontSize: "clamp(32px, 4.5vw, 48px)",
                    fontWeight: 800,
                    letterSpacing: "-0.035em",
                    color: "hsl(var(--foreground))",
                    margin: "0 0 14px",
                    lineHeight: 1.1,
                  }}
                >
                  Articles &amp; Architecture Briefings
                </h1>
                <p style={{ fontSize: "clamp(16px, 1.8vw, 18px)", lineHeight: 1.6, color: "hsl(var(--muted-foreground))", margin: 0 }}>
                  Field notes on production Healthcare AI, HIPAA security blueprints, AWS cloud infrastructure, and enterprise SaaS platforms.
                </p>
              </div>

              <a
                href={SUBSTACK_URL}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  padding: "14px 28px",
                  borderRadius: 999,
                  fontSize: 15,
                  fontWeight: 700,
                  color: "#ffffff",
                  textDecoration: "none",
                  background: "linear-gradient(145deg, #7c3aed 0%, #6d28d9 100%)",
                  boxShadow: "0 6px 20px rgba(124, 58, 237, 0.35)",
                }}
              >
                Subscribe on Substack
                <ArrowUpRight size={18} strokeWidth={2.25} />
              </a>
            </div>
          </div>
        </section>

        <section style={{ padding: "clamp(40px, 6vw, 72px) clamp(16px, 4vw, 36px)", background: "#fafaf9" }}>
          <div style={{ maxWidth: 1200, margin: "0 auto" }}>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
                gap: 24,
              }}
            >
              {posts.map(post => (
                <BlogCard key={post.slug} {...post} />
              ))}
            </div>
          </div>
        </section>

        <SiteFooter />
      </main>
    </div>
  )
}
