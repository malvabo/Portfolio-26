"use client"

import { useEffect, useRef, ReactNode } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

interface StickyDarkSectionProps {
  children: ReactNode
  /** Scroll runway after the pinned panel, as a multiplier of the viewport height. */
  spacerVh?: number
  /** Bridge height (before & after), as a multiplier of the viewport height. */
  bridgeVh?: number
  id?: string
  className?: string
}

export function StickyDarkSection({
  children,
  spacerVh = 1.5,
  bridgeVh = 0.6,
  id,
  className = "",
}: StickyDarkSectionProps) {
  const beforeBridgeRef = useRef<HTMLDivElement>(null)
  const beforeStretchRef = useRef<HTMLDivElement>(null)
  const afterBridgeRef = useRef<HTMLDivElement>(null)
  const afterStretchRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const triggers: ScrollTrigger[] = []

    const beforeBridge = beforeBridgeRef.current
    const beforeStretch = beforeStretchRef.current
    if (beforeBridge && beforeStretch) {
      gsap.set(beforeStretch, { rotateX: 89 })
      triggers.push(
        ScrollTrigger.create({
          trigger: beforeBridge,
          start: "top bottom",
          end: "bottom bottom",
          scrub: true,
          onUpdate: (self) => {
            gsap.set(beforeStretch, { rotateX: 89 * (1 - self.progress) })
          },
        }),
      )
    }

    const afterBridge = afterBridgeRef.current
    const afterStretch = afterStretchRef.current
    if (afterBridge && afterStretch) {
      gsap.set(afterStretch, { rotateX: 0 })
      triggers.push(
        ScrollTrigger.create({
          trigger: afterBridge,
          start: "top bottom",
          end: "bottom bottom",
          scrub: true,
          onUpdate: (self) => {
            gsap.set(afterStretch, { rotateX: 89 * self.progress })
          },
        }),
      )
    }

    return () => {
      triggers.forEach((t) => t.kill())
    }
  }, [])

  const bridgeStyle = { height: `${bridgeVh * 100}vh` }
  const stretchStyle = {
    transformOrigin: "50% 0% 0",
    willChange: "transform" as const,
  }

  return (
    <>
      <div
        ref={beforeBridgeRef}
        className="relative w-full overflow-hidden pointer-events-none"
        style={bridgeStyle}
        aria-hidden
      >
        <div
          ref={beforeStretchRef}
          className="absolute inset-x-0 top-0 h-full bg-black"
          style={{ ...stretchStyle, transform: "rotateX(89deg)" }}
        />
      </div>

      <section id={id} className={`relative bg-black text-white ${className}`}>
        <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center">
          <div className="w-full">{children}</div>
        </div>
        <div style={{ height: `${spacerVh * 100}vh` }} aria-hidden />
      </section>

      <div
        ref={afterBridgeRef}
        className="relative w-full overflow-hidden pointer-events-none"
        style={bridgeStyle}
        aria-hidden
      >
        <div
          ref={afterStretchRef}
          className="absolute inset-x-0 top-0 h-full bg-black"
          style={{ ...stretchStyle, transform: "rotateX(0deg)" }}
        />
      </div>
    </>
  )
}
