"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, ExternalLink, X, ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react"

interface Project {
  title:          string
  slug:           string
  tagline:        string
  description:    string
  images:         string[]
  link?:          string
  technologies:   string[]
  results:        string[]
  businessImpact: string
  year:           string
  role:           string
  duration:       string
  featured?:      boolean
}

const PROJECTS: Project[] = [
  {
    title:       "AI Voice Receptionist",
    slug:        "ai-voice-receptionist",
    tagline:     "End-to-end AI automation for inbound business calls",
    description: "A production-ready AI voice receptionist system built for businesses that want to automate inbound call handling — screening leads, booking appointments, and logging every interaction automatically. The assistant speaks naturally, qualifies callers, captures their details, and routes everything into a CRM with zero human involvement. The AI assistant on this portfolio (Liya) runs on this exact system.",
    images: ["/images/ai-receptionist.png"],
    technologies: ["Vapi", "N8N", "Airtable", "Next.js", "OpenAI", "Webhooks", "Daily.co"],
    results: [
      "Built full AI voice agent with natural conversation flow, lead qualification, and live call transcripts",
      "N8N automation pipeline handles booking tool calls, structured data extraction, and CRM logging in real time",
      "Webhook router filters and routes 6+ Vapi event types with zero duplicate processing",
    ],
    businessImpact: "Eliminates the need for a human receptionist — every inbound call is handled, qualified, and logged automatically 24/7.",
    year: "2025", role: "Architect & Full-Stack Engineer", duration: "2 weeks",
    featured: true,
  },
  {
    title:       "Roasform",
    slug:        "roasform",
    tagline:     "GHL-Integrated Lead Gen for High-Ticket Sales",
    description: "An AI-native lead generation engine built specifically for high-ticket service providers. It seamlessly synchronizes with GoHighLevel (GHL) to automate personalized outreach, appointment setting, and CRM data enrichment.",
    images: ["/images/roasform.png"],
    link: "https://www.roasform.com/",
    technologies: ["Next.js", "GHL API", "Node.js", "Supabase", "OpenAI", "Webhooks", "Stripe"],
    results: [
      "Engineered full GHL OAuth 2.0 and Webhook integration for real-time lead syncing",
      "Built an AI-driven outreach engine that increased appointment rates by 35%",
      "Implemented multi-tenant isolation for agencies managing 10+ sub-accounts",
    ],
    businessImpact: "Reduced manual lead-entry time for high-ticket closers by 90% while improving CRM data accuracy.",
    year: "2025", role: "Lead Full-Stack Engineer", duration: "4 months",
  },
  {
    title:       "IntuitySync AI",
    slug:        "intuitysync",
    tagline:     "AI-powered social media automation at scale",
    description: "A social media automation platform that handles posting, scheduling, analytics, reporting, and AI-generated content captions, images, and video across multiple channels from a single dashboard.",
    images: ["/images/intuity.png"],
    link: "https://www.intuitysync.com/",
    technologies: ["Next.js", "N8N", "Supabase", "OpenAI", "Stripe", "AWS"],
    results: [
      "Delivered full MVP in 3 months as sole frontend lead",
      "AI content pipeline cut manual workload by 60%",
      "Responsive architecture lifted user engagement by 40%",
    ],
    businessImpact: "Onboarded 50+ paying early adopters in Q1 post-launch with zero downtime.",
    year: "2025", role: "Frontend Lead", duration: "3 months",
  },
  {
    title:       "Water Utility Management System",
    slug:        "wumis",
    tagline:     "Enterprise SaaS for 100K+ utility users",
    description: "A mission-critical SaaS platform streamlining billing, meter reading, and customer management for water utility companies across Ethiopia. Built for reliability at scale with strict data integrity requirements.",
    images: ["/images/wumis.png"],
    link: "https://wumis.et",
    technologies: ["React", "TypeScript", "Docker", "CI/CD", "Nginx", "Digital Ocean"],
    results: [
      "Sole frontend architect across the entire product",
      "CI/CD pipeline reduced deployment time by 70%",
      "High-load dashboards with zero data integrity issues",
    ],
    businessImpact: "Deployed across 20+ organisations serving over 100,000 active users.",
    year: "2023", role: "Frontend Architect", duration: "8 months",
  },
  {
    title:       "Hulu Plus",
    slug:        "huluplus",
    tagline:     "Real-time ride-sharing across 3 major cities",
    description: "An all-in-one transportation and delivery platform with live GPS tracking, automated dispatch, driver and customer apps, and event-driven infrastructure built to handle city-scale traffic.",
    images: ["/images/huluplus.png"],
    link: "https://huluplus.et",
    technologies: ["React", "Node.js", "TypeScript", "Socket.io", "MySQL", "AWS", "Kafka"],
    results: [
      "Led frontend team to product-market fit in 6 months",
      "AWS CI/CD pipeline cut release time by 30%",
      "Real-time event system handles thousands of concurrent rides",
    ],
    businessImpact: "Platform scaled into 3 major cities with consistent uptime through rapid growth.",
    year: "2023", role: "Frontend Lead · DevOps", duration: "6 months",
  },
]

