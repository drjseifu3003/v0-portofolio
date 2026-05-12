"use client"

import { ArrowRight } from "lucide-react"

function handleOpen() {
  // Keep both events for compatibility with existing open handlers.
  window.dispatchEvent(new CustomEvent("liya:open"))
  window.dispatchEvent(new CustomEvent("open-liya"))
}

export function LiyaSection() {
  return (
    <section aria-labelledby="liya-heading" className="liya-wrap">
      <style jsx>{`
        .liya-wrap {
          padding: clamp(52px, 7vw, 84px) 0;
          border-top: 1px solid hsl(var(--border));
          border-bottom: 1px solid hsl(var(--border));
          background: hsl(var(--background));
        }

        .liya-shell {
          max-width: 980px;
          margin: 0 auto;
          padding: 0 clamp(16px, 4vw, 36px);
        }

        .liya-card {
          border: 1px solid hsl(var(--border));
          border-radius: 16px;
          background: hsl(var(--card));
          box-shadow: 0 8px 22px rgba(15, 23, 42, 0.06);
          padding: clamp(24px, 4vw, 40px);
          text-align: center;
        }

        .liya-kicker {
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: hsl(var(--muted-foreground));
          margin: 0;
        }

        .liya-title {
          font-size: clamp(28px, 4vw, 40px);
          line-height: 1.12;
          letter-spacing: -0.025em;
          font-weight: 800;
          color: hsl(var(--foreground));
          margin: 12px auto;
          max-width: 20ch;
        }

        .liya-title-accent {
          color: hsl(var(--primary));
        }

        .liya-lead {
          margin: 0 auto;
          font-size: clamp(15px, 0.75vw + 0.8rem, 17px);
          line-height: 1.6;
          color: hsl(var(--muted-foreground));
          max-width: 56ch;
        }

        .liya-actions {
          margin-top: 20px;
        }

        .liya-cta {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 9px;
          padding: 11px 18px;
          border-radius: 10px;
          font-size: 15px;
          font-weight: 700;
          color: hsl(var(--primary-foreground));
          background: hsl(var(--primary));
          border: 1px solid hsl(var(--primary));
          cursor: pointer;
          transition: background-color 0.16s ease, border-color 0.16s ease;
        }

        .liya-cta:hover {
          background: hsl(var(--primary) / 0.9);
          border-color: hsl(var(--primary) / 0.9);
        }

        .liya-cta:focus-visible {
          outline: 3px solid hsl(var(--ring) / 0.42);
          outline-offset: 4px;
        }

        @media (max-width: 560px) {
          .liya-card {
            border-radius: 14px;
            padding: 18px;
          }

          .liya-title {
            font-size: clamp(26px, 9vw, 34px);
          }

          .liya-lead {
            font-size: 15px;
          }
        }
      `}</style>

      <div className="liya-shell">
        <div className="liya-card">
          <p className="liya-kicker">Meet Liya</p>

          <h2 id="liya-heading" className="liya-title">
            Have a project in mind? <span className="liya-title-accent">Talk to Liya.</span>
          </h2>

          <p className="liya-lead">Get instant answers about fit, timeline, and next steps.</p>

          <div className="liya-actions">
              <button
                className="liya-cta"
                onClick={handleOpen}
                type="button"
                aria-label="Start a conversation with Liya"
              >
                Talk to Liya
                <ArrowRight size={16} strokeWidth={2.25} aria-hidden />
              </button>
          </div>
        </div>
      </div>
    </section>
  )
}
