"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Download, Menu } from "lucide-react"

export function MobileMenu() {
  const [open, setOpen] = useState(false)

  const handleLinkClick = () => {
    setOpen(false)
  }

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon" className="md:hidden">
          <Menu className="h-6 w-6" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[300px] sm:w-[400px]">
        <nav className="flex flex-col gap-4 mt-8">
          <a
            href="/about"
            className="px-4 py-2 text-lg hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-md"
            onClick={handleLinkClick}
          >
            About
          </a>
          <a
            href="#skills"
            className="px-4 py-2 text-lg hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-md"
            onClick={handleLinkClick}
          >
            Skills
          </a>
          <a
            href="#experience"
            className="px-4 py-2 text-lg hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-md"
            onClick={handleLinkClick}
          >
            Experience
          </a>
          <a
            href="#education"
            className="px-4 py-2 text-lg hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-md"
            onClick={handleLinkClick}
          >
            Education
          </a>
          <a
            href="#projects"
            className="px-4 py-2 text-lg hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-md"
            onClick={handleLinkClick}
          >
            Projects
          </a>
          <a
            href="#contact"
            className="px-4 py-2 text-lg hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-md"
            onClick={handleLinkClick}
          >
            Contact
          </a>
          <Button className="mt-4">
            <Download className="mr-2 h-4 w-4" />
            Download CV
          </Button>
        </nav>
      </SheetContent>
    </Sheet>
  )
}
