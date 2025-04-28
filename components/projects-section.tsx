"use client"

import { ProjectCard } from "./project-card"
import { StaggerContainer, StaggerItem } from "./animations"

const projects = [
  {
    title: "WUMIS",
    description:
      "Water Utility Management System used by 20+ companies, each serving 100K+ users. It offers automated billing, financial tracking, HR management, and asset tracking, helping utilities streamline operations.",
    image: "/placeholder.svg?height=192&width=384",
    link: "https://wumis.et",
    technologies: ["Next.js", "React", "Node.js", "SaaS"],
  },
  {
    title: "Yaybe ERP Mobile App",
    description:
      "An optimized mobile version of the Yaybe ERP system, used by over 20 organizations for 10+ years. Successfully deployed for Addis Ababa Abattoir Enterprise (AAAE).",
    image: "/placeholder.svg?height=192&width=384",
    technologies: ["Mobile Development", "ERP", "UI/UX Design"],
  },
  {
    title: "Hulu Plus",
    description:
      "An all-in-one platform designed to streamline transportation and delivery services. It includes Hulu Ride, a reliable ride-sharing service, and Hulu Delivery for efficient delivery needs.",
    image: "/placeholder.svg?height=192&width=384",
    link: "https://huluplus.et",
    technologies: ["Full-Stack", "Ride-Sharing", "Delivery System"],
  },
  {
    title: "Universal Client Management System",
    description:
      "A SaaS-based dynamic client management workflow system designed to streamline and automate workflows, from sales to customer service. It adapts to various business needs.",
    image: "/placeholder.svg?height=192&width=384",
    technologies: ["SaaS", "Workflow Automation", "Client Management"],
  },
]

export function ProjectsSection() {
  return (
    <section id="projects" className="py-16 scroll-mt-20">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Featured Projects</h2>
          <p className="text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
            A selection of my most impactful work across various industries and technologies.
          </p>
        </div>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <StaggerItem key={index}>
              <ProjectCard {...project} />
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}
