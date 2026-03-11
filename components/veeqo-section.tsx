import Image from "next/image"
import Link from "next/link"

const VEEQO_IMAGES = [
  { src: "/images/vq1.png", alt: "Veeqo document library redesign" },
  { src: "/images/vq2.png", alt: "HTML editor with AI assist and live preview" },
  { src: "/images/vq3.png", alt: "Failure states across generation and batch errors" },
]

export function VeeqoSection() {
  return (
    <section className="container mx-auto px-8 lg:px-12 pt-2 md:pt-3 pb-8 md:pb-12">
      <span className="inline-block mb-3 px-2.5 py-0.5 text-[11px] font-mono uppercase tracking-widest rounded-md bg-[#E8E3DD] text-[#6B5D4F]">Amazon</span>
      <h2 className="text-2xl md:text-3xl leading-[1.1] font-serif mb-8 tracking-tight">
        Amazon: Replacing a critical document system for 50,000+ sellers
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 mb-10">
        <div>
          <h3 className="text-xs font-normal mb-3 uppercase tracking-wide text-muted-foreground opacity-80">About</h3>
          <p className="text-base leading-relaxed text-foreground">
            Veeqo&apos;s entire document infrastructure - invoices, customs forms, packing slips - ran on a third-party PDF tool we had no control over. I led the design of a full replacement: an HTML-based engine with AI-assisted editing, a rebuilt document library, and a human migration path for the enterprise accounts most at risk of churning.
          </p>
          <Link
            href="/projects/veeqo"
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
          <p className="text-sm text-muted-foreground opacity-80">Results under NDA</p>
        </div>

        <div>
          <h3 className="text-xs font-normal mb-3 uppercase tracking-wide text-muted-foreground opacity-80">Role</h3>
          <div className="text-base leading-relaxed text-foreground space-y-0.5">
            <p>Product Designer</p>
            <div className="flex flex-wrap gap-1.5 mt-2">
              {["Web", "Document Automation"].map((platform) => (
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
          {VEEQO_IMAGES.map((image, idx) => (
            <div key={idx} className="relative aspect-[4/3] overflow-hidden rounded-lg bg-gray-50 border border-gray-200">
              <Image src={image.src} alt={image.alt} fill className="object-cover blur-[5px]" />
            </div>
          ))}
        </div>
      </div>
      <div className="mt-8 border-t border-gray-300 mb-3" />
    </section>
  )
}
