"use client"

import type { LucideIcon } from "lucide-react"
import {
  Brain,
  Cloud,
  Code2,
  Database,
  Layers,
  Mic,
  Plug,
  CircleDollarSign,
  Workflow,
} from "lucide-react"

const SKILLS: { label: string; Icon: LucideIcon }[] = [
  { label: "Next.js & React", Icon: Layers },
  { label: "TypeScript", Icon: Code2 },
  { label: "AI, RAG & agents", Icon: Brain },
  { label: "APIs & webhooks", Icon: Plug },
  { label: "PostgreSQL & Supabase", Icon: Database },
  { label: "AWS & cloud", Icon: Cloud },
  { label: "Voice products", Icon: Mic },
  { label: "Stripe & billing", Icon: CircleDollarSign },
  { label: "Workflow automation", Icon: Workflow },
]

export function AboutIntro() {
  return (
    <section
      style={{
        background: "linear-gradient(180deg, #fafaf9 0%, #ffffff 50%)",
        borderBottom: "1px solid #e5e7eb",
        padding: "clamp(40px, 7vw, 88px) clamp(16px, 4vw, 36px) clamp(56px, 9vw, 100px)",
      }}
    >
      <style jsx>{`
        .about-inner {
          max-width: 720px;
          margin: 0 auto;
          text-align: center;
        }
        .skills-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 12px;
          margin-top: 36px;
          text-align: center;
        }
        @media (min-width: 640px) {
          .skills-grid {
            grid-template-columns: repeat(3, minmax(0, 1fr));
          }
        }
      `}</style>

      <div className="about-inner">
        <h1
          style={{
            fontSize: "clamp(32px, 4.5vw, 48px)",
            fontWeight: 800,
            letterSpacing: "-0.035em",
            color: "#111827",
            margin: "0 0 clamp(20px, 3vw, 28px)",
            lineHeight: 1.1,
          }}
        >
          About me
        </h1>
        <p
          style={{
            fontSize: "clamp(17px, 2.2vw, 19px)",
            lineHeight: 1.7,
            color: "#4b5563",
            margin: "0 0 1.25rem",
            fontWeight: 400,
          }}
        >
          I am Dereje Seifu, a software architect and AI engineer with over four years of experience shipping production software for founders and
          teams. I care about work that survives real users and real traffic: SaaS, AI agents, RAG and knowledge systems, voice products, and full
          stack web platforms with integrations that actually match your stack.
        </p>
        <p
          style={{
            fontSize: "clamp(17px, 2.2vw, 19px)",
            lineHeight: 1.7,
            color: "#4b5563",
            margin: "0 0 2rem",
            fontWeight: 400,
          }}
        >
          I work remotely with clients worldwide. Lately that has meant healthcare AI and teleguidance, GoHighLevel integrated SaaS, CRM automation,
          and voice pipelines running in production. I stay in the loop from architecture through launch and hardening, not only the first demo.
        </p>

        <h2
          style={{
            fontSize: "clamp(18px, 2.2vw, 22px)",
            fontWeight: 700,
            color: "#111827",
            letterSpacing: "-0.02em",
            margin: "0 0 16px",
          }}
        >
          Skills and tools
        </h2>

        <div className="skills-grid">
          {SKILLS.map(({ label, Icon }) => (
            <div
              key={label}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 12,
                padding: "18px 12px",
                borderRadius: 14,
                border: "1px solid #e5e7eb",
                background: "#fff",
                boxShadow: "0 2px 10px rgba(15, 23, 42, 0.04)",
              }}
            >
              <div
                style={{
                  width: 44,
                  height: 44,
                  borderRadius: 12,
                  background: "#f5f3ff",
                  border: "1px solid #ede9fe",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#6d28d9",
                }}
                aria-hidden
              >
                <Icon size={22} strokeWidth={2} />
              </div>
              <span style={{ fontSize: 13, fontWeight: 500, color: "#374151", lineHeight: 1.35 }}>{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
