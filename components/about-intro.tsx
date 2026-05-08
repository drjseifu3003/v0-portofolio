"use client"

import { CheckCircle2, Sparkles } from "lucide-react"

/** Stack groups ordered by importance for client evaluation (highest first). */
const STACK_GROUPS: { title: string; subtitle?: string; items: string[] }[] = [
  {
    title: "Software architecture & system design",
    subtitle: "How the product is structured before build and how it survives growth",
    items: [
      "Software architecture",
      "System design",
      "SaaS architecture",
      "RAG system design",
      "Database schema design",
      "Scale & capacity planning",
    ],
  },
  {
    title: "JavaScript & TypeScript stacks",
    subtitle: "Core web and API delivery",
    items: ["TypeScript", "Next.js", "React", "Node.js", "NestJS", "Express", "MERN", "PERN"],
  },
  {
    title: "AI integration & retrieval",
    subtitle: "Shipping AI features in production, not slide decks",
    items: ["AI integration", "RAG", "LangChain", "Vector databases", "MLOps"],
  },
  {
    title: "Python & APIs",
    subtitle: "Fast services and ML-adjacent backends",
    items: ["Python", "FastAPI"],
  },
  {
    title: "Cloud, DevOps & data",
    subtitle: "Where it runs and how it is operated",
    items: ["AWS (Lambda, serverless)", "Supabase", "DevOps"],
  },
  {
    title: "Performance (backend)",
    subtitle: "Throughput and stability under real traffic",
    items: [
      "API latency & throughput",
      "Query & index tuning",
      "Caching layers (Redis, HTTP)",
      "Async jobs & queues",
      "Rate limits & graceful scaling",
    ],
  },
  {
    title: "Performance (frontend)",
    subtitle: "Perceived speed and layout stability",
    items: [
      "Core Web Vitals",
      "LCP & CLS tuning",
      "Code splitting & lazy loading",
      "Image & asset optimization",
      "Caching & CDN-friendly builds",
    ],
  },
  {
    title: "SEO & search visibility",
    subtitle: "Classic search, structured data, and visibility in AI-assisted search and overviews",
    items: ["SEO", "Technical SEO", "AI SEO", "Metadata & Open Graph", "Structured data (JSON-LD)", "Sitemaps & indexing"],
  },
  {
    title: "Voice & telephony",
    subtitle: "Realtime and telephony-backed products",
    items: ["Vapi", "Retell", "Twilio"],
  },
  {
    title: "Workflow automation",
    items: ["N8N"],
  },
  {
    title: "Tools & integrations",
    subtitle: "Connecting the product to how your team already works",
    items: ["Slack", "WhatsApp", "Telegram", "Notion", "Airtable", "GoHighLevel (GHL)"],
  },
]

const TRUST_PILLARS: { headline: string; body: string }[] = [
  {
    headline: "Production-first delivery",
    body: "Real users and real uptime. Strong typing, sane boundaries, deployments you can trust on day one, not a demo folder that crumbles.",
  },
  {
    headline: "One senior owner for the messy middle",
    body: "I stay across frontend, backends, integrations, AI, and cloud so you aren’t corralling overlapping vendors before launch.",
  },
  {
    headline: "Straightforward cadence",
    body: "You get pragmatic scope, written decisions when it matters, and demos you can show stakeholders without spin.",
  },
]

