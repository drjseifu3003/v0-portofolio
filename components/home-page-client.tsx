"use client"

import { HeroSection } from "@/components/hero-section"
import { LogoCloudSection } from "@/components/logo-cloud-section"
import { HowWeHelpSection } from "@/components/how-we-help-section"
import { ProjectsSection } from "@/components/projects-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { FaqSection } from "@/components/faq-section"
import { ContactSection } from "@/components/contact-section"
import { SiteHeader, SITE_HEADER_H } from "@/components/site-header"
import { LiyaSection } from "./liya-section"


const openLiya = () => window.dispatchEvent(new CustomEvent("open-liya"))

export function HomePageClient() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <main style={{ paddingTop: SITE_HEADER_H }}>
        <HeroSection />
        <LogoCloudSection />
        <HowWeHelpSection />
        <ProjectsSection />
        {/* <LiyaSection/> */}
        <TestimonialsSection />
        {/* <FaqSection /> */}
        <ContactSection onTalkToLiya={openLiya} />
      </main>
    </div>
  )
}
