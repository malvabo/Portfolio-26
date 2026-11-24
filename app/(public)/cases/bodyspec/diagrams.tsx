"use client"

import type { ReactNode } from "react"
import { ACCENT, ExplainerCard, ExplainerStage, ExplainerTag, ExplainerTitle, Sticky } from "@/components/explainer-stage"

/* BodySpec: the customer journey before (a dead end) and after (a loop back to the next scan), side by side */

function Steps({ children }: { children: ReactNode }) {
  return <ol className="space-y-1">{children}</ol>
}

/** One step in a vertical flow, with a short connector above it */
function StepItem({ children, first = false, tone = "plain" }: { children: ReactNode; first?: boolean; tone?: "muted" | "plain" | "accent" }) {
  const box =
    tone === "accent"
      ? "border-[#B4532A]/40 bg-[#FBEEE8] text-[#8A3D1D]"
      : tone === "muted"
        ? "border-black/10 bg-[#F5F3F0] text-muted-foreground"
        : "border-black/10 bg-white text-foreground"
  return (
    <li>
      {!first && <span className={`block w-px h-2.5 ml-4 ${tone === "muted" ? "bg-black/15" : "bg-[#B4532A]/50"}`} aria-hidden />}
      <span className={`flex items-center rounded border px-2.5 py-1.5 text-[12px] leading-tight ${box}`}>{children}</span>
    </li>
  )
}

/** Small trend: body composition across scans */
function Trend() {
  const bars = [44, 58, 70, 86]
  return (
    <span className="inline-flex items-end gap-[3px] h-4 ml-auto pl-2" aria-hidden>
      {bars.map((h, i) => (
        <span key={i} className="w-1.5 rounded-[1px]" style={{ height: `${h}%`, background: ACCENT, opacity: 0.35 + i * 0.2 }} />
      ))}
    </span>
  )
}

export function JourneyLoop() {
  return (
    <ExplainerStage bg="/hand-holding-phone-with-map-interface.jpg" className="grid gap-3 sm:gap-4 md:grid-cols-2">
      <ExplainerCard>
        <ExplainerTag>Before</ExplainerTag>
        <ExplainerTitle>A five-minute booking, then a dead end</ExplainerTitle>
        <Steps>
          <StepItem first tone="muted">Search locations</StepItem>
          <StepItem tone="muted">Find a free slot</StepItem>
          <StepItem tone="muted">Fill in details and pay</StepItem>
          <StepItem tone="muted">Scan</StepItem>
          <StepItem tone="muted">
            One-off report
            <span className="ml-auto text-[#B4532A]" aria-label="Dead end">
              ×
            </span>
          </StepItem>
        </Steps>
        <div className="mt-4 flex flex-col items-start gap-2">
          <Sticky color="#F6B98F" tilt={-2}>Most people dropped out at location and slot</Sticky>
          <Sticky color="#F5B3CF" tilt={1.5}>Good results, no idea what to do next</Sticky>
        </div>
      </ExplainerCard>

      <ExplainerCard>
        <ExplainerTag accent>After</ExplainerTag>
        <ExplainerTitle>Two clicks to book, and a reason to return</ExplainerTitle>
        <Steps>
          <StepItem first>Nearby slots, from your location</StepItem>
          <StepItem>Book</StepItem>
          <StepItem>Scan</StepItem>
          <StepItem tone="accent">
            Progress since your last scan
            <Trend />
          </StepItem>
        </Steps>
        <p className="mt-2 flex items-center gap-2 text-[12px] text-[#8A3D1D]">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
            <path d="M13 3v3a4 4 0 0 1-4 4H3" stroke={ACCENT} strokeWidth="1.5" strokeLinecap="round" />
            <path d="M6 7l-3 3 3 3" stroke={ACCENT} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          Seeing change brings people back to book
        </p>
        <div className="mt-4 grid grid-cols-2 gap-2">
          {[
            { k: "+25%", v: "bookings" },
            { k: "+26%", v: "average order value" },
          ].map((m) => (
            <div key={m.k} className="rounded border border-black/10 px-3 py-2">
              <p className="text-[15px] font-medium text-foreground">{m.k}</p>
              <p className="text-[12px] text-muted-foreground leading-snug">{m.v}</p>
            </div>
          ))}
        </div>
      </ExplainerCard>
    </ExplainerStage>
  )
}
