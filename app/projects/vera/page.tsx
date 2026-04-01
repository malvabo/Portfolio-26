"use client"
import Image from "next/image"
import { BackLinkSidebar, BackLinkFooter } from "@/components/back-link"
import { ScrollToTop } from "@/components/scroll-to-top"
import { Header } from "@/components/header"
import { PasswordGate } from "@/components/password-gate"

export default function VeraCaseStudy() {
  return (
    <PasswordGate password="Mary2026">
    <div className="min-h-screen bg-background">
      <ScrollToTop />
      <Header />

      <div className="max-w-7xl mx-auto pt-24 flex flex-col">
        <div className="flex w-full items-start">
          <div className="hidden lg:block w-56 shrink-0 px-8 lg:px-12" aria-hidden />

          <aside className="hidden lg:block w-56 px-8 lg:px-12 fixed top-24 left-8 lg:left-[max(0px,calc((100vw-80rem)/2))]" aria-label="Case study navigation">
            <BackLinkSidebar />
            <nav className="space-y-4" aria-label="Case study sections">
              <a href="#context"    className="block text-[15px] text-muted-foreground hover:text-foreground transition-colors">Context</a>
              <a href="#discovery"  className="block text-[15px] text-muted-foreground hover:text-foreground transition-colors">Discovery</a>
              <a href="#principles" className="block text-[15px] text-muted-foreground hover:text-foreground transition-colors">Principles</a>
              <a href="#not-built"  className="block text-[15px] text-muted-foreground hover:text-foreground transition-colors">What We Didn&apos;t Build</a>
              <a href="#drawer"     className="block text-[15px] text-muted-foreground hover:text-foreground transition-colors">Inside the Drawer</a>
              <a href="#ranking"    className="block text-[15px] text-muted-foreground hover:text-foreground transition-colors">Ranking Logic</a>
              <a href="#measuring"  className="block text-[15px] text-muted-foreground hover:text-foreground transition-colors">Measuring Success</a>
            </nav>
          </aside>

          <main className="flex-1 px-8 lg:px-12 pb-20 lg:pb-24">

            {/* Header */}
            <div className="mb-8 max-w-[750px]">
              <p className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground mb-3">Amazon · Veeqo · AI Insights</p>
              <h1 className="font-serif text-2xl md:text-3xl lg:text-4xl tracking-[-0.02em] leading-[1.15] mb-4">
                Amazon: Introducing AI insights for sellers
              </h1>
              <p className="text-[17px] leading-relaxed text-muted-foreground">
                Starting from a blank slate - no problem statement, no defined scope - and exploring how AI could surface actionable intelligence inside the platform 50,000+ sellers already lived in.
              </p>
            </div>

            {/* Meta grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-4 mb-10 pb-4 max-w-[750px]">
              <div>
                <p className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground mb-2">Role</p>
                <span className="inline-block px-2 py-0.5 text-[13px] rounded-md bg-[#E8E3DD] text-[#6B5D4F]">Product Designer</span>
              </div>
              <div>
                <p className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground mb-2">Platform</p>
                <span className="inline-block px-2 py-0.5 text-[13px] rounded-md bg-[#E8E3DD] text-[#6B5D4F]">Web · AI / ML</span>
              </div>
              <div>
                <p className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground mb-2">Scope</p>
                <p className="text-[15px] leading-relaxed">0-to-1 AI feature on a legacy platform</p>
              </div>
              <div>
                <p className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground mb-2">Results</p>
                <span className="inline-block px-2 py-0.5 text-[13px] rounded-md bg-[#E8E3DD] text-[#6B5D4F]">Guest area</span>
              </div>
            </div>

            {/* Impact at a glance */}
            <div className="mb-12 max-w-[750px]">
              <p className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground mb-4">Impact at a glance</p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {[
                  { stat: "15s → 3s", label: "Time-to-Label per order" },
                  { stat: "50,000+", label: "Sellers on the platform" },
                  { stat: "0 → 1", label: "AI initiative from scratch" },
                ].map((item) => (
                  <div key={item.stat} className="border border-[#EBEBEB] rounded-xl p-5 bg-white">
                    <p className="font-serif text-[1.75rem] leading-[1.1] tracking-[-0.02em] text-foreground mb-1">{item.stat}</p>
                    <p className="text-[13px] leading-relaxed text-muted-foreground">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Cover images */}
            <div className="mb-12 max-w-[750px]">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[
                  { src: "/images/aivq1.png", alt: "AI shipping rate suggestion with contextual reasoning" },
                  { src: "/images/aivq3.png", alt: "AI-generated actions: shipping savings insights and inventory recommendations" },
                  { src: "/images/aivq2.png", alt: "Ask Vera: conversational analytics with sales performance chart" },
                ].map((img) => (
                  <div key={img.src} className="relative aspect-[4/3] overflow-hidden rounded-xl bg-gray-50 border border-gray-200">
                    <Image src={img.src} alt={img.alt} fill className="object-cover" />
                  </div>
                ))}
              </div>
            </div>

            {/* Context */}
            <section id="context" className="mb-14">
              <p className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground mb-2">Strategic Initiative</p>
              <h2 className="font-serif text-[1.75rem] leading-[1.2] tracking-[-0.02em] mb-4 max-w-[750px]">
                The Challenge: Navigating Ambiguity
              </h2>
              <div className="space-y-4 text-[17px] leading-relaxed text-muted-foreground max-w-[750px]">
                <p>
                  I was brought in to lead a 0-&gt;1 exploration on a platform Veeqo, a part of Amazon Seller Central. There was no problem statement or defined scope. My role was to determine where AI could provide the highest user and business leverage within the product.
                </p>
              </div>
            </section>

            {/* Discovery */}
            <section id="discovery" className="mb-14">
              <p className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground mb-2">Discovery</p>
              <h2 className="font-serif text-[1.75rem] leading-[1.2] tracking-[-0.02em] mb-6 max-w-[750px]">
                Strategic Discovery: Identifying Systematic Trust Collapses
              </h2>

              <div className="space-y-4 text-[17px] leading-relaxed text-muted-foreground max-w-[750px]">
                <p>
                  By auditing the data ecosystem, I realized that while Veeqo sat at the center of the seller&apos;s universe, processing every order, shipment, and stock movement, the data remained &ldquo;silent.&rdquo; I identified a bifurcated user base that had issues with the platform for different reasons:
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-[750px] mt-8 mb-8">
                <div className="border-l-2 border-foreground/20 pl-5 py-1">
                  <p className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground mb-2">Segment 01</p>
                  <p className="font-semibold text-foreground text-[15px] mb-2">The Disengaged and passive</p>
                  <p className="text-[15px] leading-relaxed text-muted-foreground">Cognitive overload led to total abandonment of analytics. The product was providing &ldquo;data&rdquo; but not &ldquo;insights,&rdquo; failing to bridge the gap between numbers and action.</p>
                </div>
                <div className="border-l-2 border-foreground/20 pl-5 py-1">
                  <p className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground mb-2">Segment 02</p>
                  <p className="font-semibold text-foreground text-[15px] mb-2">Power users</p>
                  <p className="text-[15px] leading-relaxed text-muted-foreground">These users were forced to build manual, off-platform infrastructures (CSVs/Spreadsheets) to compensate for Veeqo&apos;s lack of tooling.</p>
                </div>
              </div>
              {/* Competitive landscape */}
              <div className="mt-10 max-w-[750px]">
                <div className="space-y-4 text-[17px] leading-relaxed text-muted-foreground">
                  <p>The market was shifting from Static Reporting to Agentic Guidance. While platforms like Shopify began integrating natural language interfaces, a critical gap remained: the bridge between knowing a trend exists and executing the corrective operational action.</p>
                  <h2 className="font-serif text-[1.75rem] leading-[1.2] tracking-[-0.02em] my-4 max-w-[750px] text-foreground">The &ldquo;unfair advantage&rdquo;: operational depth</h2>
                  <p>While competitors focused on conversational interfaces for general business inquiries, Veeqo occupied a unique position in the stack: the center of the fulfillment engine. By leveraging deep data on inventory movements, carrier performance, and real-time shipping deltas, we could provide &ldquo;Root Cause&rdquo; insights that generalist platforms could not.</p>
                  <p>Unlike Sidekick, which primarily answers questions about what happened, our architecture was designed to suggest what to do next - linking an insight directly to a fulfillment override.</p>
                  <p>The objective wasn&apos;t to build a better chatbot. It was to build a Diagnostic Layer that transformed Veeqo from a tool that tracks business into a system that optimizes it. We moved fast to capture the &ldquo;Expert User&rdquo; market by focusing on trust, context, and the financial bottom line.</p>
                </div>
              </div>
              {/* Defining the framework */}
              <div className="mt-10 max-w-[750px]">
                <h2 className="font-serif text-[1.75rem] leading-[1.2] tracking-[-0.02em] mb-6 max-w-[750px]">Defining the Framework &amp; Organizational Alignment</h2>
                <p className="text-[17px] leading-relaxed text-muted-foreground mb-6">To move the organization from &ldquo;exploration&rdquo; to &ldquo;execution,&rdquo; I led a series of cross-functional strategic workshops.</p>

                <div className="space-y-4 text-[17px] leading-relaxed text-muted-foreground">
                  <p>I mapped the full seller lifecycle to identify high-leverage &ldquo;Intervention Points&rdquo; where AI could reduce operational latency.</p>

                  <p>I synthesized quantitative analytics with historical qualitative research to build a weighted prioritization matrix. I evaluated every potential intervention point across the seller lifecycle against four key dimensions:</p>
                  <div className="border border-[#EBEBEB] rounded-xl p-6 bg-white">
                    <p className="font-semibold text-foreground text-[15px] mb-3">Prioritization framework</p>
                    <ol className="list-decimal pl-5 space-y-2 text-[15px] leading-relaxed text-foreground/70">
                      <li><span className="font-semibold text-foreground">Engagement Potential:</span> how frequently would a seller interact with this feature in their daily workflow?</li>
                      <li><span className="font-semibold text-foreground">Retention Potential:</span> does this solve a deep &ldquo;pain point&rdquo; that keeps a seller on the platform long-term?</li>
                      <li><span className="font-semibold text-foreground">Technical Feasibility:</span> can we leverage our existing data lakes and legacy infrastructure without a 12-month refactor?</li>
                      <li><span className="font-semibold text-foreground">Market Differentiation:</span> does this offer a unique value proposition that competitors like Shopify or ShipStation are missing?</li>
                    </ol>
                  </div>
                  <p>By mapping the seller journey against these criteria, I was able to systematically rule out &ldquo;distraction&rdquo; features. For example, store setup automation was high on initial activation, but it was a &ldquo;one-time&rdquo; event. It lacked the recurring habit-building and long-term differentiation needed for a core AI investment. I recommended we deprioritize this.</p>
                  <p>The framework revealed two clear winners that scored highest across all four signals:</p>
                  <div className="space-y-3">
                    <div className="border-l-2 border-foreground/20 pl-4">
                      <p><span className="font-semibold text-foreground">Shipping Rate Intelligence.</span> This is the highest-frequency touchpoint in Veeqo. By optimizing this daily micro-decision, we could directly influence operational retention - making the tool indispensable to the seller&apos;s bottom line.</p>
                    </div>
                    <div className="border-l-2 border-foreground/20 pl-4">
                      <p><span className="font-semibold text-foreground">Predictive Analytics Insights:</span> This was our Unfair Advantage. Because Veeqo already owned the deep order and inventory data, we had the &ldquo;raw materials&rdquo; to build a diagnostic layer that competitors were not yet offering.</p>
                    </div>
                  </div>

                  <p>I defined the North Star Metric for the AI initiative, aligning Engineering and Product leadership on a phased rollout that balanced immediate &ldquo;Quick Wins&rdquo; with long-term platform scalability.</p>
                </div>
              </div>
            </section>

            {/* Principles */}
            <section id="principles" className="mb-14">
              <p className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground mb-2">Principles</p>
              <h2 className="font-serif text-[1.75rem] leading-[1.2] tracking-[-0.02em] mb-6 max-w-[750px]">
                Three principles defined at the very beginning
              </h2>
              <div className="space-y-4 max-w-[750px]">
                {[
                  {
                    title: "Explainability first",
                    body: "Every insight must show its reasoning because sellers do not act on things they cannot verify. This is not a nice-to-have - it is the core trust mechanism.",
                  },
                  {
                    title: "Design for low trust",
                    body: "The interface cannot assume sellers will believe what it tells them. Every element needs to earn credibility through visible sources, visible rationale, and the ability to dig deeper.",
                  },
                  {
                    title: "Context preservation",
                    body: "AI should not pull sellers away from what they are doing. It should surface inside the flow they are already in, with the insight appearing next to the relevant data rather than on a separate page.",
                  },
                ].map((p) => (
                  <div key={p.title} className="border border-[#EBEBEB] rounded-xl p-6 bg-white">
                    <p className="font-semibold text-foreground text-[15px] mb-2">{p.title}</p>
                    <p className="text-[15px] leading-relaxed text-foreground/70">{p.body}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Flows */}
            <section id="not-built" className="mb-14">
              <p className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground mb-2">Architecture</p>
              <h2 className="font-serif text-[1.75rem] leading-[1.2] tracking-[-0.02em] mb-6 max-w-[750px]">
                Context-Aware Intelligence
              </h2>
              <p className="text-[17px] leading-relaxed text-muted-foreground max-w-[750px] mb-8">
                Instead of a single &ldquo;AI feature,&rdquo; I created a modal entry system designed to meet sellers at varying levels of intent.
              </p>
              <div className="space-y-4 max-w-[750px] text-[17px] leading-relaxed text-muted-foreground">
                <h3 className="font-serif text-[1.375rem] leading-[1.3] tracking-[-0.02em] mb-1 font-medium text-foreground">Global Ingress (The Persistent Mental Model)</h3>
                <p>Positioned in the top navigation to establish AI as a platform-level utility rather than a localized feature. This was a strategic pragmatic choice: it bypassed the technical debt of fragmented page templates while providing a unified &ldquo;Intelligence Layer&rdquo; across the entire ecosystem.</p>
                <h3 className="font-serif text-[1.375rem] leading-[1.3] tracking-[-0.02em] mb-1 font-medium text-foreground">Embedded Insight Cards</h3>
                <p>On data-heavy pages like the Profit Analyzer, I moved from &ldquo;Data Visualization&rdquo; to &ldquo;Data Interpretation.&rdquo; We shift the burden of synthesis from the user to the system.</p>
                <h3 className="font-serif text-[1.375rem] leading-[1.3] tracking-[-0.02em] mb-1 font-medium text-foreground">Inline Operational Context</h3>
                <p>By embedding insights directly into the high-velocity inventory workflow, I reduced the interaction cost of pivoting between analysis and execution.</p>
              </div>
            </section>

            {/* Automating the Shipping Rate */}
            <section className="mb-14">
              <h2 className="font-serif text-[1.75rem] leading-[1.2] tracking-[-0.02em] mb-6 max-w-[750px]">
                Automating the Shipping Rate
              </h2>
              <div className="space-y-4 text-[17px] leading-relaxed text-muted-foreground max-w-[750px]">
                <p>The most frequent high-friction task in Veeqo was the manual selection of shipping rates. Sellers were forced to scroll through dozens of nearly identical options, mentally calculating the trade-offs between cost, delivery speed, and carrier reliability.</p>
                <p>I collaborated with the engineering team to define a recommendation logic that balances three competing business signals. We moved towards a multi-objective optimization model:</p>
                <div className="border border-[#EBEBEB] rounded-xl p-6 bg-white space-y-4">
                  {[
                    { title: "The Economic Floor (Cheapest)", body: "Aggregating real-time rates to find the absolute lowest cost for the specific parcel dimensions." },
                    { title: "The Performance Ceiling (Fastest)", body: "Analyzing historical carrier performance and current network congestion to guarantee the \u201cDeliver-By\u201d date." },
                    { title: "The Reliability Filter (Most Trusted)", body: "Factoring in the seller\u2019s own historical experience with specific carriers to avoid recurring issues like \u201cLost in Transit\u201d or \u201cDelayed Pickups.\u201d" },
                  ].map((item) => (
                    <div key={item.title}>
                      <p className="font-semibold text-foreground text-[15px] mb-1">{item.title}</p>
                      <p className="text-[15px] leading-relaxed text-foreground/70">{item.body}</p>
                    </div>
                  ))}
                </div>
                <p>Instead of overwhelming the user with raw data, I introduced &ldquo;The Prime Suggestion&rdquo; as a high-visibility highlight at the top of the selection drawer. Each suggestion is accompanied by a Reasoning Tag, such as &ldquo;Fastest + Cheapest&rdquo; or &ldquo;Best Value: Saves $1.40 with 2-day delivery,&rdquo; to provide immediate clarity on the underlying logic.</p>
                <p>I also maintained the Decision Support Layer by keeping the full list but adding color-coded Visual Affordances to signal which other rates remain &ldquo;Near-Optimal.&rdquo; This automated approach to fulfillment successfully reduced the &ldquo;Time-to-Label&rdquo; from an average of 15 seconds per order to under 3 seconds.</p>
              </div>
            </section>

            {/* Inside the drawer */}
            <section id="drawer" className="mb-14">
              <p className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground mb-2">Design decisions</p>
              <h2 className="font-serif text-[1.75rem] leading-[1.2] tracking-[-0.02em] mb-6 max-w-[750px]">
                Modal: passive mode and conversational chat
              </h2>
              <div className="space-y-4 text-[17px] leading-relaxed text-muted-foreground max-w-[750px] mb-8">
                <p>
                  The drawer operates in two modes. Passive mode shows the full ranked list of insights across all categories, highest impact first, for sellers who want a complete picture of what is happening in their store. Conversational chat mode lets sellers ask questions and interrogate the reasoning behind any specific insight.
                </p>
                <p>
                  The dual mode was designed around a specific user behaviour observed in research. Some sellers read the insight, click the CTA, and act immediately. Others - particularly older and less technical sellers - do not act until they understand why the insight was surfaced. Statements like &ldquo;I prefer tools I have used for years&rdquo; came up repeatedly in interviews. These sellers are not resistant to AI; they are resistant to recommendations they cannot verify.
                </p>
                <p>
                  The conversational mode exists specifically for that group. Every insight in both modes shows its reasoning so that the recommendation is always something the seller can interrogate before they trust it.
                </p>
                <p>
                  I designed a standardized insight template.
                </p>
                <p>
                  Any team (Tax, Inventory, or Marketing) can &ldquo;plug&rdquo; their data into our UI components. This ensures that no matter who builds the feature, it looks and feels like part of the same cohesive system.
                </p>
              </div>
            </section>

            {/* Ranking logic */}
            <section id="ranking" className="mb-14">
              <p className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground mb-2">Surfacing logic</p>
              <h2 className="font-serif text-[1.75rem] leading-[1.2] tracking-[-0.02em] mb-6 max-w-[750px]">
                Ranking and surfacing logic
              </h2>
              <div className="space-y-4 text-[17px] leading-relaxed text-muted-foreground max-w-[750px]">
                <p>I collaborated with Data Science and Engineering to define the heuristic ranking logic.</p>
                <p>The system ranks insights using three signals applied in order. Financial impact comes first: the insight with the largest effect on the seller&apos;s business in dollar or percentage terms surfaces at the top. Time sensitivity breaks ties: an issue that will materialise in 8 days outranks a trend that has been stable for a month. Confidence level is the final filter: insights the model is less certain about are held back until the signal is stronger rather than surfaced as noise.</p>
              </div>
            </section>

            {/* Measuring success */}
            <section id="measuring" className="mb-14">
              <p className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground mb-2">Measuring success</p>
              <h2 className="font-serif text-[1.75rem] leading-[1.2] tracking-[-0.02em] mb-6 max-w-[750px]">
                What we tracked and why
              </h2>
              <div className="space-y-4 max-w-[750px]">
                {[
                  {
                    metric: "Shipping cost delta",
                    body: "Compares average shipping spend before and after AI rate suggestions - testing real-world business value rather than just engagement.",
                  },
                  {
                    metric: "Insight-to-action conversion",
                    body: "Measures how many sellers who see an insight then click the CTA and reach the destination page - testing whether explainability is building enough trust to drive action.",
                  },
                  {
                    metric: "Drawer retention",
                    body: "Tests habit formation and whether the system is becoming part of the daily workflow rather than a one-time curiosity.",
                  },
                ].map((item) => (
                  <div key={item.metric} className="p-6 bg-[#F5F3F0] rounded-xl">
                    <p className="font-semibold text-foreground text-[17px] mb-2">{item.metric}</p>
                    <p className="text-[17px] leading-relaxed text-muted-foreground">{item.body}</p>
                  </div>
                ))}
              </div>
            </section>

            <div className="border-t border-border/50 pt-16">
              <BackLinkFooter />
            </div>
          </main>
        </div>
      </div>
    </div>
    </PasswordGate>
  )
}
