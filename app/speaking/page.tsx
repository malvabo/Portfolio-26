import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

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
          <div className="space-y-10">
            <div>
              <h1 className="font-serif text-2xl md:text-3xl leading-[1.1] tracking-tight text-foreground mb-6">
                My contribution to the community
              </h1>
              <p className="text-[17px] text-muted-foreground max-w-3xl">
                Public speaking, podcast appearances, and interviews
              </p>
            </div>

            <section>
              <div className="space-y-3">
                <div className="py-3">
                  <h3 className="text-[17px] font-medium text-foreground mb-1">{talks[0].title}</h3>
                  {talks[0].subtitle && <p className="text-base leading-relaxed text-muted-foreground mt-1">{talks[0].subtitle}</p>}
                </div>
                {talks.slice(1).map((talk, index) => (
                  <div key={index + 1} className="py-3">
                    <h3 className="text-[17px] font-medium text-foreground mb-1">{talk.title}</h3>
                    {talk.subtitle && <p className="text-base leading-relaxed text-muted-foreground mt-1">{talk.subtitle}</p>}
                  </div>
                ))}
                <p className="text-muted-foreground italic pt-2">… and more to be added soon!</p>
              </div>
            </section>

            <section className="mt-16">
              <div className="mb-6">
                <h2 className="font-serif text-2xl md:text-3xl leading-[1.1] tracking-tight text-foreground">
                  Interviews
                </h2>
              </div>

              <div className="space-y-0">
                {interviews.map((interview, index) => (
                  <div key={index} className="py-5">
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
                <h2 className="font-serif text-2xl md:text-3xl leading-[1.1] tracking-tight text-foreground">
                  My podcast appearances
                </h2>
              </div>

              <div className="space-y-0">
                {podcasts.map((podcast, index) => (
                  <div key={index} className="py-5">
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
                <p className="text-muted-foreground italic pt-2">… and more to be added soon!</p>
              </div>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
