"use client"

import type { ReactNode } from "react"

/* Conduit diagrams, drawn as white cards on a photographic stage (same style as the Veeqo ones) */

const STROKE = "rgba(0,0,0,0.28)"
const MUTED = "#6B6B6B"
const INK = "#1F1F1F"
const TINT = "#F7F5F2"

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
function Lines({ x, y, lines, size = 14, weight, fill = INK }: { x: number; y: number; lines: string[]; size?: number; weight?: number; fill?: string }) {
  const lh = size * 1.2
  const start = y - ((lines.length - 1) * lh) / 2
  return (
    <text x={x} textAnchor="middle" dominantBaseline="middle" fontSize={size} fontWeight={weight} fill={fill}>
      {lines.map((l, i) => (
        <tspan key={l} x={x} y={start + i * lh}>
          {l}
        </tspan>
      ))}
    </text>
  )
}

/* ------------------------------------------------------------------ */
/* Information architecture: a sitemap of the product's screens        */
/* ------------------------------------------------------------------ */

type IANode = { name: string; level: 2 | 3 }
type IAColumn = { name: string; children: IANode[] }

// Taken from the product's own navigation and screens
const IA: IAColumn[] = [
  { name: "Home", children: [] },
  {
    name: "Inbox",
    children: [
      { name: "All documents", level: 2 },
      { name: "By shipment", level: 2 },
      { name: "Document review", level: 3 },
    ],
  },
  {
    name: "Pipelines",
    children: [
      { name: "All pipelines", level: 2 },
      { name: "New pipeline", level: 2 },
      { name: "Extract", level: 3 },
      { name: "Inject", level: 3 },
      { name: "Pipeline editor", level: 2 },
      { name: "Configure", level: 3 },
      { name: "Results", level: 3 },
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

const IA_W = 1060
const IA_COL = 172 // column spacing
const IA_X0 = 105 // first column centre
const ROOT_Y = 16
const ROOT_H = 40
const BUS_Y = 84 // horizontal line joining the main sections
const L1_Y = 108
const L1_W = 150
const L1_H = 42
const CHILD_Y = L1_Y + L1_H + 24 // top of the first child
const CHILD_H = 34
const CHILD_STEP = 46

export function InformationArchitecture() {
  const colX = (i: number) => IA_X0 + IA_COL * i
  const rootX = (colX(0) + colX(IA.length - 1)) / 2
  const tallest = Math.max(...IA.map((c) => c.children.length))
  const height = CHILD_Y + Math.max(0, tallest - 1) * CHILD_STEP + CHILD_H + 8

  return (
    <Panel bg="/conduit/tile-sacks.jpg" label="Information architecture">
      <svg
        viewBox={`0 0 ${IA_W} ${height}`}
        className="w-full min-w-[760px] md:min-w-0 h-auto font-sans"
        role="img"
        aria-label="Sitemap. Conduit has six main sections: Home; Inbox, with all documents, a view by shipment, and document review; Pipelines, with all pipelines, a new pipeline of type Extract or Inject, and the pipeline editor with Configure and Results; Runs, with all runs; Settings, with Developers and Workspace; and Help, with Documentation and What's new."
      >
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
              {/* One unbroken spine from the section down to its last screen */}
              {last >= 0 && <path d={`M${spineX} ${L1_Y + L1_H} V${centreY(last)}`} fill="none" stroke={STROKE} />}
              {col.children.map((ch, k) => {
                const left = ch.level === 2 ? spineX + 14 : spineX + 28
                const w = x + L1_W / 2 - left
                const top = CHILD_Y + k * CHILD_STEP
                return (
                  <g key={ch.name}>
                    <path d={`M${spineX} ${centreY(k)} H${left}`} fill="none" stroke={STROKE} />
                    <rect x={left} y={top} width={w} height={CHILD_H} rx={4} fill={ch.level === 2 ? "#FFFFFF" : TINT} stroke={STROKE} />
                    <Lines x={left + w / 2} y={top + CHILD_H / 2} lines={[ch.name]} size={ch.level === 2 ? 13.5 : 12.5} fill={ch.level === 2 ? INK : MUTED} />
                  </g>
                )
              })}
              <rect x={x - L1_W / 2} y={L1_Y} width={L1_W} height={L1_H} rx={4} fill="#FFFFFF" stroke={INK} />
              <Lines x={x} y={L1_Y + L1_H / 2} lines={[col.name]} weight={500} />
            </g>
          )
        })}
      </svg>
    </Panel>
  )
}

