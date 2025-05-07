"use client"

import type React from "react"

import { useState, useCallback, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"
import { Button } from "@/components/ui/button"

interface TestimonialProps {
  content: string
  author: {
    name: string
    role: string
    company: string
    image?: string
  }
  expertise: string[]
  impact: string
}

export function TestimonialsSection() {
  const testimonials: TestimonialProps[] = [
    {
      content:
        "Dereje delivered a complete end-to-end solution that transformed our business. From the frontend experience to the backend architecture and deployment pipeline, everything was expertly crafted. His ability to handle the entire development lifecycle saved us time and resources.",
      author: {
        name: "Sarah Johnson",
        role: "CTO",
        company: "TechFlow Solutions",
        image: "/placeholder.svg?height=80&width=80",
      },
      expertise: ["Full-Stack Development", "DevOps", "System Architecture"],
      impact: "40% reduction in development time with 65% increase in user engagement",
    },
    {
      content:
        "Working with Dereje was game-changing for our startup. He built our entire platform from scratch—stunning frontend, scalable backend, and robust infrastructure. His end-to-end expertise meant we didn't need to hire multiple specialists.",
      author: {
        name: "Michael Chen",
        role: "Founder",
        company: "InnovateLabs",
        image: "/placeholder.svg?height=80&width=80",
      },
      expertise: ["React/Next.js", "Node.js", "AWS", "CI/CD"],
      impact: "32% revenue increase with 94% customer satisfaction",
    },
    {
      content:
        "Dereje's end-to-end approach to our project was exceptional. He seamlessly handled everything from user interface design to database optimization and cloud infrastructure. His ability to implement DevOps practices while delivering full-stack features gave us a competitive edge.",
      author: {
        name: "Abebe Kebede",
        role: "Product Manager",
        company: "Toplink Technology",
        image: "/placeholder.svg?height=80&width=80",
      },
      expertise: ["UI/UX", "API Development", "Cloud Architecture"],
      impact: "285% ROI with 35% faster time to market",
    },
  ]

  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const [touchStart, setTouchStart] = useState(0)
  const [touchEnd, setTouchEnd] = useState(0)

  const handleNext = useCallback(() => {
    setDirection(1)
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }, [testimonials.length])

  const handlePrev = useCallback(() => {
    setDirection(-1)
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }, [testimonials.length])

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return
    const interval = setInterval(() => handleNext(), 6000)
    return () => clearInterval(interval)
  }, [isAutoPlaying, handleNext])

  // Touch handlers for mobile swipe
  const handleTouchStart = (e: React.TouchEvent) => setTouchStart(e.targetTouches[0].clientX)
  const handleTouchMove = (e: React.TouchEvent) => setTouchEnd(e.targetTouches[0].clientX)
  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 100) handleNext()
    if (touchStart - touchEnd < -100) handlePrev()
  }

  // Variants for the slide animations
  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction > 0 ? -1000 : 1000,
      opacity: 0,
    }),
  }

  return (
    <section id="testimonials" className="py-20 bg-zinc-50 dark:bg-zinc-900/50">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Client <span className="text-emerald-600 dark:text-emerald-400">Success</span> Stories
          </motion.h2>

          <motion.p
            className="text-zinc-600 dark:text-zinc-400"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            From concept to deployment, I deliver complete solutions that drive measurable business results.
          </motion.p>
        </div>

        <div
          className="relative max-w-4xl mx-auto"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div className="overflow-hidden relative rounded-xl">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.5 },
                }}
                className="w-full"
              >
                <TestimonialCard testimonial={testimonials[currentIndex]} />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation buttons */}
          <div className="absolute top-1/2 left-0 right-0 flex justify-between items-center transform -translate-y-1/2 px-4 md:px-8">
            <Button
              variant="outline"
              size="icon"
              className="rounded-full bg-white/80 dark:bg-zinc-800/80 backdrop-blur-sm border-zinc-200 dark:border-zinc-700 shadow-md hover:bg-white dark:hover:bg-zinc-800"
              onClick={handlePrev}
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="rounded-full bg-white/80 dark:bg-zinc-800/80 backdrop-blur-sm border-zinc-200 dark:border-zinc-700 shadow-md hover:bg-white dark:hover:bg-zinc-800"
              onClick={handleNext}
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>

          {/* Pagination dots */}
          <div className="flex justify-center mt-6 gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setDirection(index > currentIndex ? 1 : -1)
                  setCurrentIndex(index)
                }}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  index === currentIndex ? "bg-emerald-600 dark:bg-emerald-400 w-6" : "bg-zinc-300 dark:bg-zinc-700"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function TestimonialCard({ testimonial }: { testimonial: TestimonialProps }) {
  return (
    <Card className="border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-lg">
      <CardContent className="p-8">
        <div className="flex flex-col md:flex-row gap-6">
          <div className="md:w-1/3 flex flex-col items-center text-center">
            <Avatar className="h-16 w-16 border-2 border-zinc-100 dark:border-zinc-800 mb-3">
              <AvatarImage
                src={testimonial.author.image || "/placeholder.svg?height=80&width=80"}
                alt={testimonial.author.name}
              />
              <AvatarFallback>{testimonial.author.name.charAt(0)}</AvatarFallback>
            </Avatar>
            <h4 className="font-semibold">{testimonial.author.name}</h4>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">{testimonial.author.role}</p>
            <p className="text-sm text-zinc-500 dark:text-zinc-500 mb-3">{testimonial.author.company}</p>

            <div className="flex mb-3">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-3 w-3 text-yellow-500 fill-yellow-500" />
              ))}
            </div>

            <div className="space-y-1.5 w-full">
              {testimonial.expertise.map((skill, index) => (
                <Badge
                  key={index}
                  variant="secondary"
                  className="bg-emerald-100 dark:bg-emerald-900/30 text-emerald-800 dark:text-emerald-300 text-xs w-full justify-center"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </div>

          <div className="md:w-2/3 flex flex-col">
            <p className="text-zinc-700 dark:text-zinc-300 italic leading-relaxed mb-4">{testimonial.content}</p>

            <div className="mt-auto">
              <div className="bg-emerald-50 dark:bg-emerald-900/20 p-3 rounded-lg">
                <p className="text-emerald-700 dark:text-emerald-400 text-sm font-medium">{testimonial.impact}</p>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
