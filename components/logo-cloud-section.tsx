"use client"

import { CLIENT_FEEDBACK_TRAITS } from "@/components/client-insight"

const LOOP = [...CLIENT_FEEDBACK_TRAITS, ...CLIENT_FEEDBACK_TRAITS]
export function LogoCloudSection() {
  return (
    <section
      style={{
        background: "#fff",
        borderBottom: "1px solid #e5e7eb",
        padding: "clamp(28px, 4.5vw, 48px) 0",
        overflow: "hidden",
      }}
    >
      <p
        style={{
          textAlign: "center",
          fontSize: 15,
          fontWeight: 600,
          color: "#374151",
          margin: "0 auto 18px",
          maxWidth: 520,
          lineHeight: 1.5,
          padding: "0 24px",
        }}
      >
        What clients and colleagues say.
      </p>
      <div className="sp-marquee-inner">
        <style jsx>{`
          .sp-marquee-inner {
            display: flex;
            width: max-content;
            gap: 48px;
            animation: spMarquee 36s linear infinite;
            padding-left: 24px;
          }
          .sp-marquee-inner:hover {
            animation-play-state: paused;
          }
          @keyframes spMarquee {
            from {
              transform: translateX(0);
            }
            to {
              transform: translateX(-50%);
            }
          }
        `}</style>
        {LOOP.map((name, i) => (
          <span
            key={`${name}-${i}`}
            style={{
              fontSize: 15,
              fontWeight: 600,
              color: "#9ca3af",
              letterSpacing: "-0.02em",
              whiteSpace: "nowrap",
            }}
          >
            {name}
          </span>
        ))}
      </div>
    </section>
  )
}
