"use client"

import { PROFILE_LINKEDIN, PROFILE_UPWORK } from "@/lib/site"

const STAR = "#f59e0b"

function Stars({ size = 14 }: { size?: number }) {
  return (
    <span style={{ display: "inline-flex", gap: 2, alignItems: "center" }}>
      {[0, 1, 2, 3, 4].map(i => (
        <svg key={i} width={size} height={size} viewBox="0 0 14 14" fill={STAR} aria-hidden>
          <path d="M7 1l1.6 3.3L12.5 4.85l-2.75 2.68.65 3.78L7 9.6l-3.4 1.71.65-3.78L1.5 4.85l3.9-.55z" />
        </svg>
      ))}
    </span>
  )
}

const platformLinkBase = {
  fontWeight: 700 as const,
  textDecoration: "none" as const,
  cursor: "pointer" as const,
  transition: "opacity 0.15s",
}

/** Trust capsule: Excellent + stars + rating + LinkedIn | Upwork */
export function SpTrustPill({
  compact,
  mobileSimple,
  variant = "default",
}: {
  compact?: boolean
  /** Narrow screens: rating line hidden; LinkedIn | Upwork still shown */
  mobileSimple?: boolean
  /** `hero`: 5.0/5 · 10+ reviews; LinkedIn/Upwork links (same pill as homepage hero) */
  variant?: "default" | "hero"
}) {
  const heroRatingCopy = variant === "hero"
  const profileLinks = variant === "hero"

  const linkedInEl = profileLinks ? (
    <a
      href={PROFILE_LINKEDIN}
      target="_blank"
      rel="noopener noreferrer"
      style={{ ...platformLinkBase, letterSpacing: "0.01em", color: "#0A66C2" }}
    >
      LinkedIn
    </a>
  ) : (
    <span style={{ fontWeight: 700, letterSpacing: "0.01em", color: "#0A66C2" }}>LinkedIn</span>
  )

  const upworkEl = profileLinks ? (
    <a href={PROFILE_UPWORK} target="_blank" rel="noopener noreferrer" style={{ ...platformLinkBase, color: "hsl(var(--primary))" }}>
      Upwork
    </a>
  ) : (
    <span style={{ fontWeight: 700, color: "hsl(var(--primary))" }}>Upwork</span>
  )

  return (
    <div
      style={{
        display: "inline-flex",
        flexWrap: "wrap",
        alignItems: "center",
        justifyContent: "center",
        gap: compact ? "6px 10px" : "8px 14px",
        padding: compact ? "10px 20px" : "12px 24px",
        borderRadius: 999,
        background: "hsl(var(--brand-footer))",
        color: "hsl(var(--brand-canvas-bright))",
        fontSize: compact ? 12 : 13,
        fontWeight: 500,
        boxShadow: "0 12px 40px hsl(var(--brand-footer) / 0.35)",
      }}
    >
      <span style={{ color: "hsl(var(--brand-canvas-bright))", fontWeight: 600 }}>Excellent</span>
      <Stars size={compact ? 12 : 14} />
      {!mobileSimple ? (
        <span style={{ color: "hsl(var(--brand-footer-fg))", fontWeight: 400 }}>
          {heroRatingCopy ? (
            <>
              5.0 out of 5 <span style={{ color: "hsl(var(--brand-footer-fg) / 0.75)" }}>based on</span>
              <span style={{ color: "hsl(var(--brand-canvas-bright))", fontWeight: 600 }}> 10+ reviews</span>
            </>
          ) : (
            <>
              4.9 out of 5 <span style={{ color: "hsl(var(--brand-footer-fg) / 0.75)" }}>based on</span>
              <span style={{ color: "hsl(var(--brand-canvas-bright))", fontWeight: 600 }}> 50+ reviews</span>
            </>
          )}
        </span>
      ) : null}
      <span style={{ opacity: 0.25 }} aria-hidden>
        |
      </span>
      {linkedInEl}
      <span style={{ opacity: 0.25 }} aria-hidden>
        |
      </span>
      {upworkEl}
    </div>
  )
}
