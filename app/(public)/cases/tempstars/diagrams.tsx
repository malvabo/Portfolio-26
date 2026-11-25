"use client"

import { ExplainerCard, ExplainerStage, ExplainerTag, ExplainerTitle } from "@/components/explainer-stage"

/* TempStars: the four steps to a first shift. Before shows where people left; after shows the fix at each step. */

const STEPS: { step: string; before: string; left?: boolean; after: string }[] = [
  { step: "Sign up", before: "Generic signup", after: "Skills asked up front" },
  { step: "Browse shifts", before: "Same list for everyone", left: true, after: "Matched based on skills" },
  { step: "Choose a clinic to work in", before: "Left the app to check clinic reviews", left: true, after: "Clinic reviews in the app" },
  { step: "Accept the terms", before: "Policy favoured clinics", left: true, after: "A clear, fair policy" },
]

const LEFT = "bg-[#F4E6D4] text-[#7A4B12]"

export function FirstWeek() {
  return (
    <ExplainerStage bg="/images/veeqo-tile-speed.jpg">
      <ExplainerCard className="sm:!p-6">
        <ExplainerTitle>Where new hygienists left before a first shift</ExplainerTitle>

        {/* Desktop: steps as columns, before and after as rows */}
        <div className="hidden md:grid grid-cols-[64px_repeat(4,minmax(0,1fr))] gap-x-1.5 text-[12px] leading-snug" role="table" aria-label="Steps to a first shift, before and after">
          <div role="row" className="contents">
            <span role="columnheader" />
            {STEPS.map((s) => (
              <span key={s.step} role="columnheader" className="rounded bg-[#F2F0EB] px-2 py-1.5 font-medium text-foreground">
                {s.step}
              </span>
            ))}
          </div>
          <div role="row" className="contents">
            <span role="rowheader" className="mt-2.5 pt-2.5 border-t border-black/10 flex items-start">
              <ExplainerTag>Before</ExplainerTag>
            </span>
            {STEPS.map((s) => (
              <span key={s.step} role="cell" className="mt-2.5 pt-2.5 border-t border-black/10">
                <span className={`block rounded px-2 py-1.5 ${s.left ? LEFT : "text-muted-foreground"}`}>{s.before}</span>
              </span>
            ))}
          </div>
          <div role="row" className="contents">
            <span role="rowheader" className="mt-2.5 pt-2.5 border-t border-black/10 flex items-start">
              <ExplainerTag accent>After</ExplainerTag>
            </span>
            {STEPS.map((s) => (
              <span key={s.step} role="cell" className="mt-2.5 pt-2.5 border-t border-black/10">
                <span className="block px-2 py-1.5 font-medium text-[#28447A]">{s.after}</span>
              </span>
            ))}
          </div>
        </div>

        {/* Mobile: one step per row */}
        <dl className="md:hidden divide-y divide-black/10 border-t border-black/10 text-[13px] leading-snug">
          {STEPS.map((s) => (
            <div key={s.step} className="py-2.5">
              <dt className="font-medium text-foreground">{s.step}</dt>
              <dd className="mt-1">
                <span className={`inline-block rounded py-0.5 ${s.left ? `px-1.5 ${LEFT}` : "text-muted-foreground"}`}>{s.before}</span>
              </dd>
              <dd className="mt-1 font-medium text-[#28447A]">{s.after}</dd>
            </div>
          ))}
        </dl>
      </ExplainerCard>
    </ExplainerStage>
  )
}
