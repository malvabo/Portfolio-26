"use client"

/**
 * Story-style case study building blocks.
 * Layout follows a narrative arc: hero → setup → what I found → what we built
 * → moments from the process → what changed. Text columns stay narrow,
 * visuals break out wider, and each beat has room to breathe.
 *
 * Text and visuals fade up into place as they scroll into view
 * (see .story-reveal in globals.css). Big statements reveal word by word.
 */

import { useEffect, useRef, useState, type ReactNode, type ElementType } from "react"
import type { LucideIcon } from "lucide-react"
import { LightboxImage } from "@/components/lightbox-image"

const ACCENT = "text-[#B4532A]"

/* ---------- Scroll reveal ---------- */

/** Sets `shown` once the element is ~15% into the viewport. Plays once. */
function useInView<T extends HTMLElement>(onLoad = false) {
  const ref = useRef<T>(null)
  const [shown, setShown] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    // Opening-screen content plays straight away, wherever it sits on the screen
    if (onLoad || typeof IntersectionObserver === "undefined") {
      setShown(true)
      return
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true)
          io.disconnect()
        }
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.01 }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [onLoad])

  return { ref, shown }
}

/** Fades and lifts its content into place when scrolled into view */
export function Reveal({
  children,
  delay = 0,
  as: Tag = "div",
  className = "",
  style,
  onLoad = false,
}: {
  children: ReactNode
  delay?: number
  as?: ElementType
  className?: string
  style?: React.CSSProperties
  /** Play on page load instead of on scroll (for the opening screen) */
  onLoad?: boolean
}) {
  const { ref, shown } = useInView<HTMLElement>(onLoad)
  return (
    <Tag
      ref={ref}
      data-shown={shown || undefined}
      className={`story-reveal ${className}`}
      style={{ ...style, "--d": `${delay}ms` } as React.CSSProperties}
    >
      {children}
    </Tag>
  )
}

/** Reveals a sentence word by word. Falls back to a block reveal for rich content. */
export function Words({
  children,
  as: Tag = "p",
  className = "",
  delay = 0,
  step = 28,
}: {
  children: ReactNode
  as?: ElementType
  className?: string
  delay?: number
  step?: number
}) {
  const { ref, shown } = useInView<HTMLElement>()

  if (typeof children !== "string") {
    return (
      <Reveal as={Tag} className={className} delay={delay}>
        {children}
      </Reveal>
    )
  }

  const words = children.split(" ")
  return (
    <Tag ref={ref} data-shown={shown || undefined} className={`story-words ${className}`} aria-label={children}>
      {words.map((w, i) => (
        <span key={i} aria-hidden>
          <span className="story-word" style={{ "--d": `${delay + i * step}ms` } as React.CSSProperties}>
            {w}
          </span>
          {i < words.length - 1 ? " " : null}
        </span>
      ))}
    </Tag>
  )
}

/* ---------- Layout ---------- */

export function StoryPage({ children }: { children: ReactNode }) {
  return <main className="pt-14 md:pt-16 pb-24 px-5 md:px-8">{children}</main>
}

/** Reading column. Text, cards and figures all share this one column, so
 *  the page reads from a single left edge, like a document. */
const COLUMN = "max-w-[680px] mx-auto"

export function Narrow({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`${COLUMN} ${className}`}>{children}</div>
}

/** Visuals use the same column */
export function Wide({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`${COLUMN} ${className}`}>{children}</div>
}

