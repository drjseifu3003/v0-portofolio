"use client"

import { ArrowUpRight, Mail, Phone, Linkedin } from "lucide-react"

function WhatsAppIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
    </svg>
  )
}

function UpworkIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.561 13.158c-1.102 0-2.135-.467-3.074-1.227l.228-1.076.008-.042c.207-1.143.849-3.06 2.839-3.06 1.492 0 2.703 1.212 2.703 2.703-.001 1.489-1.212 2.702-2.704 2.702zm0-8.14c-2.539 0-4.51 1.649-5.31 4.366-1.22-1.834-2.148-4.036-2.687-5.892H8.566v7.111c-.002 1.406-1.141 2.546-2.547 2.546-1.405 0-2.543-1.14-2.545-2.546V3.492H1.475v7.111c0 2.914 2.37 5.303 5.284 5.303 2.913 0 5.283-2.389 5.283-5.303v-1.19c.529 1.107 1.182 2.229 1.974 3.221l-1.673 7.873h2.497l1.213-5.71c1.063.679 2.285 1.109 3.508 1.109 3.012 0 5.465-2.458 5.465-5.472-.001-3.013-2.453-5.472-5.465-5.472z"/>
    </svg>
  )
}

function TelegramIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
    </svg>
  )
}

const CHANNELS = [
  {
    label: "Email",
    value: "Derejeseifu3030@gmail.com",
    href:  "mailto:Derejeseifu3030@gmail.com",
    Icon:  Mail,
    external: false,
  },
  {
    label: "Phone",
    value: "(+251) 0966016473",
    href:  "tel:+251966016473",
    Icon:  Phone,
    external: false,
  },
  {
    label: "WhatsApp",
    value: "(+251) 0966016473",
    href:  "https://wa.me/251966016473",
    IconCustom: WhatsAppIcon,
    external: true,
  },
  {
    label: "LinkedIn",
    value: "drjseifu1991",
    href:  "https://www.linkedin.com/in/drjseifu1991/",
    Icon:  Linkedin,
    external: true,
  },
  {
    label: "Telegram",
    value: "@drjseifu",
    href:  "https://t.me/drjseifu",
    IconCustom: TelegramIcon,
    external: true,
  },
  {
    label: "Upwork",
    value: "Dereje Seifu",
    href:  "https://www.upwork.com/freelancers/~dereje",
    IconCustom: UpworkIcon,
    external: true,
  },
]

export function ContactSection() {
  return (
    <>
      <section id="contact" style={{
        background: "#0c0c0c",
        borderBottom: "1px solid #1e1e1c",
        padding: "96px 36px 104px",
      }}>
        <style jsx>{`
          /* ── channel grid: 3 cols desktop, 2 tablet, 1 mobile ── */
          .ch-grid {
            display: grid;
            grid-template-columns: 1fr;
            gap: 1px;
            background: #1e1e1c;
            border: 1px solid #1e1e1c;
            margin-top: 64px;
          }
          @media (min-width: 560px)  { .ch-grid { grid-template-columns: repeat(2, 1fr); } }
          @media (min-width: 1024px) { .ch-grid { grid-template-columns: repeat(3, 1fr); } }

          /* ── each card ──────────────────────────────────────── */
          .ch-card {
            background: #0c0c0c;
            padding: 32px 28px 36px;
            display: flex;
            flex-direction: column;
            gap: 20px;
            text-decoration: none;
            transition: background 0.18s;
            position: relative;
          }
          .ch-card:hover { background: #111110; }

          /* icon box */
          .ch-icon {
            width: 44px; height: 44px;
            border: 1px solid #2a2826;
            display: flex; align-items: center; justify-content: center;
            color: #72706b;
            flex-shrink: 0;
            transition: border-color 0.2s, color 0.2s;
          }
          .ch-card:hover .ch-icon {
            border-color: #4a4844;
            color: #dedad2;
          }

          /* value text */
          .ch-val {
            font-size: 14px;
            font-weight: 400;
            color: #a8a49c;
            transition: color 0.2s;
            word-break: break-all;
          }
          .ch-card:hover .ch-val { color: #dedad2; }

          /* arrow */
          .ch-arrow {
            position: absolute;
            top: 20px; right: 20px;
            color: #2a2826;
            transition: color 0.2s, transform 0.2s;
          }
          .ch-card:hover .ch-arrow {
            color: #72706b;
            transform: translate(2px, -2px);
          }
        `}</style>

        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>

          {/* header */}
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

          {/* channel grid */}
          <div className="ch-grid">
            {CHANNELS.map(({ label, value, href, Icon, IconCustom, external }: any) => (
              <a
                key={label}
                href={href}
                target={external ? "_blank" : undefined}
                rel={external ? "noreferrer" : undefined}
                className="ch-card"
              >
                {/* top-right arrow */}
                <ArrowUpRight size={15} strokeWidth={1.6} className="ch-arrow" />

                {/* icon */}
                <div className="ch-icon">
                  {Icon       ? <Icon size={16} strokeWidth={1.6} /> : null}
                  {IconCustom ? <IconCustom /> : null}
                </div>

                {/* label */}
                <div>
                  <p style={{ fontSize: "11px", color: "#72706b", letterSpacing: "0.1em", textTransform: "uppercase", margin: "0 0 6px" }}>
                    {label}
                  </p>
                  <p className="ch-val" style={{ margin: 0 }}>{value}</p>
                </div>
              </a>
            ))}
          </div>

        </div>
      </section>

      {/* copyright bar */}
      <div style={{ background: "#0c0c0c", borderTop: "1px solid #1e1e1c", padding: "22px 36px" }}>
        <div style={{
          maxWidth: "1200px", margin: "0 auto",
          display: "flex", justifyContent: "space-between",
          alignItems: "center", flexWrap: "wrap", gap: "8px",
        }}>
          <span style={{ fontSize: "12px", color: "#4a4844" }}>
            © {new Date().getFullYear()} Dereje Seifu. All rights reserved.
          </span>
          <span style={{ fontSize: "12px", color: "#4a4844", fontStyle: "italic" }}>
            Designed &amp; developed by Dereje Seifu
          </span>
        </div>
      </div>
    </>
  )
}
