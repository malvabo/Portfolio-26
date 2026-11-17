"use client"

import type { ReactNode } from "react"

/* Conduit diagrams, drawn as white cards on a photographic stage (same style as the Veeqo ones) */

const ACCENT = "#B4532A"
const LINE = "rgba(0,0,0,0.18)"
const STROKE = "rgba(0,0,0,0.28)"
const MUTED = "#6B6B6B"

/** Photo backdrop with a white card on top */
function Panel({ bg, title, children }: { bg: string; title: string; children: ReactNode }) {
  return (
    <div className="relative rounded-lg overflow-hidden">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={bg} alt="" aria-hidden className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-black/25" aria-hidden />
      <div className="relative p-3 sm:p-4 md:p-5">
        <div className="bg-white rounded-md border border-black/10 shadow-[0_8px_24px_rgba(0,0,0,0.18)] p-4 sm:p-5">
          <p className="font-serif text-[1.125rem] tracking-[-0.01em] mb-5">{title}</p>
          {children}
        </div>
      </div>
    </div>
  )
}

/* ------------------------------------------------------------------ */
/* Information architecture: a sitemap of the product's navigation     */
/* ------------------------------------------------------------------ */

type IAPage = { name: string; children: string[] }
type IAGroup = { group: string; note: string; primary?: boolean; pages: IAPage[] }

