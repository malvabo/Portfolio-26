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
          <StepItem first>Nearby slots</StepItem>
          <StepItem>Book</StepItem>
          <StepItem>Scan</StepItem>
          <StepItem>See progress since the last scan</StepItem>
          <StepItem>
            <svg width="13" height="13" viewBox="0 0 16 16" fill="none" aria-hidden className="mr-2 shrink-0">
              <path d="M13.5 8A5.5 5.5 0 1 1 11.6 3.8" stroke={ACCENT} strokeWidth="1.6" strokeLinecap="round" />
              <path d="M12 1.5v2.8H9.2" stroke={ACCENT} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Book the next scan
          </StepItem>
        </Steps>
      </ExplainerCard>
    </ExplainerStage>
  )
}
