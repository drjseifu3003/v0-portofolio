"use client"

import { ArrowRight, Download } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const STATS = [
  { value: "300K+",  label: "Users supported"  },
  { value: "~2s",    label: "Target page loads" },
  { value: "99.9%+", label: "Release uptime"    },
]

const STACK = ["Next.js", "TypeScript", "React", "Node.js", "AWS", "FastAPI", "Supabase", "PostgreSQL", "Claude", "Cursor"]

export function HeroSection() {
  return (
    <section style={{
      background: "#0c0c0c",
      borderBottom: "1px solid #1e1e1c",
      padding: "64px 36px 88px",
    }}>
      <style jsx>{`
        /* ── grid ─────────────────────────────────── */
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

        /* ── stats ────────────────────────────────── */
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

        /* ── chips ────────────────────────────────── */
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

        /* ── desktop ──────────────────────────────── */
        @media (min-width: 1024px) {
          .hi { grid-template-columns: 1fr 340px; gap: 80px; }
          .hr { display: flex !important; }
        }

        /* ── very narrow screens: only stat grid adjusts ── */
        @media (max-width: 480px) {
          .sg { max-width: 100%; }
        }
      `}</style>

      <div className="hi">

        {/* ══════════ LEFT ══════════ */}
        <div className="hc">

          {/* eyebrow */}
          <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
            <div style={{ width: "28px", height: "1px", background: "#4a4844", flexShrink: 0 }} />
            <span style={{
              fontSize: "13px",
              fontWeight: 500,
              color: "#b8b4ac",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
            }}>
              Senior Full-Stack Engineer
            </span>
          </div>

          {/* headline */}
          <div>
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
              fontSize: "17px",
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
          <div style={{ display: "flex", flexDirection: "row", flexWrap: "nowrap", gap: "12px", alignItems: "center" }}>
            {/* PRIMARY — pixel-perfect match to header .hdr-cta */}
            <Link
              href="#contact"
              className="inline-flex items-center gap-[7px] py-[13px] px-5 bg-[#dedad2] text-[#0c0c0c] text-[13px] font-semibold tracking-[0.05em] uppercase border border-[#dedad2] whitespace-nowrap leading-none transition-colors duration-[180ms] hover:bg-white hover:border-white"
            >
              Schedule a 15-min call
              <ArrowRight size={13} strokeWidth={2} />
            </Link>

            {/* SECONDARY — same spec, inverted fill */}
            <Link
              href="/Dereje_Seifu_Resume.pdf"
              target="_blank"
              download
              className="inline-flex items-center gap-[7px] py-[13px] px-5 bg-transparent text-[#dedad2] text-[13px] font-semibold tracking-[0.05em] uppercase border border-[#dedad2] whitespace-nowrap leading-none transition-colors duration-[180ms] hover:bg-[#dedad2] hover:text-[#0c0c0c]"
            >
              <Download size={13} strokeWidth={2} />
              Download résumé
            </Link>
          </div>

          {/* tech stack */}
          <div>
            <p style={{
              fontSize: "11px",
              color: "#72706b",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              marginBottom: "12px",
            }}>
              Stack
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
              {STACK.map(t => <span key={t} className="chip">{t}</span>)}
            </div>
          </div>

        </div>

        {/* ══════════ RIGHT — portrait ══════════ */}
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
            <div style={{
              position: "absolute", inset: "auto 0 0 0",
              height: "30%",
              background: "linear-gradient(transparent, #0c0c0c)",
              pointerEvents: "none",
            }} />
          </div>
        </div>

      </div>
    </section>
  )
}
