"use client"

import type { ReactNode } from "react"

/* Conduit diagrams, drawn as white cards on a photographic stage (same style as the Veeqo ones) */

const STROKE = "rgba(0,0,0,0.28)"
const MUTED = "#6B6B6B"
const INK = "#1F1F1F"
const TINT = "#F7F5F2"
const GAP = 2 // arrow tips stop just short of the shape they point at
const LABEL_OFFSET = 9 // labels sit this far above a horizontal line, or right of a vertical one

/** Photo backdrop with a white card on top */
function Panel({ bg, label, children }: { bg: string; label: string; children: ReactNode }) {
  return (
    <div className="relative rounded-lg overflow-hidden">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={bg} alt="" aria-hidden className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-black/25" aria-hidden />
      <div className="relative p-3 sm:p-4 md:p-5">
        <div className="bg-white rounded-md border border-black/10 shadow-[0_8px_24px_rgba(0,0,0,0.18)] p-4 sm:p-5">
          {/* Charts keep their proportions; on a phone they scroll sideways inside the card */}
          <div className="overflow-x-auto -mx-1 px-1" role="region" aria-label={label}>
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}

/** Centred text, one tspan per line */
function Lines({
  x,
  y,
  lines,
  size = 14,
  weight,
  fill = INK,
}: {
  x: number
  y: number
  lines: string[]
  size?: number
  weight?: number
  fill?: string
}) {
  const lh = size * 1.25
  const start = y - ((lines.length - 1) * lh) / 2
  return (
    <text x={x} textAnchor="middle" dominantBaseline="middle" fontSize={size} fontWeight={weight} fill={fill}>
      {lines.map((l, i) => (
        <tspan key={l + i} x={x} y={start + i * lh}>
          {l}
        </tspan>
      ))}
    </text>
  )
}

function ArrowDefs({ id }: { id: string }) {
  return (
    <defs>
      <marker id={id} viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
        <path d="M0 0L10 5L0 10z" fill={MUTED} />
      </marker>
    </defs>
  )
}

type Label = { lines: string[]; x: number; y: number; side: "above" | "right" | "left" }

/** Labels follow one rule: above the middle of a horizontal run, or right of the middle of a vertical one */
function Edge({ d, marker, label, dashed = false }: { d: string; marker: string; label?: Label; dashed?: boolean }) {
  return (
    <g>
      <path
        d={d}
        fill="none"
        stroke={MUTED}
        strokeWidth={1.2}
        strokeDasharray={dashed ? "4 4" : undefined}
        markerEnd={`url(#${marker})`}
      />
      {label &&
        (label.side === "above" ? (
          <text x={label.x} textAnchor="middle" fontSize={12} fill={MUTED}>
            {label.lines.map((l, i) => (
              <tspan key={l} x={label.x} y={label.y - LABEL_OFFSET - (label.lines.length - 1 - i) * 14}>
                {l}
              </tspan>
            ))}
          </text>
        ) : (
          <text
            x={label.side === "left" ? label.x - LABEL_OFFSET : label.x + LABEL_OFFSET}
            textAnchor={label.side === "left" ? "end" : "start"}
            dominantBaseline="middle"
            fontSize={12}
            fill={MUTED}
          >
            {label.lines.map((l, i) => (
              <tspan
                key={l}
                x={label.side === "left" ? label.x - LABEL_OFFSET : label.x + LABEL_OFFSET}
                y={label.y + (i - (label.lines.length - 1) / 2) * 14}
              >
                {l}
              </tspan>
            ))}
          </text>
        ))}
    </g>
  )
}

/* ------------------------------------------------------------------ */
/* 1. Information architecture: the screens, and the objects they hold */
/* ------------------------------------------------------------------ */

type IANode = { name: string; level: 2 | 3 }
type IAColumn = { name: string; children: IANode[] }

// Screens from the product's own navigation. Tabs and filters are left out; only places you can go.
const IA: IAColumn[] = [
  { name: "Home", children: [] },
  {
    name: "Inbox",
    children: [
      { name: "All documents", level: 2 },
      { name: "Document review", level: 3 },
    ],
  },
  {
    name: "Pipelines",
    children: [
      { name: "All pipelines", level: 2 },
      { name: "Pipeline editor", level: 3 },
    ],
  },
  { name: "Runs", children: [{ name: "All runs", level: 2 }] },
  {
    name: "Settings",
    children: [
      { name: "Developers", level: 2 },
      { name: "Workspace", level: 2 },
    ],
  },
  {
    name: "Help",
    children: [
      { name: "Documentation", level: 2 },
      { name: "What's new", level: 2 },
    ],
  },
]

// The three objects every screen works on, and where each one is seen or changed
const OBJECTS = [
  { name: "Document", where: "Inbox, Runs" },
  { name: "Field", where: "Document review, Pipeline editor" },
  { name: "Form", where: "Pipeline editor, Developers (API)" },
]

const IA_W = 1060
const IA_COL = 172
const IA_X0 = 105
const ROOT_Y = 16
const ROOT_H = 40
const BUS_Y = 84
const L1_Y = 108
const L1_W = 150
const L1_H = 42
const CHILD_Y = L1_Y + L1_H + 24
const CHILD_H = 34
const CHILD_STEP = 46

export function InformationArchitecture() {
  const colX = (i: number) => IA_X0 + IA_COL * i
  const rootX = (colX(0) + colX(IA.length - 1)) / 2
  const tallest = Math.max(...IA.map((c) => c.children.length))
  const treeBottom = CHILD_Y + (tallest - 1) * CHILD_STEP + CHILD_H

  // Object band
  const bandY = treeBottom + 40
  const objW = 180
  const objH = 40
  const objStep = 300
  const objX = (i: number) => IA_W / 2 + (i - 1) * objStep
  const objY = bandY + 44
  const height = objY + objH + 46

  return (
    <Panel bg="/conduit/tile-sacks.jpg" label="Information architecture">
      <svg
        viewBox={`0 0 ${IA_W} ${height}`}
        className="w-full min-w-[760px] md:min-w-0 h-auto font-sans"
        role="img"
        aria-label="Sitemap. Conduit has six main sections: Home; Inbox, with all documents and document review; Pipelines, with all pipelines and the pipeline editor; Runs; Settings, with Developers and Workspace; and Help. Underneath, every screen works on three objects: a document gives fields, and fields fill a form. Documents are seen in the inbox and runs, fields in document review and the pipeline editor, and forms in the pipeline editor and through the API."
      >
        <ArrowDefs id="ia-arrow" />

        {/* Root to the main sections: one stem, one bus, one drop per section */}
        <path
          d={`M${rootX} ${ROOT_Y + ROOT_H} V${BUS_Y} M${colX(0)} ${BUS_Y} H${colX(IA.length - 1)} ${IA.map((_, i) => `M${colX(i)} ${BUS_Y} V${L1_Y}`).join(" ")}`}
          fill="none"
          stroke={STROKE}
        />
        <rect x={rootX - 60} y={ROOT_Y} width={120} height={ROOT_H} rx={4} fill={INK} />
        <Lines x={rootX} y={ROOT_Y + ROOT_H / 2} lines={["Conduit"]} weight={500} fill="#FFFFFF" />

        {IA.map((col, i) => {
          const x = colX(i)
          const spineX = x - L1_W / 2 + 12
          const centreY = (k: number) => CHILD_Y + k * CHILD_STEP + CHILD_H / 2
          const last = col.children.length - 1
          return (
            <g key={col.name}>
              {last >= 0 && <path d={`M${spineX} ${L1_Y + L1_H} V${centreY(last)}`} fill="none" stroke={STROKE} />}
              {col.children.map((ch, k) => {
                const left = ch.level === 2 ? spineX + 14 : spineX + 28
                const w = x + L1_W / 2 - left
                const top = CHILD_Y + k * CHILD_STEP
                return (
                  <g key={ch.name}>
                    <path d={`M${spineX} ${centreY(k)} H${left}`} fill="none" stroke={STROKE} />
                    <rect x={left} y={top} width={w} height={CHILD_H} rx={4} fill={ch.level === 2 ? "#FFFFFF" : TINT} stroke={STROKE} />
                    <Lines
                      x={left + w / 2}
                      y={top + CHILD_H / 2}
                      lines={[ch.name]}
                      size={ch.level === 2 ? 13.5 : 12.5}
                      fill={ch.level === 2 ? INK : MUTED}
                    />
                  </g>
                )
              })}
              <rect x={x - L1_W / 2} y={L1_Y} width={L1_W} height={L1_H} rx={4} fill="#FFFFFF" stroke={INK} />
              <Lines x={x} y={L1_Y + L1_H / 2} lines={[col.name]} weight={500} />
            </g>
          )
        })}

        {/* Objects underneath every screen */}
        <rect x={0} y={bandY} width={IA_W} height={height - bandY} fill={TINT} />
        <text x={18} y={bandY + 24} fontSize={14} fill={INK}>
          What every screen works on
        </text>
        {OBJECTS.slice(0, -1).map((_, i) => (
          <Edge
            key={i}
            marker="ia-arrow"
            d={`M${objX(i) + objW / 2} ${objY + objH / 2} H${objX(i + 1) - objW / 2 - GAP}`}
            label={{ lines: [i === 0 ? "Gives" : "Fills"], x: (objX(i) + objX(i + 1)) / 2, y: objY + objH / 2, side: "above" }}
          />
        ))}
        {OBJECTS.map((o, i) => (
          <g key={o.name}>
            <rect x={objX(i) - objW / 2} y={objY} width={objW} height={objH} rx={4} fill="#FFFFFF" stroke={INK} />
            <Lines x={objX(i)} y={objY + objH / 2} lines={[o.name]} weight={500} />
            <Lines x={objX(i)} y={objY + objH + 20} lines={[o.where]} size={12} fill={MUTED} />
          </g>
        ))}
      </svg>
    </Panel>
  )
}

/* ------------------------------------------------------------------ */
/* 2. Swimlane: who does what to a document                           */
/* ------------------------------------------------------------------ */

const LANES = ["Exporter", "Importer", "Conduit", "Existing tools"]
const LANE_H = 110
const FLOW_W = 1060
const LABEL_W = 160
const HALF = 66 // every shape is 132 wide, so every arrow between shapes is the same length
const BOX_H = 50
const DIA_H = 40

const cy = (lane: number) => lane * LANE_H + LANE_H / 2

function Box({ x, lane, lines }: { x: number; lane: number; lines: string[] }) {
  const y = cy(lane)
  return (
    <g>
      <rect x={x - HALF} y={y - BOX_H / 2} width={HALF * 2} height={BOX_H} rx={4} fill="#FFFFFF" stroke={STROKE} />
      <Lines x={x} y={y} lines={lines} />
    </g>
  )
}

function Decision({ x, lane, lines }: { x: number; lane: number; lines: string[] }) {
  const y = cy(lane)
  return (
    <g>
      <polygon points={`${x},${y - DIA_H} ${x + HALF},${y} ${x},${y + DIA_H} ${x - HALF},${y}`} fill="#FFFFFF" stroke={INK} />
      <Lines x={x} y={y} lines={lines} />
    </g>
  )
}

/**
 * A swimlane diagram of one document. It arrives from the exporter or through the API,
 * Conduit extracts its fields with the importer's pipeline, an unsure field goes to the
 * importer, and the filled form goes back to the importer's own systems through the API.
 */
export function UserFlow() {
  const step = 180
  const c = [0, 1, 2, 3, 4].map((i) => LABEL_W + 30 + HALF + step * i)
  const top = (lane: number) => cy(lane) - BOX_H / 2
  const bottom = (lane: number) => cy(lane) + BOX_H / 2
  const mid = (a: number, b: number) => (a + b) / 2

  return (
    <Panel bg="/conduit/tile-documents.jpg" label="Swimlane diagram">
      <svg
        viewBox={`0 0 ${FLOW_W} ${LANES.length * LANE_H}`}
        className="w-full min-w-[760px] md:min-w-0 h-auto font-sans"
        role="img"
        aria-label="Swimlane diagram of one document. The exporter sends documents by email or upload, and the importer's existing tools can send them through the API. Conduit receives them and extracts the fields, using the pipeline the importer set up once. If every field is confident, the status changes to Done. If not, the importer reviews the flagged fields and confirms or corrects them first. The extracted data then goes to the importer's existing tools through the API, and Conduit fills the form and sends that through the API too."
      >
        <ArrowDefs id="flow-arrow" />

        {LANES.map((name, i) => (
          <g key={name}>
            <rect x={0} y={i * LANE_H} width={FLOW_W} height={LANE_H} fill={i % 2 ? "#FFFFFF" : TINT} />
            <text x={18} y={cy(i)} dominantBaseline="middle" fontSize={14} fill={INK}>
              {name}
            </text>
          </g>
        ))}
        <line x1={LABEL_W} x2={LABEL_W} y1={0} y2={LANES.length * LANE_H} stroke="rgba(0,0,0,0.08)" />

        {/* In: from the exporter above, or from the importer's systems below */}
        <Edge
          marker="flow-arrow"
          d={`M${c[0]} ${bottom(0)} V${top(2) - GAP}`}
          label={{ lines: ["Email", "or upload"], x: c[0], y: cy(1), side: "right" }}
        />
        <Edge
          marker="flow-arrow"
          d={`M${c[0]} ${top(3)} V${bottom(2) + GAP}`}
          label={{ lines: ["API"], x: c[0], y: mid(bottom(2), top(3)), side: "right" }}
        />
        {/* The importer's pipeline, set up once, drives extraction */}
        <Edge marker="flow-arrow" d={`M${c[1]} ${bottom(1)} V${top(2) - GAP}`} />
        <Edge marker="flow-arrow" d={`M${c[0] + HALF} ${cy(2)} H${c[1] - HALF - GAP}`} />
        <Edge marker="flow-arrow" d={`M${c[1] + HALF} ${cy(2)} H${c[2] - HALF - GAP}`} />
        {/* Confident: done. Unsure: the importer checks first */}
        <Edge
          marker="flow-arrow"
          d={`M${c[2] + HALF} ${cy(2)} H${c[3] - HALF - GAP}`}
          label={{ lines: ["Yes"], x: mid(c[2] + HALF, c[3] - HALF), y: cy(2), side: "above" }}
        />
        <Edge
          marker="flow-arrow"
          d={`M${c[2]} ${cy(2) - DIA_H} V${bottom(1) + GAP}`}
          label={{ lines: ["No"], x: c[2], y: mid(cy(2) - DIA_H, bottom(1)), side: "right" }}
        />
        <Edge
          marker="flow-arrow"
          d={`M${c[2] + HALF} ${cy(1)} H${c[3]} V${top(2) - GAP}`}
          label={{ lines: ["Confirms", "or corrects"], x: mid(c[2] + HALF, c[3]), y: cy(1), side: "above" }}
        />
        <Edge marker="flow-arrow" d={`M${c[3] + HALF} ${cy(2)} H${c[4] - HALF - GAP}`} />
        {/* Out: the extracted data, and then the filled form, go back to existing tools */}
        <Edge
          marker="flow-arrow"
          d={`M${c[3]} ${bottom(2)} V${top(3) - GAP}`}
          label={{ lines: ["API"], x: c[3], y: mid(bottom(2), top(3)), side: "right" }}
        />
        <Edge
          marker="flow-arrow"
          d={`M${c[4]} ${bottom(2)} V${top(3) - GAP}`}
          label={{ lines: ["API"], x: c[4], y: mid(bottom(2), top(3)), side: "right" }}
        />

        <Box x={c[0]} lane={0} lines={["Sends", "documents"]} />
        <Box x={c[1]} lane={1} lines={["Sets up", "a pipeline"]} />
        <Box x={c[2]} lane={1} lines={["Reviews the", "flagged fields"]} />
        <Box x={c[0]} lane={2} lines={["Receives the", "document"]} />
        <Box x={c[1]} lane={2} lines={["Extracts", "the fields"]} />
        <Decision x={c[2]} lane={2} lines={["Every field", "confident?"]} />
        <Box x={c[3]} lane={2} lines={["Status changes", "to Done"]} />
        <Box x={c[4]} lane={2} lines={["Fills", "the form"]} />
        <Box x={c[0]} lane={3} lines={["Sends documents", "automatically"]} />
        <Box x={c[3]} lane={3} lines={["Receives the", "extracted data"]} />
        <Box x={c[4]} lane={3} lines={["Receives", "the form"]} />
      </svg>
    </Panel>
  )
}

/* ------------------------------------------------------------------ */
/* 3. Data flow: documents in, compliance out, set by the importer     */
/* ------------------------------------------------------------------ */

type Stage = { name: string; items: string[] }

// Sources and document types are the ones in the product's inbox; field states are the four a field can arrive in
const STAGES: Stage[] = [
  { name: "Sources", items: ["Email", "Portal upload", "Field scan", "API"] },
  { name: "Documents", items: ["Certificates of origin", "Invoices", "Packing lists", "Bills of lading"] },
  { name: "Fields", items: ["Confident", "Needs review", "Not found", "Corrected"] },
  { name: "Forms", items: ["Internal forms", "Declarations"] },
  { name: "Existing tools", items: ["ERP", "Internal tools", "Customs portals", "WMS"] },
]

const DF_W = 1060
const DF_NODE_W = 150
const DF_NODE_H = 132
const DF_STEP = 222

export function Ecosystem() {
  const x = (i: number) => 81 + DF_STEP * i
  const policyY = 18
  const policyH = 54
  const nodeY = policyY + policyH + 70
  const rowY = nodeY + DF_NODE_H / 2
  const reviewY = nodeY + DF_NODE_H + 64
  const reviewH = 50
  const height = reviewY + reviewH + 12

  // Arrows between stages, with the pipeline that does each step
  const edgeLabels: (string[] | null)[] = [null, ["Extraction", "pipeline"], ["Injection", "pipeline"], ["API"]]
  const edgeMid = (i: number) => (x(i) + DF_NODE_W / 2 + x(i + 1) - DF_NODE_W / 2) / 2
  const policyX = (edgeMid(1) + edgeMid(2)) / 2
  const policyW = edgeMid(2) - edgeMid(1) + 120
  const fieldsX = x(2)

  return (
    <Panel bg="/conduit/tile-beans.jpg" label="Conduit data flow">
      <svg
        viewBox={`0 0 ${DF_W} ${height}`}
        className="w-full min-w-[760px] md:min-w-0 h-auto font-sans"
        role="img"
        aria-label="Data flow. Documents arrive by email, portal upload, field scan or the API: certificates of origin, invoices, packing lists and bills of lading. An extraction pipeline turns each document into fields, which arrive confident, needing review, not found or corrected. Unsure fields go to a person, who confirms or corrects them. An injection pipeline fills internal forms and declarations, which go to the importer's existing tools, such as ERP, internal tools, customs portals and WMS, through the API. The importer's own policy sets both pipelines: which fields to pull and which form they fill."
      >
        <ArrowDefs id="df-arrow" />

        {/* The importer's policy sets both pipelines */}
        <rect x={policyX - policyW / 2} y={policyY} width={policyW} height={policyH} rx={4} fill={INK} />
        <Lines
          x={policyX}
          y={policyY + policyH / 2}
          lines={["The importer's own policy", "decides what to pull and which form it fills"]}
          size={13}
          fill="#FFFFFF"
        />
        {[1, 2].map((i) => (
          <Edge
            key={i}
            marker="df-arrow"
            dashed
            d={`M${edgeMid(i)} ${policyY + policyH} V${rowY - 52 - GAP}`}
            label={{ lines: ["Sets"], x: edgeMid(i), y: (policyY + policyH + rowY - 52) / 2, side: "right" }}
          />
        ))}

        {/* Stages */}
        {STAGES.slice(0, -1).map((_, i) => (
          <Edge
            key={i}
            marker="df-arrow"
            d={`M${x(i) + DF_NODE_W / 2} ${rowY} H${x(i + 1) - DF_NODE_W / 2 - GAP}`}
            label={edgeLabels[i] ? { lines: edgeLabels[i]!, x: edgeMid(i), y: rowY, side: "above" } : undefined}
          />
        ))}
        {STAGES.map((s, i) => {
          const left = x(i) - DF_NODE_W / 2
          return (
            <g key={s.name}>
              <rect x={left} y={nodeY} width={DF_NODE_W} height={DF_NODE_H} rx={4} fill="#FFFFFF" stroke={STROKE} />
              <Lines x={x(i)} y={nodeY + 22} lines={[s.name]} weight={500} />
              <line x1={left + 12} x2={left + DF_NODE_W - 12} y1={nodeY + 40} y2={nodeY + 40} stroke="rgba(0,0,0,0.1)" />
              {s.items.map((it, k) => (
                <text key={it} x={x(i)} y={nodeY + 60 + k * 19} textAnchor="middle" dominantBaseline="middle" fontSize={12.5} fill={MUTED}>
                  {it}
                </text>
              ))}
            </g>
          )
        })}

        {/* Unsure fields go to a person and come back */}
        <Edge
          marker="df-arrow"
          d={`M${fieldsX - 40} ${nodeY + DF_NODE_H} V${reviewY - GAP}`}
          label={{ lines: ["Unsure", "fields"], x: fieldsX - 40, y: (nodeY + DF_NODE_H + reviewY) / 2, side: "left" }}
        />
        <Edge
          marker="df-arrow"
          d={`M${fieldsX + 40} ${reviewY} V${nodeY + DF_NODE_H + GAP}`}
          label={{ lines: ["Corrected"], x: fieldsX + 40, y: (nodeY + DF_NODE_H + reviewY) / 2, side: "right" }}
        />
        <rect x={fieldsX - 90} y={reviewY} width={180} height={reviewH} rx={4} fill="#FFFFFF" stroke={STROKE} />
        <Lines x={fieldsX} y={reviewY + reviewH / 2} lines={["A person confirms", "or corrects"]} />
      </svg>
    </Panel>
  )
}

/* ------------------------------------------------------------------ */
/* 4. Before: the first direction, and why it was dropped              */
/*    Same before / after card language as the Veeqo diagrams          */
/* ------------------------------------------------------------------ */

const BRAND = "#B4532A"

function Pill({ children, accent = false }: { children: ReactNode; accent?: boolean }) {
  return (
    <span
      className="inline-block text-white text-[11px] font-medium px-2 py-1 rounded leading-none"
      style={{ background: accent ? BRAND : "#3D3D3D" }}
    >
      {children}
    </span>
  )
}

function DocIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden className="shrink-0">
      <path d="M3 1.5h5l3 3v8H3z" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round" />
      <path d="M8 1.5v3h3M5 7.5h4M5 9.5h4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  )
}

