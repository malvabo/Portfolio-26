import Image from "next/image"
import Link from "next/link"

export function SpeakingIndustrySection() {
  const images = [
    {
      src: "/images/speaking-1.jpg",
      alt: "Speaking at industry conference",
    },
    {
      src: "/images/speaking-2.jpg",
      alt: "Presenting at design event",
    },
    {
      src: "https://framerusercontent.com/images/1OEM3USoZNobtLSElzYLzfWhhc.png?width=2020&height=1138",
      alt: "Q&A session at conference",
    },
  ]

  return (
    <section className="container mx-auto px-8 lg:px-12 py-12 md:py-16 flex flex-col">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-8 lg:mb-12">
        {images.map((image, idx) => (
          <div key={idx} className="relative aspect-[4/3] overflow-hidden rounded-lg bg-gray-50 border border-gray-200">
            <Image src={image.src || "/placeholder.svg"} alt={image.alt} fill className="object-cover" />
          </div>
        ))}
      </div>

      <div className="flex flex-col lg:grid lg:grid-cols-[2fr_1fr] lg:gap-8">
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 mb-2 text-muted-foreground text-sm">
            <span className="uppercase text-[13px] text-muted-foreground/70 font-mono tracking-wide">{"{01}"}</span>
            <span className="uppercase text-[13px] text-muted-foreground/70 font-mono tracking-wide">
              PUBLIC SPEAKING
            </span>
          </div>

          <h2 className="text-2xl md:text-3xl leading-[1.1] font-serif mb-2 tracking-tight">Talks, panels & the future of design</h2>

          <p className="text-base leading-relaxed mb-6 text-muted-foreground">
            I speak at conferences and events on product design, AI ethics, and the future of digital products.
          </p>

          <div className="mt-6">
            <Link
              href="/speaking"
              className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium rounded-full bg-white/40 backdrop-blur-md border border-gray-300/50 hover:bg-white/60 hover:border-gray-400/60 transition-all duration-300 shadow-sm hover:shadow-md"
            >
              View all talks
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>

        <div className="mt-8 lg:mt-0">
          <div className="relative aspect-[4/3] overflow-hidden rounded-lg bg-gray-50 border border-gray-200">
            <Image
              src="/images/speaking-3.jpg"
              alt="Panel discussion at design conference"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
