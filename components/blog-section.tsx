"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { ArrowRight, BookOpen } from "lucide-react"
import { FALLBACK_POSTS, SUBSTACK_URL, type SubstackPost } from "@/lib/substack"
import { BlogCard } from "./blog-card"

export function BlogSection() {
  const [posts, setPosts] = useState<SubstackPost[]>(FALLBACK_POSTS.slice(0, 3))

  useEffect(() => {
    fetch("/api/substack")
      .then(res => res.json())
      .then(data => {
        if (data?.posts?.length > 0) {
          setPosts(data.posts.slice(0, 3))
        }
      })
      .catch(() => {})
  }, [])

  return (
    <section
      id="blog"
      style={{
        background: "#ffffff",
        borderBottom: "1px solid #e5e7eb",
        padding: "clamp(40px, 6.5vw, 72px) 0 clamp(48px, 7vw, 80px)",
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "0 clamp(16px, 4vw, 36px)",
          boxSizing: "border-box",
        }}
      >
        <div style={{ textAlign: "center", marginBottom: "clamp(32px, 5vw, 44px)" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 6, fontSize: 13, fontWeight: 700, color: "#7c3aed", marginBottom: 8, textTransform: "uppercase", letterSpacing: "0.04em" }}>
            <BookOpen size={15} />
            Substack Insights
          </div>
          <h2
            style={{
              fontSize: "clamp(28px, 4vw, 42px)",
              fontWeight: 700,
              color: "#111827",
              margin: "0 0 12px",
              letterSpacing: "-0.03em",
              lineHeight: 1.15,
            }}
          >
            Articles &amp; Architecture Notes
          </h2>
          <p
            style={{
              fontSize: "clamp(15px, 1.6vw, 18px)",
              color: "#6b7280",
              maxWidth: 620,
              margin: "0 auto",
              lineHeight: 1.55,
              fontWeight: 400,
            }}
          >
            Real engineering decisions from production Healthcare AI platforms, cloud security envelopes, and multi-tenant SaaS systems.
          </p>
        </div>

        <div className="sp-home-blog-grid">
          <style jsx>{`
            .sp-home-blog-grid {
              display: grid;
              grid-template-columns: 1fr;
              gap: 24px;
              margin-bottom: 44px;
            }
            @media (min-width: 768px) {
              .sp-home-blog-grid {
                grid-template-columns: repeat(3, minmax(0, 1fr));
              }
            }
          `}</style>
          {posts.map(post => (
            <BlogCard key={post.slug} {...post} />
          ))}
        </div>

        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 14 }}>
          <Link
            href="/blog"
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 8,
              padding: "14px 32px",
              borderRadius: 999,
              fontSize: 15,
              fontWeight: 700,
              letterSpacing: "-0.02em",
              color: "#ffffff",
              textDecoration: "none",
              background: "linear-gradient(145deg, #7c3aed 0%, #6d28d9 100%)",
              boxShadow: "0 6px 20px rgba(124, 58, 237, 0.3)",
            }}
          >
            View all articles
            <ArrowRight size={18} strokeWidth={2} />
          </Link>

          <a
            href={SUBSTACK_URL}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 8,
              padding: "14px 32px",
              borderRadius: 999,
              fontSize: 15,
              fontWeight: 700,
              letterSpacing: "-0.02em",
              color: "#374151",
              textDecoration: "none",
              background: "#ffffff",
              border: "1px solid #d1d5db",
              boxShadow: "0 2px 10px rgba(15, 23, 42, 0.04)",
            }}
          >
            Subscribe on Substack
            <ArrowRight size={18} strokeWidth={2} />
          </a>
        </div>
      </div>
    </section>
  )
}
