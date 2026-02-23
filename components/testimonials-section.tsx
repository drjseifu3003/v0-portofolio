"use client"

import { useState, useRef } from "react"
import Link from "next/link"
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react"

interface T {
  content: string
  author: { name: string; role: string; company?: string }
  rating: number,
  link: string,
  platform: "linkedin" | "upwork"
}

const DATA: T[] = [
  {
    content: "Dereje is an exceptional developer! I hired a total of 6 developers, and he was the last one standing at the end of the project because he was the best! He's great, very reliable, can fix things quickly, is prompt, and overall has been an incredible first hire. Ending the contract because the job was completed successfully.",
    author: { name: "Jovan Stojanovic", role: "Ex-CEO of PhoneSales & Founder", company: "Roasform" },
    rating: 5,
    platform: "upwork",
    link: "https://www.upwork.com/ab/g/pub/wom/prx/eyJwZXJzb25VaWQiOiIxNzYyODM2NzI2MTI3OTQzNjgwIiwiY29udHJhY3RSaWQiOiI0MTY3NzYxMCIsImJhbm5lclR5cGUiOiJjb250cmFjdCIsImJhbm5lclZhcmlhbnQiOiJkZWZhdWx0Iiwid29tIjoiZmx2MiIsInJlZGlyZWN0IjoiZmxfcHJvZmlsZV9wcm9tbyJ9?network=linkedin"
  },
  {
    content: "Dereje delivered good work on this React development project and I enjoyed working with him. His communication was top-notch, he met all deadlines, and his skills were reasonably strong. At one point I asked for an additional milestone and he was very forthcoming that the additional work was outside his area of expertise. I enjoyed working with Dereje and will likely have additional jobs for him in the future.",
    author: { name: "Neeraj Kumar", role: "Co-Founder & CTO", company: "Healium Intelliscan" },
    rating: 5,
    platform: "upwork",
    link: "https://www.upwork.com/ab/g/pub/wom/prx/eyJwZXJzb25VaWQiOiIxNzYyODM2NzI2MTI3OTQzNjgwIiwiY29udHJhY3RSaWQiOiI0MTAzNTU3OSIsImJhbm5lclR5cGUiOiJjb250cmFjdCIsImJhbm5lclZhcmlhbnQiOiJkZWZhdWx0Iiwid29tIjoiZmx2MiIsInJlZGlyZWN0IjoiZmxfcHJvZmlsZV9wcm9tbyJ9?network=linkedin"
  },
  {
    content: "Dereje is a dedicated and skilled developer who designed and developed both mobile and web applications from the ground up. His work always stood out for being efficient, well-structured, and user-friendly.",
    author: { name: "Tibebu", role: "ICT Director", company: "AAAE" },
    rating: 5,
    platform: "linkedin",
    link: "https://www.linkedin.com/in/drjseifu1991/details/recommendations/?detailScreenTabIndex=0"
  },
  {
    content: "Dereje is one of the most skilled Full Stack Engineers I've worked with. His command of JavaScript, TypeScript, and React is top-notch. He's also highly capable in AWS and DevOps, showing deep understanding of CI/CD pipelines and cloud infrastructure.",
    author: { name: "Mekanehiwot Mengistu", role: "Technical Team Leader" },
    rating: 5,
    platform: "linkedin",
    link: "https://www.linkedin.com/in/drjseifu1991/details/recommendations/?detailScreenTabIndex=0"
  },
  {
    content: "Dereje is exactly the sort of developer any company would love. He simplified a complex ERP system concept I'd struggled with for days in just minutes. He has a great way of breaking down problems and always writes clean, well-organized code.",
    author: { name: "Bushra Mustofa", role: "Senior DevOps Engineer" },
    rating: 5,
    platform: "linkedin",
    link: "https://www.linkedin.com/in/drjseifu1991/details/recommendations/?detailScreenTabIndex=0"
  },
  {
    content: "Dereje goes above and beyond to ensure projects are completed to the highest standards. He's hardworking, dedicated, and always willing to learn new skills and technologies. His ability to work independently and deliver high-quality work is a testament to his excellence.",
    author: { name: "Dawit Michael", role: "Senior Software Engineer" },
    rating: 5,
    platform: "linkedin",
    link: "https://www.linkedin.com/in/drjseifu1991/details/recommendations/?detailScreenTabIndex=0"
  }
]

