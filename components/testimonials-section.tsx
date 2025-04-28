"use client"

import { TestimonialCard } from "./testimonial-card"
import { StaggerContainer, StaggerItem } from "./animations"

const testimonials = [
  {
    content:
      "Dereje is an exceptional full-stack developer who consistently delivers high-quality work. His expertise in Next.js and Node.js helped us build a scalable SaaS platform that exceeded our expectations. I highly recommend him for any challenging development project.",
    author: {
      name: "Sarah Johnson",
      role: "CTO",
      company: "TechInnovate Solutions",
      image: "/placeholder.svg?height=48&width=48",
    },
    connectionDegree: 1,
  },
  {
    content:
      "Working with Dereje was a game-changer for our startup. His deep understanding of cloud infrastructure and DevOps practices helped us optimize our deployment pipeline and significantly reduce costs. He's not just a developer but a problem solver who thinks about the big picture.",
    author: {
      name: "Michael Chen",
      role: "Co-founder",
      company: "CloudScale",
      image: "/placeholder.svg?height=48&width=48",
    },
    connectionDegree: 2,
  },
  {
    content:
      "Dereje's work on our Water Utility Management System was outstanding. He developed elegant solutions to complex problems and always delivered on time. His attention to detail and commitment to quality make him a valuable asset to any team.",
    author: {
      name: "Abebe Kebede",
      role: "Project Manager",
      company: "Toplink Technology",
      image: "/placeholder.svg?height=48&width=48",
    },
    connectionDegree: 1,
  },
  {
    content:
      "I had the pleasure of working with Dereje on multiple projects. His technical skills are impressive, but what sets him apart is his ability to communicate complex concepts clearly and collaborate effectively with cross-functional teams. He's a true professional who takes pride in his work.",
    author: {
      name: "Tigist Hailu",
      role: "Senior Product Designer",
      company: "Merahi Technologies",
      image: "/placeholder.svg?height=48&width=48",
    },
    connectionDegree: 1,
  },
]

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-16 scroll-mt-20 bg-zinc-50 dark:bg-zinc-900">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">What People Say</h2>
          <p className="text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
            Recommendations from colleagues and clients who have worked with me on various projects.
          </p>
        </div>

        <div className="relative">
          {/* LinkedIn-inspired UI elements */}
          <div className="absolute top-0 left-0 w-32 h-32 bg-blue-100 dark:bg-blue-900/20 rounded-full blur-3xl opacity-70 -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-40 h-40 bg-blue-100 dark:bg-blue-900/20 rounded-full blur-3xl opacity-70 translate-x-1/3 translate-y-1/3"></div>

          <div className="relative">
            <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {testimonials.map((testimonial, index) => (
                <StaggerItem key={index}>
                  <TestimonialCard {...testimonial} />
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </div>
      </div>
    </section>
  )
}
