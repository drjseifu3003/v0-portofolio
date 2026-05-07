"use client"

import { useCallback, useEffect, useState } from "react"
import styles from "@/app/case-study/case-study-sp.module.css"

export type CaseStudyTocEntry = { id: string; label: string }

const DEFAULT_SCROLL_ROOT_ID = "case-study-scroll"

export function CaseStudyToc({
  entries,
  scrollRootId = DEFAULT_SCROLL_ROOT_ID,
}: {
  entries: CaseStudyTocEntry[]
  scrollRootId?: string
}) {
  const [active, setActive] = useState(entries[0]?.id ?? "")

  const scrollSectionIntoView = useCallback(
    (id: string, behavior: ScrollBehavior) => {
      const el = typeof document !== "undefined" ? document.getElementById(id) : null
      if (!el) return

      const root = typeof document !== "undefined" ? document.getElementById(scrollRootId) : null
      if (root?.contains(el)) {
        el.scrollIntoView({ behavior, block: "start" })
      } else {
        el.scrollIntoView({ behavior, block: "start" })
      }
    },
    [scrollRootId],
  )

  useEffect(() => {
    if (entries.length === 0 || typeof window === "undefined") return

    const elements = entries.map(e => document.getElementById(e.id)).filter(Boolean) as HTMLElement[]
    if (!elements.length) return

    const rootEl = document.getElementById(scrollRootId)
    const root = rootEl && getComputedStyle(rootEl).overflowY === "auto" ? rootEl : null

    const observer = new IntersectionObserver(
      obs => {
        for (const entry of obs) {
          if (entry.isIntersecting) setActive(entry.target.id)
        }
      },
      { root, rootMargin: "-35% 0px -45% 0px", threshold: [0, 0.04, 0.12] },
    )

    elements.forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [entries, scrollRootId])

  if (entries.length === 0) return null

  return (
    <aside className={styles.toc} aria-label="Table of contents">
      <p className={styles.tocTitle}>Table of contents</p>
      <nav className={styles.tocNav}>
        {entries.map(({ id, label }) => (
          <a
            key={id}
            href={`#${id}`}
            className={`${styles.tocLink} ${active === id ? styles.tocActive : ""}`}
            onClick={e => {
              e.preventDefault()
              scrollSectionIntoView(id, "smooth")
            }}
          >
            {label}
          </a>
        ))}
      </nav>
    </aside>
  )
}
