"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { studies } from "@/app/case-study/data"
import { CaseStudyCardPreview } from "@/components/case-study-card-preview"

/** Bottom-of-detail strip: three related cards + CTA, matches home case grid styling */
export function OtherCaseStudiesSection({ excludeSlug }: { excludeSlug: string }) {
  const others = studies.filter(s => s.slug !== excludeSlug).slice(0, 3)
  if (others.length === 0) return null

  return (
    <section
      style={{
        background: "#fafaf9",
        borderTop: "1px solid #e5e7eb",
        padding: "clamp(48px, 7vw, 88px) 0 clamp(56px, 8vw, 96px)",
        marginTop: "clamp(32px, 5vw, 48px)",
        marginLeft: "calc(-1 * clamp(20px, 4vw, 36px))",
        marginRight: "calc(-1 * clamp(20px, 4vw, 36px))",
        paddingLeft: "clamp(20px, 4vw, 36px)",
        paddingRight: "clamp(20px, 4vw, 36px)",
      }}
      aria-labelledby="other-case-studies-heading"
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <h2
          id="other-case-studies-heading"
          style={{
            textAlign: "center",
            fontSize: "clamp(26px, 3.6vw, 40px)",
            fontWeight: 700,
            color: "#111827",
            letterSpacing: "-0.03em",
            margin: "0 0 clamp(32px, 4.5vw, 44px)",
            lineHeight: 1.15,
          }}
        >
          Other case studies
        </h2>

        <div className="oc-grid">
          <style jsx>{`
            .oc-grid {
              display: grid;
              grid-template-columns: 1fr;
              gap: 24px;
              margin-bottom: 40px;
            }
            @media (min-width: 768px) {
              .oc-grid {
                grid-template-columns: repeat(3, minmax(0, 1fr));
              }
            }
          `}</style>
          {others.map(s => (
            <CaseStudyCardPreview key={s.slug} study={s} />
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
            See all case studies
            <ArrowRight size={18} strokeWidth={2} />
          </Link>
        </div>
      </div>
    </section>
  )
}
