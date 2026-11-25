"use client"

import { ExplainerCard, ExplainerStage, ExplainerTag, ExplainerTitle } from "@/components/explainer-stage"

/* TempStars: the four steps to a first shift. Before shows where people left; after shows the fix at each step. */

const STEPS: { step: string; before: string; left?: boolean; after: string }[] = [
  { step: "Sign up", before: "Generic signup", after: "Skills asked up front" },
  { step: "Browse shifts", before: "Same list for everyone", left: true, after: "Matched based on skills" },
  { step: "Choose a clinic to work in", before: "Left the app to check clinic reviews", left: true, after: "Clinic reviews in the app" },
  { step: "Accept the terms", before: "Policy favoured clinics", left: true, after: "A clear, fair policy" },
]

const LEFT = "text-foreground"

export function FirstWeek() {
  return (
    <ExplainerStage bg="/images/veeqo-tile-speed.jpg">
      <ExplainerCard className="sm:!p-6">
        <ExplainerTitle>User journey</ExplainerTitle>

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
                <span className={`inline-block rounded py-0.5 ${s.left ? LEFT : "text-muted-foreground"}`}>{s.before}</span>
              </dd>
              <dd className="mt-1 font-medium text-[#28447A]">{s.after}</dd>
            </div>
          ))}
        </dl>
      </ExplainerCard>
    </ExplainerStage>
  )
}

/* TempStars: what hygienists check on a shift posting, grouped by how early the page answers it.
   The answers are what the new shift page shows (from the after screen); the grouping is the design's priority. */

const PRIORITIES = [
  {
    group: "Checked first",
    rows: [
      ["Will I get paid on time?", "Payment within 24 hours"],
      ["Is this a good clinic?", "Google rating and reviews"],
      ["Can I work with their tools?", "Radiography, ultrasonic, charting, software"],
    ],
  },
  {
    group: "Then",
    rows: [
      ["How do I get there?", "Neighbourhood map and parking"],
      ["Do I get a break?", "Lunch break, paid or unpaid"],
    ],
  },
  {
    group: "Nice to know",
    rows: [
      ["What's the team like?", "Tags like a friendly office"],
      ["Will I be protected?", "What the office will provide"],
    ],
  },
]

export function ShiftPriorities() {
  return (
    <ExplainerStage bg="/images/veeqo-tile-tickets.jpg">
      <ExplainerCard className="sm:!p-6">
        <ExplainerTitle>Shift page priorities</ExplainerTitle>
        <div className="text-[13px] leading-snug">
          {PRIORITIES.map((g) => (
            <div key={g.group} className="grid gap-2 md:grid-cols-[104px_minmax(0,1fr)] md:gap-4 border-t border-black/10 py-3.5">
              <p className="font-medium text-foreground">{g.group}</p>
              <ul className="space-y-2">
                {g.rows.map(([q, a]) => (
                  <li key={q} className="grid grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)] gap-3 items-baseline">
                    <span className="text-muted-foreground">{q}</span>
                    <span className="text-foreground">{a}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </ExplainerCard>
    </ExplainerStage>
  )
}