/* ------------------------------------------------------------------ */
/* Swimlane process: who does what as a shipment moves through Conduit */
/* ------------------------------------------------------------------ */

const LANES = ["Importer", "Conduit", "Exporter"]
const LANE_H = 120
const FLOW_W = 1060
const LABEL_W = 110
const HALF = 66 // every shape is 132 wide, so every arrow between shapes is the same length
const BOX_H = 50
const DIA_H = 40
const GAP = 2 // arrow tips stop just short of the shape they point at
const LABEL_OFFSET = 9 // labels sit this far above a horizontal line, or right of a vertical one

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
      <polygon points={`${x},${y - DIA_H} ${x + HALF},${y} ${x},${y + DIA_H} ${x - HALF},${y}`} fill="#FFFFFF" stroke={STROKE} />
      <Lines x={x} y={y} lines={lines} />
    </g>
  )
}

/** Labels follow one rule: above the middle of a horizontal run, or to the right of the middle of a vertical one */
function Edge({ d, label }: { d: string; label?: { lines: string[]; x: number; y: number; side: "above" | "right" } }) {
  return (
    <g>
      <path d={d} fill="none" stroke={MUTED} strokeWidth={1.2} markerEnd="url(#flow-arrow)" />
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
          <text x={label.x + LABEL_OFFSET} y={label.y} dominantBaseline="middle" fontSize={12} fill={MUTED}>
            {label.lines[0]}
          </text>
        ))}
    </g>
  )
}

/**
 * A swimlane diagram: the importer sets a pipeline up once, the exporter sends documents,
 * and Conduit extracts the fields. One decision carries the design: an unsure field goes
 * to the importer before the shipment is marked done and the form is filled.
 */
export function UserFlow() {
  const step = 190
  const c = [LABEL_W + 30 + HALF, 0, 0, 0, 0].map((_, i) => LABEL_W + 30 + HALF + step * i)
  const boxT = (lane: number) => cy(lane) - BOX_H / 2
  const boxB = (lane: number) => cy(lane) + BOX_H / 2

  return (
    <Panel bg="/conduit/tile-documents.jpg" label="Swimlane diagram">
      <svg
        viewBox={`0 0 ${FLOW_W} ${LANES.length * LANE_H}`}
        className="w-full min-w-[760px] md:min-w-0 h-auto font-sans"
        role="img"
        aria-label="Swimlane diagram. The importer sets up and tests a pipeline, and the exporter sends shipment documents. Conduit groups them and extracts the fields. If every field is confident, the status changes to Done. If not, the importer reviews the flagged fields and confirms or corrects them, and then the status changes to Done. Conduit then fills the compliance form."
      >
        <defs>
          <marker id="flow-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
            <path d="M0 0L10 5L0 10z" fill={MUTED} />
          </marker>
        </defs>

        {/* Lanes */}
        {LANES.map((name, i) => (
          <g key={name}>
            <rect x={0} y={i * LANE_H} width={FLOW_W} height={LANE_H} fill={i % 2 ? "#FFFFFF" : TINT} />
            <text x={18} y={cy(i)} dominantBaseline="middle" fontSize={14} fill={INK}>
              {name}
            </text>
          </g>
        ))}
        <line x1={LABEL_W} x2={LABEL_W} y1={0} y2={LANES.length * LANE_H} stroke="rgba(0,0,0,0.08)" />

        {/* Edges first, so shapes sit on top */}
        <Edge
          d={`M${c[0] + HALF} ${cy(0)} H${c[1]} V${boxT(1) - GAP}`}
          label={{ lines: ["Pipeline"], x: (c[0] + HALF + c[1]) / 2, y: cy(0), side: "above" }}
        />
        <Edge d={`M${c[0] + HALF} ${cy(2)} H${c[1]} V${boxB(1) + GAP}`} />
        <Edge d={`M${c[1] + HALF} ${cy(1)} H${c[2] - HALF - GAP}`} />
        <Edge
          d={`M${c[2] + HALF} ${cy(1)} H${c[3] - HALF - GAP}`}
          label={{ lines: ["Yes"], x: (c[2] + c[3]) / 2, y: cy(1), side: "above" }}
        />
        <Edge
          d={`M${c[2]} ${cy(1) - DIA_H} V${boxB(0) + GAP}`}
          label={{ lines: ["No"], x: c[2], y: (cy(1) - DIA_H + boxB(0)) / 2, side: "right" }}
        />
        <Edge
          d={`M${c[2] + HALF} ${cy(0)} H${c[3]} V${boxT(1) - GAP}`}
          label={{ lines: ["Confirms", "or corrects"], x: (c[2] + HALF + c[3]) / 2, y: cy(0), side: "above" }}
        />
        <Edge d={`M${c[3] + HALF} ${cy(1)} H${c[4] - HALF - GAP}`} />

        {/* Shapes */}
        <Box x={c[0]} lane={0} lines={["Sets up and", "tests a pipeline"]} />
        <Box x={c[0]} lane={2} lines={["Sends shipment", "documents"]} />
        <Box x={c[1]} lane={1} lines={["Groups and", "extracts fields"]} />
        <Decision x={c[2]} lane={1} lines={["Every field", "confident?"]} />
        <Box x={c[2]} lane={0} lines={["Reviews the", "flagged fields"]} />
        <Box x={c[3]} lane={1} lines={["Status changes", "to Done"]} />
        <Box x={c[4]} lane={1} lines={["Fills the", "compliance form"]} />
      </svg>
    </Panel>
  )
}

