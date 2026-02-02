export function ResultsSection() {
  const stats = [
    {
      number: "100M+",
      description: "In funding secured due to my product design",
    },
    {
      number: "40M+",
      description: "Visits to my clients' websites",
    },
    {
      number: "20+",
      description: "Innovative projects I worked on",
    },
  ]

  return (
    <section className="py-16 md:py-20 bg-[#F5F3F0] relative overflow-hidden">
      <div className="absolute top-20 left-10 w-2 h-2 rounded-full bg-accent/10" />
      <div className="absolute bottom-32 right-16 w-2 h-2 rounded-full bg-accent/10" />

      <div className="container mx-auto px-6 lg:px-12 relative">
        <h2 className="font-serif text-3xl md:text-4xl font-normal mb-2 tracking-[-0.02em] leading-[1.1]">
          Results that speak for themselves
        </h2>

        <p className="text-[15px] text-muted-foreground mb-12 leading-relaxed max-w-2xl">
          I partner with ambitious teams to deliver measurable results through strategic design. From early-stage
          startups to established companies, my work drives meaningful business outcomes.
        </p>

        <div className="grid gap-6 md:grid-cols-3">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="p-8 rounded-xl bg-background border border-border/50 transition-all duration-300 hover:border-border hover:shadow-sm"
            >
              <div className="font-serif text-4xl md:text-5xl mb-3 tracking-tight text-foreground">{stat.number}</div>
              <p className="text-[15px] leading-relaxed text-muted-foreground">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
