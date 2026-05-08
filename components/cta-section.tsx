"use client"

import { ArrowUpRight } from "lucide-react"
import { PROFILE_UPWORK } from "@/lib/site"

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
          <a
            href={PROFILE_UPWORK}
            target="_blank"
            rel="noopener noreferrer"
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
              background: "linear-gradient(165deg, #16c713 0%, #14a800 42%, #118f00 100%)",
              boxShadow: "0 12px 40px rgba(20,168,0,0.45), inset 0 1px 0 rgba(255,255,255,0.2)",
              border: "1px solid rgba(255,255,255,0.25)",
            }}
          >
            Hire me on Upwork
            <ArrowUpRight size={20} strokeWidth={2.25} aria-hidden />
          </a>
        </div>
      </div>
    </section>
  )
}
