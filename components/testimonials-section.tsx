"use client"

import { useState, useRef } from "react"
import Link from "next/link"
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react"


interface T {
  content: string
  author: { name: string; role: string; company?: string }
  rating: number
  link: string
  platform: "linkedin" | "upwork"
}

const DATA: T[] = [
  {
    content:
      "Dereje is an exceptional developer! I hired a total of 6 developers, and he was the last one standing at the end of the project because he was the best! He's great, very reliable, can fix things quickly, is prompt, and overall has been an incredible first hire.",
    author: { name: "Jovan Stojanovic", role: "Ex-CEO of PhoneSales & Founder", company: "Roasform" },
    rating: 5,
    platform: "upwork",
    link: "https://www.upwork.com/ab/g/pub/wom/prx/eyJwZXJzb25VaWQiOiIxNzYyODM2NzI2MTI3OTQzNjgwIiwiY29udHJhY3RSaWQiOiI0MTY3NzYxMCIsImJhbm5lclR5cGUiOiJjb250cmFjdCIsImJhbm5lclZhcmlhbnQiOiJkZWZhdWx0Iiwid29tIjoiZmx2MiIsInJlZGlyZWN0IjoiZmxfcHJvZmlsZV9wcm9tbyJ9",
  },
  {
    content:
      "Dereje delivered good work on this React development project and I enjoyed working with him. His communication was top-notch, he met all deadlines, and his skills were reasonably strong. I enjoyed working with Dereje and will likely have additional jobs for him in the future.",
    author: { name: "Neeraj Kumar", role: "Co-Founder & CTO", company: "Healium Intelliscan" },
    rating: 5,
    platform: "upwork",
    link: "https://www.upwork.com/ab/g/pub/wom/prx/eyJwZXJzb25VaWQiOiIxNzYyODM2NzI2MTI3OTQzNjgwIiwiY29udHJhY3RSaWQiOiI0MTAzNTU3OSIsImJhbm5lclR5cGUiOiJjb250cmFjdCIsImJhbm5lclZhcmlhbnQiOiJkZWZhdWx0Iiwid29tIjoiZmx2MiIsInJlZGlyZWN0IjoiZmxfcHJvZmlsZV9wcm9tbyJ9",
  },
  {
    content:
      "Dereje is a highly skilled and reliable developer. He consistently delivered high-quality work, met deadlines, and communicated effectively throughout the project. I would highly recommend him for any development work.",
    author: { name: "Tray Branch", role: "Co-Founder & CEO", company: "IntuitySync AI" },
    rating: 5,
    platform: "upwork",
    link: "https://www.upwork.com/ab/g/pub/wom/prx/eyJwZXJzb25VaWQiOiIxNzYyODM2NzI2MTI3OTQzNjgwIiwiY29udHJhY3RSaWQiOiI0MTAzNTU3OSIsImJhbm5lclR5cGUiOiJjb250cmFjdCIsImJhbm5lclZhcmlhbnQiOiJkZWZhdWx0Iiwid29tIjoiZmx2MiIsInJlZGlyZWN0IjoiZmxfcHJvZmlsZV9wcm9tbyJ9",
  },
  {
    content:
      "Dereje is a dedicated and skilled developer who designed and developed both mobile and web applications from the ground up. His work always stood out for being efficient, well-structured, and user-friendly.",
    author: { name: "Tibebu", role: "ICT Director", company: "AAAE" },
    rating: 5,
    platform: "linkedin",
    link: "https://www.linkedin.com/in/drjseifu1991/details/recommendations/?detailScreenTabIndex=0",
  },
  {
    content:
      "Dereje is one of the most skilled Full Stack Engineers I've worked with. His command of JavaScript, TypeScript, and React is top-notch. He's also highly capable in AWS and DevOps, showing deep understanding of CI/CD pipelines and cloud infrastructure.",
    author: { name: "Mekanehiwot Mengistu", role: "Technical Team Leader" },
    rating: 5,
    platform: "linkedin",
    link: "https://www.linkedin.com/in/drjseifu1991/details/recommendations/?detailScreenTabIndex=0",
  },
  {
    content:
      "Dereje is exactly the sort of developer any company would love. He simplified a complex ERP system concept I'd struggled with for days in just minutes. He has a great way of breaking down problems and always writes clean, well-organized code.",
    author: { name: "Bushra Mustofa", role: "Senior DevOps Engineer" },
    rating: 5,
    platform: "linkedin",
    link: "https://www.linkedin.com/in/drjseifu1991/details/recommendations/?detailScreenTabIndex=0",
  },
  // {
  //   content:
  //     "Dereje goes above and beyond to ensure projects are completed to the highest standards. He's hardworking, dedicated, and always willing to learn new skills and technologies. His ability to work independently and deliver high-quality work is a testament to his excellence.",
  //   author: { name: "Dawit Michael", role: "Senior Software Engineer" },
  //   rating: 5,
  //   platform: "linkedin",
  //   link: "https://www.linkedin.com/in/drjseifu1991/details/recommendations/?detailScreenTabIndex=0",
  // },
]

