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
                ["#tldr", "Summary"],
                ["#context", "Context"],
                ["#goal", "Goal"],
                ["#pipeline", "UX design"],
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
                Conduit: Automating the customs paperwork behind every shipment
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

            <section id="tldr" className="mb-10 p-8 bg-[#F5F3F0] rounded-xl max-w-[750px]">
              <h2 className="font-serif text-[1.75rem] leading-[1.2] tracking-[-0.02em] mb-4 text-balance">At a glance</h2>
              <ul className="space-y-2 text-[17px] leading-relaxed max-w-[750px]">
                {[
                  ["The problem", "Importers refill the same customs certificates and forms by hand for every shipment. It is slow work, and one wrong field can strand a container at the port."],
                  ["What shipped", "Two tools on one saved setup: Extract reads the key fields out of a document, Inject fills them into a form. Set it up once for a supplier, and every later document runs through it."],
                ].map(([label, body]) => (
                  <li key={label} className="flex gap-3">
                    <span className="text-muted-foreground mt-0.5">•</span>
                    <span className="text-muted-foreground"><strong className="font-medium text-foreground">{label}:</strong> {body}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section id="context" className="mb-10">
              <p className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground mb-2">Context</p>
              <h2 className="font-serif text-[1.75rem] leading-[1.2] tracking-[-0.02em] mb-4 text-balance">The problem &amp; context</h2>
              <div className="space-y-3 text-[17px] leading-relaxed text-muted-foreground max-w-[750px]">
                <p>
                  Conduit fills in the paperwork that gets food shipments through customs: certificates of origin,
                  invoices, packing lists, one set per shipment. Today a person retypes them by hand every time, and one
                  wrong field can leave a container sitting at the port. Before designing anything, I sat with the teams
                  doing this work to see where it broke.
                </p>
              </div>
              <ul className="mt-4 space-y-2 text-[17px] leading-relaxed max-w-[750px]">
                {[
                  "Teams filled in the same documents by hand for every shipment.",
                  "Mistakes were easy to make, and a rejected document held up the whole shipment.",
                  "The work they did on one shipment saved them nothing on the next.",
                ].map((t, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="text-muted-foreground mt-0.5">{i + 1}.</span>
                    <span className="text-muted-foreground">{t}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-[17px] leading-relaxed text-muted-foreground max-w-[750px]">
                I contributed to Conduit&rsquo;s development as a product designer, from the field research through
                the interface and the design system below.
              </p>
            </section>

            <section id="needs" className="mb-10">
              <p className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground mb-2">Research</p>
              <h2 className="font-serif text-[1.75rem] leading-[1.2] tracking-[-0.02em] mb-4 text-balance">User needs</h2>
              <div className="space-y-3 text-[17px] leading-relaxed text-muted-foreground max-w-[750px]">
                <p>
                  Importers described the job as <em>&ldquo;the same paperwork every shipment, filled a little
                  differently.&rdquo;</em> Much of it was cleaning up after their suppliers: documents arrived with
                  mistakes in them, and the importer caught them.
                </p>
                <p>
                  The rest was transcription. They read values off scans that were hard to make out, typed them into
                  their own systems, then typed them again into the extra forms every shipment needs.
                </p>
              </div>
            </section>

            <section id="goal" className="mb-10">
              <p className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground mb-2">Objective</p>
              <h2 className="font-serif text-[1.75rem] leading-[1.2] tracking-[-0.02em] mb-4 text-balance">Business goal</h2>
              <div className="space-y-3 text-[17px] leading-relaxed text-muted-foreground max-w-[750px]">
                <p>
                  Automate the paperwork without hard-coding whose rules are right. Customers work to different ideas
                  of a valid document, so the product had to bend to each of them to be worth selling.
                </p>
              </div>
            </section>

            <section id="pipeline" className="mb-10">
              <p className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground mb-2">Solution</p>
              <h2 className="font-serif text-[1.75rem] leading-[1.2] tracking-[-0.02em] mb-4 text-balance">The pipeline</h2>
              <div className="space-y-3 text-[17px] leading-relaxed text-muted-foreground max-w-[750px] mb-8">
                <p>
                  A pipeline is a saved setup you build once. You tell it which fields to read out of a document, or
                  which fields to fill into a form. Point it at a supplier, and it handles the rest of their documents
                  the same way.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-[750px]">
                <div className="rounded-xl overflow-hidden">
                  <LightboxImage src="/conduit/start.png" alt="Onboarding: choose Extract to pull data out of documents, or Inject to fill a form" width={2880} height={1800} className="w-full h-auto object-cover" />
                </div>
                <div className="rounded-xl overflow-hidden">
                  <LightboxImage src="/conduit/pipelines.png" alt="Pipelines library: saved Extract and Inject pipelines with type, dates and live status" width={2704} height={1700} className="w-full h-auto object-cover" />
                </div>
              </div>
              <p className="mt-3 text-sm text-muted-foreground max-w-[750px] text-center mb-10">The fork the product opens on: pull data out, or fill data in. Everything you build lands in the library.</p>

              <Clip
                src="/conduit/parsing.mp4"
                label="Building an Extract recipe on a real supplier document"
                caption="Extract: name the fields to pull, on a real supplier document."
              />

              <Clip
                src="/conduit/inject.mp4"
                label="Inject: detecting a form's layout and filling it with the values you bring"
                caption="Inject: detect a form’s layout and fill it with the values you bring."
              />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-[750px]">
                <div className="rounded-xl overflow-hidden">
                  <LightboxImage src="/conduit/home-config.png" alt="Configure: the fields to pull from each document, each with a type and a description" className="w-full h-auto object-cover" />
                </div>
                <div className="rounded-xl overflow-hidden">
                  <LightboxImage src="/conduit/runs.png" alt="Runs: a plain table of the documents pipelines have processed" width={1600} height={1004} className="w-full h-auto object-cover" />
                </div>
              </div>
              <p className="mt-3 text-sm text-muted-foreground max-w-[750px] text-center">Configure: name the fields to pull, each with a type and a description. Runs: a record of what the pipelines have processed.</p>
            </section>

            <section id="approach" className="mb-10">
              <p className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground mb-2">Approach</p>
              <h2 className="font-serif text-[1.75rem] leading-[1.2] tracking-[-0.02em] mb-4 text-balance">Approach</h2>
              <div className="space-y-3 text-[17px] leading-relaxed text-muted-foreground max-w-[750px] mb-6">
                <p>Instead of deciding whose rules were right, we gave customers the tools to set their own. My part of that work:</p>
              </div>
              <ul className="space-y-2 text-[17px] leading-relaxed max-w-[750px] mb-8">
                {[
                  "Watched how importers handle documents today, and built for the steps that kept breaking.",
                  "Made the pipeline the one thing you set up. Set it up for a supplier once, and every document after that runs through it.",
                  "Turned a plain description of a document into a ready-made list of fields to pull, so setup started from a draft instead of an empty screen.",
                ].map((t, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="text-muted-foreground mt-0.5">{i + 1}.</span>
                    <span className="text-muted-foreground">{t}</span>
                  </li>
                ))}
              </ul>

              <Clip
                src="/conduit/prepop.mp4"
                label="A schema drafted from a plain description of the document"
                caption="Describe the document and the schema drafts itself, ready to adjust."
              />

              <div className="rounded-xl overflow-hidden max-w-[750px]">
                <LightboxImage src="/conduit/home-api.png" alt="Direct API call dialog: run a saved pipeline from Python, TypeScript or REST" className="w-full h-auto object-cover" />
              </div>
              <p className="mt-3 text-sm text-muted-foreground max-w-[750px] text-center">Every saved pipeline gets an endpoint, so customers can run it from their own systems.</p>
            </section>

            <section id="moment" className="mb-10">
              <p className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground mb-2">Strategy</p>
              <h2 className="font-serif text-[1.75rem] leading-[1.2] tracking-[-0.02em] mb-4 text-balance">Strategic moment: from our rules to theirs</h2>
              <div className="space-y-4 text-[17px] leading-relaxed text-muted-foreground max-w-[750px]">
                <p>
                  The first version shipped with the rules built in. Conduit decided whether a document passed, using
                  our reading of what customs wanted. In testing we saw the flaw: those requirements change with the
                  country and the product, so one fixed version never fit a customer base this varied.
                </p>
                <p>
                  Dropping it was the hard call. That built-in judgment was the opinionated core the product had been sold
                  on, and letting it go meant trusting each customer to define a valid document themselves.
                </p>
                <p>
                  That trade made Conduit sellable. Each customer now sets the pipeline to the rules they work under,
                  instead of the ones we guessed at.
                </p>
              </div>
            </section>

            <section id="craft" className="mb-16">
              <p className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground mb-2">Craft</p>
              <h2 className="font-serif text-[1.75rem] leading-[1.2] tracking-[-0.02em] mb-4 text-balance">The design system underneath</h2>
              <div className="space-y-3 text-[17px] leading-relaxed text-muted-foreground max-w-[750px] mb-8">
                <p>
                  There was no design system to inherit, so I built one: tokens, components, states and motion documented in
                  one place. I animated the moment a document is being read, so waiting has a state of its own instead
                  of a spinner.
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
              <h2 className="font-serif text-[1.75rem] leading-[1.2] tracking-[-0.02em] mb-4 text-balance">Impact</h2>
              <p className="text-[17px] leading-relaxed text-muted-foreground max-w-[750px] mb-8">
                Five teams ran the early version inside their own workflow, and what they found reframed the product.
                A tool that enforces one version of the rules sells to one kind of customer. A setup each customer
                configures sells to a base as varied as this one.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {[
                  ["5 teams", "importers and co-ops running the early version in their own workflow"],
                  ["30+", "interviews with importers and co-ops that grounded the pivot"],
                  ["2 tools", "Extract and Inject, sharing one saved setup you can also call from your own systems"],
                ].map(([num, cap]) => (
                  <div key={num}>
                    <p className="font-serif text-[2rem] leading-[1.1] tracking-[-0.02em] text-foreground">{num}</p>
                    <p className="mt-1 text-sm text-muted-foreground">{cap}</p>
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
