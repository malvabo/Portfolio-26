"use client"

import { ExplainerCard, ExplainerStage, ExplainerTitle } from "@/components/explainer-stage"

/* Paid plans: plans as a staircase that rises with order volume, then how a seller moves between them.
   Free stays neutral; paid steps deepen in the brand blue. */

const PLANS = [
  {
    name: "Shipping",
    price: "Free",
    forWho: "Every seller, from day one",
    features: ["Shipping labels", "Unlimited users, SKUs and warehouses"],
    h: 46,
    bg: "#F2F0EB",
    ink: "text-foreground",
  },
  {
    name: "Inventory",
    price: "Paid",
    forWho: "Sellers on several channels",
    features: ["Everything in Shipping", "Multichannel inventory sync"],
    h: 70,
    bg: "#E1E8F5",
    ink: "text-[#28447A]",
  },
  {
    name: "High Volume",
    price: "Paid",
    forWho: "Busy warehouses",
    features: ["Everything in Inventory", "Digital picking", "Demand forecasting", "ERP integrations"],
    h: 100,
    bg: "#C9D5EC",
    ink: "text-[#28447A]",
  },
]

function PlanTick() {
  return (
    <svg width="12" height="12" viewBox="0 0 14 14" fill="none" aria-hidden className="mt-[3px] shrink-0">
      <path d="M2.5 7.5l3 3 6-7" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function PlanStaircase() {
  return (
    <ExplainerStage bg="/images/veeqo-tile-market.jpg">
      <ExplainerCard className="sm:!p-6">
        <ExplainerTitle>The price rises with orders</ExplainerTitle>

        {/* Staircase: step height stands for monthly order volume */}
        <ul className="grid grid-cols-3 gap-1.5 sm:gap-2 items-end h-[340px] sm:h-[300px] border-b border-black/15" aria-label="Plans">
          {PLANS.map((p) => (
            <li key={p.name} className={`rounded-t p-2.5 sm:p-3 flex flex-col ${p.ink}`} style={{ height: `${p.h}%`, background: p.bg }}>
              <span className="flex items-baseline justify-between gap-2">
                <span className="text-[13px] sm:text-[14px] font-medium leading-tight">{p.name}</span>
                <span className="text-[11px] sm:text-[12px] opacity-70">{p.price}</span>
              </span>
              <span className="mt-1 text-[11px] sm:text-[12px] opacity-70 leading-snug">{p.forWho}</span>
              <ul className="mt-3 space-y-1">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-1.5 text-[11px] sm:text-[12px] leading-snug">
                    <PlanTick />
                    {f}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
        <div className="mt-1.5 flex items-center justify-between gap-3 text-[11px] text-muted-foreground">
          <span>No caps on users, SKUs or warehouses on any plan</span>
          <span className="flex items-center gap-1.5 shrink-0">
            Monthly seller-fulfilled orders
            <svg width="14" height="10" viewBox="0 0 14 10" fill="none" aria-hidden>
              <path d="M1 5h11M8 1l4 4-4 4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
        </div>
      </ExplainerCard>
    </ExplainerStage>
  )
}

/* Rollout roadmap: the team's workstreams in the order they ran, each on its own track across the stages.
   How long each bar runs is a reading of the case, which gives no dates. */

const STAGES = ["Discovery", "Design", "Build", "Launch"]

const LANES: { lane: string; from: number; to: number; text: string; live?: boolean }[] = [
  { lane: "Research", from: 0, to: 0, text: "Seller interviews on limits and price" },
  { lane: "Design", from: 0, to: 2, text: "Plans, limits, upgrade paths, trials and grace periods" },
  { lane: "Marketing", from: 1, to: 3, text: "Plan packaging, pricing page, messaging and launch campaign" },
  { lane: "Engineering", from: 1, to: 2, text: "Gating, advance notice and grace periods on iOS, Android, devices and web" },
]

export function LegacyAndRoadmap() {
  return (
    <ExplainerStage bg="/images/veeqo-tile-sellers.jpg">
      <ExplainerCard className="sm:!p-6">
        <ExplainerTitle>Paid plan rollout roadmap</ExplainerTitle>

        {/* Desktop: each lane is a track across the stages, the bar sits on it */}
        <div className="hidden md:grid grid-cols-[104px_repeat(4,minmax(0,1fr))] gap-x-1 gap-y-1.5 items-center text-[12px] leading-snug">
          <span style={{ gridRow: 1, gridColumn: 1 }} />
          {STAGES.map((st, i) => (
            <span key={st} className="text-muted-foreground px-2" style={{ gridRow: 1, gridColumn: i + 2 }}>
              {st}
            </span>
          ))}
          <span className="h-px bg-black/10 mb-1" style={{ gridRow: 2, gridColumn: "1 / -1" }} aria-hidden />
          {LANES.map((l, r) => (
            <div key={l.lane} className="contents">
              <span className="font-medium text-foreground" style={{ gridRow: r + 3, gridColumn: 1 }}>
                {l.lane}
              </span>
              <span className="h-full min-h-8 rounded bg-black/[0.025]" style={{ gridRow: r + 3, gridColumn: "2 / -1" }} aria-hidden />
              <span
                className={`relative rounded px-2 py-1.5 ${l.live ? "bg-[#E1E8F5] text-[#28447A]" : "bg-[#E8E3DD] text-foreground/85"}`}
                style={{ gridRow: r + 3, gridColumn: `${l.from + 2} / ${l.to + 3}` }}
              >
                {l.text}
              </span>
            </div>
          ))}
        </div>

        {/* Mobile: one lane per row, with its stages */}
        <dl className="md:hidden divide-y divide-black/10 border-t border-black/10 text-[13px] leading-snug">
          {LANES.map((l) => (
            <div key={l.lane} className="py-2.5">
              <dt className="flex justify-between gap-3">
                <span className="font-medium text-foreground">{l.lane}</span>
                <span className="text-[12px] text-muted-foreground">
                  {l.from === l.to ? STAGES[l.from] : `${STAGES[l.from]} to ${STAGES[l.to].toLowerCase()}`}
                </span>
              </dt>
              <dd className="mt-1 text-foreground/80">{l.text}</dd>
            </div>
          ))}
        </dl>
      </ExplainerCard>
    </ExplainerStage>
  )
}

/* Detailed user flows for trials, limits and downgrades. Each flow runs down one main path;
   decisions exit to the side, with yes and no on every branch. */

type FlowNode = [number, number, number, number, string, "n" | "b" | "d"]
const FLOW_NODES: FlowNode[] = [[0, 20, 110, 24, "Opens paid feature", "n"], [55, 76, 40, 16, "In their plan?", "d"], [124, 64, 76, 24, "Opens as usual", "b"], [0, 108, 110, 24, "Explainer", "n"], [0, 148, 110, 24, "Free trial, no card", "n"], [0, 188, 110, 24, "Trial reminders", "n"], [55, 244, 30, 16, "Upgrades?", "d"], [124, 232, 76, 24, "Feature locks", "n"], [0, 284, 110, 24, "Feature stays on", "b"], [220, 20, 110, 24, "Monthly orders rise", "n"], [275, 76, 42, 16, "Over the band?", "d"], [344, 64, 76, 24, "No change", "b"], [220, 108, 110, 24, "Notice in advance", "n"], [220, 148, 110, 24, "Grace period", "n"], [220, 188, 110, 24, "Banners in every app", "n"], [275, 244, 30, 16, "Upgrades?", "d"], [344, 232, 76, 24, "Limits kick in", "n"], [220, 284, 110, 24, "Higher plan", "b"], [440, 20, 110, 24, "Chooses free plan", "n"], [495, 76, 36, 16, "Confirms?", "d"], [564, 64, 76, 24, "Stays on plan", "b"], [440, 108, 110, 24, "Paid until cycle ends", "n"], [440, 148, 110, 24, "Paid features lock", "n"], [440, 188, 110, 24, "All data kept", "n"], [495, 244, 44, 16, "Upgrades again?", "d"], [564, 232, 76, 24, "Stays on free", "n"], [440, 284, 110, 24, "Data still there", "b"]]
const FLOW_PATHS = ["M55 44v14", "M55 92v14", "M55 132v14", "M55 172v14", "M55 212v14", "M55 260v22", "M95 76H122", "M85 244H122", "M275 44v14", "M275 92v14", "M275 132v14", "M275 172v14", "M275 212v14", "M275 260v22", "M317 76H342", "M305 244H342", "M495 44v14", "M495 92v14", "M495 132v14", "M495 172v14", "M495 212v14", "M495 260v22", "M531 76H562", "M539 244H562"]
const FLOW_LABELS: [number, number, string, "start" | "middle"][] = [[99, 71, "Yes", "start"], [60, 103, "No", "start"], [89, 239, "No", "start"], [60, 271, "Yes", "start"], [321, 71, "No", "start"], [280, 103, "Yes", "start"], [309, 239, "No", "start"], [280, 271, "Yes", "start"], [382, 267, "Shipping still works", "middle"], [535, 71, "No", "start"], [500, 103, "Yes", "start"], [543, 239, "No", "start"], [500, 271, "Yes", "start"]]

export function UserFlows() {
  return (
    <ExplainerStage bg="/images/veeqo-tile-churn.jpg">
      <ExplainerCard className="sm:!p-6">
        <ExplainerTitle>User flows for plans, trials and limits</ExplainerTitle>
        <div aria-hidden>
          <svg viewBox="0 0 640 352" className="w-full h-auto">
            <defs>
              <marker id="flow-arrow" viewBox="0 0 8 8" refX="7" refY="4" markerWidth="6" markerHeight="6" orient="auto">
                <path d="M0 0L8 4L0 8z" fill="#9a958d" />
              </marker>
            </defs>
            <g fontSize="11" fontWeight="500" fill="#1a1a1a">
              <text x="0" y="12">Try a paid feature</text>
              <text x="220" y="12">Reach a plan limit</text>
              <text x="440" y="12">Downgrade</text>
            </g>
            <g fontSize="9.5" fill="#7a746c">
              <text x="0" y="27">A free trial, no card needed</text>
              <text x="220" y="27">Notice and a grace period first</text>
              <text x="440" y="27">Paid until the cycle ends</text>
            </g>
            <g transform="translate(0 22)">
              <g stroke="#9a958d" strokeWidth="1" fill="none" markerEnd="url(#flow-arrow)">
                {FLOW_PATHS.map((d) => (
                  <path key={d} d={d} />
                ))}
              </g>
              <g fontSize="9.5" fill="#3d3d3d" textAnchor="middle">
                {FLOW_NODES.map(([x, y, w, h, t, k]) =>
                  k === "d" ? (
                    <g key={t + x}>
                      <path d={`M${x} ${y - h}l${w} ${h}-${w} ${h}-${w}-${h}z`} fill="#fff" stroke="#c9c4bc" />
                      <text x={x} y={y + 2.8} fontSize="8">{t}</text>
                    </g>
                  ) : (
                    <g key={t + x + y}>
                      <rect x={x} y={y} width={w} height={h} rx="4" fill={k === "b" ? "#E1E8F5" : "#F2F0EB"} />
                      <text x={x + w / 2} y={y + h / 2 + 3.5}>{t}</text>
                    </g>
                  ),
                )}
              </g>
              <g fontSize="9" fill="#7a746c">
                {FLOW_LABELS.map(([x, y, t, a]) => (
                  <text key={t + x + y} x={x} y={y} textAnchor={a}>
                    {t}
                  </text>
                ))}
              </g>
              <g stroke="#c9c4bc" strokeDasharray="3 3">
                <path d="M210 0v320M430 0v320" />
              </g>
            </g>
          </svg>
        </div>
      </ExplainerCard>
    </ExplainerStage>
  )
}
