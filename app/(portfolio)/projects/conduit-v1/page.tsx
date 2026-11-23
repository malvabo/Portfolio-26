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

export default function ConduitCaseStudyV1() {
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
                ["#overview", "TL;DR"],
                ["#context", "Context"],
                ["#direction", "Direction"],
                ["#solution", "The Solution"],
                ["#system", "Design system"],
                ["#future", "Future state"],
                ["#impact", "Impact"],
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
                Conduit reads those documents and fills the forms, on the rules each importer sets.
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

            <section id="overview" className="mb-14">
              <p className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground mb-2">TL;DR</p>
              <h2 className="font-serif text-[1.75rem] leading-[1.2] tracking-[-0.02em] mb-4 max-w-[750px]">
                What I did
              </h2>
              <div className="p-8 bg-[#F5F3F0] rounded-xl max-w-[750px] mb-8">
                <ul className="space-y-2 text-[17px] leading-relaxed">
                  <li className="flex gap-3">
                    <span className="text-muted-foreground mt-0.5">&bull;</span>
                    <span className="text-muted-foreground">Built the <span className="font-semibold text-foreground">brand, design system, foundations and motion</span> from scratch</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-muted-foreground mt-0.5">&bull;</span>
                    <span className="text-muted-foreground">Set the <span className="font-semibold text-foreground">information architecture</span> and designed every flow, from the shipment inbox to the pipeline builder</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-muted-foreground mt-0.5">&bull;</span>
                    <span className="text-muted-foreground">Worked with the founders and engineers to research, design and <span className="font-semibold text-foreground">launch in 4 weeks</span></span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-muted-foreground mt-0.5">&bull;</span>
                    <span className="text-muted-foreground">Turned usability findings into a pivot: the founders <span className="font-semibold text-foreground">dropped the rules engine for configurable pipelines</span>, which is what got 5 teams onboard</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-muted-foreground mt-0.5">&bull;</span>
                    <span className="text-muted-foreground"><span className="font-semibold text-foreground">$1.3M a year</span> saved in compliance work across the onboarded teams</span>
                  </li>
                </ul>
              </div>
            </section>

            <section id="context" className="mb-10">
              <p className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground mb-2">Context</p>
              <h2 className="font-serif text-[1.75rem] leading-[1.2] tracking-[-0.02em] mb-4 text-balance">How compliance teams work today</h2>
              <div className="space-y-3 text-[17px] leading-relaxed text-muted-foreground max-w-[750px]">
                <p>
                  An importer cannot clear a shipment until its paperwork agrees. When I interviewed importers and
                  their suppliers, their compliance teams were copying values by hand from certificates, invoices and
                  packing lists into each customs filing: about twenty minutes per shipment. That copying was where
                  errors came in, and a single mismatched weight or certificate number was enough for customs to hold
                  the container.
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
              <p className="mt-3 text-sm text-muted-foreground max-w-[750px] text-center">From the farm to the warehouse</p>

              <h2 className="font-serif text-[1.75rem] leading-[1.2] tracking-[-0.02em] mb-4 text-balance mt-10">Where we decided to start</h2>
              <div className="space-y-3 text-[17px] leading-relaxed text-muted-foreground max-w-[750px]">
                <p>
                  With the founders, I mapped the work and scored each job on frequency, cost of failure and whether
                  it could ship in four weeks. Three made the cut: extracting the required fields without reading
                  documents line by line, flagging unusable documents early, and spotting shipments at risk of a hold.
                </p>
              </div>

              <div className="rounded-xl overflow-hidden border border-[#DDE3EA] max-w-[750px] mt-8">
                <img src="/conduit/workshop.webp" alt="A service blueprint mapping phases, user actions, surfaces, ownership and status, above a workshop board of sticky notes grouped by prompt" width={2000} height={1416} loading="lazy" className="block w-full h-auto" />
              </div>
              <p className="mt-3 text-sm text-muted-foreground max-w-[750px] text-center">Service blueprint and workshop board</p>
            </section>

            <section id="direction" className="mb-10">
              <p className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground mb-2">Direction</p>
              <h2 className="font-serif text-[1.75rem] leading-[1.2] tracking-[-0.02em] mb-4 text-balance">Testing the compliance model with real teams</h2>
              <div className="space-y-3 text-[17px] leading-relaxed text-muted-foreground max-w-[750px]">
                <p>
                  Our first hypothesis was that Conduit would read a document and decide whether it passed, with a
                  rules engine holding the compliance logic. I designed that version and explored several ways to
                  present it before taking it into usability testing.
                </p>
              </div>

              <div className="rounded-xl overflow-hidden border border-[#DDE3EA] max-w-[750px] mt-8">
                <LightboxImage src="/conduit/ideation.webp" alt="Six inbox directions explored side by side: document queue, shipment master-detail, shipment table, shipment cards, stages, and by shipment" width={2000} height={1059} className="block w-full h-auto" />
              </div>
              <p className="mt-3 text-sm text-muted-foreground max-w-[750px] text-center mb-8">Alternatives explored during design ideation phase</p>

              <div className="space-y-3 text-[17px] leading-relaxed text-muted-foreground max-w-[750px]">
                <p>
                  Testing broke the hypothesis: every team validated different fields on the same certificate,
                  because each files against its own policy. I recommended we stop encoding compliance and let each
                  importer configure it, while Conduit guarantees accurate extraction. The founders agreed, and we
                  dropped the rules engine to put the remaining weeks into a pipeline builder.
                </p>
              </div>
            </section>

            <section id="solution" className="mb-10">
              <p className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground mb-2">Solution</p>
              <h2 className="font-serif text-[1.75rem] leading-[1.2] tracking-[-0.02em] mb-4 text-balance">I built reusable pipelines</h2>

              <h3 className="font-serif text-[1.35rem] leading-[1.3] tracking-[-0.01em] mb-3 max-w-[750px]">Designing the home screen</h3>
              <div className="space-y-3 text-[17px] leading-relaxed text-muted-foreground max-w-[750px] mb-8">
                <p>
                  The home screen answers one question: what is stopping my shipments from clearing. Nobody acts on
                  a single document, so I grouped documents under their shipment, and each row shows its state so
                  the list can be scanned without opening anything.
                </p>
              </div>

              <div className="rounded-xl overflow-hidden border border-[#DDE3EA] max-w-[750px]">
                <LightboxImage src="/conduit/dash.png" alt="Inbox grouped by shipment, with one fumigation certificate marked Needs review and one packing list marked File unreadable" width={1576} height={989} className="block w-full h-auto" />
              </div>
              <p className="mt-3 text-sm text-muted-foreground max-w-[750px] text-center mb-10">Documents grouped by shipment</p>

              <h3 className="font-serif text-[1.35rem] leading-[1.3] tracking-[-0.01em] mb-3 max-w-[750px]">Two primitives: extract and inject</h3>
              <div className="space-y-3 text-[17px] leading-relaxed text-muted-foreground max-w-[750px] mb-8">
                <p>
                  Every importer workflow either extracts a value from a document or writes one into it, so I built
                  the product on those two primitives. An importer defines their fields once, and that definition
                  becomes a pipeline they run on every shipment.
                </p>
              </div>

              <div className="rounded-xl overflow-hidden border border-[#DDE3EA] max-w-[750px]">
                <LightboxImage src="/conduit/pipelines.png" alt="Pipelines library: saved workflows with type and status, and the menu for starting a new one with Extract or Inject" width={1600} height={1002} className="block w-full h-auto" />
              </div>
              <p className="mt-3 text-sm text-muted-foreground max-w-[750px] text-center mb-10">Saved pipelines, ready to run again</p>

              <div className="space-y-3 text-[17px] leading-relaxed text-muted-foreground max-w-[750px] mb-8">
                <p>
                  For extraction, the importer lists the fields to pull from each document type, or starts from
                  Conduit&rsquo;s auto-drafted suggestions to make the first setup faster.
                </p>
              </div>

              <Clip
                src="/conduit/parsing.mp4"
                label="Building an extraction workflow on a real supplier document"
                caption="Naming the fields to pull"
              />

              <h3 className="font-serif text-[1.35rem] leading-[1.3] tracking-[-0.01em] mb-3 max-w-[750px] mt-8">Field states and confidence levels</h3>
              <div className="space-y-3 text-[17px] leading-relaxed text-muted-foreground max-w-[750px] mb-8">
                <p>
                  Extraction from a scan is never certain, and an officer who accepts a wrong value signs their name
                  to it. So every field carries a confidence level, and anything below the threshold is flagged for
                  review.
                </p>
              </div>

              <div className="rounded-xl overflow-hidden border border-[#DDE3EA] max-w-[750px]">
                <LightboxImage src="/conduit/states.png" alt="Extracted fields in their states: confident, needs review with a confidence score, not found with a set-value action, and corrected" width={1600} height={759} className="block w-full h-auto" />
              </div>
              <p className="mt-3 text-sm text-muted-foreground max-w-[750px] text-center mb-10">The states a field can arrive in</p>

              <div className="space-y-3 text-[17px] leading-relaxed text-muted-foreground max-w-[750px] mb-8">
                <p>
                  For injection, the importer marks the fields to fill on the document preview and describes each
                  one, then a sample run shows the filled document before the pipeline goes live.
                </p>
              </div>

              <Clip
                src="/conduit/prepop.mp4"
                label="Fields drafted from a plain description of the document"
                caption="Mapping fields and running a sample"
              />

              <h3 className="font-serif text-[1.35rem] leading-[1.3] tracking-[-0.01em] mb-3 max-w-[750px] mt-8">Built to be audited</h3>
              <div className="space-y-3 text-[17px] leading-relaxed text-muted-foreground max-w-[750px] mb-8">
                <p>
                  Compliance work is audited after the fact, so every run is recorded with its pipeline, status and
                  source document, and pipelines can be called straight from the importer&rsquo;s own systems.
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
              <p className="mt-3 text-sm text-muted-foreground max-w-[750px] text-center">Run history and the pipeline API</p>
            </section>

            <section id="system" className="mb-16">
              <p className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground mb-2">Design system</p>
              <h2 className="font-serif text-[1.75rem] leading-[1.2] tracking-[-0.02em] mb-4 text-balance">Foundations, components and motion</h2>
              <div className="space-y-3 text-[17px] leading-relaxed text-muted-foreground max-w-[750px] mb-8">
                <p>
                  There was no design system to build on, so I made one alongside the product: foundations,
                  components, every state documented, and motion.
                </p>
              </div>

              <div className="rounded-xl overflow-hidden border border-[#DDE3EA] max-w-[750px]">
                <LightboxImage src="/conduit/ds.webp" alt="The design system: foundations and components in the sidebar, the reading-state motion spec, colour tokens with their values and usage, and input and schema-row states from rest through focus, error and loading" width={2000} height={1177} className="block w-full h-auto" />
              </div>
              <p className="mt-3 text-sm text-muted-foreground max-w-[750px] text-center">The design system</p>
            </section>

            <section id="future" className="mb-16">
              <p className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground mb-2">Future state &middot; Conversational design</p>
              <h2 className="font-serif text-[1.75rem] leading-[1.2] tracking-[-0.02em] mb-4 text-balance">Future state: agentic AI</h2>
              <div className="space-y-3 text-[17px] leading-relaxed text-muted-foreground max-w-[750px] mb-8">
                <p>
                  Pipelines automate the repetitive work, but officers still open documents to find answers. The next
                  step I designed is a conversational layer over everything Conduit has processed: ask what is missing
                  before a shipment can clear, or which invoices have no HS code, and the answer arrives with its
                  source documents attached.
                </p>
              </div>
            </section>

            <section id="impact" className="mb-14">
              <p className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground mb-2">Impact</p>
              <h2 className="font-serif text-[1.75rem] leading-[1.2] tracking-[-0.02em] mb-4 max-w-[750px]">
                Saved compliance teams $1.3M a year
              </h2>
              <div className="p-8 bg-[#F5F3F0] rounded-xl max-w-[750px] mb-8">
                <ul className="space-y-2 text-[17px] leading-relaxed">
                  <li className="flex gap-3">
                    <span className="text-muted-foreground mt-0.5">&bull;</span>
                    <span className="text-muted-foreground">Data verification time per shipment dropped from <span className="font-semibold text-foreground">20 min to 1&ndash;3 min</span>, saving <span className="font-semibold text-foreground">up to 2h</span> per shipment at a <span className="font-semibold text-foreground">95% lower</span> cost per processed document</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-muted-foreground mt-0.5">&bull;</span>
                    <span className="text-muted-foreground"><span className="font-semibold text-foreground">4 weeks</span> to design and build the product, delivered within short timelines</span>
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
