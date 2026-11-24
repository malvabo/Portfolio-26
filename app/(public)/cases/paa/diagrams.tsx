"use client"

import { ACCENT, ExplainerCard, ExplainerStage, ExplainerTag, ExplainerTitle } from "@/components/explainer-stage"

/* PAA: who does what, from assessment to the insurer report, as compact swimlanes */

type Lane = "clinician" | "platform" | "insurer"

const LANES: { id: Lane; label: string }[] = [
  { id: "clinician", label: "Clinician" },
  { id: "platform", label: "PAA platform" },
  { id: "insurer", label: "Insurer" },
]

const STEPS: { lane: Lane; title: string; detail: string }[] = [
  { lane: "clinician", title: "Completes the assessment", detail: "Filled in once" },
  { lane: "platform", title: "Record locks", detail: "No edits after submit" },
  { lane: "platform", title: "AI drafts the report", detail: "Only from the locked record" },
  { lane: "clinician", title: "Reviews and signs", detail: "A person stays accountable" },
  { lane: "insurer", title: "Gets a signed report", detail: "" },
]

function Step({ n, step }: { n: number; step: (typeof STEPS)[number] }) {
  return (
    <div className="h-full rounded border border-black/10 bg-white px-2.5 py-2">
      <p className="flex items-start gap-1.5 text-[12px] font-medium text-foreground leading-snug">
        <span className="mt-px grid place-items-center w-4 h-4 rounded-full text-[9px] font-mono text-white shrink-0" style={{ background: ACCENT }}>
          {n}
        </span>
        {step.title}
      </p>
      {step.detail && <p className="mt-1 pl-[22px] text-[11px] text-muted-foreground leading-snug">{step.detail}</p>}
    </div>
  )
}

/** The old way, shown where the AI draft now sits */
function BeforeNote() {
  return (
    <div className="h-full rounded border border-dashed border-[#B4532A]/50 px-2.5 py-2">
      <ExplainerTag>Before</ExplainerTag>
      <p className="mt-1.5 text-[11px] text-[#B4532A] leading-snug">Report rewritten by hand from the assessment</p>
    </div>
  )
}

export function ReportFlow() {
  return (
    <ExplainerStage bg="/images/paa-tile-time.jpg">
      <ExplainerCard>
        <ExplainerTag accent>How a report gets made</ExplainerTag>
        <ExplainerTitle>AI drafts, the clinician decides</ExplainerTitle>

        {/* Desktop: lanes as rows, steps as columns */}
        <div className="hidden md:grid grid-cols-[88px_repeat(5,minmax(0,1fr))] gap-x-2" role="list" aria-label="Report workflow">
          {LANES.map((lane, r) => (
            <div key={lane.id} className="contents">
              <p
                className={`py-2 pr-2 text-[12px] font-medium text-foreground/70 ${r > 0 ? "border-t border-black/10" : ""}`}
                style={{ gridRow: r + 1, gridColumn: 1 }}
              >
                {lane.label}
              </p>
              {Array.from({ length: 5 }).map((_, c) => (
                <div key={c} className={r > 0 ? "border-t border-black/10" : ""} style={{ gridRow: r + 1, gridColumn: c + 2 }} aria-hidden />
              ))}
            </div>
          ))}
          {STEPS.map((s, i) => (
            <div
              key={s.title}
              role="listitem"
              className="py-2"
              style={{ gridRow: LANES.findIndex((l) => l.id === s.lane) + 1, gridColumn: i + 2 }}
            >
              <Step n={i + 1} step={s} />
            </div>
          ))}
          <div className="py-2" style={{ gridRow: 1, gridColumn: 4 }}>
            <BeforeNote />
          </div>
        </div>

        {/* Mobile: one column, each step names its lane */}
        <ol className="md:hidden space-y-2">
          {STEPS.map((s, i) => (
            <li key={s.title}>
              <p className="mb-1 text-[10px] font-mono uppercase tracking-wider text-muted-foreground">
                {LANES.find((l) => l.id === s.lane)!.label}
              </p>
              <Step n={i + 1} step={s} />
              {i === 2 && (
                <div className="mt-2">
                  <BeforeNote />
                </div>
              )}
            </li>
          ))}
        </ol>
      </ExplainerCard>
    </ExplainerStage>
  )
}
