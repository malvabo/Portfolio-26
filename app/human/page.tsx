import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { HumanShaderOrb } from "@/components/human-shader-orb"
import { ScrollToTop } from "@/components/scroll-to-top"

function QuoteBlock({ children, attribution }: { children: React.ReactNode; attribution: string }) {
  return (
    <figure className="my-10 max-w-[750px] rounded-xl bg-[#F5F3F0] p-8">
      <blockquote className="font-serif text-[1.55rem] leading-[1.35] tracking-[-0.02em] text-foreground">
        {children}
      </blockquote>
      <figcaption className="mt-5 font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
        {attribution}
      </figcaption>
    </figure>
  )
}

export default function HumanPage() {
  return (
    <div className="min-h-screen bg-background">
      <ScrollToTop />
      <Header />

      <main className="max-w-7xl mx-auto pt-24 pb-20 lg:pb-24">
        <div className="flex w-full items-start">
          <div className="hidden lg:block w-56 shrink-0 px-8 lg:px-12" aria-hidden />
          <aside
            className="hidden lg:block w-56 px-8 lg:px-12 fixed top-24 left-8 lg:left-[max(0px,calc((100vw-80rem)/2))]"
            aria-label="Human page navigation"
          >
            <HumanShaderOrb />
          </aside>

          <article className="flex-1 px-8 lg:px-12">
            <header className="mb-5 max-w-[750px]">
              <h1 className="font-serif text-2xl md:text-3xl lg:text-4xl tracking-[-0.02em] leading-[1.2] mb-4">
                Who am I?
              </h1>
            </header>

            <div className="space-y-5 text-[17px] leading-relaxed text-muted-foreground max-w-[750px]">
              <p>
                When I was a kid, I asked my parents to print the Tour d&apos;Eiffel photo for me, and I pinned it on the wall, dreaming that I would get a chance to see it one day in my life.
              </p>

              <p>
                The first time I left the country, I had a budget of one dollar a day, which was not sustainable in the EU. I learned to be frugal and make friends everywhere.
              </p>

              <p>
                Fast forward, I traveled to around 100 countries solo and I learned a bit about myself and the world. Waking up in a small village in the mountains in Oman during Ramadan to witness the morning prayers and grow appreciation for devotion and persistence. Hiking alone in Canada and singing loudly to scare off the bears and camping in Australia with snake anti-venom to face my fears of nature and build self-reliance. I learned that control is an illusion; I ended up staying safe and sound in dangerous places in Africa and the opposite in some of the safest cities in the EU.
              </p>

              <p>
                And yet I was made more by the people I met along the way than by the journey itself. People I had the privilege to work with and lead, people who mentored and keep mentoring me, people who light a candle for me during tough work conversations.
              </p>

              <p>
                My close people told me that I have the highest bias for action among everybody they knew. Probably, they are right.
              </p>
            </div>

            <div className="mt-5 space-y-5 text-[17px] leading-relaxed text-muted-foreground max-w-[750px]">
              <p>
                One thing I always want to know is: What can I do better?
              </p>
            </div>

            <QuoteBlock attribution="Bhagavad Gita, Verse 2.47">
              <p>
                &ldquo;You have a right to perform your prescribed duty, but you are not entitled to the fruits of action. Never consider yourself the cause of the results of your activities, and never be attached to not doing your duty.&rdquo;
              </p>
            </QuoteBlock>

            <div className="space-y-5 text-[17px] leading-relaxed text-muted-foreground max-w-[750px]">
              <p>
                I am motivated by personal challenges. I enjoyed building our ventures since 17, my last project was acquired. When leading people, I respect human potential and giving space to disrupt instead of spending energy on fitting the existing mold. I learned this by working with tiny 0-&gt;1 companies, unicorns and huge corporations like Amazon.
              </p>
            </div>

            <div className="mt-5 space-y-5 text-[17px] leading-relaxed text-muted-foreground max-w-[750px]">
              <p>
                I sometimes sit in front of my favorite mummy in the British Museum and lose myself in materials on why it&rsquo;s decorated this way. The effort and care people used to pour into seemingly simple artifacts back then is endlessly inspiring.
              </p>

              <p>
                Egyptians believed the afterlife (the &quot;Field of Reeds&quot;) was a lush paradise with flowing rivers that mirrored the Nile. Tombs and coffins were decorated with maps, spells, and scenes to help the deceased navigate these waters.
              </p>

              <p>
                Symbols and stories are fascinating.
              </p>

              <p>
                I adore theology and finding the ways stories have helped to shape human behavior for thousands of years and continue doing so now. Most of the people I love now are of different cultural backgrounds than I am, and I am mesmerized by how it&rsquo;s shaping me and how much I am waiting for Diwali and Ramadan these days, along with Easter.
              </p>
            </div>
            <div className="mt-5 space-y-5 text-[17px] leading-relaxed text-muted-foreground max-w-[750px]">
              <p>
                I am a marathon runner, soon-to-be ultra-marathon runner. 10+ years of regular running and pushing myself to do better taught me to stay resilient and patient, and hopeful, and most of all - to enjoy the struggle. But if you enjoy it, maybe it&apos;s not a struggle, really?
              </p>
            </div>
          </article>
        </div>
      </main>
      <Footer />
    </div>
  )
}