function useLockScroll(active: boolean) {
  useEffect(() => {
    document.body.style.overflow = active ? "hidden" : ""
    return () => { document.body.style.overflow = "" }
  }, [active])
}

function ModalGallery({ images, title }: { images: string[]; title: string }) {
  const [idx, setIdx] = useState(0)
  const trackRef = useRef<HTMLDivElement>(null)

  const go = (n: number) => {
    const next = Math.max(0, Math.min(images.length - 1, n))
    setIdx(next)
    trackRef.current?.scrollTo({ left: next * trackRef.current.offsetWidth, behavior: "smooth" })
  }

  const onScroll = () => {
    if (!trackRef.current) return
    setIdx(Math.round(trackRef.current.scrollLeft / trackRef.current.offsetWidth))
  }

  return (
    <div style={{ position: "relative", width: "100%", background: "#0a0a09" }}>
      <div ref={trackRef} onScroll={onScroll} style={{ display: "flex", overflowX: "auto", scrollSnapType: "x mandatory", scrollbarWidth: "none", WebkitOverflowScrolling: "touch" }}>
        {images.map((src, i) => (
          <div key={i} style={{ flex: "0 0 100%", scrollSnapAlign: "start", position: "relative", aspectRatio: "16 / 9", background: "#0a0a09", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Image src={src} alt={`${title} screenshot ${i + 1}`} fill sizes="(max-width: 768px) 100vw, 760px" style={{ objectFit: "contain", objectPosition: "center" }} />
          </div>
        ))}
      </div>
      {images.length > 1 && (
        <>
          <button onClick={() => go(idx - 1)} disabled={idx === 0} aria-label="Previous image" style={{ position: "absolute", left: 12, top: "50%", transform: "translateY(-50%)", width: 36, height: 36, background: "rgba(12,12,12,0.82)", border: "1px solid #2a2826", display: "flex", alignItems: "center", justifyContent: "center", cursor: idx === 0 ? "not-allowed" : "pointer", color: idx === 0 ? "#3a3830" : "#a8a49c", backdropFilter: "blur(4px)", transition: "color 0.15s, border-color 0.15s" }} onMouseEnter={e => { if (idx > 0) { e.currentTarget.style.color = "#dedad2"; e.currentTarget.style.borderColor = "#4a4844" } }} onMouseLeave={e => { e.currentTarget.style.color = idx === 0 ? "#3a3830" : "#a8a49c"; e.currentTarget.style.borderColor = "#2a2826" }}>
            <ChevronLeft size={16} strokeWidth={1.8} />
          </button>
          <button onClick={() => go(idx + 1)} disabled={idx === images.length - 1} aria-label="Next image" style={{ position: "absolute", right: 12, top: "50%", transform: "translateY(-50%)", width: 36, height: 36, background: "rgba(12,12,12,0.82)", border: "1px solid #2a2826", display: "flex", alignItems: "center", justifyContent: "center", cursor: idx === images.length - 1 ? "not-allowed" : "pointer", color: idx === images.length - 1 ? "#3a3830" : "#a8a49c", backdropFilter: "blur(4px)", transition: "color 0.15s, border-color 0.15s" }} onMouseEnter={e => { if (idx < images.length - 1) { e.currentTarget.style.color = "#dedad2"; e.currentTarget.style.borderColor = "#4a4844" } }} onMouseLeave={e => { e.currentTarget.style.color = idx === images.length - 1 ? "#3a3830" : "#a8a49c"; e.currentTarget.style.borderColor = "#2a2826" }}>
            <ChevronRight size={16} strokeWidth={1.8} />
          </button>
          <div style={{ position: "absolute", bottom: 12, left: "50%", transform: "translateX(-50%)", display: "flex", gap: "6px", alignItems: "center" }}>
            {images.map((_, i) => (
              <button key={i} onClick={() => go(i)} aria-label={`Go to image ${i + 1}`} style={{ width: i === idx ? 20 : 6, height: 6, borderRadius: 3, background: i === idx ? "#dedad2" : "rgba(222,218,210,0.3)", border: "none", cursor: "pointer", padding: 0, transition: "width 0.25s, background 0.2s" }} />
            ))}
          </div>
          <span style={{ position: "absolute", top: 12, right: 12, fontSize: "11px", fontWeight: 500, color: "#a8a49c", background: "rgba(12,12,12,0.75)", border: "1px solid #2a2826", padding: "4px 10px", backdropFilter: "blur(4px)", letterSpacing: "0.06em" }}>
            {idx + 1} / {images.length}
          </span>
        </>
      )}
    </div>
  )
}

function CaseStudyModal({ project, onClose }: { project: Project; onClose: () => void }) {
  useLockScroll(true)

  useEffect(() => {
    const h = (e: KeyboardEvent) => { if (e.key === "Escape") onClose() }
    window.addEventListener("keydown", h)
    return () => window.removeEventListener("keydown", h)
  }, [onClose])

  return (
    <>
      <style>{`
        @keyframes mfade  { from{opacity:0} to{opacity:1} }
        @keyframes mslide { from{opacity:0;transform:translate(-50%,calc(-50% + 20px))} to{opacity:1;transform:translate(-50%,-50%)} }
        @keyframes liveDot { 0%,100%{opacity:1} 50%{opacity:0.3} }
      `}</style>

      <div onClick={onClose} style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.9)", backdropFilter: "blur(8px)", zIndex: 500, animation: "mfade 0.2s ease" }} />

      <div style={{
        position: "fixed", top: "50%", left: "50%", transform: "translate(-50%, -50%)",
        zIndex: 510, width: "min(800px, calc(100vw - 24px))", maxHeight: "calc(100dvh - 32px)",
        overflowY: "auto", background: "#111110",
        border: project.featured ? "1px solid #3a3420" : "1px solid #2a2826",
        animation: "mslide 0.28s cubic-bezier(0.16,1,0.3,1)", scrollbarWidth: "none",
        ...(project.featured ? { boxShadow: "0 0 0 1px rgba(184,164,106,0.1), 0 32px 80px rgba(0,0,0,0.7)" } : {}),
      }}>

        {/* featured gold top line */}
        {project.featured && (
          <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "2px", zIndex: 1, background: "linear-gradient(90deg, transparent, #b8a46a 30%, #d4c07a 50%, #b8a46a 70%, transparent)" }} />
        )}

        <div style={{ position: "relative" }}>
          <ModalGallery images={project.images} title={project.title} />

          <button onClick={onClose} aria-label="Close" style={{ position: "absolute", top: 12, left: 12, zIndex: 10, width: 36, height: 36, background: "rgba(12,12,12,0.82)", border: "1px solid #2a2826", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", color: "#a8a49c", backdropFilter: "blur(4px)", transition: "background 0.15s, color 0.15s, border-color 0.15s" }} onMouseEnter={e => { e.currentTarget.style.background = "#1e1e1c"; e.currentTarget.style.color = "#dedad2"; e.currentTarget.style.borderColor = "#4a4844" }} onMouseLeave={e => { e.currentTarget.style.background = "rgba(12,12,12,0.82)"; e.currentTarget.style.color = "#a8a49c"; e.currentTarget.style.borderColor = "#2a2826" }}>
            <X size={15} strokeWidth={1.8} />
          </button>

          {project.featured && (
            <div style={{ position: "absolute", top: 12, right: 12, zIndex: 10, display: "flex", alignItems: "center", gap: 6, background: "rgba(12,12,12,0.85)", border: "1px solid rgba(184,164,106,0.3)", padding: "5px 12px", backdropFilter: "blur(4px)" }}>
              <span style={{ width: 5, height: 5, borderRadius: "50%", background: "#4caf7d", boxShadow: "0 0 5px rgba(76,175,125,0.5)", flexShrink: 0, display: "inline-block", animation: "liveDot 2s ease-in-out infinite" }} />
              <span style={{ fontSize: "10px", color: "#b8a46a", letterSpacing: "0.12em", textTransform: "uppercase" }}>Live on this site</span>
            </div>
          )}
        </div>

        <div style={{ padding: "clamp(20px, 4vw, 32px) clamp(20px, 4vw, 36px) clamp(28px, 5vw, 44px)" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "16px", marginBottom: "8px" }}>
            <div>
              <p style={{ fontSize: "10px", color: "#4a4844", letterSpacing: "0.12em", textTransform: "uppercase", margin: "0 0 8px", fontWeight: 500 }}>{project.role}</p>
              <h3 style={{ fontSize: "clamp(18px, 3vw, 26px)", fontWeight: 300, color: "#dedad2", lineHeight: 1.2, letterSpacing: "-0.02em", margin: 0 }}>{project.title}</h3>
              <p style={{ fontSize: "14px", color: "#a8a49c", margin: "6px 0 0", fontWeight: 300 }}>{project.tagline}</p>
            </div>
            {project.link && (
              <a href={project.link} target="_blank" rel="noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: "6px", fontSize: "11px", fontWeight: 600, color: "#a8a49c", letterSpacing: "0.07em", textTransform: "uppercase", textDecoration: "none", border: "1px solid #2a2826", padding: "8px 14px", whiteSpace: "nowrap", flexShrink: 0, transition: "color 0.18s, border-color 0.18s" }} onMouseEnter={e => { e.currentTarget.style.color = "#dedad2"; e.currentTarget.style.borderColor = "#4a4844" }} onMouseLeave={e => { e.currentTarget.style.color = "#a8a49c"; e.currentTarget.style.borderColor = "#2a2826" }}>
                Live site <ExternalLink size={11} strokeWidth={1.8} />
              </a>
            )}
          </div>

          <div style={{ height: "1px", background: "#1e1e1c", margin: "20px 0" }} />
          <p style={{ fontSize: "14px", color: "#a8a49c", lineHeight: "1.85", fontWeight: 300, margin: "0 0 24px" }}>{project.description}</p>

          <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginBottom: "28px" }}>
            {project.technologies.map(t => (
              <span key={t} style={{ fontSize: "11px", color: "#72706b", padding: "4px 12px", border: "1px solid #1e1e1c", letterSpacing: "0.05em", background: "#0c0c0c" }}>{t}</span>
            ))}
          </div>

          <div style={{ height: "1px", background: "#1e1e1c", marginBottom: "24px" }} />
          <p style={{ fontSize: "10px", fontWeight: 600, color: "#4a4844", letterSpacing: "0.14em", textTransform: "uppercase", margin: "0 0 14px" }}>Key results</p>
          <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginBottom: "24px" }}>
            {project.results.map((r, i) => (
              <div key={i} style={{ display: "flex", gap: "14px", alignItems: "flex-start" }}>
                <span style={{ fontSize: "10px", fontWeight: 600, color: "#3a3830", letterSpacing: "0.08em", flexShrink: 0, marginTop: "3px" }}>0{i + 1}</span>
                <p style={{ fontSize: "14px", color: "#c8c4bc", lineHeight: "1.7", fontWeight: 300, margin: 0 }}>{r}</p>
              </div>
            ))}
          </div>

          <div style={{ background: "#0c0c0c", border: "1px solid #1e1e1c", borderLeft: project.featured ? "2px solid #b8a46a" : "2px solid #4a4844", padding: "18px 20px" }}>
            <p style={{ fontSize: "10px", fontWeight: 600, color: "#4a4844", letterSpacing: "0.14em", textTransform: "uppercase", margin: "0 0 8px" }}>Business impact</p>
            <p style={{ fontSize: "14px", color: "#dedad2", lineHeight: "1.8", fontWeight: 300, margin: 0 }}>{project.businessImpact}</p>
          </div>
        </div>
      </div>
    </>
  )
}

