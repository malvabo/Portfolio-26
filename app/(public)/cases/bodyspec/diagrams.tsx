"use client"

import { ExplainerCard, ExplainerStage, ExplainerTag, ExplainerTitle } from "@/components/explainer-stage"

/* BodySpec: the journey stage by stage. Columns are steps; the top row is how it worked before,
   the bottom row is what changed. Steps where we lost people are highlighted so the eye goes there first. */

const STAGES: { stage: string; before: string; broken?: boolean; after: string }[] = [
  { stage: "Find a location", before: "Search by hand", broken: true, after: "Starts from your location" },
  { stage: "Pick a time", before: "Hunt for open slots", broken: true, after: "Nearby slots on one screen" },
  { stage: "Check out", before: "Detailed info", after: "Only necessary info" },
  { stage: "Results", before: "One-off report", broken: true, after: "Change since your last scan" },
  { stage: "Come back", before: "No next step", broken: true, after: "A reason to book the next scan" },
]

const BROKEN = "text-foreground"

export function JourneyLoop() {
  return (
    <ExplainerStage bg="/hand-holding-phone-with-map-interface.jpg">
      <ExplainerCard className="sm:!p-6">
        <ExplainerTitle>User journey</ExplainerTitle>

        {/* Desktop: stages as columns */}
        <div className="hidden md:grid grid-cols-[72px_repeat(5,minmax(0,1fr))] gap-x-1.5 text-[12px] leading-snug" role="table" aria-label="Journey before and after">
          <div role="row" className="contents">
            <span role="columnheader" />
            {STAGES.map((s) => (
              <span key={s.stage} role="columnheader" className="pb-2 px-2 text-[12px] text-muted-foreground">
                {s.stage}
              </span>
            ))}
          </div>
          <div role="row" className="contents">
            <span role="rowheader" className="py-2.5 border-t border-black/10 flex items-center">
              <ExplainerTag>Before</ExplainerTag>
            </span>
            {STAGES.map((s) => (
              <span key={s.stage} role="cell" className="py-2.5 border-t border-black/10">
                <span className={`block rounded px-2 py-1.5 ${s.broken ? BROKEN : "text-muted-foreground"}`}>{s.before}</span>
              </span>
            ))}
          </div>
          <div role="row" className="contents">
            <span role="rowheader" className="py-2.5 border-t border-black/10 flex items-center">
              <ExplainerTag accent>After</ExplainerTag>
            </span>
            {STAGES.map((s) => (
              <span key={s.stage} role="cell" className="py-2.5 border-t border-black/10">
                <span className="block px-2 py-1.5 font-medium text-[#28447A]">{s.after}</span>
              </span>
            ))}
          </div>
        </div>

        {/* Mobile: one stage per row, before then after */}
        <dl className="md:hidden divide-y divide-black/10 border-t border-black/10 text-[13px] leading-snug">
          {STAGES.map((s) => (
            <div key={s.stage} className="py-2.5">
              <dt className="text-[12px] text-muted-foreground">{s.stage}</dt>
              <dd className="mt-1">
                <span className={`inline-block rounded py-0.5 ${s.broken ? BROKEN : "text-muted-foreground"}`}>{s.before}</span>
              </dd>
              <dd className="mt-1 font-medium text-[#28447A]">{s.after}</dd>
            </div>
          ))}
        </dl>
      </ExplainerCard>
    </ExplainerStage>
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
      <svg width="22" height="22" viewBox="0 0 72 72" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" aria-hidden>
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
      <svg width="24" height="18" viewBox="0 0 76 56" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" aria-hidden>
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
      <svg width="22" height="20" viewBox="0 0 72 64" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" aria-hidden>
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
      <svg width="20" height="22" viewBox="0 0 60 66" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" aria-hidden>
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
    <span className="flex items-center gap-2.5 font-medium text-foreground">
      <span className="w-9 h-9 rounded-md flex items-center justify-center shrink-0" style={{ background: s.tint, color: s.ink }}>
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
              <tr key={s.name} className="border-t border-black/10 align-middle">
                <td className="py-3 pr-3">
                  <SegmentName s={s} />
                </td>
                <td className="py-3 pr-3 text-foreground/75">{s.worry}</td>
                <td className="py-3 pr-3 font-medium text-[#28447A]">{s.message}</td>
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
              <dd className="mt-2 font-medium text-[#28447A]">{s.message}</dd>
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
