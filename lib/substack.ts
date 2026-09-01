export interface SubstackPost {
  slug: string
  title: string
  excerpt: string
  link: string
  pubDate: string
  readingTime: string
  category: string
  coverImage?: string
  contentHtml?: string
}

export const SUBSTACK_URL = "https://builtforprod.substack.com"
export const SUBSTACK_RSS_URL = "https://builtforprod.substack.com/feed"

export const FALLBACK_POSTS: SubstackPost[] = [
  {
    slug: "the-silent-data-leak-in-healthtech",
    title: "The Silent Data Leak in HealthTech: Why Application-Level Security Fails Founders",
    excerpt:
      "When building a digital health platform or multi-tenant SaaS company, data security is not just an engineering checklist item; it is a core business asset.",
    link: "https://builtforprod.substack.com/p/the-silent-data-leak-in-healthtech",
    pubDate: "Jul 21, 2026",
    readingTime: "6 min read",
    category: "HIPAA Security",
    coverImage:
      "https://substackcdn.com/image/fetch/$s_!qtoy!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F3b2f0c88-4ab7-4ea6-aab6-c28eba7ba66d_1024x1024.png",
  },
  {
    slug: "the-hipaa-compliance-bottleneck-why",
    title: "The HIPAA Compliance Bottleneck: Why I Built an Open-Source Security Envelope on AWS",
    excerpt:
      "How digital health startups waste months on infrastructure, the hidden security gotchas of default AWS services, and how to automate compliance using hardened Terraform blueprints.",
    link: "https://builtforprod.substack.com/p/the-hipaa-compliance-bottleneck-why",
    pubDate: "Jun 26, 2026",
    readingTime: "5 min read",
    category: "AWS Infrastructure",
    coverImage:
      "https://substackcdn.com/image/fetch/$s_!mqqE!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F90f2e0e4-1b00-4231-9383-ea816b8c7760_828x552.png",
  },
  {
    slug: "why-serverless-ai-inference-made",
    title: "Why Serverless AI Inference Made Sense for a Healthcare Workload (And Where It Created Problems)",
    excerpt:
      "When I was designing the AI inference pipeline for a healthcare platform I was leading, the choice between running a persistent server and going serverless came down to demand variability.",
    link: "https://builtforprod.substack.com/p/why-serverless-ai-inference-made",
    pubDate: "May 22, 2026",
    readingTime: "7 min read",
    category: "Healthcare AI",
    coverImage:
      "https://substackcdn.com/image/fetch/$s_!chSu!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F2c2d5962-c3f4-4fc8-8b58-bd1affdb1eee_1424x736.png",
  },
  {
    slug: "how-i-reduced-aws-costs-by-50-on",
    title: "How I Reduced AWS Costs by 50% on a Production Healthcare AI System",
    excerpt:
      "The healthcare AI platform I was working on had been running in production for several months. Here is how we halved cloud infrastructure spend without degrading performance.",
    link: "https://builtforprod.substack.com/p/how-i-reduced-aws-costs-by-50-on",
    pubDate: "May 20, 2026",
    readingTime: "6 min read",
    category: "Cloud Optimization",
    coverImage:
      "https://substackcdn.com/image/fetch/$s_!fwub!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fe4da355a-5727-4ff3-b024-e957f7d5d2e5_1640x924.png",
  },
]

export async function getSubstackPosts(): Promise<SubstackPost[]> {
  try {
    const res = await fetch(SUBSTACK_RSS_URL, {
      next: { revalidate: 3600 },
      headers: {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
        Accept: "application/rss+xml, application/xml, text/xml, */*",
      },
    })
    if (!res.ok) return FALLBACK_POSTS
    const xml = await res.text()

    const itemRegex = /<item>([\s\S]*?)<\/item>/g
    const items: SubstackPost[] = []
    let match: RegExpExecArray | null

    while ((match = itemRegex.exec(xml)) !== null) {
      const itemContent = match[1]

      const titleMatch = itemContent.match(/<title><!\[CDATA\[([\s\S]*?)\]\]><\/title>/) || itemContent.match(/<title>([\s\S]*?)<\/title>/)
      const linkMatch = itemContent.match(/<link>([\s\S]*?)<\/link>/)
      const descMatch = itemContent.match(/<description><!\[CDATA\[([\s\S]*?)\]\]><\/description>/) || itemContent.match(/<description>([\s\S]*?)<\/description>/)
      const dateMatch = itemContent.match(/<pubDate>([\s\S]*?)<\/pubDate>/)
      const imgMatch =
        itemContent.match(/<enclosure[^>]+url="([^"]+)"/) ||
        itemContent.match(/url="([^"]+substackcdn\.com\/image\/fetch\/[^"]+)"/) ||
        itemContent.match(/<img[^>]+src="([^"]+substackcdn\.com\/image\/fetch\/[^"]+)"/)

      const contentMatch =
        itemContent.match(/<content:encoded><!\[CDATA\[([\s\S]*?)\]\]><\/content:encoded>/) ||
        itemContent.match(/<content:encoded>([\s\S]*?)<\/content:encoded>/)
      const contentHtml = contentMatch ? contentMatch[1].trim() : ""

      const link = linkMatch ? linkMatch[1].trim() : ""
      const slug = link ? link.replace(/.*\/p\//, "").replace(/\/$/, "") : ""

      if (titleMatch && link && slug) {
        const rawDate = dateMatch ? dateMatch[1] : ""
        let formattedDate = ""
        if (rawDate) {
          try {
            formattedDate = new Date(rawDate).toLocaleDateString("en-US", {
              month: "short",
              day: "numeric",
              year: "numeric",
            })
          } catch {
            formattedDate = rawDate
          }
        }

        const rawDesc = descMatch ? descMatch[1].replace(/<[^>]*>/g, "").trim() : ""

        items.push({
          slug,
          title: titleMatch[1].trim(),
          excerpt: rawDesc,
          link,
          pubDate: formattedDate || "Recent",
          readingTime: "5 min read",
          category:
            slug.includes("healthtech") || slug.includes("hipaa")
              ? "HIPAA Security"
              : slug.includes("serverless") || slug.includes("ai")
              ? "Healthcare AI"
              : "AWS Infrastructure",
          coverImage: imgMatch ? imgMatch[1] : undefined,
          contentHtml: contentHtml || undefined,
        })
      }
    }

    return items.length > 0 ? items : FALLBACK_POSTS
  } catch {
    return FALLBACK_POSTS
  }
}

export async function getPostBySlug(slug: string): Promise<SubstackPost | undefined> {
  const posts = await getSubstackPosts()
  const found = posts.find(p => p.slug === slug)
  return found || FALLBACK_POSTS.find(p => p.slug === slug)
}