function ProjectCard({ project, index, onClick }: { project: Project; index: number; onClick: () => void }) {
  const [hovered, setHovered] = useState(false)
  const [imgIdx,  setImgIdx]  = useState(0)
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    if (hovered && project.images.length > 1) {
      timerRef.current = setInterval(() => setImgIdx(i => (i + 1) % project.images.length), 2000)
    } else {
      if (timerRef.current) clearInterval(timerRef.current)
      if (!hovered) setImgIdx(0)
    }
    return () => { if (timerRef.current) clearInterval(timerRef.current) }
  }, [hovered, project.images.length])

  return (
    <button onClick={onClick} onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)} style={{ display: "flex", flexDirection: "column", background: "transparent", border: "none", cursor: "pointer", textAlign: "left", padding: 0, width: "100%", fontFamily: "inherit", position: "relative" }}>

      {/* featured gold top line */}
      {project.featured && (
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "2px", zIndex: 2, background: "linear-gradient(90deg, transparent, #b8a46a 30%, #d4c07a 60%, transparent)" }} />
      )}

      <div style={{ position: "relative", width: "100%", aspectRatio: "4 / 3", background: project.featured ? "#131210" : "#111110", overflow: "hidden", flexShrink: 0, border: project.featured ? `1px solid ${hovered ? "#5a4e30" : "#2e2820"}` : "none", transition: "border-color 0.2s" }}>
        {project.images.map((src, i) => (
          <div key={src} style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", opacity: i === imgIdx ? 1 : 0, transition: "opacity 0.6s ease" }}>
            <Image src={src} alt={`${project.title} screenshot ${i + 1}`} fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" style={{ objectFit: "contain", objectPosition: "center", transform: hovered && i === imgIdx ? "scale(1.02)" : "scale(1)", transition: "transform 0.7s cubic-bezier(0.16,1,0.3,1)" }} />
          </div>
        ))}

        <div style={{ position: "absolute", inset: 0, pointerEvents: "none", background: "linear-gradient(to bottom, rgba(0,0,0,0.08) 0%, rgba(0,0,0,0.45) 100%)" }} />

        {/* featured: live badge */}
        {project.featured && (
          <div style={{ position: "absolute", top: 12, left: 12, zIndex: 2, display: "flex", alignItems: "center", gap: 5, background: "rgba(12,12,12,0.85)", border: "1px solid rgba(184,164,106,0.25)", padding: "4px 10px", backdropFilter: "blur(4px)" }}>
            <span style={{ width: 5, height: 5, borderRadius: "50%", background: "#4caf7d", boxShadow: "0 0 5px rgba(76,175,125,0.5)", flexShrink: 0, display: "inline-block" }} />
            <span style={{ fontSize: "9px", color: "#b8a46a", letterSpacing: "0.14em", textTransform: "uppercase" }}>Live on this site</span>
          </div>
        )}

        {project.images.length > 1 && (
          <div style={{ position: "absolute", bottom: 12, right: 14, display: "flex", gap: "4px", alignItems: "center" }}>
            {project.images.map((_, i) => (
              <span key={i} style={{ width: i === imgIdx ? 14 : 5, height: 5, borderRadius: 3, background: i === imgIdx ? "#dedad2" : "rgba(222,218,210,0.35)", transition: "width 0.3s, background 0.3s" }} />
            ))}
          </div>
        )}

        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "0 16px 16px", transform: hovered ? "translateY(0)" : "translateY(10px)", opacity: hovered ? 1 : 0, transition: "transform 0.35s cubic-bezier(0.16,1,0.3,1), opacity 0.28s" }}>
          <span style={{ display: "inline-flex", alignItems: "center", gap: "5px", fontSize: "11px", fontWeight: 600, color: "#dedad2", letterSpacing: "0.08em", textTransform: "uppercase", background: "rgba(12,12,12,0.85)", border: project.featured ? "1px solid #5a4e30" : "1px solid #3a3830", padding: "6px 13px", backdropFilter: "blur(4px)" }}>
            View case study <ArrowUpRight size={10} strokeWidth={2.2} />
          </span>
        </div>
      </div>

      <div style={{ padding: "18px 2px 6px", display: "flex", flexDirection: "column", gap: "6px", flex: 1 }}>
        <p style={{ fontSize: "10px", fontWeight: 500, color: project.featured ? "#6a5e3a" : "#3a3830", letterSpacing: "0.12em", textTransform: "uppercase", margin: 0 }}>{project.role}</p>
        <h3 style={{ fontSize: "16px", fontWeight: 400, color: hovered ? "#dedad2" : "#c8c4bc", lineHeight: 1.3, margin: 0, transition: "color 0.25s", letterSpacing: "-0.01em" }}>{project.title}</h3>
        <p style={{ fontSize: "13px", color: "#72706b", lineHeight: 1.55, margin: 0, fontWeight: 300 }}>{project.tagline}</p>
        <div style={{ display: "flex", gap: "5px", flexWrap: "wrap", paddingTop: "4px" }}>
          {project.technologies.slice(0, 3).map(t => (
            <span key={t} style={{ fontSize: "10px", color: project.featured ? "#6a5e3a" : "#4a4844", padding: "2px 8px", border: project.featured ? "1px solid #2e2820" : "1px solid #1e1e1c", letterSpacing: "0.04em" }}>{t}</span>
          ))}
          {project.technologies.length > 3 && (
            <span style={{ fontSize: "10px", color: "#3a3830", padding: "2px 8px", border: "1px solid #1e1e1c" }}>+{project.technologies.length - 3}</span>
          )}
        </div>
      </div>
    </button>
  )
}

