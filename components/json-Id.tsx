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
    jobTitle: "Healthcare AI Systems Architect",
    description: SITE_DEFAULT_DESCRIPTION,
    image: `${siteUrl}/images/profile.jpeg`,
    email: "Derejeseifu3030@gmail.com",
    telephone: "+251966016473",
    sameAs: [...SITE_SAME_AS],
    knowsAbout: [
      "Healthcare AI",
      "HIPAA Compliance",
      "EHR/FHIR R4",
      "AI agents",
      "Retrieval augmented generation",
      "Medical teleguidance",
      "Next.js",
      "React",
      "TypeScript",
      "Node.js",
      "FastAPI",
      "AWS",
      "PostgreSQL",
      "Database Security & Row-Level Isolation",
      "Docker",
      "CI/CD",
      "DevOps",
      "Systems design",
      "Voice AI",
      "LangGraph",
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
    name: `${SITE_FULL_NAME} — Healthcare AI Systems Architect & Software Architect`,
    description: "Portfolio showcasing Healthcare AI projects, HIPAA-compliant architectures, case studies, and engineering services.",
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
    name: `${SITE_FULL_NAME} — Healthcare AI & Software Architecture Consulting`,
    url: siteUrl,
    description:
      "Healthcare AI systems architecture: HIPAA-compliant RAG, AI agents, FHIR/EHR integrations, medical teleguidance, cloud security, and enterprise SaaS platforms.",
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