/** Short down arrow between stacked steps */
function StepArrow() {
  return (
    <div className="flex justify-center py-1" aria-hidden>
      <svg width="10" height="16" viewBox="0 0 10 16" fill="none">
        <path d="M5 0v13M1.5 9.5 5 13l3.5-3.5" stroke={MUTED} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  )
}

// Field names as they appear in the product
const FLAG_NOTES = [
  { text: "certificateId · flagged", bg: "#F6B98F", rot: "-3deg" },
  { text: "expiryDate · flagged", bg: "#A9C8F5", rot: "2.5deg" },
  { text: "reference · flagged", bg: "#CDB6F2", rot: "-2deg" },
  { text: "issueDate · flagged?", bg: "#F5B3CF", rot: "3deg" },
]

const BEFORE_REASONS = [
  {
    title: "Conduit's rules fit few importers",
    body: "Every importer checks documents against its own policy, so one structure and one set of flags missed most of them.",
  },
  {
    title: "Too much to review",
    body: "Pulling every field meant reviewing data that no form needed.",
  },
]

export function BeforeFlow() {
  return (
    <div className="relative rounded-lg overflow-hidden" role="group" aria-label="First direction">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/conduit/tile-hands.jpg" alt="" aria-hidden className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-black/25" aria-hidden />

      <div className="relative grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-4 md:gap-3 items-center p-4 sm:p-6 md:p-8">
        {/* What Conduit did */}
        <div className="bg-white rounded-md border border-black/10 shadow-[0_8px_24px_rgba(0,0,0,0.18)] p-4 self-stretch">
          <Pill>Before</Pill>

          {/* The first direction, step by step */}
          <div className="mt-4">
            {["All incoming documents", "Grouped by Conduit's pre-defined structure", "Every field extracted"].map((step) => (
              <div key={step}>
                <div className="flex items-center gap-2 rounded border border-black/15 bg-white px-3 py-2 text-[13px]">
                  <DocIcon />
                  {step}
                </div>
                <StepArrow />
              </div>
            ))}
          </div>

          <div className="rounded border border-dashed p-3 pb-4" style={{ borderColor: `${BRAND}80` }}>
            <p className="text-[13px] font-medium mb-3" style={{ color: BRAND }}>
              Fields flagged against Conduit&apos;s rules
            </p>
            <div className="flex flex-col items-start gap-1.5">
              {FLAG_NOTES.map((n, i) => (
                <span
                  key={n.text}
                  className="text-[12px] font-medium text-black/80 px-2.5 py-1.5 shadow-[0_2px_6px_rgba(0,0,0,0.12)]"
                  style={{ background: n.bg, transform: `rotate(${n.rot})`, marginLeft: `${(i % 2) * 18}px` }}
                >
                  {n.text}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Arrow badge */}
        <div className="flex justify-center">
          <span className="grid place-items-center w-10 h-10 rounded-full bg-white shadow-[0_4px_14px_rgba(0,0,0,0.2)] rotate-90 md:rotate-0">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden>
              <path d="M3 9h12M10 4l5 5-5 5" stroke={BRAND} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
        </div>

        {/* Why it failed */}
        <div className="bg-white rounded-md border border-black/10 shadow-[0_8px_24px_rgba(0,0,0,0.18)] p-4 self-stretch">
          <Pill accent>It didn&apos;t match many importers&apos; policies</Pill>
          <div className="mt-4 space-y-2.5">
            {BEFORE_REASONS.map((r) => (
              <div key={r.title} className="flex gap-3 rounded border border-black/10 p-3">
                <span
                  className="grid place-items-center w-6 h-6 rounded shrink-0"
                  style={{ background: `${BRAND}1A`, color: BRAND }}
                  aria-hidden
                >
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                    <path d="M2 2l6 6M8 2l-6 6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                  </svg>
                </span>
                <div>
                  <p className="text-[13px] font-medium">{r.title}</p>
                  <p className="text-[12.5px] leading-snug text-muted-foreground mt-0.5">{r.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
