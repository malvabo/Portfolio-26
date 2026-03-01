"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import gsap from "gsap"

const heroWords = [
  "Hi,", "I", "am", "Mary", "—", "Product", "UX", "Designer", "currently", "shaping", "tech", "at", "Amazon."
]

export function Hero() {
  const wordRefs = useRef<HTMLSpanElement[]>([])
  const paragraphRef = useRef<HTMLParagraphElement>(null)
  const arrowRef = useRef<HTMLDivElement>(null)
  const imagesRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const words = wordRefs.current.filter(Boolean)
    const paragraph = paragraphRef.current
    const arrow = arrowRef.current
    const images = imagesRef.current
    if (words.length === 0) return

    const tl = gsap.timeline()
    tl.from(words, {
      duration: 0.9,
      opacity: 0,
      stagger: 0.12,
      ease: "power2.out",
    })
    if (paragraph) {
      tl.from(paragraph, {
        duration: 0.6,
        opacity: 0,
        ease: "power2.out",
      }, "+=0.2")
    }
    if (arrow) {
      tl.from(arrow, {
        duration: 0.4,
        opacity: 0,
        ease: "power2.out",
      }, "+=0.15")
    }
    if (images) {
      tl.from(images, {
        duration: 0.5,
        opacity: 0,
        ease: "power2.out",
      }, "+=0.1")
    }
  }, [])

  return (
    <section className="pt-32 pb-20 lg:pt-40 lg:pb-24 container mx-auto px-8 lg:px-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col gap-8">
          <h1 className="font-serif text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-normal leading-[1.15] tracking-[-0.02em] text-foreground w-full max-w-7xl">
            {heroWords.map((word, i) => (
              <span key={i}>
                <span className="inline-block overflow-hidden align-bottom pb-[0.12em]">
                  <span
                    className="inline-block"
                    ref={(el) => {
                      if (el) wordRefs.current[i] = el
                    }}
                  >
                    {word}
                  </span>
                  {i < heroWords.length - 1 && i !== 7 && i !== 3 && i !== 4 ? "\u00A0" : ""}
                </span>
                {i === 7 && <br />}
              </span>
            ))}
          </h1>
          <div className="w-full max-w-[360px] lg:max-w-[440px] lg:ml-auto mt-8">
            <p
              ref={paragraphRef}
              className="font-sans text-[17px] leading-relaxed text-muted-foreground"
            >
              Designing, building, thinking and talking about tech. Contributed to unicorn startups, worked with venture builders, founded profitable companies.
            </p>

            <div ref={arrowRef} className="flex justify-start mt-4 mb-2">
              <svg
                width="40"
                height="48"
                viewBox="0 0 24 28"
                fill="none"
                className="text-[#f97316]"
                aria-hidden
              >
                <path
                  d="M12 2v20M6 16l6 6 6-6"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>

          <div ref={imagesRef} className="flex flex-col lg:flex-row lg:gap-6 lg:items-end w-full -mt-12">
            <div
              className="lg:flex-1 min-w-0 relative aspect-[4/3] lg:aspect-[16/11] rounded-xl overflow-hidden bg-[#f1f1f1] border border-border/60 shadow-sm order-2 lg:order-1"
            >
              <Image
                src="/images/speaking-event-stage.png"
                alt="Speaking event"
                fill
                className="object-cover"
                style={{ objectPosition: "center center" }}
                sizes="(max-width: 1024px) 100vw, 60vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-0 left-0 right-0 p-4 pointer-events-none">
                <p className="uppercase text-[11px] text-white/90 font-mono tracking-wider">DDX, United Arab Emirates</p>
              </div>
            </div>

            <div
              className="w-full max-w-[360px] lg:max-w-[440px] lg:flex-shrink-0 relative aspect-[4/3] lg:aspect-[16/14.3] rounded-xl overflow-hidden bg-[#f1f1f1] border border-border/60 shadow-sm order-1 lg:order-2 lg:ml-auto"
            >
              <Image
                src="/images/speaking-2.jpg"
                alt="How to web conference"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 448px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-0 left-0 right-0 p-4 pointer-events-none">
                <p className="uppercase text-[11px] text-white/80 font-mono tracking-wider">How to web, EU</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
