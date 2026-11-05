"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { ArrowLeft } from "lucide-react"

// Distance kept between the fixed header and a section's top after a jump.
const SCROLL_OFFSET = 96

// Every case study sidebar renders BackLinkSidebar next to its section nav,
// so the nav behaviour lives here: links scroll smoothly instead of jumping,
// and the section being read is bold.
function useCaseStudyNav() {
  useEffect(() => {
    const nav = document.querySelector<HTMLElement>('nav[aria-label="Case study sections"]')
    if (!nav) return
    const links = Array.from(nav.querySelectorAll<HTMLAnchorElement>('a[href^="#"]'))
    const entries = links
      .map((link) => ({ link, target: document.getElementById(link.hash.slice(1)) }))
      .filter((e): e is { link: HTMLAnchorElement; target: HTMLElement } => e.target !== null)
    if (entries.length === 0) return

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches

    const setActive = (active: HTMLAnchorElement | null) => {
      for (const { link } of entries) {
        const on = link === active
        link.classList.toggle("font-semibold", on)
        link.classList.toggle("text-foreground", on)
        link.classList.toggle("text-muted-foreground", !on)
        if (on) link.setAttribute("aria-current", "location")
        else link.removeAttribute("aria-current")
      }
    }

    const update = () => {
      const line = SCROLL_OFFSET + 40
      let current: HTMLAnchorElement | null = null
      for (const { link, target } of entries) {
        if (target.getBoundingClientRect().top - line <= 0) current = link
      }
      // At the very bottom, the last section counts as read even if short.
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4) {
        current = entries[entries.length - 1].link
      }
      setActive(current ?? entries[0].link)
    }

    const onClick = (event: MouseEvent) => {
      const link = event.currentTarget as HTMLAnchorElement
      const target = document.getElementById(link.hash.slice(1))
      if (!target) return
      event.preventDefault()
      const top = target.getBoundingClientRect().top + window.scrollY - SCROLL_OFFSET
      window.scrollTo({ top, behavior: reduceMotion ? "auto" : "smooth" })
      history.replaceState(null, "", link.hash)
    }

    let frame = 0
    const onScroll = () => {
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(update)
    }

    for (const { link } of entries) link.addEventListener("click", onClick)
    window.addEventListener("scroll", onScroll, { passive: true })
    window.addEventListener("resize", onScroll)
    update()
    return () => {
      cancelAnimationFrame(frame)
      for (const { link } of entries) link.removeEventListener("click", onClick)
      window.removeEventListener("scroll", onScroll)
      window.removeEventListener("resize", onScroll)
    }
  }, [])
}

export function BackLinkSidebar() {
  const router = useRouter()
  useCaseStudyNav()
  return (
    <button
      onClick={() => router.back()}
      className="block text-xs font-mono tracking-wider uppercase text-muted-foreground hover:text-foreground transition-colors mb-10 leading-none cursor-pointer"
    >
      <span className="inline-flex items-baseline gap-2">
        <ArrowLeft className="w-3 h-3 shrink-0" />
        All projects
      </span>
    </button>
  )
}

export function BackLinkFooter() {
  const router = useRouter()
  return (
    <button
      onClick={() => router.back()}
      className="inline-flex items-center gap-2 text-[17px] hover:opacity-70 transition-opacity cursor-pointer"
    >
      <ArrowLeft className="w-4 h-4" />
      Back to all projects
    </button>
  )
}
