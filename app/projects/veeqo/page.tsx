"use client"

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
              <a href="#reframe" className="block text-[15px] text-muted-foreground hover:text-foreground transition-colors">Problem Reframe</a>
              <a href="#strategy" className="block text-[15px] text-muted-foreground hover:text-foreground transition-colors">Strategy</a>
              <a href="#process" className="block text-[15px] text-muted-foreground hover:text-foreground transition-colors">Design Process</a>
              <a href="#design" className="block text-[15px] text-muted-foreground hover:text-foreground transition-colors">Design Decisions</a>
              <a href="#challenges" className="block text-[15px] text-muted-foreground hover:text-foreground transition-colors">Challenges</a>
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
            <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-4 mb-10 pb-8 max-w-[750px]">
              <div>
                <p className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground mb-2">Role</p>
                <p className="text-[15px] leading-relaxed">Staff Product Designer</p>
              </div>
              <div>
                <p className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground mb-2">Scope</p>
                <p className="text-[15px] leading-relaxed">Full platform migration</p>
              </div>
              <div>
                <p className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground mb-2">Team</p>
                <p className="text-[15px] leading-relaxed">Eng + Seller Success</p>
              </div>
              <div>
                <p className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground mb-2">Constraint</p>
                <p className="text-[15px] leading-relaxed">Limited eng bandwidth</p>
              </div>
            </div>

            {/* Context */}
            <section id="context" className="mb-14">
              <p className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground mb-2">Context</p>
              <h2 className="font-serif text-[1.75rem] leading-[1.2] tracking-[-0.02em] mb-6 max-w-[750px]">
                A dependency we had to cut.
              </h2>
              <div className="space-y-4 text-[17px] leading-relaxed text-muted-foreground max-w-[750px]">
                <p>Veeqo is a multi-channel shipping platform acquired by Amazon. Documents sit at the core of every order: packing slips, invoices, customs forms, returns labels. The entire system ran on a third-party PDF tool the team had no control over. No extensibility, real technical risk, and a single external dependency the business could not afford to keep.</p>
                <p>Through early discovery workshops, I helped surface the case for replacing it entirely. My job then became designing what came next.</p>
                <p>When I stepped in, the brief was already shifting. We were mid-migration to the US market, the primary stakeholder had just exited, and the engineering team was stretched thin. None of that changed the core problem, but it shaped every decision about what was realistic to ship.</p>
              </div>
            </section>

            {/* Discovery */}
            <section id="discovery" className="mb-14">
              <p className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground mb-2">Discovery</p>
              <h2 className="font-serif text-[1.75rem] leading-[1.2] tracking-[-0.02em] mb-6 max-w-[750px]">
                Not one user. Two completely different problems.
              </h2>
              <div className="space-y-4 text-[17px] leading-relaxed text-muted-foreground max-w-[750px] mb-8">
                <p>Support data and seller success conversations surfaced something important fast: &quot;fixing documents&quot; meant entirely different things depending on who you asked.</p>
                <p>Through discovery, I realized we weren&apos;t designing for a monolith. We had two distinct &quot;user worlds&quot; with a massive gap between them.</p>
                <ul className="space-y-3 mt-2">
                  <li>
                    <strong className="text-foreground font-medium">The SMB World:</strong> They wanted &quot;it just works.&quot; Clean defaults, fast loading, and zero setup. They didn&apos;t care about the tech; they cared about the speed.
                  </li>
                  <li>
                    <strong className="text-foreground font-medium">The Enterprise World:</strong> They had &quot;Frankenstein&quot; templates: highly customized layouts with specific branding and logic baked in. To them, losing the old PDF editor wasn&apos;t a minor UX change; it was a broken business process.
                  </li>
                </ul>
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

              {/* Pull quote */}
              <div className="border-l-2 border-border pl-7 my-10 max-w-[750px]">
                <p className="font-serif text-[1.375rem] leading-[1.35] text-foreground">
                  Losing the PDF editor wasn&apos;t a UX inconvenience for enterprise accounts. It was a workflow disruption, and that made it a retention problem.
                </p>
              </div>
            </section>

            {/* Problem Redefinition */}
            <section id="reframe" className="mb-14">
              <p className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground mb-2">Problem Redefinition</p>
              <h2 className="font-serif text-[1.75rem] leading-[1.2] tracking-[-0.02em] mb-8 max-w-[750px]">
                The brief changed. Twice.
              </h2>

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

            {/* Strategy */}
            <section id="strategy" className="mb-14">
              <p className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground mb-2">Strategy</p>
              <h2 className="font-serif text-[1.75rem] leading-[1.2] tracking-[-0.02em] mb-6 max-w-[750px]">
                HTML over PDF. Here&apos;s how we made it viable.
              </h2>
              <div className="space-y-4 text-[17px] leading-relaxed text-muted-foreground max-w-[750px] mb-8">
                <p>We faced a hard choice: rebuild a complex drag-and-drop UI (months of work) or move to an HTML-based engine (scalable but higher friction for non-coders).</p>
                <p>We chose the &quot;Layered Power&quot; approach:</p>
                <ol className="space-y-3 mt-2 list-none">
                  <li>
                    <strong className="text-foreground font-medium">1. For Everyone:</strong> An AI-assisted HTML editor. Tell the AI &quot;make the logo bigger and move the address to the footer,&quot; and it writes the code for you.
                  </li>
                  <li>
                    <strong className="text-foreground font-medium">2. For the Risky 1%:</strong> A &quot;Human-in-the-loop&quot; migration. For our biggest Enterprise accounts, our Support team handled the heavy lifting of porting their templates.
                  </li>
                </ol>
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
                <div className="grid grid-cols-[170px_1fr_1fr] bg-[#F5F3F0]">
                  <div className="p-4 border-r border-[#EBEBEB] text-[13px] font-medium text-foreground">HTML + AI assist ✓</div>
                  <div className="p-4 border-r border-[#EBEBEB] text-[13px] text-emerald-700">More powerful for technical users + human migration for biggest accounts</div>
                  <div className="p-4 text-[13px] text-emerald-700">Clean defaults, zero friction</div>
                </div>
              </div>

              {/* Three layer cards */}
              <div className="flex flex-col max-w-[750px] divide-y divide-[#EBEBEB] border border-[#EBEBEB] bg-white">
                <div className="flex items-start gap-6 p-6">
                  <span className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground pt-0.5 shrink-0 w-[60px]">Layer 1</span>
                  <div>
                    <p className="text-[15px] font-medium text-foreground mb-2">AI-assisted HTML editor</p>
                    <p className="text-[14px] text-muted-foreground leading-relaxed">Describe what you want in plain language, get a starting template. HTML is always visible, no black box.</p>
                  </div>
                </div>
                <div className="flex items-start gap-6 p-6">
                  <span className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground pt-0.5 shrink-0 w-[60px]">Layer 2</span>
                  <div>
                    <p className="text-[15px] font-medium text-foreground mb-2">Live preview + in-product guides</p>
                    <p className="text-[14px] text-muted-foreground leading-relaxed">Non-technical ops teams validate changes without touching markup. Contextual guidance built in, not linked out.</p>
                  </div>
                </div>
                <div className="flex items-start gap-6 p-6">
                  <span className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground pt-0.5 shrink-0 w-[60px]">Layer 3</span>
                  <div>
                    <p className="text-[15px] font-medium text-foreground mb-2">Human-assisted migration</p>
                    <p className="text-[14px] text-muted-foreground leading-relaxed">For highest-risk enterprise accounts: direct support-team migration. Not scalable, but right for the accounts that mattered.</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Design Process */}
            <section id="process" className="mb-14">
              <p className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground mb-2">Design Process</p>
              <h2 className="font-serif text-[1.75rem] leading-[1.2] tracking-[-0.02em] mb-6 max-w-[750px]">
                Engineering in the room from day one.
              </h2>
              <div className="text-[17px] leading-relaxed text-muted-foreground max-w-[750px] mb-8">
                <p>On platform work with real constraints, treating engineering as a later-stage reviewer is time wasted. The eng lead was in every session. That kept us off at least two directions that would have looked good in Figma and failed in production.</p>
              </div>

              {/* Process flow */}
              <div className="flex flex-col max-w-[750px] mb-8 divide-y divide-[#EBEBEB] border border-[#EBEBEB] bg-white">
                <div className="flex items-start gap-6 p-5">
                  <span className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground pt-0.5 shrink-0 w-[28px]">01</span>
                  <div>
                    <p className="text-[14px] font-medium text-foreground mb-1">Segment research</p>
                    <p className="text-[13px] text-muted-foreground leading-relaxed">Support data + seller success. Map enterprise vs. SMB needs.</p>
                  </div>
                </div>
                <div className="flex items-start gap-6 p-5">
                  <span className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground pt-0.5 shrink-0 w-[28px]">02</span>
                  <div>
                    <p className="text-[14px] font-medium text-foreground mb-1">Tech assessment</p>
                    <p className="text-[13px] text-muted-foreground leading-relaxed">API constraints, failure modes, migration scope with eng lead.</p>
                  </div>
                </div>
                <div className="flex items-start gap-6 p-5">
                  <span className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground pt-0.5 shrink-0 w-[28px]">03</span>
                  <div>
                    <p className="text-[14px] font-medium text-foreground mb-1">Strategic framing</p>
                    <p className="text-[13px] text-muted-foreground leading-relaxed">Decision doc: which path, why, what it costs per segment.</p>
                  </div>
                </div>
                <div className="flex items-start gap-6 p-5">
                  <span className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground pt-0.5 shrink-0 w-[28px]">04</span>
                  <div>
                    <p className="text-[14px] font-medium text-foreground mb-1">Library redesign</p>
                    <p className="text-[13px] text-muted-foreground leading-relaxed">Central hub, version model, template hierarchy, 6 doc types.</p>
                  </div>
                </div>
                <div className="flex items-start gap-6 p-5">
                  <span className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground pt-0.5 shrink-0 w-[28px]">05</span>
                  <div>
                    <p className="text-[14px] font-medium text-foreground mb-1">Branding model</p>
                    <p className="text-[13px] text-muted-foreground leading-relaxed">Multi-brand hierarchy mapped before a single screen designed.</p>
                  </div>
                </div>
                <div className="flex items-start gap-6 p-5">
                  <span className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground pt-0.5 shrink-0 w-[28px]">06</span>
                  <div>
                    <p className="text-[14px] font-medium text-foreground mb-1">Failure states first</p>
                    <p className="text-[13px] text-muted-foreground leading-relaxed">Slow gen, full failure, partial batch errors: primary paths, not cleanup.</p>
                  </div>
                </div>
              </div>

              {/* Images */}
              <div className="flex flex-col gap-6 max-w-[750px]">
                <div>
                  <p className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground mb-2">Category-Aware Templates</p>
                  <p className="text-[17px] leading-relaxed text-muted-foreground mb-5">Users don&apos;t start with a blank page. They get a base template pre-built with the fields most common to their document type — Invoices vs. Pick Lists, each with their own defaults.</p>
                  <div className="rounded-xl overflow-hidden">
                    <img
                      src="/images/vq-doc1.jpg"
                      alt="Veeqo document library redesign"
                      className="w-full h-auto object-cover"
                    />
                  </div>
                  <p className="mt-3 text-sm text-muted-foreground text-center">Document library redesign: template overview, version states, and doc type grouping</p>
                </div>
                <div>
                  <p className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground mb-2">The Data Dropdown</p>
                  <p className="text-[17px] leading-relaxed text-muted-foreground mb-5">I replaced the need to memorise API variables with a searchable field-picker. Want to add &quot;Bin Location&quot;? Select it from the dropdown, and the correct variable is injected. It turned a coding task into a selection task. The live preview sits directly alongside the code — sellers see the result of every line change instantly.</p>
                  <div className="rounded-xl overflow-hidden">
                    <img
                      src="/images/vq-doc2.png"
                      alt="HTML editor with AI assist and live preview"
                      className="w-full h-auto object-cover"
                    />
                  </div>
                  <p className="mt-3 text-sm text-muted-foreground text-center">HTML editor with AI assist, live preview alongside markup</p>
                </div>
                <div>
                  <p className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground mb-2">Designing for a Broken API</p>
                  <p className="text-[17px] leading-relaxed text-muted-foreground mb-5">In platform work, the happy path is a lie. Our internal API was unstable during the handoff — documents were timing out in production.</p>
                  <div className="rounded-xl overflow-hidden">
                    <img
                      src="/images/vq-doc3.png"
                      alt="Failure states across generation and batch errors"
                      className="w-full h-auto object-cover"
                    />
                  </div>
                  <p className="mt-3 text-sm text-muted-foreground text-center">Failure states: generation failures, timeouts, and partial batch errors</p>
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
                  <p className="text-[17px] leading-relaxed text-muted-foreground">Six document types, multiple brands, version states, and two seller segments — all landing in the same place. The temptation was to organise by brand, since that&apos;s what stakeholders talked about most. But watching how sellers actually navigated, they think in doc types first, brands second. So the hierarchy follows that. Version history stays inline rather than buried in a separate panel, because an ops team member checking &quot;did this update take?&quot; shouldn&apos;t have to go digging.</p>
                </div>
              </div>
            </section>

            {/* Challenges */}
            <section id="challenges" className="mb-14">
              <p className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground mb-2">What made this hard</p>
              <h2 className="font-serif text-[1.75rem] leading-[1.2] tracking-[-0.02em] mb-6 max-w-[750px]">
                The honest version.
              </h2>
              <div className="max-w-[750px] border-t border-border">
                <div className="py-6 border-b border-border">
                  <p className="text-[16px] font-medium text-foreground mb-2">Scope expanded constantly</p>
                  <p className="text-[15px] text-muted-foreground leading-relaxed">Started as a feature. Became a library redesign + doc pages + unplanned design system work + new branding section. Each was necessary. None were scoped for.</p>
                </div>
                <div className="py-6 border-b border-border">
                  <p className="text-[16px] font-medium text-foreground mb-2">Key stakeholder pulled mid-project</p>
                  <p className="text-[15px] text-muted-foreground leading-relaxed">I picked up the PRD work to keep the brief anchored. Letting that slip would have cost weeks.</p>
                </div>
                <div className="py-6 border-b border-border">
                  <p className="text-[16px] font-medium text-foreground mb-2">API unstable at handoff</p>
                  <p className="text-[15px] text-muted-foreground leading-relaxed">Generation was slow and failing in production. I designed failure states across every surface as first-class work: slow gen, full failure, partial batch errors, all mapped and designed.</p>
                </div>
                <div className="py-6 border-b border-border">
                  <p className="text-[16px] font-medium text-foreground mb-2">Branding more complex than expected</p>
                  <p className="text-[15px] text-muted-foreground leading-relaxed">Parent brands, sub-brands, co-brands, per-template assignment, no-logo states. I mapped the full hierarchy before designing a single screen. Getting this wrong was a data model problem, not just a UI one.</p>
                </div>
              </div>
            </section>

            {/* Outcomes */}
            <section id="outcomes" className="mb-14">
              <p className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground mb-2">Outcomes</p>
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
                    <span className="text-muted-foreground">Custom fields and new doc types now ship in days, not months — technical ownership fully reclaimed</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-muted-foreground mt-0.5">•</span>
                    <span className="text-muted-foreground"><strong className="font-medium text-foreground">30% reduction</strong> in how-to support tickets vs. the old system</span>
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
                  <p>On platform work with real constraints, late feasibility reviews are waste. The eng lead was in every session here. That kept us off at least two directions that would have looked good in Figma and died in production.</p>
                </div>
                <div>
                  <h3 className="font-serif text-[1.375rem] leading-[1.3] tracking-[-0.02em] mb-2 font-medium text-foreground">Sometimes the right design is a human process.</h3>
                  <p>The manual migration path wasn&apos;t scalable. It was the right call. Not every gap needs a product feature, especially when the accounts at stake are too important to get wrong.</p>
                </div>
                <div>
                  <h3 className="font-serif text-[1.375rem] leading-[1.3] tracking-[-0.02em] mb-2 font-medium text-foreground">Picking up the PRD wasn&apos;t scope creep. It was protecting the outcome.</h3>
                  <p>When the stakeholder left, someone had to keep the brief anchored. I&apos;ve come to see this kind of ownership as part of operating at staff level. Not extra work, just the work.</p>
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