/* ── Stars ───────────────────────────────────────────────────── */
function Stars({ count }: { count: number }) {
  return (
    <div style={{ display: "flex", gap: "3px" }}>
      {[0,1,2,3,4].map(i => (
        <svg key={i} width="13" height="13" viewBox="0 0 14 14" fill={i < count ? "#b8862a" : "#2a2826"}>
          <path d="M7 1l1.6 3.3L12.5 4.85l-2.75 2.68.65 3.78L7 9.6l-3.4 1.71.65-3.78L1.5 4.85l3.9-.55z"/>
        </svg>
      ))}
    </div>
  )
}

/* ── Single card ─────────────────────────────────────────────── */
function TestimonialCard({ content, author, rating, link, platform }: T) {
  const initials = author.name.split(" ").map(n => n[0]).join("").slice(0, 2).toUpperCase()

  return (
    <div style={{
      background: "#0f0f0d",
      border: "1px solid #1e1e1c",
      padding: "32px",
      display: "flex",
      flexDirection: "column",
      gap: "20px",
      height: "100%",
    }}>
      {/* top row: stars + LinkedIn */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <Stars count={rating} />
        <Link
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-flex", alignItems: "center", gap: "3px",
            fontSize: "11px", color: "#72706b",
            letterSpacing: "0.08em", textTransform: "uppercase",
            textDecoration: "none", transition: "color 0.2s",
          }}
          onMouseEnter={e => (e.currentTarget.style.color = "#dedad2")}
          onMouseLeave={e => (e.currentTarget.style.color = "#72706b")}
        >
          {platform === "linkedin" ? "LinkedIn" : "Upwork"} <ArrowUpRight size={11} strokeWidth={1.8} />
        </Link>
      </div>

      {/* quote */}
      <p style={{
        fontSize: "15px",
        lineHeight: "1.85",
        color: "#a8a49c",
        fontWeight: 300,
        margin: 0,
        flex: 1,
      }}>
        "{content}"
      </p>

      {/* author */}
      <div style={{
        display: "flex", alignItems: "center", gap: "14px",
        paddingTop: "20px",
        borderTop: "1px solid #1e1e1c",
      }}>
        {/* initials circle */}
        <div style={{
          width: "40px", height: "40px",
          borderRadius: "50%",
          background: "#161614",
          border: "1px solid #2a2826",
          display: "flex", alignItems: "center", justifyContent: "center",
          fontSize: "12px", fontWeight: 500,
          color: "#a8a49c",
          flexShrink: 0,
          letterSpacing: "0.04em",
        }}>
          {initials}
        </div>
        <div>
          <p style={{ fontSize: "14px", fontWeight: 500, color: "#dedad2", margin: 0, lineHeight: 1.3 }}>
            {author.name}
          </p>
          <p style={{ fontSize: "12px", color: "#72706b", margin: "3px 0 0", letterSpacing: "0.02em" }}>
            {author.role}{author.company ? ` · ${author.company}` : ""}
          </p>
        </div>
      </div>
    </div>
  )
}

