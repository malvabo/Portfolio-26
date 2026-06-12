"use client"

import { useEffect, useRef, useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { X } from "lucide-react"

const REEL_SRC = "/reel.mp4"

const projects = [
  {
    video: "/images/poetry1.mp4",
    title: "Poetry & Media Generation",
    description: "A tool that makes production of visual social media content in poetry niche easily. Just choose the background, styling for the text, adjust the content on the page and download the asset.",
  },
  {
    video: "/images/script2.mp4",
    title: "Talk Script Analysis Tool",
    description: "A solution that allows to analyze the content of the talk, spot the gaps, localize it for different cultures and find opportunities how to make the story more engaging.",
  },
]

export default function SideProjects() {
  const [active, setActive] = useState<number | null>(null)
  const project = active !== null ? projects[active] : null

  const reelSectionRef = useRef<HTMLDivElement>(null)
  const reelVideoRef = useRef<HTMLVideoElement>(null)
  const [reelMuted, setReelMuted] = useState(true)
  const [reducedMotion, setReducedMotion] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)")
    setReducedMotion(mq.matches)
    const handler = (e: MediaQueryListEvent) => setReducedMotion(e.matches)
    mq.addEventListener("change", handler)
    return () => mq.removeEventListener("change", handler)
  }, [])

  useEffect(() => {
    const section = reelSectionRef.current
    const video = reelVideoRef.current
    if (!section || !video) return

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
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
  }, [reducedMotion])

  const toggleReelMute = () => {
    const video = reelVideoRef.current
    if (!video) return
    video.muted = !video.muted
    setReelMuted(video.muted)
  }

  const openReelFullscreen = () => {
    const video = reelVideoRef.current
    if (!video) return
    if (video.requestFullscreen) video.requestFullscreen()
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="max-w-7xl mx-auto px-8 lg:px-12 pt-24 pb-24">
        <div className="mb-8 max-w-[750px]">
          <h1 className="font-serif text-2xl md:text-3xl lg:text-4xl tracking-[-0.02em] leading-[1.2]">
            My philosophy on design
          </h1>
        </div>

        <div
          ref={reelSectionRef}
          className="relative w-full aspect-video overflow-hidden rounded-2xl border border-border/20 bg-[#F5F3F0] shadow-[0_1px_4px_rgba(0,0,0,0.06)] mb-10"
        >
          <video
            ref={reelVideoRef}
            muted
            loop
            playsInline
            preload="metadata"
            className="w-full h-full object-cover"
          >
            <source src={REEL_SRC} type="video/mp4" />
          </video>

          {/* Reduced-motion play button */}
          {reducedMotion && (
            <button
              onClick={() => reelVideoRef.current?.play()}
              className="absolute inset-0 flex items-center justify-center bg-black/20"
              aria-label="Play reel"
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
              onClick={toggleReelMute}
              aria-label={reelMuted ? "Unmute video" : "Mute video"}
              className="min-w-[44px] min-h-[44px] flex items-center justify-center rounded-full bg-black/40 backdrop-blur-sm text-white/90 hover:bg-black/60 transition-colors"
            >
              {reelMuted ? (
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
              onClick={openReelFullscreen}
              aria-label="Expand to fullscreen"
              className="min-w-[44px] min-h-[44px] flex items-center justify-center rounded-full bg-black/40 backdrop-blur-sm text-white/90 hover:bg-black/60 transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5v-4m0 4h-4m4 0l-5-5" />
              </svg>
            </button>
          </div>
        </div>

        <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl tracking-[-0.02em] leading-[1.2] mb-8 max-w-[750px]">
          AI experiments
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-[750px]">
          {projects.map((p, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className="text-left group rounded-2xl overflow-hidden border border-border/20 bg-background hover:border-border/40 shadow-[0_1px_4px_rgba(0,0,0,0.06)] hover:shadow-[0_4px_16px_rgba(0,0,0,0.08)] transition-all duration-300 cursor-pointer focus:outline-none"
            >
              <div className="aspect-video bg-[#F5F3F0] overflow-hidden">
                {p.video ? (
                  <video
                    src={p.video}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full" />
                )}
              </div>
              <div className="p-4">
                <p className="text-[15px] font-medium text-foreground mb-1">{p.title}</p>
                <p className="text-[13px] text-muted-foreground leading-relaxed">{p.description}</p>
              </div>
            </button>
          ))}
        </div>
      </main>
      <Footer />

      {/* Modal */}
      {project && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-6"
          onClick={() => setActive(null)}
        >
          <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />
          <div
            className="relative bg-background rounded-2xl shadow-xl w-full max-w-4xl max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between px-6 pt-6 pb-4">
              <h2 className="text-[18px] font-medium text-foreground">{project.title}</h2>
              <button
                onClick={() => setActive(null)}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <X size={20} />
              </button>
            </div>
            <div className="px-6 pb-6 flex flex-col gap-4">
              <div className="rounded-xl overflow-hidden bg-[#F5F3F0] aspect-video">
                {project.video ? (
                  <video
                    key={project.video}
                    src={project.video}
                    autoPlay
                    loop
                    muted
                    playsInline
                    controls
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full" />
                )}
              </div>
              <p className="text-[15px] text-muted-foreground leading-relaxed">{project.description}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
