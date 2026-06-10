"use client"

import { useEffect, useRef, useState } from "react"

// Replace with your Mux / Cloudflare Stream HLS URL when available
const HLS_SRC = ""
const MP4_SRC = "/showreel.mp4"
const POSTER_SRC = "/poster.jpg"

export function ShowreelSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)
  const [muted, setMuted] = useState(true)
  const [reducedMotion, setReducedMotion] = useState(false)
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)")
    setReducedMotion(mq.matches)
    const handler = (e: MediaQueryListEvent) => setReducedMotion(e.matches)
    mq.addEventListener("change", handler)
    return () => mq.removeEventListener("change", handler)
  }, [])

  useEffect(() => {
    const section = sectionRef.current
    const video = videoRef.current
    if (!section || !video) return

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            // Load source lazily only when near viewport
            if (!loaded) {
              if (HLS_SRC) {
                const src = document.createElement("source")
                src.src = HLS_SRC
                src.type = "application/x-mpegURL"
                video.prepend(src)
              }
              setLoaded(true)
              video.load()
            }
            if (!reducedMotion) video.play().catch(() => {})
          } else {
            video.pause()
          }
        }
      },
      { threshold: 0.25 }
    )

    observer.observe(section)
    return () => observer.disconnect()
  }, [loaded, reducedMotion])

  const toggleMute = () => {
    const video = videoRef.current
    if (!video) return
    video.muted = !video.muted
    setMuted(video.muted)
  }

  const openFullscreen = () => {
    const video = videoRef.current
    if (!video) return
    if (video.requestFullscreen) video.requestFullscreen()
  }

  return (
    <section
      ref={sectionRef}
      className="container mx-auto px-8 lg:px-12 py-10 md:py-14"
    >
      <div className="max-w-7xl mx-auto">
        <p className="uppercase text-[11px] font-mono tracking-widest text-muted-foreground/70 mb-4">
          How I think about design
        </p>

        <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-md border border-border/40 bg-[#f1f1f1]">
          <video
            ref={videoRef}
            muted
            loop
            playsInline
            preload="none"
            poster={POSTER_SRC}
            className="w-full h-full object-cover"
          >
            <source src={MP4_SRC} type="video/mp4" />
            <track kind="captions" src="/captions.vtt" srcLang="en" label="English" default />
          </video>

          {/* Reduced-motion play button */}
          {reducedMotion && (
            <button
              onClick={() => videoRef.current?.play()}
              className="absolute inset-0 flex items-center justify-center bg-black/20"
              aria-label="Play showreel"
            >
              <span className="w-14 h-14 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center shadow-lg">
                <svg className="w-5 h-5 ml-0.5 text-foreground" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                  <path d="M8 5v14l11-7z" />
                </svg>
              </span>
            </button>
          )}

          {/* Bottom-right controls */}
          <div className="absolute bottom-3 right-3 flex gap-2">
            <button
              onClick={toggleMute}
              aria-label={muted ? "Unmute video" : "Mute video"}
              className="min-w-[44px] min-h-[44px] flex items-center justify-center rounded-full bg-black/40 backdrop-blur-sm text-white/90 hover:bg-black/60 transition-colors"
            >
              {muted ? (
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707A1 1 0 0112 5v14a1 1 0 01-1.707.707L5.586 15z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" />
                </svg>
              ) : (
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.536 8.464a5 5 0 010 7.072M12 6v12M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707A1 1 0 0112 5v14a1 1 0 01-1.707.707L5.586 15z" />
                </svg>
              )}
            </button>
            <button
              onClick={openFullscreen}
              aria-label="Expand to fullscreen"
              className="min-w-[44px] min-h-[44px] flex items-center justify-center rounded-full bg-black/40 backdrop-blur-sm text-white/90 hover:bg-black/60 transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5v-4m0 4h-4m4 0l-5-5" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
