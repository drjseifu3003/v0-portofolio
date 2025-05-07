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
    { text: "Next.js" },
    { text: "Node.js" },
    { text: "DevOps" },
    { text: "Cloud" },
    { text: "SaaS" },
    { text: "Full-Stack" },
  ]

  const controls = useAnimation()
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }
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
      <motion.div
        animate={{
          x: [0, -10, 0],
          y: [0, 10, 0],
          transition: { repeat: Number.POSITIVE_INFINITY, duration: 7, delay: 1 },
        }}
        className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-purple-500/20 dark:bg-purple-500/10 rounded-full filter blur-3xl opacity-70"
      ></motion.div>

      <div className="container relative z-10 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="space-y-8">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <Badge
                variant="outline"
                className="px-3 py-1 text-sm font-medium bg-white/80 dark:bg-zinc-900/80 backdrop-blur-sm border-emerald-200 dark:border-emerald-800 text-emerald-800 dark:text-emerald-300"
              >
                Available for Premium Projects
              </Badge>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="space-y-4"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                I don't just build <span className="text-emerald-600 dark:text-emerald-400">software</span>,
                <br />I create <span className="text-emerald-600 dark:text-emerald-400">scalable systems</span>
              </h1>
              <p className="text-xl text-zinc-600 dark:text-zinc-400 max-w-[600px]">
                Senior Full-Stack Engineer & DevOps Specialist who transforms complex business challenges into elegant,
                scalable solutions that drive growth.
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
                  Let's Discuss Your Project
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="group">
                <Download className="mr-2 h-4 w-4 transition-transform group-hover:translate-y-0.5" />
                Download Resume
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="pt-8 space-y-4"
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
                  <span className="font-semibold">20+ clients</span> trusted my expertise in the last 12 months
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-6">
                <div className="flex items-center gap-1.5">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg
                      key={star}
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-5 h-5 text-yellow-500"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ))}
                </div>
                <p className="text-sm text-zinc-600 dark:text-zinc-400">
                  <span className="font-semibold">5.0/5 average rating</span> across all client projects
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
                    <p className="text-sm text-zinc-500 dark:text-zinc-400">Projects Delivered</p>
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
                    <p className="text-sm text-zinc-500 dark:text-zinc-400">DevOps Expertise</p>
                    <p className="font-semibold text-xl">4+ Years</p>
                  </div>
                </div>
              </motion.div>

              {/* Chat bubble */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.5, duration: 0.5 }}
                className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2"
              >
                <div className="bg-white dark:bg-zinc-800 p-3 rounded-xl shadow-lg border border-zinc-200 dark:border-zinc-700 max-w-[200px]">
                  <p className="text-sm font-medium">Need a developer who can build AND deploy?</p>
                  <div className="absolute -bottom-2 right-6 w-4 h-4 bg-white dark:bg-zinc-800 border-r border-b border-zinc-200 dark:border-zinc-700 transform rotate-45"></div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
        >
          <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-2">Scroll to explore</p>
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
            className="text-zinc-400"
          >
            <path d="M12 5v14M5 12l7 7 7-7" />
          </svg>
        </motion.div>
      </div>
    </div>
  )
}
