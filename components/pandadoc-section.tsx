import Image from "next/image"
import Link from "next/link"

export function PandaDocSection() {
  const images = [
    { src: "/images/9n0bkgdgqgsjajsrutuf1g4wvwc.avif", alt: "PandaDoc UI screens collection" },
    { src: "/images/0hlicytyhrdxhzcakhkt2wfoly.avif", alt: "PandaDoc laptop interface" },
    { src: "/images/pandadoc-workspace.png", alt: "PandaDoc Sales workspace with notifications" },
  ]

  return (
    <section className="container mx-auto px-8 lg:px-12 pt-2 md:pt-3 pb-8 md:pb-12">
      <h2 className="text-2xl md:text-3xl leading-[1.1] font-serif mb-8 tracking-tight">
        PandaDoc: Designing one flow from draft to signed for 50K+ business users
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 mb-10">
        <div>
          <h3 className="text-xs font-normal mb-3 uppercase tracking-wide text-muted-foreground opacity-80">About</h3>
          <p className="text-base leading-relaxed text-foreground">
            Sales teams lose hours jumping between their email and their documents. I led the design of a Chrome ecosystem that brings PandaDoc directly into the tools they already use. We cut out the &quot;app-switching tax,&quot; making it effortless to go from a draft to a signed contract.
          </p>
          <Link
            href="/projects/pandadoc"
            className="inline-flex items-center gap-2 mt-6 px-5 py-2.5 text-sm font-medium rounded-full bg-white/40 backdrop-blur-md border border-gray-300/50 hover:bg-white/60 hover:border-gray-400/60 transition-all duration-300 shadow-sm hover:shadow-md"
          >
            Read more
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>

        <div>
          <h3 className="text-xs font-normal mb-3 uppercase tracking-wide text-muted-foreground opacity-80">
            Results
          </h3>
          <div className="space-y-4">
            <div>
              <div className="text-xl font-medium text-foreground mb-0.5">50K+</div>
              <div className="text-sm text-muted-foreground opacity-80">Businesses reached</div>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-xs font-normal mb-3 uppercase tracking-wide text-muted-foreground opacity-80">Role</h3>
          <div className="text-base leading-relaxed text-foreground space-y-0.5">
            <p>Senior Product Designer</p>
            <p>Jan 2023 - Dec 2023</p>
            <div className="flex flex-wrap gap-1.5 mt-2">
              {["Web"].map((platform) => (
                <span
                  key={platform}
                  className="inline-block px-2 py-0.5 text-[13px] rounded-md bg-[#E8E3DD] text-[#6B5D4F]"
                >
                  {platform}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {images.map((image, idx) => (
            <div key={idx} className="relative aspect-[4/3] overflow-hidden rounded-lg bg-gray-50 border border-gray-200">
              <Image 
                src={image.src || "/placeholder.svg"} 
                alt={image.alt} 
                fill 
                className="object-cover"
                style={idx === 2 ? { transform: 'scale(1.2)', transformOrigin: 'center' } : undefined}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="mt-8 border-t border-gray-300 mb-3" />
    </section>
  )
}
