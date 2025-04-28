"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ChevronRight, ExternalLink, Github } from "lucide-react"
import Image from "next/image"
import { HoverScale } from "./animations"

interface ProjectCardProps {
  title: string
  description: string
  image: string
  link?: string
  github?: string
  technologies: string[]
}

export function ProjectCard({ title, description, image, link, github, technologies }: ProjectCardProps) {
  return (
    <HoverScale scale={1.02}>
      <Card className="overflow-hidden border border-zinc-200 dark:border-zinc-800 h-full">
        <div className="relative h-48 overflow-hidden group">
          <Image
            src={image || "/placeholder.svg"}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

          <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
            <div className="flex gap-2">
              {link && (
                <Button size="sm" variant="secondary" className="rounded-full" asChild>
                  <a href={link} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="h-4 w-4 mr-1" />
                    Visit
                  </a>
                </Button>
              )}
              {github && (
                <Button size="sm" variant="outline" className="rounded-full bg-white/80 hover:bg-white" asChild>
                  <a href={github} target="_blank" rel="noopener noreferrer">
                    <Github className="h-4 w-4 mr-1" />
                    Code
                  </a>
                </Button>
              )}
            </div>
          </div>
        </div>

        <CardContent className="p-6">
          <h3 className="text-xl font-semibold mb-2">{title}</h3>
          <p className="text-zinc-600 dark:text-zinc-400 mb-4 line-clamp-3">{description}</p>

          <div className="flex flex-wrap gap-2 mt-auto">
            {technologies.map((tech, index) => (
              <Badge
                key={index}
                variant="secondary"
                className="bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200"
              >
                {tech}
              </Badge>
            ))}
          </div>

          {link && (
            <div className="mt-4">
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-emerald-600 dark:text-emerald-400 hover:underline flex items-center text-sm font-medium"
              >
                Learn more about this project
                <ChevronRight className="h-4 w-4 ml-1" />
              </a>
            </div>
          )}
        </CardContent>
      </Card>
    </HoverScale>
  )
}
