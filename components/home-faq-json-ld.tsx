import { SITE_FAQ_ITEMS } from "@/lib/faq-content"
import { getSiteUrl } from "@/lib/site-seo"

export function HomeFaqJsonLd() {
  const pageUrl = getSiteUrl()

  const faqPage = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${pageUrl}/#faq`,
    mainEntity: SITE_FAQ_ITEMS.map(item => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  }

  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPage) }} />
  )
}
