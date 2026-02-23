/**
 * JsonLd — injects structured data (JSON-LD) into <head>
 *
 * Place <JsonLd /> inside your root layout or page (server component).
 * Google uses this to power rich results, knowledge panels, and search features.
 */

const SITE_URL  = "https://www.derejeseifu.com"
const FULL_NAME = "Dereje Seifu"

const personSchema = {
  "@context":   "https://schema.org",
  "@type":       "Person",
  "@id":         `${SITE_URL}/#person`,
  name:          FULL_NAME,
  url:           SITE_URL,
  jobTitle:      "Senior Full-Stack Engineer",
  description:   "Senior Full-Stack Engineer specialising in Next.js, React, TypeScript, Node.js, and AWS. Helping startups and product teams ship reliable software.",
  image:         `${SITE_URL}/images/profile.jpeg`,
  email:         "Derejeseifu3030@gmail.com",
  telephone:     "+251966016473",
  sameAs: [
    "https://www.linkedin.com/in/drjseifu1991/",
    "https://www.upwork.com/freelancers/~dereje",
    "https://t.me/derejeseifu",
    "https://wa.me/251966016473",
  ],
  knowsAbout: [
    "Next.js",
    "React",
    "TypeScript",
    "Node.js",
    "AWS",
    "PostgreSQL",
    "Supabase",
    "Docker",
    "CI/CD",
    "DevOps",
    "Full-Stack Development",
    "Software Architecture",
  ],
  alumniOf: {
    "@type": "Organization",
    name:    "Addis Ababa University",
  },
  nationality: {
    "@type": "Country",
    name:    "Ethiopia",
  },
}

const websiteSchema = {
  "@context":       "https://schema.org",
  "@type":           "WebSite",
  "@id":             `${SITE_URL}/#website`,
  url:               SITE_URL,
  name:              FULL_NAME,
  description:       "Portfolio of Dereje Seifu — Senior Full-Stack Engineer",
  publisher: {
    "@id": `${SITE_URL}/#person`,
  },
  inLanguage: "en-US",
  copyrightYear: new Date().getFullYear(),
}

const webPageSchema = {
  "@context":    "https://schema.org",
  "@type":        "ProfilePage",
  "@id":          `${SITE_URL}/#webpage`,
  url:            SITE_URL,
  name:           `${FULL_NAME} — Senior Full-Stack Engineer`,
  description:    "Portfolio showcasing projects, testimonials, and engineering services by Dereje Seifu.",
  isPartOf: {
    "@id": `${SITE_URL}/#website`,
  },
  about: {
    "@id": `${SITE_URL}/#person`,
  },
  dateModified: new Date().toISOString(),
  inLanguage:   "en-US",
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type":    "ListItem",
        position:   1,
        name:       "Home",
        item:       SITE_URL,
      },
    ],
  },
}

const professionalServiceSchema = {
  "@context":    "https://schema.org",
  "@type":        "ProfessionalService",
  "@id":          `${SITE_URL}/#service`,
  name:           `${FULL_NAME} — Freelance Software Engineering`,
  url:            SITE_URL,
  description:    "Freelance full-stack engineering services including web application development, SaaS products, API design, cloud infrastructure, and CI/CD implementation.",
  provider: {
    "@id": `${SITE_URL}/#person`,
  },
  serviceType:   "Software Development",
  areaServed:    "Worldwide",
  availableChannel: {
    "@type":        "ServiceChannel",
    serviceUrl:     "https://www.upwork.com/freelancers/~dereje",
    servicePhone:   "+251966016473",
    serviceSmsNumber: "+251966016473",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name:    "Engineering Services",
    itemListElement: [
      {
        "@type":       "Offer",
        itemOffered: {
          "@type":       "Service",
          name:          "Full-Stack Web Application Development",
          description:   "End-to-end development of web applications using Next.js, React, TypeScript, and Node.js.",
        },
      },
      {
        "@type":       "Offer",
        itemOffered: {
          "@type":       "Service",
          name:          "Cloud Infrastructure & DevOps",
          description:   "AWS infrastructure setup, CI/CD pipelines, Docker containerisation, and deployment automation.",
        },
      },
      {
        "@type":       "Offer",
        itemOffered: {
          "@type":       "Service",
          name:          "SaaS Product Engineering",
          description:   "Architecture design and implementation of scalable SaaS products with Supabase, PostgreSQL, and Stripe.",
        },
      },
    ],
  },
}

export function JsonLd() {
  const schemas = [
    personSchema,
    websiteSchema,
    webPageSchema,
    professionalServiceSchema,
  ]

  return (
    <>
      {schemas.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema, null, 0) }}
        />
      ))}
    </>
  )
}
