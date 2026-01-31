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

      <h2 className="text-2xl md:text-3xl leading-tight font-serif mb-8">
        Luminara - Dual Mental Health Platform for Seamless Care
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 mb-10">
        <div>
          <h3 className="text-xs font-normal mb-3 uppercase tracking-wide text-muted-foreground opacity-80">About</h3>
          <p className="text-base leading-relaxed text-foreground">
            Created a dual-sided mental health platform with a calming Client Sanctuary for patients and a
            high-efficiency portal for providers. Used behavioral principles to simplify scheduling and integrate
            wellness tools into clinical workflows, balancing premium care with practice management.
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
            <p>Web, iOS, Android</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        {images.map((image, idx) => (
          <div key={idx} className="relative aspect-[4/3] overflow-hidden rounded-lg bg-gray-50 border border-gray-200">
            <Image src={image.src || "/placeholder.svg"} alt={image.alt} fill className="object-cover" />
          </div>
        ))}
      </div>
    </section>
  )
}
