"use client"

/* Conduit diagrams, drawn as white cards on a photographic stage (same style as the Veeqo ones) */

const ACCENT = "#B4532A"

const DocIcon = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
    <path d="M3 1.5h5l3 3v8H3z" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round" />
    <path d="M8 1.5v3h3M5 7.5h4M5 9.5h4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
  </svg>
)

/**
 * Information architecture, before and after.
 * Before: supplier documents arrive by email and every value is retyped into internal forms.
 * After: Conduit organised into the places importers work in, each with what lives inside it.
 */
export function InformationArchitecture() {
  const notes = [
    { text: "Product · Coffee", bg: "#F6B98F", rot: "-4deg" },
    { text: "Origin · Brazil", bg: "#A9C8F5", rot: "3deg" },
    { text: "Weight · 19,200 kg?", bg: "#CDB6F2", rot: "-2deg" },
    { text: "Certificate no. · missing", bg: "#F5B3CF", rot: "4deg" },
  ]
  const sections = [
    { label: "Inbox", items: ["Grouped by shipment", "Needs review", "Clear"] },
    { label: "Pipelines", items: ["Fields to extract", "Form mapping", "Test on a sample"] },
    { label: "Runs", items: ["Status of every document", "API"] },
    { label: "Ask", items: ["Answers with sources"] },
  ]

  return (
    <div className="relative rounded-lg overflow-hidden">
      {/* Sacks of beans as the stage */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/conduit/tile-sacks.jpg" alt="" aria-hidden className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-black/25" aria-hidden />

      <div className="relative grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-4 md:gap-3 items-center p-4 sm:p-6 md:p-8">
        {/* Before */}
        <div className="bg-white rounded-md border border-black/10 shadow-[0_8px_24px_rgba(0,0,0,0.18)] p-4 self-stretch">
          <div className="flex items-center gap-2 mb-1">
            <span className="bg-[#3D3D3D] text-white font-mono text-[10px] uppercase tracking-wider px-1.5 py-0.5 leading-none">Before</span>
          </div>
          <p className="font-serif text-[1.125rem] tracking-[-0.01em] mb-4">Data retyped by hand</p>

          <div className="rounded border border-black/10 bg-[#F5F3F0] p-3 mb-3">
            <p className="text-[13px] font-medium text-foreground/70 mb-2">Supplier email</p>
            {["Certificate of origin", "Supplier documents"].map((d) => (
              <div key={d} className="flex items-center gap-2 text-[13px] text-muted-foreground py-0.5">
                <DocIcon />
                {d}
              </div>
            ))}
          </div>

          <div className="rounded border border-dashed p-3 pb-4" style={{ borderColor: `${ACCENT}80` }}>
            <p className="text-[13px] font-medium mb-3" style={{ color: ACCENT }}>Internal forms, filled in by hand</p>
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
              <path d="M3 9h12M10 4l5 5-5 5" stroke={ACCENT} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
        </div>

        {/* After */}
        <div className="bg-white rounded-md border border-black/10 shadow-[0_8px_24px_rgba(0,0,0,0.18)] p-4 self-stretch">
          <div className="flex items-center gap-2 mb-1">
            <span className="text-white font-mono text-[10px] uppercase tracking-wider px-1.5 py-0.5 leading-none" style={{ background: ACCENT }}>After</span>
          </div>
          <p className="font-serif text-[1.125rem] tracking-[-0.01em] mb-4">One place for every shipment</p>

          <div className="space-y-3">
            {sections.map(({ label, items }, k) => (
              <div key={label} className="relative">
                {/* Thin line joining each section to the next one */}
                {k < sections.length - 1 && <span aria-hidden className="absolute left-3 top-7 -bottom-2 w-px bg-black/15" />}
                <div className="flex items-center gap-2 text-[13px] font-medium">
                  <span className="grid place-items-center w-6 h-6 rounded" style={{ background: `${ACCENT}1A`, color: ACCENT }}>
                    <DocIcon />
                  </span>
                  {label}
                </div>
                {/* What lives inside each section */}
                <div className="pl-8 pt-1.5 flex flex-wrap gap-1">
                  {items.map((b) => (
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
