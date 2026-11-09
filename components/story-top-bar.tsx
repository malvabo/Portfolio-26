"use client"

import Link from "next/link"
import { useEffect, useState } from "react"
import { ArrowLeft } from "lucide-react"

/** Minimal breadcrumb bar for story case studies: "← Work / Project" */
export function StoryTopBar({ project }: { project: string }) {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-[background-color,backdrop-filter] duration-300 ${
        scrolled ? "bg-background/80 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <nav aria-label="Breadcrumb" className="px-5 md:px-8 h-12 md:h-14 flex items-center">
        <ol className="flex items-center gap-2 text-[15px] leading-none">
          <li>
            <Link
              href="/#work"
              className="group inline-flex items-center gap-2 text-foreground/45 hover:text-foreground transition-colors"
            >
              <ArrowLeft className="w-4 h-4 transition-transform duration-200 group-hover:-translate-x-0.5" strokeWidth={1.75} />
              Work
            </Link>
          </li>
          <li aria-hidden className="text-foreground/30">
            /
          </li>
          <li aria-current="page" className="text-foreground">
            {project}
          </li>
        </ol>
      </nav>
    </header>
  )
}
