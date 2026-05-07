"use client"

import { useState } from "react"
import Image from "next/image"
import styles from "@/app/case-study/case-study-sp.module.css"

/** Vertical thumbs + hero, every URL is the same case study gallery */
export function CaseStudyImageViewer({ images }: { images: string[] }) {
  const list = images.filter(Boolean)
  const [active, setActive] = useState(0)

  if (list.length === 0) return null

  const idx = Math.min(active, list.length - 1)
  const showRail = list.length > 1

  return (
    <div className={`${styles.mediaStage} ${!showRail ? styles.mediaStageNoThumbs : ""}`}>
      {showRail ? (
        <div className={styles.thumbRail} role="tablist" aria-label="Screenshots">
          {list.map((src, i) => (
            <button
              key={`${src}-${i}`}
              type="button"
              role="tab"
              aria-selected={i === idx}
              onClick={() => setActive(i)}
              className={`${styles.thumbBtn} ${i === idx ? styles.thumbBtnActive : ""}`}
            >
              <span className={styles.thumbBtnInner}>
                <Image src={src} alt="" fill sizes="80px" style={{ objectFit: "cover", objectPosition: "top center" }} />
              </span>
            </button>
          ))}
        </div>
      ) : null}
      <div className={styles.mediaMain}>
        <Image
          src={list[idx]}
          alt=""
          fill
          sizes="(max-width: 1023px) 100vw, min(900px, 75vw)"
          style={{ objectFit: "cover", objectPosition: "top center" }}
          priority={idx === 0}
        />
      </div>
    </div>
  )
}
