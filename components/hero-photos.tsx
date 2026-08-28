import Image from "next/image"

export function HeroPhotos() {
  return (
    <div className="flex flex-col gap-3 lg:flex-row lg:gap-6 lg:items-stretch w-full mt-10 container mx-auto px-8 lg:px-12 max-w-7xl">
      <div className="w-full lg:flex-1 min-w-0 relative aspect-[4/3] lg:aspect-[16/11] rounded-xl overflow-hidden bg-[#f1f1f1] border border-border/60 shadow-sm order-2 lg:order-1">
        <Image src="/images/speaking-event-stage.png" alt="Speaking event" fill className="object-cover" style={{ objectPosition: "center center" }} sizes="(max-width: 1024px) 100vw, 60vw" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
        <div className="absolute bottom-0 left-0 right-0 p-4 pointer-events-none">
          <p className="uppercase text-[11px] text-white/90 font-mono tracking-wider">UAE</p>
        </div>
      </div>
      <div className="w-full lg:max-w-[440px] lg:flex-shrink-0 relative aspect-[4/3] lg:aspect-auto rounded-xl overflow-hidden bg-[#f1f1f1] border border-border/60 shadow-sm order-1 lg:order-2 lg:ml-auto">
        <Image src="/images/speaking-2.jpg" alt="How to web conference" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 448px" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />
        <div className="absolute bottom-0 left-0 right-0 p-4 pointer-events-none">
          <p className="uppercase text-[11px] text-white/80 font-mono tracking-wider">EU</p>
        </div>
      </div>
    </div>
  )
}
