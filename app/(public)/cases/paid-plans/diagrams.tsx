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

/* Existing sellers on the old free model, moved across without a surprise; then what the revenue paid for.
   Only facts from the case: advance notice, grace-period banners, forecasting and ERP integrations behind a trial,
   and the post-launch finding on seasonal spikes. */

const MOVE = [
  { title: "Old free model", text: "Every feature, no plan", now: false },
  { title: "Notice in advance", text: "Before anything changed", now: false },
  { title: "Grace period", text: "Banners, work carries on", now: false },
  { title: "New plan", text: "Shipping stays free, 12+ features are gated", now: true },
]

const ROADMAP = [{ when: "Paid for by the plans", items: ["12+ features are now paid"] }]

export function LegacyAndRoadmap() {
  return (
    <ExplainerStage bg="/images/veeqo-tile-sellers.jpg">
      <ExplainerCard className="sm:!p-6">
        <ExplainerTitle>The roadmap for the paid plan rollout</ExplainerTitle>

        <p className="text-[12px] text-muted-foreground">Existing sellers</p>
        <ol className="mt-2 grid grid-cols-2 sm:grid-cols-4 gap-1.5 sm:gap-2" aria-label="How existing sellers moved to the new plans">
          {MOVE.map((s) => (
            <li
              key={s.title}
              className={`rounded px-2 py-1.5 sm:px-2.5 sm:py-2 ${s.now ? "bg-[#E1E8F5] text-[#28447A]" : "bg-[#F2F0EB] text-foreground"}`}
            >
              <span className="block text-[12px] sm:text-[13px] font-medium leading-tight">{s.title}</span>
              <span className="mt-0.5 block text-[11px] sm:text-[12px] leading-snug opacity-70">{s.text}</span>
            </li>
          ))}
        </ol>

        <div className="mt-5 border-t border-black/10 pt-4">
          {ROADMAP.map((r) => (
            <div key={r.when}>
              <p className="text-[12px] text-muted-foreground">{r.when}</p>
              <ul className="mt-2 space-y-1.5">
                {r.items.map((i) => (
                  <li key={i} className="text-[12px] sm:text-[13px] leading-snug text-foreground/85 pl-3 border-l-2 border-[#28447A]/40">
                    {i}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </ExplainerCard>
    </ExplainerStage>
  )
}
