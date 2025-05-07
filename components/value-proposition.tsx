"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Zap, BarChart3, Code, Server } from "lucide-react"

export function ValueProposition() {
  const benefits = [
    {
      icon: <Code className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />,
      title: "End-to-End Development",
      description:
        "From concept to deployment, I handle every aspect of your project—frontend, backend, infrastructure, and DevOps—creating seamless solutions.",
    },
    {
      icon: <Zap className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />,
      title: "Technical Excellence",
      description:
        "Leverage cutting-edge technologies and best practices across the entire stack to build high-performance, scalable solutions.",
    },
    {
      icon: <Server className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />,
      title: "Full-Stack + DevOps",
      description:
        "Beautiful, responsive interfaces backed by robust architecture and automated deployment pipelines that accelerate delivery.",
    },
    {
      icon: <BarChart3 className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />,
      title: "Business Impact",
      description:
        "I create complete solutions that drive measurable business results, from increased efficiency to new revenue streams.",
    },
  ]

  return (
    <section className="py-20 bg-zinc-50 dark:bg-zinc-900/50">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Why Choose My <span className="text-emerald-600 dark:text-emerald-400">Approach</span>
          </motion.h2>
          <motion.p
            className="text-zinc-600 dark:text-zinc-400"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            I bring full-stack development and DevOps expertise to every project, ensuring you get a complete solution
            that drives real value.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full border border-zinc-200 dark:border-zinc-800 hover:border-emerald-200 dark:hover:border-emerald-800 transition-colors">
                <CardContent className="p-6">
                  <div className="flex gap-4">
                    <div className="mt-1 bg-emerald-100 dark:bg-emerald-900/30 p-3 rounded-full">{benefit.icon}</div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                      <p className="text-zinc-600 dark:text-zinc-400">{benefit.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
