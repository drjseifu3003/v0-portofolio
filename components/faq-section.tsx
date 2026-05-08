"use client"

import { useState } from "react"
import { ChevronDown, ArrowUpRight } from "lucide-react"
import { SITE_FAQ_ITEMS } from "@/lib/faq-content"
import { PROFILE_UPWORK } from "@/lib/site"

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
          {SITE_FAQ_ITEMS.map((item, i) => {
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
              background: "linear-gradient(165deg, #16c713 0%, #14a800 42%, #118f00 100%)",
              border: "1px solid rgba(255,255,255,0.22)",
              boxShadow: "0 8px 24px rgba(20,168,0,0.32)",
            }}
          >
            Hire me on Upwork
            <ArrowUpRight size={18} strokeWidth={2.25} aria-hidden />
          </a>
        </div>
      </div>
    </section>
  )
}
