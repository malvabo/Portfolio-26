"use client"

import type { ReactNode } from "react"
import { ACCENT, ExplainerCard, ExplainerStage, ExplainerTag, ExplainerTitle } from "@/components/explainer-stage"

/* PAA: one report, five steps in a row. Brackets underneath show who owns each step:
   a clinician owns the first and the last call, the platform does the work in between. */

type Owner = "clinician" | "platform" | "insurer"

const OWNER: Record<Owner, { label: string; color: string }> = {
  clinician: { label: "Clinician", color: "#3D3D3D" },
  platform: { label: "PAA platform", color: ACCENT },
  insurer: { label: "Insurer", color: "#9A968D" },
}

const STEPS: { owner: Owner; title: string; detail: string; icon?: "lock" | "ai" }[] = [
  { owner: "clinician", title: "Assessment", detail: "Filled in once" },
  { owner: "platform", title: "Record locks", detail: "No edits after submit", icon: "lock" },
  { owner: "platform", title: "AI drafts the report", detail: "Only from the locked record", icon: "ai" },
  { owner: "clinician", title: "Review and sign", detail: "A person stays accountable" },
  { owner: "insurer", title: "Signed report", detail: "Sent to the insurer" },
]

// Owner brackets along the row: [first column, span]
const BRACKETS: { owner: Owner; col: number; span: number }[] = [
  { owner: "clinician", col: 1, span: 1 },
  { owner: "platform", col: 2, span: 2 },
  { owner: "clinician", col: 4, span: 1 },
  { owner: "insurer", col: 5, span: 1 },
]

function Glyph({ icon }: { icon?: "lock" | "ai" }) {
  if (!icon) return null
  const p = { width: 12, height: 12, viewBox: "0 0 24 24", fill: "none", stroke: ACCENT, strokeWidth: 2, strokeLinecap: "round" as const, strokeLinejoin: "round" as const, "aria-hidden": true }
  return icon === "lock" ? (
    <svg {...p}><rect x="5" y="11" width="14" height="10" rx="2" /><path d="M8 11V8a4 4 0 0 1 8 0v3" /></svg>
  ) : (
    <svg {...p}><path d="M12 3l1.8 4.7L18.5 9.5l-4.7 1.8L12 16l-1.8-4.7L5.5 9.5l4.7-1.8z" /></svg>
  )
}

function Dot({ n, owner }: { n: number; owner: Owner }) {
  return (
    <span
      className="relative z-10 grid place-items-center w-6 h-6 rounded-full text-[11px] font-mono text-white ring-4 ring-white"
      style={{ background: OWNER[owner].color }}
    >
      {n}
    </span>
  )
}

function StepText({ step }: { step: (typeof STEPS)[number] }) {
  return (
    <>
      <p className="flex items-center gap-1.5 text-[13px] font-medium text-foreground leading-snug">
        {step.title}
        <Glyph icon={step.icon} />
      </p>
      <p className="mt-0.5 text-[12px] text-muted-foreground leading-snug">{step.detail}</p>
    </>
  )
}

function Before({ children }: { children: ReactNode }) {
  return (
    <div className="rounded border border-dashed border-[#B4532A]/50 px-3 py-2">
      <ExplainerTag>Before</ExplainerTag>
      <p className="mt-1.5 text-[12px] text-[#B4532A] leading-snug">{children}</p>
    </div>
  )
}

export function ReportFlow() {
  return (
    <ExplainerStage bg="/images/paa-tile-time.jpg">
      <ExplainerCard className="sm:!p-6">
        <ExplainerTag accent>How a report gets made</ExplainerTag>
        <ExplainerTitle>AI drafts, the clinician decides</ExplainerTitle>

        {/* Desktop: one row of steps on a line, owner brackets below */}
        <div className="hidden md:block">
          <ol className="relative grid grid-cols-5 gap-4" aria-label="Report workflow">
            <span className="absolute left-3 right-3 top-3 h-px bg-black/15" aria-hidden />
            {STEPS.map((s, i) => (
              <li key={s.title}>
                <Dot n={i + 1} owner={s.owner} />
                <div className="mt-3">
                  <StepText step={s} />
                </div>
              </li>
            ))}
          </ol>

          <div className="mt-5 grid grid-cols-5 gap-4" aria-hidden>
            {BRACKETS.map((b, k) => (
              <div key={k} style={{ gridColumn: `${b.col} / span ${b.span}` }}>
                <div className="h-2 border-x border-b rounded-b-sm" style={{ borderColor: OWNER[b.owner].color }} />
                <p className="mt-1.5 text-[10px] font-mono uppercase tracking-wider text-center" style={{ color: OWNER[b.owner].color }}>
                  {OWNER[b.owner].label}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-5 grid grid-cols-5 gap-4">
            <div style={{ gridColumn: "2 / span 2" }}>
              <Before>Clinicians rewrote the assessment as the report, by hand</Before>
            </div>
          </div>
        </div>

        {/* Mobile: the same steps down a line, owner named on each */}
        <ol className="md:hidden relative space-y-4" aria-label="Report workflow">
          <span className="absolute left-3 top-3 bottom-3 w-px bg-black/15" aria-hidden />
          {STEPS.map((s, i) => (
            <li key={s.title} className="relative flex gap-3">
              <Dot n={i + 1} owner={s.owner} />
              <div className="min-w-0">
                <p className="text-[10px] font-mono uppercase tracking-wider" style={{ color: OWNER[s.owner].color }}>
                  {OWNER[s.owner].label}
                </p>
                <StepText step={s} />
              </div>
            </li>
          ))}
        </ol>
        <div className="md:hidden mt-4">
          <Before>Clinicians rewrote the assessment as the report, by hand</Before>
        </div>
      </ExplainerCard>
    </ExplainerStage>
  )
}
