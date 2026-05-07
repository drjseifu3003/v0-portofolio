"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { ArrowRight, ArrowUpRight } from "lucide-react"
import { AIAssistantWidget } from "@/components/ai-assistant-widget"

/** Scaling Process aligns mobile drawer to top-[64px] */
export const SITE_HEADER_H = 64 as const

const HEADER_H = SITE_HEADER_H
const LG_BREAKPOINT = 1024

function isExternalUrl(href: string) {
  return /^https?:\/\//i.test(href)
}

function LogoMark() {
  return (
    <span style={{ display: "flex", alignItems: "center", gap: 10 }}>
      <span
        style={{
          width: 34,
          height: 34,
          borderRadius: 11,
          background: "linear-gradient(145deg, #a78bfa 0%, #7c3aed 100%)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#fff",
          fontSize: 15,
          fontWeight: 800,
          boxShadow: "0 6px 18px rgba(124,58,237,0.35)",
        }}
        aria-hidden
      >
        DS
      </span>
      <span style={{ fontSize: 16, fontWeight: 800, color: "#111827", letterSpacing: "-0.03em" }}>
        Dereje Seifu
      </span>
    </span>
  )
}

const MOB_TRANSITION = "opacity 0.2s cubic-bezier(0, 0, 0.2, 1), transform 0.2s cubic-bezier(0, 0, 0.2, 1)"

