"use client"

import { useEffect, useRef, useState } from "react"
import styles from "./ai.module.css"

export type Chapter = { src: string; poster: string; title: string; caption: string }

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
    <figure className={styles.player} aria-label={label}>
      <div ref={wrapRef} className={styles.video}>
        <video
          ref={videoRef}
          src={current.src}
          poster={current.poster}
          muted
          playsInline
          preload="none"
          onEnded={onEnded}
          onTimeUpdate={onTime}
          onPause={() => setPlaying(false)}
          onPlay={() => setPlaying(true)}
          aria-label={`${current.title}. ${current.caption}`}
        />
        <button
          type="button"
          className={styles.playToggle}
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

      <ol className={styles.chapters}>
        {chapters.map((c, i) => (
          <li key={c.src}>
            <button
              type="button"
              className={styles.chapter}
              aria-current={i === index ? "step" : undefined}
              onClick={() => {
                userPaused.current = false
                goTo(i)
              }}
            >
              <span className={styles.chapterBar} aria-hidden="true">
                <span style={{ transform: `scaleX(${progress[i]})` }} />
              </span>
              <span className={styles.chapterNum}>{String(i + 1).padStart(2, "0")}</span>
              <span className={styles.chapterTitle}>{c.title}</span>
            </button>
          </li>
        ))}
      </ol>
      <figcaption className={styles.chapterCaption} aria-live="polite">
        {current.caption}
      </figcaption>
    </figure>
  )
}
