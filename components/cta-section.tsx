"use client"

import { Calendar, MessageCircle, Phone } from "lucide-react"

export function CTASection() {
  return (
    <section style={{
      background: "#0c0c0c",
      borderBottom: "1px solid #1e1e1c",
      padding: "96px 36px 104px",
    }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>

        {/* bordered container — slight bg lift */}
        <div style={{
          border: "1px solid #2a2826",
          background: "#0f0f0d",
          padding: "72px 48px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "32px",
          textAlign: "center",
        }}>

          {/* eyebrow */}
          <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
            <div style={{ width: "28px", height: "1px", background: "#4a4844" }} />
            <span style={{
              fontSize: "12px", fontWeight: 500,
              color: "#b8b4ac",
              letterSpacing: "0.1em", textTransform: "uppercase",
            }}>
              Let's work together
            </span>
            <div style={{ width: "28px", height: "1px", background: "#4a4844" }} />
          </div>

          {/* heading */}
          <h2 style={{
            fontSize: "clamp(28px, 4vw, 52px)",
            fontWeight: 300,
            lineHeight: 1.12,
            letterSpacing: "-0.025em",
            color: "#dedad2",
            maxWidth: "680px",
            margin: 0,
          }}>
            Need a senior engineer to{" "}
            <em style={{
              fontFamily: "'Instrument Serif', serif",
              fontStyle: "italic",
              fontWeight: 400,
              color: "#c8c4bc",
            }}>
              unblock delivery?
            </em>
          </h2>

          {/* body */}
          <p style={{
            fontSize: "17px",
            color: "#a8a49c",
            lineHeight: "1.85",
            fontWeight: 300,
            maxWidth: "520px",
            margin: 0,
          }}>
            Start with a short intro call. We can review your current priorities,
            identify risks, and decide on a practical next step.
          </p>

          {/* buttons */}
          <div style={{
            display: "flex",
            gap: "12px",
            flexWrap: "wrap",
            justifyContent: "center",
            marginTop: "8px",
          }}>
            {/* email */}
            <a
              href="mailto:Derejeseifu3030@gmail.com"
              style={{
                display: "inline-flex", alignItems: "center", gap: "7px",
                padding: "10px 20px",
                background: "transparent",
                color: "#dedad2",
                fontSize: "13px", fontWeight: 600,
                letterSpacing: "0.05em", textTransform: "uppercase",
                textDecoration: "none",
                border: "2px solid #dedad2",
                whiteSpace: "nowrap", lineHeight: 1,
                transition: "background 0.18s, color 0.18s",
              }}
              onMouseEnter={e => { e.currentTarget.style.background = "#dedad2"; e.currentTarget.style.color = "#0c0c0c" }}
              onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "#dedad2" }}
            >
              <MessageCircle size={13} strokeWidth={2} />
              Send an email
            </a>

            {/* phone */}
            <a
              href="tel:+251966016473"
              style={{
                display: "inline-flex", alignItems: "center", gap: "7px",
                padding: "10px 20px",
                background: "transparent",
                color: "#dedad2",
                fontSize: "13px", fontWeight: 600,
                letterSpacing: "0.05em", textTransform: "uppercase",
                textDecoration: "none",
                border: "2px solid #dedad2",
                whiteSpace: "nowrap", lineHeight: 1,
                transition: "background 0.18s, color 0.18s",
              }}
              onMouseEnter={e => { e.currentTarget.style.background = "#dedad2"; e.currentTarget.style.color = "#0c0c0c" }}
              onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "#dedad2" }}
            >
              <Phone size={13} strokeWidth={2} />
              (+251) 0966016473
            </a>

            {/* schedule — primary solid */}
            <a
              href="https://calendly.com/derejeseifu3030/30min"
              target="_blank"
              rel="noreferrer"
              style={{
                display: "inline-flex", alignItems: "center", gap: "7px",
                padding: "10px 20px",
                background: "#dedad2",
                color: "#0c0c0c",
                fontSize: "13px", fontWeight: 600,
                letterSpacing: "0.05em", textTransform: "uppercase",
                textDecoration: "none",
                border: "2px solid #dedad2",
                whiteSpace: "nowrap", lineHeight: 1,
                transition: "background 0.18s, border-color 0.18s",
              }}
              onMouseEnter={e => { e.currentTarget.style.background = "#ffffff"; e.currentTarget.style.borderColor = "#ffffff" }}
              onMouseLeave={e => { e.currentTarget.style.background = "#dedad2"; e.currentTarget.style.borderColor = "#dedad2" }}
            >
              <Calendar size={13} strokeWidth={2} />
              Schedule a 15-minute call
            </a>
          </div>

          {/* footnote */}
          <p style={{ fontSize: "12px", color: "#72706b", margin: 0 }}>
            Typical response within 12–24 hours · No commitment required
          </p>

        </div>
      </div>
    </section>
  )
}
