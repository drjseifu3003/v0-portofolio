import type { Metadata } from "next"
import type { CSSProperties } from "react"
import Link from "next/link"
import { CaseStudyImageViewer } from "@/components/case-study-image-viewer"
import { notFound } from "next/navigation"
import type { Metric, Study } from "../data"
import { getStudyBySlug, studies } from "../data"
import { SiteFooter } from "@/components/site-footer"
import { OtherCaseStudiesSection } from "@/components/other-case-studies-section"
import { SiteHeader, SITE_HEADER_H } from "@/components/site-header"
import styles from "@/app/case-study/case-study-sp.module.css"
import { TrafficChartSvg } from "@/app/case-study/traffic-chart-svg"

import { getSiteUrl } from "@/lib/site-seo"

function ogImageForStudy(image: string | undefined, origin: string): string | undefined {
  if (!image) return undefined
  if (/^https?:\/\//i.test(image)) return image
  const path = image.startsWith("/") ? image : `/${image}`
  return `${origin}${path}`
}

function chunkMetrics<T>(arr: T[], size: number): T[][] {
  const out: T[][] = []
  for (let i = 0; i < arr.length; i += size) out.push(arr.slice(i, i + size))
  return out
}

function formatEyebrow(tag: string) {
  return tag.includes(" - ") ? tag.replace(/\s-\s/, " · ") : tag
}

function estimateReadMinutes(study: Study): number {
  const blob = [
    study.title,
    study.subtitle,
    ...study.overview,
    ...study.problem,
    ...study.whyItMattered,
    ...study.whatIBuilt,
    ...study.resultBullets,
    study.testimonial,
    ...(study.whatsNext ?? []),
  ].join(" ")
  const words = blob.trim().split(/\s+/).filter(Boolean).length
  return Math.max(4, Math.round(words / 200))
}



function StatGridRows({ metricRows }: { metricRows: Metric[][] }) {
  return (
    <>
      {metricRows.map((row, i) => (
        <div key={String(i)} className={`${styles.statGrid} ${i > 0 ? styles.statGridTight : ""}`}>
          {row.map(m => (
            <div key={m.label} className={styles.statCell}>
              <div className={styles.statCellVal}>{m.value}</div>
              <div className={styles.statCellLabel}>{m.label}</div>
            </div>
          ))}
        </div>
      ))}
    </>
  )
}

export async function generateStaticParams() {
  return studies.map(study => ({ slug: study.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const study = getStudyBySlug(slug)
  const origin = getSiteUrl()

  if (!study) {
    return {
      title: "Case Study Not Found",
    }
  }

  const url = `${origin}/case-study/${slug}`
  const ogImage = ogImageForStudy(study.image, origin)
  const twitterImages = ogImage ? [ogImage] : []

  return {
    title: study.title,
    description: study.subtitle,
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      url,
      title: study.title,
      description: study.subtitle,
      siteName: "Dereje Seifu",
      locale: "en_US",
      ...(ogImage ? { images: [{ url: ogImage, width: 1200, height: 630, alt: study.title }] } : {}),
      ...(study.publishedAt && /^\d{4}-\d{2}-\d{2}$/.test(study.publishedAt)
        ? { publishedTime: `${study.publishedAt}T12:00:00Z` }
        : {}),
    },
    twitter: {
      card: "summary_large_image",
      title: study.title,
      description: study.subtitle,
      ...(twitterImages.length ? { images: twitterImages } : {}),
    },
  }
}

export default async function CaseStudyDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const study = getStudyBySlug(slug)

  if (!study) notFound()

  const eyebrow = formatEyebrow(study.tag)
  const readMin = estimateReadMinutes(study)
  const metricRows = chunkMetrics(study.results, 4)
  const chartLead = study.results.slice(0, 3)
  const insightsTitle = study.insightsSection?.title ?? "Beyond The Headline Metrics"
  const insightsParas = study.insightsSection?.paragraphs ?? study.resultBullets
  const galleryUrls = study.gallery?.length ? study.gallery : study.image ? [study.image] : []

  const vars = {
    "--site-header-h": `${SITE_HEADER_H}px`,
  } as CSSProperties

  const origin = getSiteUrl()
  const articleUrl = `${origin}/case-study/${study.slug}`
  const heroImage = ogImageForStudy(study.image, origin)
  const dateIso =
    study.publishedAt && /^\d{4}-\d{2}-\d{2}$/.test(study.publishedAt) ? `${study.publishedAt}T12:00:00Z` : undefined

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: study.title,
    description: study.subtitle,
    author: { "@type": "Person", name: "Dereje Seifu" },
    publisher: {
      "@type": "Organization",
      name: "Dereje Seifu",
    },
    ...(heroImage ? { image: [heroImage] } : {}),
    ...(dateIso ? { datePublished: dateIso, dateModified: dateIso } : {}),
    mainEntityOfPage: { "@type": "WebPage", "@id": articleUrl },
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className={styles.page} style={vars}>
        <SiteHeader />

        <div className={styles.wrap} style={{ paddingTop: SITE_HEADER_H }}>
          <div className={styles.backRow}>
            <Link href="/case-study" className={styles.backLink}>
              ← My work
            </Link>
          </div>

          <div className={styles.caseStudyMain}>
          <div className={styles.mainColumn}>
              <div className={styles.main}>
              <article itemScope itemType="https://schema.org/Article">
                <meta itemProp="headline" content={study.title} />
                <meta itemProp="description" content={study.subtitle} />

                <header className={styles.masthead}>
                  <p className={styles.tag}>{eyebrow}</p>

                  <h1 className={styles.h1}>{study.title}</h1>

                  <p className={styles.subtitle}>{study.subtitle}</p>

                  <div className={styles.meta}>
                    <span>Dereje Seifu</span>
                    <span aria-hidden="true">·</span>
                    <span>{readMin} min read</span>
                    {study.publishedAt ? (
                      <>
                        <span aria-hidden="true">·</span>
                        <span>{study.publishedAt}</span>
                      </>
                    ) : null}
                  </div>
                </header>

                <div className={styles.articleSheet}>
                  {galleryUrls.length > 0 ? <CaseStudyImageViewer images={galleryUrls} /> : null}

                  <div className={styles.prose}>
                  <section id="intro" aria-labelledby="intro-heading">
                    <h2 id="intro-heading">Intro</h2>
                    {study.overview.map(p => (
                      <p key={p}>{p}</p>
                    ))}
                  </section>

                  <section id="numbers" aria-labelledby="numbers-heading">
                    <h2 id="numbers-heading">The Numbers</h2>
                    <StatGridRows metricRows={metricRows} />
                  </section>

                  <section id="impact" aria-labelledby="impact-heading">
                    <h2 id="impact-heading" className="sr-only">
                      Impact
                    </h2>
                    <div className={styles.chartBlock}>
                      <div className={styles.chartHeader}>
                        <div>
                          <div className={styles.chartTitle}>{study.chartTitle ?? "Engagement · delivery window"}</div>
                        </div>
                        <div className={styles.chartMetrics}>
                          {chartLead.map(m => (
                            <div key={m.label}>
                              <div className={styles.chartMetricVal}>{m.value}</div>
                              <div className={styles.chartMetricLabel}>{m.label}</div>
                            </div>
                          ))}
                        </div>
                      </div>
                      <TrafficChartSvg variant="light" />
                      <div className={styles.chartCaption}>
                        {study.chartCaption ??
                          "Momentum concentrates once instrumentation, deduplication, and structured outputs are tightened, not merely when the prototype looks good."}
                      </div>
                    </div>
                  </section>

                  <section id="opportunity" aria-labelledby="opportunity-heading">
                    <h2 id="opportunity-heading">What Made This a Good Bet</h2>
                    {study.problem.map(p => (
                      <p key={p}>{p}</p>
                    ))}

                    {study.callout ? (
                      <div className={styles.callout}>
                        <p>{study.callout}</p>
                      </div>
                    ) : null}

                    {study.whyItMattered.map(p => (
                      <p key={p}>{p}</p>
                    ))}
                  </section>

                  {study.timeline && study.timeline.length > 0 ? (
                    <section id="timeline" aria-labelledby="timeline-heading">
                      <h2 id="timeline-heading">The Build Timeline</h2>
                      <div className={styles.timeline}>
                        {study.timeline.map((step, idx) => {
                          const last = idx === study.timeline!.length - 1
                          return (
                            <div key={`${study.slug}-${step.period}-${step.title}`} className={styles.timelineItem}>
                              <div className={`${styles.timelineDot} ${last ? "" : styles.timelineDotFilled}`} />
                              <div className={styles.timelineDate}>{step.period}</div>
                              <div className={styles.timelineEvent}>{step.title}</div>
                              <div className={styles.timelineDetail}>{step.body}</div>
                            </div>
                          )
                        })}
                      </div>
                    </section>
                  ) : null}

                  <section id="delivery" aria-labelledby="delivery-heading">
                    <h2 id="delivery-heading">What I Built</h2>
                    {study.whatIBuilt.map(p => (
                      <p key={p}>{p}</p>
                    ))}
                  </section>

                  <section id="stack" aria-labelledby="stack-heading">
                    <h2 id="stack-heading">The Stack</h2>
                    {study.stackIntro ? <p>{study.stackIntro}</p> : null}

                    <div className={styles.stackGrid}>
                      {study.stack.map(item => (
                        <div key={`${study.slug}-${item.layer}`} className={styles.stackCell}>
                          <div className={styles.stackLayer}>{item.layer}</div>
                          <div className={styles.stackTech}>{item.tech}</div>
                          {item.description ? <div className={styles.stackDesc}>{item.description}</div> : null}
                        </div>
                      ))}
                    </div>
                  </section>

                  {study.compliance && study.compliance.length > 0 ? (
                    <section id="compliance" aria-labelledby="compliance-heading">
                      <h2 id="compliance-heading">Compliance &amp; Data Security</h2>
                      {study.compliance.map(p => (
                        <p key={p}>{p}</p>
                      ))}
                    </section>
                  ) : null}

                  <section id="insights" aria-labelledby="insights-heading">
                    <h2 id="insights-heading">{insightsTitle}</h2>
                    {insightsParas.map(p => (
                      <p key={p}>{p}</p>
                    ))}
                  </section>

                  <section id="testimonial" aria-labelledby="testimonial-heading">
                    <h2 id="testimonial-heading" className="sr-only">
                      Proof
                    </h2>
                    <div className={styles.callout}>
                      <p>&ldquo;{study.testimonial}&rdquo;</p>
                    </div>
                  </section>

                  {study.whatsNext && study.whatsNext.length > 0 ? (
                    <section id="next" aria-labelledby="next-heading">
                      <h2 id="next-heading">What&apos;s Next</h2>
                      {study.whatsNext.map(p => (
                        <p key={p}>{p}</p>
                      ))}
                    </section>
                  ) : null}
                  </div>
                </div>
              </article>
            </div>
          </div>
        </div>

        <OtherCaseStudiesSection excludeSlug={study.slug} />
        </div>

        <SiteFooter />
      </div>
    </>
  )
}
