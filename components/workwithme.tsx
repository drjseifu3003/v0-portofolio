/**
 * Work With Me page
 *
 * Create the file: app/work-with-me/page.tsx
 * Then add the link to your SiteHeader nav:
 *   { label: "Work with me", href: "/work-with-me" }
 *
 * The page uses only Tailwind utility classes and inline styles
 * so it matches the rest of your site without importing anything new.
 */

import type { Metadata } from "next"
import Link from "next/link"
import { ArrowUpRight, CheckCircle2, XCircle } from "lucide-react"
import { PROFILE_UPWORK } from "@/lib/site"

export const metadata: Metadata = {
  title: "Work With Me | Dereje Seifu",
  description:
    "How I work with founders and teams. Who I work with, how engagements run, what to expect, and how to start.",
}

// ─── data ────────────────────────────────────────────────────────────────────

const GOOD_FIT = [
  "You are building a healthcare AI platform, telemedicine product, or clinical decision tool and need someone who understands HIPAA, FDA-adjacent standards, and production medical data.",
  "You are a SaaS founder who needs a senior engineer to own the architecture from day one, not someone to execute a task list.",
  "You are running a GoHighLevel agency or high-ticket sales business and need custom AI built into your funnel, qualification flow, or CRM automation.",
  "You have raised money or have real revenue and need production-grade work, not a prototype.",
  "You want one senior person who can own the full stack: frontend, backend, AI integration, cloud infrastructure, and deployment.",
  "You are comfortable communicating async and do not need daily check-ins to feel confident things are moving.",
]

const NOT_FIT = [
  "You need a developer to fix a single bug or do a one-off task under ten hours.",
  "You have no budget and are hoping to work on equity alone.",
  "You want a large team of junior developers managed cheaply. That is a different business model.",
  "You need someone to be online during your business hours specifically and cannot work async.",
  "You want a yes-person who will build exactly what you describe without asking whether it is the right thing to build.",
]

const PROCESS = [
  {
    step: "01",
    title: "Short intro",
    body: "Send me a message on Upwork or LinkedIn. Three sentences is enough: what you are building, the problem you are trying to solve, and your rough timeline. I will read it same day.",
  },
  {
    step: "02",
    title: "Discovery call",
    body: "If there is a potential fit, we do a 20-minute call. I ask about the product, the compliance requirements, the stack, and what success looks like in 90 days. You ask me anything about how I work.",
  },
  {
    step: "03",
    title: "Architecture and scope",
    body: "I put together a written technical breakdown: recommended stack, architecture decisions, scope, timeline, and a fixed price. No hourly billing on projects. You know exactly what you are getting and what it costs.",
  },
  {
    step: "04",
    title: "Build",
    body: "I work in short cycles with a working build at the end of each one. You see real progress weekly, not a big reveal at the end. Every decision I make I document so you are never locked into my understanding of your own product.",
  },
  {
    step: "05",
    title: "Ship and handover",
    body: "I deploy to production, write the handover documentation, and do a walkthrough call so your team can operate the system without depending on me. Then I am available for ongoing support if you want it.",
  },
]

const ENGAGEMENTS = [
  {
    type: "Fixed-scope project",
    range: "$3,000 to $25,000",
    who: "Founders who need a specific product built end to end.",
    detail:
      "Defined scope, fixed price, defined timeline. No surprises. Best for greenfield builds and well-understood product requirements.",
  },
  {
    type: "Monthly retainer",
    range: "$2,000 to $6,000 per month",
    who: "Teams that want ongoing engineering capacity without a full-time hire.",
    detail:
      "Ongoing feature development, AI integration work, architecture decisions, and technical support. Minimum three months.",
  },
  {
    type: "Paid discovery",
    range: "$300 to $500",
    who: "Founders who are not ready to commit to a full project but want a technical opinion.",
    detail:
      "Three-hour session. I review your current architecture or product plan and give you a full written technical spec: what to build, what stack to use, what risks exist, and what it will cost. No commitment beyond that.",
  },
]

// ─── page ─────────────────────────────────────────────────────────────────────

