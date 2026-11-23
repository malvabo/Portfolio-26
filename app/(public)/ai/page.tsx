import type { Metadata } from "next"
import Image from "next/image"
import { HeroGrid } from "@/components/hero-grid"
import { AiOrb } from "@/components/ai-orb"
import { StoryCursor } from "@/components/story-cursor"
import { DemoPlayer } from "./demo-player"

/* ------------------------------------------------------------------
   Public page for founder outreach. Served at aipm.maryborysova.com
   (proxy.ts) and /ai. No password: it has its own root layout.
   Launch checklist: search this file for "TODO".
   Styling follows the homepage components (hero, *-section.tsx).
------------------------------------------------------------------- */
const EMAIL = "borysova.mary@gmail.com"
const MAILTO = `mailto:${EMAIL}?subject=${encodeURIComponent("Hello from your AI page")}`
// Speaking lives on the main domain (open, see root-password-gate.tsx). The PM case studies are in app/(public)/cases.
const MAIN_SITE = "https://maryborysova.com"
// TODO (recommended): what you're open to, e.g. "Open to product roles at AI startups, London or remote, from January."
// Leave empty to hide.
const AVAILABILITY = ""
const LINKS = {
  linkedin: "https://www.linkedin.com/in/maria-borysova/",
  conduitCase: "/cases/conduit",
  veeqoCase: "/cases/veeqo",
  substack: "https://healthmattersandme.substack.com/",
  speaking: `${MAIN_SITE}/speaking`,
}
const BUILT_WITH = "Claude Code, Google Document AI, Pydantic, Vercel, Codex, Claude API."

export const metadata: Metadata = {
  title: "Mary Borysova – I build AI products for complex B2B work",
  description:
    "Product manager in London. 12 years in technology across product, growth and marketing, most recently at Amazon.",
  alternates: { canonical: "https://aipm.maryborysova.com" },
  openGraph: {
    title: "Mary Borysova – I build AI products for complex B2B work",
    description: "Product manager in London. My last project at Amazon saved $2.3M a year.",
    url: "https://aipm.maryborysova.com",
    siteName: "Mary Borysova",
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
    width: 1280,
    height: 724,
    title: "Set up extraction",
    caption: "Pick the fields to pull from a document, then check and correct what the model found.",
  },
  {
    src: "/ai/conduit-fill.mp4",
    poster: "/ai/conduit-fill.webp",
    width: 1280,
    height: 802,
    title: "Fill the form",
    caption: "Map the fields onto the form, then run it on a real supplier document.",
  },
]

// Logos are black on transparent and share one height (CVS is wider, so a touch shorter).
const LOGOS = [
  { name: "Amazon", src: "/ai/logos/amazon.svg", width: 603, height: 182, className: "h-[20px] sm:h-[24px]" },
  { name: "PandaDoc", src: "/ai/logos/pandadoc.png", width: 334, height: 96, className: "h-[20px] sm:h-[24px]" },
  { name: "CVS Pharmacy", src: "/ai/logos/cvs-pharmacy.png", width: 733, height: 96, className: "h-[15px] sm:h-[18px]" },
]

const VEEQO_IMAGES = [
  { src: "/images/vq1.png", alt: "Veeqo document library redesign" },
  { src: "/images/vq11.png", alt: "Document setup with branding controls and live invoice preview" },
  { src: "/images/vq_doc.png", alt: "Invoice document templates" },
]

