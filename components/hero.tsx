import Image from "next/image"
import { HeroGrid } from "@/components/hero-grid"

export function Hero() {
  return (
    <div className="relative">
    <HeroGrid />
    <section className="pt-24 pb-5 lg:pt-28 lg:pb-5 container mx-auto px-8 lg:px-12 max-w-7xl relative z-10">
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
      <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_360px] gap-10 lg:gap-16 items-center">
        <div className="flex flex-col">
          <div data-grid-quiet className="w-full max-w-[720px] relative z-40">
            <h1 className="hero-reveal hero-reveal-2 font-sans text-[30px] leading-[38px] sm:text-[44px] sm:leading-[52px] font-normal tracking-[-0.025em] text-foreground relative z-10">
              Hi, I am Mary. I enjoy designing products for complex workflows.
            </h1>
            <p className="hero-reveal hero-reveal-3 mt-6 font-sans text-[18px] leading-[30px] sm:text-[20px] sm:leading-[32px] font-normal tracking-[-0.01em] text-muted-foreground relative z-10">
              Shipped 0→1 products, won{" "}
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
              , worked with Amazon, venture studios and unicorns. By night{" "}
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

        <figure className="hero-reveal hero-reveal-4 hidden lg:block relative aspect-[4/5] rounded-xl overflow-hidden bg-[#f1f1f1] border border-border/60 shadow-sm">
          <Image
            src="/images/speaking-2.jpg"
            alt="Mary on stage at How to Web, presenting as Product Designer at Amazon"
            fill
            priority
            className="object-cover object-[center_35%]"
            sizes="360px"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
          <figcaption className="absolute bottom-0 left-0 right-0 p-4 uppercase text-[11px] text-white/85 font-mono tracking-wider">
            Speaking &middot; EU
          </figcaption>
        </figure>
      </div>
    </section>
    </div>
  )
}
