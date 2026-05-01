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
        .workflows-hover-image {
          opacity: 0;
          transform: translate(-50%, -50%) scale(0.9);
          transition: opacity 0.35s ease, transform 0.45s cubic-bezier(0.2, 0.8, 0.2, 1);
        }
        .workflows-wrap:hover .workflows-hover-image {
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
        .projects-hover-video {
          opacity: 0;
          transform: translate(-50%, -50%) scale(0.9);
          transition: opacity 0.35s ease, transform 0.45s cubic-bezier(0.2, 0.8, 0.2, 1);
        }
        .projects-tag:hover .projects-hover-video {
          opacity: 1;
          transform: translate(-50%, -50%) scale(1);
        }
      `}</style>
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col">
          <h1 className="hero-reveal hero-reveal-1 font-sans text-lg md:text-xl font-normal leading-[1.4] tracking-normal text-muted-foreground w-full max-w-7xl relative z-30">
            Hi, I am Mary, Product UX Designer<br />
            currently shaping tech at Amazon
          </h1>
          <div className="w-full max-w-[700px] mt-[20px] relative z-30">
            <p className="hero-reveal hero-reveal-2 font-sans text-[30px] font-normal leading-[44px] tracking-[-0.02em] text-foreground relative z-10">
              Designing AI products for complex{" "}
              <span className="workflows-wrap relative inline-block cursor-pointer z-50 hover:z-[60]">
                <span
                  aria-hidden
                  className="workflows-hover-image absolute left-1/2 top-1/2 w-[clamp(288px,37vw,576px)] aspect-[16/9] rounded-md overflow-hidden shadow-2xl ring-1 ring-black/10 pointer-events-none"
                >
                  <Image
                    src="/amz_image.jpeg"
                    alt=""
                    fill
                    sizes="720px"
                    className="object-cover"
                  />
                </span>
                <span className="relative rounded-[3px] px-[0.3em] bg-[#E8E3DD] text-[#6B5D4F] whitespace-nowrap">
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
                  workflows
                </span>
              </span>
              . Shipped 0→1 products, won{" "}
              <a
                href="/images/Sq1.mp4"
                target="_blank"
                rel="noopener noreferrer"
                className="awards-tag relative inline-block cursor-pointer no-underline z-50 hover:z-[60]"
              >
                <span
                  aria-hidden
                  className="awards-hover-video absolute left-1/2 top-1/2 w-[clamp(280px,36vw,540px)] aspect-[16/10.8] rounded-md overflow-hidden shadow-2xl ring-1 ring-black/10 pointer-events-none"
                >
                  <Image
                    src="/images/squirll-collage-2.jpg"
                    alt=""
                    fill
                    sizes="540px"
                    className="object-cover object-[center_25%]"
                  />
                </span>
                <span className="relative rounded-[3px] px-[0.3em] bg-[#E8E3DD] text-[#6B5D4F] whitespace-nowrap">
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
                  awards
                </span>
              </a>
              ,<br />
              worked with MAANG, venture studios and unicorns.<br />
              By night{" "}
              <a
                href="/nodes4.mp4"
                target="_blank"
                rel="noopener noreferrer"
                className="projects-tag relative inline-block cursor-pointer no-underline z-50 hover:z-[60]"
              >
                <span
                  aria-hidden
                  className="projects-hover-video absolute left-1/2 top-1/2 w-[clamp(280px,36vw,540px)] aspect-video rounded-md overflow-hidden shadow-2xl ring-1 ring-black/10 pointer-events-none bg-black"
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
                <span className="relative rounded-[3px] px-[0.3em] bg-[#E8E3DD] text-[#6B5D4F] whitespace-nowrap">
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
                  vibe-coding
                </span>
              </a>
              {" "}side projects and writing talks on the future of AI products.
            </p>
          </div>

          <div className="hero-reveal hero-reveal-3 w-full max-w-[700px] mt-[20px] relative z-30 flex flex-wrap gap-x-6 gap-y-1">
            {[
              { label: "Amazon: Redesigning a document system for 50,000+ sellers", href: "/projects/amazon" },
              { label: "PAA: Scaling Clinical Efficiency through AI-Driven Workflows", href: "/projects/paa" },
              { label: "Squirll: Defining the Design Language and Brand Expression", href: "/projects/squirll" },
              { label: "TempStars: Building marketplace liquidity for 25K+ dentists", href: "/projects/tempstars" },
              { label: "Deep dives on AI, trust & product", href: "/side-projects" },
            ].map(({ label, href }) => (
              <a
                key={label}
                href={href}
                className="font-sans text-lg font-normal text-muted-foreground hover:text-foreground transition-colors no-underline"
              >
                {label}
              </a>
            ))}
            <div className="w-full" />
            <a
              href="/speaking"
              className="font-sans text-lg font-normal text-muted-foreground hover:text-foreground transition-colors no-underline"
            >
              AI & Behavioral Design Workshops
            </a>
          </div>

          <div className="hero-reveal hero-reveal-4 flex flex-col lg:flex-row lg:gap-6 lg:items-stretch w-full mt-12">
            <div className="lg:flex-1 min-w-0 relative aspect-[4/3] lg:aspect-[16/11] rounded-xl overflow-hidden bg-[#f1f1f1] border border-border/60 shadow-sm order-2 lg:order-1">
              <Image src="/images/speaking-event-stage.png" alt="Speaking event" fill className="object-cover" style={{ objectPosition: "center center" }} sizes="(max-width: 1024px) 100vw, 60vw" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-0 left-0 right-0 p-4 pointer-events-none">
                <p className="uppercase text-[11px] text-white/90 font-mono tracking-wider">DDX, United Arab Emirates</p>
              </div>
            </div>
            <div className="w-full max-w-[360px] lg:max-w-[440px] lg:flex-shrink-0 relative aspect-[4/3] lg:aspect-auto rounded-xl overflow-hidden bg-[#f1f1f1] border border-border/60 shadow-sm order-1 lg:order-2 lg:ml-auto">
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
