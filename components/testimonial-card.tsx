"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Quote } from "lucide-react"
import { HoverScale } from "./animations"

interface TestimonialProps {
  content: string
  author: {
    name: string
    role: string
    company: string
    image?: string
  }
  connectionDegree?: number
}

export function TestimonialCard({ content, author, connectionDegree = 1 }: TestimonialProps) {
  return (
    <HoverScale>
      <Card className="h-full overflow-hidden border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950">
        <CardContent className="p-6 flex flex-col h-full">
          <div className="flex items-start mb-4">
            <Avatar className="h-12 w-12 border-2 border-zinc-100 dark:border-zinc-800">
              <AvatarImage src={author.image || "/placeholder.svg?height=48&width=48"} alt={author.name} />
              <AvatarFallback>{author.name.charAt(0)}</AvatarFallback>
            </Avatar>
            <div className="ml-4">
              <h4 className="font-semibold text-base">{author.name}</h4>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">{author.role}</p>
              <p className="text-sm text-zinc-500 dark:text-zinc-500">{author.company}</p>
            </div>
            
          </div>
          <div className="relative flex-1">
            <Quote className="absolute text-zinc-200 dark:text-zinc-800 h-8 w-8 -left-1 -top-1 opacity-50" />
            <div className="pl-4 pt-2 text-zinc-700 dark:text-zinc-300 text-sm leading-relaxed">{content}</div>
          </div>
        </CardContent>
      </Card>
    </HoverScale>
  )
}
