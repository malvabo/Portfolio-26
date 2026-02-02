export function Hero() {
  const workHistory = [
    { year: "2025", company: "Amazon", role: "Product Designer" },
    { year: "2024", company: "Post Acute Analytics", role: "Lead Product Designer" },
    { year: "2023", company: "PandaDoc", role: "Senior Product Designer" },
    { year: "2022-2023", company: "BodySpec", role: "Senior Product Designer" },
    { year: "2020-2022", company: "Cold Start", role: "Product Designer" },
  ]

  return (
    <section className="pt-32 pb-20 lg:pt-40 lg:pb-24 container mx-auto px-8 lg:px-12 relative">
      <div className="absolute top-16 right-12 w-3 h-3 rounded-full bg-accent/30" />

      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-[1.2fr_1fr] gap-12 lg:gap-16 items-start">
          <div>
            <h1 className="font-serif text-2xl md:text-3xl lg:text-4xl font-normal tracking-[-0.02em] leading-[1.15] text-balance">
              <span className="block">Hi, I am Maria,</span>
              <span className="block">Product UX Designer at Amazon,</span>
              <span className="block">Speaker about AI design and healthtech</span>
            </h1>
          </div>

          <div className="space-y-3 pt-2">
            {workHistory.map((item, index) => (
              <div
                key={index}
                className="grid grid-cols-[90px_1.2fr_1fr] gap-4 items-baseline pb-3 border-b border-border/40 last:border-0"
              >
                <span className="text-muted-foreground font-mono text-[13px] tracking-tight">{item.year}</span>
                <span className="text-[15px] font-medium">{item.company}</span>
                <span className="text-muted-foreground text-[14px]">{item.role}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
