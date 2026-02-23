"use client"

const TRAITS = [
  "Committed to Quality",
  "Reliable",
  "Accountable for Outcomes",
  "Clear Communicator",
  "Collaborative",
  "Detail Oriented",
  "Professional",
  "Solution Oriented",
]

// doubled for seamless loop
const TICKER = [...TRAITS, ...TRAITS]

const VALUES = [
  {
    number: "01",
    title: "How I work",
    body: "Predictable delivery over heroics. I scope clearly upfront, communicate early when something changes, and document decisions so nothing lives only in my head.",
  },
  {
    number: "02",
    title: "What teams get",
    body: "A collaborator who owns the outcome — not just the task. I stay engaged from architecture to deployment, and I stay accountable when things need fixing.",
  },
  {
    number: "03",
    title: "How I communicate",
    body: "No jargon, no silence. Progress is shared regularly, blockers are surfaced immediately, and technical decisions are explained in plain terms.",
  },
]

export function ClientInsights() {
  return (
    <section style={{
      background: "#0f0f0d",
      borderBottom: "1px solid #1e1e1c",
      overflow: "hidden",
    }}>
      <style jsx>{`
        /* ── infinite ticker ─────────────────────── */
        .ticker-wrap {
          border-top: 1px solid #1e1e1c;
          border-bottom: 1px solid #1e1e1c;
          padding: 18px 0;
          overflow: hidden;
          white-space: nowrap;
        }
        .ticker-track {
          display: inline-flex;
          gap: 0;
          animation: ticker 28s linear infinite;
        }
        .ticker-wrap:hover .ticker-track {
          animation-play-state: paused;
        }
        @keyframes ticker {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        .ticker-item {
          display: inline-flex;
          align-items: center;
          gap: 0;
          padding: 0 32px;
          font-size: 12px;
          font-weight: 500;
          color: #72706b;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          white-space: nowrap;
          transition: color 0.2s;
        }
        .ticker-item:hover { color: #dedad2; }
        .ticker-dot {
          width: 3px;
          height: 3px;
          border-radius: 50%;
          background: #2a2826;
          margin-left: 32px;
          flex-shrink: 0;
        }

        /* ── main content grid ───────────────────── */
        .ci-body {
          max-width: 1200px;
          margin: 0 auto;
          padding: clamp(48px, 7vw, 80px) clamp(20px, 4vw, 36px) clamp(56px, 8vw, 96px);
          display: grid;
          grid-template-columns: 1fr;
          gap: 48px;
        }
        @media (min-width: 1024px) {
          .ci-body { grid-template-columns: 1fr 1fr; gap: 96px; align-items: start; }
        }

        /* ── value rows ──────────────────────────── */
        .val-row {
          display: grid;
          grid-template-columns: 48px 1fr;
          gap: 0 24px;
          padding: 28px 0;
          border-top: 1px solid #1e1e1c;
          transition: border-color 0.2s;
        }
        .val-row:last-child { border-bottom: 1px solid #1e1e1c; }
        .val-row:hover { border-top-color: #3a3830; }
      `}</style>

      {/* ── TICKER ──────────────────────────────────── */}
      <div className="ticker-wrap">
        <div className="ticker-track">
          {TICKER.map((t, i) => (
            <span key={i} className="ticker-item">
              {t}
              <span className="ticker-dot" />
            </span>
          ))}
        </div>
      </div>

      {/* ── BODY ────────────────────────────────────── */}
      <div className="ci-body">

        {/* LEFT — big statement */}
        <div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
          {/* eyebrow */}
          <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
            <div style={{ width: "28px", height: "1px", background: "#4a4844" }} />
            <span style={{
              fontSize: "12px", fontWeight: 500, color: "#b8b4ac",
              letterSpacing: "0.1em", textTransform: "uppercase",
            }}>
              Working style
            </span>
          </div>

          {/* large statement */}
          <p style={{
            fontSize: "clamp(22px, 3.2vw, 44px)",
            fontWeight: 300,
            lineHeight: 1.25,
            letterSpacing: "-0.02em",
            color: "#dedad2",
            margin: 0,
          }}>
            The traits above aren't self-described —{" "}
            <em style={{
              fontFamily: "'Instrument Serif', serif",
              fontStyle: "italic",
              fontWeight: 400,
              color: "#c8c4bc",
            }}>
              they're what clients and colleagues wrote
            </em>{" "}
            without being asked.
          </p>

          {/* supporting line */}
          <p style={{
            fontSize: "16px",
            color: "#a8a49c",
            lineHeight: "1.85",
            fontWeight: 300,
            maxWidth: "480px",
            margin: 0,
          }}>
            Recurring patterns across multiple projects and teams — not a list
            I wrote about myself, but a summary of how people describe working with me.
          </p>

          {/* LinkedIn link */}
          <a
            href="https://www.linkedin.com/in/drjseifu1991/details/recommendations/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-[7px] py-[10px] px-5 bg-transparent text-[#dedad2] text-[13px] font-semibold tracking-[0.05em] uppercase border-2 border-[#dedad2] whitespace-nowrap leading-none transition-colors duration-[180ms] hover:bg-[#dedad2] hover:text-[#0c0c0c]"
            style={{ alignSelf: "flex-start" }}
          >
            Read recommendations
            <svg width="13" height="13" viewBox="0 0 13 13" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M2.5 10.5l8-8M5 2.5h5.5v5.5"/>
            </svg>
          </a>
        </div>

        {/* RIGHT — 3 value rows */}
        <div>
          {VALUES.map(({ number, title, body }) => (
            <div key={number} className="val-row">
              {/* number col */}
              <span style={{
                fontSize: "11px", fontWeight: 500,
                color: "#3a3830",
                letterSpacing: "0.1em",
                paddingTop: "3px",
                lineHeight: 1,
              }}>
                {number}
              </span>

              {/* content col */}
              <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                <h3 style={{
                  fontSize: "16px", fontWeight: 500,
                  color: "#dedad2",
                  margin: 0, lineHeight: 1.3,
                }}>
                  {title}
                </h3>
                <p style={{
                  fontSize: "14px",
                  color: "#a8a49c",
                  lineHeight: "1.8",
                  fontWeight: 300,
                  margin: 0,
                }}>
                  {body}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
