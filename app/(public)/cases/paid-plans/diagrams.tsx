"use client"

import { ExplainerCard, ExplainerStage, ExplainerTitle } from "@/components/explainer-stage"

/* Paid plans: plans as a staircase that rises with order volume, then how a seller moves between them.
   Free stays neutral; paid steps deepen in the brand blue. */

const PLANS = [
  { name: "Shipping", gets: "Unlimited users", paid: false, h: 56, bg: "#F2F0EB", fg: "text-foreground" },
  { name: "Inventory", gets: "Inventory sync", paid: true, h: 72, bg: "#E1E8F5", fg: "text-[#28447A]" },
  { name: "High Volume", gets: "Warehouse features", paid: true, h: 96, bg: "#C9D5EC", fg: "text-[#28447A]" },
]

const PATH = [
  { title: "Try a feature", text: "Free trial without a card" },
  { title: "Reach a limit", text: "Grace period, work carries on" },
  { title: "Downgrade", text: "Nothing is lost" },
]

export function PlanStaircase() {
  return (
    <ExplainerStage bg="/images/veeqo-tile-market.jpg">
      <ExplainerCard className="sm:!p-6">
        <ExplainerTitle>The price rises with orders</ExplainerTitle>

        {/* Staircase: step height stands for monthly order volume */}
        <ul className="grid grid-cols-3 gap-1.5 sm:gap-2 items-end h-48 sm:h-40 border-b border-black/15" aria-label="Plans">
          {PLANS.map((p) => (
            <li key={p.name} className={`rounded-t p-2 sm:p-2.5 flex flex-col ${p.fg}`} style={{ height: `${p.h}%`, background: p.bg }}>
              <span className="text-[12px] sm:text-[13px] font-medium leading-tight">{p.name}</span>
              <span className="mt-0.5 text-[11px] sm:text-[12px] opacity-75 leading-snug">{p.gets}</span>
              <span className="mt-auto text-[12px] opacity-70">{p.paid ? "Paid" : "Free"}</span>
            </li>
          ))}
        </ul>
        <p className="mt-1.5 flex items-center justify-end gap-1.5 text-[11px] text-muted-foreground">
          Monthly seller-fulfilled orders
          <svg width="14" height="10" viewBox="0 0 14 10" fill="none" aria-hidden>
            <path d="M1 5h11M8 1l4 4-4 4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </p>

        {/* Moving between plans: the same rules on every platform */}
        <p className="mt-5 text-[12px] text-muted-foreground">Moving between plans</p>
        <ul className="mt-2 grid grid-cols-3 gap-1.5 sm:gap-2" aria-label="Moving between plans">
          {PATH.map((s) => (
            <li key={s.title} className="rounded border border-black/10 px-2 py-1.5 sm:px-2.5 sm:py-2">
              <span className="block text-[12px] sm:text-[13px] font-medium leading-tight text-[#28447A]">{s.title}</span>
              <span className="mt-0.5 block text-[11px] sm:text-[12px] leading-snug text-muted-foreground">{s.text}</span>
            </li>
          ))}
        </ul>
      </ExplainerCard>
    </ExplainerStage>
  )
}

/* Rollout roadmap: workstreams as lanes, bars across the stages each one ran through. Facts from the case;
   how long each bar runs is a reading of the case, which gives no dates. */

const STAGES = ["Design", "Development", "Launch", "Next"]

const LANES: { lane: string; from: number; to: number; text: string; tone?: "launch" | "next" }[] = [
  { lane: "Entitlements", from: 0, to: 1, text: "Plan model, usage limits and upgrade paths" },
  { lane: "Gating", from: 0, to: 2, text: "One framework for paywalls, trials and upgrade messaging" },
  { lane: "Migration", from: 1, to: 2, text: "Existing free sellers moved with advance notice and grace periods" },
  { lane: "Monetisation", from: 2, to: 2, text: "12+ features paid, card-free trials", tone: "launch" },
  { lane: "Billing", from: 3, to: 3, text: "Early alerts for seasonal spikes", tone: "next" },
]

const TONE = {
  base: "bg-[#F2F0EB] text-foreground/85",
  launch: "bg-[#E1E8F5] text-[#28447A]",
  next: "bg-white border border-dashed border-black/25 text-muted-foreground",
}

export function LegacyAndRoadmap() {
  return (
    <ExplainerStage bg="/images/veeqo-tile-sellers.jpg">
      <ExplainerCard className="sm:!p-6">
        <ExplainerTitle>Paid plan rollout roadmap</ExplainerTitle>

        {/* Desktop: lanes across stages */}
        <div className="hidden md:grid grid-cols-[96px_repeat(4,minmax(0,1fr))] gap-x-1 gap-y-1.5 items-center text-[12px] leading-snug">
          <span />
          {STAGES.map((st) => (
            <span key={st} className="text-muted-foreground">
              {st}
            </span>
          ))}
          <span className="h-px bg-black/10 mb-1" style={{ gridColumn: "1 / -1" }} aria-hidden />
          {LANES.map((l) => (
            <div key={l.lane} className="contents">
              <span className="font-medium text-foreground" style={{ gridColumn: 1 }}>
                {l.lane}
              </span>
              <span
                className={`rounded px-2 py-1.5 ${TONE[l.tone ?? "base"]}`}
                style={{ gridColumn: `${l.from + 2} / ${l.to + 3}` }}
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
                      <text x={x} y={y + 3}>{t}</text>
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
