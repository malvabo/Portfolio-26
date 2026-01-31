"use client"
import Link from "next/link"
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
            className="text-base font-sans font-medium tracking-tight text-foreground hover:text-primary transition-colors"
          >
            Maria Borysova
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
            <a
              href="https://medium.com/@maria_borysova"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[15px] font-sans text-muted-foreground hover:text-foreground transition-colors"
            >
              Writing
            </a>
          </nav>
        </div>
      </div>
    </header>
  )
}
