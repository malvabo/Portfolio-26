import { HeroGrid } from "@/components/hero-grid"
import { AiOrb } from "@/components/ai-orb"

export function Hero() {
  return (
    <div className="relative min-h-[calc(100svh-96px)] flex flex-col justify-center">
    <HeroGrid />
    <section className="pt-20 pb-8 lg:pt-24 lg:pb-10 w-full container mx-auto px-8 lg:px-12 max-w-7xl relative z-10">
      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(10px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .hero-reveal {
          opacity: 0;
          animation: fadeInUp 0.4s ease-in forwards;
          backface-visibility: hidden;
        }
        .hero-reveal-1 { animation-delay: 0.05s; }
        .hero-reveal-2 { animation-delay: 0.15s; }
        .hero-reveal-3 { animation-delay: 0.22s; }
        .hero-reveal-4 { animation-delay: 0.3s; }
      `}</style>
      <div className="grid grid-cols-1">
        <div className="flex flex-col">
          <div data-grid-quiet className="w-full max-w-[720px] relative z-40">
            <img src="/images/mary-face.webp" alt="Mary Borysova" width={62} height={62} className="hero-reveal hero-reveal-1 mb-5 h-[62px] w-[62px] rounded-xl object-cover relative z-10" />
            <h1 className="hero-reveal hero-reveal-2 font-serif text-[1.75rem] md:text-[2rem] leading-[1.15] font-normal tracking-[-0.02em] text-foreground text-balance relative z-10">
              I&apos;m Mary, a product designer who makes complex AI<AiOrb /> workflows feel simple.
            </h1>
            <p className="hero-reveal hero-reveal-3 mt-6 max-w-[540px] text-pretty font-sans text-[17px] leading-relaxed font-normal text-muted-foreground relative z-10">
              I lead products from first sketch to launch for Amazon, venture studios and unicorns. I also write and speak about how AI is changing the way products get designed.
            </p>

            {/* Key numbers from the case studies, in a row under the intro */}
            <dl className="hero-reveal hero-reveal-4 mt-10 grid grid-cols-1 sm:grid-cols-3 gap-x-8 gap-y-6 relative z-10">
              {[
                { value: "$14M/year", label: "Operational costs saved through workflow redesign" },
                { value: "100K+", label: "Business users across enterprise products I’ve designed" },
                { value: "3", label: "International Design Awards\n1 Gold and 2 Silver" },
              ].map((s) => (
                <div key={s.value}>
                  <dt className="font-serif text-[1.75rem] md:text-[2rem] tracking-[-0.02em] leading-none text-[#3D3D3D] mb-2">
                    {s.value}
                  </dt>
                  <dd className="text-sm text-muted-foreground whitespace-pre-line">{s.label}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

      </div>
    </section>
    </div>
  )
}
