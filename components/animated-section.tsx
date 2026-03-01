"use client"

import { useEffect, useRef, ReactNode } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

interface AnimatedSectionProps {
  children: ReactNode
  className?: string
  /** Minimum seconds to wait after page load before this section can appear (e.g. wait for hero to finish) */
  delayOnLoad?: number
}

export function AnimatedSection({ children, className = "", delayOnLoad }: AnimatedSectionProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    let tween: gsap.core.Tween | undefined

    const setupAnimation = () => {
      tween = gsap.fromTo(
        el,
        { opacity: 0, y: 24 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          delay: 0.15,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            end: "bottom 15%",
            toggleActions: "play none none reverse",
          },
        }
      )
      ScrollTrigger.refresh()
    }

    if (delayOnLoad && delayOnLoad > 0) {
      gsap.set(el, { opacity: 0 })
      const timer = gsap.delayedCall(delayOnLoad, setupAnimation)
      return () => {
        timer.kill()
        tween?.kill()
        tween?.scrollTrigger?.kill()
        gsap.set(el, { clearProps: "opacity,transform" })
      }
    } else {
      setupAnimation()
      return () => {
        tween?.kill()
        tween?.scrollTrigger?.kill()
      }
    }
  }, [delayOnLoad])

  return <div ref={ref} className={className}>{children}</div>
}