/* ------------------------------------------------------------------ */
/* Ecosystem: documents in, compliance out, powered by pipelines      */
/* ------------------------------------------------------------------ */

type EcoGroup = { label: string; items: string[]; y: number }

const ECO_W = 1060
const ECO_ITEM_W = 250
const ECO_ITEM_H = 34
const ECO_STEP = 42
const ECO_LEFT = 80 // left edge of the documents column
const ECO_RIGHT = ECO_W - ECO_LEFT - ECO_ITEM_W // left edge of the compliance column
const ECO_CORE_W = 200
const ECO_CORE_H = 110
const ECO_BRANCH = 30 // item edge to its spine

const DOCUMENTS: EcoGroup[] = [
  { label: "Incoming", y: 78, items: ["Certificate of origin", "Supplier documents", "Batches"] },
  { label: "Monitoring", y: 252, items: ["At-risk shipments", "Needs review", "Missing files"] },
]
const COMPLIANCE: EcoGroup[] = [
  { label: "Forms", y: 78, items: ["Internal forms", "Declarations"] },
  { label: "Acting on", y: 252, items: ["Filing documents", "Comparing data", "Flagging risks"] },
]
const PIPELINE_TYPES = ["Extraction", "Injection", "Agent", "API"]

/** One side of the ecosystem: a heading, its groups, and a spine joining every item */
function EcoSide({ title, groups, x, spineX }: { title: string; groups: EcoGroup[]; x: number; spineX: number }) {
  const centres = groups.flatMap((g) => g.items.map((_, k) => g.y + 18 + k * ECO_STEP + ECO_ITEM_H / 2))
  const itemEdge = spineX > x ? x + ECO_ITEM_W : x
  return (
    <g>
      <text x={x} y={34} fontSize={16} fontWeight={500} fill={INK}>
        {title}
      </text>
      <path d={`M${spineX} ${centres[0]} V${centres[centres.length - 1]}`} fill="none" stroke={STROKE} />
      {groups.map((g) => (
        <g key={g.label}>
          <text x={x} y={g.y} fontSize={13} fill={MUTED}>
            {g.label}
          </text>
          {g.items.map((item, k) => {
            const top = g.y + 18 + k * ECO_STEP
            return (
              <g key={item}>
                <path d={`M${itemEdge} ${top + ECO_ITEM_H / 2} H${spineX}`} fill="none" stroke={STROKE} />
                <rect x={x} y={top} width={ECO_ITEM_W} height={ECO_ITEM_H} rx={4} fill="#FFFFFF" stroke={STROKE} />
                <Lines x={x + ECO_ITEM_W / 2} y={top + ECO_ITEM_H / 2} lines={[item]} size={13.5} />
              </g>
            )
          })}
        </g>
      ))}
    </g>
  )
}

