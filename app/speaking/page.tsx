import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function SpeakingPage() {
  const talks = [
    {
      title: "How to web conference",
      subtitle: "AI Design and Healthcare: Lessons in Changing Human Behavior",
      link: "https://www.howtoweb.co/",
    },
    {
      title: "DDX conference",
      subtitle: "How does Product Research & UX Strategy change in an accelerated world of innovation?",
      link: "https://www.ddxconference.com/dubai-agenda",
    },
    {
      title: "DDX conference",
      subtitle: "The New Face of Healthcare: Behavior, AI, and Gamification",
      link: "https://www.ddxconference.com/dubai-agenda",
    },
    {
      title: "Spectrum Tokyo",
      subtitle: "AI and Healthcare: How to Shape Human Behavior",
      link: "https://fest.spectrumtokyo.com/2026/session/maria-borysova/",
    },
    {
      title: "UXDX",
      subtitle: "Psychology, AI & Games: Reshaping Healthcare Design",
      link: "https://www.youtube.com/watch?v=GPMzs47V6YQ",
    },
    {
      title: "PD Ladies & BrainStation",
      subtitle: "Building for Women's Health",
      link: "https://luma.com/9twxu4xb",
    },
    {
      title: "LEAP Tech Conference",
      subtitle: "Designing for behavior change",
      link: "https://onegiantleap.com/leap-stages-2025",
    },
    {
      title: "UXcel webinar",
      subtitle: "Designing for Healthtech: Behavior, AI & Building Trust",
      link: "https://www.youtube.com/watch?v=JdMzQRB4d68",
    },
    {
      title: "Online course AI design patterns",
      subtitle:
        "2 days of workshops: Practical Patterns for Better User-AI Interactions & Designing Human-Centered AI Outputs",
      link: "https://luma.com/UxcelMaryWorkshop1",
    },
    {
      title: "Pixel Perfect webinar",
      subtitle: "Addictive UX & Behavioural Design in Health-Tech",
      link: "https://pixelperfect.world/learning-hub/",
    },
    {
      title: "DIBI Edinburgh",
    },
    {
      title: "Future Product Days",
    },
  ]

  const interviews = [
    {
      title: "euractiv",
      subtitle: "AI and Complex Clinical Decisions",
      link: "https://www.euractiv.ro/social/how-to-web-2025-mary-borysova-amazon-ai-incepe-sa-joace-un-rol-important-in-luarea-deciziilor-clinice-complexe-75098",
    },
    {
      title: "HackerNoon Writers Spotlight",
      subtitle: "Meet the Women in Tech: Mary Borysova and Designing for Health",
      link: "https://hackernoon.com/meet-the-women-in-tech-mary-borysova-and-designing-for-health",
    },
  ]

  const podcasts = [
    {
      title: "CTO Show",
      link: "https://www.youtube.com/watch?v=1OJ-elvLVI8",
    },
    {
      title: "That Will Never Work",
      link: "https://music.amazon.com/es-co/podcasts/b54d169c-5665-4b5f-b2a6-47ee320ea22b/episodes/1ad1d85c-df2a-42d6-9058-059fd9c228f8/that-will-nevr-work-podcast-s6-g27-mary-borysova-on-designing-products-users-love",
    },
  ]

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-24 pb-16 container mx-auto px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-12 lg:items-start">
          <div className="min-w-0">
            <div className="space-y-10">
              <section>
                <div className="space-y-3">
                <div className="py-3">
                  {talks[0].link ? (
                    <a
                      href={talks[0].link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group block"
                    >
                      <h3 className="text-[17px] font-medium text-foreground mb-1 group-hover:text-primary transition-colors inline-flex items-baseline gap-1.5">
                        {talks[0].title}
                        <svg className="inline-block w-3.5 h-3.5 mb-0.5 opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </h3>
                      {talks[0].subtitle && <p className="text-base leading-relaxed text-muted-foreground mt-1">{talks[0].subtitle}</p>}
                    </a>
                  ) : (
                    <>
                      <h3 className="text-[17px] font-medium text-foreground mb-1">{talks[0].title}</h3>
                      {talks[0].subtitle && <p className="text-base leading-relaxed text-muted-foreground mt-1">{talks[0].subtitle}</p>}
                    </>
                  )}
                </div>
                {talks.slice(1).map((talk, index) => (
                  <div key={index + 1} className="py-3">
                    {talk.link ? (
                      <a
                        href={talk.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group block"
                      >
                        <h3 className="text-[17px] font-medium text-foreground mb-1 group-hover:text-primary transition-colors inline-flex items-baseline gap-1.5">
                          {talk.title}
                          <svg className="inline-block w-3.5 h-3.5 mb-0.5 opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </h3>
                        {talk.subtitle && <p className="text-base leading-relaxed text-muted-foreground mt-1">{talk.subtitle}</p>}
                      </a>
                    ) : (
                      <>
                        <h3 className="text-[17px] font-medium text-foreground mb-1">{talk.title}</h3>
                        {talk.subtitle && <p className="text-base leading-relaxed text-muted-foreground mt-1">{talk.subtitle}</p>}
                      </>
                    )}
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

          <div className="mt-12 lg:mt-0 grid grid-cols-2 grid-rows-[1fr_1fr] gap-3 min-h-[360px] lg:min-h-[420px]">
            <div className="row-span-2 relative rounded-xl overflow-hidden bg-[#f1f1f1] border border-border/60 shadow-sm min-h-[280px] lg:min-h-0">
              <Image
                src="/images/speaking-2.jpg"
                alt="How to web conference"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 50vw, 400px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <p className="uppercase text-[11px] text-white/80 font-mono tracking-wider">How to web conference</p>
                <p className="uppercase text-[11px] text-white/90 font-mono tracking-wider mt-0.5">Main stage</p>
              </div>
            </div>
            <div className="relative rounded-xl overflow-hidden bg-[#f1f1f1] border border-border/60 shadow-sm min-h-[160px] lg:min-h-0">
              <Image
                src="/images/speaking-1.jpg"
                alt="Main stage"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 50vw, 200px"
              />
              <div className="absolute inset-0 bg-black/20" />
              <div className="absolute bottom-0 left-0 right-0 p-3">
                <p className="uppercase text-[11px] text-white/90 font-mono tracking-wider">Main stage</p>
              </div>
            </div>
            <div className="relative rounded-xl overflow-hidden bg-[#f1f1f1] border border-border/60 shadow-sm min-h-[160px] lg:min-h-0">
              <Image
                src="/images/speaking-event-3.png"
                alt="Speaking event"
                fill
                className="object-cover"
                style={{ objectPosition: "center center" }}
                sizes="(max-width: 1024px) 50vw, 200px"
              />
              <div className="absolute inset-0 bg-black/20" />
              <div className="absolute bottom-0 left-0 right-0 p-3">
                <p className="uppercase text-[11px] text-white/90 font-mono tracking-wider">Speaking event</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
