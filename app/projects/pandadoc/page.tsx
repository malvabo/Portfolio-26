"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowLeft } from "lucide-react"
import { ScrollToTop } from "@/components/scroll-to-top"
import { Header } from "@/components/header"
import { Button } from "@/components/ui/button"

export default function PandaDocCaseStudy() {
  return (
    <div className="min-h-screen bg-background">
      <ScrollToTop />
      <Header />

      <div className="flex max-w-7xl mx-auto">
        <aside className="hidden lg:block w-56 px-8 lg:px-12" style={{ paddingTop: "calc(3rem + 3.5rem)" }}>
          <Button variant="ghost" size="sm" asChild className="w-full justify-start px-0">
            <Link href="/#work" className="flex items-center gap-2">
              <ArrowLeft className="w-4 h-4" />
              All projects
            </Link>
          </Button>
        </aside>

        <main className="flex-1 px-8 lg:px-12 pt-12 pb-20 lg:pb-24 max-w-4xl">
          <div className="mb-12">
            <p className="font-mono text-xs text-muted-foreground mb-6 tracking-wider uppercase">DOCUMENT AUTOMATION</p>
            <p className="font-mono text-xs text-muted-foreground mb-4 tracking-wider uppercase">
              PANDADOC • JAN 2023 - DEC 2023
            </p>
            <h1 className="font-serif text-2xl md:text-3xl lg:text-4xl tracking-[-0.02em] leading-[1.2] mb-4 text-balance">
              PandaDoc Chrome extension: document workflow in the browser
            </h1>
            <p className="text-[17px] text-muted-foreground leading-relaxed">
              Design of a Chrome extension enabling 50K+ teams to move from draft to signed without leaving inbox or CRM
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

            <ul className="space-y-5 text-[17px] leading-relaxed max-w-[750px]">
              <li className="flex gap-4">
                <span className="text-muted-foreground mt-1">•</span>
                <span>
                  Sales and marketing teams were using PandaDoc alongside CRM and email. The team designed a Chrome
                  extension that sits in the browser and supports the path from draft to signed with less
                  context-switching.
                </span>
              </li>
              <li className="flex gap-4">
                <span className="text-muted-foreground mt-1">•</span>
                <span>
                  Research surfaced three real pains: “Did they even open my proposal?”, “I need to draft during the
                  call,” and “I use the same few templates—why do I have to hunt for them?”
                </span>
              </li>
              <li className="flex gap-4">
                <span className="text-muted-foreground mt-1">•</span>
                <span>
                  The product was delivered in phases: core flow first, then starred templates for quick access.
                  Richer in-app notifications were planned for a later release to allow earlier learning from
                  usage data.
                </span>
              </li>
              <li className="flex gap-4">
                <span className="text-muted-foreground mt-1">•</span>
                <span>
                  Launched to a beta cohort; we’re watching retention, new signups from the extension, and conversion to
                  paid—and working with marketing so the Chrome Store listing speaks to the people who need it most.
                </span>
              </li>
            </ul>
          </section>

          <div className="mb-12 rounded-xl overflow-hidden">
            <Image
              src="https://framerusercontent.com/images/Q0a7y883B2Awo0qETG5pDxG9vo.png?width=1995&height=1657"
              alt="PandaDoc Chrome extension interface overview"
              width={1995}
              height={1657}
              className="w-full h-auto object-cover"
              style={{ objectPosition: "center center" }}
            />
          </div>

          <section id="overview" className="mb-16">
            <p className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground mb-4">Overview</p>
            <h2 className="font-serif text-[2rem] leading-[1.2] tracking-[-0.02em] mb-6 text-balance">
              Context and rationale
            </h2>
            <div className="space-y-5 text-[17px] leading-relaxed text-muted-foreground max-w-[750px]">
              <p>
                PandaDoc is a document automation platform for proposals, contracts, and eSign, and is G2’s top-rated solution in its category. User research showed that many users worked primarily in email and CRM; they switched to PandaDoc only to create or check documents, which led to context loss and limited visibility into document status (e.g. whether a proposal had been opened).
              </p>
              <p>
                The objective was to support existing workflows rather than replace the main product. A Chrome extension could run alongside inbox and CRM, allowing users to create, send, and track documents within the same environment. For existing customers this reduced friction; for new users discovering PandaDoc via the Chrome Web Store, it offered a lower-friction entry point before adoption of the full application.
              </p>
            </div>
          </section>

          <div className="mb-16 rounded-xl overflow-hidden">
            <Image
              src="https://framerusercontent.com/images/4DYcZ9CKBrks1ghCYxMeKxQS7uw.png?width=1556&height=1128"
              alt="PandaDoc extension listing in Chrome Web Store"
              width={1556}
              height={1128}
              className="w-full h-auto object-cover"
              style={{ objectPosition: "center center" }}
            />
          </div>

          <section id="research" className="mb-16">
            <p className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground mb-4">Research</p>
            <h2 className="font-serif text-[2rem] leading-[1.2] tracking-[-0.02em] mb-6 text-balance">
              Research insights
            </h2>

            <div className="space-y-8 max-w-[750px]">
              <div>
                <h3 className="font-serif text-xl leading-[1.3] tracking-[-0.02em] mb-2">
                  “Have they already reviewed my proposal?”
                </h3>
                <p className="text-[17px] leading-relaxed text-muted-foreground">
                  Visibility into when a prospect opened a document was reported as critical for timely follow-up. Users received many notification emails from PandaDoc and had difficulty distinguishing what required action. The need was not more notifications but a single place to see who had viewed which documents.
                </p>
              </div>

              <div>
                <h3 className="font-serif text-xl leading-[1.3] tracking-[-0.02em] mb-2">
                  “I need to draft the docs in real time during the call”
                </h3>
                <p className="text-[17px] leading-relaxed text-muted-foreground">
                  Sales and marketing users often draft documents while on calls, aligning scope and content in real time. They needed to create proposals or one-pagers during the conversation rather than deferring to a follow-up. The extension therefore had to support fast, minimal-step creation with familiar patterns and clear save locations.
                </p>
              </div>

              <div>
                <h3 className="font-serif text-xl leading-[1.3] tracking-[-0.02em] mb-2">
                  “There are too many templates—I usually need the same few”
                </h3>
                <p className="text-[17px] leading-relaxed text-muted-foreground">
                  Although a large template library is a product strength, many users reported relying on a small subset of templates repeatedly. A “starred” or favorites layer was introduced to surface frequently used templates and reduce time spent searching, prioritizing efficiency over discovery.
                </p>
              </div>
            </div>
          </section>

          <section id="solution" className="mb-16">
            <p className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground mb-4">Solution</p>
            <h2 className="font-serif text-[2rem] leading-[1.2] tracking-[-0.02em] mb-6 text-balance">
              Solution approach and prioritization
            </h2>

            <div className="space-y-8 max-w-[750px]">
              <p className="text-[17px] leading-relaxed text-muted-foreground">
                The initial scope included: view tracking, in-browser drafting, template shortcuts, rich in-app
                notifications. Alignment with engineering made it clear that delivering all of these in v1 would
                delay launch and limit learning from real usage. The team prioritized three core capabilities: opening and creating documents from the browser,
                visibility into when a proposal had been viewed, and quick access to frequently used templates.
                Richer, contextual notifications (as an alternative to email) were deferred to v2 so the extension
                could be released earlier and usage patterns could inform the next phase.
              </p>

              <p className="text-[17px] leading-relaxed text-muted-foreground">
                The starred-templates feature was informed by research showing that users relied on a small set of
                templates. The design allowed users to mark their most-used templates and surface them at the top of
                the extension. This reduced search time and supported faster drafting. This was delivered in a follow-up release after validation of the core flow.
              </p>
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
              Rollout and metrics
            </h2>

            <div className="space-y-5 text-[17px] leading-relaxed text-muted-foreground max-w-[750px]">
              <p>
                The extension was released to a beta cohort of active PandaDoc users—those most affected by
                context-switching between tools. A phased rollout was chosen to observe usage in real workflows: retention,
                sharing, and impact on use of the main product. The
                answers will drive what we build next—including whether and how we bring those “rich” notifications
                back.
              </p>
              <p className="font-medium text-foreground text-[17px]">Metrics in focus:</p>
              <ul className="space-y-3 text-[17px]">
                <li className="flex gap-4">
                  <span className="mt-1">•</span>
                  <span>Extension retention (ongoing use vs. drop-off after first use)</span>
                </li>
                <li className="flex gap-4">
                  <span className="mt-1">•</span>
                  <span>New signups attributed to the Chrome Web Store and their subsequent behavior</span>
                </li>
                <li className="flex gap-4">
                  <span className="mt-1">•</span>
                  <span>Conversion to paid—for both new users and existing users who adopt the extension</span>
                </li>
              </ul>
              <p>
                The team is also working with marketing to make the store listing speak to the right people: sales and
                revenue teams who are seeking reduced context-switching and document workflow within their existing tools.
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
                Framing the problem around the user’s workflow—rather than as a product feature—clarified the extension’s role. Focusing on what happens between sending a proposal and closing a deal made the requirements easier to prioritize. User quotes such as “Have they already reviewed my proposal?” helped align the team on who the product was for and what problems it needed to solve.
              </p>
              <p>
                Involving engineering early enabled realistic scoping and explicit tradeoffs. Deferring rich notifications to v2 allowed the team to ship a smaller first version and learn from usage instead of cutting scope at the last minute. The approach of shipping a focused release, learning, then expanding is one I aim to apply in future projects.
              </p>
              <p>
                Beta feedback has been constructive: users have highlighted both unmet expectations and underused features. Those signals will inform v2,
                including notification design, potential CRM integration, and refinements to the Chrome Web Store
                positioning for sales and revenue teams.
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