export function SiteHeader() {
  const [mob, setMob] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [liyaOpen, setLiyaOpen] = useState(false)

  const HIRE_URL =
    typeof process.env.NEXT_PUBLIC_HIRE_URL === "string" && process.env.NEXT_PUBLIC_HIRE_URL.length > 0
      ? process.env.NEXT_PUBLIC_HIRE_URL
      : "/#contact"
  const hireExternal = isExternalUrl(HIRE_URL)
  const vslHref = process.env.NEXT_PUBLIC_VSL_PRIMARY_HREF ?? "/#contact"
  const vslExternal = isExternalUrl(vslHref)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 4)
    window.addEventListener("scroll", fn, { passive: true })
    return () => window.removeEventListener("scroll", fn)
  }, [])

  useEffect(() => {
    const fn = () => {
      if (window.innerWidth >= LG_BREAKPOINT) {
        setMob(false)
      }
    }
    window.addEventListener("resize", fn)
    return () => window.removeEventListener("resize", fn)
  }, [])

  useEffect(() => {
    document.body.style.overflow = mob ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [mob])

  useEffect(() => {
    const handler = () => setLiyaOpen(true)
    window.addEventListener("open-liya", handler)
    return () => window.removeEventListener("open-liya", handler)
  }, [])

  return (
    <>
      <style jsx global>{`
        html {
          scroll-behavior: smooth;
        }
      `}</style>

      <header
        style={{
          position: "fixed",
          inset: "0 0 auto 0",
          zIndex: 300,
          height: HEADER_H,
          background: scrolled ? "rgba(255,255,255,0.92)" : "#ffffff",
          borderBottom: "1px solid #e5e7eb",
          backdropFilter: scrolled ? "blur(14px)" : "none",
          boxShadow: scrolled ? "0 8px 32px rgba(15,23,42,0.06)" : "none",
          transition: "background 0.25s, box-shadow 0.25s",
        }}
      >
        <div
          className="sp-hdr-inner"
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            padding: "0 clamp(16px, 4vw, 36px)",
            height: "100%",
            display: "grid",
            gridTemplateColumns: "auto 1fr auto",
            alignItems: "center",
            columnGap: 16,
          }}
        >
          <Link href="/" style={{ textDecoration: "none", justifySelf: "start", minWidth: 0 }}>
            <LogoMark />
          </Link>

          <nav
            className="sp-hdr-nav"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "clamp(16px, 2.6vw, 28px)",
              justifySelf: "center",
              minWidth: 0,
            }}
          >
            <Link href="/" style={{ fontSize: 15, fontWeight: 600, color: "#4b5563", textDecoration: "none" }}>
              Home
            </Link>
            <Link href="/case-study" style={{ fontSize: 15, fontWeight: 600, color: "#4b5563", textDecoration: "none" }}>
              My work
            </Link>
            <Link href="/about" style={{ fontSize: 15, fontWeight: 600, color: "#4b5563", textDecoration: "none" }}>
              About me
            </Link>
          </nav>

          <div
            className="sp-hdr-actions"
            style={{
              justifySelf: "end",
              display: "flex",
              alignItems: "center",
              gap: 0,
              flexWrap: "nowrap",
              minWidth: 0,
            }}
          >
          <button
            type="button"
            onClick={() => setLiyaOpen(true)}
            className="sp-hdrliya"
            style={{
              alignItems: "center",
              gap: 8,
              padding: "9px 12px",
              fontSize: 13,
              fontWeight: 600,
              color: "#047857",
              background: "#ecfdf5",
              border: "1px solid #a7f3d0",
              borderRadius: 999,
              cursor: "pointer",
              whiteSpace: "nowrap",
              fontFamily: "inherit",
              marginRight: 10,
              display: "flex",
            }}
          >
            <span
              style={{
                width: 6,
                height: 6,
                borderRadius: "50%",
                background: "#10b981",
                boxShadow: "0 0 6px rgba(16,185,129,0.5)",
              }}
            />
            Ask Liya
          </button>

          {vslExternal ? (
            <a
              href={vslHref}
              className="sp-hdr-started"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                alignItems: "center",
                gap: 8,
                padding: "10px 18px",
                borderRadius: 999,
                background: "#111827",
                color: "#fff",
                fontSize: 14,
                fontWeight: 600,
                textDecoration: "none",
                whiteSpace: "nowrap",
                border: "2px solid #111827",
                display: "flex",
              }}
            >
              Get started
              <ArrowRight size={16} strokeWidth={2.2} />
            </a>
          ) : (
            <Link
              href={vslHref}
              className="sp-hdr-started"
              style={{
                alignItems: "center",
                gap: 8,
                padding: "10px 18px",
                borderRadius: 999,
                background: "#111827",
                color: "#fff",
                fontSize: 14,
                fontWeight: 600,
                textDecoration: "none",
                whiteSpace: "nowrap",
                border: "2px solid #111827",
                display: "flex",
              }}
            >
              Get started
              <ArrowRight size={16} strokeWidth={2.2} />
            </Link>
          )}

          {hireExternal ? (
            <a
              href={HIRE_URL}
              className="sp-hdr-hire"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                alignItems: "center",
                gap: 4,
                marginLeft: 8,
                fontSize: 13,
                fontWeight: 600,
                color: "#7c3aed",
                textDecoration: "none",
                whiteSpace: "nowrap",
                display: "flex",
              }}
            >
              Hire
              <ArrowUpRight size={14} />
            </a>
          ) : (
            <Link
              href={HIRE_URL}
              className="sp-hdr-hire"
              style={{
                alignItems: "center",
                gap: 4,
                marginLeft: 8,
                fontSize: 13,
                fontWeight: 600,
                color: "#7c3aed",
                textDecoration: "none",
                whiteSpace: "nowrap",
                display: "flex",
              }}
            >
              Hire
              <ArrowUpRight size={14} />
            </Link>
          )}

          <button
            className="sp-hdr-burger"
            type="button"
            onClick={() => setMob(v => !v)}
            aria-label="Toggle menu"
            aria-expanded={mob}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: "8px 4px",
              marginLeft: 0,
              flexDirection: "column",
              gap: 5,
              alignItems: "center",
              justifyContent: "center",
              display: "none",
            }}
          >
            <span style={{ width: 22, height: 2, background: "#1a1c1f", borderRadius: 1 }} />
            <span style={{ width: 22, height: 2, background: "#1a1c1f", borderRadius: 1 }} />
            <span style={{ width: 22, height: 2, background: "#1a1c1f", borderRadius: 1 }} />
          </button>
          </div>
        </div>
      </header>

      <style jsx global>{`
        @media (min-width: 1024px) {
          .sp-hdr-nav,
          .sp-hdr-started,
          .sp-hdr-hire,
          .sp-hdrliya {
            display: flex !important;
          }
          .sp-hdr-burger {
            display: none !important;
          }
        }
        @media (max-width: 1023px) {
          .sp-hdr-nav,
          .sp-hdr-started,
          .sp-hdr-hire,
          .sp-hdrliya {
            display: none !important;
          }
          .sp-hdr-burger {
            display: flex !important;
          }
        }
      `}</style>

      {/* Scaling Process-style mobile layer: fixed below header, opacity + translate transition */}
      <div
        className="sp-mob-layer"
        style={{
          position: "fixed",
          left: 0,
          right: 0,
          bottom: 0,
          top: HEADER_H,
          zIndex: 200,
          background: "#fafaf9",
          borderTop: "1px solid #e5e7eb",
          display: "flex",
          flexDirection: "column",
          overflowY: "auto",
          transition: MOB_TRANSITION,
          opacity: mob ? 1 : 0,
          transform: mob ? "translateY(0)" : "translateY(-8px)",
          pointerEvents: mob ? "auto" : "none",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            padding: "0 32px 36px",
            flex: 1,
            minHeight: 0,
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: 12, padding: "48px 16px 32px" }}>
            <Link
              href="/"
              onClick={() => setMob(false)}
              style={{
                fontSize: 22,
                lineHeight: "28px",
                fontWeight: 600,
                letterSpacing: "-1px",
                color: "#000",
                height: 36,
                display: "flex",
                alignItems: "center",
                textDecoration: "none",
              }}
            >
              Home
            </Link>
            <Link
              href="/case-study"
              onClick={() => setMob(false)}
              style={{
                fontSize: 22,
                lineHeight: "28px",
                fontWeight: 600,
                letterSpacing: "-1px",
                color: "#000",
                height: 36,
                display: "flex",
                alignItems: "center",
                textDecoration: "none",
              }}
            >
              My work
            </Link>
            <Link
              href="/about"
              onClick={() => setMob(false)}
              style={{
                fontSize: 22,
                lineHeight: "28px",
                fontWeight: 600,
                letterSpacing: "-1px",
                color: "#000",
                height: 36,
                display: "flex",
                alignItems: "center",
                textDecoration: "none",
              }}
            >
              About me
            </Link>
            <button
              type="button"
              onClick={() => {
                setMob(false)
                setLiyaOpen(true)
              }}
              style={{
                fontSize: 22,
                lineHeight: "28px",
                fontWeight: 600,
                letterSpacing: "-1px",
                color: "#059669",
                height: 36,
                display: "flex",
                alignItems: "center",
                padding: 0,
                background: "none",
                border: "none",
                cursor: "pointer",
                fontFamily: "inherit",
                textAlign: "left",
              }}
            >
              Ask Liya
            </button>
          </div>

          {vslExternal ? (
            <a
              href={vslHref}
              onClick={() => setMob(false)}
              className="btn-cta-dark"
              style={{
                marginTop: "auto",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 8,
                width: "100%",
                height: 52,
                borderRadius: 999,
                background: "#111827",
                border: "2px solid #111827",
                textDecoration: "none",
              }}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span style={{ fontSize: 18, lineHeight: "24px", fontWeight: 600, letterSpacing: "-0.36px", color: "#fff" }}>
                Get started
              </span>
              <svg width={24} height={24} viewBox="0 0 28 28" fill="none" aria-hidden>
                <path
                  d="M5.833 14h16.334M14.583 6.417L22.167 14l-7.584 7.583"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          ) : (
            <Link
              href={vslHref}
              onClick={() => setMob(false)}
              className="btn-cta-dark"
              style={{
                marginTop: "auto",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 8,
                width: "100%",
                height: 52,
                borderRadius: 999,
                background: "#111827",
                border: "2px solid #111827",
                textDecoration: "none",
              }}
            >
              <span style={{ fontSize: 18, lineHeight: "24px", fontWeight: 600, letterSpacing: "-0.36px", color: "#fff" }}>
                Get started
              </span>
              <svg width={24} height={24} viewBox="0 0 28 28" fill="none" aria-hidden>
                <path
                  d="M5.833 14h16.334M14.583 6.417L22.167 14l-7.584 7.583"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          )}
        </div>
      </div>

      <AIAssistantWidget open={liyaOpen} onOpenChange={setLiyaOpen} />

      {/* Hide SP mobile drawer on lg+ */}
      <style jsx global>{`
        @media (min-width: 1024px) {
          .sp-mob-layer {
            display: none !important;
          }
        }
        @media (max-width: 1023px) {
          .sp-mob-layer {
            display: flex !important;
          }
        }
      `}</style>
    </>
  )
}
