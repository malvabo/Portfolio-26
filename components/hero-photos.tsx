import Image from "next/image"

// On desktop the stage portrait sits inside the hero; phones show it here,
// below the statement.
export function HeroPhotos() {
  return (
    <div className="lg:hidden w-full mt-10 container mx-auto px-8 max-w-7xl">
      <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-[#f1f1f1] border border-border/60 shadow-sm">
        <Image src="/images/speaking-2.jpg" alt="How to web conference" fill className="object-cover" sizes="100vw" />
      </div>
    </div>
  )
}
