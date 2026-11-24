"use client"

import type { ReactNode } from "react"
import { ACCENT, Chevron, ExplainerCard, ExplainerStage, ExplainerTag, ExplainerTitle, Sticky } from "@/components/explainer-stage"

/* BodySpec: the customer journey before (a dead end) and after (a loop back to the next scan) */

function Node({ children, muted = false, accent = false }: { children: ReactNode; muted?: boolean; accent?: boolean }) {
  return (
    <span
      className={`inline-flex items-center rounded border px-2.5 py-1.5 text-[12px] leading-tight whitespace-nowrap ${
        accent
          ? "border-[#B4532A]/40 bg-[#FBEEE8] text-[#8A3D1D]"
          : muted
            ? "border-black/10 bg-[#F5F3F0] text-muted-foreground"
            : "border-black/10 bg-white text-foreground"
      }`}
    >
      {children}
    </span>
  )
}

/** Small trend: body composition across scans */
function Trend() {
  const bars = [44, 58, 70, 86]
  return (
    <span className="inline-flex items-end gap-[3px] h-5 ml-2" aria-hidden>
      {bars.map((h, i) => (
        <span key={i} className="w-1.5 rounded-[1px]" style={{ height: `${h}%`, background: ACCENT, opacity: 0.35 + i * 0.2 }} />
      ))}
    </span>
  )
}

export function JourneyLoop() {
  return (
    <ExplainerStage bg="/hand-holding-phone-with-map-interface.jpg" className="space-y-4">
      <ExplainerCard>
        <ExplainerTag>Before</ExplainerTag>
        <ExplainerTitle>A five-minute booking, then a dead end</ExplainerTitle>
        <div className="flex flex-wrap items-center gap-x-1.5 gap-y-3 text-muted-foreground">
          <Node muted>Search locations</Node>
          <Chevron />
          <Node muted>Find a free slot</Node>
          <Chevron />
          <Node muted>Fill in details</Node>
          <Chevron />
          <Node muted>Pay</Node>
          <Chevron />
          <Node muted>Scan</Node>
          <Chevron />
          <Node muted>One-off report</Node>
          <span className="grid place-items-center w-6 h-6 rounded-full border border-dashed border-[#B4532A]/60 text-[#B4532A] text-[12px]" aria-label="End">
            ×
          </span>
        </div>
        <div className="mt-5 flex flex-wrap gap-3 rounded border border-dashed border-[#B4532A]/50 p-3 pb-4">
          <p className="w-full text-[13px] font-medium text-[#B4532A]">What research found</p>
          <Sticky color="#F6B98F" tilt={-2.5}>Most people dropped out finding a location and a slot</Sticky>
          <Sticky color="#F5B3CF" tilt={2}>Accurate results, no idea what to do next</Sticky>
        </div>
      </ExplainerCard>

      <ExplainerCard>
        <ExplainerTag accent>After</ExplainerTag>
        <ExplainerTitle>Two clicks to book, and a reason to come back</ExplainerTitle>
        <div className="relative">
          <div className="flex flex-wrap items-center gap-x-1.5 gap-y-3 text-[#B4532A]">
            <Node>Nearby slots, from your location</Node>
            <Chevron />
            <Node>Book</Node>
            <Chevron />
            <Node>Scan</Node>
            <Chevron />
            <Node accent>
              Progress since your last scan
              <Trend />
            </Node>
          </div>
          {/* The loop back to booking */}
          <div className="mt-3 flex items-center gap-2 text-[12px] text-[#8A3D1D]">
            <svg width="22" height="16" viewBox="0 0 22 16" fill="none" aria-hidden>
              <path d="M20 2v4a6 6 0 0 1-6 6H3" stroke={ACCENT} strokeWidth="1.5" strokeLinecap="round" />
              <path d="M7 8l-4 4 4 4" stroke={ACCENT} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Seeing change is the reason to book the next scan
          </div>
        </div>
        <div className="mt-5 grid gap-2.5 sm:grid-cols-3">
          {[
            { k: "2 clicks", v: "to reach checkout" },
            { k: "+25%", v: "bookings" },
            { k: "+26%", v: "average order value" },
          ].map((m) => (
            <div key={m.k} className="rounded border border-black/10 p-3">
              <p className="text-[15px] font-medium text-foreground">{m.k}</p>
              <p className="text-[12px] text-muted-foreground leading-snug mt-0.5">{m.v}</p>
            </div>
          ))}
        </div>
      </ExplainerCard>
    </ExplainerStage>
  )
}
