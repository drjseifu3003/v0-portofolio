"use client"

import type React from "react"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, Code, GitBranch, CheckCircle2, Rocket, RefreshCw, Shield } from "lucide-react"
import Link from "next/link"

export function DevOpsWorkflow() {
  const workflowSteps = [
    {
      icon: <Code className="h-8 w-8 text-emerald-600 dark:text-emerald-400" />,
      title: "Code",
      description: "Develop features with modern practices like TDD and pair programming",
      benefits: ["Faster development", "Higher quality code", "Better collaboration"],
    },
    {
      icon: <GitBranch className="h-8 w-8 text-blue-600 dark:text-blue-400" />,
      title: "Build",
      description: "Automated builds with comprehensive testing and code quality checks",
      benefits: ["Catch issues early", "Consistent builds", "Rapid feedback"],
    },
    {
      icon: <CheckCircle2 className="h-8 w-8 text-purple-600 dark:text-purple-400" />,
      title: "Test",
      description: "Automated testing across unit, integration, and end-to-end scenarios",
      benefits: ["Prevent regressions", "Validate functionality", "Ensure reliability"],
    },
    {
      icon: <Shield className="h-8 w-8 text-red-600 dark:text-red-400" />,
      title: "Secure",
      description: "Security scanning and compliance checks integrated into the pipeline",
      benefits: ["Identify vulnerabilities", "Enforce compliance", "Reduce risk"],
    },
    {
      icon: <Rocket className="h-8 w-8 text-amber-600 dark:text-amber-400" />,
      title: "Deploy",
      description: "Automated deployments with zero downtime and rollback capabilities",
      benefits: ["Reliable releases", "Reduced risk", "Faster time to market"],
    },
    {
      icon: <RefreshCw className="h-8 w-8 text-teal-600 dark:text-teal-400" />,
      title: "Monitor",
      description: "Comprehensive monitoring and observability for proactive management",
      benefits: ["Real-time insights", "Quick issue detection", "Data-driven decisions"],
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
            DevOps Methodology
          </motion.div>

          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            My <span className="text-emerald-600 dark:text-emerald-400">End-to-End</span> DevOps Approach
          </motion.h2>

          <motion.p
            className="text-lg text-zinc-600 dark:text-zinc-400"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            I implement a comprehensive DevOps workflow that accelerates delivery while maintaining quality, security,
            and reliability throughout the development lifecycle.
          </motion.p>
        </div>

        <div className="relative">
          {/* Connecting line */}
          <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500 via-blue-500 to-purple-500 hidden lg:block"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {workflowSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <WorkflowCard {...step} stepNumber={index + 1} />
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <Link href="#contact">
            <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white group">
              Discuss Your DevOps Needs
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
          <p className="mt-4 text-sm text-zinc-500 dark:text-zinc-400">
            Let's optimize your development workflow and accelerate your delivery pipeline
          </p>
        </motion.div>
      </div>
    </section>
  )
}

function WorkflowCard({
  icon,
  title,
  description,
  benefits,
  stepNumber,
}: {
  icon: React.ReactNode
  title: string
  description: string
  benefits: string[]
  stepNumber: number
}) {
  return (
    <Card className="h-full border border-zinc-200 dark:border-zinc-800 hover:border-emerald-200 dark:hover:border-emerald-800 transition-colors hover:shadow-md relative">
      <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 w-10 h-10 rounded-full bg-white dark:bg-zinc-950 border-2 border-emerald-500 flex items-center justify-center text-emerald-600 dark:text-emerald-400 font-bold">
        {stepNumber}
      </div>
      <CardContent className="p-6 pt-8 flex flex-col h-full">
        <div className="flex items-center gap-3 mb-4">
          <div className="bg-zinc-100 dark:bg-zinc-800 p-3 rounded-full">{icon}</div>
          <h3 className="text-xl font-semibold">{title}</h3>
        </div>
        <p className="text-zinc-600 dark:text-zinc-400 mb-4">{description}</p>
        <div className="mt-auto">
          <h4 className="font-medium text-sm mb-2">Benefits:</h4>
          <ul className="space-y-1">
            {benefits.map((benefit, index) => (
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
                <span className="text-zinc-700 dark:text-zinc-300">{benefit}</span>
              </li>
            ))}
          </ul>
        </div>
      </CardContent>
    </Card>
  )
}
