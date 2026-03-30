export function Hero() {
  return (
    <section className="pt-32 pb-10 lg:pt-40 lg:pb-12 container mx-auto px-8 lg:px-12 relative overflow-hidden">
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
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col gap-8">
          <h1 className="hero-reveal hero-reveal-1 font-serif text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-normal leading-[1.15] tracking-[-0.02em] text-foreground w-full max-w-7xl">
            {(["Hi,","I","am","Mary,","Product","UX","Designer","currently","shaping","tech","at","Amazon."] as string[]).map((word, i) => (
              <span key={i}>
                <span className="inline-block overflow-hidden align-bottom pb-[0.12em]">
                  <span className="inline-block">{word}</span>
                  {i < 11 && i !== 6 ? "\u00A0" : ""}
                </span>
                {i === 6 && <br />}
              </span>
            ))}
          </h1>
          <div className="w-full max-w-[360px] lg:max-w-[440px] lg:ml-auto mt-8">
            <p className="hero-reveal hero-reveal-2 font-sans text-[17px] leading-relaxed text-muted-foreground">
              Focused on behavioral psychology, AI products, and measurable growth. Contributed to unicorn startups, worked with venture building studio, shipped products to millions of users.
            </p>
            <div className="hero-reveal hero-reveal-3 flex justify-start mt-4 mb-2">
              <svg width="40" height="48" viewBox="0 0 24 28" fill="none" className="text-[#f97316]" aria-hidden>
                <path d="M12 2v20M6 16l6 6 6-6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