const HERO_TESTIMONIAL_AUTHOR = "Jovan Stojanovic"

function Stars({ count }: { count: number }) {
  const fill = "#f59e0b"
  return (
    <div style={{ display: "flex", gap: 2 }}>
      {[0, 1, 2, 3, 4].map(i => (
        <svg key={i} width={14} height={14} viewBox="0 0 14 14" fill={i < count ? fill : "hsl(var(--border))"}>
          <path d="M7 1l1.6 3.3L12.5 4.85l-2.75 2.68.65 3.78L7 9.6l-3.4 1.71.65-3.78L1.5 4.85l3.9-.55z" />
        </svg>
      ))}
    </div>
  )
}

function TestimonialCard({ content, author, rating, link, platform }: T) {
  const initials = author.name
    .split(" ")
    .map(n => n[0])
    .join("")
    .slice(0, 2)
    .toUpperCase()

  return (
    <div
      style={{
        background: "hsl(var(--card))",
        border: "1px solid hsl(var(--border))",
        borderRadius: 16,
        padding: 28,
        display: "flex",
        flexDirection: "column",
        gap: 18,
        height: "100%",
        boxShadow: "0 4px 24px rgba(15,23,42,0.04)",
      }}
    >
      <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 12 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12, minWidth: 0 }}>
          <div
            style={{
              width: 44,
              height: 44,
              borderRadius: 10,
              background: "hsl(var(--muted))",
              border: "1px solid hsl(var(--border))",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 13,
              fontWeight: 700,
              color: "hsl(var(--muted-foreground))",
              flexShrink: 0,
            }}
          >
            {initials}
          </div>
          <div style={{ minWidth: 0 }}>
            <p style={{ fontSize: 15, fontWeight: 700, color: "hsl(var(--foreground))", margin: 0, lineHeight: 1.3 }}>
              {author.name}
            </p>
            <p style={{ fontSize: 13, color: "#6b7280", margin: "4px 0 0", lineHeight: 1.4 }}>
              {author.role}
              {author.company ? ` · ${author.company}` : ""}
            </p>
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: 4, flexShrink: 0 }}>
          <Stars count={rating} />
          <span style={{ fontSize: 12, fontWeight: 700, color: "hsl(var(--foreground))" }}>5.0</span>
        </div>
      </div>

      <p style={{ fontSize: 15, lineHeight: 1.65, color: "hsl(var(--muted-foreground))", fontWeight: 400, margin: 0, flex: 1 }}>
        “{content}”
      </p>

      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 10 }}>
        {platform === "upwork" && (
          <span style={{ fontSize: 11, fontWeight: 700, color: "#14a800", letterSpacing: "0.04em", textTransform: "uppercase" }}>
            Upwork · verified review
          </span>
        )}
        <Link
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 5,
            fontSize: 12,
            fontWeight: 700,
            color: "hsl(var(--brand-accent))",
            textDecoration: "none",
          }}
        >
          View on {platform === "linkedin" ? "LinkedIn" : "Upwork"}
          <ArrowUpRight size={12} strokeWidth={2} />
        </Link>
      </div>
    </div>
  )
}

