"use client"

/**
 * Story-style case study building blocks.
 * Layout follows a narrative arc: hero → setup → what I found → what we built
 * → moments from the process → what changed. Text columns stay narrow,
 * visuals break out wider, and each beat has room to breathe.
 */

import type { ReactNode } from "react"
import { LightboxImage } from "@/components/lightbox-image"

const ACCENT = "text-[#B4532A]"

/* ---------- Layout ---------- */

export function StoryPage({ children }: { children: ReactNode }) {
  return <main className="pt-28 md:pt-32 pb-24 px-5 md:px-8">{children}</main>
}

/** Narrow reading column */
export function Narrow({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`max-w-[620px] mx-auto ${className}`}>{children}</div>
}

/** Wide column for visuals */
export function Wide({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`max-w-[1080px] mx-auto ${className}`}>{children}</div>
}

export function Divider() {
  return (
    <Wide>
      <div className="h-28 md:h-40" aria-hidden />
    </Wide>
  )
}

/* ---------- Hero ---------- */

type Stat = { value: string; label: string }

export function StoryHero({
  image,
  imageAlt,
  title,
  meta,
  intro,
  stats,
}: {
  image: string
  imageAlt: string
  title: string
  meta: { label: string; value: string }[]
  intro: ReactNode
  stats: Stat[]
}) {
  return (
    <header>
      <Wide>
        <h1 className="font-serif text-[2.5rem] md:text-[3.5rem] lg:text-[4.25rem] leading-[1.05] tracking-[-0.03em] text-balance mb-10 md:mb-14 max-w-[900px]">
          {title}
        </h1>

        <div className="grid md:grid-cols-[200px_1fr] gap-10 md:gap-16">
          <dl className="space-y-6">
            {meta.map((m) => (
              <div key={m.label}>
                <dt className="text-[13px] text-muted-foreground mb-1">{m.label}</dt>
                <dd className="font-mono text-[12px] uppercase tracking-wider">{m.value}</dd>
              </div>
            ))}
          </dl>

          <div>
            <div className="text-[17px] leading-relaxed text-muted-foreground max-w-[560px]">{intro}</div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-6 mt-10 max-w-[560px]">
              {stats.map((s) => (
                <div key={s.label}>
                  <p className="font-serif text-[1.75rem] md:text-[2rem] tracking-[-0.02em] leading-none mb-2">{s.value}</p>
                  <p className="text-[13px] leading-snug text-muted-foreground">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="rounded-2xl overflow-hidden bg-[#EDE8E1] mt-14 md:mt-20">
          <LightboxImage src={image} alt={imageAlt} className="w-full h-auto" loading="eager" />
        </div>
      </Wide>
    </header>
  )
}

/* ---------- Text beats ---------- */

/** Big opening statement, then a quieter follow-up */
export function Lede({ statement, children }: { statement: ReactNode; children?: ReactNode }) {
  return (
    <Narrow>
      <p className="text-[1.6rem] md:text-[2rem] leading-[1.3] tracking-[-0.015em] text-balance">{statement}</p>
      {children && <div className="mt-6 space-y-4 text-[17px] leading-relaxed text-muted-foreground">{children}</div>}
    </Narrow>
  )
}

export function Kicker({ children }: { children: ReactNode }) {
  return <p className={`font-mono text-[11px] uppercase tracking-wider mb-4 ${ACCENT}`}>{children}</p>
}

/** Section opener: short headline + a paragraph or two */
export function Beat({
  id,
  kicker,
  title,
  children,
}: {
  id?: string
  kicker?: string
  title: ReactNode
  children?: ReactNode
}) {
  return (
    <Narrow className="scroll-mt-28">
      <div id={id}>
        {kicker && <Kicker>{kicker}</Kicker>}
        <h2 className="text-[1.5rem] md:text-[1.75rem] leading-[1.25] tracking-[-0.015em] text-balance">{title}</h2>
        {children && <div className="mt-4 space-y-4 text-[17px] leading-relaxed text-muted-foreground">{children}</div>}
      </div>
    </Narrow>
  )
}

/* ---------- Visuals ---------- */

export function Figure({
  src,
  alt,
  caption,
  className = "",
}: {
  src: string
  alt: string
  caption?: string
  className?: string
}) {
  return (
    <figure className={className}>
      <div className="rounded-2xl overflow-hidden bg-[#EDE8E1]">
        <LightboxImage src={src} alt={alt} className="w-full h-auto" />
      </div>
      {caption && <figcaption className="mt-3 text-[13px] text-muted-foreground text-center">{caption}</figcaption>}
    </figure>
  )
}

export function FigurePair({ images, caption }: { images: { src: string; alt: string }[]; caption?: string }) {
  return (
    <figure>
      <div className="grid md:grid-cols-2 gap-4 md:gap-6">
        {images.map((img) => (
          <div key={img.src} className="rounded-2xl overflow-hidden bg-[#EDE8E1]">
            <LightboxImage src={img.src} alt={img.alt} className="w-full h-auto" />
          </div>
        ))}
      </div>
      {caption && <figcaption className="mt-3 text-[13px] text-muted-foreground text-center">{caption}</figcaption>}
    </figure>
  )
}

/* ---------- Cards ---------- */

export type StoryCard = { emoji: string; title: ReactNode; body: ReactNode }

/** Stacked cards for findings or principles */
export function CardStack({ label, kicker, cards }: { label: string; kicker: string; cards: StoryCard[] }) {
  return (
    <Narrow>
      <p className="text-[17px] mb-6">{label}</p>
      <div className="space-y-4">
        {cards.map((c, i) => (
          <div key={i} className="flex gap-5 md:gap-7 rounded-2xl bg-[#F3EFEA] p-6 md:p-8">
            <span className="text-[2rem] leading-none pt-6 shrink-0" aria-hidden>
              {c.emoji}
            </span>
            <div>
              <p className={`font-mono text-[11px] uppercase tracking-wider mb-2 ${ACCENT}`}>
                {kicker} {i + 1}
              </p>
              <h3 className="font-serif text-[1.6rem] md:text-[1.9rem] leading-[1.15] tracking-[-0.02em] mb-3">{c.title}</h3>
              <p className="text-[15px] leading-relaxed text-muted-foreground">{c.body}</p>
            </div>
          </div>
        ))}
      </div>
    </Narrow>
  )
}

/** One stage of the final design: short text, then a wide visual */
export function Stage({ title, children, visual }: { title: string; children: ReactNode; visual: ReactNode }) {
  return (
    <div className="space-y-8 md:space-y-10">
      <Narrow>
        <h3 className="text-[1.25rem] tracking-[-0.01em] mb-3">{title}</h3>
        <div className="space-y-4 text-[17px] leading-relaxed text-muted-foreground">{children}</div>
      </Narrow>
      <Wide>{visual}</Wide>
    </div>
  )
}

/** A numbered moment from the process */
export function Moment({
  n,
  title,
  children,
  visual,
}: {
  n: number
  title: string
  children: ReactNode
  visual?: ReactNode
}) {
  return (
    <div className="space-y-8 md:space-y-10">
      <Narrow>
        <p className={`font-mono text-[13px] mb-4 ${ACCENT}`}>{String(n).padStart(2, "0")}</p>
        <h3 className="text-[1.25rem] tracking-[-0.01em] mb-3">{title}</h3>
        <div className="space-y-4 text-[17px] leading-relaxed text-muted-foreground">{children}</div>
      </Narrow>
      {visual && <Wide>{visual}</Wide>}
    </div>
  )
}

/** Results: big number, one line of how it was measured */
export function Results({ items }: { items: { emoji: string; value: string; label: string; body: string }[] }) {
  return (
    <Narrow>
      <div className="space-y-4">
        {items.map((r) => (
          <div key={r.label} className="flex gap-5 md:gap-7 rounded-2xl bg-[#F3EFEA] p-6 md:p-8">
            <span className="text-[2rem] leading-none shrink-0" aria-hidden>
              {r.emoji}
            </span>
            <div>
              <p className="font-serif text-[1.6rem] md:text-[1.9rem] leading-[1.15] tracking-[-0.02em] mb-1">
                <span className={ACCENT}>{r.value}</span> {r.label}
              </p>
              <p className="text-[15px] leading-relaxed text-muted-foreground mt-2">{r.body}</p>
            </div>
          </div>
        ))}
      </div>
    </Narrow>
  )
}

/** Closing pull quote or takeaway */
export function Closing({ children, attribution }: { children: ReactNode; attribution?: string }) {
  return (
    <Narrow>
      <blockquote className="font-serif text-[1.75rem] md:text-[2.25rem] leading-[1.25] tracking-[-0.02em] text-balance">
        {children}
      </blockquote>
      {attribution && <p className="mt-6 font-mono text-[11px] uppercase tracking-wider text-muted-foreground">{attribution}</p>}
    </Narrow>
  )
}

/** Looping silent product clip */
export function Clip({ src, label, caption }: { src: string; label: string; caption?: string }) {
  return (
    <figure>
      <div className="rounded-2xl overflow-hidden bg-[#EDE8E1]">
        {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
        <video src={src} autoPlay muted loop playsInline preload="metadata" aria-label={label} className="w-full h-auto block" />
      </div>
      {caption && <figcaption className="mt-3 text-[13px] text-muted-foreground text-center">{caption}</figcaption>}
    </figure>
  )
}
