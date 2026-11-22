import type { Metadata } from "next"
import Image from "next/image"
import { HeroGrid } from "@/components/hero-grid"
import { AiOrb } from "@/components/ai-orb"
import { StoryCursor } from "@/components/story-cursor"
import { DemoPlayer } from "./demo-player"

/* ------------------------------------------------------------------
   Launch checklist: every value marked TODO must be filled before
   this page is shared. Search the file for "TODO".
   Styling follows the homepage (components/hero.tsx, *-section.tsx).
------------------------------------------------------------------- */
const EMAIL = "borysova.mary@gmail.com"
const MAILTO = `mailto:${EMAIL}?subject=${encodeURIComponent("Building with AI")}`
// TODO (recommended): what you're open to, e.g. "Open to founding and lead product roles, London or remote, from January."
// Leave empty to hide.
const AVAILABILITY = ""
const LINKS = {
  // TODO (optional): live prototype URL. Leave empty to hide the link.
  prototype: "",
  // TODO: your LinkedIn profile URL
  linkedin: "https://www.linkedin.com/in/TODO",
  // TODO: put the PDF in /public and point to it, e.g. /mary-borysova-cv.pdf
  cv: "/mary-borysova-cv.pdf",
  caseStudy: "/projects/veeqo",
}
// TODO: confirm the stack
const BUILT_WITH = "[Claude Code, model/API, front-end stack]"

export const metadata: Metadata = {
  title: "Mary Borysova – I build AI products for complex B2B work",
  description:
    "Product builder in London. From the problem to a working prototype in code, then into real users' hands. 12 years in tech, ex-Amazon.",
  alternates: { canonical: "/ai" },
  openGraph: {
    title: "Mary Borysova – I build AI products for complex B2B work",
    description:
      "From the problem to a working prototype in code, then into real users' hands. $2.3M a year saved at Amazon.",
    url: "/ai",
    images: [{ url: "/ai/og.png", width: 1200, height: 630, alt: "Mary Borysova. I build AI products for complex B2B work. $2.3M a year saved at Amazon." }],
    type: "profile",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mary Borysova – I build AI products for complex B2B work",
    images: ["/ai/og.png"],
  },
}

const CHAPTERS = [
  {
    src: "/ai/conduit-extract.mp4",
    poster: "/ai/conduit-extract.webp",
    title: "Set up extraction",
    caption: "Choosing which fields to pull from a document, then checking and correcting what the model found.",
  },
  {
    src: "/ai/conduit-fill.mp4",
    poster: "/ai/conduit-fill.webp",
    title: "Fill the form",
    caption: "Mapping fields straight onto the form, then running it on a real supplier document.",
  },
]

const NUMBERS = [
  { value: "$2.3M", label: "a year saved" },
  { value: "50K+", label: "sellers migrated" },
  { value: "0%", label: "enterprise churn" },
  { value: "30%", label: "fewer support tickets" },
]

const MORE_RESULTS = [
  { value: "~$14M", label: "a year in clinician time saved", context: "Post Acute Analytics, from 40% less time managing document workflows" },
  { value: "40%", label: "faster document turnaround", context: "PandaDoc, Chrome extension used by 50K+ businesses" },
]

// Each principle is backed by a decision already on this page.
const PRINCIPLES = [
  {
    title: "Cut scope before adding it.",
    body: "Most risk sits in what a team agrees to build. I find the feature that costs the most and serves the fewest users, and remove it first.",
    proof: "Veeqo: cut drag and drop. Conduit: no rules engine, so each importer keeps their own policy.",
  },
  {
    title: "Pick the path with the least to lose.",
    body: "When a deadline carries revenue, I compare options by what the business could lose, then commit and defend the call.",
    proof: "Hand-ported enterprise templates in 2 weeks instead of building a 4-month migration tool. Vendor off 3 months early, 0% enterprise churn.",
  },
  {
    title: "Segment before solving.",
    body: "One product for users with opposite needs serves neither. I split by need, then design what the segments share.",
    proof: "Simple templates for small sellers, a code editor with AI assist for enterprise, one document system underneath.",
  },
  {
    title: "Put AI where someone can stand behind it.",
    body: "I prototype with real model calls to see where the model fails, then design the hand-off to a person around those failures.",
    proof: "Conduit flags any field below a confidence threshold, because the officer signs their name to it.",
  },
]

