import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft, ArrowUpRight, Calendar, Clock, ExternalLink } from "lucide-react"
import { FALLBACK_POSTS, getPostBySlug, SUBSTACK_URL } from "@/lib/substack"
import { CALENDLY_URL, PROFILE_UPWORK } from "@/lib/site"
import { SiteHeader, SITE_HEADER_H } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return FALLBACK_POSTS.map(post => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) return { title: "Article Not Found" }

  return {
    title: `${post.title} | Dereje Seifu`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.pubDate,
      authors: ["Dereje Seifu"],
      images: post.coverImage ? [{ url: post.coverImage }] : undefined,
    },
  }
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params
  const post = getPostBySlug(slug)

  if (!post) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <main style={{ paddingTop: SITE_HEADER_H }}>
        <article style={{ background: "#ffffff" }}>
          <header style={{ background: "#fafaf9", borderBottom: "1px solid #e5e7eb", padding: "clamp(32px, 5vw, 56px) clamp(16px, 4vw, 36px)" }}>
            <div style={{ maxWidth: 840, margin: "0 auto" }}>
              <Link
                href="/blog"
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
                Back to Articles
              </Link>

              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14, flexWrap: "wrap" }}>
                <span style={{ fontSize: 12, fontWeight: 700, color: "#7c3aed", background: "#f3e8ff", padding: "4px 12px", borderRadius: 999 }}>
                  {post.category}
                </span>
                <span style={{ fontSize: 13, color: "#6b7280", display: "inline-flex", alignItems: "center", gap: 4 }}>
                  <Calendar size={14} />
                  {post.pubDate}
                </span>
                <span style={{ fontSize: 13, color: "#6b7280", display: "inline-flex", alignItems: "center", gap: 4 }}>
                  <Clock size={14} />
                  {post.readingTime}
                </span>
              </div>

              <h1
                style={{
                  fontSize: "clamp(28px, 4vw, 42px)",
                  fontWeight: 800,
                  letterSpacing: "-0.03em",
                  color: "#111827",
                  lineHeight: 1.18,
                  margin: "0 0 20px",
                }}
              >
                {post.title}
              </h1>

              <p style={{ fontSize: "clamp(16px, 1.8vw, 19px)", lineHeight: 1.6, color: "#4b5563", margin: "0 0 24px", fontWeight: 400 }}>
                {post.excerpt}
              </p>

              <div style={{ display: "flex", flexWrap: "wrap", gap: 12, alignItems: "center" }}>
                <a
                  href={post.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 8,
                    padding: "12px 24px",
                    borderRadius: 999,
                    fontSize: 14,
                    fontWeight: 700,
                    color: "#ffffff",
                    textDecoration: "none",
                    background: "linear-gradient(145deg, #7c3aed 0%, #6d28d9 100%)",
                    boxShadow: "0 6px 20px rgba(124, 58, 237, 0.3)",
                  }}
                >
                  Read &amp; Subscribe on Substack
                  <ExternalLink size={16} />
                </a>
              </div>
            </div>
          </header>

          {post.coverImage && (
            <div style={{ maxWidth: 840, margin: "32px auto 0", padding: "0 clamp(16px, 4vw, 36px)" }}>
              <div style={{ position: "relative", width: "100%", aspectRatio: "16 / 9", borderRadius: 16, overflow: "hidden", border: "1px solid #e5e7eb" }}>
                <Image src={post.coverImage} alt={post.title} fill style={{ objectFit: "cover" }} priority />
              </div>
            </div>
          )}

          <div style={{ maxWidth: 840, margin: "0 auto", padding: "40px clamp(16px, 4vw, 36px) 60px" }}>
            <div
              style={{
                background: "#fafaf9",
                border: "1px solid #e5e7eb",
                borderRadius: 16,
                padding: "32px clamp(20px, 4vw, 36px)",
                marginBottom: 44,
                textAlign: "center",
              }}
            >
              <h3 style={{ fontSize: 20, fontWeight: 700, color: "#111827", margin: "0 0 10px" }}>
                Subscribe to Built for Prod on Substack
              </h3>
              <p style={{ fontSize: 15, color: "#6b7280", margin: "0 0 20px", lineHeight: 1.6 }}>
                Get new deep-dive articles on Healthcare AI, HIPAA compliance blueprints, and cloud architecture sent straight to your inbox.
              </p>
              <a
                href={post.link}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  padding: "14px 32px",
                  borderRadius: 999,
                  fontSize: 15,
                  fontWeight: 700,
                  color: "#ffffff",
                  textDecoration: "none",
                  background: "linear-gradient(165deg, #16c713 0%, #14a800 42%, #118f00 100%)",
                  boxShadow: "0 6px 20px rgba(20, 168, 0, 0.35)",
                }}
              >
                Read Full Article &amp; Join Newsletter
                <ArrowUpRight size={18} strokeWidth={2.25} />
              </a>
            </div>

            <div
              style={{
                background: "linear-gradient(145deg, #1e1b4b 0%, #311b92 100%)",
                color: "#ffffff",
                borderRadius: 16,
                padding: "36px clamp(20px, 4vw, 36px)",
                textAlign: "center",
                boxShadow: "0 12px 36px rgba(49, 27, 146, 0.3)",
              }}
            >
              <h3 style={{ fontSize: 22, fontWeight: 800, color: "#ffffff", margin: "0 0 10px" }}>
                Building a Healthcare AI or Enterprise SaaS Platform?
              </h3>
              <p style={{ fontSize: 15, color: "#ddd6fe", margin: "0 0 24px", lineHeight: 1.6, maxWidth: 600, marginLeft: "auto", marginRight: "auto" }}>
                I partner with founders and CTOs to design HIPAA-compliant architectures, low-latency RAG pipelines, and multi-tenant database isolation.
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 12 }}>
                <a
                  href={CALENDLY_URL}
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
                    boxShadow: "0 6px 20px rgba(124, 58, 237, 0.4)",
                  }}
                >
                  Schedule Strategy Call
                  <ArrowUpRight size={18} strokeWidth={2.25} />
                </a>

                <a
                  href={PROFILE_UPWORK}
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
                    background: "rgba(255, 255, 255, 0.12)",
                    border: "1px solid rgba(255, 255, 255, 0.25)",
                  }}
                >
                  Hire me on Upwork
                  <ArrowUpRight size={18} strokeWidth={2.25} />
                </a>
              </div>
            </div>
          </div>
        </article>
        <SiteFooter />
      </main>
    </div>
  )
}
