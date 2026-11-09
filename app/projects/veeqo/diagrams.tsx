"use client"

import type { ReactNode } from "react"

/* Veeqo diagrams, drawn as white cards on a photographic stage */

const ACCENT = "#B4532A"

/** Photo backdrop with a soft dark wash; content sits on top */
function Stage({ bg, children, className = "" }: { bg: string; children: ReactNode; className?: string }) {
  return (
    <div className="relative rounded-lg overflow-hidden">
      <img src={bg} alt="" aria-hidden className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-black/25" aria-hidden />
      <div className={`relative p-4 sm:p-6 md:p-8 ${className}`}>{children}</div>
    </div>
  )
}

function Card({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <div className={`bg-white rounded-md border border-black/10 shadow-[0_8px_24px_rgba(0,0,0,0.18)] p-4 ${className}`}>
      {children}
    </div>
  )
}

/** Small square-cornered label: black by default, accent for the chosen / new side */
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

function CardTitle({ children }: { children: ReactNode }) {
  return <p className="font-serif text-[1.125rem] tracking-[-0.01em] mt-1 mb-4">{children}</p>
}

function ArrowBadge() {
  return (
    <div className="flex justify-center">
      <span className="grid place-items-center w-10 h-10 rounded-full bg-white shadow-[0_4px_14px_rgba(0,0,0,0.2)] rotate-90 md:rotate-0">
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden>
          <path d="M3 9h12M10 4l5 5-5 5" stroke={ACCENT} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </span>
    </div>
  )
}

function Toggle({ on = false }: { on?: boolean }) {
  return (
    <span className="w-7 h-4 rounded-full relative shrink-0 inline-block" style={{ background: on ? ACCENT : "#D1D5DB" }}>
      <span className={`w-3 h-3 bg-white rounded-full absolute top-0.5 shadow-sm ${on ? "right-0.5" : "left-0.5"}`} />
    </span>
  )
}

export function SegmentTable() {
  const rows = [
    { label: "Template history", enterprise: "Years of custom layouts with business logic embedded in the design", smb: "Never touched the legacy editor" },
    { label: "Core need", enterprise: "Preserve existing templates exactly", smb: "Clean defaults, logo, brand colour" },
    { label: "Branding model", enterprise: "Multi-brand, co-brand, per-template assignment", smb: "Single brand, simple toggle on/off" },
    { label: "Churn risk", enterprise: "High: documents are infrastructure, not a feature", smb: "Low: never invested in the old system" },
  ]
  const cols = "grid grid-cols-[84px_minmax(0,1fr)_minmax(0,1fr)] sm:grid-cols-[150px_minmax(0,1fr)_minmax(0,1fr)]"
  return (
    <Stage bg="/images/veeqo-tile-segments.jpg">
      {/* A real table, set in a white card on the stage */}
      <Card className="!p-0 overflow-hidden" >
        <div role="table" aria-label="Enterprise and small sellers compared">
          <div role="row" className={`${cols} border-b border-black/10`}>
            <div role="columnheader" className="p-3 sm:p-4" />
            <div role="columnheader" className="p-3 sm:p-4 border-l border-black/10">
              <Tag>Enterprise</Tag>
              <p className="font-serif text-[0.9375rem] sm:text-[1.125rem] tracking-[-0.01em] mt-2 leading-snug hyphens-auto">Documents are infrastructure</p>
            </div>
            <div role="columnheader" className="p-3 sm:p-4 border-l border-black/10">
              <Tag accent>Small sellers</Tag>
              <p className="font-serif text-[0.9375rem] sm:text-[1.125rem] tracking-[-0.01em] mt-2 leading-snug hyphens-auto">Documents just need to work</p>
            </div>
          </div>
          {rows.map((r, k) => (
            <div role="row" key={r.label} className={`${cols} ${k < rows.length - 1 ? "border-b border-black/10" : ""}`}>
              <div role="rowheader" className="p-3 sm:p-4 font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                {r.label}
              </div>
              <div role="cell" className="p-3 sm:p-4 border-l border-black/10 text-[12px] sm:text-[13px] leading-snug text-foreground/85">
                {r.enterprise}
              </div>
              <div role="cell" className="p-3 sm:p-4 border-l border-black/10 text-[12px] sm:text-[13px] leading-snug text-foreground/85">
                {r.smb}
              </div>
            </div>
          ))}
        </div>
      </Card>
    </Stage>
  )
}

