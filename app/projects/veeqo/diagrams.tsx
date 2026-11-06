"use client"

/* Diagrams carried over from the original Veeqo case study */

export function SegmentTable() {
  return (
              <div className="border border-[#EBEBEB] overflow-hidden bg-white">
                {/* Header */}
                <div className="grid grid-cols-[180px_1fr_1fr] border-b border-[#EBEBEB] bg-[#F5F3F0]">
                  <div className="p-4 border-r border-[#EBEBEB]" />
                  <div className="p-4 border-r border-[#EBEBEB]">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-foreground inline-block shrink-0" />
                      <span className="font-mono text-[10px] uppercase tracking-wider text-foreground">Enterprise</span>
                    </div>
                  </div>
                  <div className="p-4">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block shrink-0" />
                      <span className="font-mono text-[10px] uppercase tracking-wider text-foreground">SMB</span>
                    </div>
                  </div>
                </div>
                {/* Rows */}
                {[
                  {
                    label: "Template history",
                    enterprise: "Years of custom layouts with business logic embedded in the design",
                    smb: "Never touched the legacy editor",
                  },
                  {
                    label: "Core need",
                    enterprise: "Preserve existing templates exactly",
                    smb: "Clean defaults, logo, brand colour",
                  },
                  {
                    label: "Branding model",
                    enterprise: "Multi-brand, co-brand, per-template assignment",
                    smb: "Single brand, simple toggle on/off",
                  },
                  {
                    label: "Churn risk",
                    enterprise: "High: documents are infrastructure, not a feature",
                    smb: "Low: never invested in the old system",
                  },
                ].map((row, i, arr) => (
                  <div key={row.label} className={`grid grid-cols-[180px_1fr_1fr] ${i < arr.length - 1 ? "border-b border-[#EBEBEB]" : ""}`}>
                    <div className="p-4 border-r border-[#EBEBEB] font-mono text-[10px] uppercase tracking-wider text-muted-foreground flex items-start pt-4">{row.label}</div>
                    <div className="p-4 border-r border-[#EBEBEB] text-[13px] text-muted-foreground leading-relaxed">{row.enterprise}</div>
                    <div className="p-4 text-[13px] text-muted-foreground leading-relaxed">{row.smb}</div>
                  </div>
                ))}
              </div>
  )
}

export function Architecture() {
  return (
              <div className="">
                <div className="grid grid-cols-1 md:grid-cols-[1fr_40px_1fr] gap-3 items-stretch">

                  {/* Before */}
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground mb-2">Before</p>
                    <div className="border border-[#EBEBEB] rounded-xl p-4 bg-white">
                      <p className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground mb-3">Amazon</p>
                      <div className="border border-[#EBEBEB] rounded-lg p-3 bg-[#F5F3F0]">
                        <p className="text-[13px] font-medium text-foreground mb-2">Document Settings</p>
                        <div className="flex items-center gap-2">
                          <div className="w-7 h-4 bg-gray-300 rounded-full relative shrink-0">
                            <div className="w-3 h-3 bg-white rounded-full absolute top-0.5 left-0.5 shadow-sm" />
                          </div>
                          <span className="text-[11px] text-muted-foreground">Toggle on / off</span>
                        </div>
                      </div>
                    </div>
                    {/* Plus connector */}
                    <div className="flex justify-center my-2 text-muted-foreground/40">
                      <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                        <path d="M5 1v8M1 5h8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                      </svg>
                    </div>
                    {/* External 3rd party */}
                    <div className="border border-dashed border-red-200 rounded-xl p-4 bg-red-50/40">
                      <p className="font-mono text-[10px] uppercase tracking-wider text-red-400 mb-2">3rd Party Tool · External</p>
                      <div className="border border-red-100 rounded-lg p-3 bg-white">
                        <p className="text-[13px] font-medium text-foreground mb-1">Drag & Drop Editor</p>
                        <p className="text-[11px] text-muted-foreground">No API control · No extensibility</p>
                      </div>
                    </div>
                  </div>

                  {/* Arrow right */}
                  <div className="hidden md:flex items-center justify-center pt-10">
                    <svg width="32" height="16" viewBox="0 0 32 16" fill="none">
                      <path d="M0 8h26M20 2l6 6-6 6" stroke="#D1D5DB" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>

                  {/* After */}
                  <div className="flex flex-col">
                    <p className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground mb-2">After</p>
                    <div className="border border-emerald-200 rounded-xl p-4 bg-emerald-50/30 flex-1">
                      <p className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground mb-3">Amazon</p>
                      <div className="border border-emerald-100 rounded-lg p-3 bg-emerald-50/30">
                        <p className="text-[13px] font-medium text-foreground mb-3">Document Library</p>
                        {/* Option 1 */}
                        <div className="flex items-center justify-between gap-3 p-2.5 bg-white rounded-md border border-[#EBEBEB] mb-2">
                          <div>
                            <p className="text-[12px] font-medium text-foreground">Doc templates</p>
                            <p className="text-[11px] text-muted-foreground">Ready-to-go · Simple branding</p>
                          </div>
                          <div className="flex items-center gap-1.5 shrink-0">
                            <div className="w-7 h-4 bg-emerald-400 rounded-full relative shrink-0">
                              <div className="w-3 h-3 bg-white rounded-full absolute top-0.5 right-0.5 shadow-sm" />
                            </div>
                            <span className="text-[10px] font-mono text-emerald-700">Toggle on/off</span>
                          </div>
                        </div>
                        {/* Option 2 */}
                        <div className="flex items-center justify-between gap-3 p-2.5 bg-white rounded-md border border-[#EBEBEB]">
                          <div>
                            <p className="text-[12px] font-medium text-foreground">Doc templates</p>
                            <p className="text-[11px] text-muted-foreground">Custom · Enterprise</p>
                          </div>
                          <div className="flex items-center gap-1.5 shrink-0">
                            <span className="text-[10px] font-mono text-blue-700 bg-blue-50 px-1.5 py-0.5 rounded border border-blue-100">HTML Editor + AI</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
  )
}

