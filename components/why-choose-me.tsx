"use client"

import { BrainCircuit, Building2, Layers3, PhoneCall, Rocket, Workflow } from "lucide-react"

const BENEFITS = [
  {
    title: "AI Agents and RAG Systems",
    description:
      "Agents that reason over your real business data and complete workflows autonomously. Built to run in production, not just in a demo environment.",
    icon: BrainCircuit,
    number: "01",
  },
  {
    title: "Voice AI Systems",
    description:
      "Inbound calls handled, leads qualified, meetings booked, and everything logged to your CRM. Built with Vapi. Runs 24 hours a day without supervision.",
    icon: PhoneCall,
    number: "02",
  },
  {
    title: "Full-Stack SaaS Platforms",
    description:
      "Next.js, Node.js, NestJS, Supabase, and AWS. Architected from day one so you are not rebuilding everything when growth hits.",
    icon: Layers3,
    number: "03",
  },
  {
    title: "MVP Development",
    description:
      "I help founders scope what actually needs to exist, build it fast, and get it in front of real users. Weeks, not months.",
    icon: Rocket,
    number: "04",
  },
  {
    title: "N8N Automation",
    description:
      "Manual processes eliminated. Existing tools connected. Systems that run without anyone touching them.",
    icon: Workflow,
    number: "05",
  },
  {
    title: "Enterprise Systems",
    description:
      "Built secure, scalable, and compliance-ready from the start. Not patched together after problems appear.",
    icon: Building2,
    number: "06",
  },
]

export function WhyChooseMe() {
  return (
    <section
      id="services"
      style={{
        background: "#0f0f0d",
        borderBottom: "1px solid #1e1e1c",
      padding: "clamp(52px, 8vw, 96px) clamp(20px, 4vw, 36px) clamp(60px, 9vw, 104px)",
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
          background: #1e1e1c;
          border: 1px solid #1e1e1c;
          margin-top: clamp(36px, 5vw, 64px);
        }
        @media (min-width: 640px)  { .card-grid { grid-template-columns: repeat(2, 1fr); } }
        @media (min-width: 1024px) { .card-grid { grid-template-columns: repeat(3, 1fr); } }
        @media (max-width: 639px)  { .wc-subtitle { display: none; } }

        /* ── individual card ──────────────────────────────── */
        .card {
          background: #0f0f0d;
          padding: clamp(24px, 3vw, 36px) clamp(20px, 2.5vw, 32px) clamp(28px, 3.5vw, 40px);
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
              {/* <div style={{ width: "28px", height: "1px", background: "#4a4844" }} /> */}
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
              What I build and architect
            </h2>
          </div>

          {/* subtitle */}
          <p style={{
            fontSize: "16px",
            color: "#a8a49c",
            lineHeight: "1.85",
            fontWeight: 300,
            maxWidth: "380px",
            margin: 0,
            display: "var(--subtitle-display, block)",
          }}
            className="wc-subtitle"
          >
            I work across the full stack and own the outcome end to end.
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
