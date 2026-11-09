import Image from "next/image"

// Two stage photos at the end of the hero: the wide UAE stage on the left,
// the How to Web portrait on the right (stacked on phones).
export function HeroPhotos() {
  return (
    <div className="flex flex-col gap-3 lg:flex-row lg:gap-6 lg:items-stretch w-full mt-16 lg:mt-24 container mx-auto px-8 lg:px-12 max-w-7xl">
      <div className="w-full lg:flex-1 min-w-0 relative aspect-[4/3] lg:aspect-[16/11] rounded-xl overflow-hidden bg-[#f1f1f1] border border-border/60 shadow-sm order-2 lg:order-1">
        <Image src="/images/speaking-event-stage.png" alt="Mary speaking on stage at an event in the UAE" fill className="object-cover" style={{ objectPosition: "center center" }} sizes="(max-width: 1024px) 100vw, 60vw" />
      </div>
      <div className="w-full lg:max-w-[440px] lg:flex-shrink-0 relative aspect-[4/3] lg:aspect-auto rounded-xl overflow-hidden bg-[#f1f1f1] border border-border/60 shadow-sm order-1 lg:order-2 lg:ml-auto">
        <Image src="/images/speaking-2.jpg" alt="Mary on stage at How to Web, presenting as Product Designer at Amazon" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 448px" />
      </div>
    </div>
  )
}
