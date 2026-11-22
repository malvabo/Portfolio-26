import type { Metadata } from "next"
import Image from "next/image"
import { DemoPlayer } from "./demo-player"
import styles from "./ai.module.css"

/* ------------------------------------------------------------------
   Launch checklist: every value marked TODO must be filled before
   this page is shared. Search the file for "TODO".
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

const NUMBERS = [
  { value: "$2.3M", label: "a year saved" },
  { value: "50K+", label: "sellers migrated" },
  { value: "0%", label: "enterprise churn" },
  { value: "30%", label: "fewer support tickets" },
]

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

const MORE_RESULTS = [
  { value: "~$14M", label: "a year in clinician time saved", context: "Post Acute Analytics, 40% less time managing document workflows" },
  { value: "40%", label: "faster document turnaround", context: "PandaDoc, Chrome extension used by 50K+ businesses" },
]

const CLIENTS = ["Amazon", "PandaDoc", "Post Acute Analytics", "CVS Pharmacy"]

export default function AiPage() {
  return (
    <div className={styles.page}>
      <a href="#main" className={styles.skip}>
        Skip to content
      </a>

      <header className={styles.header}>
        <div className={styles.headerInner}>
          <a href="#top" className={styles.brand}>
            <Image src="/images/mary-face.webp" alt="" width={32} height={32} className={styles.face} priority />
            Mary Borysova
          </a>
          <nav aria-label="Sections">
            <ul className={styles.nav}>
              <li><a href="#demo">Demo</a></li>
              <li><a href="#work">Work</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <main id="main">
        {/* Hero */}
        <section id="top" className={`${styles.wrap} ${styles.hero}`} aria-labelledby="hero-title">
          <p className={styles.role}>Product lead and design engineer · London</p>
          <h1 id="hero-title" className={styles.h1}>
            I build AI products for complex B2B work.
          </h1>
          <p className={styles.lede}>
            From the problem to a working prototype in code, then into real users&apos; hands. 12 years in tech across
            product, growth and marketing, ex-Amazon.
          </p>
          <div className={styles.actions}>
            <a href="#demo" className={styles.btnPrimary}>
              See the demo
            </a>
            <a href={MAILTO} className={styles.btnGhost}>
              Email me
            </a>
          </div>
          <div className={styles.proof}>
            <p className={styles.proofLabel}>Products for</p>
            <ul className={styles.proofList}>
              {CLIENTS.map((c) => (
                <li key={c}>{c}</li>
              ))}
            </ul>
          </div>
        </section>

        {/* Demo */}
        <section id="demo" className={`${styles.wrap} ${styles.section}`} aria-labelledby="demo-title">
          <p className={styles.eyebrow}>Concept prototype, designed and built by me</p>
          <h2 id="demo-title" className={styles.h2}>
            Conduit: an AI pipeline for customs paperwork
          </h2>

          <DemoPlayer chapters={CHAPTERS} label="Conduit demo, 54 seconds, no sound" />
          {LINKS.prototype && (
            <p className={styles.afterVideo}>
              <a href={LINKS.prototype} className={styles.textLink} target="_blank" rel="noopener noreferrer">
                Try the prototype<span className="sr-only"> (opens in a new tab)</span> →
              </a>
            </p>
          )}

          <div className={styles.prose}>
            <p>
              Food importers retype details from every supplier certificate into compliance forms. One wrong weight or
              missing certificate number holds a shipment at the border.
            </p>
            <p>
              Conduit reads supplier documents and fills in the forms. Each importer sets up their own pipeline: which
              fields to extract, and which form they fill.
            </p>
            <h3 className={styles.h3}>Two decisions that shaped it</h3>
            <ul className={styles.decisions}>
              <li>
                <strong>No pass/fail rules engine.</strong> Every importer checks documents against their own policy, so
                the importer decides what to check, not Conduit.
              </li>
              <li>
                <strong>Confidence on every field.</strong> Any value below the threshold is flagged for a person to
                confirm, because the officer signs their name to it.
              </li>
            </ul>
            <p className={styles.small}>
              <span className={styles.smallLabel}>Built with</span> {BUILT_WITH}
            </p>
          </div>
        </section>

        {/* Case study */}
        <section id="work" className={`${styles.wrap} ${styles.section}`} aria-labelledby="work-title">
          <p className={styles.eyebrow}>Case study · Amazon (Veeqo)</p>
          <h2 id="work-title" className={styles.h2}>
            Replacing a third-party document system for 50K+ Amazon sellers
          </h2>
          <ul className={styles.meta} aria-label="Project details">
            <li>Design lead</li>
            <li>Team of 10</li>
            <li>3 months</li>
            <li>2026</li>
          </ul>

          <dl className={styles.numbers}>
            {NUMBERS.map((n) => (
              <div key={n.label} className={styles.number}>
                <dt className={styles.numberLabel}>{n.label}</dt>
                <dd className={styles.numberValue}>{n.value}</dd>
              </div>
            ))}
          </dl>

          <div className={styles.story}>
            <div className={styles.storyBlock}>
              <h3 className={styles.h3}>The problem</h3>
              <p>
                Veeqo, Amazon&apos;s multi-channel shipping platform, printed every UK seller&apos;s documents through a
                third-party editor that couldn&apos;t be extended. Moving UK sellers onto the US product without a real
                replacement put the biggest accounts at risk.
              </p>
            </div>
            <div className={styles.storyBlock}>
              <h3 className={styles.h3}>What I found</h3>
              <p>
                Two segments with opposite needs. For enterprise sellers, documents are infrastructure: years of custom
                layouts with business logic built in. Small sellers just need them to work. Competitors offered either
                rigid templates or full code editors, nothing in between.
              </p>
            </div>
            <div className={styles.storyBlock}>
              <h3 className={styles.h3}>What I built</h3>
              <p>
                Split the product by need: category-aware templates with simple toggles for small sellers, and an HTML
                editor with AI assist and pre-coded base templates for complex sellers. Brands attach to each document,
                so a seller running 5 to 10 brands sees which version applies where, and picks a version right in the
                print flow.
              </p>
            </div>
            <div className={styles.storyBlock}>
              <h3 className={styles.h3}>Key decisions</h3>
              <ul className={styles.decisions}>
                <li>
                  <strong>Cut drag and drop.</strong> Too expensive with our engineering team, and too limited for
                  enterprise.
                </li>
                <li>
                  <strong>Hand-porting over a migration tool.</strong> Automation would take 4 months; porting
                  enterprise templates by hand took 2 weeks. I pushed for the manual path: we hit the deadline, kept
                  every top account and switched the vendor off 3 months earlier.
                </li>
                <li>
                  <strong>AI for non-coders.</strong> A ready-made prompt sellers give any AI tool to write a working
                  template, so they could migrate without hands-on support.
                </li>
              </ul>
            </div>
            <div className={styles.storyBlock}>
              <h3 className={styles.h3}>Result</h3>
              <p>
                Vendor switched off without losing a single top-tier account. $2.3M a year saved, 50K+ sellers
                migrated, $15B+ in annual GMV protected from interruption, new documents set up in minutes instead of
                months, 30% fewer support tickets.
              </p>
              <p>
                <a href={LINKS.caseStudy} className={styles.textLink}>
                  Full case study →
                </a>{" "}
                <span className={styles.muted}>(password on request)</span>
              </p>
            </div>
          </div>
        </section>

        {/* More results */}
        <section className={`${styles.wrap} ${styles.section}`} aria-labelledby="more-title">
          <h2 id="more-title" className={styles.h2}>
            More shipped results
          </h2>
          <dl className={styles.more}>
            {MORE_RESULTS.map((m) => (
              <div key={m.value} className={styles.number}>
                <dt className={styles.numberLabel}>
                  {m.label}
                  <span className={styles.moreContext}>{m.context}</span>
                </dt>
                <dd className={styles.numberValue}>{m.value}</dd>
              </div>
            ))}
          </dl>
          <figure className={styles.quote}>
            <blockquote>
              <p>
                &ldquo;Immerses themselves entirely in the project to drive it to completion. Works to reduce
                uncertainty for everyone else to understand user needs.&rdquo;
              </p>
            </blockquote>
            <figcaption>
              Konstantin Valiotti, <span className={styles.muted}>Director of Product at PandaDoc</span>
            </figcaption>
          </figure>
        </section>

        {/* How I work */}
        <section className={`${styles.wrap} ${styles.section}`} aria-labelledby="how-title">
          <h2 id="how-title" className={styles.h2}>
            How I work
          </h2>
          <ol className={styles.steps}>
            <li>
              <span className={styles.stepNum} aria-hidden="true">01</span>
              <h3 className={styles.h3}>Find the real problem</h3>
              <p>Users and data before deciding what to build.</p>
            </li>
            <li>
              <span className={styles.stepNum} aria-hidden="true">02</span>
              <h3 className={styles.h3}>Build it in code</h3>
              <p>Working prototypes with real model calls, so decisions rest on real behaviour.</p>
            </li>
            <li>
              <span className={styles.stepNum} aria-hidden="true">03</span>
              <h3 className={styles.h3}>Measure and ship</h3>
              <p>Define success, test it, get it adopted.</p>
            </li>
          </ol>
        </section>

        {/* Background */}
        <section className={`${styles.wrap} ${styles.section}`} aria-labelledby="bg-title">
          <h2 id="bg-title" className={styles.h2}>
            Background
          </h2>
          <p className={styles.bio}>
            12 years in tech. Started in marketing and was CMO twice, then moved into product. Co-founded SmartMum AI,
            which was acquired. I speak and write about AI, behaviour design and Machine Experience (MX), with 100,000+
            readers.
          </p>
        </section>
      </main>

      {/* Contact */}
      <footer id="contact" className={styles.footer}>
        <div className={styles.wrap}>
          <h2 className={styles.footerTitle}>Building something with AI? Let&apos;s talk.</h2>
          {AVAILABILITY && <p className={styles.availability}>{AVAILABILITY}</p>}
          <a href={MAILTO} className={styles.btnPrimary}>
            Email me
          </a>
          <ul className={styles.contactList}>
            <li>
              <a href={MAILTO}>{EMAIL}</a>
            </li>
            <li>
              <a href={LINKS.linkedin} target="_blank" rel="noopener noreferrer">
                LinkedIn<span className="sr-only"> (opens in a new tab)</span>
              </a>
            </li>
            <li>
              <a href={LINKS.cv}>CV (PDF)</a>
            </li>
            <li>London, UK</li>
          </ul>
        </div>
      </footer>
    </div>
  )
}
