"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowUpRight, Calendar, Clock } from "lucide-react"

export interface BlogCardProps {
  title: string
  excerpt: string
  slug: string
  pubDate: string
  readingTime: string
  category: string
  coverImage?: string
  link?: string
}

export function BlogCard({ title, excerpt, slug, pubDate, readingTime, category, coverImage, link }: BlogCardProps) {
  const targetUrl = link || (slug.startsWith("http") ? slug : `https://builtforprod.substack.com/p/${slug}`)

  return (
    <a
      href={targetUrl}
      target="_blank"
      rel="noopener noreferrer"
      style={{ textDecoration: "none", color: "inherit", display: "block", height: "100%" }}
    >
      <article
        style={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
          background: "#ffffff",
          border: "1px solid #e8eaed",
          borderRadius: 16,
          overflow: "hidden",
          boxShadow: "0 2px 10px rgba(15, 23, 42, 0.04)",
          transition: "transform 0.2s ease, box-shadow 0.2s ease",
        }}
      >
        {coverImage && (
          <div style={{ position: "relative", width: "100%", aspectRatio: "16 / 9", flexShrink: 0, background: "#f3f4f6" }}>
            <Image src={coverImage} alt={title} fill style={{ objectFit: "cover" }} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
          </div>
        )}
        <div style={{ padding: "20px 22px 22px", flex: 1, display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 8, marginBottom: 10 }}>
            <span
              style={{
                fontSize: 12,
                fontWeight: 600,
                color: "#7c3aed",
                background: "#f3e8ff",
                padding: "3px 10px",
                borderRadius: 999,
              }}
            >
              {category}
            </span>
            <ArrowUpRight size={18} color="#9ca3af" style={{ flexShrink: 0 }} aria-hidden />
          </div>

          <h3
            style={{
              fontSize: 17,
              fontWeight: 700,
              color: "#111827",
              margin: "0 0 8px",
              lineHeight: 1.3,
              letterSpacing: "-0.02em",
            }}
          >
            {title}
          </h3>

          <p
            style={{
              fontSize: 14,
              lineHeight: 1.55,
              color: "#6b7280",
              margin: "0 0 16px",
              fontWeight: 400,
              display: "-webkit-box",
              WebkitLineClamp: 3,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
              flex: 1,
            }}
          >
            {excerpt}
          </p>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 14,
              fontSize: 12,
              color: "#9ca3af",
              fontWeight: 500,
              paddingTop: 12,
              borderTop: "1px solid #f3f4f6",
            }}
          >
            <span style={{ display: "inline-flex", alignItems: "center", gap: 4 }}>
              <Calendar size={13} aria-hidden />
              {pubDate}
            </span>
            <span style={{ display: "inline-flex", alignItems: "center", gap: 4 }}>
              <Clock size={13} aria-hidden />
              {readingTime}
            </span>
          </div>
        </div>
      </article>
    </a>
  )
}
