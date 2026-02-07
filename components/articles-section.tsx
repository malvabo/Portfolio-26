import { ArrowUpRight } from "lucide-react"

export function ArticlesSection() {
  const articles = [
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

  return (
    <section className="py-16 md:py-20 container mx-auto px-8 lg:px-12 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-2 mb-2">
          <span className="uppercase text-[13px] text-muted-foreground/70 font-mono tracking-wide">Know more</span>
        </div>

        <h2 className="font-serif text-2xl md:text-3xl leading-[1.1] tracking-tight text-foreground mb-6">
          Deep dives on AI, trust & product
        </h2>

        <div className="grid gap-8 md:grid-cols-3">
          {articles.map((article, index) => (
            <a
              key={index}
              href={article.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block p-8 rounded-xl relative overflow-hidden group transition-all duration-700 bg-[#f5f3f1]"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${article.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-700`}
              />

              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.12'/%3E%3C/svg%3E")`,
                }}
              />

              <div className="relative z-10">
                <h3 className="font-serif text-[22px] tracking-[-0.02em] leading-[1.2] group-hover:text-white transition-colors duration-500 mb-2">
                  {article.title}
                  <ArrowUpRight className="inline-block w-3.5 h-3.5 ml-1.5 mb-0.5 text-muted-foreground group-hover:text-white transition-colors duration-500" />
                </h3>
                <p className="text-muted-foreground leading-relaxed group-hover:text-white/90 transition-colors duration-500">
                  {article.description}
                </p>
              </div>
            </a>
          ))}
        </div>

        <div className="mt-8">
          <a
            href="https://healthmattersandme.substack.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium rounded-full bg-white/40 backdrop-blur-md border border-gray-300/50 hover:bg-white/60 hover:border-gray-400/60 transition-all duration-300 shadow-sm hover:shadow-md"
          >
            Read more
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
