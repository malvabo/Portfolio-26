"use client"
import { LightboxImage } from "@/components/lightbox-image"

import Link from "next/link"
import { BackLinkSidebar, BackLinkFooter } from "@/components/back-link"
import { ArrowLeft } from "lucide-react"
import { ScrollToTop } from "@/components/scroll-to-top"
import { Header } from "@/components/header"
import { PasswordGate } from "@/components/password-gate"

export default function VeeqoCaseStudy() {
  return (
    <PasswordGate password="Mary2026">
    <div className="min-h-screen bg-background">
      <ScrollToTop />
      <Header />

      <div className="max-w-7xl mx-auto pt-24 flex flex-col">
        <div className="flex w-full items-start">
          <div className="hidden lg:block w-56 shrink-0 px-8 lg:px-12" aria-hidden />

          <aside className="hidden lg:block w-56 px-8 lg:px-12 fixed top-24 left-8 lg:left-[max(0px,calc((100vw-80rem)/2))]" aria-label="Case study navigation">
            <BackLinkSidebar />
            <nav className="space-y-4" aria-label="Case study sections">
              <a href="#context" className="block text-[15px] text-muted-foreground hover:text-foreground transition-colors">Context</a>
              <a href="#discovery" className="block text-[15px] text-muted-foreground hover:text-foreground transition-colors">Discovery</a>
              <a href="#iterations" className="block text-[15px] text-muted-foreground hover:text-foreground transition-colors">What We Tried</a>
              <a href="#strategy" className="block text-[15px] text-muted-foreground hover:text-foreground transition-colors">Strategy</a>
              <a href="#design" className="block text-[15px] text-muted-foreground hover:text-foreground transition-colors">Design Decisions</a>
              <a href="#outcomes" className="block text-[15px] text-muted-foreground hover:text-foreground transition-colors">Outcomes</a>
              <a href="#future" className="block text-[15px] text-muted-foreground hover:text-foreground transition-colors">Future Vision</a>
              <a href="#reflections" className="block text-[15px] text-muted-foreground hover:text-foreground transition-colors">Reflections</a>
            </nav>
          </aside>

          <main className="flex-1 px-8 lg:px-12 pb-20 lg:pb-24">

            {/* Header */}
            <div className="mb-8 max-w-[750px]">
              <p className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground mb-3">Amazon · Veeqo · Document Automation</p>
              <h1 className="font-serif text-2xl md:text-3xl lg:text-4xl tracking-[-0.02em] leading-[1.15] mb-4">
                Amazon: Replacing a critical document system for 50,000+ sellers
              </h1>
              <p className="text-[17px] leading-relaxed text-muted-foreground">
                Migrating Veeqo&apos;s document infrastructure off a third-party dependency, across two seller segments, an unstable API, and a scope that kept growing.
              </p>
            </div>

            {/* Meta grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-4 mb-6 pb-4 max-w-[750px]">
              <div>
                <p className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground mb-2">Role</p>
                <span className="inline-block px-2 py-0.5 text-[13px] rounded-md bg-[#E8E3DD] text-[#6B5D4F]">Product Designer</span>
              </div>
              <div>
                <p className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground mb-2">Scope</p>
                <span className="inline-block px-2 py-0.5 text-[13px] rounded-md bg-[#E8E3DD] text-[#6B5D4F]">Full platform migration</span>
              </div>
              <div>
                <p className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground mb-2">Team</p>
                <p className="text-[15px] leading-relaxed">Team lead, 3 engineers, PM, VP of Product, VP of Design, Client Success</p>
              </div>
              <div>
                <p className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground mb-2">Constraint</p>
                <span className="inline-block px-2 py-0.5 text-[13px] rounded-md bg-[#E8E3DD] text-[#6B5D4F]">Limited eng bandwidth</span>
              </div>
            </div>

            {/* Cover image */}
            <div className="mb-12 max-w-[750px]">
              <div className="rounded-xl overflow-hidden transform-gpu">
                <img
                  src="/images/vq_cover.png"
                  alt="Veeqo document system"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>

            {/* Context */}
            <section id="context" className="mb-14">
              <p className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground mb-2">Context</p>
              <h2 className="font-serif text-[1.75rem] leading-[1.2] tracking-[-0.02em] mb-6 max-w-[750px]">
                Removing a third-party dependency
              </h2>
              <div className="space-y-4 text-[17px] leading-relaxed text-muted-foreground max-w-[750px]">
                <p>Veeqo is a multi-channel shipping platform acquired by Amazon, and documents sit at the core of every order - packing slips, invoices, customs forms, returns labels. The company planned to move UK sellers to US version of the product to ensure consistent brand experience for sellers across all countries and make further updates across countries smooth.</p>
                <p>UK sellers were using 3rd party solution enabling advanced customisation of the documents. US sellers had only basic editing. Not to lose UK sellers we needed to migrate the solution and include the advanced editing.</p>
                <div className="rounded-xl overflow-hidden">
                  <LightboxImage src="/images/vq-doc7-preview.webp" lightboxSrc="/images/vq-doc7.webp" alt="The system we replaced" className="w-full h-auto object-cover" loading="eager" />
                </div>
                <p className="mt-3 text-sm text-muted-foreground max-w-[750px] text-center">The system we replaced - the third-party template library and its drag-and-drop editor had no extensibility and no API control</p>
                <div>
                  <p className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground mb-2 mt-6">Business goals</p>
                  <p>Three things had to happen simultaneously: eliminate the third-party PDF dependency, protect retention among top-tier enterprise accounts from the UK, and reclaim technical ownership so the team could ship new document types without being blocked by an external vendor.</p>
                </div>
              </div>
            </section>

            {/* Discovery */}
            <section id="discovery" className="mb-14">
              <p className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground mb-2">Discovery</p>
              <h2 className="font-serif text-[1.75rem] leading-[1.2] tracking-[-0.02em] mb-6 max-w-[750px]">
                Two users with very different needs
              </h2>
              <div className="space-y-4 text-[17px] leading-relaxed text-muted-foreground max-w-[750px] mb-8">
                <p>I conducted discovery using our internal research documentation. I understood that there two seller segments working with the documents but with completely different relationships to the document management.</p>
              </div>

              {/* Segment comparison table */}
              <div className="border border-[#EBEBEB] max-w-[750px] mb-10 overflow-hidden bg-white">
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
                    enterprise: "High – documents are infrastructure, not a feature",
                    smb: "Low – never invested in the old system",
                  },
                ].map((row, i, arr) => (
                  <div key={row.label} className={`grid grid-cols-[180px_1fr_1fr] ${i < arr.length - 1 ? "border-b border-[#EBEBEB]" : ""}`}>
                    <div className="p-4 border-r border-[#EBEBEB] font-mono text-[10px] uppercase tracking-wider text-muted-foreground flex items-start pt-4">{row.label}</div>
                    <div className="p-4 border-r border-[#EBEBEB] text-[13px] text-muted-foreground leading-relaxed">{row.enterprise}</div>
                    <div className="p-4 text-[13px] text-muted-foreground leading-relaxed">{row.smb}</div>
                  </div>
                ))}
              </div>
            </section>

            {/* Research */}
            <section id="research" className="mb-14">
              <div className="max-w-[750px] space-y-4">
                <p className="text-[15px] text-foreground leading-relaxed">A competitive scan of ShipStation, Shopify, and similar platforms revealed a consistent gap: rigid pre-built templates on one end, full code editors on the other.</p>
                <div className="space-y-3">
                  <div className="p-4 bg-[#F5F3F0] rounded-lg">
                    <p className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground mb-2">Support tickets</p>
                    <p className="text-[14px] text-foreground leading-relaxed">Enterprise sellers filed around customisation limits and template reliability. SMB tickets clustered around setup confusion and generation failures.</p>
                  </div>
                  <div className="p-4 bg-[#F5F3F0] rounded-lg">
                    <p className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground mb-2">Seller interviews · Dovetail</p>
                    <p className="text-[14px] text-foreground leading-relaxed">Their fulfillment flows were unique and their documents needed to reflect these operational needs.</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Design Iterations */}
            <section id="iterations" className="mb-14">
              <p className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground mb-2">What we tried first</p>
              <h2 className="font-serif text-[1.75rem] leading-[1.2] tracking-[-0.02em] mb-6 max-w-[750px]">
                Ideating, testing and iterating
              </h2>
              <div className="space-y-4 text-[17px] leading-relaxed text-muted-foreground max-w-[750px]">
                <p>I kicked off my design process by diverging and ideating on as many solutions as possible to find the most optimal for us. I covered library structure, editor interactions, branding model, and failure states.</p>
              </div>
              <div className="rounded-xl overflow-hidden max-w-[750px] my-6">
                <LightboxImage src="/images/vq-doc10.png" alt="Design exploration" className="w-full h-auto object-cover" />
              </div>
              <p className="text-sm text-muted-foreground max-w-[750px] mt-3 text-center mb-6">Early ideation</p>
              <div className="space-y-4 text-[17px] leading-relaxed text-muted-foreground max-w-[750px]">
                <p>Drag and drop was the obvious starting point - familiar for the sellers, no code required. However, after critique sessions with the team, I moved away from it because the build cost was too high for the engineering bandwidth we had. Simple versions of drag and drop tool wouldn&apos;t have supported the complexity enterprise sellers needed.</p>
              </div>
              <div className="rounded-xl overflow-hidden max-w-[750px] my-6">
                <LightboxImage src="/images/vq-doc12.png" alt="Drag-and-drop editor exploration" className="w-full h-auto object-cover" />
              </div>
              <p className="text-sm text-muted-foreground max-w-[750px] mt-3 text-center mb-6">Drag-and-drop editor exploration - ruled out due to engineering cost and enterprise complexity</p>
              <div className="space-y-4 text-[17px] leading-relaxed text-muted-foreground max-w-[750px]">
                <p>A simple document table without previews surfaced a problem from a similar internal project: sellers don&apos;t name their documents consistently, so without a visual anchor the list became noise and finding the right template was harder than it should have been.</p>
              </div>
              <div className="space-y-4 text-[17px] leading-relaxed text-muted-foreground max-w-[750px]">
                <p>HTML as an &quot;advanced&quot; button on ready-to-go templates felt like a clean handoff between modes, but it made exploration harder to justify - sellers are less likely to discover what&apos;s possible when it&apos;s hidden behind an advanced label. As the number of templates scaled, the pattern would have broken down.</p>
              </div>
              <div className="rounded-xl overflow-hidden max-w-[750px] my-6">
                <LightboxImage src="/images/vq-doc8.png" alt="Four editing modes" className="w-full h-auto object-cover" />
              </div>
              <p className="text-sm text-muted-foreground max-w-[750px] mt-3 text-center">Early ideation drafts</p>
            </section>

            {/* Team Alignment */}
            <section id="reframe" className="mb-14">
              <p className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground mb-2">Design Process</p>
              <h2 className="font-serif text-[1.75rem] leading-[1.2] tracking-[-0.02em] mb-6 max-w-[750px]">
                Team Alignment
              </h2>
              <div className="space-y-4 text-[17px] leading-relaxed text-muted-foreground max-w-[750px] mb-8">
                <p>When I stepped in, the brief was already shifting. We were mid-migration of the product to the US version, the primary stakeholder was new to the company, and engineering was stretched thin.</p>
              </div>
            </section>

            {/* Strategy */}
            <section id="strategy" className="mb-14">
              <p className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground mb-2">Strategy</p>
              <h2 className="font-serif text-[1.75rem] leading-[1.2] tracking-[-0.02em] mb-6 max-w-[750px]">
                Account migration
              </h2>
              {/* Decision table */}
              <div className="border border-[#EBEBEB] max-w-[750px] mb-8 overflow-hidden bg-white">
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

              <div className="space-y-4 text-[17px] leading-relaxed text-muted-foreground max-w-[750px]">
                <p>We faced a choice: build an automated migration tool (4 months) or a high-touch manual white-glove service (2 weeks). I advocated for the manual path for enterprise accounts. While not technically scalable, it allowed us to meet the wider company deadline for migration to the US version of the product.</p>
              </div>

            </section>

            {/* Design Decisions */}
            <section id="design" className="mb-14">
              <p className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground mb-2">Key Design Decisions</p>
              <h2 className="font-serif text-[1.75rem] leading-[1.2] tracking-[-0.02em] mb-8 max-w-[750px]">
                What went into the work
              </h2>

              {/* Before / After architecture */}
              <div className="max-w-[750px] mb-12">
                <div className="grid grid-cols-1 md:grid-cols-[1fr_40px_1fr] gap-3 items-stretch">

                  {/* Before */}
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground mb-2">Before</p>
                    {/* Veeqo box */}
                    <div className="border border-[#EBEBEB] rounded-xl p-4 bg-white">
                      <p className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground mb-3">Veeqo</p>
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
                      <p className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground mb-3">Veeqo</p>
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

              {/* Images */}
              <div className="flex flex-col gap-6 max-w-[750px] mt-10">
                <div>
                  <p className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground mb-2">Category-Aware Templates</p>
                  <p className="text-[17px] leading-relaxed text-muted-foreground mb-5">Users don&apos;t start with a blank page. They get a base template pre-built with the fields most common to their document type - Invoices vs. Pick Lists, each with their own defaults.</p>
                  <div className="rounded-xl overflow-hidden">
                    <LightboxImage src="/images/vq-doc0.jpg" alt="Additional settings" className="w-full h-auto object-cover" />
                  </div>
                  <p className="mt-3 text-sm text-muted-foreground max-w-[750px] text-center">Category-aware template defaults - pre-built field sets per document type</p>
                </div>
                <div>
                  <p className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground mb-2">Research based additional settings</p>
                  <p className="text-[17px] leading-relaxed text-muted-foreground mb-5">Field priorities were driven by data – frequency of mention across support tickets and seller interviews determined which variables made it into the first release. Most-used fields shipped first, edge cases queued behind them.</p>
                  <div className="rounded-xl overflow-hidden mb-3">
                    <LightboxImage src="/images/vq-doc2.jpg" alt="Document library redesign" className="w-full h-auto object-cover" />
                  </div>
                  <p className="mt-3 text-sm text-muted-foreground max-w-[750px] text-center mb-6">Document library redesign: pre-built defaults alongside custom HTML + AI templates</p>
                </div>
                <div>
                  <p className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground mb-2">Document customisation</p>
                  <p className="text-[17px] leading-relaxed text-muted-foreground mb-5">The data dropdown replaced memorising API variable names with a searchable field-picker - select Bin Location from the list and the correct variable is injected directly. A coding task becomes a selection task, with live preview updating alongside every change.</p>
                  <div className="rounded-xl overflow-hidden">
                    <LightboxImage src="/images/vq-doc4.png" alt="HTML editor with AI assist and live preview" className="w-full h-auto object-cover" />
                  </div>
                  <p className="mt-3 text-sm text-muted-foreground max-w-[750px] text-center">HTML editor with AI assist, live preview alongside markup</p>
                </div>
                <div>
                  <p className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground mb-2">Product brands and associated documents</p>
                  <p className="text-[17px] leading-relaxed text-muted-foreground mb-4">Brand-to-template mapping - each brand links to its own document versions across all doc types, resolving the multi-brand complexity.</p>

                  {/* Brand scheme diagram */}
                  <div className="rounded-xl bg-[#F5F3F0] p-5 mb-6">
                    <div className="flex gap-3 items-start">

                      {/* Company Default */}
                      <div className="shrink-0 w-[170px]">
                        <p className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground mb-2">Company default</p>
                        <div className="border border-[#DDDDD8] rounded-xl bg-white p-3">
                          <p className="text-[12px] font-medium text-foreground mb-2.5">Default brand</p>
                          <div className="space-y-1.5">
                            {["Invoice", "Packing slip", "Pick list", "Return label"].map((doc) => (
                              <div key={doc} className="flex items-center justify-between gap-2">
                                <span className="text-[11px] text-muted-foreground">{doc}</span>
                                <span className="text-[10px] px-1.5 py-0.5 rounded-md bg-[#EBEBEB] text-muted-foreground shrink-0">Default</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Divider */}
                      <div className="flex items-center self-stretch pt-7">
                        <div className="w-px h-full bg-[#DDDDD8]" />
                      </div>

                      {/* Brand A - Dior 2026 */}
                      <div className="flex-1">
                        <p className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground mb-2">Brand</p>
                        <div className="border border-[#DDDDD8] rounded-xl bg-white p-3">
                          <p className="text-[12px] font-medium text-foreground mb-2.5">Dior 2026</p>
                          <div className="space-y-1.5">
                            <div className="flex items-center justify-between gap-2">
                              <span className="text-[11px] text-muted-foreground">Invoice Dior</span>
                              <span className="text-[10px] px-1.5 py-0.5 rounded-md bg-[#DCFCE7] text-[#166534] shrink-0">Ready to go</span>
                            </div>
                            <div className="flex items-center justify-between gap-2">
                              <span className="text-[11px] text-muted-foreground">Packing slip Dior</span>
                              <span className="text-[10px] px-1.5 py-0.5 rounded-md bg-[#DBEAFE] text-[#1d4ed8] shrink-0">Custom</span>
                            </div>
                            <div className="flex items-center justify-between gap-2">
                              <span className="text-[11px] text-muted-foreground">Pick list</span>
                              <span className="text-[10px] px-1.5 py-0.5 rounded-md bg-[#DCFCE7] text-[#166534] shrink-0">Ready to go</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Brand B - Chanel */}
                      <div className="flex-1">
                        <p className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground mb-2">Brand</p>
                        <div className="border border-[#DDDDD8] rounded-xl bg-white p-3">
                          <p className="text-[12px] font-medium text-foreground mb-2.5">Chanel</p>
                          <div className="space-y-1.5">
                            <div className="flex items-center justify-between gap-2">
                              <span className="text-[11px] text-muted-foreground">Invoice Chanel</span>
                              <span className="text-[10px] px-1.5 py-0.5 rounded-md bg-[#DCFCE7] text-[#166534] shrink-0">Ready to go</span>
                            </div>
                            <div className="flex items-center justify-between gap-2">
                              <span className="text-[11px] text-muted-foreground">Packing slip Chanel</span>
                              <span className="text-[10px] px-1.5 py-0.5 rounded-md bg-[#DBEAFE] text-[#1d4ed8] shrink-0">Custom</span>
                            </div>
                            <div className="flex items-center justify-between gap-2">
                              <span className="text-[11px] text-muted-foreground">Pick list</span>
                              <span className="text-[10px] px-1.5 py-0.5 rounded-md bg-[#DCFCE7] text-[#166534] shrink-0">Ready to go</span>
                            </div>
                          </div>
                        </div>
                      </div>

                    </div>
                  </div>

                  <div className="rounded-xl overflow-hidden">
                    <LightboxImage src="/images/vq2.png" alt="Printing templates with HTML editor and live preview" className="w-full h-auto object-cover" />
                  </div>
                  <p className="mt-3 text-sm text-muted-foreground max-w-[750px] text-center">Brand-to-template mapping - each brand links to its own document versions across all document types</p>
                  <div className="rounded-xl overflow-hidden mt-6">
                    <LightboxImage src="/images/vq-doc2.jpg" alt="Document library" className="w-full h-auto object-cover" />
                  </div>
                  <p className="mt-3 text-sm text-muted-foreground max-w-[750px] text-center">Multi-brand document library - template versions mapped per brand across all document types</p>
                  <p className="text-[17px] leading-relaxed text-muted-foreground mt-6 mb-4">Version selection at print time - sellers choose which custom template to use per doc type without leaving the print flow.</p>
                  <div className="rounded-xl overflow-hidden">
                    <LightboxImage src="/images/vq1.png" alt="Document setup with branding and version configuration" className="w-full h-auto object-cover" />
                  </div>
                  <p className="mt-3 text-sm text-muted-foreground max-w-[750px] text-center">Version selection at print time - pick a custom template per document type without leaving the print flow</p>
                </div>
              </div>
            </section>


            {/* Outcomes */}
            <section id="outcomes" className="mb-14">
              <p className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground mb-2">Impact</p>
              <h2 className="font-serif text-[1.75rem] leading-[1.2] tracking-[-0.02em] mb-6 max-w-[750px]">
                We successfully sunset the third-party dependency
              </h2>
              <div className="p-8 bg-[#F5F3F0] rounded-xl max-w-[750px] mb-8">
                <ul className="space-y-2 text-[17px] leading-relaxed">
                  <li className="flex gap-3">
                    <span className="text-muted-foreground mt-0.5">•</span>
                    <span className="text-muted-foreground">Successfully migrated the core document infrastructure for 50k+ sellers, securing $15B+ in annual GMV from potential service interruptions</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-muted-foreground mt-0.5">•</span>
                    <span className="text-muted-foreground">0% churn among top-tier enterprise accounts during the transition</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-muted-foreground mt-0.5">•</span>
                    <span className="text-muted-foreground">Days not months - custom fields and new document types now ship on a timeline the team owns</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-muted-foreground mt-0.5">•</span>
                    <span className="text-muted-foreground">30% reduction in how-to support tickets vs. the legacy system</span>
                  </li>
                </ul>
              </div>
            </section>

            {/* Future Vision */}
            <section id="future" className="mb-14">
              <p className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground mb-2">Future Vision</p>
              <h2 className="font-serif text-[1.75rem] leading-[1.2] tracking-[-0.02em] mb-6 max-w-[750px]">
                What this migration makes possible
              </h2>
              <div className="space-y-4 text-[17px] leading-relaxed text-muted-foreground max-w-[750px] mb-8">
                <p>The migration wasn&apos;t the end state. Moving off the third-party dependency gave the team full ownership of the template infrastructure for the first time. What that ownership enables is a V2 that was never possible under the old system: a document library that learns from seller behaviour rather than just storing what sellers configure.</p>
              </div>

              {/* Roadmap */}
              <div className="max-w-[750px]">
                <div className="relative">
                  {/* Connecting line */}
                  <div className="hidden md:block absolute top-[28px] left-[calc(16.67%-8px)] right-[calc(16.67%-8px)] h-px bg-[#EBEBEB] z-0" />

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 relative z-10">

                    {/* V1 - Shipped */}
                    <div>
                      <div className="flex items-center gap-2 mb-3">
                        <div className="w-4 h-4 rounded-full bg-foreground shrink-0" />
                        <span className="font-mono text-[10px] uppercase tracking-wider text-foreground">V1 · Shipped</span>
                      </div>
                      <div className="border border-[#EBEBEB] rounded-xl p-4 bg-white space-y-2">
                        {["Core infrastructure migration", "HTML editor + AI assist", "Toggle-based defaults", "Failure state coverage", "Enterprise white-glove migration"].map((item) => (
                          <div key={item} className="flex items-start gap-2">
                            <span className="text-emerald-500 mt-0.5 text-[13px]">✓</span>
                            <span className="text-[13px] text-muted-foreground">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* V2 */}
                    <div>
                      <div className="flex items-center gap-2 mb-3">
                        <div className="w-4 h-4 rounded-full border-2 border-foreground bg-background shrink-0" />
                        <span className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">V2 · Template Intelligence</span>
                      </div>
                      <div className="border border-[#EBEBEB] rounded-xl p-4 bg-[#F5F3F0] space-y-2">
                        {["Expanded template library", "Featured & most-popular surfacing", "Seller starring / favourites", "Usage-based recommendations"].map((item) => (
                          <div key={item} className="flex items-start gap-2">
                            <span className="text-muted-foreground/40 mt-0.5 text-[13px]">○</span>
                            <span className="text-[13px] text-muted-foreground">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* V3 */}
                    <div>
                      <div className="flex items-center gap-2 mb-3">
                        <div className="w-4 h-4 rounded-full border-2 border-[#EBEBEB] bg-background shrink-0" />
                        <span className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">V3 · AI Document Intelligence</span>
                      </div>
                      <div className="border border-[#EBEBEB] rounded-xl p-4 bg-white space-y-2">
                        {["AI-generated docs from seller order flows", "Smart field suggestions based on fulfillment patterns", "Automated improvement recommendations per template", "Tag-based organisation", "Version diff & rollback"].map((item) => (
                          <div key={item} className="flex items-start gap-2">
                            <span className="text-muted-foreground/30 mt-0.5 text-[13px]">○</span>
                            <span className="text-[13px] text-muted-foreground">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                  </div>
                </div>
              </div>

              <div className="rounded-xl overflow-hidden max-w-[750px] mt-10">
                <LightboxImage src="/images/vq_doc.png" alt="Future vision" className="w-full h-auto object-cover" />
              </div>
            </section>

            {/* Reflections */}
            <section id="reflections" className="mb-12">
              <p className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground mb-2">Reflections</p>
              <h2 className="font-serif text-[1.75rem] leading-[1.2] tracking-[-0.02em] mb-6 max-w-[750px]">
                How this changed the way the team works
              </h2>
              <div className="space-y-6 text-[17px] leading-relaxed text-muted-foreground max-w-[750px]">
                <div>
                  <h3 className="font-serif text-[1.375rem] leading-[1.3] tracking-[-0.02em] mb-2 font-medium text-foreground">Engineering in the room from day one</h3>
                  <p>Having the engineering lead in every design session caught at least two directions that wouldn&apos;t have survived production. Feedback cycles were rough and early. That model became the default for how the team runs design reviews.</p>
                </div>
                <div>
                  <h3 className="font-serif text-[1.375rem] leading-[1.3] tracking-[-0.02em] mb-2 font-medium text-foreground">Owning the brief when it lost its owner</h3>
                  <p>When the primary stakeholder exited mid-project, I picked up the PRD to keep alignment anchored. That act of ownership is what allowed the project to ship without a restart.</p>
                </div>
              </div>
            </section>

            <div className="pt-8">
              <BackLinkFooter />
            </div>

          </main>
        </div>
      </div>
    </div>
    </PasswordGate>
  )
}
