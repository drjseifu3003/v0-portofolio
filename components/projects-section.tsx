"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, ExternalLink, Github } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"

interface ProjectCardProps {
  title: string
  description: string
  image: string
  link?: string
  github?: string
  technologies: string[]
  results?: string[]
  businessImpact?: string
}

const projects: ProjectCardProps[] = [
  {
    title: "IntuitySync AI",
    description:
      "A social media automation platform that automates posting, scheduling, analytics, reporting, and content generation (captions, images, videos) using AI.",
    image: "/images/intuitysync.png",
    link: "https://www.intuitysync.com/",
    technologies: ["Next.js", "N8N", "Supabase", "AI", "OpenAI", "Stripe", "AWS"],
    results: [
      "Led frontend development and delivered MVP within 3 months.",
      "Integrated AI for content generation, reducing manual workload by 60%.",
      "Implemented responsive design that improved user engagement by 40%."
    ],
    businessImpact:
      "Secured 50+ early adopters and partnerships within first launch quarter, establishing strong market presence.",
  },
  {
    title: "Water Utility Management System",
    description:
      "A SaaS platform that streamlines operations for water utility companies billing, meter reading, customer management. Used by 20+ organizations and 100K+ users.",
    image: "/images/wumis-4.jpg",
    link: "https://wumis.et",
    technologies: ["React.js", "TypeScript", "Digital Ocean", "Docker", "CI/CD", "Nginx"],
    results: [
      "Led complete frontend development using scalable component-based design.",
      "Implemented CI/CD pipeline for automated deployments, increasing development velocity.",
      "Worked closely with backend to ensure data integrity and performance across high-load dashboards.",
    ],
    businessImpact:
      "Enabled 20+ companies to digitize operations, reducing manual billing time by 70% and boosting overall efficiency.",
  },
  {
    title: "Hulu Plus - Ride-Sharing Platform",
    description:
      "An all-in-one transportation and delivery platform with real-time tracking, automated dispatch, and seamless UX for drivers and customers.",
    image: "/images/hulu-ride.png",
    link: "https://huluplus.et",
    technologies: ["React", "Node.js", "Express.js", "TypeScript", "Socket.io", "MySQL", "AWS", "Docker", "Nginx", "Kafka"],
    results: [
      "Implemented full CI/CD pipeline using AWS, reducing dev time by 30%.",
      "Led frontend team in rapid development, achieving product-market fit in 6 months.",
      "Built scalable deployment infrastructure with real-time event tracking.",
    ],
    businessImpact:
      "Platform revenue grew by 150% within the first 6 months of launch; expanded into 3 major cities.",
  },
]

function ProjectCard({
  title,
  description,
  image,
  link,
  github,
  technologies,
  results,
  businessImpact,
}: ProjectCardProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="shadow rounded-lg overflow-hidden cursor-pointer group hover:shadow-xl transition-shadow bg-white dark:bg-zinc-900">
          <div className="w-full relative h-56">
            <Image src={image || "/placeholder.svg"} alt={title} fill className="object-cover" />
          </div>
          <div className="p-4">
            <h3 className="text-lg font-semibold text-center group-hover:text-emerald-600 transition-colors">
              {title}
            </h3>
          </div>
        </div>
      </DialogTrigger>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle className="text-xl">{title}</DialogTitle>
          <DialogDescription>{description}</DialogDescription>
        </DialogHeader>
        {link && (
          <div className="my-2">
            <Link href={link} target="_blank" className="text-emerald-600 underline inline-flex items-center gap-1">
              Visit Live <ExternalLink className="w-4 h-4" />
            </Link>
          </div>
        )}
        {github && (
          <div className="mb-4">
            <Link href={github} target="_blank" className="text-emerald-600 underline inline-flex items-center gap-1">
              GitHub Repo <Github className="w-4 h-4" />
            </Link>
          </div>
        )}
        <div className="flex flex-wrap gap-2 my-4">
          {technologies.map((tech, i) => (
            <Badge key={i} className="bg-zinc-200 text-zinc-800 dark:bg-zinc-800 dark:text-zinc-100 hover:bg-emerald-600 dark:hover:bg-emerald-600">
              {tech}
            </Badge>
          ))}
        </div>
        {results && (
          <div className="mb-4">
            <h4 className="font-semibold mb-2">Key Results:</h4>
            <ul className="list-disc list-inside space-y-1 text-sm">
              {results.map((r, i) => (
                <li key={i}>{r}</li>
              ))}
            </ul>
          </div>
        )}
        {businessImpact && (
          <div className="mb-2">
            <h4 className="font-semibold mb-1">Business Impact:</h4>
            <p className="text-sm text-zinc-600 dark:text-zinc-300">{businessImpact}</p>
          </div>
        )}
      </DialogContent>
    </Dialog>
  )
}

export function ProjectsSection() {
  return (
    <section id="projects" className="py-16 bg-white dark:bg-zinc-950">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            className="inline-block px-3 py-1 mb-4 rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-800 dark:text-emerald-300 text-sm font-medium"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Projects
          </motion.div>

          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Solutions That <span className="text-emerald-600 dark:text-emerald-400">Deliver</span> Results
          </motion.h2>

          <motion.p
            className="text-lg text-zinc-600 dark:text-zinc-400"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            A selection of fast, scalable MVPs and SaaS platforms I’ve built that focused on clear execution, lean architecture, and real business results.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Link href="#contact">
              <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white group">
                Discuss Your Project
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
            <p className="mt-4 text-sm text-zinc-500 dark:text-zinc-400">
              Let’s build something impactful together.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
