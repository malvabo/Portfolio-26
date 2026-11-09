"use client"

import { useEffect, useLayoutEffect, useRef, useState } from "react"

export type ContentsItem = { id: string; label: string }

const EASE = "cubic-bezier(0.22, 1, 0.36, 1)"

/**
 * Sticky table of contents for story case studies.
 * Rests as a small pill on the left edge, opens into a bordered panel on
 * hover or keyboard focus, and a dot marks the section in view.
 */
export function StoryContents({ items }: { items: ContentsItem[] }) {
  const [hovered, setOpen] = useState(false)
  // On arrival the panel opens for about two and a half seconds, then folds away, so it's
  // clear the line on the left can be expanded. Skipped for reduced motion.
  const [peek, setPeek] = useState(false)
  const open = hovered || peek

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return
    const show = window.setTimeout(() => setPeek(true), 700)
    const hide = window.setTimeout(() => setPeek(false), 3400)
    return () => {
      window.clearTimeout(show)
      window.clearTimeout(hide)
    }
  }, [])
  const [active, setActive] = useState(items[0]?.id)
  const [size, setSize] = useState({ w: 0, h: 0 })
  const [marker, setMarker] = useState(0)
  const contentRef = useRef<HTMLDivElement>(null)
  const buttonRefs = useRef<Record<string, HTMLButtonElement | null>>({})

  // Measure the open panel once fonts settle
  useLayoutEffect(() => {
    const el = contentRef.current
    if (!el) return
    const measure = () => setSize({ w: el.scrollWidth, h: el.scrollHeight })
    measure()
    const ro = new ResizeObserver(measure)
    ro.observe(el)
    return () => ro.disconnect()
  }, [])

  // Track which section is in view: the last one whose top passed 35% of the viewport
  useEffect(() => {
    const onScroll = () => {
      const line = window.innerHeight * 0.35
      let current = items[0]?.id
      for (const it of items) {
        const el = document.getElementById(it.id)
        if (el && el.getBoundingClientRect().top <= line) current = it.id
      }
      setActive(current)
    }
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    window.addEventListener("resize", onScroll)
    return () => {
      window.removeEventListener("scroll", onScroll)
      window.removeEventListener("resize", onScroll)
    }
  }, [items])

  // Move the dot to the active item
  useEffect(() => {
    const b = active ? buttonRefs.current[active] : null
    if (b) setMarker(b.offsetTop + b.offsetHeight / 2)
  }, [active, size])

  const go = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" })
  }

  const w = open ? size.w + 2 : 8
  const h = open ? size.h + 2 : 64

  return (
    <div
      className="fixed left-4 top-1/2 -translate-y-1/2 z-40 hidden lg:block"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      onFocus={() => setOpen(true)}
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget as Node)) setOpen(false)
      }}
    >
      {/* Offset outline behind the open panel */}
      <div
        aria-hidden
        className="absolute left-0 top-0 border border-foreground/20 rounded-[10px] pointer-events-none"
        style={{
          width: w,
          height: h,
          opacity: open ? 1 : 0,
          transform: open ? "translate(5px, 5px)" : "translate(0, 0)",
          transition: `width .45s ${EASE}, height .45s ${EASE}, opacity .25s ease, transform .45s ${EASE} .05s`,
        }}
      />

      {/* Pill that grows into the panel */}
      <div
        className="relative overflow-hidden"
        style={{
          width: w,
          height: h,
          borderRadius: open ? 10 : 4,
          background: open ? "var(--background)" : "color-mix(in srgb, var(--foreground) 35%, transparent)",
          border: open ? "1px solid color-mix(in srgb, var(--foreground) 22%, transparent)" : "0px solid transparent",
          transition: `width .45s ${EASE}, height .45s ${EASE}, border-radius .3s ease, background-color .2s ease`,
        }}
      >
        <div
          ref={contentRef}
          className="absolute left-0 top-0 w-max pl-2 pr-5 py-3"
          style={{
            opacity: open ? 1 : 0,
            transition: open ? "opacity .25s ease .18s" : "opacity .1s ease",
            pointerEvents: open ? "auto" : "none",
          }}
        >
          <div className="relative flex">
            {/* Rail + dot */}
            <div className="relative w-[13px] shrink-0">
              <div className="absolute inset-y-1 left-1/2 -translate-x-1/2 w-px bg-foreground/20" />
              <div
                className="absolute left-1/2 flex items-center justify-center w-[13px] h-[18px] bg-background"
                style={{
                  top: marker,
                  transform: "translate(-50%, -50%)",
                  transition: `top .5s ${EASE}`,
                }}
              >
                <span className="block w-[7px] h-[7px] rounded-full bg-[#B4532A]" />
              </div>
            </div>

            <nav aria-label="Case study sections" className="flex flex-col gap-0.5">
              {items.map((it, i) => {
                const isActive = it.id === active
                return (
                  <button
                    key={it.id}
                    ref={(el) => {
                      buttonRefs.current[it.id] = el
                    }}
                    onClick={() => go(it.id)}
                    tabIndex={0}
                    aria-current={isActive ? "true" : undefined}
                    className={`px-3 py-1.5 text-left text-[15px] leading-normal whitespace-nowrap cursor-pointer transition-[color,transform] duration-200 hover:translate-x-0.5 ${
                      isActive ? "text-foreground" : "text-foreground/50 hover:text-foreground"
                    }`}
                    style={{
                      transform: open ? "none" : "translateX(-6px)",
                      transition: `color .15s ease, transform .4s ${EASE} ${open ? 0.12 + i * 0.03 : 0}s`,
                    }}
                  >
                    {it.label}
                  </button>
                )
              })}
            </nav>
          </div>
        </div>
      </div>
    </div>
  )
}