const CLIENTS = ["Amazon", "PandaDoc", "Post Acute Analytics", "CVS Pharmacy"]

/* Shared classes, lifted from the homepage components */
const CONTAINER = "container mx-auto px-6 md:px-8 lg:px-12 max-w-7xl"
const FOCUS = "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground"
const EYEBROW = "uppercase text-[13px] font-mono tracking-wide text-muted-foreground"
const LABEL = "text-xs font-normal mb-2 uppercase tracking-wide text-muted-foreground"
const TAG = "inline-block px-2.5 py-0.5 text-[11px] font-mono uppercase tracking-normal rounded-md bg-[#E8E3DD] text-[#6B5D4F]"
const H2 = "font-serif text-[22px] md:text-[26px] leading-[1.15] tracking-tight text-foreground text-balance"
const STAT_VALUE = "font-serif tracking-[-0.02em] leading-none text-[#3D3D3D]"
const PILL_GLASS = `inline-flex items-center justify-center gap-2 min-h-11 px-5 text-sm font-medium rounded-full bg-white/40 backdrop-blur-md border border-gray-300/70 text-foreground hover:bg-white/60 hover:border-gray-400/70 transition-all duration-300 shadow-sm hover:shadow-md ${FOCUS}`
const PILL_SOLID = `inline-flex items-center justify-center gap-2 min-h-11 px-5 text-sm font-medium rounded-full bg-foreground text-background hover:opacity-80 transition-opacity ${FOCUS}`
const BULLETS = "space-y-2.5 [&>li]:relative [&>li]:pl-4 [&>li]:before:absolute [&>li]:before:left-0 [&>li]:before:top-[0.7em] [&>li]:before:h-px [&>li]:before:w-2 [&>li]:before:bg-foreground/60"
const TEXT_LINK = `underline underline-offset-4 decoration-border hover:text-foreground hover:decoration-foreground ${FOCUS}`

const Arrow = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
  </svg>
)

