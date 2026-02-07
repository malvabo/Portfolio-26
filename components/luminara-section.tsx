import Image from "next/image"

export function LuminaraSection() {
  const images = [
    {
      src: "/images/luminara-1.png",
      alt: "Luminara app interface",
    },
    {
      src: "/images/luminara-2.png",
      alt: "Luminara interface detail",
    },
    {
      src: "/images/luminara-3.png",
      alt: "Luminara mobile interface",
    },
  ]

  return (
    <section className="container mx-auto px-8 lg:px-12 py-8 md:py-12">
      <div className="border-t border-gray-300 mb-10" />

      <h2 className="text-2xl md:text-3xl leading-[1.1] font-serif mb-10 tracking-tight">
        Luminara: One experience for clients and clinicians
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 mb-10">
        <div>
          <h3 className="text-xs font-normal mb-3 uppercase tracking-wide text-muted-foreground opacity-80">About</h3>
          <p className="text-base leading-relaxed text-foreground">
            Mental health platforms often feel cold and clinical. I led the design for a dual-sided ecosystem: a &quot;Sanctuary&quot; for patients to feel safe and an efficient &quot;Command Center&quot; for providers to manage their practice. The goal was to reduce the &quot;administrative burnout&quot; for doctors so they could focus on what matters: care.
          </p>
        </div>

        <div>
          <h3 className="text-xs font-normal mb-3 uppercase tracking-wide text-muted-foreground opacity-80">
            Results
          </h3>
          <div className="space-y-4">
            <div>
              <div className="text-xl font-medium text-foreground mb-0.5">2 platforms</div>
              <div className="text-sm text-muted-foreground opacity-80">Client & provider portals</div>
            </div>
            <div>
              <div className="text-xl font-medium text-foreground mb-0.5">Unified</div>
              <div className="text-sm text-muted-foreground opacity-80">Clinical workflows integrated</div>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-xs font-normal mb-3 uppercase tracking-wide text-muted-foreground opacity-80">Role</h3>
          <div className="text-base leading-relaxed text-foreground space-y-0.5">
            <p>Lead Product Designer</p>
            <p>July 2024 - Jan 2025</p>
            <p>Remote</p>
            <div className="flex flex-wrap gap-1.5 mt-1">
              {["Web", "iOS", "Android"].map((platform) => (
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

      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 lg:gap-12">
        {images.map((image, idx) => (
          <div key={idx} className="relative aspect-[4/3] overflow-hidden rounded-lg bg-gray-50 border border-gray-200">
            <Image src={image.src || "/placeholder.svg"} alt={image.alt} fill className="object-cover" />
          </div>
        ))}
      </div>
    </section>
  )
}
