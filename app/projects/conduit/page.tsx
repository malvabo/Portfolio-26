"use client"
import { LightboxImage } from "@/components/lightbox-image"

import { BackLinkSidebar, BackLinkFooter } from "@/components/back-link"
import { ScrollToTop } from "@/components/scroll-to-top"
import { Header } from "@/components/header"

function Clip({ src, label, caption }: { src: string; label: string; caption: string }) {
  return (
    <div className="mb-10 max-w-[750px]">
      <div className="rounded-xl overflow-hidden border border-[#DDE3EA] bg-muted/30">
        {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
        <video
          src={src}
          autoPlay
          muted
          loop
          playsInline
          controls
          preload="metadata"
          aria-label={label}
          className="w-full h-auto block"
        />
      </div>
      <p className="mt-3 text-sm text-muted-foreground max-w-[750px] text-center">{caption}</p>
    </div>
  )
}

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
              {[
                ["#impact", "Outcomes"],
                ["#context", "Context"],
                ["#direction", "Direction"],
                ["#solution", "The Solution"],
                ["#craft", "Craft"],
                ["#system", "Design system"],
                ["#future", "Conversational design"],
                ["#reflection", "Reflection"],
              ].map(([href, label]) => (
                <a key={href} href={href} className="block text-[15px] text-muted-foreground hover:text-foreground transition-colors">
                  {label}
                </a>
              ))}
            </nav>
          </aside>

          <main className="flex-1 px-8 lg:px-12 pb-20 lg:pb-24">
            <div className="mb-12 max-w-[750px]">
              <h1 className="font-serif text-2xl md:text-3xl lg:text-4xl tracking-[-0.02em] leading-[1.2] mb-4">
                Conduit: Automating the customs paperwork for importers
              </h1>
              <p className="text-[17px] leading-relaxed text-muted-foreground">
                Every food shipment crossing a border needs a stack of certificates and forms, redone by hand each time.
                Conduit reads those documents and fills the forms, on the rules each customer sets.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-4 mb-4 pb-8 max-w-[750px]">
              <div>
                <p className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground mb-2">Role</p>
                <p className="text-[15px] leading-relaxed">Product and design lead</p>
              </div>
              <div>
                <p className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground mb-2">Timeline</p>
                <p className="text-[15px] leading-relaxed">Four weeks</p>
              </div>
              <div>
                <p className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground mb-2">Scope</p>
                <p className="text-[15px] leading-relaxed">Product direction, design, design system</p>
              </div>
              <div>
                <p className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground mb-2">Domain</p>
                <div className="flex flex-wrap gap-1.5">
                  <span className="inline-block px-2 py-0.5 text-[13px] rounded-md bg-[#E8E3DD] text-[#6B5D4F]">Supply chain</span>
                </div>
              </div>
            </div>

            <div className="mb-12 rounded-xl overflow-hidden border border-[#DDE3EA] max-w-[750px]">
              <LightboxImage
                src="/conduit/cover.png"
                alt="A coffee Certificate of Origin open in Conduit, with the fields to extract listed beside it"
                width={1600}
                height={1023}
                className="block w-full h-auto"
              />
            </div>

            <section id="impact" className="mb-14">
              <p className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground mb-2">Impact</p>
              <h2 className="font-serif text-[1.75rem] leading-[1.2] tracking-[-0.02em] mb-4 max-w-[750px]">
                Data verification that took 20 minutes per shipment now takes 1&ndash;3 minutes
              </h2>
              <div className="p-8 bg-[#F5F3F0] rounded-xl max-w-[750px] mb-8">
                <ul className="space-y-2 text-[17px] leading-relaxed">
                  <li className="flex gap-3">
                    <span className="text-muted-foreground mt-0.5">&bull;</span>
                    <span className="text-muted-foreground">Data verification time per shipment dropped from <span className="font-semibold text-foreground">20 min to 1&ndash;3 min</span>, saving <span className="font-semibold text-foreground">up to 2h</span> per shipment at a <span className="font-semibold text-foreground">95% lower</span> cost per processed document</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-muted-foreground mt-0.5">&bull;</span>
                    <span className="text-muted-foreground"><span className="font-semibold text-foreground">4 weeks</span> to design and build the MVP, delivered within short timelines</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-muted-foreground mt-0.5">&bull;</span>
                    <span className="text-muted-foreground"><span className="font-semibold text-foreground">5 teams</span> onboarded into the solution</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-muted-foreground mt-0.5">&bull;</span>
                    <span className="text-muted-foreground">A <span className="font-semibold text-foreground">brand and design system</span> with foundations that allow efficient scaling</span>
                  </li>
                </ul>
              </div>
            </section>

            <section id="context" className="mb-10">
              <p className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground mb-2">Context</p>
              <h2 className="font-serif text-[1.75rem] leading-[1.2] tracking-[-0.02em] mb-4 text-balance">The paperwork decides whether the shipment moves</h2>
              <div className="space-y-3 text-[17px] leading-relaxed text-muted-foreground max-w-[750px]">
                <p>
                  Shipments clear customs on their paperwork, and the importer has to carry every fact from the
                  supplier&rsquo;s certificates into their own filing: where the goods were grown, what they weigh,
                  who inspected them.
                </p>
                <p>
                  I spent the first week with the people who do that. A compliance officer opens each document, reads
                  it, and retypes what they need. The work is exact and entirely manual, and one transposed weight or
                  mismatched certificate number leaves the container waiting at the border.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-[750px] items-start mt-8">
                <div className="rounded-xl overflow-hidden aspect-[4/3]">
                  <LightboxImage src="/conduit/supply-drying.webp" alt="A worker turning cocoa beans by hand on a drying rack outside a farm building" width={1600} height={1598} className="block w-full h-full object-cover" />
                </div>
                <div className="rounded-xl overflow-hidden aspect-[4/3]">
                  <LightboxImage src="/conduit/supply-warehouse.webp" alt="Warehouse workers cutting open sacks of cocoa beans before shipping" width={1600} height={1200} className="block w-full h-full object-cover" />
                </div>
              </div>
              <p className="mt-3 text-sm text-muted-foreground max-w-[750px] text-center">The shipments the paperwork follows, from the farm to the warehouse</p>

              <h2 className="font-serif text-[1.75rem] leading-[1.2] tracking-[-0.02em] mt-10 mb-4 text-balance">Where we decided to start</h2>
              <div className="space-y-3 text-[17px] leading-relaxed text-muted-foreground max-w-[750px]">
                <p>
                  I mapped the work with the founders and scored each job on how often it came up, what it cost when
                  it went wrong, and whether we could ship it in four weeks. Three made the cut:
                </p>
                <ul className="space-y-2">
                  <li className="flex gap-3">
                    <span className="mt-0.5">&bull;</span>
                    <span>Extract the required fields from an exporter&rsquo;s compliance document without reading it line by line</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-0.5">&bull;</span>
                    <span>Flag an unusable document early enough to request a replacement from the exporter</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-0.5">&bull;</span>
                    <span>Identify shipments at risk of being held before they reach the border</span>
                  </li>
                </ul>
              </div>

              <div className="rounded-xl overflow-hidden border border-[#DDE3EA] max-w-[750px] mt-8">
                <img src="/conduit/workshop.webp" alt="A service blueprint mapping phases, user actions, surfaces, ownership and status, above a workshop board of sticky notes grouped by prompt" width={2000} height={1416} loading="lazy" className="block w-full h-auto" />
              </div>
              <p className="mt-3 text-sm text-muted-foreground max-w-[750px] text-center">The blueprint and the workshop board the three jobs came out of</p>
            </section>

            <section id="direction" className="mb-10">
              <p className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground mb-2">Direction</p>
              <h2 className="font-serif text-[1.75rem] leading-[1.2] tracking-[-0.02em] mb-4 text-balance">Testing the compliance model with real teams</h2>
              <div className="space-y-3 text-[17px] leading-relaxed text-muted-foreground max-w-[750px]">
                <p>
                  We started from a clear hypothesis: Conduit would read a document and decide whether it passed. A
                  rules engine would hold the compliance logic and the interface would report the result. I designed
                  that version and we took it into usability testing with compliance teams.
                </p>
                <p>
                  The results were consistent across sessions: each team validated a different set of fields on the
                  same certificate of origin, because each files against its own internal policy. A single built-in
                  verdict could not serve them. What we had encoded as compliance logic was one team&rsquo;s policy,
                  not the industry&rsquo;s.
                </p>
                <p>
                  I took the findings to the founders with a recommendation: stop encoding compliance in the product
                  and let each customer configure it. The judgement stays with the team accountable for the filing,
                  and Conduit guarantees the accuracy of extraction and placement instead. We agreed that week, and
                  the engine&rsquo;s remaining build went into the pipelines.
                </p>
                <p>
                  Configurability has a cost: a customer gets no value until they have built their first pipeline. I
                  designed the builder to include auto-drafting the fields, so that the first setup is faster.
                </p>
              </div>
            </section>

            <section id="solution" className="mb-10">
              <p className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground mb-2">Solution</p>
              <h2 className="font-serif text-[1.75rem] leading-[1.2] tracking-[-0.02em] mb-4 text-balance">Two operations, reused on every shipment</h2>
              <div className="space-y-3 text-[17px] leading-relaxed text-muted-foreground max-w-[750px] mb-8">
                <p>
                  Every workflow these teams run is one of two operations: extracting a value from a document, or
                  writing one into it. I built the product on those two primitives. A customer defines the fields they
                  need once, and that definition becomes a pipeline they run on every shipment.
                </p>
              </div>

              <div className="rounded-xl overflow-hidden border border-[#DDE3EA] max-w-[750px]">
                <LightboxImage src="/conduit/pipelines.png" alt="Pipelines library: saved workflows with type and status, and the menu for starting a new one with Extract or Inject" width={1600} height={1002} className="block w-full h-auto" />
              </div>
              <p className="mt-3 text-sm text-muted-foreground max-w-[750px] text-center mb-10">Every pipeline a customer has defined, ready to run again</p>

              <div className="space-y-3 text-[17px] leading-relaxed text-muted-foreground max-w-[750px] mb-8">
                <p>
                  For extraction, the importer defines which fields to pull from each document type. They can list
                  them manually, or start from Conduit&rsquo;s suggestions and adjust.
                </p>
              </div>

              <Clip
                src="/conduit/parsing.mp4"
                label="Building an extraction workflow on a real supplier document"
                caption="Naming the fields to pull, on the document they come from"
              />

              <div className="space-y-3 text-[17px] leading-relaxed text-muted-foreground max-w-[750px] mt-8 mb-8">
                <p>
                  For injection, the importer marks on the document preview which fields to fill, and describes each
                  one so Conduit knows what data belongs there. A sample run shows the filled document before the
                  pipeline is used.
                </p>
              </div>

              <Clip
                src="/conduit/prepop.mp4"
                label="Fields drafted from a plain description of the document"
                caption="Mapping fields onto the form, then checking a sample run"
              />

              <h3 className="font-serif text-[1.35rem] leading-[1.3] tracking-[-0.01em] mb-3 mt-8 max-w-[750px]">The inbox is organised by shipment</h3>
              <div className="space-y-3 text-[17px] leading-relaxed text-muted-foreground max-w-[750px] mb-8">
                <p>
                  Documents arrive in Conduit one at a time, so the simplest screen would be a list of them. But
                  compliance officers work by shipment: customs holds a whole container when one certificate is
                  missing. The inbox groups documents under the shipment they belong to, and each row shows what is
                  blocking it.
                </p>
              </div>

              <div className="rounded-xl overflow-hidden border border-[#DDE3EA] max-w-[750px]">
                <LightboxImage src="/conduit/dash.png" alt="Inbox grouped by shipment, with one fumigation certificate marked Needs review and one packing list marked File unreadable" width={1576} height={989} className="block w-full h-auto" />
              </div>
              <p className="mt-3 text-sm text-muted-foreground max-w-[750px] text-center mb-10">Documents grouped under their shipment, with what is blocking each one</p>

              <h3 className="font-serif text-[1.35rem] leading-[1.3] tracking-[-0.01em] mb-3 max-w-[750px]">Built to be audited</h3>
              <div className="space-y-3 text-[17px] leading-relaxed text-muted-foreground max-w-[750px] mb-8">
                <p>
                  Compliance work is audited after the fact, so every execution is recorded with its pipeline,
                  status and source document.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-[750px] items-start">
                <div className="rounded-xl overflow-hidden border border-[#DDE3EA] aspect-[16/10]">
                  <LightboxImage src="/conduit/runs.png" alt="Runs: every document the workflows have processed, with its pipeline, status, run ID and time" width={1600} height={1000} className="block w-full h-full object-cover" />
                </div>
                <div className="rounded-xl overflow-hidden border border-[#DDE3EA] aspect-[16/10]">
                  <LightboxImage src="/conduit/home-api.png" alt="Direct API call dialog: run a saved pipeline from Python, TypeScript or REST" className="block w-full h-full object-cover" />
                </div>
              </div>
              <p className="mt-3 text-sm text-muted-foreground max-w-[750px] text-center">The run history, and the API the pipelines are called through</p>
            </section>

            <section id="craft" className="mb-16">
              <p className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground mb-2">Craft</p>
              <h2 className="font-serif text-[1.75rem] leading-[1.2] tracking-[-0.02em] mb-4 text-balance">Designing a product that admits what it does not know</h2>
              <div className="space-y-3 text-[17px] leading-relaxed text-muted-foreground max-w-[750px]">
                <p>
                  Reading a scanned certificate is never certain, and a compliance officer who trusts a wrong value
                  signs their name to it. The interface could not show a guess and a confirmed value the same way.
                </p>
                <p>
                  So the states carry the difference. A field Conduit cannot read confidently arrives marked for
                  review; a document it cannot process arrives marked unreadable.
                </p>
              </div>
            </section>

            <section id="system" className="mb-16">
              <p className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground mb-2">Design system</p>
              <h2 className="font-serif text-[1.75rem] leading-[1.2] tracking-[-0.02em] mb-4 text-balance">Building the system alongside the product</h2>
              <div className="space-y-3 text-[17px] leading-relaxed text-muted-foreground max-w-[750px] mb-8">
                <p>
                  There was no design system to build this on, so I made one alongside the product: foundations,
                  components, every state documented, and motion.
                </p>
                <p>
                  For document processing I replaced the generic spinner with an animation of the document being read,
                  so the wait shows what the system is doing.
                </p>
              </div>

              <Clip
                src="/conduit/ani.mp4"
                label="The reading-the-document animation in the design system's motion section"
                caption="The reading animation, from the system&rsquo;s motion section"
              />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-[750px] items-start">
                <div className="rounded-xl overflow-hidden border border-[#DDE3EA]">
                  <LightboxImage src="/conduit/ds-states.png" alt="Design system: button states documented with treatment rules" width={1600} height={1003} className="block w-full h-auto" />
                </div>
                <div className="rounded-xl overflow-hidden border border-[#DDE3EA]">
                  <LightboxImage src="/conduit/ds-size.png" alt="Design system: empty-state illustration sizing documented with classes" width={1600} height={1003} className="block w-full h-auto" />
                </div>
              </div>
              <p className="mt-3 text-sm text-muted-foreground max-w-[750px] text-center">States and rules documented in the system, not only in the app</p>
            </section>

            <section id="future" className="mb-16">
              <p className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground mb-2">Conversational design</p>
              <h2 className="font-serif text-[1.75rem] leading-[1.2] tracking-[-0.02em] mb-4 text-balance">What the structure made possible next</h2>
              <div className="space-y-3 text-[17px] leading-relaxed text-muted-foreground max-w-[750px] mb-8">
                <p>
                  Once every document has been through a pipeline, the data behind a shipment is structured, and a
                  question like &ldquo;what is blocking this container&rdquo; becomes answerable rather than a morning
                  of opening files. I built a conversational layer on top of that structure.
                </p>
                <p>
                  It answers with the documents it read, and where a document has not been processed yet it proposes
                  the pipeline and waits to be told to run it. The rule is the same as everywhere else in the product:
                  Conduit does the mechanical work and names what it is unsure of, and the person decides.
                </p>
              </div>

              <div className="rounded-xl overflow-hidden border border-[#DDE3EA] max-w-[750px]">
                <LightboxImage src="/conduit/ask-0.png" alt="An executive brief answered in a side panel next to Pipelines, naming the blocked and expiring documents and citing its sources" width={1600} height={1001} className="block w-full h-auto" />
              </div>
              <p className="mt-3 text-sm text-muted-foreground max-w-[750px] text-center mb-10">The answer arrives with the documents it came from</p>
            </section>

            <section id="reflection" className="mb-16">
              <p className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground mb-2">Reflection</p>
              <h2 className="font-serif text-[1.75rem] leading-[1.2] tracking-[-0.02em] mb-4 text-balance">What I would do differently</h2>
              <div className="space-y-3 text-[17px] leading-relaxed text-muted-foreground max-w-[750px]">
                <p>
                  Usability testing on the compliance model would have been worth running earlier. A small number of
                  sessions surfaced what we needed, and in a four-week build, scheduling them in week one rather than
                  alongside the first version would have freed time for what replaced it.
                </p>
                <p>
                  Configurability also shifted effort onto the customer&rsquo;s first hour. Drafting fields from a
                  real document covers the worst of it, but onboarding is where I would spend the next stretch.
                </p>
              </div>
            </section>

            <section className="mb-14">
              <p className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground mb-2">Impact</p>
              <h2 className="font-serif text-[1.75rem] leading-[1.2] tracking-[-0.02em] mb-4 max-w-[750px]">
                Data verification that took 20 minutes per shipment now takes 1&ndash;3 minutes
              </h2>
              <div className="p-8 bg-[#F5F3F0] rounded-xl max-w-[750px] mb-8">
                <ul className="space-y-2 text-[17px] leading-relaxed">
                  <li className="flex gap-3">
                    <span className="text-muted-foreground mt-0.5">&bull;</span>
                    <span className="text-muted-foreground">Data verification time per shipment dropped from <span className="font-semibold text-foreground">20 min to 1&ndash;3 min</span>, saving <span className="font-semibold text-foreground">up to 2h</span> per shipment at a <span className="font-semibold text-foreground">95% lower</span> cost per processed document</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-muted-foreground mt-0.5">&bull;</span>
                    <span className="text-muted-foreground"><span className="font-semibold text-foreground">4 weeks</span> to design and build the MVP, delivered within short timelines</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-muted-foreground mt-0.5">&bull;</span>
                    <span className="text-muted-foreground"><span className="font-semibold text-foreground">5 teams</span> onboarded into the solution</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-muted-foreground mt-0.5">&bull;</span>
                    <span className="text-muted-foreground">A <span className="font-semibold text-foreground">brand and design system</span> with foundations that allow efficient scaling</span>
                  </li>
                </ul>
              </div>
            </section>

            <div className="pt-16">
              <BackLinkFooter />
            </div>
          </main>
        </div>
      </div>
    </div>
  )
}
