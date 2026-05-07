"use client"

import { HeroSection } from "@/components/hero-section"
import { LogoCloudSection } from "@/components/logo-cloud-section"
import { HowWeHelpSection } from "@/components/how-we-help-section"
import { ProjectsSection } from "@/components/projects-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { FaqSection } from "@/components/faq-section"
import { CTASection } from "@/components/cta-section"
import { ContactSection } from "@/components/contact-section"
import { SiteHeader, SITE_HEADER_H } from "@/components/site-header"

const openLiya = () => window.dispatchEvent(new CustomEvent("open-liya"))

export default function Home() {
  return (
    <div style={{ background: "#fafaf9", color: "#111827", minHeight: "100vh" }}>
      <SiteHeader />
      <main style={{ paddingTop: SITE_HEADER_H }}>
        <HeroSection />
        <LogoCloudSection />
        <HowWeHelpSection />
        <ProjectsSection />
        <TestimonialsSection />
        <FaqSection />
        <ContactSection onTalkToLiya={openLiya} />
      </main>
    </div>
  )
}
