import Image from "next/image"

export function AmazonSection() {
  return (
    <section className="container mx-auto px-8 lg:px-12 pt-5 md:pt-6 pb-8 md:pb-12">
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
            <div className="absolute bottom-3 left-3 z-20 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/80 backdrop-blur-sm border border-gray-200/80 shadow-sm">
              <svg className="w-3 h-3 text-gray-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
              <span className="text-[11px] font-mono text-gray-500 tracking-wide">Guest area</span>
            </div>
          </div>
        ))}
        </div>
      </div>
      <div className="mt-8 border-t border-gray-300 mb-3" />
    </section>
  )
}
