import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, ArrowUpRight, BookOpen, Calendar, Clock, Sparkles } from "lucide-react"
import { getSubstackPosts, SUBSTACK_URL } from "@/lib/substack"
import { BlogCard } from "@/components/blog-card"
import { SiteHeader, SITE_HEADER_H } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export const revalidate = 3600

export const metadata: Metadata = {
  title: "Articles & Technical Insights | Dereje Seifu",
  description:
    "Production engineering notes, Healthcare AI architecture, HIPAA compliance blueprints, and cloud optimization insights by Dereje Seifu.",
}

export default async function BlogPage() {
  const posts = await getSubstackPosts()
  const featuredPost = posts[0]
  const otherPosts = posts.slice(1)

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <main style={{ paddingTop: SITE_HEADER_H }}>
        {/* Header Hero Section */}
        <section
          style={{
            background: "linear-gradient(180deg, hsl(262 53% 97%) 0%, hsl(0 0% 100%) 100%)",
            borderBottom: "1px solid #e5e7eb",
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
                marginBottom: 24,
                transition: "color 0.15s",
              }}
            >
              <ArrowLeft size={16} />
              Back to Home
            </Link>

            <div style={{ display: "flex", flexWrap: "wrap", alignItems: "flex-end", justifyContent: "space-between", gap: 24 }}>
              <div style={{ maxWidth: 720 }}>
                <div
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 8,
                    fontSize: 13,
                    fontWeight: 700,
                    color: "#7c3aed",
                    background: "#f3e8ff",
                    padding: "6px 16px",
                    borderRadius: 999,
                    marginBottom: 14,
                    letterSpacing: "0.02em",
                  }}
                >
                  <Sparkles size={15} />
                  Field Notes &amp; Architecture Briefings
                </div>
                <h1
                  style={{
                    fontSize: "clamp(32px, 4.5vw, 52px)",
                    fontWeight: 800,
                    letterSpacing: "-0.035em",
                    color: "#111827",
                    margin: "0 0 16px",
                    lineHeight: 1.08,
                  }}
                >
                  Healthcare AI &amp; Infrastructure Insights
                </h1>
                <p style={{ fontSize: "clamp(16px, 1.8vw, 19px)", lineHeight: 1.6, color: "#4b5563", margin: 0, fontWeight: 400 }}>
                  Real engineering decisions, security blueprints, and cloud lessons from production healthcare platforms and multi-tenant systems.
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
                  boxShadow: "0 8px 24px rgba(124, 58, 237, 0.35)",
                }}
              >
                Subscribe on Substack
                <ArrowUpRight size={18} strokeWidth={2.25} />
              </a>
            </div>
          </div>
        </section>

        {/* Featured Post Card */}
        {featuredPost && (
          <section style={{ padding: "40px clamp(16px, 4vw, 36px) 20px", background: "#fafaf9" }}>
            <div style={{ maxWidth: 1200, margin: "0 auto" }}>
              <div
                style={{
                  fontSize: 13,
                  fontWeight: 700,
                  color: "#6b7280",
                  textTransform: "uppercase",
                  letterSpacing: "0.06em",
                  marginBottom: 16,
                  display: "flex",
                  alignItems: "center",
                  gap: 6,
                }}
              >
                <BookOpen size={16} color="#7c3aed" />
                Featured Briefing
              </div>

              <Link
                href={`/blog/${featuredPost.slug}`}
                style={{ textDecoration: "none", color: "inherit", display: "block" }}
              >
                <article
                  style={{
                    background: "#ffffff",
                    border: "2px solid #e5e7eb",
                    borderRadius: 20,
                    overflow: "hidden",
                    boxShadow: "0 12px 36px rgba(15, 23, 42, 0.06)",
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
                    transition: "border-color 0.2s, box-shadow 0.2s",
                  }}
                >
                  {featuredPost.coverImage && (
                    <div style={{ position: "relative", minHeight: 280, width: "100%", background: "#0f172a" }}>
                      <Image
                        src={featuredPost.coverImage}
                        alt={featuredPost.title}
                        fill
                        style={{ objectFit: "cover" }}
                        priority
                        sizes="(max-width: 900px) 100vw, 50vw"
                      />
                    </div>
                  )}

                  <div style={{ padding: "clamp(24px, 4vw, 40px)", display: "flex", flexDirection: "column", justifyContent: "center" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14 }}>
                      <span style={{ fontSize: 12, fontWeight: 700, color: "#7c3aed", background: "#f3e8ff", padding: "4px 12px", borderRadius: 999 }}>
                        {featuredPost.category}
                      </span>
                      <span style={{ fontSize: 13, color: "#6b7280", display: "inline-flex", alignItems: "center", gap: 4 }}>
                        <Calendar size={14} />
                        {featuredPost.pubDate}
                      </span>
                      <span style={{ fontSize: 13, color: "#6b7280", display: "inline-flex", alignItems: "center", gap: 4 }}>
                        <Clock size={14} />
                        {featuredPost.readingTime}
                      </span>
                    </div>

                    <h2
                      style={{
                        fontSize: "clamp(22px, 2.5vw, 30px)",
                        fontWeight: 800,
                        color: "#111827",
                        lineHeight: 1.25,
                        letterSpacing: "-0.03em",
                        margin: "0 0 14px",
                      }}
                    >
                      {featuredPost.title}
                    </h2>

                    <p style={{ fontSize: 16, lineHeight: 1.6, color: "#4b5563", margin: "0 0 24px", fontWeight: 400 }}>
                      {featuredPost.excerpt}
                    </p>

                    <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                      <span
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          gap: 6,
                          fontSize: 15,
                          fontWeight: 700,
                          color: "#7c3aed",
                        }}
                      >
                        Read Featured Briefing
                        <ArrowUpRight size={18} strokeWidth={2.25} />
                      </span>
                    </div>
                  </div>
                </article>
              </Link>
            </div>
          </section>
        )}

        {/* All Articles Grid */}
        <section style={{ padding: "40px clamp(16px, 4vw, 36px) clamp(48px, 7vw, 80px)", background: "#fafaf9" }}>
          <div style={{ maxWidth: 1200, margin: "0 auto" }}>
            <h2
              style={{
                fontSize: 20,
                fontWeight: 800,
                color: "#111827",
                letterSpacing: "-0.02em",
                margin: "0 0 20px",
              }}
            >
              All Articles &amp; Case Notes
            </h2>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
                gap: 24,
              }}
            >
              {otherPosts.map(post => (
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
