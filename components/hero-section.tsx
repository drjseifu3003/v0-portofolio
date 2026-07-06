"use client"

import { useEffect, useState } from "react"
import { ArrowUpRight } from "lucide-react"
import Image from "next/image"
import { PROFILE_UPWORK } from "@/lib/site"
import { SpTrustPill } from "@/components/sp-trust-pill"

const FULL_HEADLINE = "Fullstack Engineer & Technical Lead | Software Architect"
const SUBTITLE = "Structured AI pipelines, scalable backends, and responsive frontends. Production-ready, full-stack."
const HERO_QUOTE =
  "I hired a total of 6 developers, and he was the last one standing at the end of the project because he was the best."
const HERO_QUOTE_AUTHOR = "Jovan Stojanovic"
const HERO_QUOTE_ROLE = "Ex-CEO of PhoneSales & Founder"
const HERO_QUOTE_COMPANY = "Roasform"

/** Same collage PNGs as case study cards (`public/images/case-study/`) */
const HERO_CENTER_POSTER = "/images/case-study/thumb-intuitysync.png"
const HERO_SIDE_L_TOP = "/images/case-study/thumb-poultry-rag.png"
const HERO_SIDE_L_BOTTOM = "/images/case-study/thumb-roasform.png"
const HERO_SIDE_R_TOP = "/images/case-study/thumb-healium-ckd.png"
const HERO_SIDE_R_BOTTOM = "/images/case-study/thumb-wumis.png"

/** Optional: set NEXT_PUBLIC_HERO_VIDEO_URL */
const HERO_VIDEO_SRC =
  typeof process.env.NEXT_PUBLIC_HERO_VIDEO_URL === "string" && process.env.NEXT_PUBLIC_HERO_VIDEO_URL.trim().length > 0
    ? process.env.NEXT_PUBLIC_HERO_VIDEO_URL.trim()
    : ""

