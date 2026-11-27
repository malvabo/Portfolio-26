"use client"

import type { ReactNode } from "react"
import { ExplainerCard, ExplainerStage, ExplainerTitle } from "@/components/explainer-stage"

/* BodySpec user journey as a before and after pair, the same layout as the doc case */

const STAGES: { stage: string; before: string; after: string }[] = [
  { stage: "Find a location", before: "Searched for a clinic by hand", after: "Opens on the nearest locations" },
  { stage: "Pick a time", before: "Hunted across pages for an open slot", after: "Nearby slots on one screen" },
  { stage: "Check out", before: "Asked for details a booking didn't need", after: "Only the fields a booking needs" },
  { stage: "See results", before: "A one-off report with no trend", after: "Change since the last scan" },
  { stage: "Come back", before: "No reason to book again", after: "Progress makes the next scan worth booking" },
]

function Tag({ children, accent = false }: { children: ReactNode; accent?: boolean }) {
  return (
    <span className="inline-block self-start text-white text-[11px] font-medium px-1.5 py-0.5 leading-none" style={{ background: accent ? "#28447A" : "#3D3D3D" }}>
      {children}
    </span>
  )
}

export function JourneyLoop() {
  const side = (after: boolean) => (
    <div className="bg-white rounded-md border border-black/10 shadow-[0_8px_24px_rgba(0,0,0,0.18)] p-4 self-stretch">
      <Tag accent={after}>{after ? "After" : "Before"}</Tag>
      <p className="font-serif text-[1.125rem] tracking-[-0.01em] mt-1 mb-4">{after ? "What we changed" : "Where people dropped"}</p>
      <ol className="space-y-2.5">
        {STAGES.map((st) => (
          <li key={st.stage} className="rounded border border-black/10 p-3">
            <p className="text-[12px] text-muted-foreground">{st.stage}</p>
            <p className="mt-1 flex items-start gap-2 text-[13px] leading-snug text-foreground">
              {after ? (
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden className="mt-0.5 shrink-0">
                  <path d="M2.5 7.5l3 3 6-7" stroke="#28447A" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              ) : (
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden className="mt-0.5 shrink-0">
                  <path d="M3.5 3.5l7 7M10.5 3.5l-7 7" stroke="#9a958d" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              )}
              {after ? st.after : st.before}
            </p>
          </li>
        ))}
      </ol>
    </div>
  )
  return (
    <div className="relative rounded-lg overflow-hidden">
      <img src="/hand-holding-phone-with-map-interface.jpg" alt="" aria-hidden className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-black/25" aria-hidden />
      <div className="relative p-4 sm:p-6 md:p-8 grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-4 md:gap-3 items-center">
        <p className="md:col-span-3 font-serif text-[1.375rem] tracking-[-0.01em] text-white">User journey</p>
        {side(false)}
        <div className="flex justify-center">
          <span className="grid place-items-center w-10 h-10 rounded-full bg-white shadow-[0_4px_14px_rgba(0,0,0,0.2)] rotate-90 md:rotate-0">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden>
              <path d="M3 9h12M10 4l5 5-5 5" stroke="#28447A" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
        </div>
        {side(true)}
      </div>
    </div>
  )
}

/* BodySpec: who the progress messaging speaks to. One row per segment: what they worry about,
   the message for them, and what their next scan focuses on. */

