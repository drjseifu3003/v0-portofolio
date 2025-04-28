"use client"

import { Button } from "@/components/ui/button"
import { ChevronRight, Download, Github, Linkedin, Mail } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { SlideIn } from "./animations"
import { TypewriterEffect } from "./typewriter-effect"
import { motion } from "framer-motion"

export function HeroSection() {
  const words = [{ text: "Next.js" }, { text: "Node.js" }, { text: "DevOps" }, { text: "SaaS" }, { text: "Full-Stack" }]

  return (
    <div className="relative overflow-hidden py-20 md:py-32">
      {/* Cyber grid background */}
      <div className="absolute inset-0 bg-cyber-grid bg-cyber-grid opacity-10"></div>

      {/* Glowing orbs */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-neon-blue/10 filter blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-neon-purple/10 filter blur-3xl"></div>

      <div className="container relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
          <div className="w-full md:w-1/2 space-y-6">
            <SlideIn direction="up" delay={0.1}>
              <div className="inline-block px-3 py-1 rounded-md bg-neon-blue/10 border border-neon-blue/30 text-neon-blue dark:text-neon-blue text-sm font-medium mb-2 cyber-glow">
                Senior Full-Stack Engineer
              </div>
            </SlideIn>

            <SlideIn direction="up" delay={0.2}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                Dereje <span className="text-neon-blue dark:text-neon-blue text-glow">Seifu</span>
              </h1>
            </SlideIn>

            <SlideIn direction="up" delay={0.3}>
              <div className="h-8 md:h-10">
                <TypewriterEffect
                  words={words}
                  className="text-xl md:text-2xl text-neon-blue dark:text-neon-blue font-medium"
                />
              </div>
            </SlideIn>

            <SlideIn direction="up" delay={0.4}>
              <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-[600px]">
                Specializing in building scalable SaaS platforms and high-performance web applications with 4+ years of
                experience.
              </p>
            </SlideIn>

            <SlideIn direction="up" delay={0.5}>
              <div className="flex flex-wrap gap-4 pt-4">
                <Button className="gaming-button group">
                  Contact Me
                  <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
                <Button variant="outline" className="gaming-button bg-transparent group">
                  <Download className="mr-2 h-4 w-4 transition-transform group-hover:translate-y-0.5" />
                  Download CV
                </Button>
              </div>
            </SlideIn>

            <SlideIn direction="up" delay={0.6}>
              <div className="flex gap-4 pt-2">
                <Link
                  href="#"
                  className="text-zinc-600 hover:text-neon-blue dark:text-zinc-400 dark:hover:text-neon-blue transition-colors"
                >
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </Link>
                <Link
                  href="#"
                  className="text-zinc-600 hover:text-neon-blue dark:text-zinc-400 dark:hover:text-neon-blue transition-colors"
                >
                  <Github className="h-5 w-5" />
                  <span className="sr-only">GitHub</span>
                </Link>
                <Link
                  href="mailto:Derejeseifu3030@gmail.com"
                  className="text-zinc-600 hover:text-neon-blue dark:text-zinc-400 dark:hover:text-neon-blue transition-colors"
                >
                  <Mail className="h-5 w-5" />
                  <span className="sr-only">Email</span>
                </Link>
              </div>
            </SlideIn>
          </div>

          <div className="w-full md:w-1/2 flex justify-center">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              {/* Animated decorative elements */}
              <div className="absolute -inset-4 rounded-full bg-gradient-flow bg-gradient-flow animate-border-flow opacity-30"></div>

              {/* Profile image with cyber border */}
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-2 border-neon-blue/50 cyber-glow">
                <Image src="/images/profile.jpeg" alt="Dereje Seifu" fill className="object-cover" priority />
              </div>

              {/* Floating badges */}
              <motion.div
                className="absolute -top-4 -right-4 bg-cyber-dark rounded-full shadow-lg p-3 border border-neon-blue/30 cyber-glow"
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Number.POSITIVE_INFINITY, duration: 4, ease: "easeInOut" }}
              >
                <div className="text-neon-blue">
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
                    className="h-6 w-6"
                  >
                    <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
                  </svg>
                </div>
              </motion.div>

              <motion.div
                className="absolute bottom-4 -left-8 bg-cyber-dark rounded-full shadow-lg px-3 py-2 border border-neon-blue/30 cyber-glow"
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Number.POSITIVE_INFINITY, duration: 5, ease: "easeInOut" }}
              >
                <div className="text-sm font-medium text-white">4+ Years Experience</div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}