export default function WorkWithMePage() {
  return (
    <main>
      <style>{`
        .wwm-shell {
          max-width: 860px;
          margin: 0 auto;
          padding: clamp(40px, 6vw, 72px) clamp(16px, 4vw, 36px);
          box-sizing: border-box;
        }
        .wwm-section {
          margin-bottom: clamp(48px, 7vw, 80px);
        }
        .wwm-section-label {
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.09em;
          text-transform: uppercase;
          color: #1d4ed8;
          margin: 0 0 10px;
        }
        .wwm-h2 {
          font-size: clamp(20px, 2.4vw + 0.5rem, 28px);
          font-weight: 700;
          letter-spacing: -0.02em;
          color: #111827;
          margin: 0 0 16px;
          line-height: 1.15;
        }
        .wwm-body {
          font-size: clamp(14px, 0.9vw + 0.6rem, 16px);
          color: #4b5563;
          line-height: 1.7;
          margin: 0 0 16px;
        }
        .wwm-divider {
          border: none;
          border-top: 1px solid #e5e7eb;
          margin: 0 0 clamp(48px, 7vw, 80px);
        }

        /* fit lists */
        .wwm-fit-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 24px;
        }
        .wwm-fit-col-label {
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          margin: 0 0 14px;
        }
        .wwm-fit-item {
          display: flex;
          gap: 10px;
          align-items: flex-start;
          margin-bottom: 12px;
        }
        .wwm-fit-text {
          font-size: 14px;
          color: #374151;
          line-height: 1.6;
          margin: 0;
        }

        /* process */
        .wwm-process {
          display: flex;
          flex-direction: column;
          gap: 0;
        }
        .wwm-step {
          display: grid;
          grid-template-columns: 48px 1fr;
          gap: 20px;
          padding: 24px 0;
          border-bottom: 1px solid #f3f4f6;
        }
        .wwm-step:last-child { border-bottom: none; }
        .wwm-step-num {
          font-size: 13px;
          font-weight: 700;
          color: #1d4ed8;
          padding-top: 2px;
          font-variant-numeric: tabular-nums;
        }
        .wwm-step-title {
          font-size: 16px;
          font-weight: 600;
          color: #111827;
          margin: 0 0 6px;
          line-height: 1.3;
        }
        .wwm-step-body {
          font-size: 14px;
          color: #6b7280;
          line-height: 1.65;
          margin: 0;
        }

        /* engagement types */
        .wwm-eng-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
        }
        .wwm-eng-card {
          border: 1px solid #e5e7eb;
          border-radius: 14px;
          padding: 20px;
          background: #fafafa;
        }
        .wwm-eng-type {
          font-size: 13px;
          font-weight: 700;
          color: #111827;
          margin: 0 0 4px;
        }
        .wwm-eng-range {
          font-size: 14px;
          font-weight: 600;
          color: #1d4ed8;
          margin: 0 0 10px;
        }
        .wwm-eng-who {
          font-size: 12px;
          color: #6b7280;
          margin: 0 0 8px;
          line-height: 1.5;
          font-style: italic;
        }
        .wwm-eng-detail {
          font-size: 13px;
          color: #4b5563;
          margin: 0;
          line-height: 1.6;
        }

        /* CTA */
        .wwm-cta-box {
          background: #0f1b2d;
          border-radius: 20px;
          padding: clamp(32px, 5vw, 56px) clamp(24px, 4vw, 48px);
          text-align: center;
        }
        .wwm-cta-title {
          font-size: clamp(20px, 2.4vw + 0.4rem, 28px);
          font-weight: 700;
          color: #ffffff;
          margin: 0 0 10px;
          letter-spacing: -0.02em;
          line-height: 1.15;
        }
        .wwm-cta-body {
          font-size: 15px;
          color: #93c5fd;
          margin: 0 0 24px;
          line-height: 1.6;
        }
        .wwm-cta-row {
          display: flex;
          gap: 12px;
          justify-content: center;
          flex-wrap: wrap;
        }
        .wwm-btn-primary {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          padding: 12px 22px;
          border-radius: 999px;
          font-size: 14px;
          font-weight: 700;
          color: #ffffff;
          background: linear-gradient(165deg, #16c713 0%, #14a800 42%, #118f00 100%);
          border: 1px solid rgba(255,255,255,0.18);
          box-shadow: 0 8px 24px rgba(20,168,0,0.35);
          text-decoration: none;
          letter-spacing: -0.01em;
          transition: transform 0.15s ease;
        }
        .wwm-btn-primary:hover { transform: translateY(-1px); }
        .wwm-btn-secondary {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          padding: 12px 22px;
          border-radius: 999px;
          font-size: 14px;
          font-weight: 600;
          color: #ffffff;
          background: rgba(255,255,255,0.1);
          border: 1px solid rgba(255,255,255,0.2);
          text-decoration: none;
          letter-spacing: -0.01em;
          transition: background 0.15s ease;
        }
        .wwm-btn-secondary:hover { background: rgba(255,255,255,0.16); }

        @media (max-width: 767px) {
          .wwm-fit-grid   { grid-template-columns: 1fr; }
          .wwm-eng-grid   { grid-template-columns: 1fr; }
          .wwm-step       { grid-template-columns: 36px 1fr; gap: 14px; }
        }
      `}</style>

      <div className="wwm-shell">

        {/* ── hero ── */}
        <div className="wwm-section">
          <p className="wwm-section-label">Working together</p>
          <h1
            style={{
              fontSize: "clamp(26px, 3.2vw + 0.6rem, 40px)",
              fontWeight: 700,
              letterSpacing: "-0.03em",
              color: "#111827",
              margin: "0 0 16px",
              lineHeight: 1.05,
            }}
          >
            What it looks like to work with me.
          </h1>
          <p className="wwm-body" style={{ maxWidth: 580 }}>
            This page answers the questions founders usually ask before reaching out:
            who I work best with, how an engagement runs, and what it costs. If you
            read this and think there is a fit, the last section tells you how to start.
          </p>
        </div>

        <hr className="wwm-divider" />

        {/* ── good fit / not fit ── */}
        <div className="wwm-section">
          <p className="wwm-section-label">Who I work with</p>
          <h2 className="wwm-h2">Good fit and not a good fit.</h2>
          <p className="wwm-body">
            Being honest about this saves both of us time. I am not the right
            person for every project, and I would rather tell you that upfront
            than waste your week on a discovery call that goes nowhere.
          </p>

          <div className="wwm-fit-grid">
            <div>
              <p className="wwm-fit-col-label" style={{ color: "#166534" }}>
                Good fit
              </p>
              {GOOD_FIT.map((item, i) => (
                <div key={i} className="wwm-fit-item">
                  <CheckCircle2
                    size={17}
                    color="#16a34a"
                    strokeWidth={2}
                    style={{ flexShrink: 0, marginTop: 2 }}
                    aria-hidden
                  />
                  <p className="wwm-fit-text">{item}</p>
                </div>
              ))}
            </div>

            <div>
              <p className="wwm-fit-col-label" style={{ color: "#991b1b" }}>
                Not a good fit
              </p>
              {NOT_FIT.map((item, i) => (
                <div key={i} className="wwm-fit-item">
                  <XCircle
                    size={17}
                    color="#dc2626"
                    strokeWidth={2}
                    style={{ flexShrink: 0, marginTop: 2 }}
                    aria-hidden
                  />
                  <p className="wwm-fit-text">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <hr className="wwm-divider" />

        {/* ── process ── */}
        <div className="wwm-section">
          <p className="wwm-section-label">The process</p>
          <h2 className="wwm-h2">How an engagement runs.</h2>
          <p className="wwm-body">
            Every project follows the same five steps. The order matters because
            each step removes risk before money changes hands.
          </p>

          <div className="wwm-process">
            {PROCESS.map(item => (
              <div key={item.step} className="wwm-step">
                <span className="wwm-step-num">{item.step}</span>
                <div>
                  <p className="wwm-step-title">{item.title}</p>
                  <p className="wwm-step-body">{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <hr className="wwm-divider" />

        {/* ── engagement types ── */}
        <div className="wwm-section">
          <p className="wwm-section-label">Engagement types</p>
          <h2 className="wwm-h2">How I price work.</h2>
          <p className="wwm-body">
            No hourly billing on projects. Hourly billing creates the wrong
            incentives on both sides. You should know what something costs
            before we start, not find out at the end of the month.
          </p>

          <div className="wwm-eng-grid">
            {ENGAGEMENTS.map(eng => (
              <div key={eng.type} className="wwm-eng-card">
                <p className="wwm-eng-type">{eng.type}</p>
                <p className="wwm-eng-range">{eng.range}</p>
                <p className="wwm-eng-who">{eng.who}</p>
                <p className="wwm-eng-detail">{eng.detail}</p>
              </div>
            ))}
          </div>
        </div>

        <hr className="wwm-divider" />

        {/* ── expectations ── */}
        <div className="wwm-section">
          <p className="wwm-section-label">What to expect</p>
          <h2 className="wwm-h2">How I communicate and what I own.</h2>

          <p className="wwm-body">
            I write down every significant technical decision I make during a
            project. Not in a way that adds overhead, just a short note in a
            shared doc so you always understand why your product is built the
            way it is. You should never be locked into my understanding of your
            own system.
          </p>
          <p className="wwm-body">
            I send a short update at the end of every work cycle with what was
            built, what is next, and anything that needs your input. If
            something comes up that changes the scope or the timeline, I tell
            you immediately. No surprises at handover.
          </p>
          <p className="wwm-body">
            I respond to messages within a few hours during working days. I am
            based in Addis Ababa, Ethiopia, and work across EU and US time
            zones without issue. If you need someone physically in your office,
            I am not that person. If you need someone who delivers, communicates
            clearly, and treats your product like it matters, that is exactly
            what I do.
          </p>
        </div>

        {/* ── CTA ── */}
        <div className="wwm-cta-box">
          <p className="wwm-cta-title">Ready to start?</p>
          <p className="wwm-cta-body">
            Send a short message. Three sentences: what you are building, the
            problem you are solving, and your rough timeline. I will read it the
            same day and tell you honestly whether I can help.
          </p>
          <div className="wwm-cta-row">
            <a
              href={PROFILE_UPWORK}
              target="_blank"
              rel="noopener noreferrer"
              className="wwm-btn-primary"
            >
              Message me on Upwork
              <ArrowUpRight size={15} strokeWidth={2.25} aria-hidden />
            </a>
            <a
              href="https://www.linkedin.com/in/drjseifu1991/"
              target="_blank"
              rel="noopener noreferrer"
              className="wwm-btn-secondary"
            >
              Connect on LinkedIn
              <ArrowUpRight size={15} strokeWidth={2.25} aria-hidden />
            </a>
          </div>
          <p
            style={{
              marginTop: 16,
              fontSize: 12,
              color: "#64748b",
            }}
          >
            Or talk to Liya on the homepage. She can answer questions about my
            availability and process right now.
          </p>
        </div>

      </div>
    </main>
  )
}