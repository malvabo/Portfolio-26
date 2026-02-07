import Image from "next/image"
import Link from "next/link"

export function TempStarsSection() {
  const images = [
    { src: "/images/tempstars-clinic-profile-first.png", alt: "TempStars – Upper Canada Dental Centre profile with job details, neighborhood map, and office information" },
    { src: "/images/tempstars-clinic-profile.png", alt: "TempStars dental centre profile with neighborhood and shift details" },
    { src: "/images/tempstars-good-company.png", alt: "TempStars onboarding – You are in a good company" },
  ]

  return (
    <section className="container mx-auto px-8 lg:px-12 py-8 md:py-12">
      <div className="border-t border-gray-300 mb-10" />

      <h2 className="text-2xl md:text-3xl leading-[1.1] font-serif mb-10 tracking-tight">
        TempStars: Marketplace liquidity & trust for 25K+ dental professionals
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 mb-10">
        <div>
          <h3 className="text-xs font-normal mb-3 uppercase tracking-wide text-muted-foreground opacity-80">About</h3>
          <p className="text-base leading-relaxed text-foreground">
            When a dental clinic is short-staffed, they need help now. I re-engineered the signup and matching logic for Canada&apos;s largest dental marketplace to fix a 40% user drop-off. By making the matching process more transparent and faster, we turned a week-long headache into a 48-hour win.
          </p>
          <Link
            href="/projects/tempstars"
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
              <div className="text-xl font-medium text-foreground mb-0.5">20%</div>
              <div className="text-sm text-muted-foreground opacity-80">Lift in activation</div>
            </div>
            <div>
              <div className="text-xl font-medium text-foreground mb-0.5">7d → 2d</div>
              <div className="text-sm text-muted-foreground opacity-80">Time-to-First-Offer</div>
            </div>
            <div>
              <div className="text-xl font-medium text-foreground mb-0.5">+25%</div>
              <div className="text-sm text-muted-foreground opacity-80">Booked shifts YoY</div>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-xs font-normal mb-3 uppercase tracking-wide text-muted-foreground opacity-80">Role</h3>
          <div className="text-base leading-relaxed text-foreground space-y-0.5">
            <p>Lead Product Designer</p>
            <p>Shipped 2023</p>
            <div className="flex flex-wrap gap-1.5 mt-2">
              {["Web", "Mobile"].map((platform) => (
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
            <Image src={image.src} alt={image.alt} fill className="object-cover" />
          </div>
        ))}
      </div>
    </section>
  )
}
