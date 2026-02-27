export function VisualConceptsSection() {
  const images = [
    { src: "https://framerusercontent.com/images/36QN27uzjdn0I0NRODeqroemKg.gif?width=800&height=600", alt: "Visual concept 1" },
    { src: "https://framerusercontent.com/images/h8j2HVtqZw9cF41U8kgNenx1cAQ.gif?width=800&height=600", alt: "Visual concept 2" },
    { src: "https://framerusercontent.com/images/fDzLwnqxSQneJkAWE2uqm1npsE.png?scale-down-to=1024&width=1434&height=1024", alt: "Visual concept 3" },
    { src: "https://framerusercontent.com/images/hfdH6vAd1K7DFoW6iOaSvBrKWp8.png?width=1600&height=1200", alt: "Visual concept 4" },
    { src: "https://framerusercontent.com/images/iJ22Wao5QDVPyjFx5tPGd3OqeY.png?width=1600&height=1200", alt: "Visual concept 5" },
    { src: "https://framerusercontent.com/images/ztk85hchhdEzbxEFAiDFkXnGklc.png?width=1600&height=1200", alt: "Visual concept 6" },
  ]

  return (
    <section className="pt-10 md:pt-12 pb-16 md:pb-20 container mx-auto px-8 lg:px-12 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-2 mb-2">
          <span className="uppercase text-[13px] text-muted-foreground/70 font-mono tracking-wide">
            {"{05}"} VISUAL CONCEPTS
          </span>
        </div>

        <h2 className="font-serif text-2xl md:text-3xl leading-[1.1] tracking-tight text-foreground mb-10">
          Visual concepts
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
          {images.map((img, index) => (
            <div key={index} className="rounded-xl overflow-hidden bg-muted/30 min-h-[180px]">
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-auto object-cover block"
                loading="lazy"
                width={800}
                height={600}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
