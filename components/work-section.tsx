"use client"

export function WorkSection() {
  return (
    <section id="work" className="pt-6 md:pt-8 pb-0">
      <div className="container mx-auto px-8 lg:px-12">
        <div className="flex items-center gap-2 mb-2">
          <span className="uppercase text-[13px] text-muted-foreground/70 font-mono tracking-wide">{"{02}"}</span>
          <span className="uppercase text-[13px] text-muted-foreground/70 font-mono tracking-wide">
            FEATURED PROJECTS
          </span>
        </div>
        <div className="border-t border-gray-300 mt-2" />
      </div>
    </section>
  )
}