export function Ecosystem() {
  const leftSpine = ECO_LEFT + ECO_ITEM_W + ECO_BRANCH
  const rightSpine = ECO_RIGHT - ECO_BRANCH
  // The core sits on the line through the middle of both spines
  const allCentres = DOCUMENTS.flatMap((g) => g.items.map((_, k) => g.y + 18 + k * ECO_STEP + ECO_ITEM_H / 2))
  const midY = (allCentres[0] + allCentres[allCentres.length - 1]) / 2
  const coreX = ECO_W / 2 - ECO_CORE_W / 2
  const coreY = midY - ECO_CORE_H / 2

  const chipW = 92
  const chipGap = 8
  const pipeW = PIPELINE_TYPES.length * chipW + (PIPELINE_TYPES.length - 1) * chipGap + 32
  const pipeY = allCentres[allCentres.length - 1] + ECO_ITEM_H / 2 + 44
  const pipeH = 84
  const height = pipeY + pipeH + 8

  return (
    <Panel bg="/conduit/tile-beans.jpg" label="Conduit ecosystem">
      <svg
        viewBox={`0 0 ${ECO_W} ${height}`}
        className="w-full min-w-[760px] md:min-w-0 h-auto font-sans"
        role="img"
        aria-label="Ecosystem. Documents come into Conduit: incoming certificates of origin, supplier documents and batches, and monitoring of at-risk shipments, documents that need review and missing files. Compliance comes out: internal forms and declarations, and acting on them by filing documents, comparing data and flagging risks. Conduit runs on the importer's own pipelines: extraction, injection, agent and API."
      >
        <defs>
          <marker id="eco-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
            <path d="M0 0L10 5L0 10z" fill={MUTED} />
          </marker>
        </defs>

        <EcoSide title="Documents" groups={DOCUMENTS} x={ECO_LEFT} spineX={leftSpine} />
        <EcoSide title="Compliance" groups={COMPLIANCE} x={ECO_RIGHT} spineX={rightSpine} />

        {/* Documents in, compliance out: the same length on both sides */}
        <path d={`M${leftSpine} ${midY} H${coreX - GAP}`} fill="none" stroke={MUTED} strokeWidth={1.2} markerEnd="url(#eco-arrow)" />
        <path d={`M${coreX + ECO_CORE_W} ${midY} H${rightSpine - GAP}`} fill="none" stroke={MUTED} strokeWidth={1.2} markerEnd="url(#eco-arrow)" />
        <text x={(leftSpine + coreX) / 2} y={midY - LABEL_OFFSET} textAnchor="middle" fontSize={12} fill={MUTED}>
          In
        </text>
        <text x={(coreX + ECO_CORE_W + rightSpine) / 2} y={midY - LABEL_OFFSET} textAnchor="middle" fontSize={12} fill={MUTED}>
          Out
        </text>

        {/* Pipelines power the core */}
        <path d={`M${ECO_W / 2} ${pipeY} V${coreY + ECO_CORE_H + GAP}`} fill="none" stroke={MUTED} strokeWidth={1.2} markerEnd="url(#eco-arrow)" />
        <text x={ECO_W / 2 + LABEL_OFFSET} y={(pipeY + coreY + ECO_CORE_H) / 2} dominantBaseline="middle" fontSize={12} fill={MUTED}>
          Powers
        </text>

        {/* Core */}
        <rect x={coreX} y={coreY} width={ECO_CORE_W} height={ECO_CORE_H} rx={6} fill={INK} />
        <Lines x={ECO_W / 2} y={coreY + 36} lines={["Conduit"]} size={18} weight={500} fill="#FFFFFF" />
        <Lines x={ECO_W / 2} y={coreY + 74} lines={["Compliance", "intelligence system"]} size={13} fill="rgba(255,255,255,0.72)" />

        {/* Pipelines */}
        <rect x={ECO_W / 2 - pipeW / 2} y={pipeY} width={pipeW} height={pipeH} rx={6} fill={TINT} stroke={STROKE} />
        <Lines x={ECO_W / 2} y={pipeY + 20} lines={["The importer's own pipelines"]} size={13} fill={MUTED} />
        {PIPELINE_TYPES.map((t, i) => {
          const x = ECO_W / 2 - pipeW / 2 + 16 + i * (chipW + chipGap)
          return (
            <g key={t}>
              <rect x={x} y={pipeY + 38} width={chipW} height={ECO_ITEM_H} rx={4} fill="#FFFFFF" stroke={STROKE} />
              <Lines x={x + chipW / 2} y={pipeY + 38 + ECO_ITEM_H / 2} lines={[t]} size={13.5} />
            </g>
          )
        })}
      </svg>
    </Panel>
  )
}
