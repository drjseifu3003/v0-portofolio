"use client"

import type React from "react"
import { useState } from "react"
import { CheckCircle2, Clock, Mail, MessageSquare, Phone, Send } from "lucide-react"

type FormState = "idle" | "submitting" | "success" | "error"

const STEPS = [
  { n: "1", title: "Discovery Call",        desc: "We review your current architecture, constraints, and immediate priorities." },
  { n: "2", title: "Scope and Delivery Plan", desc: "I propose practical options, timeline ranges, and implementation tradeoffs." },
  { n: "3", title: "Execution and Updates",  desc: "Work is delivered in milestones with regular progress updates and documented decisions." },
]

export function ContactSection() {
  const [state, setState] = useState<FormState>("idle")
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" })

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm(p => ({ ...p, [e.target.name]: e.target.value }))

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setState("submitting")
    setTimeout(() => {
      setState("success")
      setTimeout(() => {
        setState("idle")
        setForm({ name: "", email: "", subject: "", message: "" })
      }, 3000)
    }, 1500)
  }

  const disabled = state !== "idle"

  return (
    <section id="contact" style={{
      background: "#0f0f0d",
      borderBottom: "1px solid #1e1e1c",
      padding: "96px 36px 104px",
    }}>
      <style jsx>{`
        /* ── input / textarea base ──────────────────────── */
        .field {
          width: 100%;
          background: #0c0c0c;
          border: 1px solid #2a2826;
          color: #dedad2;
          font-size: 14px;
          font-family: inherit;
          font-weight: 300;
          padding: 13px 16px;
          outline: none;
          transition: border-color 0.18s;
          resize: none;
          -webkit-appearance: none;
        }
        .field::placeholder { color: #4a4844; }
        .field:focus { border-color: #4a4844; }
        .field:disabled { opacity: 0.4; cursor: not-allowed; }

        /* ── label ──────────────────────────────────────── */
        .lbl {
          display: block;
          font-size: 11px;
          font-weight: 500;
          color: #72706b;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          margin-bottom: 8px;
        }

        /* ── submit button ──────────────────────────────── */
        .submit-btn {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          padding: 15px 24px;
          background: #dedad2;
          color: #0c0c0c;
          font-size: 13px;
          font-weight: 600;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          border: 2px solid #dedad2;
          cursor: pointer;
          font-family: inherit;
          transition: background 0.18s;
          line-height: 1;
        }
        .submit-btn:hover:not(:disabled) { background: #ffffff; border-color: #ffffff; }
        .submit-btn:disabled { opacity: 0.5; cursor: not-allowed; }

        @keyframes spin { to { transform: rotate(360deg); } }

        /* ── layout ──────────────────────────────────────── */
        .ct-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 48px;
          margin-top: 64px;
        }
        @media (min-width: 1024px) { .ct-grid { grid-template-columns: 1fr 1fr; gap: 72px; } }
      `}</style>

      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>

        {/* section header */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: "28px" }}>
          <div style={{ maxWidth: "560px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "14px", marginBottom: "20px" }}>
              <div style={{ width: "28px", height: "1px", background: "#4a4844" }} />
              <span style={{ fontSize: "12px", fontWeight: 500, color: "#b8b4ac", letterSpacing: "0.1em", textTransform: "uppercase" }}>
                Contact
              </span>
            </div>
            <h2 style={{
              fontSize: "clamp(28px, 3.8vw, 48px)",
              fontWeight: 300, lineHeight: 1.13, letterSpacing: "-0.02em",
              color: "#dedad2", margin: 0,
            }}>
              Let's discuss your{" "}
              <em style={{ fontFamily: "'Instrument Serif', serif", fontStyle: "italic", fontWeight: 400, color: "#c8c4bc" }}>
                project goals
              </em>
            </h2>
          </div>
          <p style={{ fontSize: "16px", color: "#a8a49c", lineHeight: "1.85", fontWeight: 300, maxWidth: "340px", margin: 0 }}>
            Share your current product stage, technical constraints, and timeline. I'll respond with realistic next steps.
          </p>
        </div>

        <div className="ct-grid">

          {/* ── LEFT: info + steps ─────────────────────────────── */}
          <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>

            {/* contact info block */}
            <div style={{ border: "1px solid #2a2826", background: "#0c0c0c", padding: "32px" }}>
              <p style={{ fontSize: "14px", fontWeight: 500, color: "#dedad2", marginBottom: "28px", letterSpacing: "0.02em" }}>
                Get in touch
              </p>

              <div style={{ display: "flex", flexDirection: "column", gap: "22px" }}>
                {[
                  { Icon: Mail,  label: "Email",         value: "Derejeseifu3030@gmail.com", href: "mailto:Derejeseifu3030@gmail.com" },
                  { Icon: Phone, label: "Phone",         value: "(+251) 0966016473",          href: "tel:+251966016473" },
                  { Icon: Clock, label: "Response time", value: "Usually within 12–24 hours", href: null },
                ].map(({ Icon, label, value, href }) => (
                  <div key={label} style={{ display: "flex", alignItems: "flex-start", gap: "16px" }}>
                    {/* icon box */}
                    <div style={{
                      width: "38px", height: "38px", flexShrink: 0,
                      border: "1px solid #2a2826",
                      display: "flex", alignItems: "center", justifyContent: "center",
                    }}>
                      <Icon size={15} strokeWidth={1.6} color="#a8a49c" />
                    </div>
                    <div>
                      <p style={{ fontSize: "11px", color: "#72706b", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "4px" }}>
                        {label}
                      </p>
                      {href ? (
                        <a href={href} style={{
                          fontSize: "14px", fontWeight: 400, color: "#a8a49c",
                          textDecoration: "none", transition: "color 0.2s",
                        }}
                          onMouseEnter={e => (e.currentTarget.style.color = "#dedad2")}
                          onMouseLeave={e => (e.currentTarget.style.color = "#a8a49c")}
                        >
                          {value}
                        </a>
                      ) : (
                        <p style={{ fontSize: "14px", fontWeight: 400, color: "#a8a49c", margin: 0 }}>{value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* steps block */}
            <div style={{ border: "1px solid #2a2826", background: "#0c0c0c", padding: "32px" }}>
              <p style={{ fontSize: "14px", fontWeight: 500, color: "#dedad2", marginBottom: "28px", letterSpacing: "0.02em" }}>
                What happens next?
              </p>

              <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
                {STEPS.map(({ n, title, desc }, i) => (
                  <div key={n} style={{
                    display: "flex", gap: "18px",
                    paddingBottom: i < STEPS.length - 1 ? "24px" : "0",
                    borderBottom: i < STEPS.length - 1 ? "1px solid #1a1a18" : "none",
                    marginBottom: i < STEPS.length - 1 ? "24px" : "0",
                  }}>
                    {/* step number */}
                    <div style={{
                      width: "32px", height: "32px", flexShrink: 0,
                      border: "1px solid #2a2826",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      fontSize: "12px", fontWeight: 500, color: "#72706b",
                      letterSpacing: "0.02em",
                    }}>
                      {n}
                    </div>
                    <div style={{ paddingTop: "4px" }}>
                      <p style={{ fontSize: "14px", fontWeight: 500, color: "#dedad2", marginBottom: "6px" }}>{title}</p>
                      <p style={{ fontSize: "13px", color: "#a8a49c", lineHeight: "1.75", fontWeight: 300, margin: 0 }}>{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ── RIGHT: form ────────────────────────────────────── */}
          <div style={{ border: "1px solid #2a2826", background: "#0c0c0c", padding: "32px" }}>
            <form onSubmit={onSubmit}>
              <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>

                {/* name */}
                <div>
                  <label htmlFor="ct-name" className="lbl">Name</label>
                  <input id="ct-name" name="name" value={form.name} onChange={onChange}
                    placeholder="Your name" required disabled={disabled} className="field" />
                </div>

                {/* email */}
                <div>
                  <label htmlFor="ct-email" className="lbl">Email</label>
                  <input id="ct-email" name="email" type="email" value={form.email} onChange={onChange}
                    placeholder="your.email@example.com" required disabled={disabled} className="field" />
                </div>

                {/* project focus */}
                <div>
                  <label htmlFor="ct-subject" className="lbl">Project Focus</label>
                  <input id="ct-subject" name="subject" value={form.subject} onChange={onChange}
                    placeholder="Web app build, migration, optimization, or support"
                    required disabled={disabled} className="field" />
                </div>

                {/* message */}
                <div>
                  <label htmlFor="ct-message" className="lbl">Project Details</label>
                  <textarea id="ct-message" name="message" value={form.message} onChange={onChange}
                    placeholder="Share scope, timeline, team setup, and current blockers"
                    required disabled={disabled} rows={6} className="field" />
                </div>

                {/* submit */}
                <button type="submit" disabled={disabled} className="submit-btn">
                  {state === "idle" && <><MessageSquare size={14} strokeWidth={2} /> Send inquiry</>}
                  {state === "submitting" && (
                    <>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                        style={{ animation: "spin 0.8s linear infinite" }}>
                        <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/>
                      </svg>
                      Sending…
                    </>
                  )}
                  {state === "success" && <><CheckCircle2 size={14} strokeWidth={2} /> Message sent!</>}
                  {state === "error"   && <><Send size={14} strokeWidth={2} /> Try again</>}
                </button>

                {/* feedback banners */}
                {state === "success" && (
                  <div style={{
                    padding: "14px 16px",
                    background: "rgba(61,156,98,0.08)",
                    border: "1px solid rgba(61,156,98,0.2)",
                    fontSize: "13px", color: "#6bbf8a", lineHeight: "1.6",
                  }}>
                    Thanks for reaching out. I'll reply shortly with next steps.
                  </div>
                )}
                {state === "error" && (
                  <div style={{
                    padding: "14px 16px",
                    background: "rgba(200,60,60,0.08)",
                    border: "1px solid rgba(200,60,60,0.2)",
                    fontSize: "13px", color: "#d47070", lineHeight: "1.6",
                  }}>
                    There was an error sending your message. Please try again.
                  </div>
                )}

                {/* privacy note */}
                <p style={{ fontSize: "12px", color: "#4a4844", textAlign: "center", margin: 0, lineHeight: "1.6" }}>
                  Your information is private and only used to respond to your inquiry.
                </p>
              </div>
            </form>
          </div>

        </div>
      </div>
    </section>
  )
}
