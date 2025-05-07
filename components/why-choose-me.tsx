"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Check, X } from "lucide-react"

export function WhyChooseMe() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  })

  const benefits = [
    {
      positive: {
        title: "End-to-End DevOps Integration",
        description:
          "I implement complete CI/CD pipelines that seamlessly connect development to production, ensuring continuous delivery of value.",
      },
      negative: {
        title: "Fragmented Deployment Processes",
        description:
          "Disconnected development and operations teams lead to deployment bottlenecks and production issues.",
      },
    },
    {
      positive: {
        title: "Infrastructure as Code Expertise",
        description:
          "I create reproducible, version-controlled infrastructure that scales with your needs and eliminates configuration drift.",
      },
      negative: {
        title: "Manual Infrastructure Management",
        description:
          "Manual provisioning leads to inconsistencies, security vulnerabilities, and wasted engineering time.",
      },
    },
    {
      positive: {
        title: "Security-First Approach",
        description:
          "I integrate security at every stage of the pipeline, from code scanning to runtime protection, preventing costly breaches.",
      },
      negative: {
        title: "Bolt-on Security Practices",
        description:
          "Adding security as an afterthought creates vulnerabilities and compliance issues that are expensive to fix.",
      },
    },
    {
      positive: {
        title: "Cost-Optimized Cloud Architecture",
        description:
          "I design cloud environments that automatically scale with demand, reducing waste and optimizing your cloud spend.",
      },
      negative: {
        title: "Overprovisioned Resources",
        description:
          "Static infrastructure leads to overprovisioning, resulting in unnecessary cloud costs and environmental impact.",
      },
    },
  ]

  // Calculate the exact height needed for the container
  // Each row is visible for exactly 1/total of the scroll distance
  const rowHeight = 160 // Height of a single row
  const totalHeight = benefits.length * rowHeight

  return (
    <section className="py-12 bg-zinc-950 text-white overflow-hidden why-choose-section" ref={containerRef}>
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
            Why me as <span className="text-emerald-400">DevOps</span> Partner
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto">
            Why Partner with Me for DevOps Excellence and Operational Transformation
          </p>
        </div>

        {/* Progress indicator */}
        <div className="fixed top-1/2 right-8 transform -translate-y-1/2 hidden lg:flex flex-col gap-2 z-50">
          {benefits.map((_, index) => (
            <ProgressDot key={index} index={index} total={benefits.length} scrollYProgress={scrollYProgress} />
          ))}
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="relative" style={{ height: `${totalHeight}px` }}>
            {benefits.map((benefit, index) => (
              <CardRow
                key={index}
                positive={benefit.positive}
                negative={benefit.negative}
                index={index}
                scrollYProgress={scrollYProgress}
                total={benefits.length}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function ProgressDot({ index, total, scrollYProgress }: { index: number; total: number; scrollYProgress: any }) {
  // Calculate the scroll range for this dot
  const segmentSize = 1 / total
  const start = index * segmentSize
  const end = (index + 1) * segmentSize

  const opacity = useTransform(scrollYProgress, [start - 0.1, start, end, end + 0.1], [0.3, 1, 1, 0.3])

  const scale = useTransform(scrollYProgress, [start - 0.1, start, end, end + 0.1], [1, 1.5, 1.5, 1])

  const background = useTransform(
    scrollYProgress,
    [start - 0.1, start, end, end + 0.1],
    ["rgba(255, 255, 255, 0.3)", "rgba(16, 185, 129, 1)", "rgba(16, 185, 129, 1)", "rgba(255, 255, 255, 0.3)"],
  )

  return <motion.div className="w-3 h-3 rounded-full bg-white/30" style={{ opacity, scale, background }} />
}

function CardRow({
  positive,
  negative,
  index,
  scrollYProgress,
  total,
}: {
  positive: { title: string; description: string }
  negative: { title: string; description: string }
  index: number
  scrollYProgress: any
  total: number
}) {
  // Calculate the scroll range for this card row
  const segmentSize = 1 / total
  const start = index * segmentSize
  const end = (index + 1) * segmentSize

  // Create a more precise fade in/out effect
  // This creates a true "one in, one out" experience
  const opacity = useTransform(
    scrollYProgress,
    [
      start - 0.1, // Well before this segment - fully invisible
      start - 0.05, // Just before this segment - starting to appear
      start + 0.05, // Just after segment start - fully visible
      end - 0.05, // Just before segment end - still fully visible
      end + 0.05, // Just after segment end - starting to disappear
      end + 0.1, // Well after segment end - fully invisible
    ],
    [0, 0.3, 1, 1, 0.3, 0],
  )

  // Create a more natural vertical movement that matches scroll direction
  const y = useTransform(
    scrollYProgress,
    [
      start - 0.1, // Well before this segment
      start, // Start of segment
      end, // End of segment
      end + 0.1, // Well after segment
    ],
    [-30, 0, 0, 30],
  )

  return (
    <motion.div
      className="absolute inset-0 grid grid-cols-1 md:grid-cols-2 gap-4"
      style={{
        opacity,
        y,
      }}
      transition={{
        opacity: { duration: 0.5, ease: "easeInOut" },
        y: { duration: 0.5, ease: "easeInOut" },
      }}
    >
      <motion.div
        className="bg-zinc-900/50 backdrop-blur-sm border border-emerald-800/30 rounded-xl p-4 flex flex-col"
        whileHover={{
          y: -5,
          boxShadow: "0 0 20px rgba(16, 185, 129, 0.2)",
          transition: { duration: 0.3 },
        }}
      >
        <div className="flex items-center gap-3 mb-2">
          <motion.div
            className="w-8 h-8 rounded-full bg-emerald-900/50 flex items-center justify-center"
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.5 }}
          >
            <Check className="w-4 h-4 text-emerald-400" />
          </motion.div>
          <h3 className="text-base font-semibold text-white">{positive.title}</h3>
        </div>
        <p className="text-zinc-400 text-sm">{positive.description}</p>
      </motion.div>

      <motion.div
        className="bg-zinc-900/50 backdrop-blur-sm border border-red-800/30 rounded-xl p-4 flex flex-col"
        whileHover={{
          y: -5,
          boxShadow: "0 0 20px rgba(239, 68, 68, 0.2)",
          transition: { duration: 0.3 },
        }}
      >
        <div className="flex items-center gap-3 mb-2">
          <motion.div
            className="w-8 h-8 rounded-full bg-red-900/50 flex items-center justify-center"
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.5 }}
          >
            <X className="w-4 h-4 text-red-400" />
          </motion.div>
          <h3 className="text-base font-semibold text-white">{negative.title}</h3>
        </div>
        <p className="text-zinc-400 text-sm">{negative.description}</p>
      </motion.div>
    </motion.div>
  )
}
