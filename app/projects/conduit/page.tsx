"use client"
import { LightboxImage } from "@/components/lightbox-image"

import { BackLinkSidebar, BackLinkFooter } from "@/components/back-link"
import { ScrollToTop } from "@/components/scroll-to-top"
import { Header } from "@/components/header"

function Clip({ src, label, caption }: { src: string; label: string; caption: string }) {
  return (
    <div className="mb-10 max-w-[750px]">
      <div className="rounded-xl overflow-hidden bg-muted/30">
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
                ["#context", "Context"],
                ["#solution", "Solution"],
                ["#craft", "Design system"],
                ["#future", "Conversational AI"],
                ["#impact", "Outcomes"],
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
                Conduit extracts the data from supplier documents, such as certificates of origin, and moves it into
                importers&rsquo; compliance systems and internal documents, using the fields each customer sets up.
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

            <div className="mb-12 rounded-xl overflow-hidden max-w-[750px]">
              <LightboxImage
                src="/conduit/cover.png"
                alt="A coffee Certificate of Origin open in Conduit, with the fields to extract listed beside it"
                width={1600}
                height={1023}
                className="block w-full h-auto"
              />
            </div>

            <section id="context" className="mb-10">
              <p className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground mb-2">Context</p>
              <h2 className="font-serif text-[1.75rem] leading-[1.2] tracking-[-0.02em] mb-4 text-balance">The problem</h2>
              <div className="space-y-3 text-[17px] leading-relaxed text-muted-foreground max-w-[750px]">
                <p>
                  Large importers receive certificates of origin and other supplier documents with information they need
                  for their own product compliance process.
                </p>
                <p>
                  Today, compliance teams manually find and check details such as product name, country of origin,
                  weight, and certificate number, then copy them into their internal forms.
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
              <p className="mt-3 text-sm text-muted-foreground max-w-[750px] text-center">Cocoa drying at the farm and opened for inspection at the warehouse. Each shipment carries its own certificates.</p>
            </section>

            <section id="solution" className="mb-10">
              <p className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground mb-2">Solution</p>
              <h2 className="font-serif text-[1.75rem] leading-[1.2] tracking-[-0.02em] mb-4 text-balance">Reusable workflows</h2>
              <div className="space-y-3 text-[17px] leading-relaxed text-muted-foreground max-w-[750px] mb-8">
                <p>
                  I designed the product around a pipeline: a saved workflow that extracts compliance data from supplier
                  documents and moves it into the systems importers use for compliance, or fills in the compliance
                  documents they need internally.
                </p>
              </div>

              <div className="rounded-xl overflow-hidden max-w-[750px]">
                <LightboxImage src="/conduit/pipelines.png" alt="Pipelines library: saved workflows with type and status, and the menu for starting a new one with Extract or Inject" width={1600} height={1002} className="block w-full h-auto" />
              </div>
              <p className="mt-3 text-sm text-muted-foreground max-w-[750px] text-center mb-10">The Pipelines library: saved workflows with their type and status.</p>

              <div className="space-y-3 text-[17px] leading-relaxed text-muted-foreground max-w-[750px] mb-8">
                <p>
                  If the data only exists in the supplier document, the pipeline extracts it. Customers either let
                  Conduit auto-map the fields to extract, or map them manually for higher accuracy.
                </p>
              </div>

              <Clip
                src="/conduit/parsing.mp4"
                label="Conduit auto-mapping the fields to extract from a supplier document"
                caption="Auto-mapping the fields to extract."
              />

              <div className="space-y-3 text-[17px] leading-relaxed text-muted-foreground max-w-[750px] mt-8 mb-8">
                <p>
                  If the data is already available, the pipeline can go straight to filling the importer&rsquo;s form.
                  Conduit detects the form structure and maps the data to the right fields.
                </p>
              </div>

              <Clip
                src="/conduit/prepop.mp4"
                label="Conduit mapping data into the fields of an importer's form"
                caption="Mapping the data into the fields of the importer’s form."
              />

              <div className="space-y-3 text-[17px] leading-relaxed text-muted-foreground max-w-[750px] mt-8 mb-8">
                <p>
                  Every run is recorded with its status, so compliance teams can check what was extracted and filled.
                  The API lets the same pipelines run from their existing systems.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-[750px] items-start">
                <div className="rounded-xl overflow-hidden aspect-[16/10]">
                  <LightboxImage src="/conduit/runs.png" alt="Runs: every document the workflows have processed, with its pipeline, status, run ID and time" width={1600} height={1000} className="block w-full h-full object-cover" />
                </div>
                <div className="rounded-xl overflow-hidden aspect-[16/10]">
                  <LightboxImage src="/conduit/home-api.png" alt="Direct API call dialog: run a saved pipeline from Python, TypeScript or REST" className="block w-full h-full object-cover" />
                </div>
              </div>
              <p className="mt-3 text-sm text-muted-foreground max-w-[750px] text-center">The Runs page, and the dialog for calling a saved pipeline from Python, TypeScript or REST.</p>
            </section>

            <section id="craft" className="mb-16">
              <p className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground mb-2">Design system</p>
              <h2 className="font-serif text-[1.75rem] leading-[1.2] tracking-[-0.02em] mb-4 text-balance">Building the design system alongside the product</h2>
              <div className="space-y-3 text-[17px] leading-relaxed text-muted-foreground max-w-[750px] mb-8">
                <p>
                  There was no existing design system, so I built one alongside the product, from foundations
                  to motion.
                </p>
                <p>
                  I also worked on motion states, such as the animation of a document being read while Conduit
                  processes it.
                </p>
              </div>

              <Clip
                src="/conduit/ani.mp4"
                label="The reading-the-document animation in the design system's motion section"
                caption="The reading-the-document animation, from the system’s Motion section."
              />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-[750px] items-start">
                <div className="rounded-xl overflow-hidden">
                  <LightboxImage src="/conduit/ds-states.png" alt="Design system: button states documented with treatment rules" width={1600} height={1003} className="block w-full h-auto" />
                </div>
                <div className="rounded-xl overflow-hidden">
                  <LightboxImage src="/conduit/ds-size.png" alt="Design system: empty-state illustration sizing documented with classes" width={1600} height={1003} className="block w-full h-auto" />
                </div>
              </div>
              <p className="mt-3 text-sm text-muted-foreground max-w-[750px] text-center">Button states and empty-state sizing, documented with their rules.</p>
            </section>

            <section id="future" className="mb-16">
              <p className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground mb-2">Conversational AI</p>
              <h2 className="font-serif text-[1.75rem] leading-[1.2] tracking-[-0.02em] mb-4 text-balance">An interaction layer between importers and their documents</h2>
              <div className="space-y-3 text-[17px] leading-relaxed text-muted-foreground max-w-[750px] mb-8">
                <p>
                  Pipelines turn documents into data, but importers think in shipments. The questions
                  they ask are &ldquo;Can this container clear on Thursday?&rdquo; or &ldquo;Which of
                  our suppliers are sending us expired certificates?&rdquo; The answer is spread across
                  a certificate of origin, an invoice and a packing list, often from different suppliers
                  and in different formats.
                </p>
                <p>
                  Today someone opens each file, cross-checks the fields by hand and reports back to the
                  people waiting on the shipment. The data Conduit extracts could answer these
                  questions, but only if people can reach it in the terms they already use.
                </p>
                <p>
                  I designed a conversational layer over everything Conduit has processed, organised
                  around shipments, suppliers and deadlines. The shipment is the subject of each answer,
                  and the documents are its evidence: every point cites the document and field it came
                  from. In compliance, an answer without a source can&rsquo;t be acted on, so verifying
                  it had to take one click.
                </p>
              </div>

              <div className="rounded-xl overflow-hidden max-w-[750px]">
                <LightboxImage src="/conduit/ask-0.png" alt="An executive brief answered in a side panel next to Pipelines, naming the blocked and expiring documents and citing its sources" width={1600} height={1001} className="block w-full h-auto" />
              </div>
              <p className="mt-3 text-sm text-muted-foreground max-w-[750px] text-center mb-10">A brief in the side panel, citing the documents behind each point.</p>

              <div className="space-y-3 text-[17px] leading-relaxed text-muted-foreground max-w-[750px] mb-8">
                <p>
                  The same data serves people who need different depth. An operations lead wants a brief
                  on what&rsquo;s blocked this week. A compliance officer needs to check one certificate
                  field by field. The brief summarises, and each point opens the source for whoever
                  needs to go further.
                </p>
                <p>
                  Answers also lead to the next step. When a shipment is blocked by a document that
                  hasn&rsquo;t been processed, Conduit proposes the pipeline to run. When a field
                  conflicts between documents, it offers a review. Nothing runs without approval,
                  because a wrong filing is the importer&rsquo;s legal liability.
                </p>
              </div>

              <div className="rounded-xl overflow-hidden max-w-[750px]">
                <LightboxImage src="/conduit/ask-1.png" alt="A question about what blocks a shipment, answered with the three documents at fault and a Resolve or Review action beside each" width={1600} height={1002} className="block w-full h-auto" />
              </div>
              <p className="mt-3 text-sm text-muted-foreground max-w-[750px] text-center mb-10">Each blocking document comes with a Resolve or Review action.</p>

              <h3 className="font-serif text-[1.35rem] leading-[1.3] tracking-[-0.01em] mb-3 max-w-[750px]">From document processing to agentic workflows</h3>
              <div className="space-y-3 text-[17px] leading-relaxed text-muted-foreground max-w-[750px]">
                <p>
                  This layer is what makes a more autonomous Conduit possible. Once the system knows
                  what each shipment needs and what it already has, it can watch for gaps: a certificate
                  that expires before arrival, or a document still missing for next week&rsquo;s
                  shipment. The next step is an agent that spots those gaps, requests or processes the
                  documents, and brings the compliance officer only the decisions that need their
                  judgement.
                </p>
              </div>
            </section>

            <section id="impact" className="mb-14">
              <p className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground mb-2">Outcomes</p>
              <h2 className="font-serif text-[1.75rem] leading-[1.2] tracking-[-0.02em] mb-4 max-w-[750px]">
                Document filing that took fifteen minutes now takes one minute
              </h2>
              <div className="p-8 bg-[#F5F3F0] rounded-xl max-w-[750px] mb-8">
                <ul className="space-y-2 text-[17px] leading-relaxed">
                  <li className="flex gap-3">
                    <span className="text-muted-foreground mt-0.5">&bull;</span>
                    <span className="text-muted-foreground">Document filing time per order dropped from <span className="font-semibold text-foreground">15 minutes to 1 minute</span></span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-muted-foreground mt-0.5">&bull;</span>
                    <span className="text-muted-foreground"><span className="font-semibold text-foreground">Five teams</span> onboarded onto the product, running it on their own shipments</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-muted-foreground mt-0.5">&bull;</span>
                    <span className="text-muted-foreground">First version <span className="font-semibold text-foreground">shipped on schedule</span></span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-muted-foreground mt-0.5">&bull;</span>
                    <span className="text-muted-foreground">A <span className="font-semibold text-foreground">design system</span> built from scratch</span>
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
