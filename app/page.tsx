import { HeroSection } from "@/components/hero-section"
import { SkillsSection } from "@/components/skills-section"
import { ProjectsSection } from "@/components/projects-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronRight, Download, Github, Linkedin, Mail, MapPin, Phone } from "lucide-react"
import Link from "next/link"
import { ThemeToggle } from "@/components/theme-toggle"

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-sm dark:bg-zinc-950/80 dark:border-zinc-800">
        <div className="container flex h-16 items-center justify-between">
          <div className="font-bold text-xl">Dereje Seifu</div>
          <nav className="hidden md:flex gap-6">
            <a
              href="#about"
              className="text-sm font-medium hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
            >
              About
            </a>
            <a
              href="#skills"
              className="text-sm font-medium hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
            >
              Skills
            </a>
            <a
              href="#experience"
              className="text-sm font-medium hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
            >
              Experience
            </a>
            <a
              href="#projects"
              className="text-sm font-medium hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
            >
              Projects
            </a>
            <a
              href="#testimonials"
              className="text-sm font-medium hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
            >
              Testimonials
            </a>
            <a
              href="#contact"
              className="text-sm font-medium hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
            >
              Contact
            </a>
          </nav>
          <div className="flex items-center gap-4">
            {/* <ThemeToggle /> */}
            <Button variant="outline" size="sm" className="hidden md:flex">
              <Download className="mr-2 h-4 w-4" />
              Download CV
            </Button>
            <Button variant="outline" size="icon" className="md:hidden">
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
                <line x1="4" x2="20" y1="12" y2="12" />
                <line x1="4" x2="20" y1="6" y2="6" />
                <line x1="4" x2="20" y1="18" y2="18" />
              </svg>
            </Button>
          </div>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <HeroSection />

        {/* About Section */}
        <section id="about" className="py-16 scroll-mt-20 bg-zinc-50 dark:bg-zinc-900">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">About Me</h2>
              <p className="text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
                Senior Full-Stack Engineer with a passion for building scalable and efficient systems.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="md:col-span-2 space-y-4">
                <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  Senior Full-Stack Engineer with over 4 years of experience specializing in Next.js, Node.js, and
                  DevOps. Experienced in building scalable SaaS platforms, optimizing cloud infrastructure (AWS, GCP,
                  Azure), and developing high-performance web applications. Passionate about software architecture,
                  automation, and solving complex problems to create efficient and scalable systems.
                </p>
                <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  Throughout my career, I've worked on a diverse range of projects, from ride-sharing platforms to
                  enterprise resource planning systems. My approach combines technical excellence with a deep
                  understanding of business needs, ensuring that the solutions I build not only work flawlessly but also
                  deliver real value to users and stakeholders.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <div className="flex items-center gap-2">
                    <Phone className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
                    <span>(+251) 0966016473</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
                    <span>Derejeseifu3030@gmail.com</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
                    <span>Ethiopia</span>
                  </div>
                </div>
              </div>
              <div>
                <Card className="h-full border border-zinc-200 dark:border-zinc-800">
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-lg mb-4">Quick Info</h3>
                    <div className="space-y-4">
                      <div>
                        <div className="text-sm text-zinc-500 dark:text-zinc-400">Experience</div>
                        <div className="font-medium">4+ Years</div>
                      </div>
                      <div>
                        <div className="text-sm text-zinc-500 dark:text-zinc-400">Specialization</div>
                        <div className="font-medium">Full-Stack Development, DevOps</div>
                      </div>
                      <div>
                        <div className="text-sm text-zinc-500 dark:text-zinc-400">Education</div>
                        <div className="font-medium">B.Sc. in Software Engineering</div>
                      </div>
                      <div>
                        <div className="text-sm text-zinc-500 dark:text-zinc-400">Languages</div>
                        <div className="font-medium">JavaScript, TypeScript</div>
                      </div>
                      <div className="pt-2">
                        <Button className="w-full">
                          <Download className="mr-2 h-4 w-4" />
                          Download Full Resume
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <SkillsSection />

        {/* Experience Section */}
        <section id="experience" className="py-16 scroll-mt-20 bg-zinc-50 dark:bg-zinc-900">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Work Experience</h2>
              <p className="text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
                My professional journey across various companies and roles.
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="space-y-8">
                <ExperienceCard
                  title="Senior Full-Stack Developer – DevOps"
                  company="AAM Technology Solution"
                  period="02/2024 – 03/2025"
                  responsibilities={[
                    "Developed a scalable ride-sharing and hailing system, ensuring high availability and performance.",
                    "Implemented CI/CD pipelines and automated deployments using Docker, Kubernetes, and AWS.",
                    "Designed and optimized cloud-based microservices architecture, utilizing Kafka for real-time data processing.",
                    "Improved system efficiency, reliability, and scalability by leveraging event-driven architecture.",
                  ]}
                />

                <ExperienceCard
                  title="SQL Server Query Optimizer & Mobile App Developer"
                  company="Yaybe ICT Solution"
                  period="08/2023 – 02/2025"
                  responsibilities={[
                    "Optimized SQL Server stored procedures, enhancing query performance and database efficiency.",
                    "Designed and developed a mobile app for Yaybe ERP, handling the entire process from UI/UX to backend integration.",
                    "Successfully deployed the ERP mobile app for AAAE (Addis Ababa Abattoir Enterprise), streamlining operations and improving user experience.",
                  ]}
                />

                <ExperienceCard
                  title="Frontend Developer – DevOps & Saas"
                  company="Toplink Technology"
                  period="02/2023 – 02/2024"
                  responsibilities={[
                    "Developed and optimized React applications for the SaaS-based Water Utility Information Management System.",
                    "Implemented CI/CD pipelines to automate deployments and streamline development.",
                    "Managed cloud deployments on DigitalOcean, ensuring scalability and cost efficiency.",
                    "Enhanced system performance through code-splitting, caching, and lazy loading techniques, improving user experience.",
                  ]}
                />

                <ExperienceCard
                  title="Backend Developer"
                  company="Birabiro Taxi"
                  period="03/2023 – 05/2023"
                  responsibilities={[
                    "Developed and maintained the backend system for Birabiro Taxi, ensuring reliability and scalability.",
                    "Designed and optimized APIs for seamless communication between mobile apps and backend services.",
                    "Implemented authentication, payment integrations, and real-time ride management features.",
                    "Improved system performance by optimizing database queries and server responses.",
                  ]}
                />
              </div>

              <div className="mt-8 text-center">
                <Button variant="outline">
                  View More Experience
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <ProjectsSection />

        {/* Testimonials Section */}
        <TestimonialsSection />

        {/* Education Section */}
        <section id="education" className="py-16 scroll-mt-20 bg-white dark:bg-zinc-950">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Education & Training</h2>
              <p className="text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
                My academic background and professional development.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <Card className="border border-zinc-200 dark:border-zinc-800">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-emerald-100 dark:bg-emerald-900/30 p-3 rounded-full">
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
                        className="h-6 w-6 text-emerald-600 dark:text-emerald-400"
                      >
                        <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                        <path d="M6 12v5c3 3 9 3 12 0v-5" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-1">Bachelor's of Science, Software Engineering</h3>
                      <p className="text-zinc-600 dark:text-zinc-400 mb-2">Bahir Dar University</p>
                      <p className="text-sm text-zinc-500">09/2018 – 08/2022</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border border-zinc-200 dark:border-zinc-800">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-purple-100 dark:bg-purple-900/30 p-3 rounded-full">
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
                        className="h-6 w-6 text-purple-600 dark:text-purple-400"
                      >
                        <circle cx="12" cy="12" r="10" />
                        <path d="M12 16v-4" />
                        <path d="M12 8h.01" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-1">Human Centered Design</h3>
                      <p className="text-zinc-600 dark:text-zinc-400 mb-2">
                        BiT Business Incubation and Techno Entrepreneurship Center
                      </p>
                      <p className="text-sm text-zinc-500">04/2022 – 05/2022</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16 scroll-mt-20 bg-zinc-50 dark:bg-zinc-900">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Get In Touch</h2>
              <p className="text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
                Feel free to reach out for job opportunities, collaborations, or just to say hello!
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="space-y-6">
                <div className="bg-white dark:bg-zinc-800 rounded-lg p-6 border border-zinc-200 dark:border-zinc-700">
                  <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="bg-emerald-100 dark:bg-emerald-900/30 p-3 rounded-full">
                        <Phone className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
                      </div>
                      <div>
                        <div className="text-sm text-zinc-500 dark:text-zinc-400">Phone</div>
                        <div className="font-medium">(+251) 0966016473</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="bg-emerald-100 dark:bg-emerald-900/30 p-3 rounded-full">
                        <Mail className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
                      </div>
                      <div>
                        <div className="text-sm text-zinc-500 dark:text-zinc-400">Email</div>
                        <div className="font-medium">Derejeseifu3030@gmail.com</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="bg-emerald-100 dark:bg-emerald-900/30 p-3 rounded-full">
                        <Linkedin className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
                      </div>
                      <div>
                        <div className="text-sm text-zinc-500 dark:text-zinc-400">LinkedIn</div>
                        <div className="font-medium">Connect with me on LinkedIn</div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 pt-6 border-t border-zinc-200 dark:border-zinc-700">
                    <h4 className="font-medium mb-3">Follow me on social media</h4>
                    <div className="flex gap-4">
                      <Link
                        href="#"
                        className="bg-zinc-100 dark:bg-zinc-800 p-3 rounded-full hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors"
                      >
                        <Linkedin className="h-5 w-5" />
                        <span className="sr-only">LinkedIn</span>
                      </Link>
                      <Link
                        href="#"
                        className="bg-zinc-100 dark:bg-zinc-800 p-3 rounded-full hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors"
                      >
                        <Github className="h-5 w-5" />
                        <span className="sr-only">GitHub</span>
                      </Link>
                      <Link
                        href="#"
                        className="bg-zinc-100 dark:bg-zinc-800 p-3 rounded-full hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors"
                      >
                        <Mail className="h-5 w-5" />
                        <span className="sr-only">Email</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <Card className="border border-zinc-200 dark:border-zinc-800">
                  <CardContent className="p-6">
                    <form className="space-y-4">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <label htmlFor="name" className="text-sm font-medium">
                            Name
                          </label>
                          <input
                            id="name"
                            type="text"
                            className="w-full px-3 py-2 border rounded-md dark:bg-zinc-800 dark:border-zinc-700"
                            placeholder="Your Name"
                          />
                        </div>
                        <div className="space-y-2">
                          <label htmlFor="email" className="text-sm font-medium">
                            Email
                          </label>
                          <input
                            id="email"
                            type="email"
                            className="w-full px-3 py-2 border rounded-md dark:bg-zinc-800 dark:border-zinc-700"
                            placeholder="Your Email"
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="subject" className="text-sm font-medium">
                          Subject
                        </label>
                        <input
                          id="subject"
                          type="text"
                          className="w-full px-3 py-2 border rounded-md dark:bg-zinc-800 dark:border-zinc-700"
                          placeholder="Subject"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="message" className="text-sm font-medium">
                          Message
                        </label>
                        <textarea
                          id="message"
                          rows={4}
                          className="w-full px-3 py-2 border rounded-md dark:bg-zinc-800 dark:border-zinc-700"
                          placeholder="Your Message"
                        ></textarea>
                      </div>
                      <Button className="w-full">Send Message</Button>
                    </form>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t bg-white dark:bg-zinc-950 dark:border-zinc-800">
        <div className="container py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <div className="font-bold text-xl mb-2">Dereje Seifu</div>
              <p className="text-zinc-600 dark:text-zinc-400 text-sm">
                Senior Full-Stack Engineer specializing in Next.js, Node.js, and DevOps
              </p>
            </div>
            <div className="flex gap-4">
              <Link
                href="#"
                className="text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 transition-colors"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link
                href="#"
                className="text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 transition-colors"
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link
                href="mailto:Derejeseifu3030@gmail.com"
                className="text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 transition-colors"
              >
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </Link>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t text-center text-sm text-zinc-500 dark:border-zinc-800">
            © {new Date().getFullYear()} Dereje Seifu. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}

