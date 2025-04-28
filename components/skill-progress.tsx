"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"

interface SkillProgressProps {
  name: string
  level: number // 0-100
  color?: string
}

export function SkillProgress({ name, level, color = "emerald" }: SkillProgressProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const colorClasses = {
    emerald: "bg-emerald-500 dark:bg-emerald-600",
    purple: "bg-purple-500 dark:bg-purple-600",
    blue: "bg-blue-500 dark:bg-blue-600",
    amber: "bg-amber-500 dark:bg-amber-600",
    rose: "bg-rose-500 dark:bg-rose-600",
  }

  const bgClass = colorClasses[color as keyof typeof colorClasses] || colorClasses.emerald

  return (
    <div ref={ref} className="space-y-2">
      <div className="flex justify-between items-center">
        <span className="text-sm font-medium">{name}</span>
        <span className="text-xs font-medium text-zinc-500">{level}%</span>
      </div>
      <div className="h-2 w-full bg-zinc-100 dark:bg-zinc-800 rounded-full overflow-hidden">
        <motion.div
          className={`h-full rounded-full ${bgClass}`}
          initial={{ width: 0 }}
          animate={{ width: isInView ? `${level}%` : 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
        />
      </div>
    </div>
  )
}
