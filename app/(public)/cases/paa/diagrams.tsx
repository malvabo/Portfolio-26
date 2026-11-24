"use client"

import { ACCENT, ExplainerCard, ExplainerStage, ExplainerTag, ExplainerTitle } from "@/components/explainer-stage"

/* PAA: who does what, from assessment to the insurer report, as swimlanes */

type Lane = "clinician" | "platform" | "insurer"

const LANES: { id: Lane; label: string; note: string }[] = [
  { id: "clinician", label: "Clinician", note: "Judgement and sign-off" },
  { id: "platform", label: "PAA platform", note: "Record and AI" },
  { id: "insurer", label: "Insurer", note: "Approves care" },
]

const STEPS: { lane: Lane; title: string; detail: string; icon: "form" | "lock" | "ai" | "sign" | "send" }[] = [
  { lane: "clinician", title: "Completes the assessment", detail: "Filled in once, then submitted", icon: "form" },
  { lane: "platform", title: "The record locks", detail: "No edits after submit, so nothing can be adjusted to steer the result", icon: "lock" },
  { lane: "platform", title: "AI drafts the report", detail: "Recommendation and insurer report, built only from the locked record", icon: "ai" },
  { lane: "clinician", title: "Reviews and signs", detail: "Edits anything that's off. A person stays accountable", icon: "sign" },
  { lane: "insurer", title: "Gets a signed report", detail: "A report a named clinician has reviewed and signed", icon: "send" },
]

function Icon({ name }: { name: (typeof STEPS)[number]["icon"] }) {
  const common = { width: 16, height: 16, viewBox: "0 0 24 24", fill: "none", stroke: ACCENT, strokeWidth: 1.8, strokeLinecap: "round" as const, strokeLinejoin: "round" as const, "aria-hidden": true }
  switch (name) {
    case "form":
      return <svg {...common}><rect x="5" y="3" width="14" height="18" rx="2" /><path d="M9 8h6M9 12h6M9 16h3" /></svg>
    case "lock":
      return <svg {...common}><rect x="5" y="11" width="14" height="10" rx="2" /><path d="M8 11V8a4 4 0 0 1 8 0v3" /></svg>
    case "ai":
      return <svg {...common}><path d="M12 3l1.8 4.7L18.5 9.5l-4.7 1.8L12 16l-1.8-4.7L5.5 9.5l4.7-1.8z" /><path d="M18 15l.8 2.2L21 18l-2.2.8L18 21l-.8-2.2L15 18l2.2-.8z" /></svg>
    case "sign":
      return <svg {...common}><path d="M4 20h16" /><path d="M14.5 4.5l3 3L9 16l-4 1 1-4z" /></svg>
    case "send":
      return <svg {...common}><path d="M4 12l16-8-6 16-2.5-6.5z" /></svg>
  }
}

function Step({ n, step }: { n: number; step: (typeof STEPS)[number] }) {
  return (
    <div className="h-full rounded border border-black/10 bg-white p-3">
      <div className="flex items-center gap-2">
        <span className="grid place-items-center w-5 h-5 rounded-full text-[10px] font-mono text-white shrink-0" style={{ background: ACCENT }}>
          {n}
        </span>
        <Icon name={step.icon} />
      </div>
      <p className="mt-2 text-[13px] font-medium text-foreground leading-snug">{step.title}</p>
      <p className="mt-1 text-[12px] text-muted-foreground leading-snug">{step.detail}</p>
    </div>
  )
}

/** The old way, shown where the AI draft now sits */
function BeforeNote() {
  return (
    <div className="h-full rounded border border-dashed border-[#B4532A]/50 p-3">
      <ExplainerTag>Before</ExplainerTag>
      <p className="mt-2 text-[12px] text-[#B4532A] leading-snug">
        Clinicians rewrote the same assessment as an insurer report, by hand
      </p>
    </div>
  )
}

export function ReportFlow() {
  return (
    <ExplainerStage bg="/images/paa-tile-time.jpg">
      <ExplainerCard>
        <ExplainerTag accent>How a report gets made</ExplainerTag>
        <ExplainerTitle>AI does the drafting, the clinician keeps the judgement</ExplainerTitle>

        {/* Desktop: lanes as rows, steps as columns */}
        <div className="hidden md:grid grid-cols-[120px_repeat(5,minmax(0,1fr))] gap-x-2.5" role="list" aria-label="Report workflow">
          {LANES.map((lane, r) => (
            <div key={lane.id} className="contents">
              <div className={`py-3 pr-2 ${r > 0 ? "border-t border-black/10" : ""}`} style={{ gridRow: r + 1, gridColumn: 1 }}>
                <p className="text-[13px] font-medium text-foreground">{lane.label}</p>
                <p className="text-[11px] text-muted-foreground mt-0.5">{lane.note}</p>
              </div>
              {Array.from({ length: 5 }).map((_, c) => (
                <div key={c} className={`${r > 0 ? "border-t border-black/10" : ""}`} style={{ gridRow: r + 1, gridColumn: c + 2 }} aria-hidden />
              ))}
            </div>
          ))}
          {STEPS.map((s, i) => (
            <div
              key={s.title}
              role="listitem"
              className="py-3"
              style={{ gridRow: LANES.findIndex((l) => l.id === s.lane) + 1, gridColumn: i + 2 }}
            >
              <Step n={i + 1} step={s} />
            </div>
          ))}
          <div className="py-3" style={{ gridRow: 1, gridColumn: 4 }}>
            <BeforeNote />
          </div>
        </div>

        {/* Mobile: one column, each step names its lane */}
        <ol className="md:hidden space-y-2.5">
          {STEPS.map((s, i) => (
            <li key={s.title}>
              <p className="mb-1 text-[11px] font-mono uppercase tracking-wider text-muted-foreground">
                {LANES.find((l) => l.id === s.lane)!.label}
              </p>
              <Step n={i + 1} step={s} />
              {i === 2 && (
                <div className="mt-2.5">
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
