"use client"

import { ArrowRight, Download, Mic } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const STATS = [
  { value: "300K+",  label: "Users supported"  },
  { value: "~2s",    label: "Target page loads" },
  { value: "99.9%+", label: "Release uptime"    },
]

const STACK = ["Next.js", "TypeScript", "React", "Node.js", "AWS", "FastAPI", "Supabase", "PostgreSQL", "Claude", "Cursor"]

interface HeroSectionProps {
  onTalkToLiya?: () => void
}

export function HeroSection({ onTalkToLiya }: HeroSectionProps) {
  return (
    <section style={{
      background: "#0c0c0c",
      borderBottom: "1px solid #1e1e1c",
      padding: "clamp(40px, 6vw, 64px) clamp(20px, 4vw, 36px) clamp(52px, 8vw, 88px)",
    }}>
      <style jsx>{`
        .hi {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr;
          gap: 56px;
          align-items: start;
        }
        .hc { display: flex; flex-direction: column; gap: 40px; }
        .hr { display: none; flex-direction: column; gap: 0; }

        .sg {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          border: 1px solid #2a2826;
          max-width: 460px;
        }
        .sc {
          padding: 20px 18px;
          border-right: 1px solid #2a2826;
        }
        .sc:last-child { border-right: none; }

        .chip {
          font-size: 12px;
          color: #a8a49c;
          letter-spacing: 0.04em;
          padding: 6px 14px;
          border: 1px solid #2a2826;
          white-space: nowrap;
          transition: color 0.2s, border-color 0.2s;
        }
        .chip:hover { color: #dedad2; border-color: #4a4844; }

        /* Liya availability pill */
        .avail-pill {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 6px 14px 6px 8px;
          border: 1px solid #2a2826;
          background: #111110;
          width: fit-content;
        }

        .avail-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #4caf7d;
          box-shadow: 0 0 6px rgba(76,175,125,0.5);
          animation: avPulse 2s ease-in-out infinite;
          flex-shrink: 0;
        }

        @keyframes avPulse {
          0%,100% { opacity: 1; }
          50%      { opacity: 0.4; }
        }

        /* CTA row */
        .cta-row {
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
          gap: 12px;
          align-items: center;
        }

        /* Liya button */
        .liya-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 13px 20px;
          font-size: 13px;
          font-weight: 600;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          color: #dedad2;
          background: transparent;
          border: 1px solid #2a2826;
          cursor: pointer;
          white-space: nowrap;
          line-height: 1;
          font-family: inherit;
          transition: border-color 0.18s, background 0.18s, color 0.18s;
          position: relative;
          overflow: hidden;
        }

        .liya-btn::before {
          content: '';
          position: absolute;
          left: 0; top: 0; bottom: 0;
          width: 2px;
          background: #4caf7d;
        }

        .liya-btn:hover {
          border-color: #4a4844;
          background: #111110;
          color: #fff;
        }

        .liya-mic {
          color: #4caf7d;
          flex-shrink: 0;
        }

        @media (min-width: 1024px) {
          .hi { grid-template-columns: 1fr 340px; gap: 80px; }
          .hr { display: flex !important; }
        }

        @media (max-width: 767px) {
          .sg { max-width: 100%; }
          .hc { gap: 28px; }
          .cta-row { flex-direction: column; align-items: flex-start; }
          .cta-row a, .cta-row button { width: 100%; justify-content: center; }
        }
      `}</style>

      <div className="hi">

        {/* ══ LEFT ══ */}
        <div className="hc">

          {/* availability pill */}
          <div className="avail-pill">
            <div className="avail-dot" />
            <span style={{ fontSize: "11px", color: "#72706b", letterSpacing: "0.1em", textTransform: "uppercase" }}>
              Available for new projects
            </span>
          </div>

          {/* eyebrow */}
          <div style={{ display: "flex", alignItems: "center", gap: "14px", marginTop: "-20px" }}>
            <div style={{ width: "28px", height: "1px", background: "#4a4844", flexShrink: 0 }} />
            <span style={{
              fontSize: "13px", fontWeight: 500, color: "#b8b4ac",
              letterSpacing: "0.08em", textTransform: "uppercase",
            }}>
              Senior Full-Stack Engineer
            </span>
          </div>

          {/* headline */}
          <div style={{ marginTop: "-12px" }}>
            <h1 style={{
              fontSize: "clamp(36px, 5vw, 64px)",
              fontWeight: 300,
              lineHeight: 1.12,
              letterSpacing: "-0.025em",
              color: "#dedad2",
              maxWidth: "700px",
              margin: 0,
            }}>
              Building reliable{" "}
              <em style={{
                fontFamily: "'Instrument Serif', serif",
                fontStyle: "italic",
                fontWeight: 400,
                color: "#c8c4bc",
              }}>
                web products
              </em>{" "}
              with clear scope and consistent delivery.
            </h1>

            <p style={{
              marginTop: "24px",
              fontSize: "clamp(15px, 2vw, 17px)",
              lineHeight: "1.85",
              color: "#a8a49c",
              maxWidth: "520px",
              fontWeight: 300,
            }}>
              I work with startups and product teams to improve architecture,
              release confidence, and delivery speed — without adding unnecessary
              complexity.
            </p>
          </div>

          {/* stats */}
          <div className="sg">
            {STATS.map(s => (
              <div key={s.label} className="sc">
                <div style={{ fontSize: "24px", fontWeight: 500, color: "#dedad2", letterSpacing: "-0.02em", lineHeight: 1 }}>
                  {s.value}
                </div>
                <div style={{ fontSize: "12px", color: "#72706b", marginTop: "7px", letterSpacing: "0.03em" }}>
                  {s.label}
                </div>
              </div>
            ))}
          </div>

          {/* CTA buttons */}
          <div className="cta-row">
            <Link
              href="#contact"
              className="inline-flex items-center gap-[7px] py-[13px] px-5 bg-[#dedad2] text-[#0c0c0c] text-[13px] font-semibold tracking-[0.05em] uppercase border border-[#dedad2] whitespace-nowrap leading-none transition-colors duration-[180ms] hover:bg-white hover:border-white"
            >
              Schedule a 15-min call
              <ArrowRight size={13} strokeWidth={2} />
            </Link>

            <Link
              href="/Dereje_Seifu_Resume.pdf"
              target="_blank"
              download
              className="inline-flex items-center gap-[7px] py-[13px] px-5 bg-transparent text-[#dedad2] text-[13px] font-semibold tracking-[0.05em] uppercase border border-[#2a2826] whitespace-nowrap leading-none transition-colors duration-[180ms] hover:border-[#dedad2]"
            >
              <Download size={13} strokeWidth={2} />
              Download résumé
            </Link>

            {/* Liya button */}
            {onTalkToLiya && (
              <button className="liya-btn" onClick={onTalkToLiya}>
                <Mic size={13} strokeWidth={2} className="liya-mic" />
                Ask Liya
              </button>
            )}
          </div>

          {/* tech stack */}
          <div>
            <p style={{
              fontSize: "11px", color: "#72706b",
              letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "12px",
            }}>
              Stack
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
              {STACK.map(t => <span key={t} className="chip">{t}</span>)}
            </div>
          </div>

        </div>

        {/* ══ RIGHT — portrait ══ */}
        <div className="hr">
          <div style={{
            position: "relative",
            width: "100%",
            aspectRatio: "3 / 4",
            overflow: "hidden",
            background: "#161614",
          }}>
            <Image
              src="/images/profile.jpeg"
              alt="Dereje Seifu"
              fill
              priority
              sizes="340px"
              style={{ objectFit: "cover", filter: "grayscale(12%) contrast(1.04)" }}
            />
            {/* bottom fade */}
            <div style={{
              position: "absolute", inset: "auto 0 0 0",
              height: "30%",
              background: "linear-gradient(transparent, #0c0c0c)",
              pointerEvents: "none",
            }} />
            {/* Liya badge overlaid on photo */}
            {onTalkToLiya && (
              <button
                onClick={onTalkToLiya}
                style={{
                  position: "absolute",
                  bottom: "20px",
                  left: "50%",
                  transform: "translateX(-50%)",
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  padding: "10px 18px",
                  background: "rgba(12,12,12,0.92)",
                  border: "1px solid #2a2826",
                  cursor: "pointer",
                  backdropFilter: "blur(8px)",
                  whiteSpace: "nowrap",
                  transition: "border-color 0.18s",
                  fontFamily: "inherit",
                }}
                onMouseEnter={e => (e.currentTarget.style.borderColor = "#dedad2")}
                onMouseLeave={e => (e.currentTarget.style.borderColor = "#2a2826")}
              >
                <div style={{
                  width: "6px", height: "6px", borderRadius: "50%",
                  background: "#4caf7d",
                  boxShadow: "0 0 6px rgba(76,175,125,0.5)",
                  animation: "avPulse 2s ease-in-out infinite",
                  flexShrink: 0,
                }} />
                <span style={{ fontSize: "11px", color: "#a8a49c", letterSpacing: "0.1em", textTransform: "uppercase" }}>
                  Talk to Liya · My AI Assistant
                </span>
              </button>
            )}
          </div>
        </div>

      </div>
    </section>
  )
}