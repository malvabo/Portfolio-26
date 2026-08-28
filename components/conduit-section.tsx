const CONDUIT_IMAGES = [
  { src: "/conduit/pipelines.png", alt: "Conduit pipelines library with saved pipelines and their live status" },
  { src: "/conduit/detail.png", alt: "A pipeline's detail view: its fields, where it runs, and its recent runs" },
  { src: "/conduit/start.png", alt: "Onboarding: choose Extract to pull data out, or Inject to fill a form" },
]

export function ConduitSection() {
  return (
    <section className="container mx-auto px-8 lg:px-12 pt-8 pb-8 md:pb-12">
      <div className="max-w-7xl mx-auto">
        <div className="flex gap-2 mb-3">
          <span className="inline-block px-2.5 py-0.5 text-[11px] font-mono uppercase tracking-normal rounded-md bg-[#E8E3DD] text-[#6B5D4F]">Supply chain</span>
        </div>
        <h2 className="text-2xl md:text-3xl leading-[1.1] font-serif mb-8 tracking-tight">
          Conduit: Document pipelines importers build themselves
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 mb-10">
          <div>
            <h3 className="text-xs font-normal mb-3 uppercase tracking-wide text-muted-foreground opacity-80">About</h3>
            <p className="text-base leading-relaxed text-foreground">
              A pipeline builder for compliance documents. Extract pulls structured data out of supplier documents; Inject detects a form's layout and fills it. Each pipeline is a saved recipe of fields plus a trigger, so it can be duplicated for the next supplier or called over an API from an importer's own systems.
            </p>
            <a
              href="/compliance-certification.html"
              className="inline-flex items-center gap-2 mt-6 px-5 py-2.5 text-sm font-medium rounded-full bg-white/40 backdrop-blur-md border border-gray-300/50 hover:bg-white/60 hover:border-gray-400/60 transition-all duration-300 shadow-sm hover:shadow-md"
            >
              Read more
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>

          <div>
            <h3 className="text-xs font-normal mb-3 uppercase tracking-wide text-muted-foreground opacity-80">Results</h3>
            <div className="space-y-4">
              <div>
                <div className="text-xl font-medium text-foreground mb-0.5">5 teams</div>
                <div className="text-sm text-muted-foreground opacity-80">onboarded onto the MVP, whose testing is what reframed the product</div>
              </div>
              <div>
                <div className="text-xl font-medium text-foreground mb-0.5">30+ interviews</div>
                <div className="text-sm text-muted-foreground opacity-80">across importers and co-ops, mapping the document flow before any build</div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xs font-normal mb-3 uppercase tracking-wide text-muted-foreground opacity-80">Role</h3>
            <div className="text-base leading-relaxed text-foreground space-y-0.5">
              <p>Product and Design Lead</p>
              <div className="flex flex-wrap gap-1.5 mt-2">
                {["Web", "Document Automation"].map((tag) => (
                  <span
                    key={tag}
                    className="inline-block px-2 py-0.5 text-[13px] tracking-tight rounded-md bg-[#E8E3DD] text-[#6B5D4F]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {CONDUIT_IMAGES.map((image, idx) => (
            <div
              key={idx}
              className="relative aspect-[4/3] overflow-hidden rounded-lg bg-gradient-to-br from-[#4A4038] via-[#2E2822] to-[#1A1613] flex items-center justify-center p-4"
            >
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(232,227,221,0.16),transparent_60%)] pointer-events-none" />
              <img
                src={image.src}
                alt={image.alt}
                className="relative z-10 max-h-full max-w-full object-contain rounded-md shadow-2xl ring-1 ring-white/10"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
