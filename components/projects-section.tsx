"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight, ExternalLink, Github, TrendingUp } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

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

const projects = [
  {
    title: "WUMIS - Water Utility Management System",
    description:
      "A comprehensive SaaS platform that streamlines operations for water utility companies, serving over 20 organizations and 100K+ end users.",
    image: "/images/wumis.png",
    link: "https://wumis.et",
    technologies: ["React.js", "Digital Ocean", "SaaS", "Docker", "Nginx"],
    results: [
      "Reduced operational costs by 30%",
      "Improved billing accuracy by 25%",
      "Decreased customer service response time by 40%",
    ],
    businessImpact: "Helped utility companies save $1.2M collectively in the first year of implementation.",
  },
  {
    title: "Yaybe ERP Mobile App",
    description:
      "A mobile extension of the Yaybe ERP system, enabling field workers to access critical business data and perform operations on the go.",
    image: "/images/yaybe.png",
    technologies: ["Java", "Kotlin", "Android", "SQL Server"],
    results: [
      "Increased field worker productivity by 35%",
      "Reduced data entry errors by 45%",
      "Improved customer satisfaction by 28%",
    ],
    businessImpact: "Enabled real-time decision making that increased operational efficiency by 40%.",
  },
  {
    title: "Hulu Plus - Ride-Sharing Platform",
    description:
      "An all-in-one transportation and delivery platform featuring ride-sharing and delivery services with real-time tracking and automated dispatching.",
    image: "/images/huluplus.png",
    link: "https://huluplus.et",
    technologies: ["React", "Node.js", "TypeScript", "Socket.io", "MySQL", "AWS", "Docker"],
    results: ["Processed 10,000+ daily rides", "Achieved 99.9% uptime", "Reduced driver wait time by 25%"],
    businessImpact: "Grew platform revenue by 150% within first 6 months of launch.",
  },
  {
    title: "Universal Client Management System",
    description:
      "A SaaS-based workflow management system that adapts to various business needs, from sales to customer service, with customizable workflows and reporting.",
    image: "/images/ucm.png",
    technologies: ["Next.js", "TypeScript", "PostgreSQL", "AWS", "Docker", "Kubernetes"],
    results: [
      "Streamlined client onboarding by 50%",
      "Increased team collaboration efficiency by 40%",
      "Reduced manual reporting time by 65%",
    ],
    businessImpact: "Helped clients achieve an average ROI of 285% within the first year.",
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
  const [isHovered, setIsHovered] = useState(false)

  return (
    <Card
      className="overflow-hidden border border-zinc-200 dark:border-zinc-800 hover:border-emerald-200 dark:hover:border-emerald-800 transition-all duration-300 hover:shadow-lg"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative h-64 overflow-hidden">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 hover:scale-105"
        />
        {businessImpact && (
          <motion.div
            className="absolute bottom-0 left-0 right-0 bg-emerald-600/90 text-white p-3"
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: isHovered ? 0 : 100, opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5" />
              <p className="font-medium">{businessImpact}</p>
            </div>
          </motion.div>
        )}
      </div>
      <CardContent className="p-6">
        <h3 className="text-xl font-semibold mb-3">{title}</h3>
        <p className="text-zinc-600 dark:text-zinc-400 mb-4">{description}</p>

        {results && results.length > 0 && (
          <div className="mb-4">
            <h4 className="font-medium text-sm text-emerald-600 dark:text-emerald-400 mb-2">Business Impact:</h4>
            <ul className="space-y-1">
              {results.map((result, index) => (
                <li key={index} className="flex items-start gap-2 text-sm">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4 text-emerald-500 dark:text-emerald-400 mt-0.5 flex-shrink-0"
                  >
                    <path d="m9 18 6-6-6-6" />
                  </svg>
                  <span className="text-zinc-700 dark:text-zinc-300">{result}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="flex flex-wrap gap-2 mb-6">
          {technologies.map((tech, index) => (
            <Badge
              key={index}
              variant="secondary"
              className="bg-emerald-100 dark:bg-emerald-900/30 text-emerald-800 dark:text-emerald-300"
            >
              {tech}
            </Badge>
          ))}
        </div>

        <div className="flex flex-wrap gap-3">
          {link && (
            <Link href={link} target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="sm" className="flex items-center gap-1">
                <ExternalLink className="h-4 w-4 mr-1" />
                View Live
              </Button>
            </Link>
          )}
          {github && (
            <Link href={github} target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="sm" className="flex items-center gap-1">
                <Github className="h-4 w-4 mr-1" />
                View Code
              </Button>
            </Link>
          )}
        </div>
      </CardContent>
    </Card>
  )
}

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20 bg-white dark:bg-zinc-950">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            className="inline-block px-3 py-1 mb-4 rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-800 dark:text-emerald-300 text-sm font-medium"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Case Studies
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
            A selection of my most impactful work, showcasing not just technical implementation but the real business
            results delivered to clients.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <ProjectCard {...project} />
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Link href="#contact">
              <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white group">
                Discuss Your Project
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
            <p className="mt-4 text-sm text-zinc-500 dark:text-zinc-400">
              Interested in seeing how I can deliver similar results for your business?
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