export function AboutIntro() {
  return (
    <section
      className="gradient-brand-hero border-b border-border"
      style={{ padding: "clamp(20px, 4vw, 56px) clamp(16px, 4vw, 36px) clamp(56px, 9vw, 104px)" }}
    >
      <style jsx>{`
        .about-shell {
          max-width: 960px;
          margin: 0 auto;
        }
        .about-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: hsl(var(--brand-accent));
          margin-bottom: 8px;
        }
        .trust-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 16px;
          margin-top: 40px;
        }
        @media (min-width: 768px) {
          .trust-grid {
            grid-template-columns: repeat(3, minmax(0, 1fr));
            gap: 18px;
          }
        }
        .stack-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 18px;
          margin-top: 40px;
        }
        @media (min-width: 900px) {
          .stack-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }
        .pill-wrap {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-top: 14px;
        }
      `}</style>

      <div className="about-shell">
        <div style={{ textAlign: "center", maxWidth: 780, margin: "0 auto" }}>
          <p className="about-eyebrow" style={{ justifyContent: "center", marginTop: 0, marginBottom: 6 }}>
            <Sparkles size={15} strokeWidth={2} aria-hidden />
            Hire with confidence
          </p>
          <h1
            style={{
              fontSize: "clamp(32px, 4.6vw, 48px)",
              fontWeight: 600,
              letterSpacing: "-0.035em",
              color: "hsl(var(--foreground))",
              margin: "0 0 clamp(16px, 2.5vw, 22px)",
              lineHeight: 1.08,
            }}
          >
            About me
          </h1>
          <p
            style={{
              fontSize: "clamp(17px, 2.1vw, 19px)",
              lineHeight: 1.72,
              color: "hsl(var(--muted-foreground))",
              margin: "0 0 1.15rem",
              fontWeight: 400,
            }}
          >
            I’m Dereje Seifu, a senior full-stack engineer with 4+ years shipping production software for founders, startups, and lean product
            teams. I’m remote by default, timezone-flexible, and used to owning end-to-end delivery: product UI, APIs, AI features, automations, and
            the cloud pieces that keep them running.
          </p>
          <p
            style={{
              fontSize: "clamp(17px, 2.1vw, 19px)",
              lineHeight: 1.72,
              color: "hsl(var(--muted-foreground))",
              margin: 0,
              fontWeight: 400,
            }}
          >
            If you’re on this page, you’re already evaluating whether I can move your roadmap without drama. The short answer: I build for outcomes you
            can measure: ship velocity, fewer integration surprises, and systems that don’t need a rewrite when traffic or scope grows. Below is the
            stack I use in live products, so you know exactly what you’re buying before we talk.
          </p>
        </div>

        <div className="trust-grid">
          {TRUST_PILLARS.map(card => (
            <div
              key={card.headline}
              style={{
                background: "#fff",
                border: "1px solid #e5e7eb",
                borderRadius: 16,
                padding: "22px 20px",
                boxShadow: "0 8px 30px rgba(15, 23, 42, 0.05)",
                textAlign: "left",
              }}
            >
              <div style={{ display: "flex", alignItems: "flex-start", gap: 10, marginBottom: 10 }}>
                <CheckCircle2 size={20} strokeWidth={2} color="hsl(262 53% 50%)" style={{ flexShrink: 0, marginTop: 2 }} aria-hidden />
                <h2
                  style={{
                    fontSize: 16,
                    fontWeight: 600,
                    color: "hsl(var(--foreground))",
                    letterSpacing: "-0.02em",
                    margin: 0,
                    lineHeight: 1.25,
                  }}
                >
                  {card.headline}
                </h2>
              </div>
              <p style={{ margin: 0, fontSize: 14, lineHeight: 1.65, color: "hsl(var(--muted-foreground))", paddingLeft: 30 }}>{card.body}</p>
            </div>
          ))}
        </div>

        <div style={{ marginTop: 56, textAlign: "center" }}>
          <p className="about-eyebrow" style={{ justifyContent: "center", marginBottom: 10 }}>
            Stack & capabilities
          </p>
          <h2
            style={{
              fontSize: "clamp(22px, 3vw, 28px)",
              fontWeight: 600,
              letterSpacing: "-0.03em",
              color: "hsl(var(--foreground))",
              margin: "0 0 8px",
            }}
          >
            Tools I’ve shipped in production
          </h2>
          <p style={{ margin: "0 auto", maxWidth: 640, fontSize: 15, lineHeight: 1.65, color: "hsl(var(--muted-foreground))", fontWeight: 400 }}>
            Grouped for clarity, ordered roughly by how central each area is to engagements. Every tag reflects work shipped or operated for clients, not
            resume decoration.
          </p>
        </div>

        <div className="stack-grid">
          {STACK_GROUPS.map(group => (
            <div
              key={group.title}
              style={{
                background: "#fff",
                border: "1px solid #e8eaed",
                borderRadius: 18,
                padding: "24px 22px",
                boxShadow: "0 4px 22px rgba(15, 23, 42, 0.04)",
              }}
            >
              <h3
                style={{
                  fontSize: 16,
                  fontWeight: 600,
                  letterSpacing: "-0.02em",
                  color: "hsl(var(--foreground))",
                  margin: 0,
                  lineHeight: 1.3,
                }}
              >
                {group.title}
              </h3>
              {group.subtitle ? (
                <p style={{ margin: "6px 0 0", fontSize: 13, color: "#9ca3af", lineHeight: 1.45, fontWeight: 400 }}>{group.subtitle}</p>
              ) : null}
              <div className="pill-wrap" role="list" aria-label={group.title}>
                {group.items.map(item => (
                  <span
                    key={item}
                    role="listitem"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      padding: "7px 14px",
                      borderRadius: 999,
                      fontSize: 13,
                      fontWeight: 500,
                      color: "#374151",
                      background: "#f9fafb",
                      border: "1px solid #e5e7eb",
                      letterSpacing: "-0.01em",
                    }}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <p
          style={{
            marginTop: 40,
            textAlign: "center",
            fontSize: 15,
            lineHeight: 1.65,
            color: "hsl(var(--muted-foreground))",
            maxWidth: 640,
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          Don’t see a niche tool listed? I’ve stitched plenty of bespoke APIs and internal systems together. If it has docs or webhooks, we can plan
          it.
        </p>
      </div>
    </section>
  )
}
