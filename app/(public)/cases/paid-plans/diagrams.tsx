"use client"

import { ACCENT, ExplainerCard, ExplainerStage, ExplainerTag, ExplainerTitle, Sticky } from "@/components/explainer-stage"

/* Paid plans: plans as a staircase that rises with order volume, plus the rules for moving between them */

const PLANS = [
  { name: "Shipping", price: "Free", gets: "Unlimited users and SKUs", h: 50 },
  { name: "Inventory", price: "Paid", gets: "Inventory sync", h: 72 },
  { name: "High Volume", price: "Paid", gets: "Warehouse features", h: 96 },
]

const RULES = ["Free trial on new features, no card", "Grace-period banners, never a hard stop", "Downgrades keep all data"]

export function PlanStaircase() {
  return (
    <ExplainerStage bg="/images/veeqo-tile-market.jpg">
      <ExplainerCard>
        <ExplainerTag accent>Pricing model</ExplainerTag>
        <ExplainerTitle>The price rises with orders, not with seats</ExplainerTitle>

        {/* Staircase: step height stands for monthly order volume */}
        <ul className="grid grid-cols-3 gap-1.5 sm:gap-2 items-end h-52 sm:h-40 border-b border-black/15" aria-label="Plans">
          {PLANS.map((p, i) => (
            <li
              key={p.name}
              className="rounded-t p-2 sm:p-2.5 flex flex-col"
              style={{ height: `${p.h}%`, background: i === 0 ? "#EEECE7" : `rgba(180,83,42,${0.16 + i * 0.12})` }}
            >
              <span className="text-[12px] sm:text-[13px] font-medium text-foreground leading-tight">{p.name}</span>
              <span className="mt-0.5 text-[11px] sm:text-[12px] text-foreground/65 leading-snug">{p.gets}</span>
              <span className="mt-auto text-[10px] font-mono uppercase tracking-wider" style={{ color: i === 0 ? "#6B6860" : "#7A3417" }}>
                {p.price}
              </span>
            </li>
          ))}
        </ul>
        <p className="mt-1.5 flex items-center justify-end gap-1.5 text-[11px] text-muted-foreground">
          Monthly seller-fulfilled orders
          <svg width="14" height="10" viewBox="0 0 14 10" fill="none" aria-hidden>
            <path d="M1 5h11M8 1l4 4-4 4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </p>

        <ul className="mt-4 space-y-1.5" aria-label="Moving between plans, the same on 12+ features and 4 platforms">
          {RULES.map((r) => (
            <li key={r} className="flex items-center gap-2 text-[12px] sm:text-[13px] text-foreground/80">
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden className="shrink-0">
                <path d="M2.5 6.2l2.3 2.3 4.7-5" stroke={ACCENT} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              {r}
            </li>
          ))}
        </ul>

        <div className="mt-4">
          <Sticky color="#F6B98F" tilt={-1.5}>Before: everything free, revenue only from label commission</Sticky>
        </div>
      </ExplainerCard>
    </ExplainerStage>
  )
}
