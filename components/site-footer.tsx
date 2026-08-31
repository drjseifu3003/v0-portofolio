"use client"

import type { ReactNode } from "react"
import { Mail, Linkedin } from "lucide-react"
import { PROFILE_LINKEDIN, PROFILE_UPWORK } from "@/lib/site"

function WhatsAppIcon() {
  return (
    <svg width={18} height={18} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
    </svg>
  )
}

function UpworkIcon() {
  return (
    <svg width={18} height={18} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M18.561 13.158c-1.102 0-2.135-.467-3.074-1.227l.228-1.076.008-.042c.207-1.143.849-3.06 2.839-3.06 1.492 0 2.703 1.212 2.703 2.703-.001 1.489-1.212 2.702-2.704 2.702zm0-8.14c-2.539 0-4.51 1.649-5.31 4.366-1.22-1.834-2.148-4.036-2.687-5.892H8.566v7.111c-.002 1.406-1.141 2.546-2.547 2.546-1.405 0-2.543-1.14-2.545-2.546V3.492H1.475v7.111c0 2.914 2.37 5.303 5.284 5.303 2.913 0 5.283-2.389 5.283-5.303v-1.19c.529 1.107 1.182 2.229 1.974 3.221l-1.673 7.873h2.497l1.213-5.71c1.063.679 2.285 1.109 3.508 1.109 3.012 0 5.465-2.458 5.465-5.472-.001-3.013-2.453-5.472-5.465-5.472z" />
    </svg>
  )
}

function TelegramIcon() {
  return (
    <svg width={18} height={18} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.491-1.302.481-.428-.009-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
    </svg>
  )
}

/** Footer lists social profiles only */
export function SiteFooter() {
  const socials: { href: string; label: string; node: ReactNode; external?: boolean }[] = [
    { href: PROFILE_LINKEDIN, label: "LinkedIn", node: <Linkedin size={18} strokeWidth={2} />, external: true },
    { href: PROFILE_UPWORK, label: "Upwork", node: <UpworkIcon />, external: true },
    { href: "https://wa.me/251966016473", label: "WhatsApp", node: <WhatsAppIcon />, external: true },
    { href: "https://t.me/derejeseifu", label: "Telegram", node: <TelegramIcon />, external: true },
    { href: "mailto:Derejeseifu3030@gmail.com", label: "Email", node: <Mail size={18} strokeWidth={2} /> },
  ]

  return (
    <footer style={{ background: "hsl(var(--brand-footer))", color: "hsl(var(--brand-footer-fg))", padding: "clamp(32px, 6vw, 52px) clamp(20px, 4vw, 36px)" }}>
      <style jsx>{`
        .sp-foot-social:hover {
          color: hsl(var(--brand-canvas-bright));
        }
      `}</style>
      <div style={{ maxWidth: 1180, margin: "0 auto 24px", textAlign: "center" }}>
        <span
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            padding: "6px 18px",
            borderRadius: 999,
            background: "hsl(var(--brand-ink) / 0.4)",
            border: "1px solid hsl(var(--brand-footer-fg) / 0.15)",
            fontSize: 13,
            fontWeight: 500,
            color: "hsl(var(--brand-canvas-bright))",
          }}
        >
          📍 Addis Ababa, Ethiopia (GMT+3) &middot; 🟢 Available for New Projects
        </span>
      </div>
      <nav aria-label="Social links" style={{ maxWidth: 1180, margin: "0 auto" }}>
        <ul
          style={{
            listStyle: "none",
            margin: 0,
            padding: 0,
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "center",
            alignItems: "center",
            gap: "clamp(12px, 3vw, 28px)",
            rowGap: 14,
          }}
        >
          {socials.map(s => (
            <li key={s.label} style={{ flexShrink: 0 }}>
              <a
                href={s.href}
                {...(s.external ? { target: "_blank" as const, rel: "noopener noreferrer" } : {})}
                style={row}
                className="sp-foot-social"
              >
                <span style={icon}>{s.node}</span>
                {s.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </footer>
  )
}

const row = {
  display: "inline-flex",
  alignItems: "center",
  gap: 14,
  color: "hsl(var(--brand-footer-fg))",
  textDecoration: "none",
  fontSize: 15,
  transition: "color 0.15s ease",
} as const

const icon = {
  width: 40,
  height: 40,
  borderRadius: 10,
  background: "hsl(var(--brand-ink) / 0.35)",
  border: "1px solid hsl(var(--brand-footer-fg) / 0.12)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "hsl(var(--brand-canvas-bright))",
  flexShrink: 0,
} as const
