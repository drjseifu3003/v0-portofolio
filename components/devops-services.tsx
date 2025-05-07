"use client"

import type React from "react"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Cloud, GitBranch, Server, Shield, Gauge, Repeat } from "lucide-react"

interface ServiceCardProps {
  icon: React.ReactNode
  title: string
  description: string
  tools: string[]
}

export function DevOpsServices() {
  const services: ServiceCardProps[] = [
    {
      icon: <Cloud className="h-10 w-10 text-emerald-600 dark:text-emerald-400" />,
      title: "Cloud Infrastructure",
      description:
        "Design and implement scalable, secure, and cost-effective cloud infrastructure on AWS, GCP, and Azure using infrastructure as code.",
      tools: ["AWS", "GCP", "Azure", "Terraform", "CloudFormation", "Pulumi"],
    },
    {
      icon: <GitBranch className="h-10 w-10 text-emerald-600 dark:text-emerald-400" />,
      title: "CI/CD Pipelines",
      description:
        "Build automated CI/CD pipelines that enable rapid, reliable software delivery with comprehensive testing and deployment strategies.",
      tools: ["GitHub Actions", "Jenkins", "CircleCI", "GitLab CI", "ArgoCD"],
    },
    {
      icon: <Server className="h-10 w-10 text-emerald-600 dark:text-emerald-400" />,
      title: "Container Orchestration",
      description:
        "Deploy and manage containerized applications at scale with Kubernetes, ensuring high availability and efficient resource utilization.",
      tools: ["Kubernetes", "Docker", "Helm", "Istio", "Prometheus", "Grafana"],
    },
    {
      icon: <Shield className="h-10 w-10 text-emerald-600 dark:text-emerald-400" />,
      title: "Security & Compliance",
      description:
        "Implement DevSecOps practices to ensure security at every stage of the development lifecycle, from code to deployment.",
      tools: ["Vault", "SonarQube", "OWASP", "Snyk", "Trivy", "Compliance as Code"],
    },
    {
      icon: <Gauge className="h-10 w-10 text-emerald-600 dark:text-emerald-400" />,
      title: "Performance Optimization",
      description:
        "Analyze and optimize application and infrastructure performance to reduce costs and improve user experience.",
      tools: ["New Relic", "Datadog", "Dynatrace", "Lighthouse", "Load Testing"],
    },
    {
      icon: <Repeat className="h-10 w-10 text-emerald-600 dark:text-emerald-400" />,
      title: "Automation & IaC",
      description:
        "Automate infrastructure provisioning, configuration management, and operational tasks to increase efficiency and reduce errors.",
      tools: ["Ansible", "Puppet", "Chef", "Terraform", "CloudFormation", "Bash/Python Scripting"],
    },
  ]

  return (
    <section id="services" className="py-20 bg-zinc-50 dark:bg-zinc-900/50">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            className="inline-block px-3 py-1 mb-4 rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-800 dark:text-emerald-300 text-sm font-medium"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            DevOps Expertise
          </motion.div>

          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Streamline Your <span className="text-emerald-600 dark:text-emerald-400">Development</span> Operations
          </motion.h2>

          <motion.p
            className="text-lg text-zinc-600 dark:text-zinc-400"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            I help businesses implement DevOps practices that accelerate delivery, improve reliability, and optimize
            costs across your entire development lifecycle.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <ServiceCard {...service} />
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <div className="inline-block px-6 py-4 bg-white dark:bg-zinc-800 rounded-lg shadow-md border border-zinc-200 dark:border-zinc-700">
            <p className="text-xl font-medium">
              <span className="text-emerald-600 dark:text-emerald-400 font-semibold">85%</span> of clients report{" "}
              <span className="text-emerald-600 dark:text-emerald-400 font-semibold">40% faster</span> deployment cycles
              after implementing my DevOps solutions
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function ServiceCard({ icon, title, description, tools }: ServiceCardProps) {
  return (
    <Card className="h-full border border-zinc-200 dark:border-zinc-800 hover:border-emerald-200 dark:hover:border-emerald-800 transition-colors hover:shadow-md">
      <CardContent className="p-6 flex flex-col h-full">
        <div className="mb-4">{icon}</div>
        <h3 className="text-xl font-semibold mb-3">{title}</h3>
        <p className="text-zinc-600 dark:text-zinc-400 mb-6 flex-grow">{description}</p>
        <div className="flex flex-wrap gap-2 mt-auto">
          {tools.slice(0, 5).map((tool, index) => (
            <Badge
              key={index}
              variant="secondary"
              className="bg-emerald-100 dark:bg-emerald-900/30 text-emerald-800 dark:text-emerald-300"
            >
              {tool}
            </Badge>
          ))}
          {tools.length > 5 && (
            <Badge variant="outline" className="text-zinc-500 dark:text-zinc-400">
              +{tools.length - 5} more
            </Badge>
          )}
        </div>
      </CardContent>
    </Card>
  )
}