/* ── Section ─────────────────────────────────────────────────── */
export function TestimonialsSection() {
  const [current, setCurrent] = useState(0)
  const trackRef = useRef<HTMLDivElement>(null)

  const prev = () => setCurrent(c => Math.max(0, c - 1))
  const next = () => setCurrent(c => Math.min(DATA.length - 1, c + 1))

  return (
    <section id="testimonials" style={{
      background: "#0c0c0c",
      borderBottom: "1px solid #1e1e1c",
      padding: "96px 36px 104px",
    }}>
      <style jsx>{`
        /* desktop grid */
        .t-grid {
          display: none;
          grid-template-columns: repeat(3, 1fr);
          gap: 1px;
          background: #1e1e1c;
          border: 1px solid #1e1e1c;
          margin-top: 64px;
        }
        /* mobile carousel */
        .t-carousel { display: block; margin-top: 48px; }
        .t-track {
          display: flex;
          gap: 16px;
          overflow-x: auto;
          scroll-snap-type: x mandatory;
          scrollbar-width: none;
          -ms-overflow-style: none;
          padding-bottom: 4px;
        }
        .t-track::-webkit-scrollbar { display: none; }
        .t-slide {
          flex: 0 0 calc(100% - 0px);
          scroll-snap-align: start;
          min-width: 0;
        }
        /* nav buttons */
        .t-nav-btn {
          width: 40px; height: 40px;
          border: 1px solid #2a2826;
          background: #0f0f0d;
          display: flex; align-items: center; justify-content: center;
          cursor: pointer;
          color: #a8a49c;
          transition: border-color 0.2s, color 0.2s, background 0.2s;
        }
        .t-nav-btn:hover { border-color: #4a4844; color: #dedad2; background: #161614; }
        .t-nav-btn:disabled { opacity: 0.25; cursor: not-allowed; }

        @media (min-width: 640px) {
          .t-slide { flex: 0 0 calc(50% - 8px); }
        }
        @media (min-width: 1024px) {
          .t-grid    { display: grid; }
          .t-carousel { display: none; }
        }
      `}</style>

      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>

        {/* ── section header ──────────────────────────────── */}
        <div style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-end",
          flexWrap: "wrap",
          gap: "28px",
          paddingBottom: "52px",
          borderBottom: "1px solid #2a2826",
        }}>
          <div>
            {/* eyebrow */}
            <div style={{ display: "flex", alignItems: "center", gap: "14px", marginBottom: "20px" }}>
              <div style={{ width: "28px", height: "1px", background: "#4a4844" }} />
              <span style={{
                fontSize: "12px", fontWeight: 500,
                color: "#b8b4ac",
                letterSpacing: "0.1em", textTransform: "uppercase",
              }}>
                What colleagues say
              </span>
            </div>
            {/* heading */}
            <h2 style={{
              fontSize: "clamp(28px, 3.5vw, 48px)",
              fontWeight: 300,
              lineHeight: 1.13,
              letterSpacing: "-0.02em",
              color: "#dedad2",
              margin: 0,
            }}>
              Client &{" "}
              <em style={{
                fontFamily: "'Instrument Serif', serif",
                fontStyle: "italic",
                fontWeight: 400,
                color: "#c8c4bc",
              }}>
                team feedback
              </em>
            </h2>
          </div>

          {/* subtitle */}
          <p style={{
            fontSize: "16px",
            color: "#a8a49c",
            maxWidth: "340px",
            lineHeight: "1.85",
            margin: 0,
            fontWeight: 300,
          }}>
            Verified recommendations from colleagues and partners across product and delivery teams.
          </p>
        </div>

        {/* ── DESKTOP: 3-col grid ──────────────────────────── */}
        <div className="t-grid">
          {DATA.map((t, i) => (
            <TestimonialCard key={i} {...t} />
          ))}
        </div>

        {/* ── MOBILE: native scroll carousel ──────────────── */}
        <div className="t-carousel">
          {/* track */}
          <div
            ref={trackRef}
            className="t-track"
            onScroll={e => {
              const el = e.currentTarget
              const idx = Math.round(el.scrollLeft / (el.scrollWidth / DATA.length))
              setCurrent(idx)
            }}
          >
            {DATA.map((t, i) => (
              <div
                key={i}
                className="t-slide"
                style={{ cursor: "default" }}
              >
                <TestimonialCard {...t} />
              </div>
            ))}
          </div>

          {/* nav row */}
          <div style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginTop: "24px",
          }}>
            {/* dot indicators */}
            <div style={{ display: "flex", gap: "8px" }}>
              {DATA.map((_, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setCurrent(i)
                    const el = trackRef.current
                    if (!el) return
                    const slideW = el.scrollWidth / DATA.length
                    el.scrollTo({ left: slideW * i, behavior: "smooth" })
                  }}
                  style={{
                    width: i === current ? "20px" : "6px",
                    height: "6px",
                    borderRadius: "3px",
                    background: i === current ? "#dedad2" : "#2a2826",
                    border: "none",
                    cursor: "pointer",
                    padding: 0,
                    transition: "width 0.25s, background 0.25s",
                  }}
                />
              ))}
            </div>

            {/* prev / next */}
            <div style={{ display: "flex", gap: "8px" }}>
              <button
                className="t-nav-btn"
                onClick={() => {
                  prev()
                  const el = trackRef.current
                  if (!el) return
                  const slideW = el.scrollWidth / DATA.length
                  el.scrollTo({ left: slideW * Math.max(0, current - 1), behavior: "smooth" })
                }}
                disabled={current === 0}
                aria-label="Previous"
              >
                <ChevronLeft size={16} strokeWidth={1.8} />
              </button>
              <button
                className="t-nav-btn"
                onClick={() => {
                  next()
                  const el = trackRef.current
                  if (!el) return
                  const slideW = el.scrollWidth / DATA.length
                  el.scrollTo({ left: slideW * Math.min(DATA.length - 1, current + 1), behavior: "smooth" })
                }}
                disabled={current === DATA.length - 1}
                aria-label="Next"
              >
                <ChevronRight size={16} strokeWidth={1.8} />
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
