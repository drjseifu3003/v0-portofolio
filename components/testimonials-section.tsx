"use client"

import { motion } from "framer-motion"
import { useRef, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Quote } from "lucide-react"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"

interface TestimonialProps {
  content: string
  author: {
    name: string
    role: string
    company: string
    image?: string
  }
  rating: number
  metrics?: {
    label: string
    value: string
  }[]
}

const testimonials: TestimonialProps[] = [
  {
    content:
      "Working with Dereje was a game-changer for our business. His technical expertise and strategic approach helped us launch our SaaS platform ahead of schedule and under budget. The quality of his work is exceptional.",
    author: {
      name: "Sarah Johnson",
      role: "CTO",
      company: "TechFlow Solutions",
      image: "/placeholder.svg?height=48&width=48",
    },
    rating: 5,
    metrics: [
      { label: "Reduced development time", value: "40%" },
      { label: "Increased user engagement", value: "65%" },
    ],
  },
  {
    content:
      "Dereje's ability to understand our business needs and translate them into technical solutions is remarkable. He not only delivered a high-performance application but also provided valuable insights that improved our overall product strategy.",
    author: {
      name: "Michael Chen",
      role: "Founder",
      company: "InnovateLabs",
      image: "/placeholder.svg?height=48&width=48",
    },
    rating: 5,
    metrics: [
      { label: "Revenue increase", value: "32%" },
      { label: "Customer satisfaction", value: "94%" },
    ],
  },
  {
    content:
      "I've worked with many developers over the years, but Dereje stands out for his combination of technical skill and business acumen. He doesn't just build what you ask for—he helps you figure out what you actually need.",
    author: {
      name: "Abebe Kebede",
      role: "Product Manager",
      company: "Toplink Technology",
      image: "/placeholder.svg?height=48&width=48",
    },
    rating: 5,
    metrics: [
      { label: "Project ROI", value: "285%" },
      { label: "Time to market", value: "-35%" },
    ],
  },
  {
    content:
      "The water utility management system Dereje built for us has transformed our operations. His attention to detail, focus on performance, and ability to deliver complex features on time made him an invaluable partner.",
    author: {
      name: "Tigist Hailu",
      role: "Operations Director",
      company: "Merahi Technologies",
      image: "/placeholder.svg?height=48&width=48",
    },
    rating: 5,
    metrics: [
      { label: "Operational efficiency", value: "+47%" },
      { label: "Cost reduction", value: "28%" },
    ],
  },
]

function TestimonialCard({ content, author, rating, metrics }: TestimonialProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <Card
      className="h-full border border-zinc-200 dark:border-zinc-800 hover:border-emerald-200 dark:hover:border-emerald-800 transition-all duration-300 hover:shadow-lg"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <CardContent className="p-6 flex flex-col h-full">
        <div className="mb-4">
          {Array.from({ length: 5 }).map((_, i) => (
            <span key={i} className={i < rating ? "text-yellow-500" : "text-zinc-300 dark:text-zinc-700"}>
              ★
            </span>
          ))}
        </div>
        <div className="relative mb-6 flex-grow">
          <Quote className="absolute text-zinc-200 dark:text-zinc-800 h-8 w-8 -left-1 -top-1 opacity-50" />
          <p className="pl-6 pt-2 text-zinc-700 dark:text-zinc-300 italic">{content}</p>
        </div>

        {metrics && (
          <motion.div
            className="mb-4 grid grid-cols-2 gap-2"
            initial={{ opacity: 0.7, height: 0, marginBottom: 0 }}
            animate={{
              opacity: isHovered ? 1 : 0.7,
              height: isHovered ? "auto" : 0,
              marginBottom: isHovered ? 16 : 0,
            }}
            transition={{ duration: 0.3 }}
          >
            {metrics.map((metric, index) => (
              <div key={index} className="bg-emerald-50 dark:bg-emerald-900/20 p-2 rounded">
                <p className="text-xs text-zinc-500 dark:text-zinc-400">{metric.label}</p>
                <p className="text-lg font-bold text-emerald-600 dark:text-emerald-400">{metric.value}</p>
              </div>
            ))}
          </motion.div>
        )}

        <div className="flex items-center gap-4 mt-auto pt-4 border-t border-zinc-100 dark:border-zinc-800">
          <Avatar className="h-12 w-12 border-2 border-zinc-100 dark:border-zinc-800">
            <AvatarImage src={author.image || "/placeholder.svg?height=48&width=48"} alt={author.name} />
            <AvatarFallback>{author.name.charAt(0)}</AvatarFallback>
          </Avatar>
          <div>
            <h4 className="font-semibold">{author.name}</h4>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">
              {author.role}, {author.company}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export function TestimonialsSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <section id="testimonials" className="py-20 bg-zinc-50 dark:bg-zinc-900/50">
      <div className="container" ref={containerRef}>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            className="inline-block px-3 py-1 mb-4 rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-800 dark:text-emerald-300 text-sm font-medium"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Client Success Stories
          </motion.div>

          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Results That <span className="text-emerald-600 dark:text-emerald-400">Speak</span> For Themselves
          </motion.h2>

          <motion.p
            className="text-lg text-zinc-600 dark:text-zinc-400"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Don't just take my word for it. Here's what clients say about working with me and the measurable impact I've
            had on their businesses.
          </motion.p>
        </div>

        <div className="hidden lg:grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <TestimonialCard {...testimonial} />
            </motion.div>
          ))}
        </div>

        <div className="lg:hidden">
          <Carousel className="w-full">
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="md:basis-1/2">
                  <div className="p-1">
                    <TestimonialCard {...testimonial} />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center mt-8">
              <CarouselPrevious className="static transform-none mx-2" />
              <CarouselNext className="static transform-none mx-2" />
            </div>
          </Carousel>
        </div>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className="inline-block px-6 py-4 bg-white dark:bg-zinc-800 rounded-lg shadow-md border border-zinc-200 dark:border-zinc-700">
            <p className="text-xl font-medium">
              Ready to achieve similar results for your business?{" "}
              <a href="#contact" className="text-emerald-600 dark:text-emerald-400 font-semibold hover:underline">
                Let's talk
              </a>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
