import { Target, Sparkles, Zap, Layout } from "lucide-react"

const approaches = [
  {
    icon: Target,
    title: "Research that finds the real problem",
    description:
      "Qualitative and quantitative research to uncover real problems worth solving.",
  },
  {
    icon: Sparkles,
    title: "Strategy that ties design to outcomes",
    description:
      "Design aligned with business goals and metrics that matter.",
  },
  {
    icon: Zap,
    title: "Ship fast, learn faster",
    description:
      "Prototype fast, test early, iterate on real feedback.",
  },
  {
    icon: Layout,
    title: "Systems that grow with you",
    description:
      "Systems that scale with your product and empower teams.",
  },
]

export function ApproachSection() {
  return (
    <section id="approach" className="py-16 md:py-20 bg-[#F5F3F0]">
      <div className="container mx-auto px-8 lg:px-12 max-w-7xl">
        <div className="max-w-3xl mb-16">
          <h2 className="font-serif text-3xl md:text-4xl leading-[1.1] text-balance mb-4 font-normal tracking-[-0.02em]">
            How I design products that stick
          </h2>
          <p className="text-[15px] text-muted-foreground leading-relaxed">
            A process that balances user empathy with business pragmatism–products people love that scale.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 lg:gap-x-16 lg:gap-y-12">
          {approaches.map((item, index) => {
            const Icon = item.icon
            return (
              <div key={index} className="group">
                <div className="flex items-start gap-5">
                  <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-full bg-background">
                    <Icon className="h-5 w-5 text-foreground" strokeWidth={1.5} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-[20px] font-medium mb-2 tracking-tight leading-tight">{item.title}</h3>
                    <p className="text-[15px] text-muted-foreground leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
