"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, ExternalLink, X } from "lucide-react"

interface Project {
  title: string
  description: string
  image: string
  link?: string
  technologies: string[]
  results?: string[]
  businessImpact?: string
  year: string
}

const PROJECTS: Project[] = [
  {
    title: "IntuitySync AI",
    description:
      "A social media automation platform that automates posting, scheduling, analytics, reporting, and content generation (captions, images, videos) using AI.",
    image: "/images/intuitysync.png",
    link: "https://www.intuitysync.com/",
    technologies: ["Next.js", "N8N", "Supabase", "OpenAI", "Stripe", "AWS"],
    results: [
      "Led frontend development and delivered MVP within 3 months.",
      "Integrated AI for content generation, reducing manual workload by 60%.",
      "Implemented responsive design that improved user engagement by 40%.",
    ],
    businessImpact:
      "Supported launch delivery that helped the product onboard 50+ early adopters in the first quarter.",
    year: "2024",
  },
  {
    title: "Water Utility Management System",
    description:
      "A SaaS platform that streamlines operations for water utility companies — billing, meter reading, customer management. Used by 20+ organizations and 100K+ users.",
    image: "/images/wumis-4.jpg",
    link: "https://wumis.et",
    technologies: ["React.js", "TypeScript", "Docker", "CI/CD", "Nginx", "Digital Ocean"],
    results: [
      "Led complete frontend development using scalable component-based design.",
      "Implemented CI/CD pipeline for automated deployments, increasing development velocity.",
      "Worked closely with backend to ensure data integrity across high-load dashboards.",
    ],
    businessImpact:
      "Used in a 100K+ user environment across 20+ organizations with stable performance and reduced manual operations.",
    year: "2023",
  },
  {
    title: "Hulu Plus — Ride-Sharing Platform",
    description:
      "An all-in-one transportation and delivery platform with real-time tracking, automated dispatch, and seamless UX for drivers and customers.",
    image: "/images/hulu-ride.png",
    link: "https://huluplus.et",
    technologies: ["React", "Node.js", "TypeScript", "Socket.io", "MySQL", "AWS", "Docker", "Kafka"],
    results: [
      "Implemented full CI/CD pipeline using AWS, reducing dev time by 30%.",
      "Led frontend team in rapid development, achieving product-market fit in 6 months.",
      "Built scalable deployment infrastructure with real-time event tracking.",
    ],
    businessImpact:
      "Supported platform scaling during expansion into 3 major cities and sustained growth after launch.",
    year: "2023",
  },
]

