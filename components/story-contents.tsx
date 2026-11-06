"use client"

import { useEffect, useRef, useState } from "react"

export type ContentsItem = { id: string; label: string }

const EASE = "cubic-bezier(0.22, 1, 0.36, 1)"
const ACCENT = "#B4532A" // same accent as the cursor and the hero squares

/**
 * Table of contents for story case studies.
 * Always visible on wide screens as a plain list beside the content: a thin
 * rail with a small accent square that slides to the section in view, whose
 * label turns dark. No panel, no border.
 */
export function StoryContents({ items }: { items: ContentsItem[] }) {
  const [active, setActive] = useState(items[0]?.id)
  const [marker, setMarker] = useState<number | null>(null)
  const buttonRefs = useRef<Record<string, HTMLButtonElement | null>>({})

  // The section in view is the last one whose top has passed 35% of the viewport
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

  // Move the marker to the active item
  useEffect(() => {
    const b = active ? buttonRefs.current[active] : null
    if (b) setMarker(b.offsetTop + b.offsetHeight / 2)
  }, [active])

  const go = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" })
  }

  return (
    <div className="fixed left-6 2xl:left-10 top-1/2 -translate-y-1/2 z-40 hidden xl:block">
      <div className="relative flex">
        {/* Rail + marker */}
        <div className="relative w-[9px] shrink-0">
          <div className="absolute inset-y-1 left-1/2 -translate-x-1/2 w-px bg-foreground/15" />
          {marker !== null && (
            <span
              aria-hidden
              className="absolute left-1/2 block w-[7px] h-[7px]"
              style={{
                top: marker,
                background: ACCENT,
                transform: "translate(-50%, -50%)",
                transition: `top .5s ${EASE}`,
              }}
            />
          )}
        </div>

        <nav aria-label="Case study sections" className="flex flex-col">
          {items.map((it) => {
            const isActive = it.id === active
            return (
              <button
                key={it.id}
                ref={(el) => {
                  buttonRefs.current[it.id] = el
                }}
                onClick={() => go(it.id)}
                aria-current={isActive ? "true" : undefined}
                className={`pl-4 pr-2 py-1.5 text-left text-[14px] leading-normal whitespace-nowrap cursor-pointer transition-colors duration-200 ${
                  isActive ? "text-foreground font-medium" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {it.label}
              </button>
            )
          })}
        </nav>
      </div>
    </div>
  )
}
