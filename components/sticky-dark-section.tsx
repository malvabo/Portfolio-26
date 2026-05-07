"use client"

import { useEffect, useRef, ReactNode } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

interface StickyDarkSectionProps {
  children: ReactNode
  /** Total scroll runway for the section, as a multiplier of viewport height. */
  totalVh?: number
  /** Vertical depth of the arch on entry/exit, in vh units. */
  curveVh?: number
  id?: string
}

export function StickyDarkSection({
  children,
  totalVh = 3.5,
  curveVh = 60,
  id,
}: StickyDarkSectionProps) {
  const sectionRef = useRef<HTMLElement>(null)
  const panelRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const section = sectionRef.current
    const panel = panelRef.current
    if (!section || !panel) return

    const triggers: ScrollTrigger[] = []

    triggers.push(
      ScrollTrigger.create({
        trigger: section,
        start: "top bottom",
        end: "top top",
        scrub: true,
        onUpdate: (self) => {
          const t = 1 - self.progress
          const rx = 50 * t
          const ry = curveVh * t
          panel.style.borderTopLeftRadius = `${rx}% ${ry}vh`
          panel.style.borderTopRightRadius = `${rx}% ${ry}vh`
        },
      }),
    )

    triggers.push(
      ScrollTrigger.create({
        trigger: section,
        start: "bottom bottom",
        end: "bottom top",
        scrub: true,
        onUpdate: (self) => {
          const t = self.progress
          const rx = 50 * t
          const ry = curveVh * t
          panel.style.borderBottomLeftRadius = `${rx}% ${ry}vh`
          panel.style.borderBottomRightRadius = `${rx}% ${ry}vh`
        },
      }),
    )

    return () => {
      triggers.forEach((t) => t.kill())
    }
  }, [curveVh])

  const initialTopRadius = `50% ${curveVh}vh`

  return (
    <section
      ref={sectionRef}
      id={id}
      style={{
        position: "relative",
        height: `${totalVh * 100}vh`,
      }}
    >
      <div
        ref={panelRef}
        style={{
          position: "sticky",
          top: 0,
          height: "100vh",
          width: "100%",
          overflow: "hidden",
          backgroundColor: "#000",
          color: "#fff",
          display: "flex",
          alignItems: "center",
          borderTopLeftRadius: initialTopRadius,
          borderTopRightRadius: initialTopRadius,
          borderBottomLeftRadius: "0",
          borderBottomRightRadius: "0",
          willChange: "border-radius",
        }}
      >
        <div style={{ width: "100%" }}>{children}</div>
      </div>
    </section>
  )
}
