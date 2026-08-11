import Link from "next/link"
import Image from "next/image"

const library = {
  title: "Behavior Design Library",
  description:
    "A library of behavior design patterns I'm building — the psychology behind trust, motivation, and repeat use, applied to AI products.",
  link: "https://www.habitkit.club/",
}

export function BehaviorLibrarySection() {
  return (
    <section className="container mx-auto px-8 lg:px-12 pt-2 pb-12 md:pb-16">
      <div className="max-w-7xl mx-auto">
        <div
          className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-[#1e1b4b] via-[#312e81] to-[#475569] p-5 md:p-6"
          aria-label="Behavior Design Library"
        >
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-indigo-900/30 via-transparent to-transparent pointer-events-none" />
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 md:items-center">
            <div>
              <span className="inline-block uppercase text-[10px] font-medium tracking-widest text-white/90 bg-white/10 backdrop-blur-sm rounded-md px-2.5 py-1 mb-3">
                My Project
              </span>
              <h3 className="font-serif text-lg md:text-xl font-normal tracking-[-0.02em] leading-[1.2] text-white mb-1.5">
                {library.title}
              </h3>
              <p className="text-base leading-relaxed text-white/90 max-w-xl mb-4">
                {library.description}
              </p>
              <Link
                href={library.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg border border-white/20 text-white hover:bg-white/10 hover:border-white/30 transition-all duration-300"
              >
                Explore the library
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
            <div className="relative w-full rounded-lg overflow-hidden shadow-lg ring-1 ring-white/10 bg-white/5 backdrop-blur-sm">
              <Image
                src="/images/habitkit-preview.jpg"
                alt="Behavior Design Library — Build AI products with human psychology in mind"
                width={1600}
                height={920}
                className="w-full h-auto object-contain"
                sizes="(min-width: 768px) 50vw, 100vw"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
