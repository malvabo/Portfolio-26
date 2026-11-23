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
    "Product manager in London. I build AI products for complex B2B work and prototype them in code. 12 years in tech, most recently at Amazon.",
  alternates: { canonical: "/ai" },
  openGraph: {
    title: "Mary Borysova – I build AI products for complex B2B work",
    description:
      "Product manager in London. My last project at Amazon saved $2.3M a year.",
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
    caption: "Pick the fields to pull from a document, then check and correct what the model found.",
  },
  {
    src: "/ai/conduit-fill.mp4",
    poster: "/ai/conduit-fill.webp",
    title: "Fill the form",
    caption: "Map the fields onto the form, then run it on a real supplier document.",
  },
]

const NUMBERS = [
  { value: "$2.3M", label: "a year saved" },
  { value: "50K+", label: "sellers migrated" },
  { value: "0%", label: "enterprise churn" },
  { value: "30%", label: "fewer support tickets" },
]

const AI_NUMBERS = [
  { value: "~80%", label: "faster to pick a shipping label" },
  { value: "Over half", label: "of sellers who saw an insight acted on it" },
]

const MORE_RESULTS = [
  { value: "~$14M", label: "a year in clinician time at Post Acute Analytics", context: "Clinicians spent 40% less time on document work." },
  { value: "40%", label: "faster document turnaround at PandaDoc", context: "In a Chrome extension used by 50K+ businesses." },
]

// Same three reviews as the homepage (components/testimonials-section.tsx), quoted as given.
const REVIEWS = [
  {
    text: "I've worked under the leadership of Maria. Her superb communication skills, leadership qualities, enthusiastic personality are the reasons why I recommend her strongly.",
    author: "Kateryna Lezhukh",
    role: "Founder at Quema",
    avatar: "/images/kateryna-lezhukh.png",
  },
  {
    text: "Immerses themselves entirely in the project to drive it to completion. Works to reduce uncertainty for everyone else to understand user needs.",
    author: "Konstantin Valiotti",
    role: "Director of Product at PandaDoc",
    avatar: "https://framerusercontent.com/images/78dofovJbAtympTLqZLY1jA24.jpeg?scale-down-to=512&width=800&height=800",
  },
  {
    text: "She questions the status quo and asks the tough questions that push the team to build with purpose.",
    author: "Carla Ruiz Entrecanales",
    role: "Venture Builder at ColdStart",
    avatar: "https://framerusercontent.com/images/Hd1E2e8ZG1g4zNUsGWNhHe5seg.jpeg?width=387&height=387",
  },
]

const CLIENTS = ["Amazon", "PandaDoc", "Post Acute Analytics", "CVS Pharmacy"]

