"use client"

import type React from "react"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Clock, TrendingUp, Shield, DollarSign } from "lucide-react"

interface MetricCardProps {
  icon: React.ReactNode
  title: string
  value: string
  description: string
  color: string
}

export function DevOpsMetrics() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const metrics: MetricCardProps[] = [
    {
      icon: <Clock className="h-8 w-8" />,
      title: "Deployment Frequency",
      value: "10x",
      description: "Increase in deployment frequency for clients after implementing CI/CD pipelines",
      color: "emerald",
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: "Lead Time",
      value: "85%",
      description: "Reduction in lead time from commit to production across client projects",
      color: "blue",
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Change Failure Rate",
      value: "75%",
      description: "Decrease in failed deployments through automated testing and monitoring",
      color: "purple",
    },
    {
      icon: <DollarSign className="h-8 w-8" />,
      title: "Infrastructure Cost",
      value: "40%",
      description: "Average reduction in cloud infrastructure costs through optimization",
      color: "amber",
    },
  ]

  const translateY = useTransform(scrollYProgress, [0, 0.5], [50, 0])
  const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1])

  return (
    <section ref={ref} className="py-20 bg-zinc-50 dark:bg-zinc-900/50">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            className="inline-block px-3 py-1 mb-4 rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-800 dark:text-emerald-300 text-sm font-medium"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Measurable Impact
          </motion.div>

          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            DevOps <span className="text-emerald-600 dark:text-emerald-400">Results</span> That Matter
          </motion.h2>

          <motion.p
            className="text-lg text-zinc-600 dark:text-zinc-400"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            My DevOps implementations deliver measurable improvements across key performance indicators that directly
            impact your business outcomes.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {metrics.map((metric, index) => (
            <motion.div
              key={index}
              style={{ opacity, y: translateY }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <MetricCard {...metric} />
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
              These metrics translate to{" "}
              <span className="text-emerald-600 dark:text-emerald-400 font-semibold">faster time-to-market</span> and{" "}
              <span className="text-emerald-600 dark:text-emerald-400 font-semibold">higher ROI</span> for your business
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function MetricCard({ icon, title, value, description, color }: MetricCardProps) {
  const colorClasses = {
    emerald: "bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400",
    blue: "bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400",
    purple: "bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400",
    amber: "bg-amber-100 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400",
  }

  return (
    <Card className="h-full border border-zinc-200 dark:border-zinc-800 hover:border-emerald-200 dark:hover:border-emerald-800 transition-colors hover:shadow-md">
      <CardContent className="p-6 flex flex-col h-full text-center">
        <div className={`mx-auto p-4 rounded-full mb-4 ${colorClasses[color as keyof typeof colorClasses]}`}>
          {icon}
        </div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <div className={`text-4xl font-bold mb-4 ${colorClasses[color as keyof typeof colorClasses]}`}>{value}</div>
        <p className="text-zinc-600 dark:text-zinc-400">{description}</p>
      </CardContent>
    </Card>
  )
}
