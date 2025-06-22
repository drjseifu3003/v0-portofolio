"use client"

import { motion } from "framer-motion"
import { Check } from "lucide-react"

export function WhyChooseMe() {
  const benefits = [
    {
      title: "Modern Frontend Development",
      description: "Next.js, React, Vue.js, and Nuxt.js for exceptional user experiences.",
      icon: "🎨",
    },
    {
      title: "Robust Backend Solutions",
      description: "Scalable APIs and services built with Node.js, Express.js, NestJS, and Python, using PostgreSQL, MongoDB, Redis, Kafka, and microservice architecture.",
      icon: "⚙️",
    },
    {
      title: "CI/CD Pipeline Integration",
      description: "Automated build, test, and deploy workflows with Docker, GitHub Actions, AWS, and Kubernetes, ensuring fast and reliable releases.",
      icon: "🔄",
    },
    {
      title: "AI & Workflow Automation",
      description: "Integrate GPT-powered assistants, OpenAI tools, and no-code workflows (n8n, Supabase, APIs) to automate customer support, operations, and product intelligence.",
      icon: "🤖",
    }

  ]

  return (
    <section id='services' className="py-8 bg-zinc-950 text-white">
      <div className="container">
        <div className="flex justify-center mb-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-800/50 backdrop-blur-sm border border-zinc-700/50">
            <div className="w-6 h-6 rounded-full bg-emerald-500 flex items-center justify-center text-zinc-900">
              <Check className="w-4 h-4" />
            </div>
            <span className="text-sm font-medium">Why choose me</span>
          </div>
        </div>

        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-3">
            End-to-End <span className="text-emerald-400">Solutions</span>
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto">From Development to Deployment</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
              className="bg-zinc-900/50 backdrop-blur-sm border border-zinc-800/30 rounded-xl p-6 flex flex-col items-center text-center"
              whileHover={{
                y: -5,
                boxShadow: "0 0 20px rgba(16, 185, 129, 0.2)",
                transition: { duration: 0.3 },
              }}
            >
              <div className="text-4xl mb-4">{benefit.icon}</div>
              <h3 className="text-lg font-semibold text-white mb-2">{benefit.title}</h3>
              <p className="text-zinc-400 text-sm">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
