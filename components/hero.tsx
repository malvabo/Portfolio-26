import Image from "next/image"

export function Hero() {
  return (
    <section className="pt-32 pb-5 lg:pt-40 lg:pb-5 container mx-auto px-8 lg:px-12 max-w-7xl relative">
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
      <div className="flex flex-col">
          <div className="hero-reveal hero-reveal-1 mt-[32px] mb-[12px]">
            <div className="relative w-[72px] h-[72px] rounded-full overflow-hidden border border-border/40">
              <Image src="/images/speaking-2.jpg" alt="Mary Borysova speaking on stage" fill className="object-cover object-[center_5%] scale-150" sizes="72px" />
            </div>
          </div>
          <h1 className="hero-reveal hero-reveal-1 font-sans text-lg md:text-xl font-normal leading-[1.4] tracking-normal text-muted-foreground w-full max-w-7xl relative z-30 mb-[8px]">
            Mary, Product Designer at Amazon
          </h1>
          <div className="w-full max-w-[700px] relative z-40">
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
workflows <svg className="inline-block w-[0.55em] h-[0.55em] mb-[0.15em]" viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M2 8 L8 2 M4 2 L8 2 L8 6"/></svg>
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
awards <svg className="inline-block w-[0.55em] h-[0.55em] mb-[0.15em]" viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M2 8 L8 2 M4 2 L8 2 L8 6"/></svg>
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
vibe-coding <svg className="inline-block w-[0.55em] h-[0.55em] mb-[0.15em]" viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M2 8 L8 2 M4 2 L8 2 L8 6"/></svg>
                </span>
              </a>
              {" "}side projects and writing talks on the future of AI products.
            </p>
          </div>

        </div>
    </section>
  )
}
