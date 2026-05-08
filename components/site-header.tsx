"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { ArrowUpRight, Linkedin } from "lucide-react"
import { AIAssistantWidget } from "@/components/ai-assistant-widget"
import { PROFILE_LINKEDIN, PROFILE_UPWORK } from "@/lib/site"

/** Scaling Process aligns mobile drawer to top-[64px] */
export const SITE_HEADER_H = 64 as const

const HEADER_H = SITE_HEADER_H
const LG_BREAKPOINT = 1024

function LogoMark() {
  return (
    <span style={{ display: "flex", alignItems: "center", gap: 10 }}>
      <span
        style={{
          width: 34,
          height: 34,
          borderRadius: 11,
          background: `linear-gradient(145deg, hsl(var(--brand-logo-from)) 0%, hsl(var(--brand-logo-to)) 100%)`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "hsl(var(--primary-foreground))",
          fontSize: 15,
          fontWeight: 800,
          boxShadow: "0 6px 18px rgba(124,58,237,0.35)",
        }}
        aria-hidden
      >
        DS
      </span>
      <span style={{ fontSize: 16, fontWeight: 800, color: "hsl(var(--foreground))", letterSpacing: "-0.03em" }}>
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
          background: scrolled ? "hsl(var(--card) / 0.92)" : "hsl(var(--card))",
          borderBottom: "1px solid hsl(var(--border))",
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
            <Link href="/" style={{ fontSize: 15, fontWeight: 600, color: "hsl(var(--muted-foreground))", textDecoration: "none" }}>
              Home
            </Link>
            <Link href="/case-study" style={{ fontSize: 15, fontWeight: 600, color: "hsl(var(--muted-foreground))", textDecoration: "none" }}>
              My work
            </Link>
            <Link href="/about" style={{ fontSize: 15, fontWeight: 600, color: "hsl(var(--muted-foreground))", textDecoration: "none" }}>
              About me
            </Link>
          </nav>

          <div
            className="sp-hdr-actions"
            style={{
              justifySelf: "end",
              display: "flex",
              alignItems: "center",
              gap: 10,
              flexWrap: "wrap",
              minWidth: 0,
              justifyContent: "flex-end",
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
              color: "hsl(var(--primary))",
              background: "hsl(var(--brand-primary-soft))",
              border: "1px solid hsl(var(--primary) / 0.28)",
              borderRadius: 999,
              cursor: "pointer",
              whiteSpace: "nowrap",
              fontFamily: "inherit",
              display: "flex",
            }}
          >
            <span
              style={{
                width: 6,
                height: 6,
                borderRadius: "50%",
                background: "hsl(var(--primary))",
                boxShadow: "0 0 6px rgba(16,185,129,0.5)",
              }}
            />
            Ask Liya
          </button>

          <a
            href={PROFILE_LINKEDIN}
            target="_blank"
            rel="noopener noreferrer"
            className="sp-hdr-li"
            style={{
              alignItems: "center",
              gap: 7,
              padding: "8px 14px",
              borderRadius: 999,
              fontSize: 13,
              fontWeight: 600,
              letterSpacing: "-0.015em",
              textDecoration: "none",
              whiteSpace: "nowrap",
              display: "inline-flex",
              color: "#0A66C2",
              background: "#fff",
              border: "1.5px solid #0A66C2",
              boxShadow: "0 1px 0 rgba(10,102,194,0.06), 0 2px 12px rgba(10,102,194,0.08)",
              fontFamily: "inherit",
              transition: "background 0.15s ease, border-color 0.15s ease, box-shadow 0.15s ease",
            }}
            title="Dereje on LinkedIn"
          >
            <Linkedin width={17} height={17} strokeWidth={2} aria-hidden />
            LinkedIn
          </a>

          <a
            href={PROFILE_UPWORK}
            target="_blank"
            rel="noopener noreferrer"
            className="sp-hdr-uw"
            style={{
              alignItems: "center",
              gap: 6,
              padding: "8px 15px",
              borderRadius: 999,
              fontSize: 13,
              fontWeight: 600,
              letterSpacing: "-0.02em",
              textDecoration: "none",
              whiteSpace: "nowrap",
              display: "inline-flex",
              fontFamily: "inherit",
              color: "hsl(var(--primary-foreground))",
              background: "linear-gradient(165deg, hsl(158 58% 40%) 0%, hsl(var(--brand-primary)) 48%, hsl(158 62% 32%) 100%)",
              border: "1px solid rgba(255,255,255,0.25)",
              boxShadow: "0 4px 14px rgba(20,168,0,0.35), inset 0 1px 0 rgba(255,255,255,0.2)",
              transition: "filter 0.15s ease, transform 0.15s ease",
            }}
            title="Upwork profile"
          >
            Upwork
            <ArrowUpRight width={15} height={15} strokeWidth={2.25} aria-hidden />
          </a>

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
            <span style={{ width: 22, height: 2, background: "hsl(var(--foreground))", borderRadius: 1 }} />
            <span style={{ width: 22, height: 2, background: "hsl(var(--foreground))", borderRadius: 1 }} />
            <span style={{ width: 22, height: 2, background: "hsl(var(--foreground))", borderRadius: 1 }} />
          </button>
          </div>
        </div>
      </header>

      <style jsx global>{`
        .sp-hdr-li:hover {
          background: #f0f9ff !important;
          border-color: #084d8a !important;
          box-shadow:
            0 2px 4px rgba(10, 102, 194, 0.1),
            0 6px 20px rgba(10, 102, 194, 0.12) !important;
        }
        .sp-hdr-uw:hover {
          filter: brightness(1.05);
          box-shadow:
            0 6px 18px rgba(20, 168, 0, 0.42),
            inset 0 1px 0 rgba(255, 255, 255, 0.22) !important;
        }
        .sp-hdr-uw:active {
          filter: brightness(0.96);
          transform: scale(0.99);
        }

        @media (min-width: 1024px) {
          .sp-hdr-nav,
          .sp-hdr-li,
          .sp-hdr-uw,
          .sp-hdrliya {
            display: flex !important;
          }
          .sp-hdr-burger {
            display: none !important;
          }
        }
        @media (max-width: 1023px) {
          .sp-hdr-nav,
          .sp-hdr-li,
          .sp-hdr-uw,
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
          background: "hsl(var(--background))",
          borderTop: "1px solid hsl(var(--border))",
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
                color: "hsl(var(--foreground))",
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
                color: "hsl(var(--foreground))",
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
                color: "hsl(var(--foreground))",
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
                color: "hsl(var(--primary))",
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

          <div style={{ marginTop: "auto", display: "flex", flexDirection: "column", gap: 12, paddingTop: 8 }}>
            <a
              href={PROFILE_LINKEDIN}
              onClick={() => setMob(false)}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 10,
                width: "100%",
                minHeight: 52,
                borderRadius: 999,
                textDecoration: "none",
                fontSize: 16,
                fontWeight: 700,
                letterSpacing: "-0.02em",
                color: "#0A66C2",
                background: "#fff",
                border: "2px solid #0A66C2",
                boxSizing: "border-box",
                boxShadow: "0 4px 16px rgba(10,102,194,0.12)",
              }}
            >
              <Linkedin width={20} height={20} strokeWidth={2} aria-hidden />
              LinkedIn
            </a>

            <a
              href={PROFILE_UPWORK}
              onClick={() => setMob(false)}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 8,
                width: "100%",
                minHeight: 52,
                borderRadius: 999,
                textDecoration: "none",
                fontSize: 16,
                fontWeight: 700,
                letterSpacing: "-0.025em",
                color: "hsl(var(--primary-foreground))",
                border: "1px solid rgba(255,255,255,0.25)",
                boxSizing: "border-box",
                background: "linear-gradient(165deg, hsl(158 58% 40%) 0%, hsl(var(--brand-primary)) 48%, hsl(158 62% 32%) 100%)",
                boxShadow: "0 6px 20px rgba(20,168,0,0.35), inset 0 1px 0 rgba(255,255,255,0.2)",
              }}
            >
              Upwork
              <ArrowUpRight width={20} height={20} strokeWidth={2.25} aria-hidden />
            </a>
          </div>
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
