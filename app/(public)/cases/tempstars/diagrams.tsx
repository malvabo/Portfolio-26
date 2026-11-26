"use client"

import type { ReactNode } from "react"


/* TempStars: the four steps to a first shift. Before shows where people left; after shows the fix at each step. */

const STEPS: { step: string; before: string; left?: boolean; after: string }[] = [
  { step: "Sign up", before: "Generic signup", after: "Skills asked up front" },
  { step: "Browse shifts", before: "Same list for everyone", left: true, after: "Matched based on skills" },
  { step: "Choose a clinic to work in", before: "Left the app to check clinic reviews", left: true, after: "Clinic reviews in the app" },
  { step: "Accept the terms", before: "Policy favoured clinics", left: true, after: "A clear, fair policy" },
]

function Tick() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden className="mt-0.5 shrink-0">
      <path d="M2.5 7.5l3 3 6-7" stroke="#28447A" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function Cross() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden className="mt-0.5 shrink-0">
      <path d="M3.5 3.5l7 7M10.5 3.5l-7 7" stroke="#9a958d" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}

function JourneyArrow() {
  return (
    <div className="flex justify-center">
      <span className="grid place-items-center w-10 h-10 rounded-full bg-white shadow-[0_4px_14px_rgba(0,0,0,0.2)] rotate-90 md:rotate-0">
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden>
          <path d="M3 9h12M10 4l5 5-5 5" stroke="#28447A" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </span>
    </div>
  )
}