/* Shared classes, lifted from the homepage components */
const CONTAINER = "container mx-auto px-6 md:px-8 lg:px-12 max-w-7xl"
const FOCUS = "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground"
const EYEBROW = "text-sm text-muted-foreground"
const LABEL = "text-sm font-medium mb-1.5 text-muted-foreground"
const TAG = "inline-block px-2.5 py-0.5 text-[13px] rounded-md bg-[#E8E3DD] text-[#6B5D4F]"
const H2 = "font-serif text-[22px] md:text-[26px] leading-[1.15] tracking-tight text-foreground text-balance"
const H3 = "font-serif text-[19px] md:text-[21px] leading-snug tracking-tight text-foreground mb-2.5"
const READ = "space-y-4 text-base md:text-[17px] leading-[1.7] text-foreground"
const STAT_VALUE = "font-serif tracking-[-0.02em] leading-none text-[#3D3D3D]"
const PILL_GLASS = `inline-flex items-center justify-center gap-2 min-h-11 px-5 text-sm font-medium rounded-full bg-white/40 backdrop-blur-md border border-gray-300/70 text-foreground hover:bg-white/60 hover:border-gray-400/70 transition-all duration-300 shadow-sm hover:shadow-md ${FOCUS}`
const PILL_SOLID = `inline-flex items-center justify-center gap-2 min-h-11 px-5 text-sm font-medium rounded-full bg-foreground text-background hover:opacity-80 transition-opacity ${FOCUS}`
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
              <p className={`${EYEBROW} mb-2`}>Product manager · London</p>
              <h1 id="hero-title" className="font-serif text-[1.75rem] md:text-[2rem] leading-[1.15] font-normal tracking-[-0.02em] text-foreground text-balance">
                I build AI<AiOrb /> products for complex B2B work.
              </h1>
              <p className="mt-4 md:mt-6 max-w-[540px] text-pretty text-[17px] leading-relaxed text-muted-foreground">
                I prototype in code, so my team can try an idea before we commit to building it. I&apos;ve worked in
                tech for 12 years across product, growth and marketing, most recently at Amazon.
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
                <p className={`${EYEBROW} mb-2`}>I&apos;ve built products for</p>
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

            <div className="space-y-4 text-base md:text-[17px] leading-[1.7] text-foreground">
              <p>
                Food importers copy details from every supplier certificate into compliance forms by hand. If one weight
                or certificate number is wrong, the shipment can sit at the border for days.
              </p>
              <p>
                Conduit reads the supplier documents and fills in the forms. Each importer sets up their own pipeline,
                choosing which fields to pull out and which form to fill.
              </p>
              <p>
                I didn&apos;t build a pass/fail rules engine, because every importer already checks documents against
                their own policy.
              </p>
              <p>
                Conduit gives every field a confidence score and sends anything below the threshold to a person,
                because the compliance officer is the one who signs the form.
              </p>
              <div className="pt-2">
                <h3 className={LABEL}>Built with</h3>
                <p className="text-[15px] leading-relaxed text-foreground/80">{BUILT_WITH}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Case study */}
        <section id="work" aria-labelledby="work-title" className={`${CONTAINER} pt-10 pb-10 md:pt-16 md:pb-16 border-t border-border/40 scroll-mt-20`}>
          <div className="flex flex-wrap gap-2 mb-3">
            <span className={TAG}>Amazon (Veeqo)</span>
          </div>
          <h2 id="work-title" className={H2}>
            Replacing a third-party document system for 50K+ Amazon sellers
          </h2>
          <ul aria-label="Project details" className="mt-3 flex flex-wrap text-[15px] text-muted-foreground [&>li:not(:last-child)]:after:content-['·'] [&>li:not(:last-child)]:after:mx-2">
            <li>Product lead</li>
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

          <div className="mt-10 md:mt-14 max-w-[660px] space-y-8 md:space-y-10">
            <div>
              <h3 className={H3}>The problem</h3>
              <div className={READ}>
                <p>
                  Veeqo is Amazon&apos;s multi-channel shipping platform. UK sellers made their invoices, customs forms
                  and packing slips in a third-party editor that cost $2.3M a year, and we couldn&apos;t extend it.
                </p>
                <p>
                  We were moving UK sellers onto the US product. If their documents broke along the way, we risked
                  losing the biggest accounts, so my job was to replace the editor on time and keep them.
                </p>
              </div>
            </div>
            <div>
              <h3 className={H3}>What I found</h3>
              <div className={READ}>
                <p>
                  Sellers needed very different things. Enterprise sellers had years of custom layouts with business
                  logic built into them. Small sellers wanted something that worked straight away.
                </p>
                <p>
                  Competitors offered either fixed templates or a full code editor, and there was nothing for the sellers
                  in between.
                </p>
              </div>
            </div>
            <div>
              <h3 className={H3}>What we built</h3>
              <div className={READ}>
                <p>
                  We built two paths. Small sellers get templates that match their product category, with simple
                  toggles. Larger sellers get an HTML editor with AI help and pre-coded starting templates.
                </p>
                <p>
                  A seller with 5 to 10 brands attaches a brand to each document and picks the right version when they
                  print.
                </p>
              </div>
            </div>
            <div>
              <h3 className={H3}>What I decided</h3>
              <div className={READ}>
                <p>
                  I cut drag and drop. It would have taken a big chunk of engineering time, and enterprise sellers would
                  still have found it too limited.
                </p>
                <p>
                  The bigger decision was how to migrate. A migration tool would have taken 4 months to build, and
                  porting the enterprise templates by hand took 2 weeks. I pushed the VP of Product and the tech leads to
                  go manual, because a late migration would have put the top accounts at risk.
                </p>
                <p>
                  For sellers who don&apos;t code, we wrote a prompt they could paste into any AI tool to get a working
                  template back. That let them move over without our help.
                </p>
              </div>
            </div>
            <div>
              <h3 className={H3}>What happened</h3>
              <div className={READ}>
                <p>
                  We turned the vendor off 3 months early and didn&apos;t lose a single top-tier account. That saved $2.3M
                  a year, and $15B+ in annual GMV kept flowing without a break.
                </p>
                <p>
                  50K+ sellers moved over, support tickets dropped by 30%, and setting up a new document now takes
                  minutes rather than months.
                </p>
              </div>
              <div className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-2">
                <a href={LINKS.caseStudy} className={PILL_GLASS}>
                  Full case study
                  <Arrow />
                </a>
                <span className="text-sm text-muted-foreground">Password on request</span>
              </div>
            </div>
          </div>
        </section>

        {/* Case study: Veeqo AI (kept vague on purpose: NDA, no screenshots, rounded numbers) */}
        <section id="work-ai" aria-labelledby="ai-title" className={`${CONTAINER} pt-10 pb-10 md:pt-16 md:pb-16 border-t border-border/40 scroll-mt-20`}>
          <div className="flex flex-wrap gap-2 mb-3">
            <span className={TAG}>Amazon (Veeqo)</span>
          </div>
          <h2 id="ai-title" className={H2}>
            Bringing AI into Veeqo
          </h2>
          <ul aria-label="Project details" className="mt-3 flex flex-wrap text-[15px] text-muted-foreground [&>li:not(:last-child)]:after:content-['·'] [&>li:not(:last-child)]:after:mx-2">
            <li>Product designer</li>
            <li>6 months</li>
            <li>2025 to 2026</li>
          </ul>

          <dl className="mt-6 md:mt-8 grid grid-cols-2 gap-x-6 gap-y-5 md:gap-x-8 max-w-[660px]">
            {AI_NUMBERS.map((n) => (
              <div key={n.label} className="flex flex-col-reverse justify-end">
                <dt className="mt-2 text-sm text-muted-foreground">{n.label}</dt>
                <dd className={`${STAT_VALUE} text-[2.25rem] md:text-[2.75rem]`}>{n.value}</dd>
              </div>
            ))}
          </dl>

          <div className="mt-10 md:mt-14 max-w-[660px] space-y-8 md:space-y-10">
            <div>
              <h3 className={H3}>The problem</h3>
              <div className={READ}>
                <p>
                  Sellers had stopped using Veeqo&apos;s analytics. The numbers were there, but nothing told them what to
                  do about them, so many ran their business from spreadsheets.
                </p>
                <p>
                  I joined a new AI effort that had no brief and no scope yet, and worked with the PM, engineering and
                  data science to figure out where AI should go first.
                </p>
              </div>
            </div>
            <div>
              <h3 className={H3}>Choosing where to start</h3>
              <div className={READ}>
                <p>
                  I mapped out a seller&apos;s day and scored each idea on four questions. How often would sellers use
                  it? Would it keep them on Veeqo? Could we build it with data we already had? Did competitors already
                  offer it?
                </p>
                <p>
                  Setup automation scored well at first, but sellers only set up once, so it wasn&apos;t worth the
                  investment. We picked two things instead: choosing a shipping rate, which sellers do on every order,
                  and insights built on order and inventory data that competitors didn&apos;t have.
                </p>
              </div>
            </div>
            <div>
              <h3 className={H3}>What I decided</h3>
              <div className={READ}>
                <p>
                  The PM and I set the North Star metric and planned a phased rollout that started with quick wins.
                  Engineering and product leadership signed off on it.
                </p>
                <p>
                  Veeqo&apos;s page templates were hard to change, so we didn&apos;t wait for a refactor. We put the AI in a
                  drawer that opens over any page, which got it onto every screen much sooner.
                </p>
                <p>
                  With data science, I set a confidence threshold. When the model isn&apos;t sure enough, the product
                  hides the suggestion. Every suggestion that does appear explains its reasoning, since sellers
                  won&apos;t act on something they can&apos;t check.
                </p>
              </div>
            </div>
            <div>
              <h3 className={H3}>What happened</h3>
              <div className={READ}>
                <p>
                  In the pilot, sellers chose a shipping label about 80% faster, and over half of the sellers who saw an
                  insight acted on it. After the pilot, leadership committed to the AI work for the long term.
                </p>
                <p>
                  I also ran workshops for the design and product teams on how people learn to trust AI, so later
                  features could start from the same patterns.
                </p>
              </div>
              <p className="mt-6 text-sm text-muted-foreground">Details and screens available in an interview.</p>
            </div>
          </div>
        </section>

        {/* More results */}
        <section aria-labelledby="more-title" className={`${CONTAINER} pt-10 pb-10 md:pt-16 md:pb-16 border-t border-border/40`}>
          <h2 id="more-title" className={`${H2} mb-6`}>
            Other results
          </h2>
          <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6 max-w-[880px]">
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
        </section>

        {/* Reviews: same cards as the homepage */}
        <section aria-labelledby="reviews-title" className={`${CONTAINER} pt-10 pb-10 md:pt-16 md:pb-16 border-t border-border/40`}>
          <h2 id="reviews-title" className={`${H2} mb-6 md:mb-8`}>
            What the people I&apos;ve worked with say
          </h2>
          <ul className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {REVIEWS.map((r) => (
              <li key={r.author}>
                <figure className="bg-[#f1f1f1] rounded-xl p-5 h-full flex flex-col">
                  <blockquote className="flex-grow">
                    <p className="text-base leading-relaxed text-foreground/80">&ldquo;{r.text}&rdquo;</p>
                  </blockquote>
                  <figcaption className="flex items-center gap-3 pt-3 mt-3 border-t border-border/30">
                    <Image
                      src={r.avatar}
                      alt=""
                      width={40}
                      height={40}
                      className="w-10 h-10 rounded-full object-cover ring-2 ring-white shadow-sm"
                    />
                    <div>
                      <p className="text-sm font-semibold text-foreground">{r.author}</p>
                      <p className="text-xs font-medium text-muted-foreground mt-0.5">{r.role}</p>
                    </div>
                  </figcaption>
                </figure>
              </li>
            ))}
          </ul>
        </section>

        {/* Background */}
        <section aria-labelledby="bg-title" className={`${CONTAINER} pt-10 pb-14 md:pt-16 md:pb-20 border-t border-border/40`}>
          <h2 id="bg-title" className={`${H2} mb-4`}>
            Background
          </h2>
          <p className="max-w-[640px] text-[17px] leading-relaxed text-foreground">
            I started in marketing and was CMO twice before moving into product. I co-founded SmartMum AI, which was
            later acquired. I also speak and write about AI, behaviour design and Machine Experience (MX), and more
            than 100,000 people read my work.
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
