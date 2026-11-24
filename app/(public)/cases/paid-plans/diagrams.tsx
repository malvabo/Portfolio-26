"use client"

import { ACCENT, ExplainerCard, ExplainerStage, ExplainerTag, ExplainerTitle, Sticky } from "@/components/explainer-stage"

/* Paid plans: plans as a staircase that rises with order volume, and the rules for moving between them */

const PLANS = [
  { name: "Shipping", price: "Free", gets: "Shipping with unlimited users, SKUs and warehouses", h: 34 },
  { name: "Inventory", price: "Paid", gets: "Adds inventory sync for growing sellers", h: 62 },
  { name: "High Volume", price: "Paid", gets: "Adds warehouse features for the busiest sellers", h: 92 },
]

const RULES = [
  { k: "New features", v: "An explanation and a free trial, no card needed" },
  { k: "Existing accounts", v: "Notice in advance and grace-period banners, never a hard stop mid-shift" },
  { k: "Downgrades", v: "Paid features stay until the billing cycle ends, with no data lost" },
]

export function PlanStaircase() {
  return (
    <ExplainerStage bg="/images/veeqo-tile-market.jpg" className="space-y-3 sm:space-y-4">
      <ExplainerCard>
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div>
            <ExplainerTag accent>Pricing model</ExplainerTag>
            <ExplainerTitle>The price rises with orders, not with seats</ExplainerTitle>
          </div>
          <Sticky color="#F6B98F" tilt={2} className="max-w-[230px]">
            Before: everything free, revenue only from label commission
          </Sticky>
        </div>

        {/* Staircase: bar height stands for monthly order volume */}
        <div className="mt-2 grid grid-cols-3 gap-2 sm:gap-3 items-end h-28 sm:h-32 border-b border-black/15" aria-hidden>
          {PLANS.map((p, i) => (
            <div
              key={p.name}
              className="rounded-t flex items-start p-2 sm:p-3"
              style={{ height: `${p.h}%`, background: i === 0 ? "#EEECE7" : `rgba(180,83,42,${0.18 + i * 0.22})` }}
            >
              <span className={`text-[11px] font-mono uppercase tracking-wider ${i === 2 ? "text-white" : i === 1 ? "text-[#7A3417]" : "text-foreground/60"}`}>
                {p.price}
              </span>
            </div>
          ))}
        </div>
        <p className="mt-1.5 flex items-center justify-end gap-1.5 text-[11px] text-muted-foreground">
          Monthly seller-fulfilled orders
          <svg width="14" height="10" viewBox="0 0 14 10" fill="none" aria-hidden>
            <path d="M1 5h11M8 1l4 4-4 4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </p>

        <ul className="mt-3 grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-3" aria-label="Plans">
          {PLANS.map((p) => (
            <li key={p.name} className="rounded border border-black/10 p-3">
              <p className="text-[13px] font-medium text-foreground">{p.name}</p>
              <p className="mt-1 text-[12px] text-muted-foreground leading-snug">{p.gets}</p>
            </li>
          ))}
        </ul>
      </ExplainerCard>

      <ExplainerCard>
        <ExplainerTag>Moving between plans</ExplainerTag>
        <ExplainerTitle>One set of rules across 12+ features and 4 platforms</ExplainerTitle>
        <ul className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-3">
          {RULES.map((r) => (
            <li key={r.k} className="rounded border border-black/10 p-3" style={{ borderTop: `2px solid ${ACCENT}` }}>
              <p className="text-[13px] font-medium text-foreground">{r.k}</p>
              <p className="mt-1 text-[12px] text-muted-foreground leading-snug">{r.v}</p>
            </li>
          ))}
        </ul>
      </ExplainerCard>
    </ExplainerStage>
  )
}
