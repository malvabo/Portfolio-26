"use client"

import type { ReactNode } from "react"

/* Conduit diagrams, drawn as white cards on a photographic stage (same style as the Veeqo ones) */

const ACCENT = "#B4532A"

function Tag({ children, accent = false }: { children: ReactNode; accent?: boolean }) {
  return (
    <span
      className="inline-block text-white font-mono text-[10px] uppercase tracking-wider px-1.5 py-0.5 leading-none"
      style={{ background: accent ? ACCENT : "#3D3D3D" }}
    >
      {children}
    </span>
  )
}

function BandLabel({ children }: { children: ReactNode }) {
  return <p className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground mb-2.5">{children}</p>
}

function Chip({ children }: { children: ReactNode }) {
  return (
    <span className="text-[11px] px-1.5 py-0.5 rounded border border-black/10 bg-[#F5F3F0] text-foreground/80 whitespace-nowrap">
      {children}
    </span>
  )
}

function Arrow({ className = "" }: { className?: string }) {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden className={`shrink-0 ${className}`}>
      <path d="M2 7h10M8 3l4 4-4 4" stroke={ACCENT} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

/** One step in a flow: a small numbered square and its label */
function Step({ n, children }: { n: number; children: ReactNode }) {
  return (
    <div className="flex items-center gap-2 text-[12.5px] leading-tight">
      <span
        className="grid place-items-center w-5 h-5 shrink-0 font-mono text-[10px] text-white"
        style={{ background: ACCENT }}
      >
        {n}
      </span>
      {children}
    </div>
  )
}

/**
 * Information architecture as a system map, in three layers:
 * 1. Two loops: importers set a pipeline up once, then every shipment runs through it.
 * 2. The four places people work, and which objects each one acts on.
 * 3. The objects underneath: a shipment holds documents, documents give fields, fields fill forms.
 */
export function InformationArchitecture() {
  const setup = ["Choose fields to extract", "Map them onto the form", "Test on a sample"]
  const run = ["Documents arrive", "Fields extracted", "Unsure fields flagged", "Form filled", "Run recorded"]

  const surfaces = [
    { name: "Pipelines", job: "Build and test pipelines", acts: ["Field", "Form"] },
    { name: "Inbox", job: "Review every shipment", acts: ["Shipment", "Document"] },
    { name: "Runs", job: "Audit and connect", acts: ["Document", "Form"] },
    { name: "Ask", job: "Find answers with sources", acts: ["Shipment", "Document", "Field"] },
  ]

  const objects = [
    { name: "Shipment", note: "Grouped in the inbox" },
    { name: "Document", note: "Certificate of origin, supplier files" },
    { name: "Field", note: "Confident, needs review or not found" },
    { name: "Form", note: "The importer's own compliance forms" },
  ]

  return (
    <div className="relative rounded-lg overflow-hidden">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/conduit/tile-sacks.jpg" alt="" aria-hidden className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-black/25" aria-hidden />

      <div className="relative p-4 sm:p-6 md:p-8">
        <div className="bg-white rounded-md border border-black/10 shadow-[0_8px_24px_rgba(0,0,0,0.18)] p-4 sm:p-5">
          <Tag accent>Information architecture</Tag>
          <p className="font-serif text-[1.125rem] tracking-[-0.01em] mt-1 mb-5">
            Set a pipeline up once, and every shipment runs through it
          </p>

          {/* 1. Two loops */}
          <BandLabel>User flows</BandLabel>
          <div className="grid grid-cols-1 md:grid-cols-[minmax(0,0.85fr)_auto_minmax(0,1.15fr)] gap-3 items-stretch">
            <div className="rounded border border-dashed p-3" style={{ borderColor: `${ACCENT}80` }}>
              <p className="text-[12px] font-medium mb-2.5" style={{ color: ACCENT }}>
                Set up once
              </p>
              <div className="space-y-2">
                {setup.map((s, i) => (
                  <Step key={s} n={i + 1}>
                    {s}
                  </Step>
                ))}
              </div>
            </div>

            <div className="flex md:flex-col items-center justify-center gap-1 text-[10px] font-mono uppercase tracking-wider text-muted-foreground">
              <span className="hidden md:block">Pipeline</span>
              <Arrow className="rotate-90 md:rotate-0" />
            </div>

            <div className="rounded border border-black/10 bg-[#F5F3F0] p-3">
              <p className="text-[12px] font-medium text-foreground/70 mb-2.5">Runs on every shipment</p>
              <div className="space-y-2">
                {run.map((s, i) => (
                  <Step key={s} n={i + 1}>
                    {s}
                  </Step>
                ))}
              </div>
            </div>
          </div>

          {/* 2. Surfaces */}
          <div className="mt-6">
            <BandLabel>Where people work</BandLabel>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
              {surfaces.map((s) => (
                <div key={s.name} className="rounded border border-black/10 p-2.5 flex flex-col">
                  <p className="text-[13px] font-medium">{s.name}</p>
                  <p className="text-[11.5px] text-muted-foreground leading-snug mb-2 md:min-h-[2.6em]">{s.job}</p>
                  <p className="font-mono text-[9.5px] uppercase tracking-wider text-muted-foreground mb-1">Acts on</p>
                  <div className="flex flex-wrap gap-1">
                    {s.acts.map((a) => (
                      <Chip key={a}>{a}</Chip>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 3. Objects */}
          <div className="mt-6">
            <BandLabel>What it&apos;s built on</BandLabel>
            <div className="flex flex-col md:flex-row md:items-stretch gap-1.5 md:gap-1">
              {objects.map((o, i) => (
                <div key={o.name} className="flex flex-col md:flex-row md:items-center gap-1.5 md:gap-1 md:flex-1 md:min-w-0">
                  <div className="rounded px-2.5 py-2 md:flex-1 md:self-stretch" style={{ background: `${ACCENT}14` }}>
                    <p className="text-[13px] font-medium" style={{ color: ACCENT }}>
                      {o.name}
                    </p>
                    <p className="text-[11px] text-foreground/70 leading-snug">{o.note}</p>
                  </div>
                  {i < objects.length - 1 && <Arrow className="self-center rotate-90 md:rotate-0" />}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
