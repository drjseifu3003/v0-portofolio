"use client"

import { ArrowUpRight } from "lucide-react"
import { PROFILE_UPWORK, CALENDLY_URL } from "@/lib/site"

const STEPS = [
  {
    n: 1,
    title: "Healthcare AI Strategy & Architecture",
    body:
      "I translate complex clinical requirements into clear blueprints. I map out HIPAA-conscious system architectures, multi-tenant database isolation, EHR/FHIR API integrations, and structured backend pipelines.",
  },
  {
    n: 2,
    title: "Production Clinical AI Build",
    body:
      "I implement production-grade Healthcare AI end-to-end. From Next.js frontends to Python RAG engines and AI agents, I deploy code handling safety-critical workflows, real-time teleguidance, and vector search.",
  },
  {
    n: 3,
    title: "Scale, Compliance & Automation",
    body:
      "Once live, I keep your healthcare platform running smoothly. I focus on system hardening, zero-downtime AWS infrastructure, immutable audit logging, and automated clinical intake workflows as traffic scales.",
  },
] as const

export function HowWeHelpSection() {
  const ctaInner = (
    <>
      Hire me on Upwork
      <ArrowUpRight size={18} strokeWidth={2.25} color="#ffffff" aria-hidden />
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
    color: "#ffffff",
    textDecoration: "none",
    background: "linear-gradient(165deg, #16c713 0%, #14a800 42%, #118f00 100%)",
    border: "1px solid rgba(255, 255, 255, 0.22)",
    boxShadow: "0 8px 28px rgba(20, 168, 0, 0.32)",
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
          I work with HealthTech founders and clinical engineering teams in three steps: shaping the architecture, shipping production AI and SaaS, then scaling without compliance or security risks.
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

        <div style={{ marginTop: 40, display: "flex", flexDirection: "column", alignItems: "center", gap: 16 }}>
          <p
            style={{
              fontSize: 14,
              fontWeight: 600,
              color: "#374151",
              background: "#ffffff",
              border: "1px solid #e5e7eb",
              borderRadius: 999,
              padding: "8px 20px",
              boxShadow: "0 2px 10px rgba(15,23,42,0.04)",
              margin: 0,
            }}
          >
            Engagement Models: Scoped fixed-phase builds &amp; ongoing technical partner retainers ($2k+/mo)
          </p>

          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 12 }}>
            <a
              href={CALENDLY_URL}
              style={{
                ...ctaStyle,
                background: "linear-gradient(145deg, #7c3aed 0%, #6d28d9 100%)",
                boxShadow: "0 8px 28px rgba(124, 58, 237, 0.32)",
              }}
              target="_blank"
              rel="noopener noreferrer"
            >
              Schedule Strategy Call
              <ArrowUpRight size={18} strokeWidth={2.25} color="#ffffff" aria-hidden />
            </a>

            <a href={PROFILE_UPWORK} style={ctaStyle} target="_blank" rel="noopener noreferrer">
              {ctaInner}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
