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
}

export function StickyDarkSection({
  children,
  spacerVh = 1.5,
  bridgeVh = 0.6,
  id,
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

  const bridgeStyle: React.CSSProperties = {
    height: `${bridgeVh * 100}vh`,
    position: "relative",
    width: "100%",
    overflow: "hidden",
    pointerEvents: "none",
  }
  const stretchStyle: React.CSSProperties = {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    height: "100%",
    backgroundColor: "#000",
    transformOrigin: "50% 0% 0",
    willChange: "transform",
  }

  return (
    <>
      <div ref={beforeBridgeRef} style={bridgeStyle} aria-hidden>
        <div
          ref={beforeStretchRef}
          style={{ ...stretchStyle, transform: "rotateX(89deg)" }}
        />
      </div>

      <section
        id={id}
        style={{
          position: "relative",
          backgroundColor: "#000",
          color: "#fff",
        }}
      >
        <div
          style={{
            position: "sticky",
            top: 0,
            height: "100vh",
            width: "100%",
            overflow: "hidden",
            display: "flex",
            alignItems: "center",
          }}
        >
          <div style={{ width: "100%" }}>{children}</div>
        </div>
        <div style={{ height: `${spacerVh * 100}vh` }} aria-hidden />
      </section>

      <div ref={afterBridgeRef} style={bridgeStyle} aria-hidden>
        <div
          ref={afterStretchRef}
          style={{ ...stretchStyle, transform: "rotateX(0deg)" }}
        />
      </div>
    </>
  )
}
