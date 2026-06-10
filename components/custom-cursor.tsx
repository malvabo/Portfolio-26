"use client"

import { useEffect, useRef } from "react"

export function CustomCursor() {
  const cursorRef = useRef<SVGSVGElement>(null)
  const dotRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (typeof window === "undefined") return
    if (window.matchMedia("(pointer: coarse)").matches) return

    let cx = -100, cy = -100
    let dx = -100, dy = -100
    let raf: number

    const onMove = (e: MouseEvent) => {
      cx = e.clientX
      cy = e.clientY
    }

    const tick = () => {
      dx += (cx - dx) * 0.14
      dy += (cy - dy) * 0.14
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate(${cx - 6}px, ${cy - 4}px)`
      }
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${dx - 2}px, ${dy - 2}px)`
      }
      raf = requestAnimationFrame(tick)
    }

    window.addEventListener("mousemove", onMove, { passive: true })
    raf = requestAnimationFrame(tick)
    return () => {
      window.removeEventListener("mousemove", onMove)
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <>
      {/* Arrow */}
      <svg
        ref={cursorRef}
        width="20"
        height="24"
        viewBox="0 0 20 24"
        fill="none"
        className="fixed top-0 left-0 z-[9999] pointer-events-none will-change-transform"
        style={{ transform: "translate(-200px,-200px)" }}
        aria-hidden
      >
        <path
          d="M3 2 L3 19 L7.5 14.5 L11 21 L13 20 L9.5 13.5 L16 13.5 Z"
          fill="#0a0a0a"
          stroke="#0a0a0a"
          strokeWidth="0.5"
          strokeLinejoin="round"
          strokeLinecap="round"
        />
      </svg>
      {/* Trailing dot */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 z-[9998] pointer-events-none will-change-transform w-1 h-1 rounded-full bg-black/30"
        style={{ transform: "translate(-200px,-200px)" }}
        aria-hidden
      />
    </>
  )
}
