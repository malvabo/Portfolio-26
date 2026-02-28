"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"

const heroLines = [
  "Mary Borysova is a Product UX Designer",
  "at Amazon.",
]

export function Hero() {
  const lineRefs = useRef<HTMLDivElement[]>([])

  useEffect(() => {
    const lines = lineRefs.current.filter(Boolean)
    if (lines.length === 0) return

    gsap.from(lines, {
      duration: 1.5,
      y: 100,
      opacity: 0,
      stagger: 0.2,
      ease: "power4.out",
    })
  }, [])

  return (
    <section className="pt-32 pb-20 lg:pt-40 lg:pb-24 container mx-auto px-8 lg:px-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col gap-8 lg:gap-12">
          <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-normal leading-[1.15] tracking-[-0.02em] text-foreground max-w-4xl">
            {heroLines.map((line, i) => (
              <div key={i} className="overflow-hidden">
                <span
                  className="block"
                  ref={(el) => {
                    if (el) lineRefs.current[i] = el
                  }}
                >
                  {line}
                </span>
              </div>
            ))}
          </h1>
          <p className="font-sans text-[17px] leading-relaxed text-muted-foreground max-w-xl text-left">
            She spends her time thinking and talking about AI Design: how to build trust, use AI to help and how to keep the human in the center.
          </p>
        </div>
      </div>
    </section>
  )
}
