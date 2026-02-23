"use client"

import { HeroSection }        from "@/components/hero-section"
import { ProjectsSection }    from "@/components/projects-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { CTASection }          from "@/components/cta-section"
import { ContactSection }      from "@/components/contact-section"
import { WhyChooseMe }         from "@/components/why-choose-me"
import { Mail, ArrowUpRight }  from "lucide-react"
import Link                    from "next/link"
import { useState, useEffect } from "react"
import { ClientInsights } from "@/components/client-insight"

const HEADER_H = 72

const NAV = [
  { label: "Services",     href: "#services"     },
  { label: "Work",         href: "#projects"     },
  { label: "Blog",         href: "/blog"         },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact",      href: "#contact"      },
]

export default function Home() {
  const [mob,      setMob]      = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [active,   setActive]   = useState("")

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 4)
    window.addEventListener("scroll", fn, { passive: true })
    return () => window.removeEventListener("scroll", fn)
  }, [])

  useEffect(() => {
    const fn = () => { if (window.innerWidth >= 768) setMob(false) }
    window.addEventListener("resize", fn)
    return () => window.removeEventListener("resize", fn)
  }, [])

  return (
    <div style={{ background: "#0c0c0c", color: "#dedad2", minHeight: "100vh", fontFamily: "'DM Sans', sans-serif" }}>

      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500;9..40,600&family=Instrument+Serif:ital@1&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; font-size: 16px; }
        body { background: #0c0c0c; overflow-x: hidden; -webkit-font-smoothing: antialiased; }

        ::-webkit-scrollbar            { width: 3px; }
        ::-webkit-scrollbar-track      { background: #0c0c0c; }
        ::-webkit-scrollbar-thumb      { background: #2e2e2e; border-radius: 2px; }

        /*
          Header contrast palette (bg: #0c0c0c, border-area bg same):
            #dedad2  logo name + CTA text bg    13:1  ✔ AAA
            #c8c4bc  nav links (rest state)      8:1  ✔ AA
            #ffffff  nav hover / active          21:1  ✔ AAA
        */

        /* ── nav links ────────────────────────────────────────── */
        .nav-link {
          position: relative;
          font-size: 14px;
          font-weight: 400;
          /*
            #c8c4bc = warm light gray, contrast 8:1 on #0c0c0c ✔ AA
            Much brighter than the previous #a8a49c (6:1) for header use
          */
          color: #c8c4bc;
          letter-spacing: 0.02em;
          text-decoration: none;
          padding-bottom: 3px;
          white-space: nowrap;
          transition: color 0.18s;
        }
        .nav-link::after {
          content: '';
          position: absolute;
          left: 0; bottom: 0;
          width: 0; height: 1px;
          background: #dedad2;
          transition: width 0.2s ease;
        }
        .nav-link:hover        { color: #dedad2; }
        .nav-link:hover::after { width: 100%; }
        .nav-link.active       { color: #dedad2; }
        .nav-link.active::after { width: 100%; }

        /* ── mobile drawer links ──────────────────────────────── */
        .mob-link {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 20px 0;
          font-size: 16px;
          font-weight: 400;
          color: #c8c4bc;
          text-decoration: none;
          border-bottom: 1px solid #1e1e1c;
          transition: color 0.18s;
        }
        .mob-link:hover { color: #dedad2; }

        /* ── header CTA ───────────────────────────────────────── */
        .hdr-cta {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          padding: 10px 20px;
          font-size: 13px;
          font-weight: 600;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          text-decoration: none;
          /* solid white/cream fill — maximum visibility */
          color: #0c0c0c;
          background: #dedad2;
          border: 2px solid #dedad2;
          cursor: pointer;
          white-space: nowrap;
          font-family: inherit;
          line-height: 1;
          transition: background 0.18s;
        }
        .hdr-cta:hover { background: #ffffff; border-color: #ffffff; }

        /* ── hamburger ────────────────────────────────────────── */
        .ham {
          display: block;
          width: 22px; height: 1.5px;
          background: #c8c4bc;
          border-radius: 1px;
          transition: transform 0.25s, opacity 0.2s;
        }

        /* ── responsive ───────────────────────────────────────── */
        @media (min-width: 768px) {
          .d-flex { display: flex !important; }
          .m-only  { display: none  !important; }
        }
        @media (max-width: 767px) {
          .d-flex { display: none  !important; }
          .m-only  { display: flex  !important; }
        }
      `}</style>

      {/* ════════════════════════════════════════════════════
          HEADER
      ════════════════════════════════════════════════════ */}
      <header style={{
        position: "fixed",
        inset: "0 0 auto 0",
        zIndex: 300,
        height: `${HEADER_H}px`,
        background: scrolled ? "rgba(10,10,10,0.97)" : "#0c0c0c",
        borderBottom: "1px solid #242420",
        backdropFilter: scrolled ? "blur(18px)" : "none",
        transition: "background 0.3s",
      }}>
        <div style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 36px",
          height: "100%",
          display: "flex",
          alignItems: "center",
        }}>

          {/* LOGO ─────────────────────────────────── */}
          <Link href="/" style={{ textDecoration: "none", flexShrink: 0, marginRight: "40px" }}>
            {/*
              Name: #dedad2  13:1 ✔
              Role: #9a9690  5.5:1 ✔ — readable small label
            */}
            <span style={{
              fontSize: "16px",
              fontWeight: 600,
              color: "#dedad2",
              display: "block",
              lineHeight: 1.2,
              letterSpacing: "0.01em",
            }}>
              Dereje Seifu
            </span>
            <span style={{
              fontSize: "11px",
              fontWeight: 400,
              color: "#9a9690",
              display: "block",
              letterSpacing: "0.09em",
              textTransform: "uppercase",
              marginTop: "3px",
            }}>
              Full-Stack Engineer
            </span>
          </Link>

          {/* hairline divider */}
          <div className="d-flex" style={{
            width: "1px", height: "24px",
            background: "#2a2826",
            flexShrink: 0,
            marginRight: "40px",
          }} />

          {/* DESKTOP NAV ──────────────────────────── */}
          <nav className="d-flex" style={{ alignItems: "center", gap: "36px", flex: 1 }}>
            {NAV.map(({ label, href }) => (
              <Link
                key={label}
                href={href}
                className={`nav-link${active === href ? " active" : ""}`}
                onClick={() => setActive(href)}
              >
                {label}
              </Link>
            ))}
          </nav>

          {/* CTA ──────────────────────────────────── */}
          <a href="mailto:Derejeseifu3030@gmail.com" className="hdr-cta d-flex">
            <Mail size={13} strokeWidth={2} />
            Get in touch
          </a>

          {/* HAMBURGER ────────────────────────────── */}
          <button
            className="m-only"
            onClick={() => setMob(v => !v)}
            aria-label="Toggle menu"
            style={{
              background: "none", border: "none", cursor: "pointer",
              padding: "8px", flexDirection: "column",
              gap: "6px", alignItems: "center", marginLeft: "auto",
            }}
          >
            <span className="ham" style={{ transform: mob ? "translateY(7.5px) rotate(45deg)"  : "none" }} />
            <span className="ham" style={{ opacity: mob ? 0 : 1 }} />
            <span className="ham" style={{ transform: mob ? "translateY(-7.5px) rotate(-45deg)" : "none" }} />
          </button>

        </div>
      </header>

      {/* ════════════════════════════════════════════════════
          MOBILE DRAWER
      ════════════════════════════════════════════════════ */}
      <div className="m-only" style={{
        position: "fixed",
        top: `${HEADER_H}px`, left: 0, right: 0, bottom: 0,
        background: "#0c0c0c",
        zIndex: 290,
        padding: "8px 36px 48px",
        overflowY: "auto",
        flexDirection: "column",
        transform: mob ? "translateX(0)" : "translateX(100%)",
        transition: "transform 0.28s cubic-bezier(0.4,0,0.2,1)",
        pointerEvents: mob ? "all" : "none",
      }}>
        <nav style={{ display: "flex", flexDirection: "column" }}>
          {NAV.map(({ label, href }) => (
            <Link key={label} href={href} className="mob-link" onClick={() => setMob(false)}>
              {label}
              <ArrowUpRight size={16} color="#3a3830" />
            </Link>
          ))}
        </nav>
        <div style={{ marginTop: "32px" }}>
          <a href="mailto:Derejeseifu3030@gmail.com" className="hdr-cta"
             style={{ width: "100%", justifyContent: "center", fontSize: "14px" }}>
            <Mail size={14} strokeWidth={2} />
            Get in touch
          </a>
        </div>
      </div>

      {/* ════════════════════════════════════════════════════
          MAIN
      ════════════════════════════════════════════════════ */}
      <main style={{ paddingTop: `${HEADER_H}px` }}>
        <HeroSection />
        <WhyChooseMe />
        <ClientInsights />
        <ProjectsSection />
        <TestimonialsSection />
        <CTASection />
        <ContactSection />
      </main>
    </div>
  )
}
