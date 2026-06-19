"use client"

import type { ReactNode } from "react"
import { ArrowUpRight, Mail, Phone, Linkedin, Mic } from "lucide-react"
import { SiteFooter } from "@/components/site-footer"

function WhatsAppIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
    </svg>
  )
}

function UpworkIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.561 13.158c-1.102 0-2.135-.467-3.074-1.227l.228-1.076.008-.042c.207-1.143.849-3.06 2.839-3.06 1.492 0 2.703 1.212 2.703 2.703-.001 1.489-1.212 2.702-2.704 2.702zm0-8.14c-2.539 0-4.51 1.649-5.31 4.366-1.22-1.834-2.148-4.036-2.687-5.892H8.566v7.111c-.002 1.406-1.141 2.546-2.547 2.546-1.405 0-2.543-1.14-2.545-2.546V3.492H1.475v7.111c0 2.914 2.37 5.303 5.284 5.303 2.913 0 5.283-2.389 5.283-5.303v-1.19c.529 1.107 1.182 2.229 1.974 3.221l-1.673 7.873h2.497l1.213-5.71c1.063.679 2.285 1.109 3.508 1.109 3.012 0 5.465-2.458 5.465-5.472-.001-3.013-2.453-5.472-5.465-5.472z" />
    </svg>
  )
}

function TelegramIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
    </svg>
  )
}

type ChannelIcon = typeof Mail

interface ChannelSpec {
  label: string
  value: string
  href: string
  Icon?: ChannelIcon
  IconCustom?: () => ReactNode
  external: boolean
}

const CHANNELS: ChannelSpec[] = [
  {
    label: "Email",
    value: "Derejeseifu3030@gmail.com",
    href: "mailto:Derejeseifu3030@gmail.com",
    Icon: Mail,
    external: false,
  },
  {
    label: "Phone",
    value: "(+251) 0966016473",
    href: "tel:+251966016473",
    Icon: Phone,
    external: false,
  },
  {
    label: "WhatsApp",
    value: "(+251) 0966016473",
    href: "https://wa.me/251966016473",
    IconCustom: WhatsAppIcon,
    external: true,
  },
  {
    label: "LinkedIn",
    value: "drjseifu1991",
    href: "https://www.linkedin.com/in/drjseifu1991/",
    Icon: Linkedin,
    external: true,
  },
  {
    label: "Telegram",
    value: "@derejeseifu",
    href: "https://t.me/derejeseifu",
    IconCustom: TelegramIcon,
    external: true,
  },
  {
    label: "Upwork",
    value: "Dereje Seifu",
    href: "https://www.upwork.com/freelancers/~dereje",
    IconCustom: UpworkIcon,
    external: true,
  },
]

interface ContactSectionProps {
  onTalkToLiya?: () => void
}

