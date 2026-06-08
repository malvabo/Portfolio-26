import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

const facts = [
  {
    number: "01",
    title: "Solo traveler to ~100 countries",
    body: "I've explored roughly 100 countries on my own — no tour groups, no travel companions. Just me, a backpack, and a stubborn curiosity about how the world works beyond the guidebook.",
  },
  {
    number: "02",
    title: "Marathon runner (soon ultra-marathon)",
    body: "Running long distances is where I reset. I've completed marathons and I'm working my way toward ultra-marathon territory — the kind of race where the challenge stops being physical and becomes entirely mental.",
  },
  {
    number: "03",
    title: "Zero fear of public speaking",
    body: "Somehow the thing most people dread is the thing I genuinely enjoy. Give me a stage, a room full of people, and a topic I care about — I'm in my element.",
  },
  {
    number: "04",
    title: "Rock climber with a very specific fear",
    body: "The first time I saw a high wall at my bouldering gym, I was hooked instantly. I hired an instructor, got certified, and started climbing. Here's the twist: I'm not afraid of heights at all — I'm afraid of letting go of the wall and hanging three or four floors down on a single rope. I keep climbing anyway.",
  },
]

export default function HumanPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="max-w-7xl mx-auto px-8 lg:px-12 pt-24 pb-24">

        <div className="mb-16 max-w-[680px]">
          <p className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground mb-4">
            The human side
          </p>
          <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl tracking-[-0.02em] leading-[1.15] mb-6">
            Who am I?
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            10 fun facts about me — the kind that don&apos;t belong on a résumé but probably tell you more about how I think than anything on one.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border/40 border border-border/40 rounded-2xl overflow-hidden">
          {facts.map((fact) => (
            <div
              key={fact.number}
              className="bg-background p-8 lg:p-10 group hover:bg-[#fafaf8] transition-colors duration-200"
            >
              <p className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground/60 mb-4">
                {fact.number}
              </p>
              <h2 className="font-serif text-xl md:text-2xl tracking-[-0.01em] leading-[1.25] mb-4 text-foreground">
                {fact.title}
              </h2>
              <p className="text-[15px] leading-relaxed text-muted-foreground">
                {fact.body}
              </p>
            </div>
          ))}

          {/* Placeholder slots for remaining facts */}
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={`placeholder-${i}`}
              className="bg-background p-8 lg:p-10 flex items-center justify-center min-h-[180px]"
            >
              <p className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground/30">
                0{facts.length + i + 1} — coming soon
              </p>
            </div>
          ))}
        </div>

      </main>
      <Footer />
    </div>
  )
}