export function Architecture() {
  return (
    <Stage bg="/images/veeqo-tile-churn.jpg" className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-4 md:gap-3 items-center">
      <Card className="self-stretch">
        <Tag>Before</Tag>
        <CardTitle>Settings here, editing elsewhere</CardTitle>
        <div className="rounded border border-black/10 bg-[#F5F3F0] p-3 mb-3">
          <p className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground mb-2">Amazon settings</p>
          <div className="flex items-center gap-2 text-[13px] text-muted-foreground">
            <Toggle />
            Documents on / off
          </div>
        </div>
        <div className="rounded border border-dashed border-[#B4532A]/50 p-3 pb-4">
          <p className="font-mono text-[10px] uppercase tracking-wider text-[#B4532A] mb-3">3rd party tool · external</p>
          <span
            className="inline-block text-[12px] font-medium text-black/80 px-2.5 py-1.5 shadow-[0_2px_6px_rgba(0,0,0,0.12)]"
            style={{ background: "#F6B98F", transform: "rotate(-3deg)" }}
          >
            Drag &amp; drop editor
          </span>
          <span
            className="inline-block ml-3 mt-2 text-[12px] font-medium text-black/80 px-2.5 py-1.5 shadow-[0_2px_6px_rgba(0,0,0,0.12)]"
            style={{ background: "#F5B3CF", transform: "rotate(3deg)" }}
          >
            No API · can&apos;t extend
          </span>
        </div>
      </Card>

      <ArrowBadge />

      <Card className="self-stretch">
        <Tag accent>After</Tag>
        <CardTitle>One library, two paths</CardTitle>
        <div className="space-y-2.5">
          <div className="flex items-center justify-between gap-3 rounded border border-black/10 p-3">
            <div>
              <p className="text-[13px] font-medium">Ready-to-go templates</p>
              <p className="text-[12px] text-muted-foreground">Small sellers · simple branding</p>
            </div>
            <Toggle on />
          </div>
          <div className="flex items-center justify-between gap-3 rounded border border-black/10 p-3">
            <div>
              <p className="text-[13px] font-medium">Custom templates</p>
              <p className="text-[12px] text-muted-foreground">Enterprise · full control</p>
            </div>
            <span className="text-[11px] font-mono uppercase tracking-wider px-1.5 py-1 rounded border border-[#B4532A]/30 bg-[#B4532A]/10 text-[#B4532A] whitespace-nowrap">
              HTML + AI
            </span>
          </div>
        </div>
      </Card>
    </Stage>
  )
}

