import Image from "next/image"
import Link from "next/link"

const engagements = [
  {
    name: "How to web conference",
    description: "AI Design and Healthcare: Lessons in Changing Human Behavior",
    link: "https://www.howtoweb.co/",
  },
  {
    name: "DDX conference",
    description: "How does Product Research & UX Strategy change in an accelerated world of innovation?",
    link: "https://www.ddxconference.com/dubai-agenda",
  },
  {
    name: "UXcel webinar",
    description: "Designing for Healthtech: Behavior, AI & Building Trust",
    link: "https://www.youtube.com/watch?v=JdMzQRB4d68",
  },
  {
    name: "Pixel Perfect webinar",
    description: "Addictive UX & Behavioural Design in Health-Tech",
    link: "https://pixelperfect.world/learning-hub/",
  },
  {
    name: "DDX conference",
    description: "The New Face of Healthcare: Behavior, AI, and Gamification",
    link: "https://www.ddxconference.com/dubai-agenda",
  },
]

export function SpeakingIndustrySection({ showViewAllLink = true }: { showViewAllLink?: boolean }) {
  return (
    <section className="container mx-auto px-8 lg:px-12 py-12 md:py-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] lg:gap-12 items-stretch">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="uppercase text-[13px] text-muted-foreground/70 font-mono tracking-wide">
                {"{01}"} PUBLIC SPEAKING
              </span>
            </div>
            <h2 className="font-serif text-2xl md:text-3xl leading-[1.1] tracking-tight text-foreground mb-6">
              Speaking & Mentorship
            </h2>
            <ul className="space-y-0">
              {engagements.map((item, idx) => (
                <li key={idx} className="border-b border-gray-300/30 py-5 first:pt-0 last:border-b-0">
                  {item.link ? (
                    <Link
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group block"
                    >
                      <p className="font-medium text-foreground text-[17px] group-hover:text-primary transition-colors">
                        {item.name}
                        <svg className="inline-block w-3.5 h-3.5 ml-1.5 mb-0.5 opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </p>
                      <p className="text-base leading-relaxed text-muted-foreground mt-1">{item.description}</p>
                    </Link>
                  ) : (
                    <>
                      <p className="font-medium text-foreground text-[17px]">{item.name}</p>
                      <p className="text-base leading-relaxed text-muted-foreground mt-1">{item.description}</p>
                    </>
                  )}
                </li>
              ))}
            </ul>

            {showViewAllLink && (
              <div className="mt-6">
                <Link
                  href="/speaking"
                  className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium rounded-full bg-white/40 backdrop-blur-md border border-gray-300/50 hover:bg-white/60 hover:border-gray-400/60 transition-all duration-300 shadow-sm hover:shadow-md"
                >
                  View all talks
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            )}
          </div>

          <div className="mt-8 lg:mt-0 grid grid-cols-2 grid-rows-[1fr_1fr] gap-3 min-h-[280px] lg:min-h-[320px] h-full">
            <div className="row-span-2 relative rounded-xl overflow-hidden bg-[#f1f1f1] border border-border/60 shadow-sm min-h-[200px] lg:min-h-0">
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
            <div className="relative rounded-xl overflow-hidden bg-[#f1f1f1] border border-border/60 shadow-sm min-h-[120px] lg:min-h-0">
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
            <div className="relative rounded-xl overflow-hidden bg-[#f1f1f1] border border-border/60 shadow-sm min-h-[120px] lg:min-h-0">
              <Image
                src="/images/speaking-event-3.png"
                alt="Speaking event"
                fill
                className="object-cover"
                style={{ objectPosition: 'center center' }}
                sizes="(max-width: 1024px) 50vw, 200px"
              />
              <div className="absolute inset-0 bg-black/20" />
              <div className="absolute bottom-0 left-0 right-0 p-3">
                <p className="uppercase text-[11px] text-white/90 font-mono tracking-wider">Speaking event</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