const ARTICLES = [
  {
    title: "How to hook 500M users: breaking down Duolingo's gamification",
    description: "Lessons in motivation, competition, and habit-building.",
    link: "https://medium.com/user-experience-design-1/duolingo-analyzing-all-engagement-and-retention-techniques-3e73b79120cf",
    gradient: "from-[#1a4d4d] via-[#2d7373] to-[#4a9d9d]",
  },
  {
    title: "Whoop! or How to gamify training: $3.6 billion product playbook",
    description: "Secrets on how to make training feel like a fun game.",
    link: "https://medium.com/user-experience-design-1/whoop-or-how-to-gamify-training-3-6-billion-product-playbook-2a1380971b88",
    gradient: "from-[#4a5b8a] via-[#6b7ba8] to-[#8ba3c7]",
  },
  {
    title: "Why 100M+ athletes are hooked on Strava",
    description: "The psychology behind Strava's addictive community features.",
    link: "https://uxdesign.cc/why-over-100-million-athletes-are-hooked-on-strava-545708e17552",
    gradient: "from-[#2d4a6d] via-[#4d6a8d] to-[#7d9abd]",
  },
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

/* Shared classes, lifted from the homepage components */
const CONTAINER = "container mx-auto px-6 md:px-8 lg:px-12 max-w-7xl"
const FOCUS = "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground"
const EYEBROW = "text-sm text-muted-foreground"
const EYEBROW_CAPS = "uppercase text-[13px] font-mono tracking-wide text-muted-foreground"
const TAG = "inline-block px-2.5 py-0.5 text-[11px] font-mono uppercase tracking-normal rounded-md bg-[#E8E3DD] text-[#6B5D4F]"
// Project blocks: media left, text right on desktop; stacked on mobile
const CASE_SECTION = "pt-6 pb-8 md:pt-8 md:pb-14"
const CASE_GRID = "grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.6fr)] gap-5 lg:gap-12"
const CASE_MEDIA = "overflow-hidden rounded-lg border border-gray-200 bg-gray-50 self-start"
const CASE_TEXT = "flex flex-col items-start gap-4 text-base md:text-[17px] leading-[1.7] text-foreground"
const CASE_META = "grid w-full grid-cols-2 gap-4 text-[15px] leading-snug"
const META_LABEL = "text-sm text-muted-foreground mb-1"
const CARD_TITLE = "font-serif text-[22px] md:text-[26px] leading-[1.15] tracking-tight text-foreground text-balance"
const PILL_GLASS = `inline-flex items-center justify-center gap-2 min-h-11 px-5 text-sm font-medium rounded-full bg-white/40 backdrop-blur-md border border-gray-300/70 text-foreground hover:bg-white/60 hover:border-gray-400/70 transition-all duration-300 shadow-sm hover:shadow-md ${FOCUS}`
const ARROW_LINK = `inline-flex items-center gap-1.5 text-base font-medium text-foreground underline underline-offset-[6px] decoration-foreground/25 hover:decoration-foreground transition-colors rounded ${FOCUS}`
const NAV_LINK = `text-muted-foreground hover:text-foreground transition-colors rounded ${FOCUS}`
const TEXT_LINK = `underline underline-offset-4 decoration-border hover:text-foreground hover:decoration-foreground ${FOCUS}`

const Arrow = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
  </svg>
)

// Diagonal "opens elsewhere" arrow, top right
const ArrowUpRight = () => (
  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M8 7h9v9" />
  </svg>
)

