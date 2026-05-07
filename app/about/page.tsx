"use client"

import { AboutIntro } from "@/components/about-intro"
import { ContactSection } from "@/components/contact-section"
import { SiteHeader, SITE_HEADER_H } from "@/components/site-header"

const openLiya = () => window.dispatchEvent(new CustomEvent("open-liya"))

export default function AboutPage() {
  return (
    <div style={{ background: "#fafaf9", color: "#111827", minHeight: "100vh" }}>
      <SiteHeader />
      <main style={{ paddingTop: SITE_HEADER_H }}>
        <AboutIntro />
        <ContactSection onTalkToLiya={openLiya} />
      </main>
    </div>
  )
}
