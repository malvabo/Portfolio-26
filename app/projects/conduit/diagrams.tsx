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

/* ------------------------------------------------------------------ */
/* User flow: a classic swimlane flowchart                            */
/* ------------------------------------------------------------------ */

const LANES = [
  { name: "Importer", y: 40 },
  { name: "Conduit", y: 160 },
  { name: "Exporter", y: 280 },
]
const LANE_H = 120
const BOX_W = 132
const BOX_H = 50

/** Centre of a lane */
const cy = (lane: number) => LANES[lane].y + LANE_H / 2

function FlowText({ x, y, lines, className = "", fill }: { x: number; y: number; lines: string[]; className?: string; fill?: string }) {
  const start = y - ((lines.length - 1) * 17) / 2
  return (
    <text x={x} textAnchor="middle" dominantBaseline="middle" className={className} fill={fill ?? "#1F1F1F"}>
      {lines.map((l, i) => (
        <tspan key={l} x={x} y={start + i * 17}>
          {l}
        </tspan>
      ))}
    </text>
  )
}

function Box({ x, lane, lines, dashed = false }: { x: number; lane: number; lines: string[]; dashed?: boolean }) {
  const y = cy(lane)
  return (
    <g>
      <rect
        x={x - BOX_W / 2}
        y={y - BOX_H / 2}
        width={BOX_W}
        height={BOX_H}
        rx={4}
        fill="#FFFFFF"
        stroke={dashed ? ACCENT : "rgba(0,0,0,0.22)"}
        strokeDasharray={dashed ? "4 3" : undefined}
      />
      <FlowText x={x} y={y} lines={lines} className="text-[14px]" />
    </g>
  )
}

/** Start and end points: a rounded pill */
function Terminal({ x, lane, lines, end = false }: { x: number; lane: number; lines: string[]; end?: boolean }) {
  const y = cy(lane)
  return (
    <g>
      <rect x={x - BOX_W / 2} y={y - BOX_H / 2} width={BOX_W} height={BOX_H} rx={BOX_H / 2} fill={end ? ACCENT : "#3D3D3D"} />
      <FlowText x={x} y={y} lines={lines} className="text-[14px] font-medium" fill="#FFFFFF" />
    </g>
  )
}

function Decision({ x, lane, lines }: { x: number; lane: number; lines: string[] }) {
  const y = cy(lane)
  const w = 66
  const h = 40
  return (
    <g>
      <polygon points={`${x},${y - h} ${x + w},${y} ${x},${y + h} ${x - w},${y}`} fill="#F8ECE6" stroke={ACCENT} />
      <FlowText x={x} y={y} lines={lines} className="text-[13.5px] font-medium" />
    </g>
  )
}

function Edge({ d, label, lx, ly, dashed = false }: { d: string; label?: string; lx?: number; ly?: number; dashed?: boolean }) {
  return (
    <g>
      <path d={d} fill="none" stroke={dashed ? ACCENT : "#6B6B6B"} strokeWidth={1.2} strokeDasharray={dashed ? "4 3" : undefined} markerEnd={dashed ? "url(#arrow-accent)" : "url(#arrow)"} />
      {label && (
        <text x={lx} y={ly} textAnchor="middle" className="font-mono text-[11px] uppercase tracking-wider" fill={ACCENT}>
          {label}
        </text>
      )}
    </g>
  )
}

/**
 * How a shipment's documents move through Conduit, across the three parties involved.
 * Two decision points carry the design: a missing or unreadable document goes back to the
 * exporter, and an unsure field goes to a person before anything is filled in.
 */
