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

/* TempStars cohorts: hygienists grouped by how often they work, what each needs,
   where they dropped off, and the fix that mattered most for them. */

const COHORTS = [
  {
    name: "Daily freelancers",
    sub: "Work most days",
    swatch: "#28447A",
    needs: "A steady pipeline of shifts that fit",
    dropped: "Generic list, too much noise",
    fix: "Favourite offices, to save the ones they want to work with again",
  },
  {
    name: "Frequent",
    sub: "Several times a month",
    swatch: "#8FA3C7",
    needs: "Clinics they can trust, fast",
    dropped: "Left to check clinic reviews",
    fix: "Clinic reviews in the app",
  },
  {
    name: "Occasional",
    sub: "A shift now and then",
    swatch: "#C9C2B6",
    needs: "No risk on a rare shift",
    dropped: "One-sided policy, no reviews to judge a clinic",
    fix: "A clear, fair policy and clinic reviews in the app",
  },
]

function CohortName({ c }: { c: (typeof COHORTS)[number] }) {
  return (
    <span className="block">
      <span className="flex items-center gap-2 font-medium text-foreground">
        <span className="w-2.5 h-2.5 rounded-sm shrink-0" style={{ background: c.swatch }} aria-hidden />
        {c.name}
      </span>
      <span className="block ml-[18px] mt-0.5 text-[12px] text-muted-foreground">{c.sub}</span>
    </span>
  )
}

export function Cohorts() {
  return (
    <ExplainerStage bg="/images/veeqo-tile-segments.jpg">
      <ExplainerCard className="sm:!p-6">
        <ExplainerTitle>Cohorts</ExplainerTitle>

        {/* Desktop: a table, one cohort per row */}
        <table className="hidden md:table w-full table-fixed text-[13px] leading-snug">
          <colgroup>
            <col className="w-[27%]" />
            <col className="w-[24%]" />
            <col className="w-[23%]" />
            <col className="w-[26%]" />
          </colgroup>
          <thead>
            <tr className="text-left text-[12px] text-muted-foreground">
              <th className="font-normal pb-2 pr-3">Cohort</th>
              <th className="font-normal pb-2 pr-3">Needs</th>
              <th className="font-normal pb-2 pr-3">Where they dropped</th>
              <th className="font-normal pb-2">Fix that mattered</th>
            </tr>
          </thead>
          <tbody>
            {COHORTS.map((c) => (
              <tr key={c.name} className="border-t border-black/10 align-top">
                <td className="py-3 pr-3">
                  <CohortName c={c} />
                </td>
                <td className="py-3 pr-3 text-foreground/75">{c.needs}</td>
                <td className="py-3 pr-3 text-foreground/75">{c.dropped}</td>
                <td className="py-3 text-foreground">{c.fix}</td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Mobile: one block per cohort */}
        <dl className="md:hidden divide-y divide-black/10 border-t border-black/10 text-[13px] leading-snug">
          {COHORTS.map((c) => (
            <div key={c.name} className="py-3">
              <dt>
                <CohortName c={c} />
              </dt>
              <dd className="mt-2 text-foreground/75">
                <span className="text-muted-foreground">Needs: </span>
                {c.needs}
              </dd>
              <dd className="mt-0.5 text-foreground/75">
                <span className="text-muted-foreground">Where they dropped: </span>
                {c.dropped}
              </dd>
              <dd className="mt-0.5 text-foreground">
                <span className="text-muted-foreground">Fix that mattered: </span>
                {c.fix}
              </dd>
            </div>
          ))}
        </dl>
      </ExplainerCard>
    </ExplainerStage>
  )
}
