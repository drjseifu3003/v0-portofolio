import type { Metadata } from "next"
import type { ReactNode } from "react"

export const metadata: Metadata = {
  title: "About me",
  description:
    "Software architect & AI engineer, SaaS, AI agents, RAG, voice products, and web platforms. Based in Addis Ababa, remote worldwide.",
  openGraph: {
    title: "About Dereje Seifu",
    description:
      "Expertise in production software, AI systems, and integrations. Remote software architect and full-stack engineer.",
  },
}

export default function AboutLayout({ children }: { children: ReactNode }) {
  return children
}
