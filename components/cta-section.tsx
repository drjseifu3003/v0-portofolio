"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Calendar, MessageCircle } from "lucide-react"
import Link from "next/link"

export function CTASection() {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <section className="py-8">
      <div className="container">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-emerald-600 to-blue-600 p-10 md:p-16">
          {/* Animated background elements */}
          <div className="absolute inset-0 opacity-10">
            <svg
              className="w-full h-full"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <pattern id="grid-cta" width="8" height="8" patternUnits="userSpaceOnUse">
                  <path
                    d="M 8 0 L 0 0 0 8"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="0.2"
                    className="text-white"
                  />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid-cta)" />
            </svg>
          </div>

          <motion.div
            className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full filter blur-3xl"
            animate={{
              x: isHovered ? -20 : 0,
              y: isHovered ? -20 : 0,
              scale: isHovered ? 1.2 : 1,
            }}
            transition={{ duration: 0.8 }}
          ></motion.div>

          <motion.div
            className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full filter blur-3xl"
            animate={{
              x: isHovered ? 20 : 0,
              y: isHovered ? 20 : 0,
              scale: isHovered ? 1.2 : 1,
            }}
            transition={{ duration: 0.8 }}
          ></motion.div>

          <div className="relative z-10 text-center max-w-3xl mx-auto">
            <motion.h2
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Ready to Transform Your Digital Vision Into Reality?
            </motion.h2>

            <motion.p
              className="text-lg text-white/90 mb-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Let's collaborate to build something exceptional that drives real business results.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <Link href="mailto:Derejeseifu3030@gmail.com">
                <Button size="lg" className="bg-white text-emerald-600 hover:bg-white/90 hover:text-emerald-700 group">
                  <MessageCircle className="mr-2 h-4 w-4" />
                  Start a Conversation
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <Link href={'https://calendly.com/derejeseifu3030/30min'} >
                <Button size="lg" variant="default" className="bg-emerald-400 border-white text-white dark:bg-emerald-500">
                  <Calendar className="mr-2 h-4 w-4" />
                  Schedule a Meeting
                </Button>
              </Link>
            </motion.div>

            </div>
        </div>
      </div>
    </section>
  )
}