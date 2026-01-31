import Image from "next/image"

export function AuthoticsSection() {
  const images = [
    {
      src: "/images/authotics-1.png",
      alt: "Authotics 3D scanning interface",
    },
    {
      src: "/images/authotics-2.png",
      alt: "Authotics consultation experience",
    },
    {
      src: "/images/authotics-3.png",
      alt: "Authotics product recommendations",
    },
  ]

  return (
    <section className="container mx-auto px-8 lg:px-12 py-8 md:py-12">
      <div className="border-t border-gray-300 mb-10" />

      <h2 className="text-2xl md:text-3xl leading-tight font-serif mb-8">
        Authotics - 3D Scanning That Cut Fitting Time from Weeks to Minutes
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 mb-10">
        <div>
          <h3 className="text-xs font-normal mb-3 uppercase tracking-wide text-muted-foreground opacity-80">About</h3>
          <p className="text-base leading-relaxed text-foreground">
            Designed a Computer Vision interface with real-time feedback loops for high-quality 3D foot scans. Focused
            on intuitive spatial UX patterns and AI-generated visualization for medical accuracy. Reduced the orthotic
            fitting process from weeks to minutes.
          </p>
        </div>

        <div>
          <h3 className="text-xs font-normal mb-3 uppercase tracking-wide text-muted-foreground opacity-80">
            Results
          </h3>
          <div className="space-y-4">
            <div>
              <div className="text-xl font-medium text-foreground mb-0.5">Weeks → Minutes</div>
              <div className="text-sm text-muted-foreground opacity-80">Orthotic fitting time</div>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-xs font-normal mb-3 uppercase tracking-wide text-muted-foreground opacity-80">Role</h3>
          <div className="text-base leading-relaxed text-foreground space-y-0.5">
            <p>Lead Product Designer</p>
            <p>Aug 2024 - Jan 2025</p>
            <p>London</p>
            <p>Web, iOS</p>
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
