"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { studies, type Study } from "@/app/case-study/data"
import { CaseStudyCardPreview } from "@/components/case-study-card-preview"

const HOME_SLUGS = ["healium-ckd", "roasform", "intuitysync"] as const

export function ProjectsSection() {
  const homeStudies = HOME_SLUGS.map(slug => studies.find(s => s.slug === slug)).filter((s): s is Study => Boolean(s))

  return (
    <section
      id="projects"
      style={{
        background: "#fafaf9",
        borderBottom: "1px solid #e5e7eb",
        padding: "clamp(40px, 6vw, 72px) 0 clamp(48px, 7vw, 80px)",
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "0 clamp(16px, 4vw, 36px)",
          boxSizing: "border-box",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            fontSize: "clamp(28px, 3.8vw, 42px)",
            fontWeight: 700,
            color: "#111827",
            letterSpacing: "-0.03em",
            margin: "0 0 clamp(36px, 5vw, 48px)",
            lineHeight: 1.15,
          }}
        >
          Case studies
        </h2>

        <div className="sp-home-case-grid">
          <style jsx>{`
            .sp-home-case-grid {
              display: grid;
              grid-template-columns: 1fr;
              gap: 24px;
              margin-bottom: 44px;
            }
            @media (min-width: 768px) {
              .sp-home-case-grid {
                grid-template-columns: repeat(3, minmax(0, 1fr));
              }
            }
          `}</style>
          {homeStudies.map(study => (
            <CaseStudyCardPreview key={study.slug} study={study} />
          ))}
        </div>

        <div style={{ textAlign: "center" }}>
          <Link
            href="/case-study"
            style={{
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
            }}
          >
            View all case studies
            <ArrowRight size={18} strokeWidth={2} />
          </Link>
        </div>
      </div>
    </section>
  )
}
