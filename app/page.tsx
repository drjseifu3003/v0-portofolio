"use client"

import { Button } from "@/components/ui/button"
import { HeroSection } from "@/components/hero-section"
import { ValueProposition } from "@/components/value-proposition"
import { ProjectsSection } from "@/components/projects-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { CTASection } from "@/components/cta-section"
import { ContactSection } from "@/components/contact-section"
import { ThemeToggle } from "@/components/theme-toggle"
import { DevOpsWorkflow } from "@/components/devops-workflow"
import { DevOpsMetrics } from "@/components/devops-metrics"
import { DevOpsTools } from "@/components/devops-tools"
import { WhyChooseMe } from "@/components/why-choose-me"
import { Mail, Menu, X } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-white/90 backdrop-blur-sm dark:bg-zinc-950/90 dark:border-zinc-800">
        <div className="container flex h-16 items-center justify-between">
          <div className="font-bold text-xl">
            <Link href="/" className="text-emerald-600 dark:text-emerald-400">
              Dereje Seifu
              {/* <img src={"/images/logo.avif"} alt="Logo" /> */}
            </Link>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link
              href="#about"
              className="text-sm font-medium hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
            >
              About
            </Link>
            <Link
              href="#services"
              className="text-sm font-medium hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
            >
              Services
            </Link>
            <Link
              href="#projects"
              className="text-sm font-medium hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
            >
              Projects
            </Link>
            <Link
              href="#testimonials"
              className="text-sm font-medium hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
            >
              Testimonials
            </Link>
            <Link
              href="#contact"
              className="text-sm font-medium hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
            >
              Contact
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <ThemeToggle />
            <a href="mailto:Derejeseifu3030@gmail.com" className="hidden md:block">
              <Button className="bg-emerald-600 hover:bg-emerald-700 text-white">
                <Mail className="mr-2 h-4 w-4" />
                Let's Talk
              </Button>
            </a>
            <Button
              variant="outline"
              size="icon"
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white dark:bg-zinc-900 border-t border-zinc-200 dark:border-zinc-800">
            <div className="container py-4 space-y-3">
              <Link
                href="#about"
                className="block py-2 text-sm font-medium hover:text-emerald-600 dark:hover:text-emerald-400"
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </Link>
              <Link
                href="#services"
                className="block py-2 text-sm font-medium hover:text-emerald-600 dark:hover:text-emerald-400"
                onClick={() => setMobileMenuOpen(false)}
              >
                Services
              </Link>
              <Link
                href="#projects"
                className="block py-2 text-sm font-medium hover:text-emerald-600 dark:hover:text-emerald-400"
                onClick={() => setMobileMenuOpen(false)}
              >
                Projects
              </Link>
              <Link
                href="#testimonials"
                className="block py-2 text-sm font-medium hover:text-emerald-600 dark:hover:text-emerald-400"
                onClick={() => setMobileMenuOpen(false)}
              >
                Testimonials
              </Link>
              <Link
                href="#contact"
                className="block py-2 text-sm font-medium hover:text-emerald-600 dark:hover:text-emerald-400"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </Link>
              <div className="pt-2">
                <a href="mailto:Derejeseifu3030@gmail.com" className="block w-full">
                  <Button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white">
                    <Mail className="mr-2 h-4 w-4" />
                    Let's Talk
                  </Button>
                </a>
              </div>
            </div>
          </div>
        )}
      </header>

      <main>
        {/* Hero Section */}
        <HeroSection />

        {/* Why Choose Me */}
        <WhyChooseMe />

        {/* Projects Section */}
        <ProjectsSection />

        {/* Testimonials Section */}
        <TestimonialsSection />

        {/* CTA Section */}
        <CTASection />

        {/* Contact Section */}
        <ContactSection />
      </main>

      {/* Footer */}
      <footer className="border-t bg-white dark:bg-zinc-950 dark:border-zinc-800">
        <div className="container py-12">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <div className="font-bold text-xl mb-2 text-emerald-600 dark:text-emerald-400">Dereje Seifu</div>
              <p className="text-zinc-600 dark:text-zinc-400 text-sm max-w-md">
                Senior Full-Stack Engineer & DevOps Specialist creating premium digital experiences that drive business
                growth.
              </p>
            </div>
            <div className="flex flex-col md:flex-row gap-8">
              <div>
                <h4 className="font-semibold mb-3">Services</h4>
                <ul className="space-y-2">
                  <li>
                    <Link
                      href="#services"
                      className="text-sm text-zinc-600 hover:text-emerald-600 dark:text-zinc-400 dark:hover:text-emerald-400"
                    >
                      Full-Stack Development
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#services"
                      className="text-sm text-zinc-600 hover:text-emerald-600 dark:text-zinc-400 dark:hover:text-emerald-400"
                    >
                      DevOps & Cloud
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#services"
                      className="text-sm text-zinc-600 hover:text-emerald-600 dark:text-zinc-400 dark:hover:text-emerald-400"
                    >
                      SaaS Development
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-3">Connect</h4>
                <ul className="space-y-2">
                  <li>
                    <Link
                      href="#contact"
                      className="text-sm text-zinc-600 hover:text-emerald-600 dark:text-zinc-400 dark:hover:text-emerald-400"
                    >
                      Contact
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://www.linkedin.com/in/drjseifu1991/"
                      className="text-sm text-zinc-600 hover:text-emerald-600 dark:text-zinc-400 dark:hover:text-emerald-400"
                    >
                      LinkedIn
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://github.com/drjseifu1991"
                      className="text-sm text-zinc-600 hover:text-emerald-600 dark:text-zinc-400 dark:hover:text-emerald-400"
                    >
                      GitHub
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t text-center text-sm text-zinc-500 dark:border-zinc-800">
            <p>© {new Date().getFullYear()} Dereje Seifu. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
