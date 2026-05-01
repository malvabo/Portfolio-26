import Image from "next/image"

export function Hero() {
  return (
    <section className="pt-32 pb-5 lg:pt-40 lg:pb-5 container mx-auto px-8 lg:px-12 relative">
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
        .hero-headline > span { transition: opacity 0.3s ease; }
        .hero-headline:has(.tech-wrap:hover) > span:not(:has(.tech-wrap)) { opacity: 0.2; }
        .tech-hover-image {
          opacity: 0;
          transform: translate(-50%, -50%) scale(0.9);
          transition: opacity 0.35s ease, transform 0.45s cubic-bezier(0.2, 0.8, 0.2, 1);
        }
        .tech-wrap:hover .tech-hover-image {
          opacity: 1;
          transform: translate(-50%, -50%) scale(1);
        }
        .awards-hover-video {
          opacity: 0;
          transform: translate(-50%, -50%) scale(0.9);
          transition: opacity 0.35s ease, transform 0.45s cubic-bezier(0.2, 0.8, 0.2, 1);
        }
        .awards-tag:hover .awards-hover-video {
          opacity: 1;
          transform: translate(-50%, -50%) scale(1);
        }
        .graph-hover-video {
          opacity: 0;
          transform: translate(-50%, -50%) scale(0.9);
          transition: opacity 0.35s ease, transform 0.45s cubic-bezier(0.2, 0.8, 0.2, 1);
        }
        .graph-tag:hover .graph-hover-video {
          opacity: 1;
          transform: translate(-50%, -50%) scale(1);
        }
      `}</style>
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col gap-8">
          <h1 className="hero-headline hero-reveal hero-reveal-1 font-sans text-base md:text-lg font-normal leading-[1.4] tracking-normal text-muted-foreground w-full max-w-7xl relative z-30">
            {(["Hi,","I","am","Mary,","Product","UX","Designer","currently","shaping","tech","at","Amazon."] as string[]).map((word, i) => (
              <span key={i}>
                {i === 9 ? (
                  <span className="tech-wrap relative inline-block align-bottom pb-[0.12em] cursor-pointer z-50 hover:z-[60]">
                    <span
                      aria-hidden
                      className="tech-hover-image absolute left-1/2 top-1/2 w-[clamp(360px,46vw,720px)] aspect-[16/9] rounded-md overflow-hidden shadow-2xl ring-1 ring-black/10 pointer-events-none"
                    >
                      <Image
                        src="/amz_image.jpeg"
                        alt=""
                        fill
                        sizes="720px"
                        className="object-cover"
                      />
                    </span>
                    <span className="relative border border-foreground rounded-[3px] px-[0.3em] bg-background whitespace-nowrap">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        aria-hidden
                        className="inline-block w-[0.715em] h-[0.715em] mr-[0.15em] -translate-y-[0.05em]"
                      >
                        <path
                          d="M7 17L17 7M17 7H8M17 7V16"
                          stroke="currentColor"
                          strokeWidth="1.92"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      {word}
                    </span>
                  </span>
                ) : (
                  <span className="inline-block overflow-hidden align-bottom pb-[0.12em]">
                    <span className="inline-block">{word}</span>
                  </span>
                )}
                {i < 11 && i !== 6 ? " " : ""}
                {i === 6 && <br />}
              </span>
            ))}
          </h1>
          <div className="w-full max-w-[520px] mt-4 relative z-30">
            <p className="hero-reveal hero-reveal-2 font-serif text-[32px] font-normal leading-[40px] tracking-[-0.02em] text-foreground relative z-10">
              I design AI-powered products for complex, high-stakes workflows at scale. Shipped 0→1 products, won{" "}
              <a
                href="/images/Sq1.mp4"
                target="_blank"
                rel="noopener noreferrer"
                className="awards-tag relative inline-block cursor-pointer no-underline z-50 hover:z-[60]"
              >
                <span
                  aria-hidden
                  className="awards-hover-video absolute left-1/2 top-1/2 w-[clamp(280px,36vw,540px)] aspect-[16/9] rounded-md overflow-hidden shadow-2xl ring-1 ring-black/10 pointer-events-none"
                >
                  <Image
                    src="/images/squirll-collage-2.jpg"
                    alt=""
                    fill
                    sizes="540px"
                    className="object-cover"
                  />
                </span>
                <span className="relative border border-current rounded-[3px] px-[0.3em] bg-background whitespace-nowrap">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    aria-hidden
                    className="inline-block w-[0.715em] h-[0.715em] mr-[0.15em] -translate-y-[0.05em]"
                  >
                    <path
                      d="M7 17L17 7M17 7H8M17 7V16"
                      stroke="currentColor"
                      strokeWidth="1.92"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  design awards
                </span>
              </a>
              , worked with venture studios and unicorns. By night: vibe-coding{" "}
              <a
                href="/nodes4.mp4"
                target="_blank"
                rel="noopener noreferrer"
                className="graph-tag relative inline-block cursor-pointer no-underline z-50 hover:z-[60]"
              >
                <span
                  aria-hidden
                  className="graph-hover-video absolute left-1/2 top-1/2 w-[clamp(280px,36vw,540px)] aspect-video rounded-md overflow-hidden shadow-2xl ring-1 ring-black/10 pointer-events-none bg-black"
                >
                  <video
                    src="/nodes4.mp4"
                    muted
                    loop
                    playsInline
                    autoPlay
                    className="w-full h-full object-cover"
                  />
                </span>
                <span className="relative border border-current rounded-[3px] px-[0.3em] bg-background whitespace-nowrap">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    aria-hidden
                    className="inline-block w-[0.715em] h-[0.715em] mr-[0.15em] -translate-y-[0.05em]"
                  >
                    <path
                      d="M7 17L17 7M17 7H8M17 7V16"
                      stroke="currentColor"
                      strokeWidth="1.92"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  graph150
                </span>
              </a>
              .
            </p>
            <div className="hero-reveal hero-reveal-3 flex justify-start mt-4 mb-2">
              <svg width="26" height="62" viewBox="0 0 24 28" fill="none" className="text-[#0F5CA2]" aria-hidden>
                <path d="M12 2v20M6 16l6 6 6-6" stroke="currentColor" strokeWidth="1.92" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </div>

          <div className="hero-reveal hero-reveal-4 flex flex-col lg:flex-row lg:gap-6 lg:items-end w-full -mt-12">
            <div className="lg:flex-1 min-w-0 relative aspect-[4/3] lg:aspect-[16/11] rounded-xl overflow-hidden bg-[#f1f1f1] border border-border/60 shadow-sm order-2 lg:order-1">
              <Image src="/images/speaking-event-stage.png" alt="Speaking event" fill className="object-cover" style={{ objectPosition: "center center" }} sizes="(max-width: 1024px) 100vw, 60vw" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-0 left-0 right-0 p-4 pointer-events-none">
                <p className="uppercase text-[11px] text-white/90 font-mono tracking-wider">DDX, United Arab Emirates</p>
              </div>
            </div>
            <div className="w-full max-w-[360px] lg:max-w-[440px] lg:flex-shrink-0 relative aspect-[4/3] lg:aspect-[16/14.3] rounded-xl overflow-hidden bg-[#f1f1f1] border border-border/60 shadow-sm order-1 lg:order-2 lg:ml-auto">
              <Image src="/images/speaking-2.jpg" alt="How to web conference" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 448px" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-0 left-0 right-0 p-4 pointer-events-none">
                <p className="uppercase text-[11px] text-white/80 font-mono tracking-wider">How to web, EU</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
