"use client"
import { LightboxImage } from "@/components/lightbox-image"

import Link from "next/link"
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
            <Link
              href="/#work"
              scroll={false}
              className="block text-xs font-mono tracking-wider uppercase text-muted-foreground hover:text-foreground transition-colors mb-10 leading-none"
            >
              <span className="inline-flex items-baseline gap-2">
                <ArrowLeft className="w-3 h-3 shrink-0" />
                All projects
              </span>
            </Link>
            <nav className="space-y-4" aria-label="Case study sections">
              <a href="#context" className="block text-[15px] text-muted-foreground hover:text-foreground transition-colors">Context</a>
              <a href="#discovery" className="block text-[15px] text-muted-foreground hover:text-foreground transition-colors">Discovery</a>
              <a href="#iterations" className="block text-[15px] text-muted-foreground hover:text-foreground transition-colors">What We Tried</a>
              <a href="#strategy" className="block text-[15px] text-muted-foreground hover:text-foreground transition-colors">Strategy</a>
              <a href="#design" className="block text-[15px] text-muted-foreground hover:text-foreground transition-colors">Design Decisions</a>
              <a href="#outcomes" className="block text-[15px] text-muted-foreground hover:text-foreground transition-colors">Outcomes</a>
              <a href="#reflections" className="block text-[15px] text-muted-foreground hover:text-foreground transition-colors">Reflections</a>
            </nav>
          </aside>

          <main className="flex-1 px-8 lg:px-12 pb-20 lg:pb-24">

            {/* Header */}
            <div className="mb-8 max-w-[750px]">
              <p className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground mb-3">Amazon · Veeqo · Document Automation</p>
              <h1 className="font-serif text-2xl md:text-3xl lg:text-4xl tracking-[-0.02em] leading-[1.15] mb-4">
                Amazon: Replacing a critical document system for 50,000+ sellers.
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
                <p className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground mb-2">Scope</p>
                <p className="text-[15px] leading-relaxed">Full platform migration</p>
              </div>
              <div>
                <p className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground mb-2">Team</p>
                <p className="text-[15px] leading-relaxed">Team lead, 3 engineers, PM, VP of Product, VP of Design, Client Success</p>
              </div>
              <div>
                <p className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground mb-2">Constraint</p>
                <p className="text-[15px] leading-relaxed">Limited eng bandwidth</p>
              </div>
            </div>

            {/* Cover image */}
            <div className="mb-12 max-w-[750px]">
              <div className="rounded-xl overflow-hidden">
                <img
                  src="/images/vq1.png"
                  alt="Veeqo document system"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>

            {/* Context */}
            <section id="context" className="mb-14">
              <p className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground mb-2">Context</p>
              <h2 className="font-serif text-[1.75rem] leading-[1.2] tracking-[-0.02em] mb-6 max-w-[750px]">
                A dependency we had to cut.
              </h2>
              <div className="space-y-4 text-[17px] leading-relaxed text-muted-foreground max-w-[750px]">
                <p>Veeqo is a multi-channel shipping platform acquired by Amazon, and documents sit at the core of every order - packing slips, invoices, customs forms, returns labels. The entire system ran on a third-party PDF tool with no extensibility, real technical risk, and a vendor dependency the business couldn&apos;t afford to keep. Through early discovery workshops, I helped surface the case for replacing it entirely.</p>
                <div className="rounded-xl overflow-hidden">
                  <LightboxImage src="/images/vq-doc7.png" alt="The system we replaced" className="w-full h-auto object-cover" />
                </div>
                <p className="text-sm text-muted-foreground text-center">The system we replaced - the third-party template library and its drag-and-drop editor had no extensibility and no API control</p>
                <div>
                  <p className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground mb-2 mt-6">Business goals</p>
                  <p>Three things had to happen simultaneously: eliminate the third-party PDF dependency, protect retention among top-tier enterprise accounts at genuine churn risk, and reclaim technical ownership so the team could ship new document types without being blocked by an external vendor.</p>
                </div>
              </div>
            </section>

            {/* Discovery */}
            <section id="discovery" className="mb-14">
              <p className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground mb-2">Discovery</p>
              <h2 className="font-serif text-[1.75rem] leading-[1.2] tracking-[-0.02em] mb-6 max-w-[750px]">
                Not one user. Two completely different problems.
              </h2>
              <div className="space-y-4 text-[17px] leading-relaxed text-muted-foreground max-w-[750px] mb-8">
                <p>Through discovery, I realized we weren&apos;t designing for a monolith. We had two distinct &quot;user worlds&quot; with a massive gap between them.</p>
                <p>Enterprise sellers were ops-heavy teams running complex, multi-brand fulfillment operations - many had spent years building customized templates with business logic embedded directly in their layouts. For these sellers, the document system wasn&apos;t a feature. It was infrastructure. SMB sellers needed clean defaults and reliable generation. Most had never touched the legacy editor - their ask was simple: a logo, a brand colour, and documents that worked without setup overhead.</p>
              </div>

              {/* Segment diagram */}
              <div className="bg-white border border-[#EBEBEB] rounded-xl p-8 max-w-[750px] mb-10">
                <p className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground mb-6">Seller segmentation: needs</p>
                <div className="grid grid-cols-[120px_1fr] gap-5 py-5 border-b border-[#EBEBEB] items-start">
                  <div className="flex items-center gap-2 text-[13px] font-medium text-foreground">
                    <span className="w-2 h-2 rounded-full bg-foreground inline-block shrink-0" />
                    Enterprise
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-[11px] font-medium px-2.5 py-1 rounded-sm bg-red-50 text-red-700">Custom PDF layouts (existing)</span>
                    <span className="text-[11px] font-medium px-2.5 py-1 rounded-sm bg-amber-50 text-amber-700">Multi-brand / co-brand templates</span>
                    <span className="text-[11px] font-medium px-2.5 py-1 rounded-sm bg-amber-50 text-amber-700">Ops-heavy, not developers</span>
                  </div>
                </div>
                <div className="grid grid-cols-[120px_1fr] gap-5 py-5 border-b border-[#EBEBEB] items-start">
                  <div className="flex items-center gap-2 text-[13px] font-medium text-foreground">
                    <span className="w-2 h-2 rounded-full bg-emerald-600 inline-block shrink-0" />
                    SMB
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-[11px] font-medium px-2.5 py-1 rounded-sm bg-emerald-50 text-emerald-700">Clean defaults</span>
                    <span className="text-[11px] font-medium px-2.5 py-1 rounded-sm bg-emerald-50 text-emerald-700">Reliable generation</span>
                    <span className="text-[11px] font-medium px-2.5 py-1 rounded-sm bg-emerald-50 text-emerald-700">Simple branding (logo, colour)</span>
                    <span className="text-[11px] font-medium px-2.5 py-1 rounded-sm bg-blue-50 text-blue-700">Not using the editor at all</span>
                  </div>
                </div>
                <div className="grid grid-cols-[120px_1fr] gap-5 pt-5 items-start">
                  <div className="text-[13px] text-muted-foreground">Both</div>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-[11px] font-medium px-2.5 py-1 rounded-sm bg-amber-50 text-amber-700">6 doc types to support</span>
                  </div>
                </div>
              </div>
            </section>

            {/* Research */}
            <section id="research" className="mb-14">
              <p className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground mb-6">Research</p>
              <div className="space-y-4 text-[17px] leading-relaxed text-muted-foreground max-w-[750px]">
                <p>Support tickets gave me an early read on where friction lived. Enterprise sellers filed around customization limits and template reliability, while SMB tickets clustered around setup confusion and generation failures - two different problems showing up in the same queue.</p>
                <p>A competitive scan of ShipStation, Shopify, and similar platforms revealed a consistent gap: rigid pre-built templates on one end, full code editors on the other, with nobody solving the middle ground well. That gap shaped the layered approach.</p>
                <p>The most important signal came from pulling earlier seller interview synthesis from Dovetail. Sellers needed significantly more customization than the platform assumed - not for aesthetic reasons, but because their fulfillment flows were genuinely unique and their documents needed to reflect that operational reality.</p>
              </div>
            </section>

            {/* Problem Redefinition */}
            <section id="reframe" className="mb-14">
              <p className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground mb-2">Problem Redefinition</p>
              <h2 className="font-serif text-[1.75rem] leading-[1.2] tracking-[-0.02em] mb-6 max-w-[750px]">
                The brief changed. Twice.
              </h2>
              <div className="space-y-4 text-[17px] leading-relaxed text-muted-foreground max-w-[750px] mb-8">
                <p>When I stepped in, the brief was already shifting. We were mid-migration to the US market, the primary stakeholder had just exited, and engineering was stretched thin - none of which changed the core problem, but it shaped every decision about what was realistic to ship.</p>
              </div>

              {/* Brief evolution */}
              <div className="flex flex-col max-w-[750px] mb-8 divide-y divide-[#EBEBEB] border border-[#EBEBEB] bg-white">
                <div className="flex items-start gap-6 p-6">
                  <span className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground pt-0.5 shrink-0 w-[140px]">Brief v1</span>
                  <div>
                    <p className="text-[14px] font-medium text-foreground mb-1">&quot;Add custom field support + HTML editing&quot;</p>
                    <p className="text-[13px] text-muted-foreground leading-relaxed">Scoped. Contained. A feature project.</p>
                  </div>
                </div>
                <div className="flex items-start gap-6 p-6 bg-[#F5F3F0]">
                  <span className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground pt-0.5 shrink-0 w-[140px]">After new stakeholder</span>
                  <div>
                    <p className="text-[14px] font-medium text-foreground mb-1">&quot;Full replacement. US migration in progress.&quot;</p>
                    <p className="text-[13px] text-muted-foreground leading-relaxed">The old system was being sunset entirely. This was a platform migration.</p>
                  </div>
                </div>
                <div className="flex items-start gap-6 p-6">
                  <span className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground pt-0.5 shrink-0 w-[140px]">The real question</span>
                  <div>
                    <p className="text-[14px] font-medium text-foreground mb-1">&quot;What level of customisation, and for whom?&quot;</p>
                    <p className="text-[13px] text-muted-foreground leading-relaxed">A strategic call about segments, churn risk, and what was actually buildable.</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Design Iterations */}
            <section id="iterations" className="mb-14">
              <p className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground mb-2">What we tried first</p>
              <h2 className="font-serif text-[1.75rem] leading-[1.2] tracking-[-0.02em] mb-6 max-w-[750px]">
                Ideating, testing and iterating.
              </h2>
              <div className="space-y-4 text-[17px] leading-relaxed text-muted-foreground max-w-[750px]">
                <p>When drafting the early concepts, I covered library structure, editor interactions, branding model, and failure states.</p>
                <p>Drag and drop was the obvious starting point - familiar, no code required. We moved away from it because the build cost was too high for the engineering bandwidth we had, and it wouldn&apos;t have supported the complexity enterprise sellers needed.</p>
              </div>
              <div className="rounded-xl overflow-hidden max-w-[750px] my-6">
                <LightboxImage src="/images/vq-doc10.png" alt="Design exploration" className="w-full h-auto object-cover" />
              </div>
              <div className="space-y-4 text-[17px] leading-relaxed text-muted-foreground max-w-[750px]">
                <p>A simple document table without previews surfaced a problem from a similar internal project: sellers don&apos;t name their documents consistently, so without a visual anchor the list became noise and finding the right template was harder than it should have been.</p>
              </div>
              <div className="rounded-xl overflow-hidden max-w-[750px] my-6">
                <LightboxImage src="/images/vq-doc9.png" alt="Design iterations" className="w-full h-auto object-cover" />
              </div>
              <div className="space-y-4 text-[17px] leading-relaxed text-muted-foreground max-w-[750px]">
                <p>HTML as an &quot;advanced&quot; button on ready-to-go templates felt like a clean handoff between modes, but it made exploration harder to justify - sellers are less likely to discover what&apos;s possible when it&apos;s hidden behind an advanced label. As the number of templates scaled, the pattern would have broken down anyway.</p>
              </div>
              <div className="rounded-xl overflow-hidden max-w-[750px] my-6">
                <LightboxImage src="/images/vq-doc8.png" alt="Four editing modes" className="w-full h-auto object-cover" />
              </div>
            </section>

            {/* Design Process */}
            <section id="process" className="mb-14">
              <p className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground mb-2">Design Process</p>
              <h2 className="font-serif text-[1.75rem] leading-[1.2] tracking-[-0.02em] mb-6 max-w-[750px]">
                Design process with the team.
              </h2>
              <div className="space-y-4 text-[17px] leading-relaxed text-muted-foreground max-w-[750px] mb-8">
                <p>With a stakeholder exit mid-project and engineering stretched thin, the collaboration model had to be tight.</p>
                <p>Engineering was in the room from day one. We caught at least two directions that looked good in Figma but wouldn&apos;t have survived production before anyone had invested heavily in them. Feedback cycles were short and rough - early directions over polished concepts, with sessions used to pressure-test assumptions rather than present for sign-off.</p>
                <p>When the PRD lost its owner I picked that up too, running alignment sessions to keep the brief anchored as scope kept expanding.</p>
              </div>

              {/* Process flow */}
              <div className="flex flex-wrap gap-2 max-w-[750px] mb-8">
                {["Segment research", "Tech assessment", "Strategic framing", "Library redesign", "Branding model", "Failure states"].map((step, i) => (
                  <span key={i} className="inline-flex items-center gap-2.5 border border-[#EBEBEB] rounded-full px-4 py-2 text-[14px] text-foreground bg-white">
                    <span className="font-mono text-[10px] text-muted-foreground">0{i + 1}</span>
                    {step}
                  </span>
                ))}
              </div>
            </section>

            {/* Strategy */}
            <section id="strategy" className="mb-14">
              <p className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground mb-2">Strategy</p>
              <h2 className="font-serif text-[1.75rem] leading-[1.2] tracking-[-0.02em] mb-6 max-w-[750px]">
                HTML over PDF. Here&apos;s how we made it viable.
              </h2>
              <div className="space-y-4 text-[17px] leading-relaxed text-muted-foreground max-w-[750px] mb-8">
                <p>We chose HTML over a drag-and-drop rebuild - more scalable, but higher friction for non-technical users. The layered model was how we made it work for both segments.</p>
              </div>

              {/* Decision table */}
              <div className="border border-[#EBEBEB] max-w-[750px] mb-8 overflow-hidden bg-white">
                <div className="grid grid-cols-[170px_1fr_1fr] border-b border-[#EBEBEB] bg-[#F5F3F0]">
                  <div className="p-4 border-r border-[#EBEBEB]" />
                  <div className="p-4 border-r border-[#EBEBEB] font-mono text-[10px] uppercase tracking-wider text-muted-foreground">Enterprise sellers</div>
                  <div className="p-4 font-mono text-[10px] uppercase tracking-wider text-muted-foreground">SMB sellers</div>
                </div>
                <div className="grid grid-cols-[170px_1fr_1fr] border-b border-[#EBEBEB]">
                  <div className="p-4 border-r border-[#EBEBEB] text-[13px] font-medium text-foreground">Rebuild PDF editor</div>
                  <div className="p-4 border-r border-[#EBEBEB] text-[13px] text-emerald-700">Familiar, low disruption</div>
                  <div className="p-4 text-[13px] text-muted-foreground">Not needed</div>
                </div>
                <div className="grid grid-cols-[170px_1fr_1fr] border-b border-[#EBEBEB]">
                  <div className="p-4 border-r border-[#EBEBEB] text-[13px] font-medium text-foreground">Drop editing entirely</div>
                  <div className="p-4 border-r border-[#EBEBEB] text-[13px] text-red-600">Churn risk on key accounts</div>
                  <div className="p-4 text-[13px] text-emerald-700">No impact</div>
                </div>
                <div className="grid grid-cols-[170px_1fr_1fr] bg-emerald-50">
                  <div className="p-4 border-r border-emerald-100 text-[13px] font-medium text-emerald-800">HTML + AI assist ✓</div>
                  <div className="p-4 border-r border-emerald-100 text-[13px] text-emerald-700">More powerful for technical users + human migration for biggest accounts</div>
                  <div className="p-4 text-[13px] text-emerald-700">Clean defaults, zero friction</div>
                </div>
              </div>

            </section>

            {/* Design Decisions */}
            <section id="design" className="mb-14">
              <p className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground mb-2">Key Design Decisions</p>
              <h2 className="font-serif text-[1.75rem] leading-[1.2] tracking-[-0.02em] mb-8 max-w-[750px]">
                What went into the work.
              </h2>
              <div className="space-y-10 max-w-[750px]">
                <div>
                  <h3 className="font-serif text-[1.375rem] leading-[1.3] tracking-[-0.02em] mb-3 font-medium text-foreground">The document library</h3>
                  <p className="text-[17px] leading-relaxed text-muted-foreground mb-6">Six document types, multiple brands, version states, and two seller segments - all landing in the same place. The temptation was to organise by brand, since that&apos;s what stakeholders talked about most. But watching how sellers actually navigated, they think in doc types first, brands second. So the hierarchy follows that. Version history stays inline rather than buried in a separate panel, because an ops team member checking &quot;did this update take?&quot; shouldn&apos;t have to go digging.</p>
                  <div className="flex flex-col divide-y divide-[#EBEBEB] border border-[#EBEBEB] bg-white">
                    <div className="flex items-start gap-6 p-6">
                      <span className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground pt-0.5 shrink-0 w-[60px]">Layer 0</span>
                      <div>
                        <p className="text-[15px] font-medium text-foreground mb-2">Ready-to-go templates</p>
                        <p className="text-[14px] text-muted-foreground leading-relaxed">Simple toggle-based controls and live preview for sellers who just need clean defaults without touching any code.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-6 p-6">
                      <span className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground pt-0.5 shrink-0 w-[60px]">Layer 1</span>
                      <div>
                        <p className="text-[15px] font-medium text-foreground mb-2">AI-assisted HTML editor</p>
                        <p className="text-[14px] text-muted-foreground leading-relaxed">Sellers describe what they want, the AI writes the code. HTML is always visible alongside the output, so nothing is a black box. Live preview + in-product guides.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-6 p-6">
                      <span className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground pt-0.5 shrink-0 w-[60px]">Layer 3</span>
                      <div>
                        <p className="text-[15px] font-medium text-foreground mb-2">Human-assisted migration</p>
                        <p className="text-[14px] text-muted-foreground leading-relaxed">The Seller Success team ported existing templates for the highest-risk enterprise accounts directly. Not scalable, but the right call for accounts too important to leave to self-serve.</p>
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
                    <LightboxImage src="/images/vq-doc1.jpg" alt="Veeqo document library redesign" className="w-full h-auto object-cover" />
                  </div>
                  <p className="mt-3 text-sm text-muted-foreground text-center">Document library redesign: template overview, version states, and doc type grouping</p>
                </div>
                <div>
                  <p className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground mb-2">The Data Dropdown</p>
                  <p className="text-[17px] leading-relaxed text-muted-foreground mb-5">The data dropdown replaced memorising API variable names with a searchable field-picker - select Bin Location from the list and the correct variable is injected directly. A coding task becomes a selection task, with live preview updating alongside every change.</p>
                  <div className="rounded-xl overflow-hidden">
                    <LightboxImage src="/images/vq-doc2.png" alt="HTML editor with AI assist and live preview" className="w-full h-auto object-cover" />
                  </div>
                  <p className="mt-3 text-sm text-muted-foreground text-center">HTML editor with AI assist, live preview alongside markup</p>
                </div>
                <div>
                  <p className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground mb-2">Designing for a Broken API</p>
                  <p className="text-[17px] leading-relaxed text-muted-foreground mb-5">In platform work, the happy path is a lie. Our internal API was unstable during the handoff - documents were timing out in production.</p>
                  <div className="rounded-xl overflow-hidden">
                    <LightboxImage src="/images/vq-doc3.png" alt="Failure states across generation and batch errors" className="w-full h-auto object-cover" />
                  </div>
                  <p className="mt-3 text-sm text-muted-foreground text-center">Failure states: generation failures, timeouts, and partial batch errors</p>
                </div>
                <div>
                  <p className="text-[17px] leading-relaxed text-muted-foreground mb-4">Version selection at print time - sellers choose which custom template to use per doc type without leaving the print flow.</p>
                  <div className="rounded-xl overflow-hidden">
                    <LightboxImage src="/images/vq-doc5.png" alt="Version selection at print time" className="w-full h-auto object-cover" />
                  </div>
                </div>
                <div>
                  <p className="text-[17px] leading-relaxed text-muted-foreground mb-4">Brand-to-template mapping - each brand links to its own document versions across all doc types, resolving the multi-brand complexity.</p>
                  <div className="rounded-xl overflow-hidden">
                    <LightboxImage src="/images/vq-doc6.png" alt="Brand-to-template mapping" className="w-full h-auto object-cover" />
                  </div>
                </div>
              </div>
            </section>

            {/* Challenges */}
            <section id="challenges" className="mb-14">
              <p className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground mb-2">Behind the scenes</p>
              <h2 className="font-serif text-[1.75rem] leading-[1.2] tracking-[-0.02em] mb-6 max-w-[750px]">
                The honest version.
              </h2>
              <div className="max-w-[750px] border-t border-border">
                <div className="py-6 border-b border-border">
                  <p className="text-[16px] font-medium text-foreground mb-2">Scope expanded constantly</p>
                  <p className="text-[15px] text-muted-foreground leading-relaxed">Started as a feature and later became a big design project 0→1. I addressed it by building a modular foundation. I realized that treating these as isolated tasks would lead to massive technical and design debt. In collaboration we created a centralized component library.</p>
                </div>
                <div className="py-6 border-b border-border">
                  <p className="text-[16px] font-medium text-foreground mb-2">Key stakeholder pulled mid-project</p>
                  <p className="text-[15px] text-muted-foreground leading-relaxed">I picked up the PRD work to keep the brief anchored. Letting that slip would have cost weeks.</p>
                </div>
                <div className="py-6 border-b border-border">
                  <p className="text-[16px] font-medium text-foreground mb-2">API unstable at handoff</p>
                  <p className="text-[15px] text-muted-foreground leading-relaxed">Generation was slow and failing in production. I designed failure states across every surface: slow gen, full failure, partial batch errors, etc.</p>
                </div>
                <div className="py-6 border-b border-border">
                  <p className="text-[16px] font-medium text-foreground mb-2">Branding more complex than expected</p>
                  <p className="text-[15px] text-muted-foreground leading-relaxed">Parent brands, sub-brands, co-brands, per-template assignment, no-logo states. I mapped the hierarchy before designing the screens.</p>
                </div>
              </div>
            </section>

            {/* Outcomes */}
            <section id="outcomes" className="mb-14">
              <p className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground mb-2">Impact</p>
              <h2 className="font-serif text-[1.75rem] leading-[1.2] tracking-[-0.02em] mb-6 max-w-[750px]">
                We successfully sunset the third-party dependency.
              </h2>
              <div className="p-8 bg-[#F5F3F0] rounded-xl max-w-[750px] mb-8">
                <ul className="space-y-2 text-[17px] leading-relaxed">
                  <li className="flex gap-3">
                    <span className="text-muted-foreground mt-0.5">•</span>
                    <span className="text-muted-foreground"><strong className="font-medium text-foreground">0% churn</strong> among top-tier enterprise accounts during the transition</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-muted-foreground mt-0.5">•</span>
                    <span className="text-muted-foreground">Days not months - custom fields and new document types now ship on a timeline the team owns</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-muted-foreground mt-0.5">•</span>
                    <span className="text-muted-foreground"><strong className="font-medium text-foreground">30% reduction</strong> in how-to support tickets vs. the legacy system</span>
                  </li>
                </ul>
              </div>
            </section>

            {/* Reflections */}
            <section id="reflections" className="mb-12">
              <p className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground mb-2">Reflections</p>
              <h2 className="font-serif text-[1.75rem] leading-[1.2] tracking-[-0.02em] mb-6 max-w-[750px]">
                Three things I&apos;d carry forward.
              </h2>
              <div className="space-y-6 text-[17px] leading-relaxed text-muted-foreground max-w-[750px]">
                <div>
                  <h3 className="font-serif text-[1.375rem] leading-[1.3] tracking-[-0.02em] mb-2 font-medium text-foreground">Engineering from day one saves more time than it costs.</h3>
                  <p>Late feasibility reviews on platform work are waste, and having the engineering lead in every session kept us off directions that would have never survived production.</p>
                </div>

                <div>
                  <h3 className="font-serif text-[1.375rem] leading-[1.3] tracking-[-0.02em] mb-2 font-medium text-foreground">Sometimes the right design is a human process.</h3>
                  <p>The manual migration path wasn&apos;t scalable and it was still the right call - not every problem needs a product solution, especially when the accounts at stake are too important to get wrong on the first pass.</p>
                </div>
                <div>
                  <h3 className="font-serif text-[1.375rem] leading-[1.3] tracking-[-0.02em] mb-2 font-medium text-foreground">Picking up the PRD when the stakeholder left wasn&apos;t scope creep.</h3>
                  <p>It was protecting the outcome, and I&apos;ve come to see that kind of ownership as part of what operating at staff level actually means.</p>
                </div>
              </div>
            </section>

            <div className="pt-8">
              <Link
                href="/#work"
                className="inline-flex items-center gap-2 text-[17px] hover:opacity-70 transition-opacity"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to all projects
              </Link>
            </div>

          </main>
        </div>
      </div>
    </div>
    </PasswordGate>
  )
}