export default function AiPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <StoryCursor />
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-3 focus:top-3 focus:z-[60] focus:rounded-md focus:bg-foreground focus:px-3 focus:py-2 focus:text-background"
      >
        Skip to content
      </a>

      {/* Header: same bar as the homepage, always visible */}
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/40">
        <div className={CONTAINER}>
          <div className="flex items-center justify-between h-14 md:h-16">
            <a href="#top" aria-label="Mary Borysova, back to top" className={`flex items-center gap-3 hover:opacity-80 transition-opacity rounded ${FOCUS}`}>
              <Image src="/logo-mb.svg" alt="" width={52} height={40} priority className="h-[30px] md:h-[38px] w-auto" />
              <span className="hidden sm:inline font-serif text-[17px] tracking-[-0.01em]">Mary Borysova</span>
            </a>
            <nav aria-label="Sections">
              <ul className="flex items-center gap-6 md:gap-10">
                {[
                  ["Demo", "#demo"],
                  ["Work", "#work"],
                  ["Contact", "#contact"],
                ].map(([label, href]) => (
                  <li key={href}>
                    <a href={href} className={`text-[15px] text-muted-foreground hover:text-foreground transition-colors rounded ${FOCUS}`}>
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <main id="main">
        {/* Hero: the homepage hero, with the dot field and the AI orb */}
        <div id="top" className="relative">
          <HeroGrid />
          <section aria-labelledby="hero-title" className={`${CONTAINER} relative z-10 pt-8 pb-8 md:pt-24 md:pb-16`}>
            <div data-grid-quiet className="max-w-[720px]">
              <Image
                src="/images/mary-face.webp"
                alt="Mary Borysova"
                width={80}
                height={80}
                priority
                className="mb-4 md:mb-5 h-14 w-14 md:h-20 md:w-20 rounded-xl object-cover"
              />
              <h1 id="hero-title" className="font-serif text-[1.75rem] md:text-[2rem] leading-[1.15] font-normal tracking-[-0.02em] text-foreground text-balance">
                I build AI<AiOrb /> products for complex B2B work.
              </h1>
              <p className="mt-4 md:mt-6 max-w-[540px] text-pretty text-[17px] leading-relaxed text-muted-foreground">
                From the problem to a working prototype in code, then into real users&apos; hands. 12 years in tech across
                product, growth and marketing, ex-Amazon.
              </p>
              <div className="mt-6 md:mt-8 flex flex-wrap gap-3">
                <a href={MAILTO} className={PILL_SOLID}>
                  Email me
                </a>
                <a href="#demo" className={PILL_GLASS}>
                  See the demo
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v14m0 0l-5-5m5 5l5-5" />
                  </svg>
                </a>
              </div>
              <div className="mt-7 md:mt-10">
                <p className={`${EYEBROW} mb-2`}>Products for</p>
                <ul className="flex flex-wrap gap-y-1 text-[15px] text-foreground [&>li:not(:last-child)]:after:content-['·'] [&>li:not(:last-child)]:after:mx-2.5 [&>li:not(:last-child)]:after:text-muted-foreground">
                  {CLIENTS.map((c) => (
                    <li key={c}>{c}</li>
                  ))}
                </ul>
              </div>
            </div>
          </section>
        </div>

        {/* Demo */}
        <section id="demo" aria-labelledby="demo-title" className={`${CONTAINER} pt-7 pb-10 md:pt-12 md:pb-16 scroll-mt-20`}>
          <div className="flex flex-wrap gap-2 mb-3">
            <span className={TAG}>Concept prototype, designed and built by me</span>
          </div>
          <h2 id="demo-title" className={`${H2} mb-4 md:mb-6`}>
            Conduit: an AI pipeline for customs paperwork
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1.6fr)_minmax(0,1fr)] gap-6 lg:gap-12">
            <div>
              <DemoPlayer chapters={CHAPTERS} label="Conduit demo, 54 seconds, no sound" />
              {LINKS.prototype && (
                <a href={LINKS.prototype} target="_blank" rel="noopener noreferrer" className={`${PILL_GLASS} mt-4`}>
                  Try the prototype<span className="sr-only"> (opens in a new tab)</span>
                  <Arrow />
                </a>
              )}
            </div>

            <div className="text-base leading-relaxed text-foreground space-y-3.5">
              <p>
                Food importers retype details from every supplier certificate into compliance forms. One wrong weight or
                missing certificate number holds a shipment at the border.
              </p>
              <p>
                Conduit reads supplier documents and fills in the forms. Each importer sets up their own pipeline: which
                fields to extract, and which form they fill.
              </p>
              <div className="pt-2">
                <h3 className={LABEL}>Two decisions that shaped it</h3>
                <ul className={BULLETS}>
                  <li>
                    <strong className="font-medium">No pass/fail rules engine.</strong> Every importer checks documents
                    against their own policy, so the importer decides what to check, not Conduit.
                  </li>
                  <li>
                    <strong className="font-medium">Confidence on every field.</strong> Any value below the threshold is
                    flagged for a person to confirm, because the officer signs their name to it.
                  </li>
                </ul>
              </div>
              <div className="pt-2">
                <h3 className={LABEL}>Built with</h3>
                <p className="text-[15px] text-muted-foreground">{BUILT_WITH}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Case study */}
        <section id="work" aria-labelledby="work-title" className={`${CONTAINER} pt-10 pb-10 md:pt-16 md:pb-16 border-t border-border/40 scroll-mt-20`}>
          <div className="flex flex-wrap gap-2 mb-3">
            <span className={TAG}>Big tech</span>
            <span className={TAG}>Amazon (Veeqo)</span>
          </div>
          <h2 id="work-title" className={H2}>
            Replacing a third-party document system for 50K+ Amazon sellers
          </h2>
          <ul aria-label="Project details" className="mt-3 flex flex-wrap text-[15px] text-muted-foreground [&>li:not(:last-child)]:after:content-['·'] [&>li:not(:last-child)]:after:mx-2">
            <li>Design lead</li>
            <li>Team of 10</li>
            <li>3 months</li>
            <li>2026</li>
          </ul>

          <dl className="mt-6 md:mt-8 grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-5 md:gap-x-8">
            {NUMBERS.map((n) => (
              <div key={n.label} className="flex flex-col-reverse justify-end">
                <dt className="mt-2 text-sm text-muted-foreground">{n.label}</dt>
                <dd className={`${STAT_VALUE} text-[2.25rem] md:text-[2.75rem]`}>{n.value}</dd>
              </div>
            ))}
          </dl>

          <div className="mt-10 md:mt-14 grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 text-base leading-relaxed">
            <div>
              <h3 className={LABEL}>The problem</h3>
              <p>
                Veeqo, Amazon&apos;s multi-channel shipping platform, printed every UK seller&apos;s documents through a
                third-party editor that couldn&apos;t be extended. Moving UK sellers onto the US product without a real
                replacement put the biggest accounts at risk.
              </p>
            </div>
            <div>
              <h3 className={LABEL}>What I found</h3>
              <p>
                Two segments with opposite needs. For enterprise sellers, documents are infrastructure: years of custom
                layouts with business logic built in. Small sellers just need them to work. Competitors offered either
                rigid templates or full code editors, nothing in between.
              </p>
            </div>
            <div>
              <h3 className={LABEL}>What I built</h3>
              <p>
                Split the product by need: category-aware templates with simple toggles for small sellers, and an HTML
                editor with AI assist and pre-coded base templates for complex sellers. Brands attach to each document,
                so a seller running 5 to 10 brands sees which version applies where, and picks a version right in the
                print flow.
              </p>
            </div>
            <div className="lg:col-span-2">
              <h3 className={LABEL}>Key decisions</h3>
              <ul className={BULLETS}>
                <li>
                  <strong className="font-medium">Cut drag and drop.</strong> Too expensive with our engineering team, and
                  too limited for enterprise.
                </li>
                <li>
                  <strong className="font-medium">Hand-porting over a migration tool.</strong> Automation would take 4
                  months; porting enterprise templates by hand took 2 weeks. I pushed for the manual path: we hit the
                  deadline, kept every top account and switched the vendor off 3 months earlier.
                </li>
                <li>
                  <strong className="font-medium">AI for non-coders.</strong> A ready-made prompt sellers give any AI tool
                  to write a working template, so they could migrate without hands-on support.
                </li>
              </ul>
            </div>
            <div>
              <h3 className={LABEL}>Result</h3>
              <p>
                Vendor switched off without losing a single top-tier account. $2.3M a year saved, 50K+ sellers migrated,
                $15B+ in annual GMV protected from interruption, new documents set up in minutes instead of months, 30%
                fewer support tickets.
              </p>
              <div className="mt-5 flex flex-wrap items-center gap-x-3 gap-y-2">
                <a href={LINKS.caseStudy} className={PILL_GLASS}>
                  Full case study
                  <Arrow />
                </a>
                <span className="text-sm text-muted-foreground">Password on request</span>
              </div>
            </div>
          </div>
        </section>

        {/* More results */}
        <section aria-labelledby="more-title" className={`${CONTAINER} pt-10 pb-10 md:pt-16 md:pb-16 border-t border-border/40`}>
          <h2 id="more-title" className={`${EYEBROW} mb-6`}>
            More shipped results
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            <dl className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">
              {MORE_RESULTS.map((m) => (
                <div key={m.value} className="flex flex-col-reverse justify-end">
                  <dt className="mt-2 text-sm text-muted-foreground">
                    <span className="text-foreground">{m.label}</span>
                    <br />
                    {m.context}
                  </dt>
                  <dd className={`${STAT_VALUE} text-[1.75rem] md:text-[2rem]`}>{m.value}</dd>
                </div>
              ))}
            </dl>
            <figure className="bg-[#f1f1f1] rounded-xl p-5 flex flex-col">
              <blockquote className="flex-grow">
                <p className="text-base leading-relaxed text-foreground/80">
                  &ldquo;Immerses themselves entirely in the project to drive it to completion. Works to reduce
                  uncertainty for everyone else to understand user needs.&rdquo;
                </p>
              </blockquote>
              <figcaption className="flex items-center gap-3 pt-3 mt-3 border-t border-border/30">
                <Image
                  src="https://framerusercontent.com/images/78dofovJbAtympTLqZLY1jA24.jpeg?scale-down-to=512&width=800&height=800"
                  alt=""
                  width={40}
                  height={40}
                  className="w-10 h-10 rounded-full object-cover ring-2 ring-white shadow-sm"
                />
                <div>
                  <p className="text-sm font-semibold text-foreground">Konstantin Valiotti</p>
                  <p className="text-xs font-medium text-muted-foreground mt-0.5">Director of Product at PandaDoc</p>
                </div>
              </figcaption>
            </figure>
          </div>
        </section>

        {/* How I work */}
        <section aria-labelledby="how-title" className={`${CONTAINER} pt-10 pb-10 md:pt-16 md:pb-16 border-t border-border/40`}>
          <h2 id="how-title" className={`${H2} mb-2`}>
            How I make product calls
          </h2>
          <p className="mb-8 md:mb-10 max-w-[540px] text-base leading-relaxed text-muted-foreground">
            Four calls I make on every product, and where I made them.
          </p>
          <ol className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 md:gap-y-10">
            {PRINCIPLES.map((p, i) => (
              <li key={p.title} className="border-t border-border/60 pt-4">
                <span aria-hidden="true" className="block font-mono text-[13px] text-muted-foreground mb-2">
                  0{i + 1}
                </span>
                <h3 className="font-serif text-[20px] leading-[1.25] tracking-tight mb-2 text-balance">{p.title}</h3>
                <p className="text-base leading-relaxed text-foreground">{p.body}</p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  <span className="font-mono text-[12px] uppercase tracking-wide mr-1.5">Proof</span>
                  {p.proof}
                </p>
              </li>
            ))}
          </ol>
        </section>

        {/* Background */}
        <section aria-labelledby="bg-title" className={`${CONTAINER} pt-10 pb-14 md:pt-16 md:pb-20 border-t border-border/40`}>
          <h2 id="bg-title" className={`${H2} mb-4`}>
            Background
          </h2>
          <p className="max-w-[640px] text-[17px] leading-relaxed text-foreground">
            12 years in tech. Started in marketing and was CMO twice, then moved into product. Co-founded SmartMum AI,
            which was acquired. I speak and write about AI, behaviour design and Machine Experience (MX), with 100,000+
            readers.
          </p>
        </section>
      </main>

      {/* Contact: closes on the same dot field as the homepage footer */}
      <footer id="contact" className="relative overflow-hidden border-t border-border/40 py-14 md:py-24 scroll-mt-20">
        <HeroGrid mask="linear-gradient(to bottom, transparent 0, #000 35%, #000 100%)" />
        <div className={`${CONTAINER} relative`}>
          <div data-grid-quiet className="max-w-[720px]">
            <h2 className="font-serif text-[1.75rem] md:text-[2rem] leading-[1.15] tracking-[-0.02em] text-balance">
              Building something with AI? Let&apos;s talk.
            </h2>
            {AVAILABILITY && <p className="mt-4 max-w-[540px] text-[17px] leading-relaxed text-muted-foreground">{AVAILABILITY}</p>}
            <a href={MAILTO} className={`${PILL_SOLID} mt-6`}>
              Email me
            </a>
            <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-[14px] text-muted-foreground">
              <li>
                <a href={MAILTO} className={TEXT_LINK}>
                  {EMAIL}
                </a>
              </li>
              <li>
                <a href={LINKS.linkedin} target="_blank" rel="noopener noreferrer" className={TEXT_LINK}>
                  LinkedIn<span className="sr-only"> (opens in a new tab)</span>
                </a>
              </li>
              <li>
                <a href={LINKS.cv} className={TEXT_LINK}>
                  CV (PDF)
                </a>
              </li>
              <li>London, UK</li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  )
}
