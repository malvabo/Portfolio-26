"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowLeft } from "lucide-react"
import { ScrollToTop } from "@/components/scroll-to-top"
import { Header } from "@/components/header"

export default function PandaDocCaseStudy() {
  return (
    <div className="min-h-screen bg-background">
      <ScrollToTop />
      <Header />

      <div className="flex max-w-7xl mx-auto">
        <aside className="hidden lg:block w-56 px-8 lg:px-12 pt-24 sticky top-24 self-start">
          <Link
            href="/#work"
            scroll={false}
            className="inline-flex items-baseline gap-2 text-xs font-mono tracking-wider uppercase text-muted-foreground hover:text-foreground transition-colors mb-16 leading-none"
          >
            <ArrowLeft className="w-3 h-3 shrink-0" />
            All projects
          </Link>

          <nav className="space-y-4">
            <a href="#tldr" className="block text-[17px] text-muted-foreground hover:text-foreground transition-colors">
              TLDR
            </a>
            <a href="#overview" className="block text-[17px] text-muted-foreground hover:text-foreground transition-colors">
              Overview
            </a>
            <a href="#research" className="block text-[17px] text-muted-foreground hover:text-foreground transition-colors">
              Research
            </a>
            <a href="#solution" className="block text-[17px] text-muted-foreground hover:text-foreground transition-colors">
              Solution
            </a>
            <a href="#outcomes" className="block text-[17px] text-muted-foreground hover:text-foreground transition-colors">
              Outcomes
            </a>
            <a href="#reflection" className="block text-[17px] text-muted-foreground hover:text-foreground transition-colors">
              Reflection
            </a>
          </nav>
        </aside>

        <main className="flex-1 px-8 lg:px-12 pt-24 pb-20 lg:pb-24 max-w-4xl">
          <div className="mb-12">
            <p className="font-mono text-xs text-muted-foreground mb-6 tracking-wider uppercase leading-none">DOCUMENT AUTOMATION</p>
            <h1 className="font-serif text-2xl md:text-3xl lg:text-4xl tracking-[-0.02em] leading-[1.2] mb-4 text-balance">
              PandaDoc: Reducing the &quot;workflow tax&quot;
            </h1>
            <p className="text-[17px] text-muted-foreground leading-relaxed">
              Driving product-led growth through contextual extension design.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-4 mb-8 pb-8 border-b border-border/30">
            <div>
              <p className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground mb-2">Role</p>
              <p className="text-[15px] leading-relaxed">Senior Product Designer, Researcher</p>
            </div>
            <div>
              <p className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground mb-2">Timeline</p>
              <p className="text-[15px] leading-relaxed">Jan 2023 - Dec 2023</p>
            </div>
            <div>
              <p className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground mb-2">Team</p>
              <p className="text-[15px] leading-relaxed">Cross-functional team of 4</p>
            </div>
            <div>
              <p className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground mb-2">Platform</p>
              <p className="text-[15px] leading-relaxed">Web</p>
            </div>
          </div>

          <section id="tldr" className="mb-16 p-8 bg-[#F5F3F0] rounded-xl max-w-3xl">
            <p className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground mb-4">TLDR</p>
            <h2 className="font-serif text-[2rem] leading-[1.2] tracking-[-0.02em] mb-6 text-balance">At a glance</h2>

            <ul className="space-y-3 text-[15px] leading-relaxed max-w-[750px]">
              <li className="flex gap-3">
                <span className="text-muted-foreground mt-0.5">•</span>
                <span><strong className="font-semibold text-foreground">Impact:</strong> Reduced document initiation time by 40% for 50,000+ businesses.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-muted-foreground mt-0.5">•</span>
                <span><strong className="font-semibold text-foreground">Efficiency:</strong> Eliminated the &quot;Context-Switching Tax&quot; by embedding tools into CRMs and Gmail.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-muted-foreground mt-0.5">•</span>
                <span><strong className="font-semibold text-foreground">Execution:</strong> Negotiated a phased V1/V2 rollout to prioritize high-value &quot;Activity Pulse&quot; features.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-muted-foreground mt-0.5">•</span>
                <span><strong className="font-semibold text-foreground">Growth:</strong> Created a new organic acquisition channel via the Chrome Web Store.</span>
              </li>
            </ul>
          </section>

          <div className="mb-12 rounded-xl overflow-hidden">
            <Image
              src="https://framerusercontent.com/images/4DYcZ9CKBrks1ghCYxMeKxQS7uw.png?width=1556&height=1128"
              alt="PandaDoc extension listing in Chrome Web Store"
              width={1556}
              height={1128}
              className="w-full h-auto object-cover"
              style={{ objectPosition: "center center" }}
            />
          </div>

          <section id="overview" className="mb-16">
            <p className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground mb-4">Overview</p>
            <h2 className="font-serif text-[2rem] leading-[1.2] tracking-[-0.02em] mb-6 text-balance">
              The challenge: the context-switching problem
            </h2>
            <div className="space-y-5 text-[17px] leading-relaxed text-muted-foreground max-w-[750px]">
              <p>
                Sales reps operate at high velocity. Every time a rep had to leave their CRM (Salesforce/HubSpot) to check a document status in the PandaDoc web app, they paid a &quot;switching tax.&quot; My objective was to move PandaDoc from a &quot;destination&quot; to a &quot;layer&quot; that lives where the user already works.
              </p>
            </div>
          </section>

          <div className="mb-16 rounded-xl overflow-hidden">
            <Image
              src="https://framerusercontent.com/images/Q0a7y883B2Awo0qETG5pDxG9vo.png?width=1995&height=1657"
              alt="PandaDoc Chrome extension interface overview"
              width={1995}
              height={1657}
              className="w-full h-auto object-cover"
              style={{ objectPosition: "center center" }}
            />
          </div>

          <section id="research" className="mb-16">
            <p className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground mb-4">Research</p>
            <h2 className="font-serif text-[2rem] leading-[1.2] tracking-[-0.02em] mb-6 text-balance">
              The strategy: functional scoping
            </h2>

            <div className="space-y-5 text-[17px] leading-relaxed text-muted-foreground max-w-[750px] mb-8">
              <p>
                The temptation was to build a &quot;lite&quot; version of the whole platform. I fought this by observing sales calls. I realized the user&apos;s primary anxiety wasn&apos;t &quot;editing&quot;—it was &quot;visibility and speed&quot;.
              </p>
            </div>

            <div className="space-y-8 max-w-[750px]">
              <div>
                <h3 className="font-serif text-xl leading-[1.3] tracking-[-0.02em] mb-2">
                  The &quot;activity pulse&quot;
                </h3>
                <p className="text-[17px] leading-relaxed text-muted-foreground">
                  We needed a real-time feed that told reps when a client opened a proposal, allowing them to follow up while the lead was still &quot;warm.&quot;
                </p>
              </div>

              <div>
                <h3 className="font-serif text-xl leading-[1.3] tracking-[-0.02em] mb-2">
                  The template bottleneck
                </h3>
                <p className="text-[17px] leading-relaxed text-muted-foreground">
                  Finding the right contract during a live call was the biggest point of friction.
                </p>
              </div>
            </div>
          </section>

          <section id="solution" className="mb-16">
            <p className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground mb-4">Solution</p>
            <h2 className="font-serif text-[2rem] leading-[1.2] tracking-[-0.02em] mb-6 text-balance">
              The execution: managing technical debt &amp; scope
            </h2>

            <div className="space-y-12 max-w-[750px]">
              <div>
                <h3 className="font-serif text-xl leading-[1.3] tracking-[-0.02em] mb-3">The MVP negotiation</h3>
                <p className="text-[17px] leading-relaxed text-muted-foreground">
                  Working with a team of four, I had to be pragmatic. I negotiated a phased rollout where we delayed &quot;rich notifications&quot; to V2 in favor of a rock-solid &quot;starred &amp; suggested&quot; logic for templates.
                </p>
              </div>

              <div>
                <h3 className="font-serif text-xl leading-[1.3] tracking-[-0.02em] mb-3">Design-to-dev synergy</h3>
                <p className="text-[17px] leading-relaxed text-muted-foreground">
                  To ensure a 12-month project timeline stayed on track, I created a tokenized component library for the extension that matched the core web app. This reduced &quot;redline&quot; time by 50%.
                </p>
              </div>

              <div>
                <h3 className="font-serif text-xl leading-[1.3] tracking-[-0.02em] mb-3">Context-aware UI</h3>
                <p className="text-[17px] leading-relaxed text-muted-foreground">
                  We engineered the extension to &quot;read&quot; the browser context. If a user was on a specific CRM contact page, the extension would automatically surface templates related to that contact&apos;s industry.
                </p>
              </div>
            </div>

            <div className="mt-8 rounded-xl overflow-hidden">
              <Image
                src="https://framerusercontent.com/images/0HlicyTYHrDXHzCAkHkt2wfolY.png?width=1578&height=788"
                alt="PandaDoc extension interface showing document list and templates"
                width={1578}
                height={788}
                className="w-full h-auto object-cover"
                style={{ objectPosition: "center center" }}
              />
            </div>
          </section>

          <section id="outcomes" className="mb-16 p-8 bg-[#F5F3F0] rounded-xl max-w-3xl">
            <p className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground mb-4">Outcomes</p>
            <h2 className="font-serif text-[2rem] leading-[1.2] tracking-[-0.02em] mb-6 text-balance">
              The impact: frictionless automation
            </h2>

            <div className="space-y-5 text-[17px] leading-relaxed text-muted-foreground max-w-[750px]">
              <p>
                <strong className="font-semibold text-foreground">Efficiency:</strong> Estimated 40% reduction in the time required to initiate a new document.
              </p>
              <p>
                <strong className="font-semibold text-foreground">Retention:</strong> The extension became a &quot;sticky&quot; feature, increasing Daily Active Usage (DAU) among our highest-value tiers.
              </p>
              <p>
                <strong className="font-semibold text-foreground">Acquisition:</strong> Leveraged the Chrome Web Store as a new organic funnel, driving new account signups through the &quot;marketplace effect&quot;.
              </p>
            </div>
          </section>

          <section id="reflection" className="mb-16">
            <p className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground mb-4">Reflection</p>
            <h2 className="font-serif text-[2rem] leading-[1.2] tracking-[-0.02em] mb-6 text-balance">
              Lessons learned
            </h2>
            <div className="space-y-5 text-[17px] leading-relaxed text-muted-foreground max-w-[750px]">
              <p>
                Fighting the &quot;lite version of everything&quot; temptation by observing real sales calls kept scope honest: the user&apos;s anxiety was visibility and speed, not editing. That led to the activity pulse and fixing the template bottleneck instead of rebuilding the full product in the extension.
              </p>
              <p>
                Managing technical debt and scope with a team of four meant negotiating explicitly—Rich Notifications to V2, Starred &amp; Suggested first—and investing in a tokenized component library so design-to-dev stayed predictable. Context-aware UI (templates by contact industry) turned the extension into a layer that lives where the user works, which is what made it sticky and drove both retention and acquisition through the Chrome Web Store.
              </p>
            </div>
          </section>

          <div className="border-t border-border/50 pt-16">
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
  )
}