const Lock = () => (
  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
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

      {/* Header: the homepage bar, logo only */}
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/40">
        <div className={CONTAINER}>
          <div className="flex items-center justify-between h-14 md:h-16">
            <a href="#top" aria-label="Mary Borysova, back to top" className={`flex items-center hover:opacity-80 transition-opacity rounded ${FOCUS}`}>
              <Image src="/logo-mb.svg" alt="" width={52} height={40} priority className="h-[30px] md:h-[38px] w-auto" />
            </a>
            <nav aria-label="Sections">
              <ul className="flex items-center gap-5 md:gap-10 text-[15px]">
                <li className="hidden sm:block">
                  <a href="#work" className={NAV_LINK}>Work</a>
                </li>
                <li>
                  <a href={LINKS.speaking} className={NAV_LINK}>Speaking</a>
                </li>
                <li>
                  <a href={MAILTO} className={`${NAV_LINK} inline-flex items-center gap-1 text-foreground`}>
                    Say hello
                    <ArrowUpRight />
                  </a>
                </li>
                <li>
                  <a href={LINKS.linkedin} target="_blank" rel="noopener noreferrer" className={`${NAV_LINK} inline-flex items-center gap-1 text-foreground`}>
                    LinkedIn<span className="sr-only"> (opens in a new tab)</span>
                    <ArrowUpRight />
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <main id="main">
        {/* Hero: the homepage hero, with the dot field and the AI orb */}
        <div id="top" className="relative">
          <HeroGrid quietPad={30} includeMedia />
          <section aria-labelledby="hero-title" className={`${CONTAINER} relative z-10 pt-6 pb-6 md:pt-[72px] md:pb-12`}>
            <div data-grid-quiet className="max-w-[720px]">
              <Image
                src="/images/mary-face.webp"
                alt="Mary Borysova"
                width={80}
                height={80}
                priority
                className="mb-3 md:mb-4 h-14 w-14 md:h-20 md:w-20 rounded-xl object-cover"
              />
              <h1 id="hero-title" className="font-serif text-[1.75rem] md:text-[2rem] leading-[1.15] font-normal tracking-[-0.02em] text-foreground text-balance">
                I build AI<AiOrb /> products for complex B2B work.
              </h1>
              <p className="mt-3 md:mt-[18px] max-w-[560px] text-pretty text-[17px] leading-relaxed text-muted-foreground">
                With 12 years in technology across product, growth and marketing, I bring a commercial and systems-level
                perspective to product development. Most recently at Amazon, I led work on AI-powered products and
                enterprise platforms, translating complex business needs into scalable solutions.
              </p>
              {/* Key numbers, as on the portfolio hero */}
              <dl className="mt-6 md:mt-9 grid grid-cols-3 gap-x-4 sm:gap-x-8">
                {[
                  { value: "$14M/year", label: "Operational costs saved through workflow optimization" },
                  { value: "100K+", label: "Business users across enterprise products" },
                  { value: "3", label: "International Design Awards\n1 Gold and 2 Silver" },
                ].map((st) => (
                  <div key={st.value} className="flex flex-col-reverse justify-end">
                    <dt className="text-xs sm:text-sm text-muted-foreground whitespace-pre-line">{st.label}</dt>
                    <dd className="font-serif text-[1.35rem] sm:text-[1.75rem] md:text-[2rem] tracking-[-0.02em] leading-none text-[#3D3D3D] mb-2">
                      {st.value}
                    </dd>
                  </div>
                ))}
              </dl>
              <ul aria-label="Companies I've built products for" className="mt-9 md:mt-[60px] flex flex-wrap items-center gap-x-6 sm:gap-x-8 gap-y-4">
                {LOGOS.map((l) => (
                  <li key={l.name} className="flex h-6 items-center">
                    <Image
                      src={l.src}
                      alt={l.name}
                      width={l.width}
                      height={l.height}
                      className={`${l.className} w-auto [filter:brightness(0)] opacity-85`}
                    />
                  </li>
                ))}
              </ul>
            </div>
          </section>
        </div>

        {/* Featured projects: same label as the homepage, no divider */}
        <div id="work" className={`${CONTAINER} pt-8 md:pt-12 scroll-mt-20`}>
          <p className={`${EYEBROW_CAPS} inline-flex items-center gap-1.5`}>
            Featured projects
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={1.75} viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 5v14m0 0l-5-5m5 5l5-5" />
            </svg>
          </p>
        </div>

        {/* Conduit: demo */}
        <section id="demo" aria-labelledby="demo-title" className={`${CONTAINER} ${CASE_SECTION} scroll-mt-20`}>
          <h2 id="demo-title" className={`${CARD_TITLE} mb-4 md:mb-6`}>
            Conduit: an AI pipeline for customs paperwork
          </h2>

          <div className={CASE_GRID}>
            <div className={CASE_TEXT}>
              <p>
                Food importers copy details from supplier documentation into internal compliance forms by hand. If one
                data point is incorrect, the shipment can be blocked at the border for days.
              </p>
              <p>
                I have built Conduit, a tool that reads the supplier documents and fills in the compliance forms.
                Importers set up their own pipelines, choosing which fields to pull out and how to fill in the forms.
              </p>
              <p>Conduit gives extracted data confidence scores and marks data below the threshold for human review.</p>
              <dl className={`${CASE_META} mt-3 md:mt-4`}>
                <div>
                  <dt className={META_LABEL}>Role</dt>
                  <dd>Sole product manager and designer</dd>
                </div>
                <div>
                  <dt className={META_LABEL}>Built with</dt>
                  <dd>{BUILT_WITH}</dd>
                </div>
              </dl>
              <a href={LINKS.conduitCase} className={PILL_GLASS}>
                Read the case study
                <Arrow />
              </a>
            </div>

            <div>
              <DemoPlayer chapters={CHAPTERS} label="Conduit demo, 54 seconds, no sound" />
            </div>
          </div>
        </section>

        {/* Amazon: document system, same layout as Conduit */}
        <section aria-labelledby="veeqo-title" className={`${CONTAINER} ${CASE_SECTION}`}>
          <div className="flex flex-wrap gap-2 mb-3">
            <span className={TAG}>Big tech</span>
          </div>
          <h2 id="veeqo-title" className={`${CARD_TITLE} mb-4 md:mb-6`}>
            Amazon: Redesigning a document system for 50k+ sellers
          </h2>
          <div className={CASE_GRID}>
            <div className={CASE_TEXT}>
              <p>
                I led the design that replaced the third-party PDF tool behind every invoice, customs form and packing
                slip: an HTML-based engine with AI-assisted editing, a rebuilt document library, and a migration path for
                the enterprise accounts.
              </p>
              <dl className={CASE_META}>
                <div className="flex flex-col-reverse justify-end">
                  <dt className="text-sm text-muted-foreground">saved in third-party platform costs</dt>
                  <dd className="text-xl font-medium text-foreground mb-0.5">$2.3M a year</dd>
                </div>
                <div className="flex flex-col-reverse justify-end">
                  <dt className="text-sm text-muted-foreground">among top-tier enterprise accounts</dt>
                  <dd className="text-xl font-medium text-foreground mb-0.5">0% churn</dd>
                </div>
              </dl>
              <dl className={`${CASE_META} mt-3 md:mt-4`}>
                <div>
                  <dt className={META_LABEL}>Role</dt>
                  <dd>Product design lead</dd>
                </div>
                <div>
                  <dt className={META_LABEL}>Timeline</dt>
                  <dd>3 months, 2026</dd>
                </div>
              </dl>
              <a href={LINKS.veeqoCase} className={PILL_GLASS}>
                Read the case study
                <Arrow />
              </a>
            </div>
            <div className={CASE_MEDIA}>
              <Image
                src="/images/vq11.png"
                alt="Document setup with branding controls and a live invoice preview"
                width={2844}
                height={2010}
                sizes="(min-width: 1024px) 60vw, 100vw"
                className="h-auto w-full"
              />
            </div>
          </div>
        </section>

        {/* Amazon: AI automation, same layout */}
        <section aria-labelledby="amazon-ai-title" className={`${CONTAINER} ${CASE_SECTION} pb-12 md:pb-20`}>
          <div className="flex flex-wrap gap-2 mb-3">
            <span className={TAG}>Big tech</span>
          </div>
          <h2 id="amazon-ai-title" className={`${CARD_TITLE} mb-4 md:mb-6`}>
            Amazon: AI automation for complex shipping workflows
          </h2>
          <div className={CASE_GRID}>
            <div className={CASE_TEXT}>
              <p>
                I designed AI-powered automation for Amazon&apos;s internal shipping operations, cutting manual work for
                thousands of operators and speeding up decisions across complex logistics workflows.
              </p>
              <dl className={`${CASE_META} mt-3 md:mt-4`}>
                <div>
                  <dt className={META_LABEL}>Role</dt>
                  <dd>Product design lead</dd>
                </div>
                <div>
                  <dt className={META_LABEL}>Timeline</dt>
                  <dd>6 months, 2025–2026</dd>
                </div>
              </dl>
              <span className="inline-flex w-fit items-center gap-2 px-4 sm:px-5 py-2.5 text-[13px] sm:text-sm font-medium rounded-full bg-[#E8E3DD] text-[#6B5D4F]">
                <Lock />
                Case study and results available during the interview
              </span>
            </div>
            <div className={CASE_MEDIA}>
              <Image
                src="/images/aivq1.png"
                alt="Orders page with an AI actions panel: a shipping savings insight and restock and stock-move recommendations"
                width={2844}
                height={2010}
                sizes="(min-width: 1024px) 60vw, 100vw"
                className="h-auto w-full"
              />
            </div>
          </div>
        </section>

        {/* Reviews: same cards as the homepage */}
        <section aria-labelledby="reviews-title" className={`${CONTAINER} pt-10 pb-10 md:pt-16 md:pb-16 border-t border-border/40`}>
          <h2 id="reviews-title" className={`${CARD_TITLE} mb-6 md:mb-8`}>
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
        <section aria-labelledby="bg-title" className={`${CONTAINER} pt-10 pb-10 md:pt-16 md:pb-16 border-t border-border/40`}>
          <h2 id="bg-title" className={`${CARD_TITLE} mb-4`}>
            Background
          </h2>
          <p className="max-w-[640px] text-base md:text-[17px] leading-[1.7] text-foreground">
            I started in marketing and was CMO twice before moving into product. I co-founded SmartMum AI, which was
            later acquired.
          </p>
        </section>

        {/* Writing: the homepage articles block */}
        <section aria-labelledby="writing-title" className={`${CONTAINER} pt-10 pb-14 md:pt-16 md:pb-20 border-t border-border/40`}>
          <p className={`${EYEBROW_CAPS} mb-2`}>Writing</p>
          <h2 id="writing-title" className="font-serif text-2xl md:text-3xl leading-[1.1] tracking-tight text-foreground mb-2">
            Deep dives on AI, trust &amp; product
          </h2>
          <p className="text-sm text-muted-foreground mb-8 md:mb-10">100,000+ reads</p>
          <ul className="grid gap-4 md:gap-8 md:grid-cols-3">
            {ARTICLES.map((a) => (
              <li key={a.link}>
                <a
                  href={a.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block h-full p-6 md:p-8 rounded-xl relative overflow-hidden group bg-[#f5f3f1] ${FOCUS}`}
                >
                  <span
                    aria-hidden="true"
                    className={`absolute inset-0 bg-gradient-to-br ${a.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-700`}
                  />
                  <span className="relative z-10 block">
                    <span className="block font-serif text-[20px] md:text-[22px] tracking-[-0.02em] leading-[1.2] group-hover:text-white transition-colors duration-500 mb-3 md:mb-4">
                      {a.title}
                      <span className="inline-block ml-1.5 align-middle text-muted-foreground group-hover:text-white">
                        <ArrowUpRight />
                      </span>
                    </span>
                    <span className="block text-muted-foreground leading-relaxed group-hover:text-white/90 transition-colors duration-500">
                      {a.description}
                    </span>
                    <span className="sr-only"> (opens in a new tab)</span>
                  </span>
                </a>
              </li>
            ))}
          </ul>
          <a href={LINKS.substack} target="_blank" rel="noopener noreferrer" className={`${PILL_GLASS} mt-8`}>
            Read more<span className="sr-only"> articles on Substack (opens in a new tab)</span>
            <Arrow />
          </a>
        </section>
      </main>

      {/* Contact: closes on the same dot field as the homepage footer */}
      <footer id="contact" className="relative overflow-hidden border-t border-border/40 py-14 md:py-24 scroll-mt-20">
        <HeroGrid mask="linear-gradient(to bottom, transparent 0, #000 35%, #000 100%)" quietPad={30} includeMedia />
        <div className={`${CONTAINER} relative`}>
          <div data-grid-quiet className="max-w-[720px]">
            <h2 className="font-serif text-[1.75rem] md:text-[2rem] leading-[1.15] tracking-[-0.02em] text-balance">
              Building something with AI? Let&apos;s talk.
            </h2>
            {AVAILABILITY && <p className="mt-4 max-w-[540px] text-[17px] leading-relaxed text-muted-foreground">{AVAILABILITY}</p>}
            <a href={MAILTO} className={`${ARROW_LINK} mt-5`}>
              Say hello
              <ArrowUpRight />
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
              <li>London, UK</li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  )
}
