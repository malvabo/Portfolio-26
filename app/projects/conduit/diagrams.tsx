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

/** Numbered marker that ties a spot in the sitemap to a decision listed under it */
function Marker({ n }: { n: number }) {
  return (
    <span
      className="inline-grid place-items-center w-4 h-4 rounded-full text-white font-mono text-[9px] leading-none shrink-0"
      style={{ background: ACCENT }}
      aria-label={`Decision ${n}`}
    >
      {n}
    </span>
  )
}

type IAPage = { name: string; marker?: number; children: { text: string; marker?: number }[] }
type IAGroup = { group: string; note: string; marker?: number; pages: IAPage[] }

/**
 * Information architecture as a sitemap, taken from the product's own navigation:
 * level 1 groups, level 2 pages and level 3 views, with the reasoning behind
 * the structure numbered underneath.
 */
export function InformationArchitecture() {
  const groups: IAGroup[] = [
    {
      group: "Build",
      note: "Set up once",
      marker: 1,
      pages: [
        {
          name: "Pipelines",
          marker: 4,
          children: [
            { text: "New pipeline: Extract, Inject or a template" },
            { text: "Editor: Parse, then Extract" },
            { text: "Configure fields, then check results" },
            { text: "View code" },
          ],
        },
        { name: "Runs", children: [{ text: "Every processed document" }, { text: "Pipeline, status and run ID" }] },
      ],
    },
    {
      group: "Activity",
      note: "Every day",
      marker: 1,
      pages: [
        { name: "Shipments", children: [{ text: "Each shipment and its documents" }] },
        {
          name: "Inbox",
          children: [
            { text: "All, Processing, To do, Done" },
            { text: "View by shipment or all documents", marker: 2 },
            { text: "Document review with field states" },
          ],
        },
      ],
    },
    {
      group: "Settings",
      note: "Admins",
      pages: [
        { name: "Developers", children: [{ text: "API calls into saved pipelines" }] },
        { name: "Workspace", children: [] },
      ],
    },
    {
      group: "Help",
      note: "When stuck",
      pages: [
        { name: "Documentation", children: [] },
        { name: "What's new", children: [] },
      ],
    },
  ]

  const decisions = [
    "Build and Activity are split by how often people need them. Pipelines are set up once, while shipments are checked every day, so daily work never sits behind setup screens.",
    "The shipment is the unit importers think in, so the inbox can group documents by shipment as well as list them one by one.",
    "Ask lives on every page instead of in the menu, so an officer can question a document without leaving it.",
    "Pipelines are named by what they do, Extract or Inject, so creating one starts from the job, not a blank setup.",
  ]

  return (
    <div className="relative rounded-lg overflow-hidden">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/conduit/tile-sacks.jpg" alt="" aria-hidden className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-black/25" aria-hidden />

      <div className="relative p-3 sm:p-4 md:p-5">
        <div className="bg-white rounded-md border border-black/10 shadow-[0_8px_24px_rgba(0,0,0,0.18)] p-4 sm:p-5">
          <Tag accent>Information architecture</Tag>
          <p className="font-serif text-[1.125rem] tracking-[-0.01em] mt-1 mb-5">
            Organised by how often people need each part
          </p>

          {/* Level 0: the app in the middle, the landing page on the left, what is on every page on the right */}
          <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] items-center gap-2 md:gap-4">
            <div className="flex items-center gap-2 md:justify-end order-2 md:order-1">
              <span className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">Lands on</span>
              <span className="text-[12px] px-2 py-1 rounded border border-black/15 bg-[#F5F3F0]">Home</span>
            </div>
            <span className="justify-self-start md:justify-self-center order-1 md:order-2 text-white text-[13px] font-medium px-3 py-1.5 rounded" style={{ background: "#3D3D3D" }}>
              Conduit
            </span>
            <div className="flex flex-wrap items-center gap-2 order-3">
              <span className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">On every page</span>
              <span className="flex items-center gap-1.5 text-[12px] px-2 py-1 rounded border border-dashed" style={{ borderColor: `${ACCENT}99` }}>
                <svg width="12" height="12" viewBox="0 0 10 10" aria-hidden>
                  <path d="M5 0C5.55 3.4 6.6 4.45 10 5 6.6 5.55 5.55 6.6 5 10 4.45 6.6 3.4 5.55 0 5 3.4 4.45 4.45 3.4 5 0Z" fill={ACCENT} />
                </svg>
                Ask
                <Marker n={3} />
              </span>
              <span className="text-[12px] px-2 py-1 rounded border border-dashed border-black/20">Workspace switcher</span>
            </div>
          </div>

          {/* Trunk from the app down to the groups */}
          <div className="hidden md:block relative h-8 mx-[12.5%]" aria-hidden>
            <span className="absolute left-1/2 top-0 h-1/2 w-px bg-black/15" />
            <span className="absolute left-0 right-0 top-1/2 h-px bg-black/15" />
            <span className="absolute left-[-1px] top-1/2 bottom-0 w-px bg-black/15" />
            <span className="absolute right-[-1px] top-1/2 bottom-0 w-px bg-black/15" />
            <span className="absolute left-1/3 top-1/2 bottom-0 w-px bg-black/15" />
            <span className="absolute left-2/3 top-1/2 bottom-0 w-px bg-black/15" />
          </div>

          {/* Levels 1 to 3 */}
          <div className="mt-5 md:mt-0 grid grid-cols-2 md:grid-cols-4 gap-x-3 gap-y-6">
            {groups.map((g) => {
              const primary = g.group === "Build" || g.group === "Activity"
              return (
                <div key={g.group} className="min-w-0">
                  <div
                    className="rounded px-2.5 py-2 text-center"
                    style={{ background: primary ? `${ACCENT}14` : "#F5F3F0" }}
                  >
                    <p className="flex items-center justify-center gap-1.5 text-[13px] font-medium" style={{ color: primary ? ACCENT : undefined }}>
                      {g.group}
                      {g.marker && <Marker n={g.marker} />}
                    </p>
                    <p className="font-mono text-[9.5px] uppercase tracking-wider text-muted-foreground">{g.note}</p>
                  </div>

                  <div className="mt-2 space-y-2.5 pl-2">
                    {g.pages.map((p) => (
                      <div key={p.name} className="relative pl-3 border-l border-black/15">
                        <div className="relative">
                          <span aria-hidden className="absolute -left-3 top-1/2 w-2.5 h-px bg-black/15" />
                          <span className="inline-flex items-center gap-1.5 text-[12.5px] font-medium px-2 py-1 rounded border border-black/15 bg-white">
                            {p.name}
                            {p.marker && <Marker n={p.marker} />}
                          </span>
                        </div>
                        {p.children.length > 0 && (
                          <ul className="mt-1.5 space-y-1 pl-2">
                            {p.children.map((ch) => (
                              <li key={ch.text} className="flex items-start gap-1.5 text-[11.5px] leading-snug text-foreground/75">
                                <span aria-hidden className="mt-[7px] w-1 h-1 shrink-0 bg-black/30" />
                                <span>
                                  {ch.text}
                                  {ch.marker && (
                                    <span className="ml-1 align-middle">
                                      <Marker n={ch.marker} />
                                    </span>
                                  )}
                                </span>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>

          {/* Why it is shaped this way */}
          <div className="mt-6 pt-4 border-t border-black/10">
            <p className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground mb-3">Structure decisions</p>
            <ol className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-3">
              {decisions.map((d, i) => (
                <li key={i} className="flex gap-2 text-[12.5px] leading-snug text-foreground/80">
                  <Marker n={i + 1} />
                  <span>{d}</span>
                </li>
              ))}
            </ol>
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
