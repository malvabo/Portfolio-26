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
                <div className="relative w-full aspect-video [filter:blur(8px)] scale-105">
                  <LightboxImage
                    src="/images/amazon-sales-dashboard.jpg"
                    alt="Amazon project (NDA)"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 896px"
                  />
                </div>
                <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                  <span className="font-mono text-sm md:text-base font-semibold tracking-widest uppercase text-white/95 px-4 py-2 rounded border border-white/40 bg-black/40 backdrop-blur-sm">
                    NDA
                  </span>
                </div>
                <div className="absolute bottom-3 left-3 flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/80 backdrop-blur-sm border border-gray-200/80 shadow-sm">
                  <svg className="w-3 h-3 text-gray-700 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                  <span className="text-[11px] font-mono text-gray-700 tracking-normal">Guest area · Available during the interview</span>
                </div>
              </div>
            </div>

            <div className="border-t border-border/50 pt-16">
              <BackLinkFooter />
            </div>
          </main>
        </div>
      </div>
    </div>
  )
}
