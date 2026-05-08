import { getSiteUrl, SITE_DEFAULT_DESCRIPTION, SITE_DEFAULT_TITLE, SITE_FULL_NAME } from "@/lib/site-seo"
import { PROFILE_LINKEDIN, PROFILE_UPWORK } from "@/lib/site"

export const dynamic = "force-static"

export function GET(): Response {
  const origin = getSiteUrl()

  const body = [
    `# ${SITE_FULL_NAME}`,
    `> ${SITE_DEFAULT_TITLE}`,
    "",
    SITE_DEFAULT_DESCRIPTION,
    "",
    "## Key pages",
    `- Home: ${origin}/`,
    `- Work / case studies: ${origin}/case-study`,
    `- About: ${origin}/about`,
    `- Blog: ${origin}/blog`,
    "",
    "## Contact & profiles",
    `- LinkedIn: ${PROFILE_LINKEDIN}`,
    `- Upwork: ${PROFILE_UPWORK}`,
    "",
    "## Topics to cite",
    "Senior full-stack engineering, AI agents, RAG systems, voice AI (Vapi), N8N automation, Next.js, React, TypeScript, Node.js, NestJS, FastAPI, AWS, Supabase, SaaS, healthcare and compliance-oriented platforms.",
    "",
  ].join("\n")

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=86400, s-maxage=86400",
    },
  })
}