export function DecisionTable() {
  return (
              <div className="border border-[#EBEBEB] overflow-hidden bg-white">
                <div className="grid grid-cols-[200px_1fr_1fr_1fr] border-b border-[#EBEBEB] bg-[#F5F3F0]">
                  <div className="p-4 border-r border-[#EBEBEB]" />
                  <div className="p-4 border-r border-[#EBEBEB] font-mono text-[10px] uppercase tracking-wider text-muted-foreground">Lead time</div>
                  <div className="p-4 border-r border-[#EBEBEB] font-mono text-[10px] uppercase tracking-wider text-muted-foreground">Enterprise risk</div>
                  <div className="p-4 font-mono text-[10px] uppercase tracking-wider text-muted-foreground">Vendor savings</div>
                </div>
                <div className="grid grid-cols-[200px_1fr_1fr_1fr] border-b border-[#EBEBEB]">
                  <div className="p-4 border-r border-[#EBEBEB] text-[13px] font-medium text-foreground">Automated migration tool</div>
                  <div className="p-4 border-r border-[#EBEBEB] text-[13px] text-red-600">4 months</div>
                  <div className="p-4 border-r border-[#EBEBEB] text-[13px] text-muted-foreground">Accounts exposed for longer</div>
                  <div className="p-4 text-[13px] text-muted-foreground">Vendor stays on 3 months longer</div>
                </div>
                <div className="grid grid-cols-[200px_1fr_1fr_1fr] bg-emerald-50">
                  <div className="p-4 border-r border-emerald-100 text-[13px] font-medium text-emerald-800">White-glove manual ✓</div>
                  <div className="p-4 border-r border-emerald-100 text-[13px] text-emerald-700">2 weeks</div>
                  <div className="p-4 border-r border-emerald-100 text-[13px] text-emerald-700">0% churn · hands-on porting</div>
                  <div className="p-4 text-[13px] text-emerald-700">$X00k saved · sunset 3 months early</div>
                </div>
              </div>
  )
}