export function HeroSection() {
  const [typed, setTyped] = useState("")
  const [showCursor, setShowCursor] = useState(true)

  useEffect(() => {
    let i = 0
    const id = window.setInterval(() => {
      i++
      setTyped(FULL_HEADLINE.slice(0, i))
      if (i >= FULL_HEADLINE.length) {
        window.clearInterval(id)
        setShowCursor(false)
      }
    }, 38)
    return () => window.clearInterval(id)
  }, [])

  const hireMobileStyle = {
    display: "inline-flex",
    alignItems: "center",
    gap: 8,
    padding: "11px 24px",
    borderRadius: 999,
    fontSize: 15,
    fontWeight: 700,
    letterSpacing: "-0.02em",
    color: "#ffffff",
    textDecoration: "none",
    background: "linear-gradient(165deg, #16c713 0%, #14a800 42%, #118f00 100%)",
    border: "1px solid rgba(255,255,255,0.22)",
    boxShadow: "0 8px 26px rgba(20,168,0,0.38)",
    maxWidth: 320,
    justifyContent: "center",
    boxSizing: "border-box" as const,
  }

  return (
    <section
      id="about"
      className="gradient-brand-hero border-b border-border"
      style={{
        boxSizing: "border-box",
        padding: "clamp(24px, 4vw, 40px) 0 clamp(28px, 5vw, 52px)",
      }}
    >
      <style jsx>{`
        @keyframes spBlink {
          0%,
          100% {
            opacity: 1;
          }
          50% {
            opacity: 0;
          }
        }
        .sp-cursor {
          display: inline-block;
          width: 3px;
          height: 0.92em;
          background: hsl(var(--foreground));
          margin-right: 5px;
          vertical-align: text-bottom;
          animation: spBlink 1s step-end infinite;
        }
        /* Same width + horizontal padding as SiteHeader inner row (max 1200, clamp gutters) */
        .hero-shell {
          display: flex;
          flex-direction: column;
          max-width: 1200px;
          width: 100%;
          margin: 0 auto;
          padding: 0 clamp(16px, 4vw, 36px);
          box-sizing: border-box;
          text-align: center;
        }
        /* Full nav content width, gallery uses full hero-shell inner width */
        .hero-gallery {
          display: grid;
          grid-template-columns: minmax(88px, 1.2fr) minmax(0, 2.8fr) minmax(88px, 1.2fr);
          gap: clamp(10px, 2vw, 18px);
          width: 100%;
          margin-top: clamp(12px, 2.5vw, 22px);
          align-items: stretch;
        }
        .hero-side-col {
          display: flex;
          flex-direction: column;
          gap: 8px;
          min-height: 0;
          height: 100%;
          opacity: 0.92;
        }
        .hero-side-img {
          position: relative;
          flex: 1;
          min-height: 0;
          border-radius: 12px;
          overflow: hidden;
          border: 1px solid #e5e7eb;
          box-shadow: 0 8px 28px rgba(15, 23, 42, 0.08);
          background: #f3f4f6;
          transform-origin: center;
        }
        .hero-center-slot {
          position: relative;
          width: 100%;
          min-height: 200px;
          aspect-ratio: 16 / 10;
          border-radius: 16px;
          overflow: hidden;
          border: 3px solid #a78bfa;
          box-shadow: 0 16px 44px rgba(124, 58, 237, 0.16);
          background: #0f0a1a;
        }
        .hero-play {
          position: absolute;
          inset: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          pointer-events: none;
          z-index: 3;
        }
        .hero-play-btn {
          width: clamp(52px, 8vw, 72px);
          height: clamp(52px, 8vw, 72px);
          border-radius: 999px;
          background: rgba(124, 58, 237, 0.88);
          color: #fff;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 14px 36px rgba(124, 58, 237, 0.4);
        }
        .hero-sound-pill {
          position: absolute;
          top: 8px;
          right: 8px;
          z-index: 4;
          padding: 6px 10px;
          border-radius: 999px;
          background: rgba(17, 24, 39, 0.92);
          color: #fff;
          font-size: 10px;
          font-weight: 600;
          display: inline-flex;
          align-items: center;
          gap: 4px;
          pointer-events: none;
          border: 1px solid rgba(255, 255, 255, 0.12);
        }
        .hero-quote {
          margin: 14px auto 0;
          width: min(760px, 100%);
          padding: 16px;
          border-radius: 14px;
          border: 1px solid #dbe1e7;
          background: #ffffff;
          box-shadow: 0 8px 24px rgba(15, 23, 42, 0.07);
          text-align: left;
        }
        .hero-quote-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
          flex-wrap: wrap;
          margin-bottom: 10px;
        }
        .hero-upwork-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 6px 10px;
          border-radius: 999px;
          background: #f0fdf4;
          color: #166534;
          border: 1px solid #bbf7d0;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.02em;
          text-transform: uppercase;
        }
        .hero-quote-stars {
          display: inline-flex;
          align-items: center;
          gap: 2px;
        }
        .hero-quote-score {
          margin-left: 6px;
          color: #111827;
          font-size: 12px;
          font-weight: 700;
        }
        .hero-quote-copy {
          margin: 0;
          color: #111827;
          font-size: clamp(14px, 1vw + 0.62rem, 16px);
          line-height: 1.5;
          letter-spacing: -0.01em;
          font-weight: 600;
        }
        .hero-quote-meta {
          margin-top: 8px;
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
          color: #4b5563;
          font-size: 13px;
          line-height: 1.35;
        }
        .hero-quote-name {
          color: #111827;
          font-weight: 700;
        }
        @media (max-width: 1023px) {
          .hero-side-col {
            display: none !important;
          }
          .hero-gallery {
            display: flex;
            flex-direction: column;
            width: 100%;
            margin-top: 12px;
          }
          .hero-center-slot {
            width: 100%;
            height: auto;
            min-height: 180px;
            aspect-ratio: 16 / 10;
          }
          .hero-quote {
            margin-top: 12px;
            padding: 12px 14px;
          }
          .hero-quote-top {
            margin-bottom: 8px;
          }
        }
        @media (min-width: 1024px) {
          .hero-mob-only-cta {
            display: none !important;
          }
          .hero-side-col-l .hero-side-img:first-child {
            transform: scale(0.98) rotateY(6deg) translateX(-3px);
          }
          .hero-side-col-r .hero-side-img:first-child {
            transform: scale(0.98) rotateY(-6deg) translateX(3px);
          }
        }
      `}</style>

      <div className="hero-shell">
        <div className="hero-text">
          <h1
            style={{
              fontSize: "clamp(24px, 3.4vw + 0.7rem, 38px)",
              fontWeight: 700,
              lineHeight: 1.05,
              letterSpacing: "-0.03em",
              color: "#1a1c1f",
              margin: "0 auto 8px",
              maxWidth: 860,
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              alignItems: "baseline",
              gap: 0,
            }}
          >
            {(showCursor || typed.length < FULL_HEADLINE.length) && <span className="sp-cursor" aria-hidden />}
            <span>{typed}</span>
          </h1>

          <p
            style={{
              fontSize: "clamp(14px, 1.2vw + 0.65rem, 17px)",
              color: "#6b7280",
              lineHeight: 1.45,
              maxWidth: 540,
              margin: "0 auto 6px",
              fontWeight: 400,
            }}
          >
            {SUBTITLE}
          </p>

          <div style={{ marginTop: 14, display: "flex", justifyContent: "center", width: "100%" }}>
            <SpTrustPill variant="hero" />
          </div>

        </div>

        <div className="hero-gallery">
          <div className="hero-side-col hero-side-col-l" aria-hidden>
            <div className="hero-side-img">
              <Image src={HERO_SIDE_L_TOP} alt="" fill sizes="(max-width: 1023px) 0, 24vw" style={{ objectFit: "cover" }} />
            </div>
            <div className="hero-side-img">
              <Image src={HERO_SIDE_L_BOTTOM} alt="" fill sizes="(max-width: 1023px) 0, 24vw" style={{ objectFit: "cover", opacity: 0.95 }} />
            </div>
          </div>

          <div className="hero-center-slot">
            {/* <span className="hero-sound-pill">🔊 Tap for sound</span> */}
            {HERO_VIDEO_SRC ? (
              <video
                key={HERO_VIDEO_SRC}
                poster={HERO_CENTER_POSTER}
                controls
                playsInline
                preload="metadata"
                controlsList="nodownload"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  display: "block",
                  background: "#0f0a1a",
                }}
              >
                <source src={HERO_VIDEO_SRC} />
              </video>
            ) : (
              <>
                <Image
                  src={HERO_CENTER_POSTER}
                  alt=""
                  fill
                  sizes="(max-width: 1023px) 95vw, (max-width: 1200px) 70vw, 800px"
                  style={{ objectFit: "cover", backgroundColor: "#0f0a1a" }}
                  priority
                />
                {/* <div className="hero-play" aria-hidden>
                  <div className="hero-play-btn">
                    <Play size={28} fill="white" color="white" style={{ marginLeft: 4 }} />
                  </div>
                </div> */}
              </>
            )}
          </div>

          <div className="hero-side-col hero-side-col-r" aria-hidden>
            <div className="hero-side-img">
              <Image src={HERO_SIDE_R_TOP} alt="" fill sizes="(max-width: 1023px) 0, 24vw" style={{ objectFit: "cover" }} />
            </div>
            <div className="hero-side-img">
              <Image src={HERO_SIDE_R_BOTTOM} alt="" fill sizes="(max-width: 1023px) 0, 24vw" style={{ objectFit: "cover", opacity: 0.95 }} />
            </div>
          </div>
        </div>

        <div className="hero-mob-only-cta" style={{ marginTop: 8, display: "flex", justifyContent: "center", paddingBottom: 2 }}>
          <a href={PROFILE_UPWORK} style={hireMobileStyle} target="_blank" rel="noopener noreferrer">
            Hire me on Upwork
            <ArrowUpRight size={18} strokeWidth={2.25} color="#ffffff" aria-hidden />
          </a>
        </div>
      </div>
    </section>
  )
}