export function UserFlow() {
  // Column centres
  const c = [180, 335, 485, 645, 805, 955]

  return (
    <div className="relative rounded-lg overflow-hidden">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/conduit/tile-documents.jpg" alt="" aria-hidden className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-black/25" aria-hidden />

      <div className="relative p-3 sm:p-4 md:p-5">
        <div className="bg-white rounded-md border border-black/10 shadow-[0_8px_24px_rgba(0,0,0,0.18)] p-4 sm:p-5">
          <Tag accent>User flow</Tag>
          <p className="font-serif text-[1.125rem] tracking-[-0.01em] mt-1 mb-4">From supplier documents to a filed form</p>

          {/* The chart keeps its proportions; on a phone it scrolls sideways inside the card */}
          <div className="overflow-x-auto -mx-1 px-1">
            <svg
              viewBox="0 0 1040 410"
              className="w-full min-w-[760px] md:min-w-0 h-auto font-sans"
              role="img"
              aria-label="Swimlane user flow. The exporter sends documents. Conduit groups them by shipment and extracts fields using the pipeline the importer set up. If a document is missing or unreadable, it is flagged and the exporter sends a new file. If any field is unsure, the importer reviews it and confirms or corrects it. Conduit then fills the compliance form and records the run, and the importer files the form."
            >
              <defs>
                <marker id="arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
                  <path d="M0 0L10 5L0 10z" fill="#6B6B6B" />
                </marker>
                <marker id="arrow-accent" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
                  <path d="M0 0L10 5L0 10z" fill={ACCENT} />
                </marker>
              </defs>

              {/* Lanes */}
              {LANES.map((l, i) => (
                <g key={l.name}>
                  <rect x={0} y={l.y} width={1040} height={LANE_H} fill={i % 2 ? "#FFFFFF" : "#F7F5F2"} />
                  <line x1={0} x2={1040} y1={l.y} y2={l.y} stroke="rgba(0,0,0,0.08)" />
                  <text x={16} y={cy(i)} dominantBaseline="middle" className="font-mono text-[12px] uppercase tracking-wider" fill="#6B6B6B">
                    {l.name}
                  </text>
                </g>
              ))}
              <line x1={0} x2={1040} y1={400} y2={400} stroke="rgba(0,0,0,0.08)" />
              <line x1={100} x2={100} y1={40} y2={400} stroke="rgba(0,0,0,0.08)" />

              {/* Column labels */}
              <text x={c[0]} y={22} textAnchor="middle" className="font-mono text-[11px] uppercase tracking-wider" fill="#6B6B6B">Once</text>
              <text x={(c[1] + c[5]) / 2} y={22} textAnchor="middle" className="font-mono text-[11px] uppercase tracking-wider" fill="#6B6B6B">Every shipment</text>
              <line x1={c[1] - 66} x2={c[5] + 66} y1={30} y2={30} stroke="rgba(0,0,0,0.12)" />
              <line x1={c[0] - 66} x2={c[0] + 66} y1={30} y2={30} stroke="rgba(0,0,0,0.12)" />

              {/* Edges first, so nodes sit on top */}
              {/* Importer's pipeline drives extraction */}
              <Edge d={`M${c[0] + BOX_W / 2} ${cy(0)} H${c[1]} V${cy(1) - BOX_H / 2 - 2}`} dashed label="Pipeline" lx={c[1] - 4} ly={cy(0) - 8} />
              {/* Exporter sends documents into Conduit */}
              <Edge d={`M${c[0] + BOX_W / 2} ${cy(2)} H${c[1] - 20} V${cy(1) + BOX_H / 2 + 2}`} />
              {/* Group and extract -> complete? */}
              <Edge d={`M${c[1] + BOX_W / 2} ${cy(1)} H${c[2] - 68}`} />
              {/* Not complete: flagged, exporter sends a new file, loop back */}
              <Edge d={`M${c[2]} ${cy(1) + 40} V${cy(2) - BOX_H / 2 - 2}`} label="No, flagged" lx={c[2] + 50} ly={cy(1) + 62} />
              <Edge d={`M${c[2] - BOX_W / 2} ${cy(2) + 10} H${c[1] + 20} V${cy(1) + BOX_H / 2 + 2}`} />
              {/* Complete -> confident? */}
              <Edge d={`M${c[2] + 66} ${cy(1)} H${c[3] - 68}`} label="Yes" lx={(c[2] + c[3]) / 2} ly={cy(1) - 8} />
              {/* Not confident: a person reviews */}
              <Edge d={`M${c[3]} ${cy(1) - 40} V${cy(0) + BOX_H / 2 + 2}`} label="No" lx={c[3] + 18} ly={cy(1) - 54} />
              <Edge d={`M${c[3] + BOX_W / 2} ${cy(0)} H${c[4]} V${cy(1) - BOX_H / 2 - 2}`} label="Confirms or corrects" lx={c[4] - 4} ly={cy(0) - 8} />
              {/* Confident -> fill the form */}
              <Edge d={`M${c[3] + 66} ${cy(1) + 10} H${c[4] - BOX_W / 2 - 2}`} label="Yes" lx={(c[3] + 66 + c[4] - BOX_W / 2) / 2} ly={cy(1) + 28} />
              {/* Fill -> record */}
              <Edge d={`M${c[4] + BOX_W / 2} ${cy(1)} H${c[5] - BOX_W / 2 - 2}`} />
              {/* Record -> importer files */}
              <Edge d={`M${c[5]} ${cy(1) - BOX_H / 2} V${cy(0) + BOX_H / 2 + 2}`} />

              {/* Nodes */}
              <Box x={c[0]} lane={0} lines={["Sets up and", "tests a pipeline"]} dashed />
              <Terminal x={c[0]} lane={2} lines={["Sends shipment", "documents"]} />
              <Box x={c[1]} lane={1} lines={["Groups and", "extracts fields"]} />
              <Decision x={c[2]} lane={1} lines={["Documents", "complete?"]} />
              <Box x={c[2]} lane={2} lines={["Sends a new file"]} />
              <Decision x={c[3]} lane={1} lines={["Every field", "confident?"]} />
              <Box x={c[3]} lane={0} lines={["Reviews the", "flagged fields"]} />
              <Box x={c[4]} lane={1} lines={["Fills the", "compliance form"]} />
              <Box x={c[5]} lane={1} lines={["Records the run", "for audit"]} />
              <Terminal x={c[5]} lane={0} lines={["Files the form"]} end />
            </svg>
          </div>

          {/* Legend */}
          <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-[11.5px] text-muted-foreground">
            <span className="flex items-center gap-1.5"><span className="w-5 h-3 rounded-full bg-[#3D3D3D]" />Start</span>
            <span className="flex items-center gap-1.5"><span className="w-5 h-3 rounded-full" style={{ background: ACCENT }} />End</span>
            <span className="flex items-center gap-1.5"><span className="w-5 h-3 rounded-sm border border-black/25 bg-white" />Step</span>
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rotate-45 border bg-[#F8ECE6]" style={{ borderColor: ACCENT }} />Decision</span>
            <span className="flex items-center gap-1.5"><span className="w-5 border-t border-dashed" style={{ borderColor: ACCENT }} />Set up once</span>
          </div>
        </div>
      </div>
    </div>
  )
}
