"use client"
import Link from "next/link"
import Image from "next/image"
import { useState, useEffect } from "react"

// How far the page must move before the bar reacts, so small jitters
// (trackpad momentum, mobile address bar) don't make it flicker.
const SCROLL_DELTA = 6

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [hidden, setHidden] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    let lastY = window.scrollY
    let frame = 0

    const update = () => {
      const y = window.scrollY
      setIsScrolled(y > 10)
      if (y <= 64) {
        // Always visible near the top of the page.
        setHidden(false)
      } else if (Math.abs(y - lastY) > SCROLL_DELTA) {
        // Hide while reading down, bring back as soon as the reader scrolls up.
        setHidden(y > lastY)
      } else {
        return
      }
      lastY = y
    }

    const handleScroll = () => {
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(update)
    }

    update()
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-[transform,background-color,border-color,backdrop-filter] duration-300 ease-out motion-reduce:transition-none focus-within:translate-y-0 ${
        mounted && hidden ? "-translate-y-full" : "translate-y-0"
      } ${
        mounted && isScrolled
          ? "bg-background/80 backdrop-blur-md border-b border-border/40"
          : "bg-transparent backdrop-blur-none border-b border-transparent"
      }`}
    >
      <div className="container mx-auto px-8 lg:px-12 max-w-7xl">
        <div className="flex items-center justify-between h-16">
          <Link
            href="/"
            aria-label="Mary Borysova, home"
            className="flex items-center hover:opacity-80 transition-opacity"
          >
            <Image src="/logo-mb.svg" alt="" width={45} height={35} priority className="h-[30px] w-auto" />
          </Link>

          <nav className="hidden md:flex items-center gap-10">
            <Link
              href="/#work"
              className="text-[15px] font-sans text-muted-foreground hover:text-foreground transition-colors"
            >
              Work
            </Link>
            <Link
              href="/speaking"
              className="text-[15px] font-sans text-muted-foreground hover:text-foreground transition-colors"
            >
              Speaking
            </Link>
            <Link
              href="/side-projects"
              className="inline-flex items-center gap-1.5 text-[15px] font-sans text-muted-foreground hover:text-foreground transition-colors"
            >
              AI design
            </Link>
            <a
              href="https://medium.com/@maria_borysova"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[15px] font-sans text-muted-foreground hover:text-foreground transition-colors"
            >
              Writing
            </a>
            <Link
              href="/human"
              className="text-[15px] font-sans text-muted-foreground hover:text-foreground transition-colors"
            >
              About me
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
}
