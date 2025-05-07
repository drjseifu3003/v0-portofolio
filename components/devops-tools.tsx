"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

interface ToolCardProps {
  name: string
  category: string
  icon: string
  description: string
}

export function DevOpsTools() {
  const toolCategories = [
    {
      name: "CI/CD",
      tools: [
        {
          name: "GitHub Actions",
          category: "CI/CD",
          icon: "/placeholder.svg?height=60&width=60",
          description: "Automate workflows directly in your GitHub repository",
        },
        {
          name: "Jenkins",
          category: "CI/CD",
          icon: "/placeholder.svg?height=60&width=60",
          description: "Open-source automation server for building, testing, and deploying",
        },
        {
          name: "ArgoCD",
          category: "CI/CD",
          icon: "/placeholder.svg?height=60&width=60",
          description: "Declarative GitOps continuous delivery tool for Kubernetes",
        },
      ],
    },
    {
      name: "Infrastructure",
      tools: [
        {
          name: "Terraform",
          category: "Infrastructure",
          icon: "/placeholder.svg?height=60&width=60",
          description: "Infrastructure as code for provisioning and managing cloud resources",
        },
        {
          name: "Ansible",
          category: "Infrastructure",
          icon: "/placeholder.svg?height=60&width=60",
          description: "Automation tool for configuration management and application deployment",
        },
        {
          name: "Pulumi",
          category: "Infrastructure",
          icon: "/placeholder.svg?height=60&width=60",
          description: "Modern infrastructure as code using familiar programming languages",
        },
      ],
    },
    {
      name: "Containers",
      tools: [
        {
          name: "Docker",
          category: "Containers",
          icon: "/placeholder.svg?height=60&width=60",
          description: "Platform for developing, shipping, and running applications in containers",
        },
        {
          name: "Kubernetes",
          category: "Containers",
          icon: "/placeholder.svg?height=60&width=60",
          description: "Container orchestration platform for automating deployment and scaling",
        },
        {
          name: "Helm",
          category: "Containers",
          icon: "/placeholder.svg?height=60&width=60",
          description: "Package manager for Kubernetes that simplifies application deployment",
        },
      ],
    },
    {
      name: "Monitoring",
      tools: [
        {
          name: "Prometheus",
          category: "Monitoring",
          icon: "/placeholder.svg?height=60&width=60",
          description: "Monitoring and alerting toolkit designed for reliability and scalability",
        },
        {
          name: "Grafana",
          category: "Monitoring",
          icon: "/placeholder.svg?height=60&width=60",
          description: "Analytics and interactive visualization platform for metrics",
        },
        {
          name: "Datadog",
          category: "Monitoring",
          icon: "/placeholder.svg?height=60&width=60",
          description: "Cloud-scale monitoring and analytics platform for infrastructure and applications",
        },
      ],
    },
  ]

  return (
    <section className="py-20 bg-white dark:bg-zinc-950">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            className="inline-block px-3 py-1 mb-4 rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-800 dark:text-emerald-300 text-sm font-medium"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Technology Stack
          </motion.div>

          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            DevOps <span className="text-emerald-600 dark:text-emerald-400">Tools</span> I Master
          </motion.h2>

          <motion.p
            className="text-lg text-zinc-600 dark:text-zinc-400"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            I leverage industry-leading tools and technologies to build robust, scalable DevOps solutions tailored to
            your specific needs.
          </motion.p>
        </div>

        <div className="space-y-12">
          {toolCategories.map((category, categoryIndex) => (
            <div key={categoryIndex}>
              <motion.h3
                className="text-2xl font-semibold mb-6 border-b pb-2 border-zinc-200 dark:border-zinc-800"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                {category.name}
              </motion.h3>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.tools.map((tool, toolIndex) => (
                  <motion.div
                    key={toolIndex}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: toolIndex * 0.1 }}
                  >
                    <ToolCard {...tool} />
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function ToolCard({ name, category, icon, description }: ToolCardProps) {
  return (
    <Card className="h-full border border-zinc-200 dark:border-zinc-800 hover:border-emerald-200 dark:hover:border-emerald-800 transition-colors hover:shadow-md">
      <CardContent className="p-6 flex flex-col h-full">
        <div className="flex items-center gap-4 mb-4">
          <div className="relative w-12 h-12 flex-shrink-0 bg-zinc-100 dark:bg-zinc-800 rounded-md overflow-hidden">
            <Image src={icon || "/placeholder.svg"} alt={name} fill className="object-contain p-2" />
          </div>
          <div>
            <h4 className="font-semibold">{name}</h4>
            <p className="text-xs text-zinc-500 dark:text-zinc-400">{category}</p>
          </div>
        </div>
        <p className="text-sm text-zinc-600 dark:text-zinc-400">{description}</p>
      </CardContent>
    </Card>
  )
}
