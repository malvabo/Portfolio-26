import Image from "next/image"
import Link from "next/link"

export function BodySpecSection() {
  const images = [
    { src: "/images/vv2onqfz97c3kh8t7xcotjbkzs.avif", alt: "BodySpec mobile app scheduling interface" },
    { src: "/images/pols3wmkw4xc1xcodvkygvwba.avif", alt: "BodySpec laptop dashboard interface" },
    { src: "/images/3pvhfibkm3pl7csuobqww6d0g0.avif", alt: "BodySpec mobile map interface" },
  ]

  return (
    <section className="container mx-auto px-8 lg:px-12 py-8 md:py-12">
      <div className="border-t border-gray-300 mb-10" />

      <h2 className="text-2xl md:text-3xl leading-tight font-serif mb-8">
        BodySpec - Platform That Boosted Bookings by 20% for 500K+ Users
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 mb-10">
        <div>
          <h3 className="text-xs font-normal mb-3 uppercase tracking-wide text-muted-foreground opacity-80">About</h3>
          <p className="text-base leading-relaxed text-foreground">
            Conducted deep research to identify funnel friction points and streamlined the booking architecture with a
            value-first narrative. Achieved a 20% increase in bookings across 500K+ users, positioning the company for
            an $8.6M funding round.
          </p>
          <Link
            href="/projects/bodyspec"
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
              <div className="text-xl font-medium text-foreground mb-0.5">+20%</div>
              <div className="text-sm text-muted-foreground opacity-80">Increase in bookings</div>
            </div>
            <div>
              <div className="text-xl font-medium text-foreground mb-0.5">$8.6M</div>
              <div className="text-sm text-muted-foreground opacity-80">Funding round secured</div>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-xs font-normal mb-3 uppercase tracking-wide text-muted-foreground opacity-80">Role</h3>
          <div className="text-base leading-relaxed text-foreground space-y-0.5">
            <p>Senior Product Designer</p>
            <p>May 2022 - Apr 2023</p>
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
