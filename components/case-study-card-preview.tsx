"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import type { Study } from "@/app/case-study/data"

export function CaseStudyCardPreview({ study }: { study: Study }) {
  return (
    <Link
      href={`/case-study/${study.slug}`}
      style={{ textDecoration: "none", color: "inherit", display: "block", height: "100%" }}
    >
      <article
        style={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
          background: "#fff",
          border: "1px solid #e8eaed",
          borderRadius: 16,
          overflow: "hidden",
          boxShadow: "0 2px 10px rgba(15, 23, 42, 0.04)",
          transition: "box-shadow 0.2s ease",
        }}
        className="sp-case-preview-card"
      >
        <div
          style={{
            position: "relative",
            width: "100%",
            aspectRatio: "16 / 10",
            flexShrink: 0,
            background: "#f3f4f6",
          }}
        >
          {study.image ? (
            <Image
              src={study.image}
              alt=""
              fill
              sizes="(max-width: 767px) 100vw, 33vw"
              style={{ objectFit: "cover", objectPosition: "top center" }}
            />
          ) : null}
        </div>

        <div
          style={{
            padding: "20px 22px 22px",
            flex: 1,
            display: "flex",
            flexDirection: "column",
            minHeight: 0,
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: 12,
              marginBottom: 8,
            }}
          >
            <h3
              style={{
                flex: 1,
                minWidth: 0,
                fontSize: 17,
                fontWeight: 700,
                color: "#111827",
                margin: 0,
                lineHeight: 1.25,
                letterSpacing: "-0.02em",
              }}
            >
              {study.title}
            </h3>
            <ArrowUpRight strokeWidth={2} width={20} height={20} color="#9ca3af" style={{ flexShrink: 0 }} aria-hidden />
          </div>
          <p
            style={{
              margin: 0,
              fontSize: 14,
              lineHeight: 1.55,
              color: "#6b7280",
              textAlign: "left",
              fontWeight: 400,
              display: "-webkit-box",
              WebkitLineClamp: 2,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
            }}
          >
            {study.subtitle}
          </p>
        </div>
      </article>

      <style jsx>{`
        .sp-case-preview-card:hover {
          box-shadow:
            0 8px 28px rgba(15, 23, 42, 0.08),
            0 2px 10px rgba(15, 23, 42, 0.04);
        }
      `}</style>
    </Link>
  )
}


