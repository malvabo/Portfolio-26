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
              <a href="#iterations" className="block text-[15px] text-muted-foreground hover:text-foreground transition-colors">Design iterations</a>
              <a href="#strategy" className="block text-[15px] text-muted-foreground hover:text-foreground transition-colors">Strategy</a>
              <a href="#design" className="block text-[15px] text-muted-foreground hover:text-foreground transition-colors">Design Decisions</a>
              <a href="#outcomes" className="block text-[15px] text-muted-foreground hover:text-foreground transition-colors">Outcomes</a>
              <a href="#next-milestone" className="block text-[15px] text-muted-foreground hover:text-foreground transition-colors">Next Milestone</a>
              <a href="#future" className="block text-[15px] text-muted-foreground hover:text-foreground transition-colors">Future Vision</a>
              <a href="#reflections" className="block text-[15px] text-muted-foreground hover:text-foreground transition-colors">Reflections</a>
            </nav>
          </aside>

          <main className="flex-1 px-8 lg:px-12 pb-20 lg:pb-24">

            {/* Header */}
            <div className="mb-8 max-w-[750px]">
              <p className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground mb-3">Amazon · Veeqo · Document Automation</p>
              <h1 className="font-serif text-2xl md:text-3xl lg:text-4xl tracking-[-0.02em] leading-[1.15] mb-4">
                Amazon: Redesigning a document system for 50,000+ sellers
              </h1>
              <p className="text-[17px] leading-relaxed text-muted-foreground">
                Migrating Veeqo&apos;s document infrastructure off a third-party dependency, across two seller segments, an unstable API, and a scope that kept growing.
              </p>
            </div>

            {/* Meta grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-4 mb-6 pb-4 max-w-[750px]">
              <div>
                <p className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground mb-2">Role</p>
                <p className="text-[15px] leading-relaxed">Product Designer</p>
              </div>
              <div>
                <p className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground mb-2">Platform</p>
                <p className="text-[15px] leading-relaxed">Web</p>
              </div>
              <div>
                <p className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground mb-2">Team</p>
                <p className="text-[15px] leading-relaxed">2 PMs, Engineering team (3 people)</p>
              </div>
              <div>
                <p className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground mb-2">Timeline</p>
                <p className="text-[15px] leading-relaxed">3 months</p>
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

            {/* Impact */}
            <section id="outcomes" className="mb-14">
              <p className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground mb-2">Impact</p>
              <h2 className="font-serif text-[1.75rem] leading-[1.2] tracking-[-0.02em] mb-4 max-w-[750px]">
                We successfully sunset the third-party dependency
              </h2>
              <div className="p-8 bg-[#F5F3F0] rounded-xl max-w-[750px] mb-8">
                <ul className="space-y-2 text-[17px] leading-relaxed">
                  <li className="flex gap-3">
                    <span className="text-muted-foreground mt-0.5">•</span>
                    <span className="text-muted-foreground">Successfully migrated the core document infrastructure for <span className="font-semibold text-foreground">50k+</span> sellers, securing <span className="font-semibold text-foreground">$15B+</span> in annual GMV from potential service interruptions</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-muted-foreground mt-0.5">•</span>
                    <span className="text-muted-foreground"><span className="font-semibold text-foreground">0% churn</span> among top-tier enterprise accounts during the transition</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-muted-foreground mt-0.5">•</span>
                    <span className="text-muted-foreground"><span className="font-semibold text-foreground">Days not months</span> — custom fields and new document types now ship on a timeline the team owns</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-muted-foreground mt-0.5">•</span>
                    <span className="text-muted-foreground"><span className="font-semibold text-foreground">30% reduction</span> in how-to support tickets vs. the legacy system</span>
                  </li>
                </ul>
              </div>
            </section>

            {/* Context */}
            <section id="context" className="mb-14">
              <p className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground mb-2">Context</p>
              <h2 className="font-serif text-[1.75rem] leading-[1.2] tracking-[-0.02em] mb-4 max-w-[750px]">
                Removing a third-party dependency
              </h2>
              <div className="space-y-4 text-[17px] leading-relaxed text-muted-foreground max-w-[750px]">
                <p>Veeqo is a multi-channel shipping platform acquired by Amazon, and documents sit at the core of every order - packing slips, invoices, customs forms, returns labels. The company planned to move UK sellers to US version of the product to ensure consistent brand experience for sellers across all countries and make further updates across countries smooth.</p>
                <p>UK sellers were using 3rd party solution enabling advanced customisation of the documents. US sellers had only basic editing. Not to lose UK sellers we needed to migrate the solution and include the advanced editing.</p>
                <p>The third-party editor had no extensibility and no API control.</p>
                <div className="rounded-xl overflow-hidden">
                  <LightboxImage src="/images/vq-doc7-preview.webp" lightboxSrc="/images/vq-doc7.webp" alt="The system we replaced" className="w-full h-auto object-cover" loading="eager" />
                </div>
                <p className="mt-3 text-sm text-muted-foreground max-w-[750px] text-center">Legacy third-party editor — no API access, no extensibility</p>
                <div>
                  <p className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground mb-2 mt-6">Business goals</p>
                  <p>Three things had to happen simultaneously: eliminate the third-party PDF dependency, protect retention among top-tier enterprise accounts from the UK, and reclaim technical ownership so the team could ship new document types without being blocked by an external vendor.</p>
                </div>
              </div>
            </section>

            {/* Discovery */}
            <section id="discovery" className="mb-14">
              <p className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground mb-2">Discovery</p>
              <h2 className="font-serif text-[1.75rem] leading-[1.2] tracking-[-0.02em] mb-4 max-w-[750px]">
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
                <p className="text-[17px] leading-relaxed text-muted-foreground">ShipStation, Shopify, and similar platforms showed the same gap: rigid pre-built templates on one end, full code editors on the other.</p>
                <div className="space-y-3">
                  <div className="p-4 bg-[#F5F3F0] rounded-lg">
                    <p className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground mb-2">Support tickets</p>
                    <p className="text-[17px] text-foreground leading-relaxed">Enterprise sellers filed around customisation limits and template reliability. SMB tickets clustered around setup confusion and generation failures.</p>
                  </div>
                  <div className="p-4 bg-[#F5F3F0] rounded-lg">
                    <p className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground mb-2">Seller interviews · Dovetail</p>
                    <p className="text-[17px] text-foreground leading-relaxed">Their fulfillment flows were unique and their documents needed to reflect these operational needs.</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Design Iterations */}
            <section id="iterations" className="mb-14">
              <p className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground mb-2">Design iterations</p>
              <h2 className="font-serif text-[1.75rem] leading-[1.2] tracking-[-0.02em] mb-4 max-w-[750px]">
                Ideating, testing and iterating
              </h2>
              <div className="space-y-4 text-[17px] leading-relaxed text-muted-foreground max-w-[750px]">
                <p>I kicked off my design process by diverging and ideating on as many solutions as possible to find the most optimal for us. I covered library structure, editor interactions, branding model, and failure states.</p>
              </div>
              <div className="rounded-xl overflow-hidden max-w-[750px] my-6">
                <LightboxImage src="/images/vq-doc10.png" alt="Design exploration" className="w-full h-auto object-cover" />
              </div>
              <p className="text-sm text-muted-foreground max-w-[750px] mt-3 text-center mb-6">Early ideation</p>
              <div className="max-w-[750px] mt-6">
                <p className="font-medium text-foreground text-[17px] mb-1">Direction 1:</p>
                <p className="text-[17px] leading-relaxed text-muted-foreground">Drag and drop was the obvious starting point - familiar for the sellers, no code required. However, after critique sessions with the team, I moved away from it because the build cost was too high for the engineering bandwidth we had. Simple versions of drag and drop tool wouldn&apos;t have supported the complexity enterprise sellers needed.</p>
              </div>
              <div className="rounded-xl overflow-hidden max-w-[750px] my-6">
                <LightboxImage src="/images/vq-doc12.png" alt="Drag-and-drop editor exploration" className="w-full h-auto object-cover" />
              </div>
              <p className="text-sm text-muted-foreground max-w-[750px] mt-3 text-center mb-6">Drag-and-drop editor exploration - ruled out due to engineering cost and enterprise complexity</p>
              <div className="max-w-[750px] mt-6">
                <p className="font-medium text-foreground text-[17px] mb-1">Direction 2:</p>
                <p className="text-[17px] leading-relaxed text-muted-foreground">Simple document table without previews surfaced a problem from a similar internal project: sellers don&apos;t name their documents consistently. Without a visual anchor the list became noise and finding the right template was harder than it should have been.</p>
              </div>
              <div className="space-y-4 text-[17px] leading-relaxed text-muted-foreground max-w-[750px] mt-6">
                <p>HTML as an &quot;advanced&quot; button on existing settings made exploration harder to justify - sellers are less likely to discover what&apos;s possible when it&apos;s hidden behind an advanced label. As the number of templates scaled, the pattern would have broken down.</p>
              </div>
              <div className="rounded-xl overflow-hidden max-w-[750px] my-6">
                <LightboxImage src="/images/vq-doc8.png" alt="Four editing modes" className="w-full h-auto object-cover" />
              </div>
              <p className="text-sm text-muted-foreground max-w-[750px] mt-3 text-center">Early ideation drafts</p>
            </section>

            {/* Team Alignment */}
            <section id="reframe" className="mb-14">
              <p className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground mb-2">Collaboration</p>
              <h2 className="font-serif text-[1.75rem] leading-[1.2] tracking-[-0.02em] mb-4 max-w-[750px]">
                Team Alignment
              </h2>
              <div className="space-y-4 text-[17px] leading-relaxed text-muted-foreground max-w-[750px] mb-8">
                <p>When I stepped in, we were mid-migration of the product to the US version, the primary stakeholder was new to the company, and engineering was stretched thin. I had to be the primary decision maker, ensure that the solution covers both business and user needs, is technically feasible now and will be scalable in the future.</p>
                <p>I decided on the following architectural approach:</p>
                <ul className="space-y-3 list-none">
                  <li className="flex gap-3">
                    <span className="mt-[11px] shrink-0 w-1.5 h-1.5 rounded-full bg-muted-foreground" />
                    <span><span className="font-semibold text-foreground">For SMBs</span> who just wanted things to work, I designed Category-Aware Templates. By using pre-configured settings based on the document type, we eliminated the &quot;blank canvas&quot; anxiety and handled the 80% use case with simple toggles.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-[11px] shrink-0 w-1.5 h-1.5 rounded-full bg-muted-foreground" />
                    <span><span className="font-semibold text-foreground">Enterprise sellers and sellers with high operational complexity</span> would use HTML and AI editor. I decided on providing a library of high-quality, pre-coded base templates so most users would only need to change a couple of lines of CSS, rather than writing code from a blank screen.</span>
                  </li>
                </ul>
              </div>

              {/* Before / After architecture */}
              <div className="max-w-[750px] mb-12">
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
            </section>

            {/* Strategy */}
            <section id="strategy" className="mb-14">
              <p className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground mb-2">Strategy</p>
              <h2 className="font-serif text-[1.75rem] leading-[1.2] tracking-[-0.02em] mb-4 max-w-[750px]">
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
              <h2 className="font-serif text-[1.75rem] leading-[1.2] tracking-[-0.02em] mb-4 max-w-[750px]">
                What went into the work
              </h2>

              {/* Images */}
              <div className="flex flex-col gap-6 max-w-[750px]">
                <div>
                  <p className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground mb-2">Category-Aware Templates</p>
                  <p className="text-[17px] leading-relaxed text-muted-foreground mb-5">Users don&apos;t start with a blank page. They get a base template pre-built with the fields most common to their document type - Invoices vs. Pick Lists, each with their own defaults.</p>
                  <div className="rounded-xl overflow-hidden">
                    <LightboxImage src="/images/vq-doc0.jpg" alt="Additional settings" className="w-full h-auto object-cover" />
                  </div>
                  <p className="mt-3 text-sm text-muted-foreground max-w-[750px] text-center">Category-aware template defaults - pre-built field sets per document type</p>
                </div>
                <div>
                  <p className="text-[17px] leading-relaxed text-muted-foreground mb-5">Users can either use Ready-to-go template with simple toggle-based settings, create a document variant from scratch or use one of the HTML variants. HTML variants are based on the most common setups and help users speed up the custom document creation.</p>
                  <div className="rounded-xl overflow-hidden">
                    <LightboxImage src="/images/vq11.png" alt="Research based additional settings" className="w-full h-auto object-cover" />
                  </div>
                  <p className="mt-3 text-sm text-muted-foreground max-w-[750px] text-center">Research-informed field set — most-requested variables surfaced first</p>
                  <p className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground mb-2 mt-6">Ready-to-go template</p>
                  <p className="text-[17px] leading-relaxed text-muted-foreground mb-5">Field priorities were driven by data – frequency of mention across support tickets and seller interviews determined which variables made it into the first release. Most-used fields shipped first, edge cases queued behind them.</p>
                  <div className="rounded-xl overflow-hidden mt-4">
                    <LightboxImage src="/images/vq-doc31.png" alt="Research based additional settings detail" className="w-full h-auto object-cover" />
                  </div>
                  <p className="mt-3 text-sm text-muted-foreground max-w-[750px] text-center">Additional settings panel — data-priority field ordering</p>
                </div>
                <div>
                  <p className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground mb-2">HTML Editor</p>
                  <p className="text-[17px] leading-relaxed text-muted-foreground mb-5">The data dropdown replaced memorising API variable names with a searchable field-picker. Select Bin Location from the list and the correct variable would be injected directly.</p>
                  <div className="rounded-xl overflow-hidden">
                    <LightboxImage src="/images/vq-doc4.png" alt="HTML editor with AI assist and live preview" className="w-full h-auto object-cover" />
                  </div>
                  <p className="mt-3 text-sm text-muted-foreground max-w-[750px] text-center">HTML editor with AI assist, live preview alongside markup</p>
                </div>
                <div>
                  <h3 className="font-serif text-[1.375rem] leading-[1.3] tracking-[-0.02em] mb-3 font-medium text-foreground">Product brands and associated documents</h3>
                  <p className="text-[17px] leading-relaxed text-muted-foreground mb-4">The most significant logical gap in the old system was the inheritance model. Enterprise sellers often manage 5–10 distinct brands under one Veeqo account, each requiring its own visual identity and fields.</p>
                  <p className="text-[17px] leading-relaxed text-muted-foreground mb-4">I designed a system where each document type acts as a folder. Inside, users can create infinite variants (HTML templates) and map them specifically to one or more brands.</p>

                  {/* Brand scheme diagram */}
                  <div className="rounded-xl bg-[#F5F3F0] p-5 mb-6">
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

                  <p className="text-[17px] leading-relaxed text-muted-foreground mb-4 mt-6">To prevent &quot;template soup&quot; the document variant page explicitly shows which brands are currently inheriting that specific template. If user edits the document variant, they can instantly see that it will affect Dior, Chanel, and 10 other brands simultaneously.</p>
                  <div className="rounded-xl overflow-hidden mt-4">
                    <LightboxImage src="/images/vq-doc2.jpg" alt="Document library" className="w-full h-auto object-cover" />
                  </div>
                  <p className="mt-3 text-sm text-muted-foreground max-w-[750px] text-center">Multi-brand document library - template versions mapped per brand across all document types</p>
                  <p className="text-[17px] leading-relaxed text-muted-foreground mt-6 mb-4">On the level of brands, a user can set the document variants that would be tied to it.</p>
                  <div className="rounded-xl overflow-hidden">
                    <LightboxImage src="/images/vq2.png" alt="Printing templates with HTML editor and live preview" className="w-full h-auto object-cover" />
                  </div>
                  <p className="mt-3 text-sm text-muted-foreground max-w-[750px] text-center">Brand-to-template mapping - each brand links to its own document versions across all document types</p>
                  <p className="text-[17px] leading-relaxed text-muted-foreground mt-6 mb-4">Version selection at print time - sellers choose which custom template to use per doc type without leaving the print flow.</p>
                  <div className="rounded-xl overflow-hidden">
                    <LightboxImage src="/images/vq1.png" alt="Document setup with branding and version configuration" className="w-full h-auto object-cover" />
                  </div>
                  <p className="mt-3 text-sm text-muted-foreground max-w-[750px] text-center">Version selection at print time - pick a custom template per document type without leaving the print flow</p>
                </div>
              </div>
            </section>


            {/* Skeleton states */}
            <section className="mb-14">
              <div className="space-y-4 text-[17px] leading-relaxed text-muted-foreground max-w-[750px] mb-6">
                <p>Added some Rive-based skeleton states to the UI. These will be displayed when the API lags, ensuring the app feels responsive while the documents are still fetching.</p>
              </div>
              <div className="max-w-[750px] grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="overflow-hidden rounded-xl border border-gray-100">
                  <video src="/images/skeleton.mov" autoPlay loop muted playsInline className="w-full h-auto" />
                </div>
                <div className="overflow-hidden rounded-xl border border-gray-100">
                  <video src="/images/skeleton2.mov" autoPlay loop muted playsInline className="w-full h-auto" />
                </div>
              </div>
            </section>

            {/* Impact at end */}
            <section id="impact-end" className="mb-14">
              <p className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground mb-2">Impact</p>
              <h2 className="font-serif text-[1.75rem] leading-[1.2] tracking-[-0.02em] mb-6 max-w-[750px]">
                Impact at a glance
              </h2>
              <div className="p-8 bg-[#F5F3F0] rounded-xl max-w-[750px] mb-8">
                <ul className="space-y-2 text-[17px] leading-relaxed">
                  <li className="flex gap-3">
                    <span className="text-muted-foreground mt-0.5">•</span>
                    <span className="text-muted-foreground">Successfully migrated the core document infrastructure for <span className="font-semibold text-foreground">50k+</span> sellers, securing <span className="font-semibold text-foreground">$15B+</span> in annual GMV from potential service interruptions</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-muted-foreground mt-0.5">•</span>
                    <span className="text-muted-foreground"><span className="font-semibold text-foreground">0% churn</span> among top-tier enterprise accounts during the transition</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-muted-foreground mt-0.5">•</span>
                    <span className="text-muted-foreground"><span className="font-semibold text-foreground">Days not months</span> — custom fields and new document types now ship on a timeline the team owns</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-muted-foreground mt-0.5">•</span>
                    <span className="text-muted-foreground"><span className="font-semibold text-foreground">30% reduction</span> in how-to support tickets vs. the legacy system</span>
                  </li>
                </ul>
              </div>
            </section>

            {/* Next Milestone */}
            <section id="next-milestone" className="mb-14">
              <p className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground mb-2">Next Milestone</p>
              <h2 className="font-serif text-[1.75rem] leading-[1.2] tracking-[-0.02em] mb-6 max-w-[750px]">
                Leveraging AI for document creation
              </h2>
              <div className="space-y-4 text-[17px] leading-relaxed text-muted-foreground max-w-[750px]">
                <p>The core problem was technical literacy. Enterprise documents require complex custom logic (HTML/CSS), but warehouse managers aren&apos;t developers — they can&apos;t code.</p>
                <p>Instead of building a complex GUI we wouldn&apos;t be able to technically support in the first iteration of the product, I designed a workflow where the user provides natural language intent.</p>
                <p>I worked closely with the backend engineers to define the technical specifications. I translated our internal Shopify Liquid logic into the system instructions. I ensured the prompt followed our specific ways of iterating through lists and data fetching.</p>
              </div>
              <div className="rounded-xl overflow-hidden my-6 max-w-[750px]">
                <LightboxImage src="/images/aidocs.jpeg" alt="AI documentation and system instructions" className="w-full h-auto object-cover" />
              </div>
              <div className="space-y-4 text-[17px] leading-relaxed text-muted-foreground max-w-[750px]">
                <p>Users now have to provide the LLM of their choice with our specific technical documentation: the internal rules, the liquid tags, and the span and div structures our backend requires to render correctly. After that, they would paste the result into our interface and save the result.</p>
                <p>This reduced the white-glove support we had to provide, as sellers could now self-serve their migration through a guided, AI-assisted interface.</p>
              </div>
            </section>

            {/* Future Vision */}
            <section id="future" className="mb-14">
              <p className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground mb-2">Future Vision</p>
              <h2 className="font-serif text-[1.75rem] leading-[1.2] tracking-[-0.02em] mb-4 max-w-[750px]">
                What this migration makes possible
              </h2>
              <div className="space-y-4 text-[17px] leading-relaxed text-muted-foreground max-w-[750px] mb-8">
                <p>The migration wasn&apos;t the end state. Moving off the third-party dependency gave the team full ownership of the template infrastructure for the first time.</p>
              </div>

              {/* Roadmap */}
              <div className="max-w-[750px]">
                {/* Labels row — 10px above the line */}
                <div className="hidden md:grid grid-cols-3 gap-4 mb-[10px]">
                  <p className="font-mono text-[10px] uppercase tracking-wider text-foreground">V1 · Shipped</p>
                  <p className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">V2 · Template Intelligence</p>
                  <p className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">V3 · AI Document Intelligence</p>
                </div>

                {/* Connecting line + arrows */}
                <div className="hidden md:flex items-center mb-4">
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

              <div className="rounded-xl overflow-hidden max-w-[750px] mt-10">
                <LightboxImage src="/images/vq_doc.png" alt="Future vision" className="w-full h-auto object-cover" />
              </div>
              <p className="mt-3 text-sm text-muted-foreground max-w-[750px] text-center">Future vision: document intelligence layer built on owned infrastructure</p>
            </section>

            {/* Reflections */}
            <section id="reflections" className="mb-12">
              <p className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground mb-2">Reflections</p>
              <h2 className="font-serif text-[1.75rem] leading-[1.2] tracking-[-0.02em] mb-4 max-w-[750px]">
                How this changed the way the team works
              </h2>
              <div className="space-y-6 text-[17px] leading-relaxed text-muted-foreground max-w-[750px]">
                <div>
                  <h3 className="font-serif text-[1.375rem] leading-[1.3] tracking-[-0.02em] mb-2 font-medium text-foreground">Engineering in the room from day one</h3>
                  <p>Having the engineering lead in every design session caught at least two directions that wouldn&apos;t have survived production. Feedback cycles were rough and early. That model became the default for how the team runs design reviews.</p>
                </div>
                <div>
                  <h3 className="font-serif text-[1.375rem] leading-[1.3] tracking-[-0.02em] mb-2 font-medium text-foreground">Owning the brief when it lost its owner</h3>
                  <p>When our primary stakeholder moved on mid-project, I stepped in to help manage the PRD and documentation. My goal was simply to keep our shared vision clear and the requirements anchored, which helped the team stay on track. This approach set a precedent for the design team to step into broader product ownership roles during complex transitions.</p>
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
