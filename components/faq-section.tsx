"use client"

import { useState } from "react"
import Link from "next/link"
import { ChevronDown, ArrowRight } from "lucide-react"

const ITEMS = [
  {
    q: "I'm not deeply technical, can we still ship?",
    a: "Yes. You bring domain expertise and priorities; I translate that into specs, milestones, and a production system with plain-language updates throughout.",
  },
  {
    q: "What kinds of projects are a fit?",
    a: "SaaS, AI agents & RAG, voice automation (Vapi/N8N), internal tools, and high-traffic web apps. If users or revenue depend on it, we're aligned.",
  },
  {
    q: "How do pricing and timelines work?",
    a: "Scoping starts with a short call. Engagements are usually milestone-based (fixed phases) or retainer for ongoing product work, aligned to your roadmap.",
  },
  {
    q: "Who owns the IP?",
    a: "You do. Deliverables are yours upon payment unless we agree otherwise in writing for a specific component.",
  },
  {
    q: "Do you integrate with existing teams?",
    a: "Yes, I routinely plug into Slack/Linear, ship PRs alongside your engineers, and document handoff so momentum continues after my work.",
  },
]

export function FaqSection() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section
      id="faq"
      style={{
        background: "#f4f4f2",
        borderBottom: "1px solid #e5e7eb",
        padding: "clamp(40px, 6.5vw, 72px) clamp(20px, 4vw, 36px)",
      }}
    >
      <div style={{ maxWidth: 720, margin: "0 auto" }}>
        <h2
          style={{
            fontSize: "clamp(26px, 3.6vw, 40px)",
            fontWeight: 700,
            color: "#111827",
            textAlign: "center",
            margin: "0 0 36px",
            letterSpacing: "-0.03em",
          }}
        >
          Frequently asked questions
        </h2>
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          {ITEMS.map((item, i) => {
            const isOpen = open === i
            return (
              <div
                key={item.q}
                style={{
                  borderRadius: 14,
                  border: "1px solid #e5e7eb",
                  background: isOpen ? "#f9fafb" : "#fff",
                  overflow: "hidden",
                  transition: "background 0.2s",
                }}
              >
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  style={{
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: 16,
                    padding: "16px 20px",
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    textAlign: "left",
                    fontFamily: "inherit",
                    fontSize: 15,
                    fontWeight: 600,
                    color: "#111827",
                  }}
                >
                  {item.q}
                  <ChevronDown
                    size={20}
                    style={{
                      flexShrink: 0,
                      color: "#9ca3af",
                      transform: isOpen ? "rotate(180deg)" : "none",
                      transition: "transform 0.2s",
                    }}
                  />
                </button>
                {isOpen && (
                  <div
                    style={{
                      padding: "0 20px 18px",
                      fontSize: 14,
                      lineHeight: 1.65,
                      color: "#6b7280",
                    }}
                  >
                    {item.a}
                  </div>
                )}
              </div>
            )
          })}
        </div>
        <div style={{ marginTop: 36, textAlign: "center" }}>
          <Link
            href="/#contact"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              padding: "14px 28px",
              borderRadius: 999,
              fontSize: 15,
              fontWeight: 600,
              color: "#5b21b6",
              textDecoration: "none",
              background: "linear-gradient(180deg, #ede9fe 0%, #ddd6fe 100%)",
              border: "1px solid #c4b5fd",
              boxShadow: "0 6px 20px rgba(91,33,182,0.15)",
            }}
          >
            Get started
            <ArrowRight size={18} strokeWidth={2} />
          </Link>
        </div>
      </div>
    </section>
  )
}