/** User journey as a before and after pair, the same layout as the doc case */
export function FirstWeek() {
  const side = (after: boolean) => (
    <DocCard className="self-stretch">
      <DocTag accent={after}>{after ? "After" : "Before"}</DocTag>
      <p className="font-serif text-[1.125rem] tracking-[-0.01em] mt-1 mb-4">
        {after ? "What we changed" : "Where people left"}
      </p>
      <ol className="space-y-2.5">
        {STEPS.map((st) => (
          <li key={st.step} className="rounded border border-black/10 p-3">
            <p className="text-[12px] text-muted-foreground">{st.step}</p>
            <p className={`mt-1 flex items-start gap-2 text-[13px] leading-snug ${after || st.left ? "text-foreground" : "text-muted-foreground"}`}>
              {after ? <Tick /> : st.left ? <Cross /> : <span className="w-3.5 shrink-0" aria-hidden />}
              {after ? st.after : st.before}
            </p>
          </li>
        ))}
      </ol>
    </DocCard>
  )
  return (
    <DocStage bg="/images/veeqo-tile-speed.jpg" className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-4 md:gap-3 items-center">
      {side(false)}
      <JourneyArrow />
      {side(true)}
    </DocStage>
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
    <DocStage bg="/images/veeqo-tile-tickets.jpg">
      <p className="mb-3 text-[13px] text-white/90">Shift page priorities, ranked from survey results across hygienists</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-3">
        {PRIORITIES.map((g, gi) => (
          <DocCard key={g.group} className={gi === 0 ? "ring-2 ring-[#28447A]/40" : ""}>
            <DocTag accent={gi === 0}>{g.group}</DocTag>
            <ul className="mt-4 space-y-3">
              {g.rows.map(([q, a]) => (
                <li key={q} className="border-t border-black/10 pt-3 first:border-0 first:pt-0">
                  <p className="text-[12px] text-muted-foreground">{q}</p>
                  <p className="mt-0.5 text-[13px] leading-snug text-foreground">{a}</p>
                </li>
              ))}
            </ul>
          </DocCard>
        ))}
      </div>
    </DocStage>
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

/* Cohort analysis: how many shifts each hygienist worked in 3 months, split into three cohorts.
   Read from the shifts chart in the case; the chart hides counts under 1%, so 13+ is the remainder. */

const SHIFT_COHORTS = [
  {
    tag: "Occasional",
    often: "A shift now and then",
    share: "41%",
    range: "1–2 shifts",
    bars: [["1", 26], ["2", 15]] as [string, number][],
    fill: "#C7CFDD",
    needs: "No risk on a rare shift",
    dropped: "One-sided policy, no reviews to judge a clinic",
    built: "A clear, fair policy and clinic reviews in the app",
  },
  {
    tag: "Frequent",
    often: "Several times a month",
    share: "42%",
    range: "3–12 shifts",
    bars: [["3", 10], ["4", 9.8], ["5", 4.8], ["6", 3.9], ["7", 2.9], ["8", 2.6], ["9", 2.9], ["10", 2.5], ["11", 1.9], ["12", 1.2]] as [string, number][],
    fill: "#7D93BC",
    needs: "Clinics they can trust, fast",
    dropped: "Left the app to check clinic reviews",
    built: "Clinic reviews in the app",
  },
  {
    tag: "Daily freelancers",
    often: "Most days",
    share: "~17%",
    range: "13+ shifts",
    bars: [["13+", 17]] as [string, number][],
    fill: INK,
    accent: true,
    needs: "A steady pipeline of shifts that fit",
    dropped: "Generic list, too much noise",
    built: "Favourite offices, to rebook the ones they like",
  },
]

const MAX_SHARE = 26

export function CohortAnalysis() {
  return (
    <DocStage bg="/images/veeqo-tile-segments.jpg" className="grid grid-cols-1 md:grid-cols-[1.25fr_2.3fr_1.25fr] gap-4 md:gap-3 items-stretch">
      {SHIFT_COHORTS.map((c) => (
        <DocCard key={c.tag} className="flex flex-col">
          <DocTag accent={c.accent}>{c.tag}</DocTag>
          <p className="mt-1.5 text-[12px] text-muted-foreground">{c.often}</p>
          <p className="font-serif text-[1.5rem] tracking-[-0.01em] leading-none mt-4">{c.share}</p>
          <p className="mt-1.5 text-[12px] text-muted-foreground">of hygienists · {c.range}</p>
          {/* Bars share one scale across all three cards, so heights compare */}
          <div
            className="pt-5 flex items-end gap-1.5 h-[156px] border-b border-black/15"
            role="img"
            aria-label={`${c.tag}: ${c.bars.map(([n, v]) => `${n} shifts ${v}%`).join(", ")}`}
          >
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
          <p className="mt-1 text-[11px] text-muted-foreground text-center">shifts in 3 months</p>

          <dl className="mt-4 pt-4 border-t border-black/10 space-y-3 text-[13px] leading-snug">
            <div>
              <dt className="text-[12px] text-muted-foreground">Needs</dt>
              <dd className="text-foreground/80">{c.needs}</dd>
            </div>
            <div>
              <dt className="text-[12px] text-muted-foreground">Drop-off point</dt>
              <dd className="text-foreground/80">{c.dropped}</dd>
            </div>
            <div>
              <dt className="text-[12px] text-muted-foreground">What we built</dt>
              <dd className="text-foreground">{c.built}</dd>
            </div>
          </dl>
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

/* Dots on the plot: x is effort, y is impact, both 0–100 */
const PLOT = [
  { label: "Fair cancellation policy", x: 14, y: 90, first: true },
  { label: "Clinic reviews in the app", x: 30, y: 76, first: true },
  { label: "Shift page with equipment, pay and parking", x: 22, y: 34 },
  { label: "Skills taxonomy and weighted matching", x: 72, y: 86 },
  { label: "New signup and onboarding", x: 62, y: 66 },
  { label: "Favourite offices", x: 70, y: 24 },
]

export function ImpactEffort() {
  return (
    <DocStage bg="/images/veeqo-tile-market.jpg">
      <DocCard className="sm:!p-6">
        <p className="font-serif text-[1.125rem] tracking-[-0.01em] mb-5">Impact and effort</p>

        {/* Desktop: a real 2x2 plot */}
        <div className="hidden md:grid grid-cols-[22px_minmax(0,1fr)] gap-2">
          <span className="flex items-center justify-center text-[12px] text-muted-foreground [writing-mode:vertical-rl] rotate-180">
            Impact on activation
          </span>
          <div>
            <div className="relative h-[320px] border-l border-b border-black/20">
              <div className="absolute left-0 top-0 w-1/2 h-1/2 bg-[#28447A]/[0.07]" aria-hidden />
              <div className="absolute left-1/2 top-0 bottom-0 border-l border-dashed border-black/10" aria-hidden />
              <div className="absolute top-1/2 left-0 right-0 border-t border-dashed border-black/10" aria-hidden />
              <span className="absolute left-3 top-2.5"><DocTag accent>Do first</DocTag></span>
              <span className="absolute left-[calc(50%+12px)] top-2.5"><DocTag>Plan for</DocTag></span>
              <span className="absolute left-3 top-[calc(50%+10px)]"><DocTag>Quick wins</DocTag></span>
              <span className="absolute left-[calc(50%+12px)] top-[calc(50%+10px)]"><DocTag>Later</DocTag></span>
              {PLOT.map((d) => (
                <span
                  key={d.label}
                  className="absolute flex items-center gap-2 -translate-y-1/2 text-[12px] leading-snug text-foreground/85 max-w-[44%]"
                  style={{ left: `${d.x}%`, top: `${100 - d.y}%` }}
                >
                  <span className="w-2.5 h-2.5 rounded-full shrink-0" style={{ background: d.first ? INK : "#7D93BC" }} aria-hidden />
                  {d.label}
                </span>
              ))}
            </div>
            <div className="flex justify-between mt-2 text-[12px] text-muted-foreground">
              <span>Low effort</span>
              <span>More effort</span>
            </div>
          </div>
        </div>

        {/* Mobile: the four groups as a list */}
        <div className="md:hidden space-y-4">
          {QUADRANTS.map((q) => (
            <div key={q.tag}>
              <DocTag accent={q.accent}>{q.tag}</DocTag>
              <p className="mt-1.5 text-[12px] text-muted-foreground">{q.note}</p>
              <ul className="mt-2 space-y-1.5">
                {q.items.map((it) => (
                  <li key={it} className="flex items-start gap-2 text-[13px] leading-snug text-foreground/85">
                    <span className="mt-1.5 w-2 h-2 rounded-full shrink-0" style={{ background: q.accent ? INK : "#7D93BC" }} aria-hidden />
                    {it}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </DocCard>
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

