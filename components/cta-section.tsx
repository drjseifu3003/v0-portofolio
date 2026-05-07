"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function CTASection() {
  return (
    <section
      style={{
        background: "#fafaf9",
        borderBottom: "1px solid #e5e7eb",
        padding: "clamp(32px, 5vw, 56px) clamp(20px, 4vw, 36px)",
      }}
    >
      <div style={{ maxWidth: 1140, margin: "0 auto" }}>
        <div
          style={{
            borderRadius: 28,
            background:
              "radial-gradient(ellipse 120% 80% at 80% 50%, rgba(124,58,237,0.22) 0%, transparent 50%), linear-gradient(135deg, #0f1117 0%, #111827 100%)",
            border: "1px solid rgba(255,255,255,0.06)",
            padding: "clamp(28px, 4.5vw, 44px) clamp(24px, 4vw, 40px)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            position: "relative",
          }}
        >
          <Link
            href="/#contact"
            style={{
              position: "relative",
              display: "inline-flex",
              alignItems: "center",
              gap: 10,
              padding: "16px 32px",
              borderRadius: 999,
              fontSize: 16,
              fontWeight: 700,
              color: "#fff",
              textDecoration: "none",
              background: "linear-gradient(180deg, #a78bfa 0%, #7c3aed 100%)",
              boxShadow: "0 12px 40px rgba(124,58,237,0.45)",
              border: "1px solid rgba(255,255,255,0.2)",
            }}
          >
            Get started
            <ArrowRight size={20} strokeWidth={2} />
          </Link>
        </div>
      </div>
    </section>
  )
}
