"use client"

import { ExplainerCard, ExplainerStage, ExplainerTag, ExplainerTitle } from "@/components/explainer-stage"

/* BodySpec: the journey stage by stage. Columns are steps; the top row is how it worked before,
   the bottom row is what changed. Steps where we lost people are highlighted so the eye goes there first. */

const STAGES: { stage: string; before: string; broken?: boolean; after: string }[] = [
  { stage: "Find a location", before: "Manual search", broken: true, after: "Uses your location" },
  { stage: "Pick a time", before: "Hunt for open slots", broken: true, after: "Nearby slots on one screen" },
  { stage: "Check out", before: "Extra fields", after: "Unneeded fields dropped" },
  { stage: "Results", before: "One-off report", broken: true, after: "Progress since the last scan" },
  { stage: "Come back", before: "No next step", broken: true, after: "A reason to book again" },
]

const BROKEN = "bg-[#F4E6D4] text-[#7A4B12]"

export function JourneyLoop() {
  return (
    <ExplainerStage bg="/hand-holding-phone-with-map-interface.jpg">
      <ExplainerCard className="sm:!p-6">
        <div className="flex flex-wrap items-start justify-between gap-x-6 gap-y-2">
          <ExplainerTitle>Where the journey broke, and what changed</ExplainerTitle>
          <span className="inline-flex items-center gap-1.5 text-[11px] text-muted-foreground" aria-hidden>
            <span className="w-3 h-3 rounded-sm bg-[#F4E6D4]" /> Where we lost people
          </span>
        </div>

        {/* Desktop: stages as columns */}
        <div className="hidden md:grid grid-cols-[72px_repeat(5,minmax(0,1fr))] gap-x-1.5 text-[12px] leading-snug" role="table" aria-label="Journey before and after">
          <div role="row" className="contents">
            <span role="columnheader" />
            {STAGES.map((s) => (
              <span key={s.stage} role="columnheader" className="pb-2 px-2 text-[10px] font-mono uppercase tracking-wider text-muted-foreground">
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
              <dt className="text-[10px] font-mono uppercase tracking-wider text-muted-foreground">{s.stage}</dt>
              <dd className="mt-1">
                <span className={`inline-block rounded py-0.5 ${s.broken ? `px-1.5 ${BROKEN}` : "text-muted-foreground"}`}>{s.before}</span>
              </dd>
              <dd className="mt-1 font-medium text-[#28447A]">{s.after}</dd>
            </div>
          ))}
        </dl>
      </ExplainerCard>
    </ExplainerStage>
  )
}
