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
                ["#research", "Research"],
                ["#direction", "Product direction"],
                ["#solution", "The pipeline"],
                ["#extraction", "Extraction"],
                ["#filling", "Form filling"],
                ["#visibility", "Runs and API"],
                ["#approach", "Design decisions"],
                ["#craft", "Design system"],
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

            <div className="mb-12 rounded-xl overflow-hidden max-w-[750px]">
              <LightboxImage
                src="/conduit/cover.png"
                alt="A coffee Certificate of Origin open in Conduit, with the fields to extract listed beside it"
                width={1600}
                height={1023}
                className="w-full h-auto object-cover"
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
                  weight, and certificate number, then copy them into their internal forms. Sometimes they already have
                  the data; sometimes it only exists in a supplier document and needs to be extracted first.
                </p>
                <p>
                  The same process repeats for every shipment, and a mistake can mean a product or shipment fails a
                  compliance check.
                </p>
              </div>
            </section>

            <section id="research" className="mb-10">
              <p className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground mb-2">Research</p>
              <h2 className="font-serif text-[1.75rem] leading-[1.2] tracking-[-0.02em] mb-4 text-balance">Watching the work as it happens</h2>
              <div className="space-y-3 text-[17px] leading-relaxed text-muted-foreground max-w-[750px]">
                <p>
                  I watched compliance teams work through real shipments to understand where Conduit could remove that
                  manual work.
                </p>
                <p>
                  I contributed to Conduit&rsquo;s development as a product designer, from the field research through
                  the interface and the design system.
                </p>
              </div>
            </section>

            <section id="direction" className="mb-10">
              <p className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground mb-2">Product direction</p>
              <h2 className="font-serif text-[1.75rem] leading-[1.2] tracking-[-0.02em] mb-4 text-balance">Let customers define what matters</h2>
              <div className="space-y-3 text-[17px] leading-relaxed text-muted-foreground max-w-[750px]">
                <p>
                  In the first version Conduit would decide whether a document contained everything needed for
                  compliance.
                </p>
                <p>
                  That quickly proved too rigid. Different importers had different compliance requirements, even when
                  they were processing the same type of supplier document.
                </p>
                <p>
                  We changed the model: customers define the fields and rules they need, and Conduit handles the
                  extraction and transfer.
                </p>
              </div>
            </section>

            <section id="solution" className="mb-10">
              <p className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground mb-2">Solution</p>
              <h2 className="font-serif text-[1.75rem] leading-[1.2] tracking-[-0.02em] mb-4 text-balance">One reusable workflow</h2>
              <div className="space-y-3 text-[17px] leading-relaxed text-muted-foreground max-w-[750px] mb-8">
                <p>
                  I designed the product around a pipeline: a saved workflow that moves compliance data from a supplier
                  document into the importer&rsquo;s forms.
                </p>
                <p>
                  Customers configure the workflow once and reuse it across shipments.
                </p>
              </div>

              <div className="rounded-xl overflow-hidden max-w-[750px]">
                <LightboxImage src="/conduit/pipelines.png" alt="Pipelines library: saved workflows with type, dates and live status" width={1600} height={1004} className="w-full h-auto object-cover" />
              </div>
              <p className="mt-3 text-sm text-muted-foreground max-w-[750px] text-center">Every workflow a customer configures is saved here and reused.</p>
            </section>

            <section id="extraction" className="mb-10">
              <p className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground mb-2">Extraction</p>
              <h2 className="font-serif text-[1.75rem] leading-[1.2] tracking-[-0.02em] mb-4 text-balance">Pulling the data out of a supplier document</h2>
              <div className="space-y-3 text-[17px] leading-relaxed text-muted-foreground max-w-[750px] mb-8">
                <p>
                  If the data only exists in the supplier document, the pipeline extracts it. Customers describe the
                  document and Conduit drafts the fields for them to review and adjust.
                </p>
              </div>

              <Clip
                src="/conduit/parsing.mp4"
                label="Building an extraction workflow on a real supplier document"
                caption="Naming the details to pull, on a real supplier document."
              />

              <Clip
                src="/conduit/prepop.mp4"
                label="Fields drafted from a plain description of the document"
                caption="Describe the document and Conduit drafts the fields, ready to review."
              />

              <div className="rounded-xl overflow-hidden max-w-[750px]">
                <LightboxImage src="/conduit/home-config.png" alt="Configuring the fields to pull from each document, each with a type and a description" className="w-full h-auto object-cover" />
              </div>
              <p className="mt-3 text-sm text-muted-foreground max-w-[750px] text-center">The fields a customer defines, each with a type and a description.</p>
            </section>

            <section id="filling" className="mb-10">
              <p className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground mb-2">Form filling</p>
              <h2 className="font-serif text-[1.75rem] leading-[1.2] tracking-[-0.02em] mb-4 text-balance">Writing the data into the importer&rsquo;s form</h2>
              <div className="space-y-3 text-[17px] leading-relaxed text-muted-foreground max-w-[750px] mb-8">
                <p>
                  If the data is already available, the pipeline can go straight to filling the importer&rsquo;s form.
                  Conduit detects the form structure and maps the data to the right fields.
                </p>
              </div>

              <Clip
                src="/conduit/inject.mp4"
                label="Detecting a form's structure and filling it with the data you bring"
                caption="The form structure is detected, then filled with the data you bring."
              />
            </section>

            <section id="visibility" className="mb-10">
              <p className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground mb-2">Visibility</p>
              <h2 className="font-serif text-[1.75rem] leading-[1.2] tracking-[-0.02em] mb-4 text-balance">Runs and the API</h2>
              <div className="space-y-3 text-[17px] leading-relaxed text-muted-foreground max-w-[750px] mb-8">
                <p>
                  Runs records each execution and its status, giving compliance teams visibility into automated work.
                  The API lets the same pipelines connect to their existing systems.
                </p>
              </div>

              <div className="rounded-xl overflow-hidden max-w-[750px]">
                <LightboxImage src="/conduit/runs.png" alt="Runs: a table of every document the workflows have processed, with status" width={1600} height={1000} className="w-full h-auto object-cover" />
              </div>
              <p className="mt-3 text-sm text-muted-foreground max-w-[750px] text-center mb-10">Every execution and its status, recorded.</p>

              <div className="rounded-xl overflow-hidden max-w-[750px]">
                <LightboxImage src="/conduit/home-api.png" alt="Direct API call dialog: run a saved pipeline from Python, TypeScript or REST" className="w-full h-auto object-cover" />
              </div>
              <p className="mt-3 text-sm text-muted-foreground max-w-[750px] text-center">The API, so the same pipelines run from a customer&rsquo;s existing systems.</p>
            </section>

            <section id="approach" className="mb-10">
              <p className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground mb-2">Design decisions</p>
              <h2 className="font-serif text-[1.75rem] leading-[1.2] tracking-[-0.02em] mb-4 text-balance">Make automation reusable and visible</h2>
              <div className="space-y-3 text-[17px] leading-relaxed text-muted-foreground max-w-[750px]">
                <p>
                  I designed the supplier workflow to start from a real document, with Conduit creating a draft instead
                  of asking users to define every field from scratch.
                </p>
                <p>
                  I kept the process inspectable: users can see what was extracted, what was filled, and what happened
                  on each run.
                </p>
              </div>
            </section>

            <section id="craft" className="mb-16">
              <p className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground mb-2">Craft</p>
              <h2 className="font-serif text-[1.75rem] leading-[1.2] tracking-[-0.02em] mb-4 text-balance">Building the design system alongside the product</h2>
              <div className="space-y-3 text-[17px] leading-relaxed text-muted-foreground max-w-[750px] mb-8">
                <p>
                  There was no existing design system, so I built one alongside the product, covering the foundations,
                  components, states, and motion.
                </p>
                <p>
                  For document processing, I used motion to show the document being read instead of relying on a generic
                  spinner, making the system state visible.
                </p>
              </div>

              <Clip
                src="/conduit/ani.mp4"
                label="The reading-the-document animation in the design system's motion section"
                caption="The reading-the-document animation, from the system’s Motion section."
              />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-[750px]">
                <div className="rounded-xl overflow-hidden">
                  <LightboxImage src="/conduit/ds-states.png" alt="Design system: button states documented with treatment rules" width={1600} height={1003} className="w-full h-auto object-cover" />
                </div>
                <div className="rounded-xl overflow-hidden">
                  <LightboxImage src="/conduit/ds-size.png" alt="Design system: empty-state illustration sizing documented with classes" width={1600} height={1003} className="w-full h-auto object-cover" />
                </div>
              </div>
              <p className="mt-3 text-sm text-muted-foreground max-w-[750px] text-center">States and rules documented in the system, not only in the app.</p>
            </section>

            <section id="impact" className="mb-16 p-8 bg-[#F5F3F0] rounded-xl max-w-[750px]">
              <p className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground mb-2">Outcomes</p>
              <h2 className="font-serif text-[1.75rem] leading-[1.2] tracking-[-0.02em] mb-6 text-balance">Impact</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  ["Importer workflows improved", "Compliance verification time per supplier or order dropped from 20 minutes to 3."],
                  ["Delivered on time", "Four weeks to design and build the first version, inside a short timeline."],
                  ["Product rolled out", "Five teams onboarded onto the product."],
                  ["Brand and design system", "Design foundations established that let the product scale efficiently."],
                ].map(([label, body]) => (
                  <div key={label} className="bg-white rounded-xl p-5">
                    <p className="text-[15px] font-medium text-foreground mb-1.5">{label}</p>
                    <p className="text-[15px] leading-relaxed text-muted-foreground">{body}</p>
                  </div>
                ))}
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
