import Image from "next/image"
import Link from "next/link"

export function SquirllSection() {
  const images = [
    { src: "/images/iphone-mockup-2-20-282-29-202.jpg", alt: "Squirll receipt integration onboarding screen" },
    { src: "/images/iphone-2016-20pro.jpg", alt: "Squirll insights and tax refund notifications" },
    { src: "/images/squirll-image-3.jpg", alt: "Squirll AI chatbot interface" },
  ]

  return (
    <section className="container mx-auto px-8 lg:px-12 py-8 md:py-12">

      <h2 className="text-2xl md:text-3xl leading-[1.1] font-serif mb-10 tracking-tight">
        Squirll — 80% of budgeting on autopilot
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 mb-10">
        <div>
          <h3 className="text-xs font-normal mb-3 uppercase tracking-wide text-muted-foreground opacity-80">About</h3>
          <p className="text-base leading-relaxed text-foreground">
            I led the design of an AI-driven financial platform focused on reducing interaction cost. By architecting automated receipt-capture and feedback loops, I transformed manual expense tracking into a high-engagement, automated experience.
          </p>
          <Link
            href="/projects/squirll"
            className="inline-flex items-center gap-2 mt-6 px-5 py-2.5 text-sm font-medium rounded-full bg-white/40 backdrop-blur-md border border-gray-300/50 hover:bg-white/60 hover:border-gray-400/60 transition-all duration-300 shadow-sm hover:shadow-md"
          >
            View more previews
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
              <div className="text-xl font-medium text-foreground mb-0.5">80%</div>
              <div className="text-sm text-muted-foreground opacity-80">Data entry automated</div>
            </div>
            <div>
              <div className="text-xl font-medium text-foreground mb-0.5">16 weeks</div>
              <div className="text-sm text-muted-foreground opacity-80">MVP launch timeline</div>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-xs font-normal mb-3 uppercase tracking-wide text-muted-foreground opacity-80">Role</h3>
          <div className="text-base leading-relaxed text-foreground space-y-0.5">
            <p>Lead Product Designer</p>
            <p>Sep 2024 - Apr 2025</p>
            <p>London</p>
            <p>Web, iOS</p>
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
