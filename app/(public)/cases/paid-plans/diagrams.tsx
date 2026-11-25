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

/* The rollout as phases: what shipped in each and why. Facts only from the case. */

const PHASES = [
  {
    phase: "Foundations",
    why: "The product had no concept of plans",
    items: ["Plans, limits and upgrade paths built from scratch", "Price set on monthly seller-fulfilled orders, not seats", "One set of rules for gating, trials and messaging"],
  },
  {
    phase: "Existing sellers",
    why: "Sellers had always had everything free",
    items: ["Shipping stays free, with unlimited users and SKUs", "Notice in advance before anything changed", "Grace-period banners, no operation stopped"],
  },
  {
    phase: "Paid features",
    why: "Fund the advanced roadmap",
    items: ["12+ features gated on iOS, Android, devices and web", "New features open with a free trial, no card", "Downgrades keep features to the end of the billing cycle"],
  },
  {
    phase: "Next",
    why: "Seasonal spikes caught sellers out",
    items: ["Warn sellers before a busy season moves them up a plan"],
  },
]

export function LegacyAndRoadmap() {
  return (
    <ExplainerStage bg="/images/veeqo-tile-sellers.jpg">
      <ExplainerCard className="sm:!p-6">
        <ExplainerTitle>The roadmap for the paid plan rollout</ExplainerTitle>
        <ol className="grid gap-4 md:grid-cols-4 md:gap-3" aria-label="Rollout phases">
          {PHASES.map((p, i) => (
            <li key={p.phase} className="border-t-2 pt-3 border-black/15" style={i === PHASES.length - 1 ? { borderTopStyle: "dashed" } : undefined}>
              <p className="text-[13px] font-medium text-foreground">{p.phase}</p>
              <p className="mt-0.5 text-[12px] leading-snug text-muted-foreground">{p.why}</p>
              <ul className="mt-3 space-y-2">
                {p.items.map((t) => (
                  <li key={t} className="text-[12px] leading-snug text-foreground/85 pl-2.5 border-l border-black/15">
                    {t}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </ExplainerCard>
    </ExplainerStage>
  )
}


/* Detailed user flows for trials, limits and downgrades */

type FlowNode = [number, number, number, number, string, "n" | "b" | "d"]
const FLOW_NODES: FlowNode[] = [[30, 20, 120, 24, "Opens forecasting", "n"], [30, 60, 120, 24, "Feature explainer", "n"], [90, 115, 26, 17, "Plan?", "d"], [0, 156, 76, 26, "Has access", "b"], [104, 156, 76, 26, "Start trial", "n"], [0, 200, 76, 26, "Use feature", "n"], [104, 200, 76, 26, "No card asked", "n"], [0, 244, 76, 26, "Usage logged", "n"], [104, 244, 76, 26, "Trial reminders", "n"], [142, 301, 26, 13, "Ends", "d"], [0, 334, 76, 26, "Stay on plan", "b"], [104, 334, 76, 26, "Upgrade or not", "n"], [250, 20, 120, 24, "Monthly orders rise", "n"], [250, 60, 120, 24, "Band check", "n"], [310, 115, 26, 17, "Over?", "d"], [220, 156, 76, 26, "No change", "b"], [324, 156, 76, 26, "Advance notice", "n"], [220, 200, 76, 26, "Keep shipping", "n"], [324, 200, 76, 26, "Grace period", "n"], [220, 244, 76, 26, "Next cycle", "n"], [324, 244, 76, 26, "Banner, all apps", "n"], [306, 290, 68, 24, "Mobile", "n"], [378, 290, 62, 24, "Web", "n"], [220, 334, 76, 26, "Free plan", "b"], [306, 334, 68, 26, "Upgrade", "b"], [378, 334, 62, 26, "Admin asks", "n"], [470, 20, 120, 24, "Chooses free plan", "n"], [470, 60, 120, 24, "What changes", "n"], [530, 115, 26, 17, "Confirm?", "d"], [440, 156, 76, 26, "Stays paid", "n"], [544, 156, 76, 26, "Until cycle end", "n"], [440, 200, 76, 26, "Back to plan", "n"], [544, 200, 76, 26, "Features lock", "n"], [440, 244, 76, 26, "No change", "n"], [544, 244, 76, 26, "Data kept", "n"], [492, 288, 76, 26, "Re-upgrade", "n"], [492, 334, 76, 26, "Picks up", "b"]]
const FLOW_PATHS = ["M90 44v14", "M90 84v14", "M68 132l-30 22", "M112 132l30 22", "M38 182v16", "M142 182v16", "M38 226v16", "M142 226v16", "M142 270v16", "M38 270v62", "M142 314v18", "M310 44v14", "M310 84v14", "M288 132l-30 22", "M332 132l30 22", "M258 182v16", "M362 182v16", "M362 226v16", "M258 226v16", "M362 270l-20 18", "M362 270l20 18", "M258 270v62", "M340 314v18", "M384 314v18", "M530 44v14", "M530 84v14", "M508 132l-30 22", "M552 132l30 22", "M478 182v16", "M582 182v16", "M478 226v16", "M582 226v16", "M530 270v16", "M530 314v18"]

export function UserFlows() {
  return (
    <ExplainerStage bg="/images/veeqo-tile-churn.jpg">
      <ExplainerCard className="sm:!p-6">
        <ExplainerTitle>User flows for plans, trials and limits</ExplainerTitle>
        <div aria-hidden>
          <svg viewBox="0 0 640 425" className="w-full h-auto">
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
            <g stroke="#c9c4bc" strokeDasharray="3 3">
              <path d="M205 20v390M425 20v390" />
            </g>
            <g fontSize="9" fill="#7a746c">
              <text x="0" y="400">Same rules on iOS, Android, devices and web</text>
              <text x="0" y="416">Edge cases: shared accounts, seasonal spikes, failed payment</text>
            </g>
          </svg>
        </div>
      </ExplainerCard>
    </ExplainerStage>
  )
}