function ExperienceCard({
  title,
  company,
  period,
  responsibilities,
}: {
  title: string
  company: string
  period: string
  responsibilities: string[]
}) {
  return (
    <Card className="border border-zinc-200 dark:border-zinc-800 overflow-hidden">
      <CardContent className="p-6">
        <div className="flex flex-col md:flex-row md:items-center gap-4">
          <div className="bg-emerald-100 dark:bg-emerald-900/30 p-4 rounded-full">
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
              className="h-6 w-6 text-emerald-600 dark:text-emerald-400"
            >
              <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
              <line x1="16" x2="16" y1="2" y2="6" />
              <line x1="8" x2="8" y1="2" y2="6" />
              <line x1="3" x2="21" y1="10" y2="10" />
              <path d="m9 16 2 2 4-4" />
            </svg>
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-semibold">{title}</h3>
            <div className="flex flex-wrap items-center gap-2 mt-1 mb-3">
              <span className="font-medium text-zinc-700 dark:text-zinc-300">{company}</span>
              <span className="text-zinc-500">•</span>
              <span className="text-sm text-zinc-500">{period}</span>
            </div>
            <ul className="space-y-2 list-disc pl-5 text-zinc-600 dark:text-zinc-400">
              {responsibilities.map((responsibility, index) => (
                <li key={index}>{responsibility}</li>
              ))}
            </ul>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
