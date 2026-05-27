"use client"
import { LightboxImage } from "@/components/lightbox-image"

import Link from "next/link"
import { BackLinkSidebar, BackLinkFooter } from "@/components/back-link"
import { ArrowLeft } from "lucide-react"
import { ScrollToTop } from "@/components/scroll-to-top"
import { Header } from "@/components/header"

export default function AmazonCaseStudy() {
  return (
    <div className="min-h-screen bg-background">
      <ScrollToTop />
      <Header />

      <div className="max-w-7xl mx-auto pt-24 flex flex-col">
        <div className="flex w-full items-start">
          <div className="hidden lg:block w-56 shrink-0 px-8 lg:px-12" aria-hidden />
          <aside className="hidden lg:block w-56 px-8 lg:px-12 fixed top-24 left-8 lg:left-[max(0px,calc((100vw-80rem)/2))]" aria-label="Case study navigation">
            <BackLinkSidebar />
          </aside>
          <main className="flex-1 px-8 lg:px-12 pb-20 lg:pb-24">
            <div className="mb-12 max-w-[750px]">
              <h1 className="font-serif text-2xl md:text-3xl lg:text-4xl tracking-[-0.02em] leading-[1.2] mb-4">
                Building the future of shipping at Amazon
              </h1>
              <p className="text-[17px] leading-relaxed text-muted-foreground">
                Want to know more? Let&apos;s talk!
              </p>
            </div>

            <div className="mb-16 grid gap-4 max-w-[750px]">
              <div className="relative rounded-xl overflow-hidden">
                <div className="relative w-full aspect-video">
                  <LightboxImage
                    src="/images/amazon-sales-dashboard.jpg"
                    alt="Amazon project"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 896px"
                  />
                </div>
              </div>
            </div>

            <section className="mb-16 p-8 bg-[#F5F3F0] rounded-xl max-w-[750px]">
              <p className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground mb-2">Outcomes</p>
              <h2 className="font-serif text-[1.75rem] leading-[1.2] tracking-[-0.02em] mb-6 text-balance">
                The impact
              </h2>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-background rounded-lg p-6">
                  <div className="text-2xl font-serif mb-2 tracking-[-0.02em]">50K+</div>
                  <p className="text-sm leading-relaxed text-muted-foreground">global sellers using the automated fulfilment tooling</p>
                </div>
                <div className="bg-background rounded-lg p-6">
                  <div className="text-2xl font-serif mb-2 tracking-[-0.02em]">$M+ ARR</div>
                  <p className="text-sm leading-relaxed text-muted-foreground">in annual recurring revenue driven through subscription product design</p>
                </div>
                <div className="bg-background rounded-lg p-6">
                  <div className="text-2xl font-serif mb-2 tracking-[-0.02em]">0→1</div>
                  <p className="text-sm leading-relaxed text-muted-foreground">first-ever paid subscription offering launched on the platform</p>
                </div>
              </div>
            </section>

            <div className="border-t border-border/50 pt-16">
              <BackLinkFooter />
            </div>
          </main>
        </div>
      </div>
    </div>
  )
}
