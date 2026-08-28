"use client"
import { LightboxImage } from "@/components/lightbox-image"

import { BackLinkSidebar, BackLinkFooter } from "@/components/back-link"
import { ScrollToTop } from "@/components/scroll-to-top"
import { Header } from "@/components/header"

export default function ConduitCaseStudy() {
  return (
    <div className="min-h-screen bg-background">
      <ScrollToTop />
      <Header />

      <div className="max-w-7xl mx-auto pt-24 flex flex-col">
        <div className="flex w-full items-start">
          <div className="hidden lg:block w-56 shrink-0 px-8 lg:px-12" aria-hidden />

          <aside className="hidden lg:block w-56 px-8 lg:px-12 fixed top-24 left-8 lg:left-[max(0px,calc((100vw-80rem)/2))]" aria-label="Case study navigation">
            <BackLinkSidebar />
            <nav className="space-y-4" aria-label="Case study sections">
              <a href="#summary" className="block text-[15px] text-muted-foreground hover:text-foreground transition-colors">Impact summary</a>
              <a href="#context" className="block text-[15px] text-muted-foreground hover:text-foreground transition-colors">Context</a>
              <a href="#needs" className="block text-[15px] text-muted-foreground hover:text-foreground transition-colors">User needs</a>
              <a href="#goal" className="block text-[15px] text-muted-foreground hover:text-foreground transition-colors">Business goal</a>
              <a href="#pipeline" className="block text-[15px] text-muted-foreground hover:text-foreground transition-colors">Pipeline</a>
              <a href="#approach" className="block text-[15px] text-muted-foreground hover:text-foreground transition-colors">Approach</a>
              <a href="#moment" className="block text-[15px] text-muted-foreground hover:text-foreground transition-colors">Strategic moment</a>
              <a href="#craft" className="block text-[15px] text-muted-foreground hover:text-foreground transition-colors">Design system</a>
              <a href="#impact" className="block text-[15px] text-muted-foreground hover:text-foreground transition-colors">Impact</a>
            </nav>
          </aside>

          <main className="flex-1 px-8 lg:px-12 pb-20 lg:pb-24">

            {/* Header */}
            <div className="mb-8 max-w-[750px]">
              <p className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground mb-3">Conduit · Supply chain · Document Automation</p>
              <h1 className="font-serif text-2xl md:text-3xl lg:text-4xl tracking-[-0.02em] leading-[1.15] mb-4">
                Conduit: Document pipelines importers build themselves
              </h1>
              <p className="text-[17px] leading-relaxed text-muted-foreground">
                Shipped an MVP with our compliance rules baked in, then let testing reframe the product around rules each customer sets.
              </p>
            </div>

            {/* Meta grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-4 mb-6 pb-4 max-w-[750px]">
              <div>
                <p className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground mb-2">Role</p>
                <p className="text-[15px] leading-relaxed">Product and design lead</p>
              </div>
              <div>
                <p className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground mb-2">Scope</p>
                <p className="text-[15px] leading-relaxed">Product direction, design, design system</p>
              </div>
              <div>
                <p className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground mb-2">Timeframe</p>
                <p className="text-[15px] leading-relaxed">Four weeks</p>
              </div>
              <div>
                <p className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground mb-2">Domain</p>
                <p className="text-[15px] leading-relaxed">Supply chain</p>
              </div>
            </div>

            {/* Cover image */}
            <div className="mb-12 max-w-[750px]">
              <div className="rounded-xl overflow-hidden transform-gpu">
                <img src="/conduit/cover.png" alt="A coffee Certificate of Origin open in Conduit, with the fields to extract listed beside it" className="w-full h-auto object-cover" />
              </div>
            </div>

            {/* Impact summary */}
            <section id="summary" className="mb-14">
              <p className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground mb-2">Impact summary</p>
              <h2 className="font-serif text-[1.75rem] leading-[1.2] tracking-[-0.02em] mb-4 max-w-[750px]">
                The compliance rules moved from us to the importers
              </h2>
              <div className="p-8 bg-[#F5F3F0] rounded-xl max-w-[750px] mb-8">
                <ul className="space-y-2 text-[17px] leading-relaxed">
                  <li className="flex gap-3">
                    <span className="text-muted-foreground mt-0.5">•</span>
                    <span className="text-muted-foreground">Handed the rules to importers: each one now defines what a valid document looks like, instead of us</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-muted-foreground mt-0.5">•</span>
                    <span className="text-muted-foreground">Set a supplier up once, and every document from them after that goes through the same setup</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-muted-foreground mt-0.5">•</span>
                    <span className="text-muted-foreground">Shipped two flows: Extract pulls data out of documents, Inject fills forms in</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-muted-foreground mt-0.5">•</span>
                    <span className="text-muted-foreground">Left automatic rule-checking out of scope, so the reworked version could ship</span>
                  </li>
                </ul>
              </div>
            </section>

            {/* Context */}
            <section id="context" className="mb-14">
              <p className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground mb-2">Context</p>
              <h2 className="font-serif text-[1.75rem] leading-[1.2] tracking-[-0.02em] mb-4 max-w-[750px]">
                The problem &amp; context
              </h2>
              <div className="space-y-4 text-[17px] leading-relaxed text-muted-foreground max-w-[750px]">
                <p>Conduit fills in the paperwork that gets food shipments through customs. Every shipment needs the same documents, filled in by hand, and one wrong field can leave a container sitting at the port. Before designing anything, I sat with the teams doing this work to see where it broke.</p>
              </div>
              <div className="p-8 bg-[#F5F3F0] rounded-xl max-w-[750px] mt-6">
                <ul className="space-y-2 text-[17px] leading-relaxed">
                  <li className="flex gap-3">
                    <span className="text-muted-foreground mt-0.5">1.</span>
                    <span className="text-muted-foreground">Teams filled in the same documents by hand for every shipment</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-muted-foreground mt-0.5">2.</span>
                    <span className="text-muted-foreground">Mistakes were easy to make, and a rejected document held up the whole shipment</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-muted-foreground mt-0.5">3.</span>
                    <span className="text-muted-foreground">The work they did on one shipment saved them nothing on the next</span>
                  </li>
                </ul>
              </div>
            </section>

            {/* User needs */}
            <section id="needs" className="mb-14">
              <p className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground mb-2">User needs</p>
              <div className="space-y-4 text-[17px] leading-relaxed text-muted-foreground max-w-[750px]">
                <p>Importers described the job as <em>&ldquo;the same paperwork every shipment, filled a little differently.&rdquo;</em> What they wanted was straightforward: do the setup once, have it hold for every shipment after, and have it follow <span className="font-medium text-foreground">their own compliance rules</span> rather than ours.</p>
              </div>
            </section>

            {/* Business goal */}
            <section id="goal" className="mb-14">
              <p className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground mb-2">Business goal</p>
              <div className="space-y-4 text-[17px] leading-relaxed text-muted-foreground max-w-[750px]">
                <p>Automate the paperwork without deciding the rules on anyone&apos;s behalf. Every customer reads compliance a little differently, and the product had to fit all of them to be worth selling.</p>
              </div>
            </section>

            {/* The pipeline */}
            <section id="pipeline" className="mb-14">
              <p className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground mb-2">Pipeline</p>
              <h2 className="font-serif text-[1.75rem] leading-[1.2] tracking-[-0.02em] mb-4 max-w-[750px]">
                The pipeline
              </h2>
              <div className="space-y-4 text-[17px] leading-relaxed text-muted-foreground max-w-[750px]">
                <p>A pipeline is a saved setup. You tell it which fields to read from a document, or which fields to fill in on a form. Set it up for a supplier once and it handles the rest of their documents.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-[750px] my-6">
                <div className="rounded-xl overflow-hidden">
                  <LightboxImage src="/conduit/start.png" alt="Onboarding: choose Extract to pull data out of documents, or Inject to fill a form" className="w-full h-auto object-cover" />
                </div>
                <div className="rounded-xl overflow-hidden">
                  <LightboxImage src="/conduit/pipelines.png" alt="Pipelines library: saved Extract and Inject pipelines with type, dates and live status" className="w-full h-auto object-cover" />
                </div>
              </div>
              <p className="text-sm text-muted-foreground max-w-[750px] mt-3 text-center mb-6">The fork the product opens on: pull data out, or fill data in. Everything you build is saved to the library.</p>

              <div className="rounded-xl overflow-hidden max-w-[750px] my-6 border border-[#EBEBEB]">
                <video src="/conduit/parsing.mp4" autoPlay muted loop playsInline controls preload="metadata" className="w-full h-auto" aria-label="Building an Extract recipe on a real supplier document" />
              </div>
              <p className="text-sm text-muted-foreground max-w-[750px] mt-3 text-center mb-6">Extract: name the fields to pull, on a real supplier document.</p>

              <div className="rounded-xl overflow-hidden max-w-[750px] my-6 border border-[#EBEBEB]">
                <video src="/conduit/inject.mp4" autoPlay muted loop playsInline controls preload="metadata" className="w-full h-auto" aria-label="Inject: detecting a form's layout and filling it with the values you bring" />
              </div>
              <p className="text-sm text-muted-foreground max-w-[750px] mt-3 text-center mb-6">Inject: detect a form&apos;s layout and fill it with the values you bring.</p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-[750px] my-6">
                <div className="rounded-xl overflow-hidden">
                  <LightboxImage src="/conduit/home-config.png" alt="Configure: the fields to pull from each document, each with a type and a description" className="w-full h-auto object-cover" />
                </div>
                <div className="rounded-xl overflow-hidden">
                  <LightboxImage src="/conduit/runs.png" alt="Runs: a plain table of the documents pipelines have processed" className="w-full h-auto object-cover" />
                </div>
              </div>
              <p className="text-sm text-muted-foreground max-w-[750px] mt-3 text-center">Configure: name the fields to pull, each with a type and a description. Runs: a record of what the pipelines have processed.</p>
            </section>

            {/* Approach */}
            <section id="approach" className="mb-14">
              <p className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground mb-2">Approach</p>
              <h2 className="font-serif text-[1.75rem] leading-[1.2] tracking-[-0.02em] mb-4 max-w-[750px]">
                Approach
              </h2>
              <div className="space-y-4 text-[17px] leading-relaxed text-muted-foreground max-w-[750px]">
                <p>Instead of setting the compliance rules ourselves, we gave importers the tools to set their own. I&hellip;</p>
              </div>
              <div className="p-8 bg-[#F5F3F0] rounded-xl max-w-[750px] mt-6">
                <ul className="space-y-2 text-[17px] leading-relaxed">
                  <li className="flex gap-3">
                    <span className="text-muted-foreground mt-0.5">1.</span>
                    <span className="text-muted-foreground">Watched how importers handle documents today, and built for the steps that kept breaking.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-muted-foreground mt-0.5">2.</span>
                    <span className="text-muted-foreground">Made the pipeline the one thing you set up. Set it up for a supplier once, and every document after that runs through it.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-muted-foreground mt-0.5">3.</span>
                    <span className="text-muted-foreground">Turned a plain description of a document into a draft schema, then let people map each field to what it should pull, instead of starting from an empty screen.</span>
                  </li>
                </ul>
              </div>

              <div className="rounded-xl overflow-hidden max-w-[750px] my-6 border border-[#EBEBEB]">
                <video src="/conduit/prepop.mp4" autoPlay muted loop playsInline controls preload="metadata" className="w-full h-auto" aria-label="A schema drafted from a plain description of the document" />
              </div>
              <p className="text-sm text-muted-foreground max-w-[750px] mt-3 text-center mb-6">Describe the document and the schema drafts itself, ready to adjust.</p>

              {/* Strategic moment */}
              <div id="moment" className="max-w-[750px] mt-10 mb-6">
                <p className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground mb-2">Strategic moment</p>
                <h2 className="font-serif text-[1.75rem] leading-[1.2] tracking-[-0.02em] mb-4">
                  From our rules to theirs
                </h2>
                <div className="space-y-4 text-[17px] leading-relaxed text-muted-foreground">
                  <p>The MVP shipped with a built-in rules engine, our reading of what compliance required. Testing showed the flaw: compliance bends with the country and the product, so one fixed ruleset never fit a customer base this varied.</p>
                  <p>Dropping it was the hard call. The rules engine was the opinionated core the product had been sold on, and letting it go meant trusting customers to set their own rules instead of us.</p>
                  <p>That trade is what made Conduit sellable. Each importer now configures the pipeline to the rules they actually work under, rather than the ones we guessed at.</p>
                </div>
              </div>

              <div className="rounded-xl overflow-hidden max-w-[750px] my-6">
                <LightboxImage src="/conduit/home-api.png" alt="Direct API call dialog: run a saved pipeline from Python, TypeScript or REST" className="w-full h-auto object-cover" />
              </div>
              <p className="text-sm text-muted-foreground max-w-[750px] mt-3 text-center">Every saved pipeline gets an endpoint, so customers can run it from their own systems.</p>
            </section>

            {/* Design system */}
            <section id="craft" className="mb-14">
              <p className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground mb-2">Design system</p>
              <h2 className="font-serif text-[1.75rem] leading-[1.2] tracking-[-0.02em] mb-4 max-w-[750px]">
                The design system underneath
              </h2>
              <div className="space-y-4 text-[17px] leading-relaxed text-muted-foreground max-w-[750px]">
                <p>There was no design system to inherit, so I built one: tokens, components, states and motion documented in one place. I animated the parsing stage myself, so a document being read has a state of its own rather than a dead spinner.</p>
              </div>

              <div className="rounded-xl overflow-hidden max-w-[750px] my-6 border border-[#EBEBEB]">
                <video src="/conduit/ani.mp4" autoPlay muted loop playsInline preload="metadata" className="w-full h-auto" aria-label="The reading-the-document animation in the design system's motion section" />
              </div>
              <p className="text-sm text-muted-foreground max-w-[750px] mt-3 text-center mb-6">The reading-the-document animation, from the system&apos;s Motion section.</p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-[750px] my-6">
                <div className="rounded-xl overflow-hidden">
                  <LightboxImage src="/conduit/ds-states.png" alt="Design system: button states documented with treatment rules" className="w-full h-auto object-cover" />
                </div>
                <div className="rounded-xl overflow-hidden">
                  <LightboxImage src="/conduit/ds-size.png" alt="Design system: empty-state illustration sizing documented with classes" className="w-full h-auto object-cover" />
                </div>
              </div>
              <p className="text-sm text-muted-foreground max-w-[750px] mt-3 text-center">States and rules documented in the system, not just built in the app.</p>
            </section>

            {/* Impact */}
            <section id="impact" className="mb-14">
              <p className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground mb-2">Impact</p>
              <h2 className="font-serif text-[1.75rem] leading-[1.2] tracking-[-0.02em] mb-4 max-w-[750px]">
                A pipeline each customer configures, not one reading of the rules
              </h2>
              <div className="space-y-4 text-[17px] leading-relaxed text-muted-foreground max-w-[750px] mb-8">
                <p>Five teams ran the MVP inside their own workflow, and their testing is what reframed the product. A fixed engine sells one reading of the rules; a pipeline each customer configures fits their own, which is the difference between a demo and something a varied base can run.</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-[750px]">
                <div>
                  <p className="font-serif text-[2rem] leading-[1.1] tracking-[-0.02em] text-foreground">5 teams</p>
                  <p className="text-sm text-muted-foreground mt-1">importers and co-ops running the MVP in their own workflow</p>
                </div>
                <div>
                  <p className="font-serif text-[2rem] leading-[1.1] tracking-[-0.02em] text-foreground">30+</p>
                  <p className="text-sm text-muted-foreground mt-1">interviews that grounded the pivot before a line of UI was drawn</p>
                </div>
                <div>
                  <p className="font-serif text-[2rem] leading-[1.1] tracking-[-0.02em] text-foreground">2 flows</p>
                  <p className="text-sm text-muted-foreground mt-1">Extract and Inject, on one reusable, API-triggered pipeline</p>
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
  )
}
