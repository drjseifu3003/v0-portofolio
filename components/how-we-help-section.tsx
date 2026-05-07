"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { isExternalUrl } from "@/lib/site"

const STEPS = [
  {
    n: 1,
    title: "Strategy & architecture",
    body:
      "I help you sharpen the problem, trim scope to what actually ships, and design the stack, AI agents, RAG, voice, data, integrations, and hosting, into a roadmap you can fund and execute.",
  },
  {
    n: 2,
    title: "Build",
    body:
      "I implement production-grade software end to end: Next.js UIs, Node or Python backends, AI and voice pipelines, auth, Stripe, CRM hooks, webhooks, and observability, not demos that collapse under real traffic.",
  },
  {
    n: 3,
    title: "Scale & iterate",
    body:
      "Once you are live, I keep you moving, performance tuning, automation (including N8N), reliability fixes, security-minded hardening, and new features, so growth does not force a risky rewrite.",
  },
] as const

export function HowWeHelpSection() {
  const ctaHref = process.env.NEXT_PUBLIC_VSL_PRIMARY_HREF ?? "/#contact"
  const ctaExternal = isExternalUrl(ctaHref)

  const ctaInner = (
    <>
      Get started
      <ArrowRight size={18} strokeWidth={2} color="#5b21b6" />
    </>
  )

  const ctaStyle = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    padding: "16px 40px",
    borderRadius: 999,
    fontSize: 16,
    fontWeight: 700,
    letterSpacing: "-0.02em",
    color: "#5b21b6",
    textDecoration: "none",
    background: "linear-gradient(180deg, #ede9fe 0%, #ddd6fe 100%)",
    border: "1px solid rgba(124, 58, 237, 0.3)",
    boxShadow: "0 8px 28px rgba(124, 58, 237, 0.2)",
  } as const

  return (
    <section
      id="how-we-help"
      style={{
        background: "#fafaf9",
        borderBottom: "1px solid #e5e7eb",
        padding: "clamp(44px, 7vw, 72px) 0 clamp(48px, 8vw, 88px)",
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "0 clamp(16px, 4vw, 36px)",
          textAlign: "center",
          boxSizing: "border-box",
        }}
      >
        <h2
          style={{
            fontSize: "clamp(28px, 4vw, 42px)",
            fontWeight: 700,
            color: "#111827",
            margin: "0 0 16px",
            letterSpacing: "-0.03em",
            lineHeight: 1.12,
          }}
        >
          How I can help
        </h2>
        <p
          style={{
            fontSize: "clamp(15px, 1.6vw, 18px)",
            color: "#6b7280",
            maxWidth: 680,
            margin: "0 auto 48px",
            lineHeight: 1.55,
            fontWeight: 400,
          }}
        >
          I work with founders and teams in three steps, shaping the idea, shipping production AI and SaaS, then growing without fragile rewrites.
        </p>

        <div className="sp-help-grid">
          <style jsx>{`
            .sp-help-grid {
              display: grid;
              grid-template-columns: 1fr;
              gap: 28px;
              text-align: center;
              align-items: stretch;
            }
            @media (min-width: 768px) {
              .sp-help-grid {
                grid-template-columns: repeat(3, minmax(0, 1fr));
                gap: 24px;
              }
            }
          `}</style>
          {STEPS.map(s => (
            <div
              key={s.n}
              style={{
                position: "relative",
                background: "#ffffff",
                border: "1px solid #e8eaed",
                borderRadius: 14,
                padding: "52px 24px 36px",
                boxSizing: "border-box",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  width: 42,
                  height: 42,
                  borderRadius: 10,
                  background: "linear-gradient(145deg, #a78bfa 0%, #7c3aed 100%)",
                  color: "#fff",
                  fontSize: 16,
                  fontWeight: 800,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: "0 6px 18px rgba(124, 58, 237, 0.4)",
                }}
              >
                {s.n}
              </div>
              <h3
                style={{
                  fontSize: 17,
                  fontWeight: 700,
                  color: "#111827",
                  margin: "0 0 12px",
                  letterSpacing: "-0.02em",
                }}
              >
                {s.title}
              </h3>
              <p
                style={{
                  fontSize: 15,
                  color: "#6b7280",
                  lineHeight: 1.65,
                  margin: 0,
                  fontWeight: 400,
                }}
              >
                {s.body}
              </p>
            </div>
          ))}
        </div>

        <div style={{ marginTop: 48 }}>
          {ctaExternal ? (
            <a href={ctaHref} style={ctaStyle} target="_blank" rel="noopener noreferrer">
              {ctaInner}
            </a>
          ) : (
            <Link href={ctaHref} style={ctaStyle}>
              {ctaInner}
            </Link>
          )}
        </div>
      </div>
    </section>
  )
}
