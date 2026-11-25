"use client"

import type { ReactNode } from "react"
import { ExplainerCard, ExplainerStage, ExplainerTag, ExplainerTitle } from "@/components/explainer-stage"

/* PAA: where the clinician's time went, before and after. Blue blocks are work a clinician does by hand,
   white blocks are done by the platform. The rewrite disappears; the judgement stays with a person. */

type Kind = "clinician" | "platform" | "end"

function Block({ kind, children, sub }: { kind: Kind; children: ReactNode; sub?: string }) {
  const style =
    kind === "clinician"
      ? "bg-[#E1E8F5] text-[#28447A] border-transparent"
      : kind === "platform"
        ? "bg-white text-foreground border-black/15 border-dashed"
        : "bg-transparent text-muted-foreground border-transparent px-0"
  return (
    <span className={`inline-flex flex-col shrink-0 rounded-md border px-2.5 py-2 ${style}`}>
      <span className="text-[13px] font-medium leading-tight">{children}</span>
      {sub && <span className="mt-0.5 text-[11px] leading-tight opacity-75">{sub}</span>}
    </span>
  )
}

function To() {
  return (
    <svg width="16" height="10" viewBox="0 0 16 10" fill="none" aria-hidden className="shrink-0 text-black/30 rotate-90 ml-4 md:rotate-0 md:ml-0">
      <path d="M1 5h13M10 1l4 4-4 4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function Row({ tag, accent, children }: { tag: string; accent?: boolean; children: ReactNode }) {
  return (
    <div className="grid gap-2 md:grid-cols-[64px_minmax(0,1fr)] md:items-center">
      <div>
        <ExplainerTag accent={accent}>{tag}</ExplainerTag>
      </div>
      <div className="flex flex-col items-start gap-1 md:flex-row md:flex-wrap lg:flex-nowrap md:items-center md:gap-1.5">{children}</div>
    </div>
  )
}

export function ReportFlow() {
  return (
    <ExplainerStage bg="/images/paa-tile-time.jpg">
      <ExplainerCard className="sm:!p-6">
        <ExplainerTitle>Clinicians stopped writing the same facts twice</ExplainerTitle>

        <div className="space-y-4">
          <Row tag="Before">
            <Block kind="clinician">Assessment</Block>
            <To />
            <Block kind="clinician" sub="The assessment, retyped">Insurer report by hand</Block>
            <To />
            <Block kind="end">Insurer</Block>
          </Row>

          <div className="h-px bg-black/10" aria-hidden />

          <Row tag="After" accent>
            <Block kind="clinician">Assessment</Block>
            <To />
            <Block kind="platform" sub="No edits after submit">Record locks</Block>
            <To />
            <Block kind="platform" sub="From the locked record">AI drafts the report</Block>
            <To />
            <Block kind="clinician">Review and sign</Block>
            <To />
            <Block kind="end">Insurer</Block>
          </Row>
        </div>
      </ExplainerCard>
    </ExplainerStage>
  )
}
