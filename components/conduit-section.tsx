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
              We shipped an MVP that automated compliance documentation with the rules defined on our side. Testing showed compliance is not one ruleset: it bends with the country and the product, and every serious importer already has its own reading of it. I reframed the product around a pipeline importers configure themselves.
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
                <div className="text-xl font-medium text-foreground mb-0.5">2 flows</div>
                <div className="text-sm text-muted-foreground opacity-80">Extract and Inject, each useful on its own</div>
              </div>
              <div>
                <div className="text-xl font-medium text-foreground mb-0.5">1 unit</div>
                <div className="text-sm text-muted-foreground opacity-80">the reusable pipeline, duplicable and API-triggered</div>
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
      </div>
    </section>
  )
}