export function ContactSection({ onTalkToLiya }: ContactSectionProps) {
  return (
    <>
      <section
        id="contact"
        style={{
          background: "#ffffff",
          borderBottom: "1px solid #e5e7eb",
          padding: "clamp(40px, 6.5vw, 72px) clamp(20px, 4vw, 36px)",
        }}
      >
        <style jsx>{`
          .contact-grid {
            display: grid;
            grid-template-columns: 1fr;
            gap: 16px;
            margin-top: 40px;
          }
          @media (min-width: 560px) {
            .contact-grid {
              grid-template-columns: repeat(2, 1fr);
            }
          }
          @media (min-width: 1024px) {
            .contact-grid {
              grid-template-columns: repeat(3, 1fr);
            }
          }

          .c-card {
            background: #fafaf9;
            border: 1px solid #e5e7eb;
            border-radius: 14px;
            padding: clamp(22px, 3vw, 28px);
            display: flex;
            flex-direction: column;
            gap: 14px;
            text-decoration: none;
            transition: border-color 0.2s, box-shadow 0.2s;
            position: relative;
            color: inherit;
          }

          .c-card:hover {
            border-color: #c4b5fd;
            box-shadow: 0 8px 28px rgba(124, 58, 237, 0.12);
          }

          .c-icon {
            width: 42px;
            height: 42px;
            border-radius: 10px;
            background: #fff;
            border: 1px solid #e5e7eb;
            display: flex;
            align-items: center;
            justify-content: center;
            color: #6b7280;
          }

          .c-card:hover .c-icon {
            color: #7c3aed;
            border-color: #ddd6fe;
          }

          .c-arrow {
            position: absolute;
            top: 22px;
            right: 22px;
            color: #d1d5db;
          }

          .c-card:hover .c-arrow {
            color: #7c3aed;
          }

          .liya-btn {
            text-align: left;
            cursor: pointer;
            font-family: inherit;
            border: 2px solid #a7f3d0;
            background: #ecfdf5;
          }

          .liya-btn:hover {
            border-color: #34d399;
          }
        `}</style>

        <div style={{ maxWidth: 1180, margin: "0 auto" }}>
          <h2
            style={{
              fontSize: "clamp(28px, 4vw, 44px)",
              fontWeight: 800,
              color: "#111827",
              margin: "0 0 8px",
              textAlign: "center",
              letterSpacing: "-0.035em",
            }}
          >
            Let&apos;s work together
          </h2>
          <p
            style={{
              textAlign: "center",
              color: "#6b7280",
              fontSize: 16,
              maxWidth: 520,
              margin: "0 auto",
              lineHeight: 1.6,
            }}
          >
            Short intro first, availability, timeline, stack fit, then Calendly, email, or Liya anytime.
          </p>

          <div className="contact-grid">
            {onTalkToLiya ? (
              <button type="button" className="c-card liya-btn" onClick={onTalkToLiya}>
                <ArrowUpRight size={16} strokeWidth={2} className="c-arrow" />
                <div className="c-icon">
                  <Mic size={18} strokeWidth={2} color="#059669" />
                </div>
                <div>
                  <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 6 }}>
                    <span
                      style={{
                        width: 6,
                        height: 6,
                        borderRadius: "50%",
                        background: "#10b981",
                        boxShadow: "0 0 6px rgba(16,185,129,0.5)",
                      }}
                    />
                    <span style={{ fontSize: 11, fontWeight: 700, color: "#047857", letterSpacing: "0.08em", textTransform: "uppercase" }}>
                      Live assistant
                    </span>
                  </div>
                  <p style={{ fontSize: 12, fontWeight: 700, color: "#6b7280", letterSpacing: "0.06em", textTransform: "uppercase", margin: "0 0 6px" }}>
                    Ask Liya
                  </p>
                  <p style={{ fontSize: 15, color: "#374151", margin: 0, lineHeight: 1.5 }}>
                    Voice-ready answers about AI systems, timelines, or booking a slot.
                  </p>
                </div>
              </button>
            ) : null}

            {CHANNELS.map(ch => (
              <a
                key={ch.label}
                href={ch.href}
                target={ch.external ? "_blank" : undefined}
                rel={ch.external ? "noreferrer noopener" : undefined}
                className="c-card"
              >
                <ArrowUpRight size={16} strokeWidth={2} className="c-arrow" />
                <div className="c-icon">
                  {ch.Icon ? <ch.Icon size={18} strokeWidth={2} /> : null}
                  {ch.IconCustom ? <ch.IconCustom /> : null}
                </div>
                <div>
                  <p style={{ fontSize: 11, fontWeight: 700, color: "#9ca3af", letterSpacing: "0.08em", textTransform: "uppercase", margin: "0 0 6px" }}>{ch.label}</p>
                  <p style={{ fontSize: 15, color: "#111827", margin: 0, fontWeight: 500, wordBreak: "break-word" }}>
                    {ch.value}
                  </p>
                </div>
              </a>
            ))}
          </div>

          <p style={{ marginTop: 28, textAlign: "center", fontSize: 13, color: "#9ca3af" }}>
            Typical response within 1 hour · Remote · Global time zones
          </p>
        </div>
      </section>
    </>
  )
}
