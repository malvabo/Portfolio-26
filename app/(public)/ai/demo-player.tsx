"use client"

import { useEffect, useRef, useState } from "react"

export type Chapter = { src: string; poster: string; width: number; height: number; title: string; caption: string }

// Plays the chapters back to back. Nothing downloads until the player is on
// screen; it then starts muted (unless the visitor prefers reduced motion),
// pauses when scrolled away, and can be paused or jumped between chapters.
export function DemoPlayer({ chapters, label }: { chapters: Chapter[]; label: string }) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const wrapRef = useRef<HTMLDivElement>(null)
  const [index, setIndex] = useState(0)
  const [playing, setPlaying] = useState(false)
  const [progress, setProgress] = useState<number[]>(() => chapters.map(() => 0))
  const [finished, setFinished] = useState(false)
  const userPaused = useRef(false)
  const pendingPlay = useRef(false)

  const play = () => {
    const v = videoRef.current
    if (!v) return
    v.play().then(
      () => setPlaying(true),
      () => setPlaying(false),
    )
  }

  // Start when visible, pause when not.
  useEffect(() => {
    const el = wrapRef.current
    if (!el) return
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    const io = new IntersectionObserver(
      ([entry]) => {
        const v = videoRef.current
        if (!v) return
        if (entry.isIntersecting) {
          if (!reduce && !userPaused.current && !finished && v.paused) play()
        } else if (!v.paused) {
          v.pause()
          setPlaying(false)
        }
      },
      { threshold: 0.5 },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [finished])

  // After switching chapter, keep playing if we were.
  useEffect(() => {
    if (pendingPlay.current) {
      pendingPlay.current = false
      play()
    }
  }, [index])

  const goTo = (i: number, autoplay = true) => {
    setFinished(false)
    setProgress((p) => p.map((v, j) => (j < i ? 1 : 0)))
    if (i === index) {
      const v = videoRef.current
      if (v) v.currentTime = 0
      if (autoplay) play()
      return
    }
    pendingPlay.current = autoplay
    setIndex(i)
  }

  const onEnded = () => {
    setProgress((p) => p.map((v, j) => (j === index ? 1 : v)))
    if (index < chapters.length - 1) {
      goTo(index + 1)
    } else {
      setPlaying(false)
      setFinished(true)
    }
  }

  const onTime = () => {
    const v = videoRef.current
    if (!v || !v.duration) return
    const f = v.currentTime / v.duration
    setProgress((p) => p.map((x, j) => (j === index ? f : x)))
  }

  const toggle = () => {
    const v = videoRef.current
    if (!v) return
    if (finished) {
      userPaused.current = false
      goTo(0)
      return
    }
    if (v.paused) {
      userPaused.current = false
      play()
    } else {
      userPaused.current = true
      v.pause()
      setPlaying(false)
    }
  }

  const current = chapters[index]

  return (
    <figure className="m-0" aria-label={label}>
      <div
        ref={wrapRef}
        className="relative overflow-hidden rounded-lg border border-gray-200 bg-[#ebecf3] transition-[aspect-ratio] duration-300"
        style={{ aspectRatio: `${current.width} / ${current.height}` }}
      >
        <video
          ref={videoRef}
          src={current.src}
          poster={current.poster}
          muted
          playsInline
          preload="none"
          className="absolute inset-0 h-full w-full object-cover"
          onEnded={onEnded}
          onTimeUpdate={onTime}
          onPause={() => setPlaying(false)}
          onPlay={() => setPlaying(true)}
          aria-label={`${current.title}. ${current.caption}`}
        />
        <button
          type="button"
          className="absolute right-2.5 bottom-2.5 inline-flex items-center gap-1.5 min-h-9 px-3 rounded-full bg-[rgba(20,20,20,0.82)] text-white text-sm hover:bg-[rgba(20,20,20,0.95)] cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground"
          onClick={toggle}
          aria-label={finished ? "Replay demo" : playing ? "Pause demo" : "Play demo"}
        >
          {playing ? (
            <svg aria-hidden="true" viewBox="0 0 24 24" width="16" height="16">
              <path d="M7 5h3.5v14H7zM13.5 5H17v14h-3.5z" fill="currentColor" />
            </svg>
          ) : (
            <svg aria-hidden="true" viewBox="0 0 24 24" width="16" height="16">
              <path d="M8 5.5v13l11-6.5z" fill="currentColor" />
            </svg>
          )}
          <span>{finished ? "Replay" : playing ? "Pause" : "Play"}</span>
        </button>
      </div>

      {/* Chapter tabs and caption only when there is more than one clip */}
      {chapters.length > 1 && (
        <>
          <ol className="mt-3 grid grid-cols-2 gap-3">
            {chapters.map((c, i) => (
              <li key={c.src}>
                <button
                  type="button"
                  className={`grid w-full grid-cols-[auto_1fr] gap-x-2 gap-y-0.5 pb-1 text-left text-[15px] cursor-pointer rounded ${i === index ? "text-foreground" : "text-muted-foreground hover:text-foreground"} focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground`}
                  aria-current={i === index ? "step" : undefined}
                  onClick={() => {
                    userPaused.current = false
                    goTo(i)
                  }}
                >
                  <span className="col-span-full mb-2 block h-[3px] overflow-hidden rounded-sm bg-[#E8E3DD]" aria-hidden="true">
                    <span className="block h-full origin-left bg-foreground transition-transform duration-200 ease-linear" style={{ transform: `scaleX(${progress[i]})` }} />
                  </span>
                  <span className="font-mono text-[13px] text-muted-foreground pt-px">{String(i + 1).padStart(2, "0")}</span>
                  <span className="font-medium">{c.title}</span>
                </button>
              </li>
            ))}
          </ol>
          <figcaption className="hidden md:block mt-2 min-h-[3em] text-sm text-muted-foreground" aria-live="polite">
            {current.caption}
          </figcaption>
        </>
      )}
    </figure>
  )
}
