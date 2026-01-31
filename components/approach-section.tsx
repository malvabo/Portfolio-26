import { Target, Sparkles, Zap, Layout } from "lucide-react"

const approaches = [
  {
    icon: Target,
    title: "User-Centered Research",
    description:
      "Every project begins with understanding users deeply. I combine qualitative interviews with quantitative data to uncover real problems worth solving.",
  },
  {
    icon: Sparkles,
    title: "Strategic Product Thinking",
    description:
      "Great design serves business goals. I align design decisions with metrics that matter, ensuring every pixel contributes to product success.",
  },
  {
    icon: Zap,
    title: "Rapid Iteration",
    description:
      "Speed matters in startups. I prototype fast, test early, and iterate based on real feedback—not assumptions. This keeps teams moving forward with confidence.",
  },
  {
    icon: Layout,
    title: "Scalable Design Systems",
    description:
      "I build systems that grow with your product. From early foundations to enterprise scale, the right system maintains quality while empowering teams.",
  },
]

export function ApproachSection() {
  return (
    <section id="approach" className="py-16 md:py-20 bg-[#F5F3F0]">
      <div className="container mx-auto px-8 lg:px-12 max-w-7xl">
        <div className="max-w-3xl mb-16">
          <h2 className="font-serif text-3xl md:text-4xl leading-[1.1] text-balance mb-6 font-normal tracking-[-0.02em]">
            How I Approach Product Design
          </h2>
          <p className="text-[15px] text-muted-foreground leading-relaxed">
            Over ten years, I've developed a process that balances user empathy with business pragmatism. The result:
            products that users love and companies can scale.
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
                    <h3 className="text-[20px] font-medium mb-3 tracking-tight">{item.title}</h3>
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
