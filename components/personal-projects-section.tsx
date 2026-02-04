import { ArrowUpRight } from "lucide-react"

export function PersonalProjectsSection() {
  const projects = [
    {
      label: "Design newsletter",
      title: "Tech Matters & Mary newsletter",
      link: "#",
      gradient: "from-[#5d4a7a] via-[#7d6a9a] to-[#9d8aba]",
    },
    {
      label: "Design mentorship",
      title: "ADPList mentorship, 900+ min",
      link: "#",
      gradient: "from-[#2d5a6d] via-[#4d7a8d] to-[#6d9aad]",
    },
    {
      label: "Apple Podcasts, 2020-2021",
      title: "Health Tech Matters podcast (26 eps)",
      link: "#",
      gradient: "from-[#3a4a7a] via-[#5a6a9a] to-[#7a8aba]",
    },
    {
      label: "2021-2023",
      title: "Unsplash, 1M views",
      link: "#",
      gradient: "from-[#1a5d5d] via-[#3a7d7d] to-[#5a9d9d]",
    },
  ]

  return (
    <section className="py-16 md:py-20 container mx-auto px-8 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-2 mb-2">
          <span className="uppercase text-[13px] text-muted-foreground/70 font-mono tracking-wide">After work</span>
        </div>

        <h2 className="font-serif text-2xl md:text-3xl leading-[1.1] tracking-tight text-foreground mb-6">
          Beyond the day job
        </h2>

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project, index) => (
            <a
              key={index}
              href={project.link}
              className="block p-8 rounded-xl relative overflow-hidden group transition-all duration-700 bg-[#f5f3f1]"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-700`}
              />

              <div className="relative z-10">
                <p className="text-[13px] text-muted-foreground/70 mb-3 uppercase tracking-wide group-hover:text-white/80 transition-colors duration-500">
                  {project.label}
                </p>
                <div className="flex items-center gap-2">
                  <h3 className="font-serif text-[22px] tracking-[-0.02em] leading-[1.2] group-hover:text-white transition-colors duration-500">
                    {project.title}
                  </h3>
                  <ArrowUpRight className="w-5 h-5 shrink-0 text-muted-foreground group-hover:text-white transition-colors duration-500" />
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
