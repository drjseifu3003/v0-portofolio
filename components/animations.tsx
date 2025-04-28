"use client"

import { motion } from "framer-motion"
import type { ReactNode } from "react"

export const FadeIn = ({
  children,
  delay = 0,
  duration = 0.5,
  className = "",
}: {
  children: ReactNode
  delay?: number
  duration?: number
  className?: string
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay,
        duration,
        ease: "easeOut",
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export const SlideIn = ({
  children,
  direction = "left",
  delay = 0,
  duration = 0.5,
  className = "",
}: {
  children: ReactNode
  direction?: "left" | "right" | "up" | "down"
  delay?: number
  duration?: number
  className?: string
}) => {
  const directionMap = {
    left: { x: -50, y: 0 },
    right: { x: 50, y: 0 },
    up: { x: 0, y: -50 },
    down: { x: 0, y: 50 },
  }

  return (
    <motion.div
      initial={{ opacity: 0, ...directionMap[direction] }}
      animate={{ opacity: 1, x: 0, y: 0 }}
      transition={{
        delay,
        duration,
        ease: "easeOut",
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export const ScaleIn = ({
  children,
  delay = 0,
  duration = 0.5,
  className = "",
}: {
  children: ReactNode
  delay?: number
  duration?: number
  className?: string
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        delay,
        duration,
        ease: "easeOut",
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export const StaggerContainer = ({
  children,
  delay = 0,
  staggerChildren = 0.1,
  className = "",
}: {
  children: ReactNode
  delay?: number
  staggerChildren?: number
  className?: string
}) => {
  return (
    <motion.div
      initial="hidden"
      animate="show"
      variants={{
        hidden: { opacity: 0 },
        show: {
          opacity: 1,
          transition: {
            staggerChildren,
            delayChildren: delay,
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export const StaggerItem = ({
  children,
  className = "",
}: {
  children: ReactNode
  className?: string
}) => {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        show: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.5,
            ease: "easeOut",
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export const HoverScale = ({
  children,
  scale = 1.05,
  className = "",
}: {
  children: ReactNode
  scale?: number
  className?: string
}) => {
  return (
    <motion.div whileHover={{ scale }} transition={{ duration: 0.2 }} className={className}>
      {children}
    </motion.div>
  )
}
