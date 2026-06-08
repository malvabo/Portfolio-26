"use client"
import Link from "next/link"
import Image from "next/image"
import { useState, useEffect } from "react"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    // Check initial scroll position
    handleScroll()

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        mounted && isScrolled
          ? "bg-background/80 backdrop-blur-md border-b border-border/40"
          : "bg-transparent backdrop-blur-none border-b border-transparent"
      }`}
    >
      <div className="container mx-auto px-8 lg:px-12 max-w-7xl">
        <div className="flex items-center justify-between h-16">
          <Link
            href="/"
            className="flex items-center gap-2 text-lg font-sans font-medium tracking-tight text-foreground hover:text-primary transition-colors"
          >
            <Image src="/favicon.png" alt="" width={20} height={20} className="rounded-sm" />
            Mary Borysova
          </Link>

          <nav className="hidden md:flex items-center gap-10">
            <Link
              href="/#work"
              className="text-[17px] font-sans text-muted-foreground hover:text-foreground transition-colors"
            >
              Work
            </Link>
            <Link
              href="/speaking"
              className="text-[17px] font-sans text-muted-foreground hover:text-foreground transition-colors"
            >
              Speaking
            </Link>
            <Link
              href="/side-projects"
              className="inline-flex items-center gap-1.5 text-[17px] font-sans text-muted-foreground hover:text-foreground transition-colors"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <defs>
                  <linearGradient id="star-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#a855f7" />
                    <stop offset="100%" stopColor="#6366f1" />
                  </linearGradient>
                </defs>
                <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6z" fill="url(#star-gradient)"/>
              </svg>
              AI experiments
            </Link>
            <a
              href="https://medium.com/@maria_borysova"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[17px] font-sans text-muted-foreground hover:text-foreground transition-colors"
            >
              Writing
            </a>
          </nav>
        </div>
      </div>
    </header>
  )
}
