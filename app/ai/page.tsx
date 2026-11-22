import type { Metadata } from "next"
import { VideoEmbed } from "./video-embed"
import styles from "./ai.module.css"

/* ------------------------------------------------------------------
   Launch checklist: every value marked TODO must be filled before
   this page is shared. Search the file for "TODO".
------------------------------------------------------------------- */
const EMAIL = "borysova.mary@gmail.com"
const LINKS = {
  // TODO: Loom or YouTube *embed* URL, e.g. https://www.loom.com/embed/<id>
  demoVideo: "",
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
    images: [{ url: "/conduit/dash.webp", width: 2000, height: 1131, alt: "Conduit inbox showing supplier documents and their review status" }],
    type: "profile",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mary Borysova – I build AI products for complex B2B work",
    images: ["/conduit/dash.webp"],
  },
}

const NUMBERS = [
  { value: "$2.3M", label: "a year saved" },
  { value: "50K+", label: "sellers migrated" },
  { value: "0%", label: "enterprise churn" },
  { value: "30%", label: "fewer support tickets" },
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
            <a href={`mailto:${EMAIL}`} className={styles.btnGhost}>
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

          <VideoEmbed
            src={LINKS.demoVideo}
            title="Conduit walkthrough, 2 minutes"
            poster="/conduit/dash.webp"
            posterAlt="Conduit inbox: supplier documents grouped by shipment, each marked Clear or Needs review"
          />
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
          <a href={`mailto:${EMAIL}`} className={styles.btnPrimary}>
            Email me
          </a>
          <ul className={styles.contactList}>
            <li>
              <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
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
