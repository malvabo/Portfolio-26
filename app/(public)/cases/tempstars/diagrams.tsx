"use client"

import type { ReactNode } from "react"
import { ACCENT, NOTE, ExplainerCard, ExplainerStage, ExplainerTag, ExplainerTitle, Sticky } from "@/components/explainer-stage"

/* TempStars: a new hygienist's first week, from signup to first offer, before and after */

const DAYS = [0, 1, 2, 3, 4, 5, 6, 7]

/** One track: a bar from signup (day 0) to the first offer */
function Track({ days, accent, start, end }: { days: number; accent?: boolean; start: string; end: string }) {
  const pct = (days / 7) * 100
  return (
    <div>
      <div className="relative h-5 text-[12px]">
        <span
          className={`absolute whitespace-nowrap ${days === 7 ? "right-0" : "-translate-x-1/2"} font-medium`}
          style={days === 7 ? undefined : { left: `${pct}%`, color: ACCENT }}
        >
          {end}
        </span>
      </div>
      <div className="relative h-7">
        {/* full week, faint */}
        <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-1.5 rounded-full bg-black/[0.06]" />
        {/* time spent waiting */}
        <div
          className="absolute left-0 top-1/2 -translate-y-1/2 h-1.5 rounded-full"
          style={{ width: `${pct}%`, background: accent ? ACCENT : "#9A968D" }}
        />
        <span className="absolute left-0 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full border-2 bg-white" style={{ borderColor: accent ? ACCENT : "#9A968D" }} />
        <span
          className="absolute top-1/2 -translate-y-1/2 -translate-x-full w-3 h-3 rounded-full"
          style={{ left: `${pct}%`, background: accent ? ACCENT : "#3D3D3D" }}
        />
      </div>
      <p className="text-[12px] text-muted-foreground">{start}</p>
    </div>
  )
}

function Chip({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded border border-black/10 bg-[#F5F3F0] px-2.5 py-1.5 text-[12px] leading-snug text-foreground/80">
      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden>
        <path d="M2.5 6.2l2.3 2.3 4.7-5" stroke={ACCENT} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      {children}
    </span>
  )
}

export function FirstWeek() {
  return (
    <ExplainerStage bg="/images/veeqo-tile-speed.jpg">
      <ExplainerCard>
        <ExplainerTag accent>A new hygienist&apos;s first week</ExplainerTag>
        <ExplainerTitle>From a week of waiting to an offer in under 48 hours</ExplainerTitle>

        {/* Day scale */}
        <div className="relative h-6 text-[10px] font-mono uppercase tracking-wider text-muted-foreground border-b border-black/10" aria-hidden>
          {DAYS.map((d) => (
            <span
              key={d}
              className={`absolute top-0 whitespace-nowrap ${d === 0 ? "" : d === 7 ? "-translate-x-full" : "-translate-x-1/2"} ${d === 0 || d === 2 || d === 7 ? "" : "hidden sm:block"}`}
              style={{ left: `${(d / 7) * 100}%` }}
            >
              {d === 0 ? "Signup" : `Day ${d}`}
            </span>
          ))}
        </div>

        {/* Before */}
        <div className="mt-4">
          <ExplainerTag>Before</ExplainerTag>
          <div className="mt-2">
            <Track days={7} start="Generic signup" end="First offer, about a week later" />
          </div>
          <div className="mt-3 flex flex-wrap gap-x-3 gap-y-2.5 rounded border border-dashed border-black/20 p-3 pb-4">
            <p className="w-full text-[13px] font-medium text-[#6B5D4F]">Why people stalled, and 65% never booked</p>
            <Sticky color={NOTE.sand} tilt={-2}>Same shift list for everyone, whatever their skills</Sticky>
            <Sticky color={NOTE.blue} tilt={1.5}>Left the app to research clinics on Google</Sticky>
            <Sticky color={NOTE.lilac} tilt={-1}>Cancellation policy one-sided toward clinics</Sticky>
          </div>
        </div>

        {/* After */}
        <div className="mt-6">
          <ExplainerTag accent>After</ExplainerTag>
          <div className="mt-2">
            <Track days={2} accent start="Skills at signup" end="First offer" />
          </div>
          <div className="mt-3 flex flex-wrap gap-2">
            <Chip>Matched on must-have skills first</Chip>
            <Chip>Equipment, parking and pay on the shift page</Chip>
            <Chip>A fairer cancellation policy</Chip>
          </div>
        </div>
      </ExplainerCard>
    </ExplainerStage>
  )
}
