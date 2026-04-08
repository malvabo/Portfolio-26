import Image from "next/image"

const VERA_IMAGES = [
  { src: "/images/aivq1.png", alt: "AI shipping rate suggestion with contextual reasoning" },
  { src: "/images/aivq3.png", alt: "AI-generated actions: shipping savings insights and inventory recommendations" },
  { src: "/images/aivq2.png", alt: "Ask Vera: conversational analytics with sales performance chart" },
]

export function VeraSection() {
  return (
    <section className="container mx-auto px-8 lg:px-12 pt-8 pb-8 md:pb-12">
      <div className="max-w-7xl mx-auto">
        <div className="flex gap-2 mb-3">
          <span className="inline-block px-2.5 py-0.5 text-[11px] font-mono uppercase tracking-widest rounded-md bg-[#E8E3DD] text-[#6B5D4F]">Big tech</span>
        </div>
        <h2 className="text-2xl md:text-3xl leading-[1.1] font-serif mb-8 tracking-tight">
          Amazon: Introducing AI insights for sellers
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 mb-10">
          <div>
            <h3 className="text-xs font-normal mb-3 uppercase tracking-wide text-muted-foreground opacity-80">About</h3>
            <p className="text-base leading-relaxed text-foreground">
              Design of the solution that continuously monitors seller operations to drive improvements in efficiency, performance, and growth. Helping sellers to spot hidden revenue losses from inventory and orchestrate fulfillment to optimise shipping outcomes.
            </p>
          </div>

          <div>
            <h3 className="text-xs font-normal mb-3 uppercase tracking-wide text-muted-foreground opacity-80">
              Results
            </h3>
            <p className="text-sm text-muted-foreground opacity-80">Guest area</p>
          </div>

          <div>
            <h3 className="text-xs font-normal mb-3 uppercase tracking-wide text-muted-foreground opacity-80">Role</h3>
            <div className="text-base leading-relaxed text-foreground space-y-0.5">
              <p>Product Designer</p>
              <div className="flex flex-wrap gap-1.5 mt-2">
                {["Web", "AI / ML"].map((platform) => (
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {VERA_IMAGES.map((image, idx) => (
            <div key={idx} className="relative aspect-[4/3] overflow-hidden rounded-lg bg-gray-50 border border-gray-200">
              <Image src={image.src} alt={image.alt} fill className="object-cover" />
              <div className="absolute bottom-3 left-3 z-10 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/80 backdrop-blur-sm border border-gray-200/80 shadow-sm">
                <svg className="w-3 h-3 text-gray-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
                <span className="text-[11px] font-mono text-gray-500 tracking-wide">Guest area · Available during the interview</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
