import Image from "next/image"

export function AmazonSection() {
  return (
    <section className="container mx-auto px-8 lg:px-12 pt-5 md:pt-6 pb-8 md:pb-12">
      <h2 className="text-2xl md:text-3xl leading-[1.1] font-serif mb-4 tracking-tight">
        Building the future of shipping at Amazon
      </h2>
      <p className="text-base leading-relaxed text-foreground mb-10">
        Want to know more? Let&apos;s talk!
      </p>

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {[1, 2, 3].map((i) => (
          <div key={i} className="relative aspect-[4/3] rounded-lg overflow-hidden bg-gray-50 border border-gray-200">
            <div className="absolute inset-0 z-10 [filter:blur(8px)] scale-105">
              <Image
                src="/images/amazon-sales-dashboard.jpg"
                alt="Amazon project (NDA)"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
            <div className="absolute inset-0 z-20 flex items-center justify-center bg-black/30">
              <span className="font-mono text-sm md:text-base font-semibold tracking-widest uppercase text-white/95 px-4 py-2 rounded border border-white/40 bg-black/40 backdrop-blur-sm">
                NDA
              </span>
            </div>
          </div>
        ))}
        </div>
      </div>
      <div className="mt-8 border-t border-gray-300 mb-3" />
    </section>
  )
}
