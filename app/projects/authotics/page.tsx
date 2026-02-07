"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowLeft } from "lucide-react"
import { ScrollToTop } from "@/components/scroll-to-top"
import { Header } from "@/components/header"
export default function AuthoticsCaseStudy() {
  return (
    <div className="min-h-screen bg-background">
      <ScrollToTop />
      <Header />

      <div className="max-w-7xl mx-auto pt-24 flex flex-col">
        {/* Row 1: spacer + category label */}
        <div className="flex w-full items-start">
          <div className="hidden lg:block w-56 shrink-0 px-8 lg:px-12" aria-hidden />
          <div className="min-w-0 flex-1 px-8 lg:px-12">
            <p className="font-mono text-xs text-muted-foreground mb-6 tracking-wider uppercase leading-none">
              E-COMMERCE & HEALTH TECH
            </p>
          </div>
        </div>

        {/* Row 2: spacer + main content */}
        <div className="flex w-full items-start">
          <div className="hidden lg:block w-56 shrink-0 px-8 lg:px-12" aria-hidden />
          <aside className="hidden lg:block w-56 px-8 lg:px-12 fixed top-24 left-8 lg:left-[max(3rem,calc((100vw-80rem)/2+3rem))]" aria-label="Case study navigation">
            <Link
              href="/#work"
              scroll={false}
              className="inline-flex items-baseline gap-2 text-xs font-mono tracking-wider uppercase text-muted-foreground hover:text-foreground transition-colors leading-none"
            >
              <ArrowLeft className="w-3 h-3 shrink-0" />
              All projects
            </Link>
          </aside>
          <main className="flex-1 px-8 lg:px-12 pb-20 lg:pb-24 max-w-4xl">
          <div className="mb-12">
            <h1 className="font-serif text-2xl md:text-3xl lg:text-4xl tracking-[-0.02em] leading-[1.2] mb-4 text-balance">
              Authotics: 3D AI consultation for custom orthotics
            </h1>
            <p className="text-[17px] leading-relaxed text-muted-foreground">
              Digital consultation experience that makes ordering custom orthotics from home easy and precise.
            </p>
          </div>

          <section id="tldr" className="mb-16 p-5 bg-[#F5F3F0] rounded-xl max-w-3xl">
            <p className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground mb-3">TLDR</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-2 text-[14px]">
              <div>
                <p className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground mb-1">Role</p>
                <p className="leading-relaxed">Lead Product Designer</p>
              </div>
              <div>
                <p className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground mb-1">Timeline</p>
                <p className="leading-relaxed">Aug 2024 – Jan 2025</p>
              </div>
              <div>
                <p className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground mb-1">Team</p>
                <p className="leading-relaxed">Product team of 5</p>
              </div>
              <div>
                <p className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground mb-1">Platform</p>
                <div className="flex flex-wrap gap-1.5">
                  {["Web", "Mobile"].map((platform) => (
                    <span
                      key={platform}
                      className="inline-block px-2 py-0.5 text-[12px] rounded-md bg-[#E8E3DD] text-[#6B5D4F]"
                    >
                      {platform}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <div className="mb-16 grid gap-4">
            {/* Row 1: Wide image */}
            <div className="rounded-xl overflow-hidden">
              <Image
                src="/images/authotics-1.png"
                alt="Authotics 3D foot scanning interface"
                width={2465}
                height={1820}
                className="w-full h-auto object-cover"
              />
            </div>

            {/* Row 2: Two images side by side */}
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-xl overflow-hidden">
                <Image
                  src="/images/authotics-2.png"
                  alt="Authotics consultation flow"
                  width={3200}
                  height={2400}
                  className="w-full h-auto object-cover aspect-square"
                />
              </div>
              <div className="rounded-xl overflow-hidden">
                <Image
                  src="/images/authotics-3.png"
                  alt="Authotics product recommendations"
                  width={1590}
                  height={1590}
                  className="w-full h-auto object-cover aspect-square"
                />
              </div>
            </div>
          </div>

          <div className="border-t border-border/50 pt-16">
            <Link
              href="/#work"
              className="inline-flex items-center gap-2 text-[17px] hover:opacity-70 transition-opacity"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to all projects
            </Link>
          </div>
        </main>
        </div>
      </div>
    </div>
  )
}
