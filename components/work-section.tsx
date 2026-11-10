"use client"

import { ArrowDown } from "lucide-react"

export function WorkSection() {
  return (
    <section id="work" className="pt-6 md:pt-10 pb-0 scroll-mt-24">
      <div className="container mx-auto px-8 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <a href="#work" className="inline-flex items-center gap-1.5 text-muted-foreground/70 hover:text-foreground transition-colors">
            <span className="uppercase text-[13px] font-mono tracking-wide">FEATURED PROJECTS</span>
            <ArrowDown className="w-3.5 h-3.5" strokeWidth={1.75} aria-hidden />
          </a>
        </div>
      </div>
    </section>
  )
}
