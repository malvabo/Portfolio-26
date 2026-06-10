"use client"

import { useEffect, useRef } from "react"

export function CustomCursor() {
  const cursorRef = useRef<SVGSVGElement>(null)

  useEffect(() => {
    if (typeof window === "undefined") return
    if (window.matchMedia("(pointer: coarse)").matches) return

    let cx = -100, cy = -100
    let raf: number

    const onMove = (e: MouseEvent) => {
      cx = e.clientX
      cy = e.clientY
    }

    const tick = () => {
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate(${cx - 5}px, ${cy - 3}px)`
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
      <svg
        ref={cursorRef}
        width="17"
        height="20"
        viewBox="0 0 20 24"
        fill="none"
        className="fixed top-0 left-0 z-[9999] pointer-events-none will-change-transform"
        style={{ transform: "translate(-200px,-200px)" }}
        aria-hidden
      >
        <path
          d="M3 2 L3 19 L7.5 14.5 L11 21 L13 20 L9.5 13.5 L16 13.5 Z"
          fill="#1e3a5f"
          stroke="#1e3a5f"
          strokeWidth="0.5"
          strokeLinejoin="round"
          strokeLinecap="round"
        />
      </svg>
    </>
  )
}
