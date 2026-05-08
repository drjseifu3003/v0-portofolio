/**
 * JSON-LD for sitewide entities (Person, WebSite, ProfilePage, ProfessionalService).
 * Home-only FAQPage is emitted from `HomeFaqJsonLd` so it matches visible FAQ content.
 */

import { getSiteUrl, SITE_DEFAULT_DESCRIPTION, SITE_FULL_NAME, SITE_SAME_AS } from "@/lib/site-seo"
import { PROFILE_UPWORK } from "@/lib/site"

export function JsonLd() {
  const siteUrl = getSiteUrl()
  const year = new Date().getFullYear()

  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${siteUrl}/#person`,
    name: SITE_FULL_NAME,
    url: siteUrl,
    jobTitle: "Senior Full-Stack Engineer",
    description: SITE_DEFAULT_DESCRIPTION,
    image: `${siteUrl}/images/profile.jpeg`,
    email: "Derejeseifu3030@gmail.com",
    telephone: "+251966016473",
    sameAs: [...SITE_SAME_AS],
    knowsAbout: [
      "Next.js",
      "React",
      "TypeScript",
      "Node.js",
      "NestJS",
      "FastAPI",
      "AWS",
      "PostgreSQL",
      "Supabase",
      "Docker",
      "CI/CD",
      "DevOps",
      "Full-Stack Development",
      "Systems design",
      "AI agents",
      "Retrieval augmented generation",
      "Voice AI",
      "LangChain",
      "SaaS architecture",
    ],
    alumniOf: {
      "@type": "Organization",
      name: "Addis Ababa University",
    },
    nationality: {
      "@type": "Country",
      name: "Ethiopia",
    },
  }

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteUrl}/#website`,
    url: siteUrl,
    name: `${SITE_FULL_NAME} — Portfolio`,
    description: SITE_DEFAULT_DESCRIPTION,
    publisher: {
      "@id": `${siteUrl}/#person`,
    },
    inLanguage: "en-US",
    copyrightYear: year,
  }

  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "@id": `${siteUrl}/#webpage`,
    url: siteUrl,
    name: `${SITE_FULL_NAME}, Senior Full-Stack Engineer & AI Engineer`,
    description: "Portfolio showcasing projects, case studies, testimonials, and engineering services.",
    isPartOf: {
      "@id": `${siteUrl}/#website`,
    },
    about: {
      "@id": `${siteUrl}/#person`,
    },
    dateModified: new Date().toISOString(),
    inLanguage: "en-US",
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: siteUrl,
        },
      ],
    },
  }

  const professionalServiceSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${siteUrl}/#service`,
    name: `${SITE_FULL_NAME}, Freelance Software & AI Engineering`,
    url: siteUrl,
    description:
      "Freelance full-stack and AI engineering: web apps, AI agents, RAG, voice automation, APIs, cloud infrastructure, and production SaaS.",
    provider: {
      "@id": `${siteUrl}/#person`,
    },
    serviceType: "Software Development",
    areaServed: "Worldwide",
    availableChannel: {
      "@type": "ServiceChannel",
      serviceUrl: PROFILE_UPWORK,
      servicePhone: "+251966016473",
      serviceSmsNumber: "+251966016473",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Engineering Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "AI agents, RAG & Voice",
            description: "Design and implementation of AI agents, RAG pipelines, voice (Vapi) experiences, and workflow automation (N8N).",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Full-Stack Web Applications",
            description: "End-to-end delivery with Next.js, React, TypeScript, Node.js/NestJS, and PostgreSQL/Supabase.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Cloud, DevOps & SaaS",
            description: "AWS infrastructure, CI/CD, Docker, secure APIs, and scalable SaaS architecture.",
          },
        },
      ],
    },
  }

  const schemas = [personSchema, websiteSchema, webPageSchema, professionalServiceSchema]

  return (
    <>
      {schemas.map((schema, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      ))}
    </>
  )
}
