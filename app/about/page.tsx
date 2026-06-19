"use client"

import { AboutIntro } from "@/components/about-intro"
import { ContactSection } from "@/components/contact-section"
import { SiteFooter } from "@/components/site-footer"
import { SiteHeader, SITE_HEADER_H } from "@/components/site-header"

const openLiya = () => window.dispatchEvent(new CustomEvent("open-liya"))

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <main style={{ paddingTop: SITE_HEADER_H }}>
        <AboutIntro />
        {/* <ContactSection onTalkToLiya={openLiya} /> */}
        <SiteFooter />
      </main>
    </div>
  )
}