export function DecisionTable() {
  const heads = ["Lead time", "Enterprise risk", "Vendor savings"]
  const options = [
    { tag: "Dropped", title: "Automated migration tool", cells: ["4 months", "Accounts exposed for longer", "Vendor stays on 3 months longer"], chosen: false },
    { tag: "Chosen", title: "White-glove manual porting", cells: ["2 weeks", "0% churn, hands-on porting", "$X00k saved, vendor sunset 3 months early"], chosen: true },
  ]
  const cols = "grid grid-cols-[170px_130px_minmax(0,1fr)_minmax(0,1fr)]"
  return (
    <Stage bg="/images/veeqo-tile-voices.jpg">
      <Card className="!p-0 overflow-hidden">
        {/* Scrolls sideways on narrow phones rather than squeezing four columns */}
        <div className="overflow-x-auto">
          <div role="table" aria-label="Migration options compared" className="min-w-[560px]">
            <div role="row" className={`${cols} border-b border-black/10 bg-[#F5F3F0]`}>
              <div role="columnheader" className="p-3 sm:p-4" />
              {heads.map((h) => (
                <div key={h} role="columnheader" className="p-3 sm:p-4 border-l border-black/10 font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                  {h}
                </div>
              ))}
            </div>
            {options.map((o, k) => (
              <div role="row" key={o.title} className={`${cols} ${k === 0 ? "border-b border-black/10" : ""}`}>
                <div role="rowheader" className="p-3 sm:p-4">
                  <Tag accent={o.chosen}>{o.tag}</Tag>
                  <p className="font-serif text-[1rem] tracking-[-0.01em] mt-2 leading-snug">{o.title}</p>
                </div>
                {o.cells.map((c, n) => (
                  <div
                    key={n}
                    role="cell"
                    className={`p-3 sm:p-4 border-l border-black/10 ${
                      n === 0
                        ? `font-serif text-[1.5rem] leading-none tracking-[-0.02em] whitespace-nowrap ${o.chosen ? "" : "line-through decoration-1 text-foreground/40"}`
                        : "text-[13px] leading-snug text-foreground/85"
                    }`}
                    style={n === 0 && o.chosen ? { color: ACCENT } : undefined}
                  >
                    {c}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </Card>
    </Stage>
  )
}

export function BrandScheme() {
  // Before: two disconnected tools, with brand documents scattered like loose notes.
  // After: one library where each document carries the brands tied to it.
  const notes = [
    { text: "Invoice · Dior Spring", bg: "#F6B98F", rot: "-4deg" },
    { text: "Return label · Chanel Spring", bg: "#A9C8F5", rot: "3deg" },
    { text: "Shipping label · Perfumes Summer", bg: "#CDB6F2", rot: "-2deg" },
    { text: "Invoice · Dior Winter?", bg: "#F5B3CF", rot: "4deg" },
  ]
  const library = [
    { label: "Invoice", brands: ["Dior Spring", "Dior Summer", "Dior Winter"] },
    { label: "Shipping label", brands: ["Dior Spring", "Chanel"] },
    { label: "Return label", brands: ["Dior Spring"] },
  ]
  const DocIcon = () => (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
      <path d="M3 1.5h5l3 3v8H3z" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round" />
      <path d="M8 1.5v3h3M5 7.5h4M5 9.5h4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  )

  return (
    <div className="relative rounded-lg overflow-hidden">
      {/* Cardboard stage */}
      <img src="/images/veeqo-tile-sellers.jpg" alt="" aria-hidden className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-black/25" aria-hidden />

      <div className="relative grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-4 md:gap-3 items-center p-4 sm:p-6 md:p-8">
        {/* Before */}
        <div className="bg-white rounded-md border border-black/10 shadow-[0_8px_24px_rgba(0,0,0,0.18)] p-4 self-stretch">
          <div className="flex items-center gap-2 mb-1">
            <span className="bg-[#3D3D3D] text-white font-mono text-[10px] uppercase tracking-wider px-1.5 py-0.5 leading-none">Before</span>
          </div>
          <p className="font-serif text-[1.125rem] tracking-[-0.01em] mb-4">Two tools, nothing linked</p>

          <div className="rounded border border-black/10 bg-[#F5F3F0] p-3 mb-3">
            <p className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground mb-2">Amazon settings</p>
            {["Invoice", "Shipping label", "Return label"].map((d) => (
              <div key={d} className="flex items-center gap-2 text-[13px] text-muted-foreground py-0.5">
                <DocIcon />
                {d}
              </div>
            ))}
          </div>

          <div className="rounded border border-dashed border-[#B4532A]/50 p-3 pb-4">
            <p className="font-mono text-[10px] uppercase tracking-wider text-[#B4532A] mb-3">3rd party tool · external</p>
            <div className="flex flex-col items-start gap-1.5">
              {notes.map((n, i) => (
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
              <path d="M3 9h12M10 4l5 5-5 5" stroke="#B4532A" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
        </div>

        {/* After */}
        <div className="bg-white rounded-md border border-black/10 shadow-[0_8px_24px_rgba(0,0,0,0.18)] p-4 self-stretch">
          <div className="flex items-center gap-2 mb-1">
            <span className="bg-[#B4532A] text-white font-mono text-[10px] uppercase tracking-wider px-1.5 py-0.5 leading-none">After</span>
          </div>
          <p className="font-serif text-[1.125rem] tracking-[-0.01em] mb-4">One document library</p>

          <div className="space-y-3">
            {library.map(({ label, brands }) => (
              <div key={label}>
                <div className="flex items-center gap-2 text-[13px] font-medium">
                  <span className="grid place-items-center w-6 h-6 rounded bg-[#B4532A]/10 text-[#B4532A]">
                    <DocIcon />
                  </span>
                  {label}
                </div>
                {/* Brands hang off the document they belong to */}
                <div className="ml-3 pl-4 border-l border-black/15 pt-1.5 flex flex-wrap gap-1">
                  {brands.map((b) => (
                    <span key={b} className="text-[11px] px-1.5 py-0.5 rounded border border-black/10 bg-[#F5F3F0] text-foreground/80">
                      {b}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export function Roadmap() {
  const stages = [
    { tag: "V1 · Shipped", title: "Own the infrastructure", items: ["Core infrastructure migration", "HTML editor + AI assist", "Toggle-based defaults", "Enterprise white-glove migration"], done: true },
    { tag: "V2 · Next", title: "Template intelligence", items: ["Expanded template library", "Featured & most-popular surfacing", "Seller starring / favourites", "AI-generated docs"], done: false },
    { tag: "V3 · Later", title: "AI document intelligence", items: ["AI-generated docs", "Smart field suggestions based on fulfillment patterns", "Automated improvement recommendations per template"], done: false },
  ]
  return (
    <Stage bg="/images/veeqo-tile-market.jpg" className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {stages.map((st) => (
        <Card key={st.tag} className={st.done ? "" : "bg-white/95"}>
          <Tag accent={st.done}>{st.tag}</Tag>
          <CardTitle>{st.title}</CardTitle>
          <ul className="space-y-2">
            {st.items.map((item) => (
              <li key={item} className="flex items-start gap-2 text-[13px] leading-snug text-foreground/85">
                {st.done ? (
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden className="mt-0.5 shrink-0">
                    <path d="M2.5 7.5l3 3 6-7" stroke={ACCENT} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                ) : (
                  <span className="mt-1 w-3 h-3 rounded-full border border-black/25 shrink-0" />
                )}
                {item}
              </li>
            ))}
          </ul>
        </Card>
      ))}
    </Stage>
  )
}