/* ─── Modal ──────────────────────────────────────────────────────── */
function Modal({ project, onClose }: { project: Project; onClose: () => void }) {
  return (
    <>
      {/* backdrop */}
      <div
        onClick={onClose}
        style={{
          position: "fixed", inset: 0,
          background: "rgba(0,0,0,0.82)",
          backdropFilter: "blur(4px)",
          zIndex: 500,
        }}
      />

      {/* panel */}
      <div style={{
        position: "fixed",
        top: "50%", left: "50%",
        transform: "translate(-50%, -50%)",
        zIndex: 510,
        width: "min(680px, calc(100vw - 32px))",
        maxHeight: "calc(100vh - 48px)",
        overflowY: "auto",
        background: "#161614",
        border: "1px solid #2a2826",
      }}>
        {/* image */}
        <div style={{ position: "relative", width: "100%", aspectRatio: "16/8", background: "#1a1a18", flexShrink: 0 }}>
          <Image
            src={project.image || "/placeholder.svg"}
            alt={project.title}
            fill
            style={{ objectFit: "cover", opacity: 0.9 }}
          />
          {/* dark gradient overlay at bottom of image */}
          <div style={{
            position: "absolute", inset: "auto 0 0 0", height: "40%",
            background: "linear-gradient(transparent, #161614)",
            pointerEvents: "none",
          }} />
          {/* close button */}
          <button
            onClick={onClose}
            style={{
              position: "absolute", top: "16px", right: "16px",
              width: "36px", height: "36px",
              background: "rgba(12,12,12,0.8)",
              border: "1px solid #2a2826",
              display: "flex", alignItems: "center", justifyContent: "center",
              cursor: "pointer",
              color: "#a8a49c",
              transition: "background 0.15s",
            }}
            onMouseEnter={e => (e.currentTarget.style.background = "rgba(30,30,28,0.95)")}
            onMouseLeave={e => (e.currentTarget.style.background = "rgba(12,12,12,0.8)")}
          >
            <X size={16} strokeWidth={1.8} />
          </button>
        </div>

        {/* body */}
        <div style={{ padding: "clamp(20px, 4vw, 36px) clamp(20px, 4vw, 40px) clamp(28px, 5vw, 44px)" }}>
          {/* title + link */}
          <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: "16px", marginBottom: "14px" }}>
            <h3 style={{ fontSize: "22px", fontWeight: 500, color: "#dedad2", lineHeight: 1.25, margin: 0 }}>
              {project.title}
            </h3>
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                style={{
                  display: "inline-flex", alignItems: "center", gap: "5px",
                  fontSize: "12px", fontWeight: 500,
                  color: "#a8a49c",
                  letterSpacing: "0.06em", textTransform: "uppercase",
                  textDecoration: "none",
                  border: "1px solid #2a2826",
                  padding: "7px 14px",
                  transition: "color 0.2s, border-color 0.2s",
                  flexShrink: 0,
                  whiteSpace: "nowrap",
                }}
                onMouseEnter={e => { e.currentTarget.style.color = "#dedad2"; e.currentTarget.style.borderColor = "#4a4844" }}
                onMouseLeave={e => { e.currentTarget.style.color = "#a8a49c"; e.currentTarget.style.borderColor = "#2a2826" }}
              >
                Visit live <ExternalLink size={12} strokeWidth={1.8} />
              </a>
            )}
          </div>

          {/* description */}
          <p style={{ fontSize: "15px", color: "#a8a49c", lineHeight: "1.8", fontWeight: 300, marginBottom: "28px" }}>
            {project.description}
          </p>

          {/* tech chips */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginBottom: "32px" }}>
            {project.technologies.map(t => (
              <span key={t} style={{
                fontSize: "11px", color: "#a8a49c",
                padding: "5px 12px",
                border: "1px solid #2a2826",
                letterSpacing: "0.04em",
              }}>
                {t}
              </span>
            ))}
          </div>

          {/* divider */}
          <div style={{ height: "1px", background: "#1e1e1c", marginBottom: "28px" }} />

          {/* results */}
          {project.results && (
            <div style={{ marginBottom: "24px" }}>
              <p style={{ fontSize: "11px", color: "#72706b", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "14px" }}>
                Key results
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                {project.results.map((r, i) => (
                  <div key={i} style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
                    <span style={{ color: "#4a4844", fontSize: "14px", flexShrink: 0, marginTop: "1px" }}>—</span>
                    <p style={{ fontSize: "14px", color: "#a8a49c", lineHeight: "1.7", fontWeight: 300, margin: 0 }}>{r}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* business impact */}
          {project.businessImpact && (
            <div style={{
              padding: "18px 20px",
              background: "#0f0f0d",
              border: "1px solid #1e1e1c",
            }}>
              <p style={{ fontSize: "11px", color: "#72706b", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "8px" }}>
                Business impact
              </p>
              <p style={{ fontSize: "14px", color: "#c8c4bc", lineHeight: "1.7", fontWeight: 300, margin: 0 }}>
                {project.businessImpact}
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  )
}

/* ─── Card ───────────────────────────────────────────────────────── */
function ProjectCard({ project, onClick }: { project: Project; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      style={{
        display: "flex",
        flexDirection: "column",
        background: "#0f0f0d",
        border: "1px solid #1e1e1c",
        cursor: "pointer",
        textAlign: "left",
        padding: 0,
        width: "100%",
        transition: "border-color 0.2s",
        fontFamily: "inherit",
      }}
      onMouseEnter={e => (e.currentTarget.style.borderColor = "#3a3830")}
      onMouseLeave={e => (e.currentTarget.style.borderColor = "#1e1e1c")}
    >
      {/* image */}
      <div style={{ position: "relative", width: "100%", aspectRatio: "16/9", background: "#1a1a18", flexShrink: 0 }}>
        <Image
          src={project.image || "/placeholder.svg"}
          alt={project.title}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          style={{ objectFit: "cover", filter: "grayscale(8%)", transition: "filter 0.3s" }}
        />
        {/* year badge */}
        <span style={{
          position: "absolute", top: "14px", left: "14px",
          fontSize: "10px", fontWeight: 500,
          color: "#a8a49c",
          background: "rgba(12,12,12,0.85)",
          border: "1px solid #2a2826",
          padding: "4px 10px",
          letterSpacing: "0.08em",
          backdropFilter: "blur(4px)",
        }}>
          {project.year}
        </span>
      </div>

      {/* content */}
      <div style={{ padding: "28px 28px 32px", display: "flex", flexDirection: "column", gap: "12px", flex: 1 }}>
        <h3 style={{ fontSize: "17px", fontWeight: 500, color: "#dedad2", lineHeight: 1.3, margin: 0 }}>
          {project.title}
        </h3>
        <p style={{ fontSize: "14px", color: "#a8a49c", lineHeight: "1.75", fontWeight: 300, margin: 0,
                    display: "-webkit-box", WebkitLineClamp: 3, WebkitBoxOrient: "vertical", overflow: "hidden" }}>
          {project.description}
        </p>

        {/* tech pills — first 3 only */}
        <div style={{ display: "flex", gap: "6px", flexWrap: "wrap", marginTop: "4px" }}>
          {project.technologies.slice(0, 4).map(t => (
            <span key={t} style={{
              fontSize: "10px", color: "#72706b",
              padding: "3px 10px",
              border: "1px solid #1e1e1c",
              letterSpacing: "0.04em",
            }}>
              {t}
            </span>
          ))}
          {project.technologies.length > 4 && (
            <span style={{ fontSize: "10px", color: "#72706b", padding: "3px 10px", border: "1px solid #1e1e1c" }}>
              +{project.technologies.length - 4}
            </span>
          )}
        </div>

        {/* cta row */}
        <div style={{
          display: "flex", alignItems: "center", gap: "6px",
          marginTop: "8px",
          fontSize: "12px", fontWeight: 500,
          color: "#72706b",
          letterSpacing: "0.06em", textTransform: "uppercase",
        }}>
          View case study
          <ArrowRight size={12} strokeWidth={2} />
        </div>
      </div>
    </button>
  )
}

/* ─── Section ────────────────────────────────────────────────────── */
export function ProjectsSection() {
  const [active, setActive] = useState<Project | null>(null)

  return (
    <section id="projects" style={{
      background: "#0c0c0c",
      borderBottom: "1px solid #1e1e1c",
      padding: "clamp(52px, 8vw, 96px) clamp(20px, 4vw, 36px) clamp(60px, 9vw, 104px)",
    }}>
      <style jsx>{`
        .proj-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1px;
          background: #1e1e1c;
          border: 1px solid #1e1e1c;
          margin-top: clamp(36px, 5vw, 64px);
        }
        @media (min-width: 640px)  { .proj-grid { grid-template-columns: repeat(2, 1fr); } }
        @media (min-width: 1024px) { .proj-grid { grid-template-columns: repeat(3, 1fr); } }
      `}</style>

      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>

        {/* header */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: "28px" }}>
          <div style={{ maxWidth: "560px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "14px", marginBottom: "20px" }}>
              <div style={{ width: "28px", height: "1px", background: "#4a4844" }} />
              <span style={{ fontSize: "12px", fontWeight: 500, color: "#b8b4ac", letterSpacing: "0.1em", textTransform: "uppercase" }}>
                Selected work
              </span>
            </div>
            <h2 style={{
              fontSize: "clamp(28px, 3.8vw, 48px)",
              fontWeight: 300, lineHeight: 1.13, letterSpacing: "-0.02em",
              color: "#dedad2", margin: 0,
            }}>
              Projects with{" "}
              <em style={{ fontFamily: "'Instrument Serif', serif", fontStyle: "italic", fontWeight: 400, color: "#c8c4bc" }}>
                measurable outcomes
              </em>
            </h2>
          </div>
          <p style={{ fontSize: "16px", color: "#a8a49c", lineHeight: "1.85", fontWeight: 300, maxWidth: "340px", margin: 0 }}>
            Products delivered for real users, with attention to maintainability, performance, and business goals.
          </p>
        </div>

        {/* project grid */}
        <div className="proj-grid">
          {PROJECTS.map(p => (
            <ProjectCard key={p.title} project={p} onClick={() => setActive(p)} />
          ))}
        </div>

        {/* bottom CTA */}
        <div style={{ marginTop: "56px", display: "flex", flexDirection: "column", alignItems: "center", gap: "14px" }}>
          <Link
            href="#contact"
            style={{
              display: "inline-flex", alignItems: "center", gap: "8px",
              padding: "14px 28px",
              background: "#dedad2", color: "#0c0c0c",
              fontSize: "13px", fontWeight: 600,
              letterSpacing: "0.05em", textTransform: "uppercase",
              textDecoration: "none",
              border: "2px solid #dedad2",
              transition: "background 0.18s",
            }}
            onMouseEnter={e => (e.currentTarget.style.background = "#ffffff")}
            onMouseLeave={e => (e.currentTarget.style.background = "#dedad2")}
          >
            Discuss a similar project
            <ArrowRight size={14} strokeWidth={2} />
          </Link>
          <p style={{ fontSize: "13px", color: "#72706b", margin: 0, textAlign: "center" }}>
            Happy to share scope approach, technical options, and realistic timelines.
          </p>
        </div>

      </div>

      {/* modal */}
      {active && <Modal project={active} onClose={() => setActive(null)} />}
    </section>
  )
}
