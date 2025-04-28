import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { ChevronRight, Download, Github, Linkedin, Mail, MapPin, Phone } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-50 to-zinc-100 dark:from-zinc-900 dark:to-zinc-800">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-sm dark:bg-zinc-950/80 dark:border-zinc-800">
        <div className="container flex h-16 items-center justify-between">
          <div className="font-bold text-xl">Dereje Seifu</div>
          <nav className="hidden md:flex gap-6">
            <a href="#about" className="text-sm font-medium hover:text-zinc-600 dark:hover:text-zinc-300">
              About
            </a>
            <a href="#skills" className="text-sm font-medium hover:text-zinc-600 dark:hover:text-zinc-300">
              Skills
            </a>
            <a href="#experience" className="text-sm font-medium hover:text-zinc-600 dark:hover:text-zinc-300">
              Experience
            </a>
            <a href="#education" className="text-sm font-medium hover:text-zinc-600 dark:hover:text-zinc-300">
              Education
            </a>
            <a href="#projects" className="text-sm font-medium hover:text-zinc-600 dark:hover:text-zinc-300">
              Projects
            </a>
            <a href="#contact" className="text-sm font-medium hover:text-zinc-600 dark:hover:text-zinc-300">
              Contact
            </a>
          </nav>
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
      </header>

      <main className="container py-8 md:py-12">
        {/* Hero Section */}
        <section className="flex flex-col md:flex-row items-center gap-8 py-12">
          <div className="w-full md:w-1/2 space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Senior Full-Stack Engineer</h1>
            <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-[600px]">
              Specializing in Next.js, Node.js, and DevOps with 4+ years of experience building scalable SaaS platforms
              and high-performance web applications.
            </p>
            <div className="flex gap-4 pt-4">
              <Button>
                Contact Me
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline">View Projects</Button>
            </div>
            <div className="flex gap-4 pt-2">
              <Link href="#" className="text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link href="#" className="text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link
                href="mailto:Derejeseifu3030@gmail.com"
                className="text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
              >
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </Link>
            </div>
          </div>
          <div className="w-full md:w-1/2 flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-zinc-200 dark:border-zinc-700">
              <Image
                src="/placeholder.svg?height=320&width=320"
                alt="Dereje Seifu"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-12 scroll-mt-20">
          <h2 className="text-3xl font-bold mb-6">About Me</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2 space-y-4">
              <p className="text-zinc-600 dark:text-zinc-400">
                Senior Full-Stack Engineer with over 4 years of experience specializing in Next.js, Node.js, and DevOps.
                Experienced in building scalable SaaS platforms, optimizing cloud infrastructure (AWS, GCP, Azure), and
                developing high-performance web applications. Passionate about software architecture, automation, and
                solving complex problems to create efficient and scalable systems.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-zinc-500" />
                  <span>(+251) 0966016473</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-zinc-500" />
                  <span>Derejeseifu3030@gmail.com</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-zinc-500" />
                  <span>Ethiopia</span>
                </div>
              </div>
            </div>
            <div>
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-4">Quick Info</h3>
                  <div className="space-y-3">
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
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-12 scroll-mt-20">
          <h2 className="text-3xl font-bold mb-6">Skills</h2>
          <Tabs defaultValue="frontend">
            <TabsList className="mb-6">
              <TabsTrigger value="frontend">Frontend</TabsTrigger>
              <TabsTrigger value="backend">Backend</TabsTrigger>
              <TabsTrigger value="devops">DevOps</TabsTrigger>
              <TabsTrigger value="saas">SaaS</TabsTrigger>
            </TabsList>
            <TabsContent value="frontend" className="space-y-4">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <SkillCard title="Next.js" level="Expert" />
                <SkillCard title="React.js" level="Expert" />
                <SkillCard title="TypeScript" level="Expert" />
                <SkillCard title="JavaScript" level="Expert" />
                <SkillCard title="Redux" level="Advanced" />
                <SkillCard title="React Query" level="Advanced" />
                <SkillCard title="Redux Toolkit" level="Advanced" />
                <SkillCard title="Framer" level="Intermediate" />
                <SkillCard title="Performance Optimization" level="Advanced" />
                <SkillCard title="SEO" level="Advanced" />
              </div>
            </TabsContent>
            <TabsContent value="backend" className="space-y-4">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <SkillCard title="Node.js" level="Expert" />
                <SkillCard title="RESTful API" level="Expert" />
                <SkillCard title="GraphQL" level="Advanced" />
                <SkillCard title="Microservices" level="Advanced" />
                <SkillCard title="PostgreSQL" level="Advanced" />
                <SkillCard title="MySQL" level="Advanced" />
                <SkillCard title="MongoDB" level="Advanced" />
                <SkillCard title="SQL Server" level="Advanced" />
                <SkillCard title="System Design" level="Advanced" />
              </div>
            </TabsContent>
            <TabsContent value="devops" className="space-y-4">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <SkillCard title="AWS" level="Advanced" />
                <SkillCard title="GCP" level="Advanced" />
                <SkillCard title="Azure" level="Advanced" />
                <SkillCard title="CI/CD" level="Advanced" />
                <SkillCard title="Github Actions" level="Advanced" />
                <SkillCard title="Jenkins" level="Intermediate" />
                <SkillCard title="Docker" level="Advanced" />
                <SkillCard title="Kubernetes" level="Advanced" />
                <SkillCard title="Terraform" level="Intermediate" />
              </div>
            </TabsContent>
            <TabsContent value="saas" className="space-y-4">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <SkillCard title="Multitenancy" level="Advanced" />
                <SkillCard title="SaaS Architecture" level="Advanced" />
                <SkillCard title="Scalable Systems" level="Advanced" />
                <SkillCard title="Cloud Infrastructure" level="Advanced" />
              </div>
            </TabsContent>
          </Tabs>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-12 scroll-mt-20">
          <h2 className="text-3xl font-bold mb-6">Work Experience</h2>
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

            <ExperienceCard
              title="Full-Stack Developer"
              company="Black Bridge Technology"
              period="01/2023 – 04/2023"
              responsibilities={[
                "Led Next.js development efforts to create dynamic and performant web applications.",
                "Enforced strict type checking with TypeScript to improve code quality and facilitate team collaboration.",
                "Utilized Next.js's server-side rendering capabilities to enhance application performance.",
                "Improved load times, SEO, and user experience by pre-rendering pages on the server.",
                "Integrated Ant Design into the user interface for a visually appealing and user-friendly experience.",
              ]}
            />

            <ExperienceCard
              title="Full-Stack Developer"
              company="Rensys Engineering"
              period="03/2022 – 01/2023"
              responsibilities={[
                "Developed and maintained full-stack applications, ensuring seamless frontend and backend integration.",
                "Implemented authentication, authorization, and security best practices for robust application security.",
                "Enhanced user experience by optimizing frontend performance and improving UI/UX design.",
              ]}
            />

            <ExperienceCard
              title="Full-Stack Developer & UX/UI Designer"
              company="Merahi Technologies"
              period="03/2020 – 09/2022"
              responsibilities={[
                "Developed and maintained web and mobile applications using React.js, Redux.js, TypeScript, Node.js, and Express.js.",
                "Designed and implemented scalable backend solutions with SQL and MongoDB, ensuring high performance.",
                "Built and optimized GraphQL APIs for efficient data fetching and seamless front-end integration.",
                "Led UI/UX design efforts, creating intuitive and visually appealing interfaces with Tailwind CSS.",
                "Developed Android applications using Java, enhancing cross-platform user experiences.",
                "Authored API documentation for streamlined development and integration processes.",
              ]}
            />
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="py-12 scroll-mt-20">
          <h2 className="text-3xl font-bold mb-6">Education & Training</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">Bachelor's of Science, Software Engineering</h3>
                <p className="text-zinc-600 dark:text-zinc-400 mb-2">Bahir Dar University</p>
                <p className="text-sm text-zinc-500">09/2018 – 08/2022</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">Human Centered Design</h3>
                <p className="text-zinc-600 dark:text-zinc-400 mb-2">
                  BiT Business Incubation and Techno Entrepreneurship Center
                </p>
                <p className="text-sm text-zinc-500">04/2022 – 05/2022</p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-12 scroll-mt-20">
          <h2 className="text-3xl font-bold mb-6">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ProjectCard
              title="WUMIS"
              description="Water Utility Management System used by 20+ companies, each serving 100K+ users. It offers automated billing, financial tracking, HR management, and asset tracking, helping utilities streamline operations."
              link="wumis.et"
              technologies={["Next.js", "React", "Node.js", "SaaS"]}
            />

            <ProjectCard
              title="Yaybe ERP Mobile App"
              description="An optimized mobile version of the Yaybe ERP system, used by over 20 organizations for 10+ years. Successfully deployed for Addis Ababa Abattoir Enterprise (AAAE)."
              technologies={["Mobile Development", "ERP", "UI/UX Design"]}
            />

            <ProjectCard
              title="Hulu Plus"
              description="An all-in-one platform designed to streamline transportation and delivery services. It includes Hulu Ride, a reliable ride-sharing service, and Hulu Delivery for efficient delivery needs."
              link="huluplus.et"
              technologies={["Full-Stack", "Ride-Sharing", "Delivery System"]}
            />

            <ProjectCard
              title="Universal Client Management System"
              description="A SaaS-based dynamic client management workflow system designed to streamline and automate workflows, from sales to customer service. It adapts to various business needs."
              technologies={["SaaS", "Workflow Automation", "Client Management"]}
            />
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-12 scroll-mt-20">
          <h2 className="text-3xl font-bold mb-6">Contact Me</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <p className="text-zinc-600 dark:text-zinc-400">
                Feel free to reach out to me for job opportunities, collaborations, or just to say hello!
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="bg-zinc-100 dark:bg-zinc-800 p-3 rounded-full">
                    <Phone className="h-5 w-5 text-zinc-700 dark:text-zinc-300" />
                  </div>
                  <div>
                    <div className="text-sm text-zinc-500 dark:text-zinc-400">Phone</div>
                    <div className="font-medium">(+251) 0966016473</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-zinc-100 dark:bg-zinc-800 p-3 rounded-full">
                    <Mail className="h-5 w-5 text-zinc-700 dark:text-zinc-300" />
                  </div>
                  <div>
                    <div className="text-sm text-zinc-500 dark:text-zinc-400">Email</div>
                    <div className="font-medium">Derejeseifu3030@gmail.com</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-zinc-100 dark:bg-zinc-800 p-3 rounded-full">
                    <Linkedin className="h-5 w-5 text-zinc-700 dark:text-zinc-300" />
                  </div>
                  <div>
                    <div className="text-sm text-zinc-500 dark:text-zinc-400">LinkedIn</div>
                    <div className="font-medium">Connect with me on LinkedIn</div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <Card>
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
              <Link href="#" className="text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link href="#" className="text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link
                href="mailto:Derejeseifu3030@gmail.com"
                className="text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
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