export function ProjectsSection() {
  const [active, setActive] = useState<Project | null>(null)

  return (
    <section id="projects" style={{ background: "#0c0c0c", borderBottom: "1px solid #1e1e1c", padding: "clamp(52px, 8vw, 96px) clamp(20px, 4vw, 36px) clamp(60px, 9vw, 104px)" }}>
      <style jsx>{`
        .proj-grid { display:grid; grid-template-columns:1fr; gap:clamp(32px,5vw,56px) clamp(20px,3vw,40px); margin-top:clamp(36px,5vw,64px); }
        @media (min-width:560px)  { .proj-grid { grid-template-columns:repeat(2,1fr); } }
        @media (min-width:1024px) { .proj-grid { grid-template-columns:repeat(3,1fr); } }
      `}</style>

      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: "24px" }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "14px", marginBottom: "20px" }}>
              <div style={{ width: "28px", height: "1px", background: "#4a4844" }} />
              <span style={{ fontSize: "12px", fontWeight: 500, color: "#b8b4ac", letterSpacing: "0.1em", textTransform: "uppercase" }}>Selected work</span>
            </div>
            <h2 style={{ fontSize: "clamp(28px, 3.8vw, 48px)", fontWeight: 300, lineHeight: 1.13, letterSpacing: "-0.02em", color: "#dedad2", margin: 0 }}>
              Projects with{" "}
              <em style={{ fontFamily: "'Instrument Serif', serif", fontStyle: "italic", fontWeight: 400, color: "#c8c4bc" }}>measurable outcomes</em>
            </h2>
          </div>
          <p style={{ fontSize: "15px", color: "#a8a49c", lineHeight: "1.85", fontWeight: 300, maxWidth: "320px", margin: 0 }}>
            Real products, real users, real numbers — hover to preview screenshots, click for the full case study.
          </p>
        </div>

        <div className="proj-grid">
          {PROJECTS.map((p, i) => (
            <ProjectCard key={p.slug} project={p} index={i} onClick={() => setActive(p)} />
          ))}
        </div>

        <div style={{ marginTop: "clamp(40px, 6vw, 72px)", paddingTop: "clamp(28px, 4vw, 48px)", borderTop: "1px solid #1e1e1c", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "20px" }}>
          <p style={{ fontSize: "14px", color: "#72706b", margin: 0, fontWeight: 300, maxWidth: "400px" }}>
            Have a project in mind? Available for full-stack builds, architecture reviews, and long-term delivery partnerships.
          </p>
          <Link href="#contact" style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "10px 20px", background: "#dedad2", color: "#0c0c0c", fontSize: "13px", fontWeight: 600, letterSpacing: "0.05em", textTransform: "uppercase", textDecoration: "none", border: "2px solid #dedad2", whiteSpace: "nowrap", lineHeight: 1, transition: "background 0.18s, border-color 0.18s" }} onMouseEnter={e => { e.currentTarget.style.background = "#ffffff"; e.currentTarget.style.borderColor = "#ffffff" }} onMouseLeave={e => { e.currentTarget.style.background = "#dedad2"; e.currentTarget.style.borderColor = "#dedad2" }}>
            Discuss a project
            <ArrowRight size={13} strokeWidth={2} />
          </Link>
        </div>
      </div>

      {active && <CaseStudyModal project={active} onClose={() => setActive(null)} />}
    </section>
  )
}