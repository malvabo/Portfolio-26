"use client"

import type { ReactNode } from "react"
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

/* ---------- Doc-case style pieces: photo stage, floating white cards, square tags ---------- */

const INK = "#28447A"

function DocStage({ bg, children, className = "" }: { bg: string; children: ReactNode; className?: string }) {
  return (
    <div className="relative rounded-lg overflow-hidden">
      <img src={bg} alt="" aria-hidden className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-black/25" aria-hidden />
      <div className={`relative p-4 sm:p-6 md:p-8 ${className}`}>{children}</div>
    </div>
  )
}

function DocCard({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <div className={`bg-white rounded-md border border-black/10 shadow-[0_8px_24px_rgba(0,0,0,0.18)] p-4 ${className}`}>{children}</div>
  )
}

function DocTag({ children, accent = false }: { children: ReactNode; accent?: boolean }) {
  return (
    <span className="inline-block self-start text-white text-[11px] font-medium px-1.5 py-0.5 leading-none" style={{ background: accent ? INK : "#3D3D3D" }}>
      {children}
    </span>
  )
}

/* Cohort analysis: how many shifts each hygienist worked in 24 months, split into three cohorts.
   Read from the shifts chart in the case; the chart hides counts under 1%, so 13+ is the remainder. */

const SHIFT_COHORTS = [
  { tag: "Occasional", share: "41%", range: "1–2 shifts", bars: [["1", 26], ["2", 15]] as [string, number][], fill: "#C7CFDD" },
  {
    tag: "Regular",
    share: "42%",
    range: "3–12 shifts",
    bars: [["3", 10], ["4", 9.8], ["5", 4.8], ["6", 3.9], ["7", 2.9], ["8", 2.6], ["9", 2.9], ["10", 2.5], ["11", 1.9], ["12", 1.2]] as [string, number][],
    fill: "#7D93BC",
  },
  { tag: "Frequent", share: "~17%", range: "13+ shifts", bars: [["13+", 17]] as [string, number][], fill: INK, accent: true },
]

const MAX_SHARE = 26

export function CohortAnalysis() {
  return (
    <DocStage bg="/images/veeqo-tile-segments.jpg" className="grid grid-cols-1 md:grid-cols-[2fr_5fr_1.6fr] gap-4 md:gap-3 items-stretch">
      {SHIFT_COHORTS.map((c) => (
        <DocCard key={c.tag} className="flex flex-col">
          <DocTag accent={c.accent}>{c.tag}</DocTag>
          <p className="font-serif text-[1.5rem] tracking-[-0.01em] leading-none mt-3">{c.share}</p>
          <p className="mt-1.5 text-[12px] text-muted-foreground">of hygienists · {c.range}</p>
          {/* Bars share one scale across all three cards, so heights compare */}
          <div className="mt-auto pt-5 flex items-end gap-1.5 h-[156px] border-b border-black/15" role="img" aria-label={`${c.tag}: ${c.bars.map(([n, v]) => `${n} shifts ${v}%`).join(", ")}`}>
            {c.bars.map(([n, v]) => (
              <div key={n} className="flex-1 min-w-0 flex flex-col items-center justify-end h-full">
                <span className="text-[10px] sm:text-[11px] font-medium text-foreground mb-1 tabular-nums">{v}%</span>
                <span className="w-full rounded-t-sm" style={{ height: `${(v / MAX_SHARE) * 112}px`, background: c.fill }} />
              </div>
            ))}
          </div>
          <div className="flex gap-1.5 mt-1.5" aria-hidden>
            {c.bars.map(([n]) => (
              <span key={n} className="flex-1 min-w-0 text-center text-[10px] sm:text-[11px] text-muted-foreground tabular-nums">
                {n}
              </span>
            ))}
          </div>
          <p className="mt-1 text-[11px] text-muted-foreground text-center">shifts in 24 months</p>
        </DocCard>
      ))}
    </DocStage>
  )
}

/* Impact and effort: the changes placed by their impact on activation and the effort they took.
   Placement is a reading of the case, which says the policy came first. */

const QUADRANTS = [
  {
    tag: "Do first",
    note: "High impact, low effort",
    accent: true,
    items: ["Fair cancellation policy, to rebuild trust", "Clinic reviews in the app, so the decision stays in the app"],
  },
  {
    tag: "Plan for",
    note: "High impact, more effort",
    items: ["Skills taxonomy and weighted matching", "New signup and onboarding that capture skills"],
  },
  { tag: "Quick wins", note: "Lower impact, low effort", items: ["Shift page with equipment, pay and parking up front"] },
  { tag: "Later", note: "Lower impact, more effort", items: ["Favourite offices, for repeat bookings"] },
]