export function Divider() {
  return <div className="h-20 md:h-28" aria-hidden />
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
  // Title words take roughly words × step; the rest follows just after
  const after = 200 + Math.min(title.split(" ").length * 45, 500)
  return (
    <header>
      {/* Cover first, wider than the reading column (but clear of the contents list on
          wide screens). On desktop its height follows the viewport so the cover, the
          title card and the first line of the intro all fit on the opening screen. */}
      <Reveal className="max-w-[1100px] xl:max-w-[min(1100px,calc(100vw-400px))] mx-auto rounded-lg overflow-hidden bg-[#EDE8E1] border border-foreground/[0.08]">
        <img
          src={image}
          alt={imageAlt}
          loading="eager"
          className="w-full aspect-[4/3] md:aspect-auto md:h-[clamp(240px,calc(100svh-320px),580px)] object-cover"
        />
      </Reveal>

      <Wide className="relative z-10 -mt-16 sm:-mt-24 md:-mt-32">
        <div className="rounded-lg bg-white border border-foreground/[0.1] p-6 md:p-8 mx-3 sm:mx-0">
          <Words
            as="h1"
            step={45}
            delay={200}
            className="font-serif text-[1.625rem] md:text-[2.125rem] leading-[1.2] tracking-[-0.02em] text-balance"
          >
            {title}
          </Words>

          {/* Hand-drawn wavy rule between the title and the facts */}
          <div
            aria-hidden
            className="h-[6px] my-6 md:my-7 opacity-30"
            style={{
              backgroundImage:
                "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='6' viewBox='0 0 12 6'%3E%3Cpath d='M0 3 Q3 0 6 3 T12 3' fill='none' stroke='%23000' stroke-width='1'/%3E%3C/svg%3E\")",
              backgroundRepeat: "repeat-x",
            }}
          />

          <Reveal
            as="dl"
            delay={after}
            className={`grid grid-cols-2 ${meta.length === 3 ? "md:grid-cols-3" : "md:grid-cols-4"} gap-x-6 gap-y-5`}
          >
            {meta.map((m) => (
              <div key={m.label}>
                <dt className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground mb-1.5">{m.label}</dt>
                <dd className="text-[15px] leading-snug">{m.value}</dd>
              </div>
            ))}
          </Reveal>
        </div>

        <div className="mt-8 md:mt-10">
          <Reveal onLoad delay={after + 80} className="text-[17px] leading-relaxed text-muted-foreground">
            {intro}
          </Reveal>
          {/* Key numbers sit in a row under the intro */}
          <div className="grid grid-cols-3 gap-5 sm:gap-8 mt-10">
            {stats.map((s, i) => (
              <Reveal key={s.label} delay={after + 180 + i * 90}>
                <p className={`font-serif text-[1.375rem] md:text-[1.5rem] tracking-[-0.02em] leading-none mb-1.5 ${ACCENT}`}>{s.value}</p>
                <p className="text-[13px] leading-snug text-muted-foreground">{s.label}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </Wide>
    </header>
  )
}

/* ---------- Text beats ---------- */

/** Big opening statement, then a quieter follow-up */
export function Lede({ kicker, statement, children }: { kicker?: string; statement: ReactNode; children?: ReactNode }) {
  const after = typeof statement === "string" ? Math.min(statement.split(" ").length * 28, 600) : 150
  return (
    <Narrow>
      {kicker && <Reveal><Kicker>{kicker}</Kicker></Reveal>}
      <Words className="font-serif text-[1.6rem] md:text-[2rem] leading-[1.25] tracking-[-0.02em] text-balance">{statement}</Words>
      {children && (
        <Reveal delay={after} className="mt-6 space-y-4 text-[17px] leading-relaxed text-muted-foreground">
          {children}
        </Reveal>
      )}
    </Narrow>
  )
}

/** The one decision a skimming reader should not miss */
export function KeyCall({
  label = "The key call",
  rows,
  children,
}: {
  label?: string
  rows?: { label: string; text: ReactNode }[]
  children?: ReactNode
}) {
  return (
    <Narrow>
      <Reveal>
        <Kicker>{label}</Kicker>
        {children && (
          <p className="text-[1.25rem] md:text-[1.375rem] leading-[1.45] tracking-[-0.01em] text-balance">{children}</p>
        )}
        {rows && (
          <dl className="grid grid-cols-1 sm:grid-cols-[120px_1fr] gap-x-6 gap-y-2 sm:gap-y-4">
            {rows.map((r) => (
              <div key={r.label} className="contents">
                <dt className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground pt-1.5 sm:pt-1.5">{r.label}</dt>
                <dd className="text-[1.125rem] md:text-[1.25rem] leading-[1.45] tracking-[-0.01em] mb-3 sm:mb-0">{r.text}</dd>
              </div>
            ))}
          </dl>
        )}
      </Reveal>
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
        <Reveal>
          {kicker && <Kicker>{kicker}</Kicker>}
          <h2 className="font-serif text-[1.5rem] md:text-[1.75rem] leading-[1.2] tracking-[-0.02em] text-balance">{title}</h2>
        </Reveal>
        {children && (
          <Reveal delay={120} className="mt-4 space-y-4 text-[17px] leading-relaxed text-muted-foreground">
            {children}
          </Reveal>
        )}
      </div>
    </Narrow>
  )
}

/* ---------- Visuals ---------- */

function Caption({ children }: { children?: string }) {
  if (!children) return null
  return <figcaption className="mt-3 text-[13px] text-muted-foreground">{children}</figcaption>
}

export function Figure({
  src,
  alt,
  caption,
  className = "",
  maxWidth,
}: {
  src: string
  alt: string
  caption?: string
  className?: string
  /** Cap the display width (px) for images too small to stay sharp at full width on Retina */
  maxWidth?: number
}) {
  return (
    <Reveal as="figure" className={className} style={maxWidth ? { maxWidth } : undefined}>
      <div className="rounded-xl overflow-hidden bg-[#EDE8E1] border border-foreground/[0.08]">
        <LightboxImage src={src} alt={alt} className="w-full h-auto" />
      </div>
      <Caption>{caption}</Caption>
    </Reveal>
  )
}

export function FigurePair({
  images,
  caption,
  aspect,
}: {
  images: { src: string; alt: string }[]
  caption?: string
  /** Fixed tile shape, e.g. "3/2". Leave out to keep the images' own height. */
  aspect?: string
}) {
  return (
    <figure>
      <div className="grid md:grid-cols-2 gap-4 md:gap-6">
        {images.map((img, i) => (
          <Reveal
            key={img.src}
            delay={i * 120}
            className="rounded-xl overflow-hidden bg-[#EDE8E1] border border-foreground/[0.08]"
            style={aspect ? { aspectRatio: aspect } : undefined}
          >
            <LightboxImage
              src={img.src}
              alt={img.alt}
              className={`block w-full h-full object-cover ${aspect ? "object-[50%_15%]" : ""}`}
            />
          </Reveal>
        ))}
      </div>
      <Reveal delay={200}>
        <Caption>{caption}</Caption>
      </Reveal>
    </figure>
  )
}

/** Looping silent product clip */
export function Clip({ src, label, caption }: { src: string; label: string; caption?: string }) {
  return (
    <Reveal as="figure">
      <div className="rounded-xl overflow-hidden bg-[#EDE8E1] border border-foreground/[0.08]">
        {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
        <video src={src} autoPlay muted loop playsInline preload="metadata" aria-label={label} className="w-full h-auto block" />
      </div>
      <Caption>{caption}</Caption>
    </Reveal>
  )
}

/* ---------- Cards ---------- */

export type StoryCard = { icon: LucideIcon; image: string; title: ReactNode; body: ReactNode }

/** Small boxed mono label, e.g. "WHAT I LEARNED" */
export function BoxLabel({ children }: { children: ReactNode }) {
  return (
    <span className="inline-block bg-black text-white px-1.5 py-1 font-mono text-[11px] uppercase tracking-wider leading-none">
      {children}
    </span>
  )
}

/**
 * Findings as a connected chain: thin-bordered rows with a pixel-art tile
 * and an icon chip on the left, joined by short vertical lines.
 */
export function CardStack({ label, cards }: { label: string; cards: StoryCard[] }) {
  return (
    <div className={COLUMN}>
      <Reveal className="mb-8">
        <BoxLabel>{label}</BoxLabel>
      </Reveal>
      <div>
        {cards.map((c, i) => {
          const Icon = c.icon
          return (
            <div key={i}>
              {i > 0 && (
                <Reveal delay={i * 140} className="flex justify-center">
                  <span className="block w-px h-10 md:h-14 bg-[#B4532A]/50" aria-hidden />
                </Reveal>
              )}
              <Reveal
                delay={80 + i * 140}
                className="group rounded-md bg-white border border-black/10 shadow-[0_8px_24px_rgba(0,0,0,0.08)] flex flex-col sm:flex-row overflow-hidden"
              >
                <div className="p-1 sm:self-stretch">
                  <div className="relative w-full h-40 sm:w-32 sm:h-full sm:min-h-[128px] rounded overflow-hidden flex items-center justify-center">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={c.image}
                      alt=""
                      loading="lazy"
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                    />
                    <span className="relative flex items-center justify-center w-14 h-14 rounded-md bg-white text-foreground ring-4 ring-white/50 shadow-[0_1px_2px_rgba(0,0,0,0.08)]">
                      <Icon className="w-[22px] h-[22px]" strokeWidth={1.75} aria-hidden />
                    </span>
                  </div>
                </div>
                <div className="px-6 py-6 sm:px-8 sm:py-7 flex flex-col justify-center">
                  <h3 className="font-serif text-[1.25rem] tracking-[-0.015em] mb-2">{c.title}</h3>
                  <p className="text-[16px] leading-relaxed text-muted-foreground">{c.body}</p>
                </div>
              </Reveal>
            </div>
          )
        })}
      </div>
    </div>
  )
}

/** One stage of the final design: short text, then a wide visual */
export function Stage({ title, children, visual }: { title: string; children: ReactNode; visual: ReactNode }) {
  return (
    <div className="space-y-8 md:space-y-10">
      <Narrow>
        <Reveal as="h3" className="font-serif text-[1.25rem] md:text-[1.375rem] tracking-[-0.015em] mb-3">
          {title}
        </Reveal>
        <Reveal delay={100} className="space-y-4 text-[17px] leading-relaxed text-muted-foreground">
          {children}
        </Reveal>
      </Narrow>
      <Wide>{visual}</Wide>
    </div>
  )
}

/** A numbered moment from the process */
export function Moment({
  title,
  children,
  visual,
}: {
  n?: number
  title: string
  children: ReactNode
  visual?: ReactNode
}) {
  return (
    <div className="space-y-8 md:space-y-10">
      <Narrow>
        <Reveal>
          <h3 className="font-serif text-[1.25rem] md:text-[1.375rem] tracking-[-0.015em] mb-3">{title}</h3>
        </Reveal>
        <Reveal delay={100} className="space-y-4 text-[17px] leading-relaxed text-muted-foreground">
          {children}
        </Reveal>
      </Narrow>
      {visual && <Wide>{visual}</Wide>}
    </div>
  )
}

/** Results in the same chain style: accent number + label as the title */
export function Results({
  label = "Impact",
  items,
}: {
  label?: string
  items: { icon: LucideIcon; image: string; value: string; label: string; body: string }[]
}) {
  return (
    <CardStack
      label={label}
      cards={items.map((r) => ({
        icon: r.icon,
        image: r.image,
        title: (
          <>
            {/* One typeface per line: the label stays in the serif of the value. */}
            <span className={`font-serif text-[1.25rem] md:text-[1.375rem] tracking-[-0.015em] ${ACCENT}`}>{r.value}</span>{" "}
            <span className="font-serif text-[1.25rem] md:text-[1.375rem] tracking-[-0.015em]">{r.label}</span>
          </>
        ),
        body: r.body,
      }))}
    />
  )
}

/** Closing pull quote or takeaway */
export function Closing({ children, attribution }: { children: ReactNode; attribution?: string }) {
  return (
    <Narrow>
      <Words
        as="blockquote"
        step={40}
        className="font-serif text-[1.75rem] md:text-[2.25rem] leading-[1.25] tracking-[-0.02em] text-balance"
      >
        {children}
      </Words>
      {attribution && (
        <Reveal delay={500} as="p" className="mt-6 font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
          {attribution}
        </Reveal>
      )}
    </Narrow>
  )
}

/** Compact "Up next" row linking to the following case study */
export function UpNext({
  href,
  image,
  imageAlt,
  title,
  summary,
  meta,
}: {
  href: string
  image: string
  imageAlt: string
  title: string
  summary: string
  meta: string[]
}) {
  return (
    <div className={COLUMN}>
      <Reveal className="mb-4">
        <BoxLabel>Up next</BoxLabel>
      </Reveal>
      <Reveal delay={100}>
        <a
          href={href}
          data-cursor="View project"
          className="group flex items-stretch rounded-xl overflow-hidden bg-white border border-black/15 hover:border-black/35 transition-colors"
        >
          <div className="p-1 shrink-0">
            <div className="relative w-24 h-full min-h-[84px] sm:w-36 rounded-lg overflow-hidden bg-[#EDE8E1]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={image}
                alt={imageAlt}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105"
              />
            </div>
          </div>
          <div className="flex-1 min-w-0 px-5 py-4 sm:px-6 flex flex-col justify-center">
            <p className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground mb-1.5">{meta.join(" · ")}</p>
            <h3 className="text-[1.125rem] font-medium tracking-[-0.01em] leading-snug">{title}</h3>
            <p className="text-[15px] leading-snug text-muted-foreground mt-0.5 truncate">{summary}</p>
          </div>
          <div className="hidden sm:flex items-center pr-6 text-muted-foreground" aria-hidden>
            <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
          </div>
        </a>
      </Reveal>
    </div>
  )
}