export function BrandScheme() {
  return (
                  <div className="rounded-xl bg-[#F5F3F0] p-5">
                    <div className="grid grid-cols-1 md:grid-cols-[1fr_40px_1fr] gap-3 items-stretch">

                      {/* Before */}
                      <div className="flex flex-col">
                        <p className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground mb-2">Before</p>
                        {/* Amazon simple settings */}
                        <div className="border border-[#EBEBEB] rounded-xl p-4 bg-white mb-2">
                          <p className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground mb-2">Amazon</p>
                          <div className="border border-[#EBEBEB] rounded-lg p-3 bg-[#F5F3F0] space-y-1.5">
                            {["Invoice", "Shipping label", "Return label"].map((doc) => (
                              <div key={doc} className="text-[13px] text-muted-foreground">{doc}</div>
                            ))}
                          </div>
                        </div>
                        {/* Plus connector */}
                        <div className="flex justify-center my-2 text-muted-foreground/40">
                          <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                            <path d="M5 1v8M1 5h8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                          </svg>
                        </div>
                        {/* 3rd party tool */}
                        <div className="border border-dashed border-red-200 rounded-xl p-4 bg-white flex-1">
                          <p className="font-mono text-[10px] uppercase tracking-wider text-red-400 mb-2">3rd party tool · External</p>
                          <div className="border border-red-100 rounded-lg p-3 bg-red-50/20 space-y-1.5">
                            {["Invoice Dior Spring", "Return label Chanel Spring", "Shipping label Perfumes Summer"].map((doc) => (
                              <div key={doc} className="text-[13px] text-muted-foreground">{doc}</div>
                            ))}
                            <div className="text-[13px] text-muted-foreground/40">···</div>
                          </div>
                        </div>
                      </div>

                      {/* Arrow */}
                      <div className="hidden md:flex items-center justify-center pt-10">
                        <svg width="32" height="16" viewBox="0 0 32 16" fill="none">
                          <path d="M0 8h26M20 2l6 6-6 6" stroke="#D1D5DB" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>

                      {/* After */}
                      <div className="flex flex-col">
                        <p className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground mb-2">After</p>
                        <div className="border border-emerald-200 rounded-xl p-4 bg-emerald-50/30 flex-1">
                          <p className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground mb-3">Document library</p>
                          <div className="border border-emerald-100 rounded-lg p-3 bg-emerald-50/30 space-y-2">
                            {[
                              { label: "Invoice", brands: ["Dior Spring", "Dior Summer", "Dior Winter"] },
                              { label: "Shipping label", brands: ["Dior Spring", "Chanel"] },
                              { label: "Return label", brands: ["Dior Spring"] },
                            ].map(({ label, brands }) => (
                              <div key={label} className="rounded-lg bg-white border border-emerald-100 p-2.5">
                                <p className="text-[13px] font-medium text-foreground mb-1">{label}</p>
                                <p className="text-[11px] text-muted-foreground mb-1.5">Brands tied to it</p>
                                <div className="flex flex-wrap gap-1">
                                  {brands.map((b) => (
                                    <span key={b} className="text-[11px] px-1.5 py-0.5 rounded-md bg-emerald-50 border border-emerald-100 text-muted-foreground">{b}</span>
                                  ))}
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>

                    </div>
                  </div>
  )
}

export function Roadmap() {
  return (
              <div className="max-w-[750px]">
                {/* Labels row — 10px above the line */}
                <div className="hidden md:grid grid-cols-3 gap-4 mb-[5px]">
                  <p className="font-mono text-[10px] uppercase tracking-wider text-foreground">V1 · Shipped</p>
                  <p className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">V2 · Template Intelligence</p>
                  <p className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">V3 · AI Document Intelligence</p>
                </div>

                {/* Connecting line + arrows */}
                <div className="hidden md:flex items-center mb-[5px]">
                  <div className="flex-1 h-px bg-[#EBEBEB]" />
                  <svg width="14" height="10" viewBox="0 0 14 10" fill="none" className="shrink-0">
                    <path d="M0 5h9M6 2l4 3-4 3" stroke="#9CA3AF" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <div className="flex-1 h-px bg-[#EBEBEB]" />
                  <svg width="14" height="10" viewBox="0 0 14 10" fill="none" className="shrink-0">
                    <path d="M0 5h9M6 2l4 3-4 3" stroke="#9CA3AF" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <div className="flex-1 h-px bg-[#EBEBEB]" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {/* V1 - Shipped */}
                  <div>
                    <p className="md:hidden font-mono text-[10px] uppercase tracking-wider text-foreground mb-3">V1 · Shipped</p>
                    <div className="border border-[#EBEBEB] rounded-xl p-4 bg-white space-y-2">
                      {["Core infrastructure migration", "HTML editor + AI assist", "Toggle-based defaults", "Enterprise white-glove migration"].map((item) => (
                        <div key={item} className="flex items-start gap-2">
                          <span className="text-emerald-500 mt-0.5 text-[13px]">✓</span>
                          <span className="text-[13px] text-muted-foreground">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* V2 */}
                  <div>
                    <p className="md:hidden font-mono text-[10px] uppercase tracking-wider text-muted-foreground mb-3">V2 · Template Intelligence</p>
                    <div className="border border-[#EBEBEB] rounded-xl p-4 bg-[#F5F3F0] space-y-2">
                      {["Expanded template library", "Featured & most-popular surfacing", "Seller starring / favourites", "AI-generated docs"].map((item) => (
                        <div key={item} className="flex items-start gap-2">
                          <span className="text-muted-foreground/40 mt-0.5 text-[13px]">○</span>
                          <span className="text-[13px] text-muted-foreground">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* V3 */}
                  <div>
                    <p className="md:hidden font-mono text-[10px] uppercase tracking-wider text-muted-foreground mb-3">V3 · AI Document Intelligence</p>
                    <div className="border border-[#EBEBEB] rounded-xl p-4 bg-white space-y-2">
                      {["AI-generated docs", "Smart field suggestions based on fulfillment patterns", "Automated improvement recommendations per template"].map((item) => (
                        <div key={item} className="flex items-start gap-2">
                          <span className="text-muted-foreground/30 mt-0.5 text-[13px]">○</span>
                          <span className="text-[13px] text-muted-foreground">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
  )
}