const SEGMENTS = [
  {
    name: "Older women",
    tint: "#ECE3F3",
    ink: "#5B4A78",
    icon: (
      <svg width="16" height="16" viewBox="0 0 72 72" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" aria-hidden>
        <path d="M30 16a6 6 0 1 0-8 8l18 24a6 6 0 1 0 8 8 6 6 0 1 0 4-8 6 6 0 1 0-8-8L26 16a6 6 0 0 0 4 0Z" />
      </svg>
    ),
    worry: "Osteoporosis",
    message: "Know your bone health before a fracture does",
    focus: "Bone density",
  },
  {
    name: "Younger women",
    tint: "#DCEDE6",
    ink: "#2F6B55",
    icon: (
      <svg width="18" height="13" viewBox="0 0 76 56" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" aria-hidden>
        <rect x="6" y="18" width="8" height="20" rx="2" />
        <rect x="14" y="12" width="8" height="32" rx="2" />
        <path d="M22 28h32" />
        <rect x="54" y="12" width="8" height="32" rx="2" />
        <rect x="62" y="18" width="8" height="20" rx="2" />
      </svg>
    ),
    worry: "The scale hides progress",
    message: "See muscle and fat, not just weight",
    focus: "Muscle and fat",
  },
  {
    name: "People losing weight",
    tint: "#F2F0EB",
    ink: "#3D3D3D",
    icon: (
      <svg width="16" height="14" viewBox="0 0 72 64" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" aria-hidden>
        <rect x="8" y="10" width="56" height="46" rx="10" />
        <path d="M22 28a14 14 0 0 1 28 0" />
        <path d="M36 28l6-8" />
      </svg>
    ),
    worry: "Losing muscle too",
    message: "Lose fat, keep the muscle",
    focus: "Where weight came off",
  },
  {
    name: "Athletes",
    tint: "#E1E8F5",
    ink: "#28447A",
    icon: (
      <svg width="14" height="16" viewBox="0 0 60 66" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" aria-hidden>
        <circle cx="30" cy="38" r="22" />
        <path d="M24 6h12M30 6v10" />
        <path d="M30 38V26" />
      </svg>
    ),
    worry: "Is training working?",
    message: "Measure every training block",
    focus: "Lean mass and balance",
  },
]

function SegmentName({ s }: { s: (typeof SEGMENTS)[number] }) {
  return (
    <span className="flex items-start gap-2.5 font-medium text-foreground">
      <span className="w-7 h-7 -mt-1 rounded-md flex items-center justify-center shrink-0" style={{ background: s.tint, color: s.ink }}>
        {s.icon}
      </span>
      {s.name}
    </span>
  )
}

export function UserSegments() {
  return (
    <ExplainerStage bg="/images/veeqo-tile-voices.jpg">
      <ExplainerCard className="sm:!p-6">
        <ExplainerTitle>User segments</ExplainerTitle>

        {/* Desktop: a table, one segment per row */}
        <table className="hidden md:table w-full table-fixed text-[13px] leading-snug">
          <colgroup>
            <col className="w-[28%]" />
            <col className="w-[22%]" />
            <col className="w-[28%]" />
            <col className="w-[22%]" />
          </colgroup>
          <thead>
            <tr className="text-left text-[12px] text-muted-foreground">
              <th className="font-normal pb-2 pr-3">Segment</th>
              <th className="font-normal pb-2 pr-3">Worries</th>
              <th className="font-normal pb-2 pr-3">Message</th>
              <th className="font-normal pb-2">Next scan focus</th>
            </tr>
          </thead>
          <tbody>
            {SEGMENTS.map((s) => (
              <tr key={s.name} className="border-t border-black/10 align-top">
                <td className="py-3 pr-3">
                  <SegmentName s={s} />
                </td>
                <td className="py-3 pr-3 text-foreground/75">{s.worry}</td>
                <td className="py-3 pr-3 text-foreground">{s.message}</td>
                <td className="py-3 text-foreground/75">{s.focus}</td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Mobile: one block per segment */}
        <dl className="md:hidden divide-y divide-black/10 border-t border-black/10 text-[13px] leading-snug">
          {SEGMENTS.map((s) => (
            <div key={s.name} className="py-3">
              <dt>
                <SegmentName s={s} />
              </dt>
              <dd className="mt-2 text-foreground">{s.message}</dd>
              <dd className="mt-1.5 text-foreground/75">
                <span className="text-muted-foreground">Worries: </span>
                {s.worry}
              </dd>
              <dd className="mt-0.5 text-foreground/75">
                <span className="text-muted-foreground">Next scan focus: </span>
                {s.focus}
              </dd>
            </div>
          ))}
        </dl>
      </ExplainerCard>
    </ExplainerStage>
  )
}
