import Image from "next/image"

const IMAGES = [
  { src: "/images/squirll-collage-1.jpg",       alt: "Squirll app design" },
  { src: "/images/luminara-collage-1.jpg",       alt: "Luminara branding" },
  { src: "/images/bodyspec-homepage-final.png",  alt: "Bodyspec web design" },
  { src: "/images/speaking-1.jpg",               alt: "Speaking event" },
  { src: "/images/squirll-collage-3.jpg",        alt: "Squirll product screens" },
  { src: "/images/luminara-collage-2.jpg",       alt: "Luminara design system" },
  { src: "/images/authotics-1.jpg",              alt: "Authotics product design" },
  { src: "/images/tempstars-landing.png",        alt: "TempStars landing page" },
  { src: "/images/squirll-collage-5.jpg",        alt: "Squirll UI detail" },
  { src: "/images/luminara-collage-4.jpg",       alt: "Luminara UI detail" },
  { src: "/images/speaking-3.jpg",               alt: "Conference talk" },
  { src: "/images/authotics-2.jpg",              alt: "Authotics user flows" },
]

export function MarqueeCarousel() {
  const doubled = [...IMAGES, ...IMAGES]

  return (
    <section aria-hidden className="w-full overflow-hidden py-10 md:py-14">
      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        .marquee-track {
          animation: marquee 35s linear infinite;
        }
        .marquee-track:hover {
          animation-play-state: paused;
        }
      `}</style>
      <div
        className="marquee-track flex"
        style={{ gap: "14px", width: "max-content" }}
      >
        {doubled.map((img, i) => (
          <div
            key={i}
            className="relative flex-shrink-0 overflow-hidden rounded-2xl"
            style={{ height: "220px", aspectRatio: "4 / 3" }}
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              sizes="293px"
              className="object-cover transition-transform duration-700 ease-out hover:scale-105"
              draggable={false}
            />
          </div>
        ))}
      </div>
    </section>
  )
}
