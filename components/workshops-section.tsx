import Link from "next/link"
import Image from "next/image"

const workshops = [
  {
    title: "Guiding User Intentions & AI Workflows",
    description:
      "Moving beyond simple chat interfaces. Learning to help users express goals with clarity using intention mapping and predictable, trust-building flows.",
    bullets: [
      "Contextual prompts & intention mapping",
      "Reducing friction in agentic interfaces",
      "Stepwise interaction patterns for complex tasks",
    ],
    link: "https://luma.com/UxcelMaryWorkshop1",
  },
  {
    title: "Designing Interactive & Adaptive AI Features",
    description:
      "Discovering how to make AI outputs feel responsive and human-centered through adaptive interfaces and personalization.",
    bullets: [
      "Designing for agency and trust",
      "Visual affordances for AI responses",
      "Optimizing interaction flows for engagement",
    ],
    link: "https://luma.com/UxcelMaryWorkshop2",
  },
]

const featuredArticle = {
  title: "The Framework for AI Trust",
  description:
    "Read my deep dive into how we can design AI systems that users actually feel safe using.",
  link: "https://uxdesign.cc/i-trust-you-not-or-how-to-build-trust-with-ai-products-1fc934f131bf",
}

export function WorkshopsSection() {
  return (
    <section className="pt-8 md:pt-10 pb-12 md:pb-16 container mx-auto px-8 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-2 mb-2">
          <span className="uppercase text-[13px] text-muted-foreground/70 font-mono tracking-wide">
            {"{05}"} WORKSHOPS & EDUCATION
          </span>
        </div>

        <h2 className="font-serif text-2xl md:text-3xl leading-[1.1] tracking-tight text-foreground mb-6">
          AI & Behavioral Design Workshops
        </h2>
        <p className="text-base leading-relaxed text-muted-foreground max-w-[750px] mb-10">
          I&apos;ve designed platforms that have automated complex workflows, scaled to 500K+ users, and helped companies secure dozens of millions in funding. My approach combines behavioral psychology, data-informed design, and a deep understanding of emerging technologies.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-10">
          {workshops.map((workshop, index) => (
            <Link
              key={index}
              href={workshop.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#F5F3F0] rounded-2xl p-6 block hover:bg-[#ede9e4] transition-colors group"
            >
              <h3 className="font-serif text-[22px] tracking-[-0.02em] leading-[1.15] text-foreground mb-3 group-hover:text-primary transition-colors">
                {workshop.title}
                <svg className="inline-block w-3.5 h-3.5 ml-1.5 mb-0.5 opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </h3>
              <p className="text-base leading-relaxed text-foreground mb-4">
                {workshop.description}
              </p>
              <ul className="space-y-1.5">
                {workshop.bullets.map((bullet, i) => (
                  <li key={i} className="flex items-start gap-3 text-base leading-relaxed text-foreground">
                    <span className="flex-shrink-0 mt-1 text-violet-600/90" aria-hidden>
                      <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </Link>
          ))}
        </div>

        <div
          className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-[#1e1b4b] via-[#312e81] to-[#475569] p-5 md:p-6"
          aria-label="Featured article"
        >
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-indigo-900/30 via-transparent to-transparent pointer-events-none" />
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 md:items-center">
            <div>
              <span className="inline-block uppercase text-[10px] font-medium tracking-widest text-white/90 bg-white/10 backdrop-blur-sm rounded-md px-2.5 py-1 mb-3">
                Featured Article
              </span>
              <h3 className="font-serif text-lg md:text-xl font-normal tracking-[-0.02em] leading-[1.2] text-white mb-1.5">
                {featuredArticle.title}
              </h3>
              <p className="text-base leading-relaxed text-white/90 max-w-xl mb-4">
                {featuredArticle.description}
              </p>
              <Link
                href={featuredArticle.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg border border-white/20 text-white hover:bg-white/10 hover:border-white/30 transition-all duration-300"
              >
                Read Article
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
            <div className="relative w-full rounded-lg overflow-hidden shadow-lg ring-1 ring-white/10 bg-white/5 backdrop-blur-sm min-h-[120px]">
              <Image
                src="/images/framework-ai-trust-sticker.png"
                alt="Key claims and evidence framework – visual structure, evidence strength, source mapping"
                width={1200}
                height={675}
                className="w-full h-auto object-contain object-left-top"
                sizes="(min-width: 768px) 50vw, 100vw"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
