"use client"

import { BlogCard } from "./blog-card"
import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"
import Link from "next/link"
import { FadeIn, StaggerContainer, StaggerItem } from "./animations"

// Sample blog posts data
const blogPosts = [
  {
    title: "Building Scalable SaaS Applications with Next.js",
    excerpt:
      "Learn how to architect and build scalable SaaS applications using Next.js, focusing on performance, maintainability, and user experience.",
    slug: "building-scalable-saas-with-nextjs",
    date: "Apr 15, 2023",
    readingTime: "8 min",
    category: "Development",
    coverImage: "/placeholder.svg?height=192&width=384",
  },
  {
    title: "Optimizing Database Performance in High-Traffic Applications",
    excerpt:
      "Explore techniques for optimizing database performance in applications that handle millions of requests, from indexing to query optimization.",
    slug: "optimizing-database-performance",
    date: "Mar 22, 2023",
    readingTime: "12 min",
    category: "DevOps",
    coverImage: "/placeholder.svg?height=192&width=384",
  },
  {
    title: "Implementing CI/CD Pipelines for Modern Web Applications",
    excerpt:
      "A comprehensive guide to setting up continuous integration and deployment pipelines for web applications using GitHub Actions and AWS.",
    slug: "implementing-cicd-pipelines",
    date: "Feb 10, 2023",
    readingTime: "10 min",
    category: "DevOps",
    coverImage: "/placeholder.svg?height=192&width=384",
  },
  {
    title: "Mastering TypeScript: Advanced Patterns and Best Practices",
    excerpt:
      "Dive deep into advanced TypeScript patterns, including generics, utility types, and architectural patterns for large-scale applications.",
    slug: "mastering-typescript-advanced-patterns",
    date: "Jan 5, 2023",
    readingTime: "15 min",
    category: "Development",
    coverImage: "/placeholder.svg?height=192&width=384",
  },
  {
    title: "Building Responsive and Accessible UI Components",
    excerpt:
      "Learn how to create UI components that are both responsive across devices and accessible to all users, following WCAG guidelines.",
    slug: "building-responsive-accessible-ui",
    date: "Dec 12, 2022",
    readingTime: "7 min",
    category: "UI/UX",
    coverImage: "/placeholder.svg?height=192&width=384",
  },
  {
    title: "Microservices vs. Monoliths: Choosing the Right Architecture",
    excerpt:
      "An in-depth comparison of microservices and monolithic architectures, with guidelines on when to choose each approach.",
    slug: "microservices-vs-monoliths",
    date: "Nov 28, 2022",
    readingTime: "11 min",
    category: "Architecture",
    coverImage: "/placeholder.svg?height=192&width=384",
  },
]

export function BlogSection() {
  return (
    <section id="blog" className="py-16 scroll-mt-20">
      <div className="container">
        <FadeIn>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Tech Blog</h2>
            <p className="text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
              Sharing my thoughts, experiences, and technical insights on software development, DevOps, and technology.
            </p>
          </div>
        </FadeIn>

        <StaggerContainer className="blog-grid">
          {blogPosts.slice(0, 6).map((post, index) => (
            <StaggerItem key={index}>
              <BlogCard {...post} />
            </StaggerItem>
          ))}
        </StaggerContainer>

        <div className="mt-12 text-center">
          <Link href="/blog">
            <Button className="gaming-button group">
              View All Posts
              <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
