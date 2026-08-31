import { PROFILE_LINKEDIN, PROFILE_UPWORK } from "@/lib/site"

/** Canonical public origin with no trailing slash (uses `NEXT_PUBLIC_SITE_URL` when set). */
export function getSiteUrl(): string {
  const raw = process.env.NEXT_PUBLIC_SITE_URL
  if (typeof raw === "string" && raw.trim().length > 0) {
    return raw.replace(/\/+$/, "")
  }
  return "https://www.derejeseifu.com"
}

export const SITE_FULL_NAME = "Dereje Seifu"

export const SITE_DEFAULT_TITLE =
  "Dereje Seifu — Healthcare AI Systems Architect & Software Architect"

export const SITE_DEFAULT_DESCRIPTION =
  "Healthcare AI Systems Architect specializing in HIPAA-conscious AI Agents, RAG Pipelines, EHR/FHIR Integrations, and Enterprise Medical SaaS platforms. I design and ship production-ready clinical and enterprise AI products."

/** Absolute URL for a path on this site (path must start with `/`). */
export function absoluteUrl(path: string): string {
  const base = getSiteUrl()
  if (!path || path === "/") return base
  const p = path.startsWith("/") ? path : `/${path}`
  return `${base}${p}`
}

export const SITE_SAME_AS = [
  PROFILE_LINKEDIN,
  PROFILE_UPWORK,
  "https://t.me/derejeseifu",
  "https://wa.me/251966016473",
] as const

export function buildRootMetadataVerification(): { google?: string } | undefined {
  const token = process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION
  if (typeof token === "string" && token.trim().length > 0) {
    return { google: token.trim() }
  }
  return undefined
}
