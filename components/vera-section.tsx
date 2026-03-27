import Image from "next/image"

const VERA_IMAGES = [
  { src: "/images/aivq1.png", alt: "AI shipping rate suggestion with contextual reasoning" },
  { src: "/images/aivq3.png", alt: "AI-generated actions: shipping savings insights and inventory recommendations" },
  { src: "/images/aivq2.png", alt: "Ask Vera: conversational analytics with sales performance chart" },
]

export function VeraSection() {
  return (
    <section className="container mx-auto px-8 lg:px-12 pt-2 md:pt-3 pb-8 md:pb-12">
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
          <p className="text-sm text-muted-foreground opacity-80">Results under NDA</p>
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

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {VERA_IMAGES.map((image, idx) => (
            <div key={idx} className="relative aspect-[4/3] overflow-hidden rounded-lg bg-gray-50 border border-gray-200">
              <Image src={image.src} alt={image.alt} fill className="object-cover" />
            </div>
          ))}
        </div>
      </div>
      <div className="mt-8 border-t border-gray-300 mb-3" />
    </section>
  )
}
