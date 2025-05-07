"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle2, Zap, BarChart3, Users } from "lucide-react"

export function ValueProposition() {
  const benefits = [
    {
      icon: <Zap className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />,
      title: "Technical Excellence",
      description:
        "Leverage cutting-edge technologies and best practices to build high-performance, scalable solutions that stand the test of time.",
    },
    {
      icon: <BarChart3 className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />,
      title: "Business Impact",
      description:
        "I don't just write code—I create solutions that drive measurable business results, from increased efficiency to new revenue streams.",
    },
    {
      icon: <Users className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />,
      title: "Collaborative Approach",
      description:
        "Work with a developer who communicates clearly, understands your business goals, and becomes a true partner in your success.",
    },
    {
      icon: <CheckCircle2 className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />,
      title: "Reliable Delivery",
      description:
        "Count on consistent, on-time delivery with a proven track record of successful projects and satisfied clients.",
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
            Why Work With <span className="text-emerald-600 dark:text-emerald-400">Me</span>?
          </motion.h2>
          <motion.p
            className="text-lg text-zinc-600 dark:text-zinc-400"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            I bring a unique combination of technical expertise and business acumen to every project, ensuring you get
            more than just code—you get solutions that drive real value.
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

        <div className="mt-16 text-center">
          <motion.div
            className="inline-block px-6 py-3 bg-white dark:bg-zinc-800 rounded-lg shadow-md border border-zinc-200 dark:border-zinc-700"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <p className="text-lg font-medium">
              <span className="text-emerald-600 dark:text-emerald-400 font-semibold">93%</span> of clients report{" "}
              <span className="text-emerald-600 dark:text-emerald-400 font-semibold">increased ROI</span> within 6
              months of project completion
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
