"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Download } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { motion, useAnimation } from "framer-motion"
import { useEffect, useState } from "react"
import { TypewriterEffect } from "./typewriter-effect"
import { Badge } from "@/components/ui/badge"

export function HeroSection() {
  const words = [
    { text: "Full-Stack" },
    { text: "Next.js" },
    { text: "Node.js" },
    { text: "DevOps" },
    { text: "End-to-End" },
  ]

  const controls = useAnimation()
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    controls.start({
      y: scrollY * 0.2,
      transition: { type: "spring", stiffness: 100 },
    })
  }, [scrollY, controls])

  return (
    <div className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-100 to-white dark:from-zinc-900 dark:to-zinc-950"></div>
      <div className="absolute inset-0 opacity-20 dark:opacity-30">
        <svg
          className="w-full h-full"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern id="grid" width="8" height="8" patternUnits="userSpaceOnUse">
              <path
                d="M 8 0 L 0 0 0 8"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.2"
                className="text-zinc-300 dark:text-zinc-700"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Animated gradient orbs */}
      <motion.div
        animate={controls}
        className="absolute -top-20 -left-20 w-96 h-96 bg-emerald-500/20 dark:bg-emerald-500/10 rounded-full filter blur-3xl opacity-70"
      ></motion.div>
      <motion.div
        animate={{
          x: [0, 10, 0],
          y: [0, -10, 0],
          transition: { repeat: Number.POSITIVE_INFINITY, duration: 5 },
        }}
        className="absolute top-1/4 right-1/4 w-64 h-64 bg-blue-500/20 dark:bg-blue-500/10 rounded-full filter blur-3xl opacity-70"
      ></motion.div>

      <div className="container relative z-10 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="space-y-8">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <Badge
                variant="outline"
                className="px-3 py-1 text-sm font-medium bg-white/80 dark:bg-zinc-900/80 backdrop-blur-sm border-emerald-200 dark:border-emerald-800 text-emerald-800 dark:text-emerald-300"
              >
                Available for Projects
              </Badge>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="space-y-4"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                End-to-End <span className="text-emerald-600 dark:text-emerald-400">Solutions</span>
                <br />
                Concept to <span className="text-emerald-600 dark:text-emerald-400">Deployment</span>
              </h1>
              <p className="text-xl text-zinc-600 dark:text-zinc-400 max-w-[600px]">
                Full-Stack Engineer & DevOps Specialist delivering complete solutions from stunning frontends to
                scalable infrastructure.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="h-10"
            >
              <TypewriterEffect
                words={words}
                className="text-xl md:text-2xl text-emerald-600 dark:text-emerald-400 font-medium"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap gap-4 pt-4"
            >
              <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white group">
                <Link href="#contact" className="flex items-center">
                  Discuss Your Project
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="group">
                <Download className="mr-2 h-4 w-4" />
                Download Resume
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="pt-6"
            >
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2">
                  {[1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className="w-8 h-8 rounded-full border-2 border-white dark:border-zinc-900 bg-zinc-200 dark:bg-zinc-800 flex items-center justify-center text-xs font-medium"
                    >
                      {i}
                    </div>
                  ))}
                </div>
                <p className="text-sm text-zinc-600 dark:text-zinc-400">
                  <span className="font-semibold">20+ clients</span> trusted my expertise in the last year
                </p>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            <div className="relative mx-auto lg:ml-auto lg:mr-0 w-72 h-72 md:w-96 md:h-96">
              {/* Profile image with premium border */}
              <div className="relative w-full h-full rounded-2xl overflow-hidden border-4 border-white dark:border-zinc-800 shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/20 to-blue-500/20 opacity-30"></div>
                <Image
                  src="/images/profile.jpeg"
                  alt="Dereje Seifu"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 768px) 288px, 384px"
                />
              </div>

              {/* Stats cards */}
              <motion.div
                className="absolute -bottom-6 -left-6 bg-white dark:bg-zinc-800 rounded-lg shadow-xl p-4 border border-zinc-200 dark:border-zinc-700"
                animate={{ y: [0, -5, 0] }}
                transition={{ repeat: Number.POSITIVE_INFINITY, duration: 5, ease: "easeInOut" }}
              >
                <div className="flex items-center gap-3">
                  <div className="bg-emerald-100 dark:bg-emerald-900/30 p-2 rounded-full">
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
                      className="h-5 w-5 text-emerald-600 dark:text-emerald-400"
                    >
                      <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-zinc-500 dark:text-zinc-400">Projects</p>
                    <p className="font-semibold text-xl">20+</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="absolute -top-6 -right-6 bg-white dark:bg-zinc-800 rounded-lg shadow-xl p-4 border border-zinc-200 dark:border-zinc-700"
                animate={{ y: [0, 5, 0] }}
                transition={{ repeat: Number.POSITIVE_INFINITY, duration: 6, ease: "easeInOut", delay: 0.5 }}
              >
                <div className="flex items-center gap-3">
                  <div className="bg-blue-100 dark:bg-blue-900/30 p-2 rounded-full">
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
                      className="h-5 w-5 text-blue-600 dark:text-blue-400"
                    >
                      <rect width="18" height="18" x="3" y="3" rx="2" />
                      <path d="M7 7h.01" />
                      <path d="M12 7h.01" />
                      <path d="M17 7h.01" />
                      <path d="M7 12h.01" />
                      <path d="M12 12h.01" />
                      <path d="M17 12h.01" />
                      <path d="M7 17h.01" />
                      <path d="M12 17h.01" />
                      <path d="M17 17h.01" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-zinc-500 dark:text-zinc-400">Experience</p>
                    <p className="font-semibold text-xl">6+ Years</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
