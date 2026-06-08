import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

const facts = [
  {
    number: "01",
    title: "Solo traveler to ~100 countries",
    body: "I traveled to 100 (or so) countries solo.",
  },
  {
    number: "02",
    title: "Marathon runner (soon ultra-marathon)",
    body: "I am a marathon (soon to be ultra-marathon) runner.",
  },
  {
    number: "03",
    title: "Zero fear of public speaking",
    body: "I have no fear of public speaking.",
  },
  {
    number: "04",
    title: "Rock climber with a very specific fear",
    body: "First time I saw a high wall in my bouldering gym, I fell in love. Next time I hired an instructor to get training to get a permit to climb these. I am not afraid of heights, but I am very much afraid of letting go of the wall and going 3–4 floors down hanging on one rope.",
  },
  {
    number: "05",
    title: "Apricots over strawberries, always",
    body: "I can eat a couple of kgs of good, sweet apricots, and I am not much impressed by strawberries.",
  },
  {
    number: "06",
    title: "Moved countries 5 times, lived in 3",
    body: "I lived in 3 countries but moved countries 5 times. London, I love you so much, I keep coming back!",
  },
  {
    number: "07",
    title: "Fell into design through healthcare",
    body: "I switched to design because I fell in love with healthcare products, and I wanted to create something to make people live \"happier and healthier\". I worked on all sorts of products in this space, from working on innovative AI products for CVS to launching premium addiction treatment centers in the US. My healthcare startup got acquired. Now I am looking forward to innovating in other spaces.",
  },
  {
    number: "08",
    title: "If not design, theology",
    body: "If not design, I would study and research religions. I love theology and can spend days diving into the stories of the past.",
  },
  {
    number: "09",
    title: "History nerd, Ancient Egypt edition",
    body: "I am a history nerd with special interest in Ancient Egypt.",
  },
  {
    number: "10",
    title: "Poet and writer since age 10",
    body: "I have been writing poetry and prose since I was 10. The only talent that was with me since I remember myself.",
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
            10 fun facts about me.
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
        </div>

      </main>
      <Footer />
    </div>
  )
}
