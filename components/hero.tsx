const impactTldr = [
  { label: "Growth", text: "Spearheaded the PandaDoc extension design, reducing document initiation time by 40%." },
  { label: "Scale", text: "Built a multi-state research operation for BodySpec, leading to a 30% reduction in abandonment." },
  { label: "Activation", text: "Corrected a 40% user drop-off for TempStars, driving a 25% YoY increase in shifts." },
  { label: "Funding", text: "Provided the UX foundation for ventures securing over $8.6M in Series A funding." },
]

export function Hero() {
  return (
    <section className="pt-32 pb-20 lg:pt-40 lg:pb-24 container mx-auto px-8 lg:px-12 relative">
      <div className="absolute top-16 right-12 w-3 h-3 rounded-full bg-accent/30" />

      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-[1.2fr_1fr] gap-12 lg:gap-16 items-start">
          <div>
            <p className="font-serif text-base md:text-lg text-muted-foreground font-normal tracking-[-0.02em] mb-2">
              Hi, I am Maria,
            </p>
            <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-normal tracking-[-0.02em] leading-[1.15] text-foreground">
              <span className="block">Product UX Designer</span>
              <span className="block">at Amazon</span>
            </h1>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground font-normal max-w-xl">
              I bring 8 years of design craft and 12 years of tech industry experience to building high-trust products for 100M+ users.
            </p>
          </div>

          <div className="pt-2">
            <ul className="space-y-0">
              {impactTldr.map((item) => (
                <li
                  key={item.label}
                  className="py-4 border-b border-border/50 last:border-0"
                >
                  <span className="text-[15px] font-semibold text-foreground">{item.label}. </span>
                  <span className="text-[15px] leading-relaxed text-muted-foreground">
                    {item.text}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
