"use client"

import { Bot, Database, Layers3, ShieldCheck } from "lucide-react"

const BENEFITS = [
  {
    title: "Architecture with clear tradeoffs",
    description:
      "Design decisions are documented early so teams understand scope, cost, and long-term maintenance impact.",
    icon: Layers3,
    number: "01",
  },
  {
    title: "Reliable application stack",
    description:
      "Next.js 14, Supabase, and Azure SQL are used to deliver fast interfaces, stable data layers, and secure access patterns.",
    icon: Database,
    number: "02",
  },
  {
    title: "Security and operations discipline",
    description:
      "Release processes, observability, and infrastructure standards are built in from the start to reduce production risk.",
    icon: ShieldCheck,
    number: "03",
  },
  {
    title: "Practical AI-assisted delivery",
    description:
      "Claude Code and Cursor are used for faster implementation and review cycles, while final decisions stay engineering-led.",
    icon: Bot,
    number: "04",
  },
]

export function WhyChooseMe() {
  return (
    <section
      id="services"
      style={{
        background: "#0f0f0d",
        borderBottom: "1px solid #1e1e1c",
        padding: "96px 36px 104px",
      }}
    >
      <style jsx>{`
        /* ── section grid ─────────────────────────────────── */
        .wc-inner {
          max-width: 1200px;
          margin: 0 auto;
        }

        /* ── card grid ────────────────────────────────────── */
        .card-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1px;
          background: #1e1e1c;     /* gap color = border between cells */
          border: 1px solid #1e1e1c;
          margin-top: 64px;
        }
        @media (min-width: 640px)  { .card-grid { grid-template-columns: repeat(2, 1fr); } }
        @media (min-width: 1024px) { .card-grid { grid-template-columns: repeat(4, 1fr); } }

        /* ── individual card ──────────────────────────────── */
        .card {
          background: #0f0f0d;
          padding: 36px 32px 40px;
          display: flex;
          flex-direction: column;
          gap: 20px;
          transition: background 0.2s;
        }
        .card:hover { background: #141412; }

        /* ── icon wrapper ─────────────────────────────────── */
        .icon-wrap {
          width: 44px;
          height: 44px;
          border: 1px solid #2a2826;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          transition: border-color 0.2s;
        }
        .card:hover .icon-wrap { border-color: #4a4844; }
      `}</style>

      <div className="wc-inner">

        {/* header ───────────────────────────────────────── */}
        <div style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-end",
          flexWrap: "wrap",
          gap: "28px",
          paddingBottom: "0",
        }}>
          <div style={{ maxWidth: "600px" }}>
            {/* eyebrow */}
            <div style={{ display: "flex", alignItems: "center", gap: "14px", marginBottom: "20px" }}>
              <div style={{ width: "28px", height: "1px", background: "#4a4844" }} />
              <span style={{
                fontSize: "12px",
                fontWeight: 500,
                color: "#b8b4ac",       /* 7.5:1 contrast ✔ */
                letterSpacing: "0.1em",
                textTransform: "uppercase",
              }}>
                Services
              </span>
            </div>

            {/* heading */}
            <h2 style={{
              fontSize: "clamp(28px, 3.8vw, 48px)",
              fontWeight: 300,
              lineHeight: 1.13,
              letterSpacing: "-0.02em",
              color: "#dedad2",         /* 13:1 ✔ */
              margin: 0,
            }}>
              Engineering support for{" "}
              <em style={{
                fontFamily: "'Instrument Serif', serif",
                fontStyle: "italic",
                fontWeight: 400,
                color: "#c8c4bc",
              }}>
                scaling teams
              </em>
            </h2>
          </div>

          {/* subtitle */}
          <p style={{
            fontSize: "16px",
            color: "#a8a49c",           /* 6:1 ✔ */
            lineHeight: "1.85",
            fontWeight: 300,
            maxWidth: "380px",
            margin: 0,
          }}>
            Structured implementation support for teams dealing with technical debt,
            unstable releases, or unclear priorities — with transparent communication.
          </p>
        </div>

        {/* card grid ────────────────────────────────────── */}
        <div className="card-grid">
          {BENEFITS.map(({ title, description, icon: Icon, number }) => (
            <div key={number} className="card">

              {/* number + icon row */}
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                {/* index number — low contrast, decorative */}
                <span style={{
                  fontSize: "11px",
                  fontWeight: 500,
                  color: "#3a3830",
                  letterSpacing: "0.1em",
                  lineHeight: 1,
                  paddingTop: "2px",
                }}>
                  {number}
                </span>

                {/* icon box */}
                <div className="icon-wrap">
                  <Icon
                    size={18}
                    strokeWidth={1.5}
                    /* #a8a49c — secondary text on #0f0f0d = 5.8:1 ✔ */
                    color="#a8a49c"
                  />
                </div>
              </div>

              {/* title */}
              <h3 style={{
                fontSize: "16px",
                fontWeight: 500,
                color: "#dedad2",       /* 13:1 ✔ */
                lineHeight: 1.35,
                margin: 0,
              }}>
                {title}
              </h3>

              {/* description */}
              <p style={{
                fontSize: "14px",
                color: "#a8a49c",       /* 6:1 ✔ */
                lineHeight: "1.8",
                fontWeight: 300,
                margin: 0,
              }}>
                {description}
              </p>

            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