const GROUPS: IAGroup[] = [
  {
    group: "Build",
    note: "Set up once",
    primary: true,
    pages: [
      {
        name: "Pipelines",
        children: [
          "New pipeline: Extract, Inject or a template",
          "Editor: Parse, then Extract",
          "Configure fields, then check results",
          "View code",
        ],
      },
      { name: "Runs", children: ["Every processed document", "Pipeline, status and run ID"] },
    ],
  },
  {
    group: "Activity",
    note: "Every day",
    primary: true,
    pages: [
      {
        name: "Inbox",
        children: ["All, Processing, To do, Done", "View by shipment or all documents", "Document review with field states"],
      },
    ],
  },
  {
    group: "Settings",
    note: "Admins",
    pages: [
      { name: "Developers", children: ["API calls into saved pipelines"] },
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

// Each page row: 10px gap above, then a 28px label, so its branch sits 24px from the row's top
const ROW_GAP = 10
const PILL_H = 28
const BRANCH_Y = ROW_GAP + PILL_H / 2

export function InformationArchitecture() {
  return (
    <Panel bg="/conduit/tile-sacks.jpg" title="Information architecture">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-x-3 gap-y-6">
        {GROUPS.map((g) => (
          <div key={g.group} className="min-w-0">
            <div className="rounded px-2.5 py-2 text-center" style={{ background: g.primary ? `${ACCENT}14` : "#F5F3F0" }}>
              <p className="text-[13px] font-medium" style={{ color: g.primary ? ACCENT : undefined }}>
                {g.group}
              </p>
              <p className="text-[11px] text-muted-foreground">{g.note}</p>
            </div>

            {/* One unbroken trunk runs from the group down to its last page */}
            <div className="pl-5">
              {g.pages.map((p, i) => {
                const last = i === g.pages.length - 1
                return (
                  <div key={p.name} className="relative" style={{ paddingTop: ROW_GAP }}>
                    <span
                      aria-hidden
                      className="absolute w-px"
                      style={{ left: -12, top: 0, background: LINE, ...(last ? { height: BRANCH_Y } : { bottom: 0 }) }}
                    />
                    <span aria-hidden className="absolute h-px w-2.5" style={{ left: -12, top: BRANCH_Y, background: LINE }} />
                    <span
                      className="inline-flex items-center text-[12.5px] font-medium px-2 rounded border bg-white"
                      style={{ height: PILL_H, borderColor: STROKE }}
                    >
                      {p.name}
                    </span>
                    {p.children.length > 0 && (
                      <ul className="mt-1.5 space-y-1 pl-2">
                        {p.children.map((ch) => (
                          <li key={ch} className="flex items-start gap-1.5 text-[11.5px] leading-snug text-foreground/75">
                            <span aria-hidden className="mt-[7px] w-1 h-1 shrink-0 bg-black/30" />
                            <span>{ch}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                )
              })}
            </div>
          </div>
        ))}
      </div>
    </Panel>
  )
}

/* ------------------------------------------------------------------ */
/* User flow: a swimlane flowchart                                     */
/* ------------------------------------------------------------------ */

const LANES = ["Importer", "Conduit", "Exporter"]
const LANE_H = 120
const W = 1040
const BOX_W = 132
const BOX_H = 50
const DIA_W = 66 // half width of a decision
const DIA_H = 40 // half height of a decision
const GAP = 2 // arrow tips stop just short of the shape they point at

/** Centre of a lane */
const cy = (lane: number) => lane * LANE_H + LANE_H / 2

function FlowText({ x, y, lines }: { x: number; y: number; lines: string[] }) {
  const start = y - ((lines.length - 1) * 17) / 2
  return (
    <text x={x} textAnchor="middle" dominantBaseline="middle" className="text-[14px]" fill="#1F1F1F">
      {lines.map((l, i) => (
        <tspan key={l} x={x} y={start + i * 17}>
          {l}
        </tspan>
      ))}
    </text>
  )
}

function Box({ x, lane, lines }: { x: number; lane: number; lines: string[] }) {
  const y = cy(lane)
  return (
    <g>
      <rect x={x - BOX_W / 2} y={y - BOX_H / 2} width={BOX_W} height={BOX_H} rx={4} fill="#FFFFFF" stroke={STROKE} />
      <FlowText x={x} y={y} lines={lines} />
    </g>
  )
}

function Decision({ x, lane, lines }: { x: number; lane: number; lines: string[] }) {
  const y = cy(lane)
  return (
    <g>
      <polygon
        points={`${x},${y - DIA_H} ${x + DIA_W},${y} ${x},${y + DIA_H} ${x - DIA_W},${y}`}
        fill="#FFFFFF"
        stroke={STROKE}
      />
      <FlowText x={x} y={y} lines={lines} />
    </g>
  )
}

function Edge({
  d,
  label,
  lx,
  ly,
  anchor = "middle",
}: {
  d: string
  label?: string
  lx?: number
  ly?: number
  anchor?: "middle" | "start"
}) {
  return (
    <g>
      <path d={d} fill="none" stroke={MUTED} strokeWidth={1.2} markerEnd="url(#flow-arrow)" />
      {label && (
        <text x={lx} y={ly} textAnchor={anchor} className="text-[12px]" fill={MUTED}>
          {label}
        </text>
      )}
    </g>
  )
}

/**
 * How a shipment's documents move through Conduit, across the three parties involved.
 * Two decisions carry the design: an incomplete document goes back to the exporter,
 * and an unsure field goes to a person before anything is filled in.
 */
export function UserFlow() {
  // Column centres
  const c = [180, 335, 485, 645, 805, 955]
  const boxL = (x: number) => x - BOX_W / 2
  const boxR = (x: number) => x + BOX_W / 2
  const boxT = (lane: number) => cy(lane) - BOX_H / 2
  const boxB = (lane: number) => cy(lane) + BOX_H / 2

  return (
    <Panel bg="/conduit/tile-documents.jpg" title="User flow">
      {/* The chart keeps its proportions; on a phone it scrolls sideways inside the card */}
      <div className="overflow-x-auto -mx-1 px-1">
        <svg
          viewBox={`0 0 ${W} ${LANES.length * LANE_H}`}
          className="w-full min-w-[760px] md:min-w-0 h-auto font-sans"
          role="img"
          aria-label="Swimlane user flow. The importer sets up and tests a pipeline. The exporter sends shipment documents. Conduit groups them and extracts the fields. If documents are incomplete, the exporter sends a new file. If any field is unsure, the importer reviews it and confirms or corrects it. Conduit then fills the compliance form and records the run, and the importer files the form."
        >
          <defs>
            <marker id="flow-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
              <path d="M0 0L10 5L0 10z" fill={MUTED} />
            </marker>
          </defs>

          {/* Lanes */}
          {LANES.map((name, i) => (
            <g key={name}>
              <rect x={0} y={i * LANE_H} width={W} height={LANE_H} fill={i % 2 ? "#FFFFFF" : "#F7F5F2"} />
              <text x={16} y={cy(i)} dominantBaseline="middle" className="text-[13px]" fill={MUTED}>
                {name}
              </text>
            </g>
          ))}
          <line x1={100} x2={100} y1={0} y2={LANES.length * LANE_H} stroke="rgba(0,0,0,0.08)" />

          {/* Edges first, so shapes sit on top */}
          {/* Importer's pipeline drives extraction */}
          <Edge
            d={`M${boxR(c[0])} ${cy(0)} H${c[1]} V${boxT(1) - GAP}`}
            label="Pipeline"
            lx={(boxR(c[0]) + c[1]) / 2}
            ly={cy(0) - 9}
          />
          {/* Exporter sends documents into Conduit */}
          <Edge d={`M${boxR(c[0])} ${cy(2)} H${c[1] - 24} V${boxB(1) + GAP}`} />
          {/* Group and extract, then the first decision */}
          <Edge d={`M${boxR(c[1])} ${cy(1)} H${c[2] - DIA_W - GAP}`} />
          {/* Incomplete: the exporter sends a new file, which goes back to extraction */}
          <Edge d={`M${c[2]} ${cy(1) + DIA_H} V${boxT(2) - GAP}`} label="No" lx={c[2] + 16} ly={(cy(1) + DIA_H + boxT(2)) / 2 + 4} />
          <Edge d={`M${boxL(c[2])} ${cy(2)} H${c[1] + 24} V${boxB(1) + GAP}`} />
          {/* Complete: the second decision */}
          <Edge
            d={`M${c[2] + DIA_W} ${cy(1)} H${c[3] - DIA_W - GAP}`}
            label="Yes"
            lx={(c[2] + DIA_W + c[3] - DIA_W) / 2}
            ly={cy(1) - 9}
          />
          {/* Unsure: a person reviews, then the form is filled */}
          <Edge d={`M${c[3]} ${cy(1) - DIA_H} V${boxB(0) + GAP}`} label="No" lx={c[3] + 16} ly={(cy(1) - DIA_H + boxB(0)) / 2 + 4} />
          <Edge
            d={`M${boxR(c[3])} ${cy(0)} H${c[4]} V${boxT(1) - GAP}`}
            label="Confirms or corrects"
            anchor="start"
            lx={c[4] + 8}
            ly={(cy(0) + boxT(1)) / 2 + 4}
          />
          {/* Confident: straight to the form */}
          <Edge
            d={`M${c[3] + DIA_W} ${cy(1)} H${boxL(c[4]) - GAP}`}
            label="Yes"
            lx={(c[3] + DIA_W + boxL(c[4])) / 2}
            ly={cy(1) + 18}
          />
          {/* Fill, record, file */}
          <Edge d={`M${boxR(c[4])} ${cy(1)} H${boxL(c[5]) - GAP}`} />
          <Edge d={`M${c[5]} ${boxT(1)} V${boxB(0) + GAP}`} />

          {/* Shapes */}
          <Box x={c[0]} lane={0} lines={["Sets up and", "tests a pipeline"]} />
          <Box x={c[0]} lane={2} lines={["Sends shipment", "documents"]} />
          <Box x={c[1]} lane={1} lines={["Groups and", "extracts fields"]} />
          <Decision x={c[2]} lane={1} lines={["Documents", "complete?"]} />
          <Box x={c[2]} lane={2} lines={["Sends a new file"]} />
          <Decision x={c[3]} lane={1} lines={["Every field", "confident?"]} />
          <Box x={c[3]} lane={0} lines={["Reviews the", "flagged fields"]} />
          <Box x={c[4]} lane={1} lines={["Fills the", "compliance form"]} />
          <Box x={c[5]} lane={1} lines={["Records the run", "for audit"]} />
          <Box x={c[5]} lane={0} lines={["Files the form"]} />
        </svg>
      </div>
    </Panel>
  )
}
