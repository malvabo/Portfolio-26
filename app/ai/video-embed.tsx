"use client"

import Image from "next/image"
import { useState } from "react"
import styles from "./ai.module.css"

type Props = {
  /** Loom or YouTube embed URL, e.g. https://www.loom.com/embed/<id> or https://www.youtube-nocookie.com/embed/<id> */
  src: string
  title: string
  poster: string
  posterAlt: string
}

// Click-to-load facade: the page ships only a poster image, and the player
// (and its scripts) loads when someone actually wants to watch.
export function VideoEmbed({ src, title, poster, posterAlt }: Props) {
  const [playing, setPlaying] = useState(false)

  if (playing && src) {
    const url = src + (src.includes("?") ? "&" : "?") + "autoplay=1"
    return (
      <div className={styles.video}>
        <iframe
          src={url}
          title={title}
          loading="lazy"
          allow="autoplay; fullscreen; picture-in-picture; encrypted-media"
          allowFullScreen
        />
      </div>
    )
  }

  const posterImg = (
    <Image
      src={poster}
      alt={src ? "" : posterAlt}
      fill
      sizes="(min-width: 960px) 880px, 100vw"
      className={styles.poster}
    />
  )

  if (!src) {
    return (
      <div className={styles.video}>
        {posterImg}
        <span className={styles.videoSoon}>Walkthrough video coming soon</span>
      </div>
    )
  }

  return (
    <div className={styles.video}>
      <button type="button" className={styles.play} onClick={() => setPlaying(true)}>
        {posterImg}
        <span className={styles.playBadge}>
          <svg aria-hidden="true" viewBox="0 0 24 24" width="18" height="18">
            <path d="M8 5.5v13l11-6.5z" fill="currentColor" />
          </svg>
          Play the 2-min walkthrough
        </span>
        <span className="sr-only">: {title}</span>
      </button>
    </div>
  )
}