export function ImpactEffort() {
  return (
    <DocStage bg="/images/veeqo-tile-market.jpg">
      <div className="hidden md:grid grid-cols-[1fr_1fr] gap-3 mb-2 pl-8 text-[12px] text-white/85">
        <span>Low effort</span>
        <span>More effort</span>
      </div>
      <div className="md:grid md:grid-cols-[20px_1fr_1fr] md:gap-3 space-y-4 md:space-y-0">
        <span className="hidden md:flex row-span-2 items-center justify-center text-[12px] text-white/85 [writing-mode:vertical-rl] rotate-180">
          Impact on activation
        </span>
        {QUADRANTS.map((q) => (
          <DocCard key={q.tag} className={q.accent ? "ring-2 ring-[#28447A]/40" : ""}>
            <DocTag accent={q.accent}>{q.tag}</DocTag>
            <p className="mt-2 text-[12px] text-muted-foreground">{q.note}</p>
            <ul className="mt-3 space-y-2">
              {q.items.map((it) => (
                <li key={it} className="flex items-start gap-2 text-[13px] leading-snug text-foreground/85">
                  {q.accent ? (
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden className="mt-0.5 shrink-0">
                      <path d="M2.5 7.5l3 3 6-7" stroke={INK} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  ) : (
                    <span className="mt-1 w-3 h-3 rounded-full border border-black/25 shrink-0" />
                  )}
                  {it}
                </li>
              ))}
            </ul>
          </DocCard>
        ))}
      </div>
    </DocStage>
  )
}

/* TempStars cohorts: hygienists grouped by how often they work. Same table style as the doc case. */

const COHORTS = [
  {
    name: "Occasional",
    often: "A shift now and then",
    needs: "No risk on a rare shift",
    dropped: "One-sided policy, no reviews to judge a clinic",
    built: "A clear, fair policy and clinic reviews in the app",
  },
  {
    name: "Frequent",
    often: "Several times a month",
    needs: "Clinics they can trust, fast",
    dropped: "Left the app to check clinic reviews",
    built: "Clinic reviews in the app",
  },
  {
    name: "Daily freelancers",
    often: "Most days",
    needs: "A steady pipeline of shifts that fit",
    dropped: "Generic list, too much noise",
    built: "Favourite offices, to rebook the ones they like",
    accent: true,
  },
]

const COHORT_ROWS: { label: string; key: "needs" | "dropped" | "built" }[] = [
  { label: "Needs", key: "needs" },
  { label: "Drop-off point", key: "dropped" },
  { label: "What we built", key: "built" },
]

export function Cohorts() {
  const cols = "grid grid-cols-[120px_repeat(3,minmax(0,1fr))]"
  return (
    <DocStage bg="/images/veeqo-tile-segments.jpg">
      <DocCard className="!p-0 overflow-hidden">
        {/* Desktop: cohorts as columns */}
        <div role="table" aria-label="Cohorts compared" className="hidden md:block">
          <div role="row" className={`${cols} border-b border-black/10`}>
            <div role="columnheader" className="p-4" />
            {COHORTS.map((c) => (
              <div key={c.name} role="columnheader" className="p-4 border-l border-black/10">
                <DocTag accent={c.accent}>{c.name}</DocTag>
                <p className="mt-2 text-[12px] text-muted-foreground">{c.often}</p>
              </div>
            ))}
          </div>
          {COHORT_ROWS.map((r, k) => (
            <div role="row" key={r.key} className={`${cols} ${k < COHORT_ROWS.length - 1 ? "border-b border-black/10" : ""}`}>
              <div role="rowheader" className="p-4 text-[13px] leading-snug text-muted-foreground">
                {r.label}
              </div>
              {COHORTS.map((c) => (
                <div
                  key={c.name}
                  role="cell"
                  className={`p-4 border-l border-black/10 text-[13px] leading-snug ${r.key === "built" ? "text-foreground" : "text-foreground/80"}`}
                >
                  {c[r.key]}
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* Mobile: one block per cohort */}
        <div className="md:hidden divide-y divide-black/10">
          {COHORTS.map((c) => (
            <div key={c.name} className="p-4">
              <DocTag accent={c.accent}>{c.name}</DocTag>
              <p className="mt-2 text-[12px] text-muted-foreground">{c.often}</p>
              <dl className="mt-3 space-y-2 text-[13px] leading-snug">
                {COHORT_ROWS.map((r) => (
                  <div key={r.key}>
                    <dt className="text-[12px] text-muted-foreground">{r.label}</dt>
                    <dd className={r.key === "built" ? "text-foreground" : "text-foreground/80"}>{c[r.key]}</dd>
                  </div>
                ))}
              </dl>
            </div>
          ))}
        </div>
      </DocCard>
    </DocStage>
  )
}

