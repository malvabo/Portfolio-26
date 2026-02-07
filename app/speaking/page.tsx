import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function SpeakingPage() {
  const talks = [
    {
      title: "How to web conference",
      subtitle: '"AI Design and Healthcare: Lessons in Changing Human Behavior"',
    },
    {
      title: "Product Design event about healthtech product design",
      subtitle: "Demystifying Women's Health",
    },
    {
      title: "UXcell webinar",
      subtitle: '"Designing for Healthtech: Behavior, AI & Building Trust"',
    },
    {
      title: 'Online course "AI design patterns"',
      subtitle:
        "2 days of workshops: Practical Patterns for Better User-AI Interactions & Designing Human-Centered AI Outputs",
    },
    {
      title: "Pixel Perfect webinar",
      subtitle: '"Addictive UX & Behavioural Design in Health-Tech"',
    },
    {
      title: "DIBI Edinburgh '26",
    },
    {
      title: "Future Product Days '26 conference",
    },
  ]

  const interviews = [
    {
      title: "euractiv",
      subtitle: "AI and Complex Clinical Decisions",
      link: "https://www.euractiv.ro/social/how-to-web-2025-mary-borysova-amazon-ai-incepe-sa-joace-un-rol-important-in-luarea-deciziilor-clinice-complexe-75098",
    },
  ]

  const podcasts = [
    {
      title: "CTO Show",
      link: "https://www.youtube.com/watch?v=1OJ-elvLVI8",
    },
    {
      title: "That Will Never Work",
    },
  ]

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-24 pb-16 container mx-auto px-8 lg:px-12">
        <div className="max-w-5xl">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="text-[17px]">Back to home</span>
          </Link>

          <div className="space-y-20">
            <div>
              <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl mb-6 text-balance leading-[1.2]">
                My contribution to the community
              </h1>
              <p className="text-[17px] text-muted-foreground max-w-3xl">
                Public speaking, podcast appearances, and interviews
              </p>
            </div>

            <section>
              <div className="mb-6">
                <span className="uppercase text-[13px] text-muted-foreground/70 font-mono tracking-wide mb-2 block">
                  Public Speaking
                </span>
                <h2 className="font-serif text-2xl md:text-3xl leading-[1.1] tracking-tight text-foreground mb-6">
                  Offline and online talks
                </h2>
              </div>

              <div className="space-y-6">
                {talks.map((talk, index) => (
                  <div key={index} className="border-b border-gray-300/30 py-5 first:pt-0 last:border-b-0">
                    <h3 className="text-[17px] font-medium text-foreground mb-1">{talk.title}</h3>
                    {talk.subtitle && <p className="text-base leading-relaxed text-muted-foreground mt-1">{talk.subtitle}</p>}
                  </div>
                ))}
                <p className="text-muted-foreground italic pt-4">… and more to be added soon!</p>
              </div>
            </section>

            <section>
              <div className="mb-6">
                <span className="uppercase text-[13px] text-muted-foreground/70 font-mono tracking-wide mb-2 block">
                  Public appearances
                </span>
                <h2 className="font-serif text-2xl md:text-3xl leading-[1.1] tracking-tight text-foreground mb-6">
                  Interviews
                </h2>
              </div>

              <div className="space-y-0">
                {interviews.map((interview, index) => (
                  <div key={index} className="border-b border-gray-300/30 py-5 first:pt-0 last:border-b-0">
                    {interview.link ? (
                      <a
                        href={interview.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group block"
                      >
                        <p className="font-medium text-foreground text-[17px] group-hover:text-primary transition-colors mb-1 inline-flex items-baseline gap-1.5">
                          {interview.title}
                          <svg className="inline-block w-3.5 h-3.5 mb-0.5 opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </p>
                        {interview.subtitle && <p className="text-base leading-relaxed text-muted-foreground mt-1">{interview.subtitle}</p>}
                      </a>
                    ) : (
                      <>
                        <h3 className="font-medium text-foreground text-[17px] mb-1">{interview.title}</h3>
                        {interview.subtitle && <p className="text-base leading-relaxed text-muted-foreground mt-1">{interview.subtitle}</p>}
                      </>
                    )}
                  </div>
                ))}
              </div>
            </section>

            <section>
              <div className="mb-6">
                <span className="uppercase text-[13px] text-muted-foreground/70 font-mono tracking-wide mb-2 block">
                  Audio Content
                </span>
                <h2 className="font-serif text-2xl md:text-3xl leading-[1.1] tracking-tight text-foreground mb-6">
                  My podcast appearances
                </h2>
              </div>

              <div className="space-y-0">
                {podcasts.map((podcast, index) => (
                  <div key={index} className="border-b border-gray-300/30 py-5 first:pt-0 last:border-b-0">
                    {podcast.link ? (
                      <a
                        href={podcast.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group block"
                      >
                        <p className="font-medium text-foreground text-[17px] group-hover:text-primary transition-colors inline-flex items-baseline gap-1.5">
                          {podcast.title}
                          <svg className="inline-block w-3.5 h-3.5 mb-0.5 opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </p>
                      </a>
                    ) : (
                      <h3 className="font-medium text-foreground text-[17px]">{podcast.title}</h3>
                    )}
                  </div>
                ))}
                <p className="text-muted-foreground italic pt-4">… and more to be added soon!</p>
              </div>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
