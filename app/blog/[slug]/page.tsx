import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft, ArrowUpRight, Calendar, CheckCircle2, Clock, ExternalLink, Lightbulb, ShieldCheck } from "lucide-react"
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

  // Key executive takeaways customized per article for high reader engagement
  const takeawaysMap: Record<string, string[]> = {
    "the-silent-data-leak-in-healthtech": [
      "Application-level data filtering relies on 100% human perfection; a single missing developer filter leaks tenant data.",
      "PostgreSQL Row-Level Security (RLS) moves security into the database kernel, blocking cross-tenant breaches at the hardware level.",
      "Database-enforced isolation drastically reduces SOC2/HIPAA audit scope and accelerates feature velocity.",
    ],
    "the-hipaa-compliance-bottleneck-why": [
      "Standard AWS services fail HIPAA compliance out of the box (e.g. S3 unencrypted HTTP, unencrypted logs, public subnets).",
      "Hardened Terraform blueprints automate KMS encryption, multi-region CloudTrail auditing, and private subnet isolation.",
      "Shifting compliance left eliminates $30k+ consulting fees and lets healthtech founders launch in days instead of months.",
    ],
    "why-serverless-ai-inference-made": [
      "Variable clinical ultrasound workloads make serverless scaling cost-effective compared to persistent 24/7 GPU servers.",
      "Cold starts in medical AI models can take several seconds—unacceptable during live doctor-patient consultations.",
      "Provisioned concurrency warm pools resolve latency spikes during clinic operating hours while preserving zero-cost idle overnight.",
    ],
    "how-i-reduced-aws-costs-by-50-on": [
      "Over-provisioned cloud compute is a common failure mode in early production healthcare platforms.",
      "Right-sizing Lambda memory, optimizing container image sizes, and leveraging auto-scaling halved AWS infrastructure spend.",
      "Performance and sub-second inference response times remained completely unchanged after cost optimization.",
    ],
  }

  const takeaways = takeawaysMap[post.slug] || [
    "Production-grade architectures require strict separation of concerns and deterministic security enforcement.",
    "Designing for scale early prevents expensive rewrites and cloud infrastructure waste.",
    "End-to-end technical accountability ensures compliance and high system availability.",
  ]

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <main style={{ paddingTop: SITE_HEADER_H }}>
        <article style={{ background: "#ffffff" }}>
          {/* Article Header */}
          <header style={{ background: "linear-gradient(180deg, #fafaf9 0%, #ffffff 100%)", borderBottom: "1px solid #e5e7eb", padding: "clamp(32px, 5vw, 56px) clamp(16px, 4vw, 36px)" }}>
            <div style={{ maxWidth: 760, margin: "0 auto" }}>
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
                  transition: "color 0.15s",
                }}
              >
                <ArrowLeft size={16} />
                Back to All Articles
              </Link>

              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16, flexWrap: "wrap" }}>
                <span style={{ fontSize: 12, fontWeight: 700, color: "#7c3aed", background: "#f3e8ff", padding: "4px 14px", borderRadius: 999 }}>
                  {post.category}
                </span>
                <span style={{ fontSize: 13, color: "#6b7280", display: "inline-flex", alignItems: "center", gap: 4, fontWeight: 500 }}>
                  <Calendar size={14} color="#9ca3af" />
                  {post.pubDate}
                </span>
                <span style={{ fontSize: 13, color: "#6b7280", display: "inline-flex", alignItems: "center", gap: 4, fontWeight: 500 }}>
                  <Clock size={14} color="#9ca3af" />
                  {post.readingTime}
                </span>
              </div>

              <h1
                style={{
                  fontSize: "clamp(30px, 4.2vw, 46px)",
                  fontWeight: 800,
                  letterSpacing: "-0.035em",
                  color: "#111827",
                  lineHeight: 1.15,
                  margin: "0 0 20px",
                }}
              >
                {post.title}
              </h1>

              {/* Author Byline */}
              <div style={{ display: "flex", alignItems: "center", gap: 14, paddingTop: 16, borderTop: "1px solid #f3f4f6" }}>
                <div style={{ position: "relative", width: 46, height: 46, borderRadius: "50%", overflow: "hidden", border: "2px solid #7c3aed", flexShrink: 0 }}>
                  <Image src="/images/profile.jpeg" alt="Dereje Seifu" fill style={{ objectFit: "cover" }} />
                </div>
                <div>
                  <div style={{ fontSize: 15, fontWeight: 700, color: "#111827", display: "flex", alignItems: "center", gap: 6 }}>
                    Dereje Seifu
                    <ShieldCheck size={16} color="#7c3aed" />
                  </div>
                  <div style={{ fontSize: 13, color: "#6b7280", fontWeight: 500 }}>
                    Healthcare AI Systems Architect &middot; Built for Prod
                  </div>
                </div>
              </div>
            </div>
          </header>

          {/* Cover Image */}
          {post.coverImage && (
            <div style={{ maxWidth: 880, margin: "36px auto 0", padding: "0 clamp(16px, 4vw, 36px)" }}>
              <div style={{ position: "relative", width: "100%", aspectRatio: "16 / 9", borderRadius: 20, overflow: "hidden", border: "1px solid #e5e7eb", boxShadow: "0 12px 36px rgba(15, 23, 42, 0.08)" }}>
                <Image src={post.coverImage} alt={post.title} fill style={{ objectFit: "cover" }} priority sizes="(max-width: 900px) 100vw, 880px" />
              </div>
            </div>
          )}

          {/* Main Article Content Container */}
          <div style={{ maxWidth: 760, margin: "0 auto", padding: "40px clamp(16px, 4vw, 36px) 60px" }}>
            {/* Key Executive Takeaways Box */}
            <div
              style={{
                background: "#fefce8",
                border: "1.5px solid #fef08a",
                borderRadius: 16,
                padding: "24px 28px",
                marginBottom: 36,
                boxShadow: "0 4px 20px rgba(250, 204, 21, 0.08)",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 15, fontWeight: 800, color: "#854d0e", marginBottom: 12 }}>
                <Lightbulb size={18} color="#ca8a04" />
                Key Executive Takeaways
              </div>
              <ul style={{ margin: 0, paddingLeft: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 10 }}>
                {takeaways.map((item, idx) => (
                  <li key={idx} style={{ display: "flex", alignItems: "flex-start", gap: 10, fontSize: 15, lineHeight: 1.5, color: "#713f12" }}>
                    <CheckCircle2 size={18} color="#ca8a04" style={{ flexShrink: 0, marginTop: 2 }} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Full Article Content */}
            {post.contentHtml ? (
              <div className="sp-article-content">
                <style dangerouslySetInnerHTML={{ __html: `
                  .sp-article-content {
                    font-size: 18px;
                    line-height: 1.8;
                    color: #374151;
                  }
                  .sp-article-content p {
                    margin-bottom: 24px;
                  }
                  .sp-article-content h2,
                  .sp-article-content h3,
                  .sp-article-content h4 {
                    color: #111827;
                    font-weight: 800;
                    letter-spacing: -0.025em;
                    margin-top: 40px;
                    margin-bottom: 16px;
                    line-height: 1.25;
                  }
                  .sp-article-content h2 {
                    font-size: 26px;
                  }
                  .sp-article-content h3 {
                    font-size: 21px;
                  }
                  .sp-article-content ul,
                  .sp-article-content ol {
                    margin-bottom: 24px;
                    padding-left: 24px;
                  }
                  .sp-article-content li {
                    margin-bottom: 10px;
                  }
                  .sp-article-content img {
                    max-width: 100%;
                    height: auto;
                    border-radius: 14px;
                    margin: 24px 0;
                    border: 1px solid #e5e7eb;
                  }
                  .sp-article-content figure {
                    margin: 28px 0;
                  }
                  .sp-article-content blockquote {
                    border-left: 4px solid #7c3aed;
                    padding-left: 20px;
                    margin: 28px 0;
                    font-style: italic;
                    color: #4b5563;
                  }
                  .sp-article-content a {
                    color: #7c3aed;
                    text-decoration: underline;
                  }
                  .sp-article-content .subscription-widget-wrap-editor,
                  .sp-article-content .subscription-widget,
                  .sp-article-content .image-link-expand {
                    display: none !important;
                  }
                ` }} />
                <div dangerouslySetInnerHTML={{ __html: post.contentHtml }} />
              </div>
            ) : (
              <div style={{ fontSize: 18, lineHeight: 1.8, color: "#374151", fontWeight: 400, margin: "0 0 32px" }}>
                <p style={{ margin: "0 0 24px", fontSize: 19, lineHeight: 1.7, color: "#1f2937", fontWeight: 500 }}>
                  {post.excerpt}
                </p>
                <p style={{ margin: "0 0 24px" }}>
                  When architecting healthcare AI and multi-tenant SaaS platforms, the engineering choices made during early stages directly dictate long-term compliance, security liability, and operating efficiency.
                </p>
              </div>
            )}

            {/* In-Line Substack Subscription Card */}
            <div
              style={{
                background: "linear-gradient(145deg, #f9fafb 0%, #f3f4f6 100%)",
                border: "1px solid #e5e7eb",
                borderRadius: 16,
                padding: "28px clamp(20px, 4vw, 32px)",
                margin: "40px 0",
                textAlign: "center",
                boxShadow: "0 4px 20px rgba(15, 23, 42, 0.03)",
              }}
            >
              <h3 style={{ fontSize: 19, fontWeight: 800, color: "#111827", margin: "0 0 8px", letterSpacing: "-0.02em" }}>
                Read the Full Deep-Dive on Substack
              </h3>
              <p style={{ fontSize: 15, color: "#6b7280", margin: "0 0 20px", lineHeight: 1.5, maxWidth: 540, marginLeft: "auto", marginRight: "auto" }}>
                Subscribe to <strong>Built for Prod</strong> on Substack to receive weekly architecture notes, HIPAA security checklists, and production cloud lessons.
              </p>
              <a
                href={post.link}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  padding: "13px 30px",
                  borderRadius: 999,
                  fontSize: 15,
                  fontWeight: 700,
                  color: "#ffffff",
                  textDecoration: "none",
                  background: "linear-gradient(165deg, #16c713 0%, #14a800 42%, #118f00 100%)",
                  boxShadow: "0 6px 20px rgba(20, 168, 0, 0.35)",
                }}
              >
                Open Article on Substack
                <ExternalLink size={17} />
              </a>
            </div>

            {/* Bottom Conversion Card */}
            <div
              style={{
                background: "linear-gradient(145deg, #1e1b4b 0%, #311b92 100%)",
                color: "#ffffff",
                borderRadius: 20,
                padding: "36px clamp(20px, 4vw, 36px)",
                textAlign: "center",
                boxShadow: "0 14px 40px rgba(49, 27, 146, 0.35)",
                marginTop: 48,
              }}
            >
              <h3 style={{ fontSize: 22, fontWeight: 800, color: "#ffffff", margin: "0 0 10px", letterSpacing: "-0.02em" }}>
                Building a Healthcare AI or Enterprise SaaS Platform?
              </h3>
              <p style={{ fontSize: 15, color: "#ddd6fe", margin: "0 0 24px", lineHeight: 1.6, maxWidth: 580, marginLeft: "auto", marginRight: "auto" }}>
                I partner with HealthTech founders and CTOs to design HIPAA-compliant architectures, low-latency RAG pipelines, and multi-tenant database security.
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
