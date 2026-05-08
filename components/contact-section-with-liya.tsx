"use client"

import { ContactSection } from "@/components/contact-section"

export function ContactSectionWithLiya() {
  return <ContactSection onTalkToLiya={() => window.dispatchEvent(new CustomEvent("open-liya"))} />
}