export function TestimonialsSection() {
  const [current, setCurrent] = useState(0)
  const trackRef = useRef<HTMLDivElement>(null)

  const testimonials = (() => {
    const heroIndex = DATA.findIndex(t => t.author.name === HERO_TESTIMONIAL_AUTHOR)
    if (heroIndex < 0) return DATA
    return [DATA[heroIndex], ...DATA.filter((_, i) => i !== heroIndex)]
  })()

  const prev = () => setCurrent(c => Math.max(0, c - 1))
  const next = () => setCurrent(c => Math.min(testimonials.length - 1, c + 1))

  return (
    <section
      id="testimonials"
      style={{
        background: "hsl(var(--background))",
        borderBottom: "1px solid hsl(var(--border))",
        padding: "clamp(40px, 6.5vw, 72px) clamp(20px, 4vw, 36px)",
      }}
    >
      <style jsx>{`
        .t-grid {
          display: none;
          grid-template-columns: repeat(3, 1fr);
          gap: 22px;
          margin-top: 48px;
        }
        .t-carousel {
          display: block;
          margin-top: 44px;
        }
        .t-track {
          display: flex;
          gap: 16px;
          overflow-x: auto;
          scroll-snap-type: x mandatory;
          scrollbar-width: none;
          -ms-overflow-style: none;
          padding-bottom: 4px;
        }
        .t-track::-webkit-scrollbar {
          display: none;
        }
        .t-slide {
          flex: 0 0 calc(100% - 0px);
          scroll-snap-align: start;
          min-width: 0;
        }
        .t-nav-btn {
          width: 44px;
          height: 44px;
          border: 1px solid hsl(var(--border));
          background: hsl(var(--card));
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          border-radius: 12px;
          color: hsl(var(--muted-foreground));
          transition: border-color 0.2s, color 0.2s;
        }
        .t-nav-btn:hover {
          border-color: hsl(var(--brand-accent) / 0.35);
          color: hsl(var(--foreground));
        }
        .t-nav-btn:disabled {
          opacity: 0.3;
          cursor: not-allowed;
        }

        @media (min-width: 640px) {
          .t-slide {
            flex: 0 0 calc(50% - 8px);
          }
        }
        @media (min-width: 1024px) {
          .t-grid {
            display: grid;
          }
          .t-carousel {
            display: none;
          }
        }
      `}</style>

      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 24 }}>
          <h2
            style={{
              fontSize: "clamp(28px, 4vw, 44px)",
              fontWeight: 800,
              lineHeight: 1.14,
              letterSpacing: "-0.035em",
              color: "hsl(var(--foreground))",
              margin: "0 0 12px",
            }}
          >
            5.0 / 5 across Upwork &amp; LinkedIn
          </h2>
          <p style={{ fontSize: 16, color: "hsl(var(--muted-foreground))", maxWidth: 520, margin: "0 auto", lineHeight: 1.6 }}>
            A few recommendations from founders, CTOs, and teams I shipped with, real projects and real accountability.
          </p>


        </div>

        <div className="t-grid">
          {testimonials.map((t, i) => (
            <TestimonialCard key={i} {...t} />
          ))}
        </div>

        <div className="t-carousel">
          <div
            ref={trackRef}
            className="t-track"
            onScroll={e => {
              const el = e.currentTarget
              const idx = Math.round(el.scrollLeft / (el.scrollWidth / testimonials.length))
              setCurrent(Math.min(testimonials.length - 1, Math.max(0, idx)))
            }}
          >
            {testimonials.map((t, i) => (
              <div key={i} className="t-slide">
                <TestimonialCard {...t} />
              </div>
            ))}
          </div>

          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: 24 }}>
            <div style={{ display: "flex", gap: 8 }}>
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => {
                    setCurrent(i)
                    const el = trackRef.current
                    if (!el) return
                    const slideW = el.scrollWidth / testimonials.length
                    el.scrollTo({ left: slideW * i, behavior: "smooth" })
                  }}
                  style={{
                    width: i === current ? 22 : 6,
                    height: 6,
                    borderRadius: 3,
                    background: i === current ? "hsl(var(--brand-accent))" : "hsl(var(--border))",
                    border: "none",
                    cursor: "pointer",
                    transition: "width 0.25s",
                  }}
                />
              ))}
            </div>

            <div style={{ display: "flex", gap: 8 }}>
              <button
                type="button"
                className="t-nav-btn"
                onClick={() => {
                  prev()
                  const el = trackRef.current
                  if (!el) return
                  const slideW = el.scrollWidth / testimonials.length
                  el.scrollTo({ left: slideW * Math.max(0, current - 1), behavior: "smooth" })
                }}
                disabled={current === 0}
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={18} strokeWidth={2} />
              </button>
              <button
                type="button"
                className="t-nav-btn"
                onClick={() => {
                  next()
                  const el = trackRef.current
                  if (!el) return
                  const slideW = el.scrollWidth / testimonials.length
                  el.scrollTo({ left: slideW * Math.min(testimonials.length - 1, current + 1), behavior: "smooth" })
                }}
                disabled={current === testimonials.length - 1}
                aria-label="Next testimonial"
              >
                <ChevronRight size={18} strokeWidth={2} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
