import type { Metadata } from "next"
import type { ReactNode } from "react"

export const metadata: Metadata = {
  title: "About me",
  description:
    "Senior full-stack engineer (4+ yrs). MERN, PERN, Next.js, AI, RAG, voice, AWS, Supabase, integrations. Remote. Clear about how I build and what I ship.",
  openGraph: {
    title: "About Dereje Seifu",
    description:
      "Production-first delivery, realistic scope, and hands-on stack: MERN/PERN, FastAPI, AI, voice, AWS & Supabase.",
  },
}

export default function AboutLayout({ children }: { children: ReactNode }) {
  return children
}
