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
              <div className="mb-8">
                <span className="text-sm font-mono text-muted-foreground tracking-wider uppercase">
                  Public Speaking
                </span>
                <h2 className="font-serif text-3xl md:text-4xl mt-3">Offline and online talks</h2>
              </div>

              <div className="space-y-6">
                {talks.map((talk, index) => (
                  <div key={index} className="border-b border-border/40 pb-6 last:border-0">
                    <h3 className="text-lg font-medium mb-1">{talk.title}</h3>
                    {talk.subtitle && <p className="text-muted-foreground">{talk.subtitle}</p>}
                  </div>
                ))}
                <p className="text-muted-foreground italic pt-4">… and more to be added soon!</p>
              </div>
            </section>

            <section>
              <div className="mb-8">
                <span className="text-sm font-mono text-muted-foreground tracking-wider uppercase">
                  Public appearances
                </span>
                <h2 className="font-serif text-3xl md:text-4xl mt-3">Interviews</h2>
              </div>

              <div className="space-y-6">
                {interviews.map((interview, index) => (
                  <div key={index} className="border-b border-border/40 pb-6 last:border-0">
                    {interview.link ? (
                      <a
                        href={interview.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-lg font-medium mb-1 hover:opacity-70 transition-opacity inline-block"
                      >
                        {interview.title}
                      </a>
                    ) : (
                      <h3 className="text-lg font-medium mb-1">{interview.title}</h3>
                    )}
                    {interview.subtitle && <p className="text-muted-foreground">{interview.subtitle}</p>}
                  </div>
                ))}
              </div>
            </section>

            <section>
              <div className="mb-8">
                <span className="text-sm font-mono text-muted-foreground tracking-wider uppercase">
                  Audio Content
                </span>
                <h2 className="font-serif text-3xl md:text-4xl mt-3">My podcast appearances</h2>
              </div>

              <div className="space-y-6">
                {podcasts.map((podcast, index) => (
                  <div key={index} className="border-b border-border/40 pb-6 last:border-0">
                    <h3 className="text-lg font-medium">{podcast.title}</h3>
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
