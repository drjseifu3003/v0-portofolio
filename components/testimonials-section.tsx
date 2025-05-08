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
    company?: string
    image?: string
  }
  rating: number
}

const testimonials: TestimonialProps[] = [
  {
    content:
      "Dereje is a dedicated and skilled developer who designed and developed both mobile and web applications from the ground up. His work always stood out for being efficient, well-structured, and user-friendly.",
    author: {
      name: "Tibebu",
      role: "ICT Director",
      company: "AAAE",
      image: "/placeholder.svg?height=48&width=48",
    },
    rating: 5,
  },
  {
    content:
      "Dereje is one of the most skilled Full Stack Engineers I've worked with. His command of JavaScript, TypeScript, and React is top-notch. He's also highly capable in AWS and DevOps, showing deep understanding of CI/CD pipelines and cloud infrastructure.",
    author: {
      name: "Kanehiwot Mengistu",
      role: "General Manager",
      company: "Technical Team Manager",
      image: "/placeholder.svg?height=48&width=48",
    },
    rating: 5,
  },
  {
    content:
      "Dereje is exactly the sort of developer any company would love. He simplified a complex ERP system concept I'd struggled with for days in just minutes. He has a great way of breaking down problems and always writes clean, well-organized code.",
    author: {
      name: "Bushra Mustofa",
      role: "Senior DevOps Engineer",
      image: "/placeholder.svg?height=48&width=48",
    },
    rating: 5,
  },
  {
    content:
      "Dereje goes above and beyond to ensure projects are completed to the highest standards. He's hardworking, dedicated, and always willing to learn new skills and technologies. His ability to work independently and deliver high-quality work is a testament to his excellence.",
    author: {
      name: "Dawit Michael",
      role: "Senior Software Engineer",
      image: "/placeholder.svg?height=48&width=48",
    },
    rating: 5,
  },
  {
    content:
      "Dereje consistently stood out as a highly talented frontend developer with exceptional attention to detail and clean coding style. He also brought valuable DevOps experience, contributing meaningfully to our deployment workflows and showing solid CI/CD understanding.",
    author: {
      name: "Abel Teha",
      role: "Senior Software Engineer",
      image: "/placeholder.svg?height=48&width=48",
    },
    rating: 5,
  },
]

function TestimonialCard({ content, author, rating }: TestimonialProps) {
  return (
    <Card className="h-full border border-zinc-200 dark:border-zinc-800 hover:border-emerald-200 dark:hover:border-emerald-800 transition-all duration-300 hover:shadow-lg">
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

        <div className="flex items-center gap-4 mt-auto pt-4 border-t border-zinc-100 dark:border-zinc-800">
          <Avatar className="h-12 w-12 border-2 border-zinc-100 dark:border-zinc-800">
            <AvatarImage src={author.image || "/placeholder.svg?height=48&width=48"} alt={author.name} />
            <AvatarFallback>{author.name.charAt(0)}</AvatarFallback>
          </Avatar>
          <div>
            <h4 className="font-semibold">{author.name}</h4>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">
              {author.role}
              {author.company ? `, ${author.company}` : ""}
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
            Testimonials
          </motion.div>

          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            What <span className="text-emerald-600 dark:text-emerald-400">Colleagues</span> Say
          </motion.h2>

          <motion.p
            className="text-lg text-zinc-600 dark:text-zinc-400"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Feedback from professionals who have worked with me on real-world projects.
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
              Ready to work together?{" "}
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
