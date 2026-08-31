/** Set `NEXT_PUBLIC_HIRE_URL` in `.env` (e.g. Upwork profile). Defaults to site contact. */
export const HIRE_URL =
  typeof process.env.NEXT_PUBLIC_HIRE_URL === "string" && process.env.NEXT_PUBLIC_HIRE_URL.length > 0
    ? process.env.NEXT_PUBLIC_HIRE_URL
    : "/#contact"

export function isExternalUrl(href: string) {
  return /^https?:\/\//i.test(href)
}

/** Public profiles, trust pill, contact, footer */
export const PROFILE_LINKEDIN =
  typeof process.env.NEXT_PUBLIC_LINKEDIN_URL === "string" && process.env.NEXT_PUBLIC_LINKEDIN_URL.length > 0
    ? process.env.NEXT_PUBLIC_LINKEDIN_URL
    : "https://www.linkedin.com/in/drjseifu1991/"

export const PROFILE_UPWORK =
  typeof process.env.NEXT_PUBLIC_UPWORK_URL === "string" && process.env.NEXT_PUBLIC_UPWORK_URL.length > 0
    ? process.env.NEXT_PUBLIC_UPWORK_URL
    : "https://www.upwork.com/freelancers/~016aa40f9af9ae5cd8"

export const CALENDLY_URL = "https://calendly.com/derejeseifu3030/30min"
