"use client"

import { useEffect, useRef, useState } from "react"

/**
 * Hover cursor for case cards: a square "View case" tag in the case's own colour.
 * Shows over any element with data-case-cursor="<case slug>"; everywhere else the native cursor stays.
 * Mouse devices only. Reduced motion skips the grow-in.
 */

const COLOURS: Record<string, { bg: string; ink: string }> = {
  bodyspec: { bg: "#DCEDE6", ink: "#2F6B55" },
  tempstars: { bg: "#D7E0F0", ink: "#28447A" },
  "paid-plans": { bg: "#F6B98F", ink: "#3D2A1E" },
  paa: { bg: "#ECE3F3", ink: "#5B4A78" },
  conduit: { bg: "#28447A", ink: "#FFFFFF" },
  veeqo: { bg: "#E8E3DD", ink: "#3D3D3D" },
}
const FALLBACK = { bg: "#D7E0F0", ink: "#28447A" }

export function CaseCursor() {
  const [enabled, setEnabled] = useState(false)
  const [slug, setSlug] = useState<string | null>(null)
  const rootRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const mq = window.matchMedia("(hover: hover) and (pointer: fine)")
    const update = () => setEnabled(mq.matches)
    update()
    mq.addEventListener("change", update)
    return () => mq.removeEventListener("change", update)
  }, [])

  useEffect(() => {
    if (!enabled) return
    const html = document.documentElement
    html.classList.add("case-cursor-on")
    let frame = 0
    let last = { x: 0, y: 0, target: null as Element | null }

    const tick = () => {
      frame = 0
      const { x, y, target } = last
      if (rootRef.current) rootRef.current.style.transform = `translate3d(${x}px, ${y}px, 0)`
      const card = target?.closest<HTMLElement>("[data-case-cursor]")
      const off = target?.closest("[data-no-case-cursor]")
      const next = card && !off ? card.dataset.caseCursor || "" : null
      setSlug((s) => (s === next ? s : next))
    }
    const onMove = (e: MouseEvent) => {
      last = { x: e.clientX, y: e.clientY, target: e.target as Element }
      if (!frame) frame = requestAnimationFrame(tick)
    }
    const onScroll = () => {
      last.target = document.elementFromPoint(last.x, last.y)
      if (!frame) frame = requestAnimationFrame(tick)
    }
    const onLeave = (e: MouseEvent) => {
      if (!e.relatedTarget) setSlug(null)
    }

    window.addEventListener("mousemove", onMove, { passive: true })
    window.addEventListener("scroll", onScroll, { passive: true })
    document.addEventListener("mouseout", onLeave)
    return () => {
      html.classList.remove("case-cursor-on")
      window.removeEventListener("mousemove", onMove)
      window.removeEventListener("scroll", onScroll)
      document.removeEventListener("mouseout", onLeave)
      if (frame) cancelAnimationFrame(frame)
    }
  }, [enabled])

  if (!enabled) return null
  const on = slug !== null
  const c = (slug && COLOURS[slug]) || FALLBACK

  return (
    <div ref={rootRef} aria-hidden className="fixed left-0 top-0 z-[9999] pointer-events-none">
      <span
        className="case-cursor-tag inline-flex items-center gap-1.5 whitespace-nowrap px-2 py-1.5 font-sans text-[13px] font-medium leading-none shadow-[0_4px_12px_rgba(0,0,0,0.14)]"
        style={{
          background: c.bg,
          color: c.ink,
          opacity: on ? 1 : 0,
          transform: on ? "scale(1)" : "scale(0.5)",
          transformOrigin: "0 0",
          transition: "opacity .15s ease-out, transform .22s cubic-bezier(.2,.8,.2,1), background-color .15s",
        }}
      >
        View case
        <svg width="11" height="11" viewBox="0 0 18 18" fill="none">
          <path d="M3 9h12M10 4l5 5-5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </span>
    </div>
  )
}