function SkillCard({ title, level }: { title: string; level: string }) {
  return (
    <Card>
      <CardContent className="p-4">
        <h3 className="font-medium">{title}</h3>
        <Badge variant="outline" className="mt-2">
          {level}
        </Badge>
      </CardContent>
    </Card>
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
    <Card>
      <CardContent className="p-6">
        <h3 className="text-xl font-semibold">{title}</h3>
        <div className="flex items-center gap-2 mt-1 mb-3">
          <span className="font-medium text-zinc-700 dark:text-zinc-300">{company}</span>
          <span className="text-zinc-500">•</span>
          <span className="text-sm text-zinc-500">{period}</span>
        </div>
        <ul className="space-y-2 list-disc pl-5 text-zinc-600 dark:text-zinc-400">
          {responsibilities.map((responsibility, index) => (
            <li key={index}>{responsibility}</li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}

function ProjectCard({
  title,
  description,
  link,
  technologies,
}: {
  title: string
  description: string
  link?: string
  technologies: string[]
}) {
  return (
    <Card className="overflow-hidden">
      <div className="h-48 bg-zinc-100 dark:bg-zinc-800 relative">
        <Image src="/placeholder.svg?height=192&width=384" alt={title} fill className="object-cover" />
      </div>
      <CardContent className="p-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-zinc-600 dark:text-zinc-400 mb-4">{description}</p>
        {link && (
          <div className="mb-4">
            <a
              href={`https://${link}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-600 dark:text-emerald-400 hover:underline flex items-center"
            >
              {link}
              <ChevronRight className="h-4 w-4 ml-1" />
            </a>
          </div>
        )}
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech, index) => (
            <Badge key={index} variant="secondary">
              {tech}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
