"use client"

import { HoverScale } from "./animations"
import { CalendarDays, Clock, Tag } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

interface BlogCardProps {
  title: string
  excerpt: string
  slug: string
  date: string
  readingTime: string
  category: string
  coverImage?: string
}

export function BlogCard({ title, excerpt, slug, date, readingTime, category, coverImage }: BlogCardProps) {
  return (
    <HoverScale scale={1.02}>
      <Link href={`/blog/${slug}`} className="block h-full">
        <article className="notion-card h-full flex flex-col">
          {coverImage && (
            <div className="relative h-48 w-full">
              <Image src={coverImage || "/placeholder.svg"} alt={title} fill className="object-cover" />
            </div>
          )}
          <div className="p-5 flex flex-col flex-grow">
            <h3 className="notion-title">{title}</h3>
            <p className="notion-content line-clamp-3 flex-grow">{excerpt}</p>
            <div className="notion-meta">
              <span className="flex items-center">
                <CalendarDays className="h-3 w-3 mr-1" />
                {date}
              </span>
              <span className="flex items-center">
                <Clock className="h-3 w-3 mr-1" />
                {readingTime}
              </span>
              <span className="flex items-center ml-auto">
                <Tag className="h-3 w-3 mr-1" />
                {category}
              </span>
            </div>
          </div>
        </article>
      </Link>
    </HoverScale>
  )
}
