"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowLeft } from "lucide-react"
import { ScrollToTop } from "@/components/scroll-to-top"
import { Header } from "@/components/header"
export default function LuminaraCaseStudy() {
  return (
    <div className="min-h-screen bg-background">
      <ScrollToTop />
      <Header />

      <div className="max-w-7xl mx-auto pt-24 flex flex-col">
        {/* Row 2: spacer + main content */}
        <div className="flex w-full items-start">
          <div className="hidden lg:block w-56 shrink-0 px-8 lg:px-12" aria-hidden />
          <aside className="hidden lg:block w-56 px-8 lg:px-12 fixed top-24 left-8 lg:left-[max(0px,calc((100vw-80rem)/2))]" aria-label="Case study navigation">
            <Link
              href="/#work"
              scroll={false}
              className="block text-xs font-mono tracking-wider uppercase text-muted-foreground hover:text-foreground transition-colors mb-16 leading-none"
            >
              <span className="inline-flex items-baseline gap-2">
                <ArrowLeft className="w-3 h-3 shrink-0" />
                All projects
              </span>
            </Link>
          </aside>
          <main className="flex-1 px-8 lg:px-12 pb-20 lg:pb-24">
          <div className="mb-12 max-w-[750px]">
            <h1 className="font-serif text-2xl md:text-3xl lg:text-4xl tracking-[-0.02em] leading-[1.2] mb-4">
              Luminara: Designing one experience for clients and clinicians
            </h1>
            <p className="text-[17px] leading-relaxed text-muted-foreground">
              Design of luxury mental health service experience for both clients and providers
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-4 mb-8 pb-8 border-b border-border/30 max-w-[750px]">
            <div>
              <p className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground mb-2">Role</p>
              <p className="text-[15px] leading-relaxed">Lead Product Designer</p>
            </div>
            <div>
              <p className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground mb-2">Timeline</p>
              <p className="text-[15px] leading-relaxed">July 2024 - Jan 2025</p>
            </div>
            <div>
              <p className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground mb-2">Team</p>
              <p className="text-[15px] leading-relaxed">Product team of 8</p>
            </div>
            <div>
              <p className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground mb-2">Platform</p>
              <div className="flex flex-wrap gap-1.5">
                {["Web", "iOS", "Android"].map((platform) => (
                  <span
                    key={platform}
                    className="inline-block px-2 py-0.5 text-[13px] rounded-md bg-[#E8E3DD] text-[#6B5D4F]"
                  >
                    {platform}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <section id="tldr" className="mb-16 p-8 bg-[#F5F3F0] rounded-xl max-w-[750px]">
            <p className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground mb-4">TLDR</p>
            <h2 className="font-serif text-[2rem] leading-[1.2] tracking-[-0.02em] mb-6 text-balance">At a glance</h2>

            <ul className="space-y-3 text-[17px] leading-relaxed max-w-[750px]">
              <li className="flex gap-3">
                <span className="text-muted-foreground mt-0.5">•</span>
                <span className="text-muted-foreground">Mental health: client–therapist booking, sessions, meditation, provider dashboards.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-muted-foreground mt-0.5">•</span>
                <span className="text-muted-foreground">Strong launch satisfaction and adoption.</span>
              </li>
            </ul>
          </section>

          <div className="mb-16 grid gap-4">
            {/* Hero image - wide */}
            <div className="rounded-xl overflow-hidden">
              <Image
                src="/images/luminara-1.png"
                alt="Luminara app interface overview"
                width={1504}
                height={824}
                className="w-full h-auto object-cover"
              />
            </div>

            {/* Two images side by side */}
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-xl overflow-hidden">
                <Image
                  src="/images/luminara-2.png"
                  alt="Luminara interface detail"
                  width={1588}
                  height={1196}
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="rounded-xl overflow-hidden">
                <Image
                  src="/images/luminara-3.png"
                  alt="Luminara mobile interface"
                  width={1620}
                  height={1620}
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
