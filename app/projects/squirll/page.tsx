"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowLeft } from "lucide-react"
import { ScrollToTop } from "@/components/scroll-to-top"
import { Header } from "@/components/header"
import { Button } from "@/components/ui/button"

export default function SquirllCaseStudy() {
  return (
    <div className="min-h-screen bg-background">
      <ScrollToTop />
      <Header />

      <div className="flex max-w-7xl mx-auto">
        <aside className="hidden lg:block w-56 px-8 lg:px-12" style={{ paddingTop: "calc(3rem + 3.5rem)" }}>
          <Button variant="ghost" size="sm" asChild className="w-full justify-start px-0">
            <Link href="/#work" className="flex items-center gap-2">
              <ArrowLeft className="w-4 h-4" />
              All projects
            </Link>
          </Button>
        </aside>

        <main className="flex-1 px-8 lg:px-12 pt-12 pb-20 lg:pb-24 max-w-4xl">
          <div className="mb-12">
            <p className="font-mono text-xs text-muted-foreground mb-6 tracking-wider uppercase">
              AI-POWERED FINANCE APP
            </p>
            <h1 className="font-serif text-2xl md:text-3xl lg:text-4xl tracking-[-0.02em] leading-[1.2] mb-4 text-balance">
              From idea to launch: AI-first finance app in 4 months
            </h1>
            <p className="text-[17px] leading-relaxed text-muted-foreground">
              AI-powered finance app that makes managing money smart and enjoyable.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-4 mb-8 pb-8 border-b border-border/30">
            <div>
              <p className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground mb-2">Role</p>
              <p className="text-[15px] leading-relaxed">Lead Product Designer</p>
            </div>
            <div>
              <p className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground mb-2">Timeline</p>
              <p className="text-[15px] leading-relaxed">Sep 2024 - Apr 2025</p>
            </div>
            <div>
              <p className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground mb-2">Location</p>
              <p className="text-[15px] leading-relaxed">London</p>
            </div>
            <div>
              <p className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground mb-2">Platform</p>
              <p className="text-[15px] leading-relaxed">Web, iOS</p>
            </div>
          </div>

          <section id="tldr" className="mb-16 p-8 bg-[#F5F3F0] rounded-xl max-w-3xl">
            <p className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground mb-4">TLDR</p>
            <h2 className="font-serif text-[2rem] leading-[1.2] tracking-[-0.02em] mb-6 text-balance">At a glance</h2>

            <ul className="space-y-3 text-[15px] leading-relaxed max-w-[750px]">
              <li className="flex gap-3">
                <span className="text-muted-foreground mt-0.5">•</span>
                <span>AI finance app: gamified, receipt scan, conversational insights; dark UI.</span>
              </li>
            </ul>
          </section>

          <div className="mb-16 grid gap-4">
            {/* Row 1: Wide image spanning full width */}
            <div className="rounded-xl overflow-hidden">
              <Image
                src="/images/squirll-collage-1.jpg"
                alt="Squirll app interface overview"
                width={4000}
                height={3000}
                className="w-full h-auto object-cover"
              />
            </div>

            {/* Row 2: Full width square image */}
            <div className="rounded-xl overflow-hidden">
              <Image
                src="/images/squirll-collage-2.jpg"
                alt="Squirll financial dashboard"
                width={2856}
                height={2863}
                className="w-full h-auto object-cover"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-xl overflow-hidden">
                <Image
                  src="/images/squirll-collage-4.jpg"
                  alt="Squirll spending analytics"
                  width={2907}
                  height={2904}
                  className="w-full h-auto object-cover aspect-square"
                />
              </div>
              <div className="rounded-xl overflow-hidden">
                <Image
                  src="/images/squirll-collage-3.jpg"
                  alt="Squirll interface details"
                  width={2048}
                  height={1324}
                  className="w-full h-auto object-cover aspect-square"
                />
              </div>
            </div>

            {/* Row 4: Two images side by side */}
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-xl overflow-hidden">
                <Image
                  src="/images/squirll-collage-8.jpg"
                  alt="Squirll interface design"
                  width={2856}
                  height={2628}
                  className="w-full h-auto object-cover aspect-square"
                />
              </div>
              <div className="rounded-xl overflow-hidden">
                <Image
                  src="/images/squirll-collage-7.jpg"
                  alt="Squirll app experience"
                  width={2048}
                  height={1324}
                  className="w-full h-auto object-cover aspect-square"
                />
              </div>
            </div>

            {/* Row 5: Two images side by side */}
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-xl overflow-hidden">
                <Image
                  src="/images/squirll-collage-5.jpg"
                  alt="Squirll AI features"
                  width={2526}
                  height={2526}
                  className="w-full h-auto object-cover aspect-square"
                />
              </div>
              <div className="rounded-xl overflow-hidden">
                <Image
                  src="/images/squirll-collage-6.jpg"
                  alt="Squirll app screens"
                  width={3405}
                  height={3403}
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
  )
}
