"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowLeft } from "lucide-react"
import { ScrollToTop } from "@/components/scroll-to-top"
import { Header } from "@/components/header"

export default function PAACaseStudy() {
  return (
    <div className="min-h-screen bg-background">
      <ScrollToTop />
      <Header />

      <div className="max-w-7xl mx-auto pt-24 flex flex-col">
        <div className="flex w-full items-start">
          <div className="hidden lg:block w-56 shrink-0 px-8 lg:px-12" aria-hidden />
          <aside className="hidden lg:block w-56 px-8 lg:px-12 fixed top-24 left-8 lg:left-[max(0px,calc((100vw-80rem)/2))]" aria-label="Case study navigation">
            <Link
              href="/#work"
              scroll={false}
              className="block text-xs font-mono tracking-wider uppercase text-muted-foreground hover:text-foreground transition-colors mb-10 leading-none"
            >
              <span className="inline-flex items-baseline gap-2">
                <ArrowLeft className="w-3 h-3 shrink-0" />
                All projects
              </span>
            </Link>
            <nav className="space-y-4" aria-label="Case study sections">
              <a href="#tldr" className="block text-[15px] text-muted-foreground hover:text-foreground transition-colors">
                TLDR
              </a>
              <a href="#overview" className="block text-[15px] text-muted-foreground hover:text-foreground transition-colors">
                Overview
              </a>
              <a href="#challenge" className="block text-[15px] text-muted-foreground hover:text-foreground transition-colors">
                The Challenge
              </a>
              <a href="#explorations" className="block text-[15px] text-muted-foreground hover:text-foreground transition-colors">
                Design Explorations
              </a>
              <a href="#solution" className="block text-[15px] text-muted-foreground hover:text-foreground transition-colors">
                The Solution
              </a>
              <a href="#outcome" className="block text-[15px] text-muted-foreground hover:text-foreground transition-colors">
                The Outcome
              </a>
            </nav>
          </aside>
          <main className="flex-1 px-8 lg:px-12 pb-20 lg:pb-24">
            <div className="mb-12 max-w-[750px]">
              <h1 className="font-serif text-2xl md:text-3xl lg:text-4xl tracking-[-0.02em] leading-[1.2] mb-4">
                PAA: Scaling Clinical Efficiency through AI-Driven Workflows
              </h1>
              <p className="text-[17px] leading-relaxed text-muted-foreground">
                Transforming a high-density data environment into a prioritized, actionable interface for post-acute care.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-4 mb-4 pb-8 max-w-[750px]">
              <div>
                <p className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground mb-2">Role</p>
                <p className="text-[15px] leading-relaxed">Lead Designer</p>
              </div>
              <div>
                <p className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground mb-2">Context</p>
                <p className="text-[15px] leading-relaxed">Post-acute care platform</p>
              </div>
              <div>
                <p className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground mb-2">Team</p>
                <p className="text-[15px] leading-relaxed">2 PMs, Engineering</p>
              </div>
              <div>
                <p className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground mb-2">Platform</p>
                <div className="flex flex-wrap gap-1.5">
                  {["Web", "Dashboard"].map((platform) => (
                    <span
                      key={platform}
                      className="inline-block px-2 py-0.5 text-[13px] rounded-md bg-[#E8E3DD] text-[#6B5D4F]"
                    >
                      {platform}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="mb-10 max-w-[750px]">
              <div className="rounded-xl overflow-hidden">
                <Image
                  src="/images/paa-cover.png"
                  alt="PAA dashboard"
                  width={2416}
                  height={1932}
                  unoptimized
                  className="w-full h-auto object-cover"
                  sizes="(max-width: 768px) 100vw, 750px"
                />
              </div>
            </div>

            <section id="tldr" className="mb-10 p-8 bg-[#F5F3F0] rounded-xl max-w-[750px]">
              <h2 className="font-serif text-[1.75rem] leading-[1.2] tracking-[-0.02em] mb-4 text-balance">At a glance</h2>

              <ul className="space-y-2 text-[17px] leading-relaxed max-w-[750px]">
                <li className="flex gap-3">
                  <span className="text-muted-foreground mt-0.5">•</span>
                  <span className="text-muted-foreground"><strong className="font-medium text-foreground">Impact:</strong> The redesigned dashboard is live, shifting the team from reactive fire-fighting to proactive care management.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-muted-foreground mt-0.5">•</span>
                  <span className="text-muted-foreground"><strong className="font-medium text-foreground">Efficiency:</strong> 40% time saved by eliminating the need to hunt for patient status and missed documents.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-muted-foreground mt-0.5">•</span>
                  <span className="text-muted-foreground"><strong className="font-medium text-foreground">Execution:</strong> Introduced a tiered system with time-sensitivity categorization and contextual messaging integration.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-muted-foreground mt-0.5">•</span>
                  <span className="text-muted-foreground"><strong className="font-medium text-foreground">Next:</strong> Analysis of user behavior to refine the AI categorization logic for future releases.</span>
                </li>
              </ul>
            </section>

            <section id="overview" className="mb-10">
              <p className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground mb-2">Overview</p>
              <h2 className="font-serif text-[1.75rem] leading-[1.2] tracking-[-0.02em] mb-4 text-balance">
                About PAA
              </h2>
              <div className="space-y-3 text-[17px] leading-relaxed text-muted-foreground max-w-[750px]">
                <p>
                  PAA is an AI-based platform providing real-time predictive analytics to manage patient care in post-acute settings. As the lead designer, I spearheaded the dashboard redesign to solve critical bottlenecks in clinician task management. The goal was to transform a high-density data environment into a prioritized, actionable interface that reduces patient service delays.
                </p>
              </div>
            </section>

            <section id="challenge" className="mb-10">
              <p className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground mb-2">The Challenge</p>
              <h2 className="font-serif text-[1.75rem] leading-[1.2] tracking-[-0.02em] mb-4 text-balance">
                Clinicians drowning in a &quot;flat&quot; information architecture
              </h2>

              <div className="space-y-5 text-[17px] leading-relaxed text-muted-foreground max-w-[750px] mb-8">
                <p>
                  The legacy system treated all tasks as equal, causing cognitive fatigue and missed deadlines.
                </p>
              </div>

              <div className="mb-8 max-w-[750px]">
                <div className="rounded-xl overflow-hidden">
                  <Image
                    src="/images/paa-0.png"
                    alt="Task breakdown by category and age with no clear prioritization cues"
                    width={3250}
                    height={1780}
                    unoptimized
                    className="w-full h-auto object-cover"
                    sizes="(max-width: 768px) 100vw, 750px"
                  />
                </div>
                <p className="mt-2 text-sm text-muted-foreground">Task breakdown by category and age with no clear prioritization cues</p>
              </div>

              <div className="space-y-4 max-w-[750px]">
                <div>
                  <h3 className="font-serif text-[1.375rem] leading-[1.3] tracking-[-0.02em] mb-3 font-medium">
                    Prioritization Paralysis
                  </h3>
                  <p className="text-[17px] leading-relaxed text-muted-foreground">
                    No visual distinction between &quot;past due&quot; and &quot;due today&quot; tasks.
                  </p>
                </div>

                <div>
                  <h3 className="font-serif text-[1.375rem] leading-[1.3] tracking-[-0.02em] mb-3 font-medium">
                    Information Silos
                  </h3>
                  <p className="text-[17px] leading-relaxed text-muted-foreground">
                    Critical document requests were buried in a separate chat tab, isolated from the clinical task list.
                  </p>
                </div>

                <div>
                  <h3 className="font-serif text-[1.375rem] leading-[1.3] tracking-[-0.02em] mb-3 font-medium">
                    Service Gaps
                  </h3>
                  <p className="text-[17px] leading-relaxed text-muted-foreground">
                    Lack of urgency indicators led to a high volume of patients not being served in time.
                  </p>
                </div>
              </div>
            </section>

            <section id="explorations" className="mb-10">
              <p className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground mb-2">Design Explorations</p>
              <h2 className="font-serif text-[1.75rem] leading-[1.2] tracking-[-0.02em] mb-4 text-balance">
                Balancing Density &amp; Feasibility
              </h2>

              <div className="space-y-5 text-[17px] leading-relaxed text-muted-foreground max-w-[750px] mb-8">
                <p>
                  I developed 30+ screen iterations, moving from high-level concepting to granular stress-testing with the engineering team.
                </p>
              </div>

              <div className="mb-10 max-w-[750px]">
                <div className="rounded-xl overflow-hidden">
                  <Image
                    src="/images/paa-3.png"
                    alt="PAA dashboard design variations: tile interactions, filters, message integration, and urgency indicators"
                    width={4740}
                    height={3450}
                    unoptimized
                    className="w-full h-auto object-cover"
                    sizes="(max-width: 768px) 100vw, 750px"
                  />
                </div>
                <p className="mt-2 text-sm text-muted-foreground">Design variations &amp; key flows</p>
              </div>

              <div className="space-y-6 max-w-[750px]">
                <div>
                  <h3 className="font-serif text-[1.375rem] leading-[1.3] tracking-[-0.02em] mb-3 font-medium">
                    Phase 1: Structural Discovery
                  </h3>
                  <p className="text-[17px] leading-relaxed text-muted-foreground">
                    I explored different mental models for task grouping. Initial wireframes focused on a unified feed, but user testing revealed that clinicians needed a &quot;separation of concerns&quot; between immediate risks and general maintenance. The first iteration introduced a patient table showing who needs to be served based on priorities, plus a suggested task categorization that covers the full care journey—from admission through discharge.
                  </p>
                </div>

                <div className="mt-8 max-w-[750px]">
                  <div className="rounded-xl overflow-hidden">
                    <Image
                      src="/images/paa-1.png"
                      alt="First iteration: patient table with prioritization and new task categorization covering admission to discharge"
                      width={2895}
                      height={1302}
                      unoptimized
                      className="w-full h-auto object-cover"
                      sizes="(max-width: 768px) 100vw, 750px"
                    />
                  </div>
                  <p className="mt-2 text-sm text-muted-foreground">First iteration: patient table by priority and task categorization across admission to discharge</p>
                </div>

                <div>
                  <h3 className="font-serif text-[1.375rem] leading-[1.3] tracking-[-0.02em] mb-3 font-medium">
                    Phase 2: Technical Feasibility &amp; Trade-offs
                  </h3>
                  <p className="text-[17px] leading-relaxed text-muted-foreground">
                    After validating the &quot;Action vs. Overview&quot; model, I focused on the micro-interactions. In a clinical setting, every extra click is a distraction. I audited the existing task flow and identified an opportunity to save 40% of clinician time that was being lost to hunting for patient status and missed documents.
                  </p>
                </div>

                <div>
                  <p className="text-[17px] leading-relaxed text-muted-foreground">
                    I led deep-dives with the 2 Product Managers and Engineering to audit data latency. We debated the &quot;Cost of Attention,&quot; specifically how to surface document requests from the chat without cluttering the clinical UI. This led to the &quot;Actionable Tile&quot; pattern, where &quot;Unread Messages&quot; are no longer hidden in the patient profiles but high-level entry points.
                  </p>
                </div>

                <div className="rounded-xl overflow-hidden max-w-[750px] my-8">
                  <Image
                    src="/images/paa-4.png"
                    alt="Actionable Tile pattern with contextual modals and workflows"
                    width={5688}
                    height={2790}
                    unoptimized
                    className="w-full h-auto object-cover"
                    sizes="(max-width: 768px) 100vw, 750px"
                  />
                </div>

                <div>
                  <p className="text-[17px] leading-relaxed text-muted-foreground">
                    Instead of a separate chat tab, I implemented a system of slide-out drawers and modals that keep the patient&apos;s clinical data in view while discussing document needs.
                  </p>
                </div>

                <div className="max-w-[750px] my-8">
                  <div className="rounded-xl overflow-hidden">
                    <Image
                      src="/images/paa-2.png"
                      alt="Modal keeping patient clinical data in view while discussing document needs"
                      width={2916}
                      height={2085}
                      unoptimized
                      className="w-full h-auto object-cover"
                      sizes="(max-width: 768px) 100vw, 750px"
                    />
                  </div>
                  <p className="mt-2 text-sm text-muted-foreground">Modal with patient context in view</p>
                </div>
              </div>
            </section>

            <section id="solution" className="mb-10">
              <p className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground mb-2">The Solution</p>
              <h2 className="font-serif text-[1.75rem] leading-[1.2] tracking-[-0.02em] mb-4 text-balance">
                A New Hierarchy
              </h2>

              <div className="space-y-5 text-[17px] leading-relaxed text-muted-foreground max-w-[750px] mb-6">
                <p>
                  The final design introduces a tiered system that automates the clinician&apos;s triage process.
                </p>
              </div>

              <div className="space-y-6 max-w-[750px]">
                <div>
                  <h3 className="font-serif text-[1.375rem] leading-[1.3] tracking-[-0.02em] mb-3 font-medium">
                    Pending Actions UI
                  </h3>
                  <p className="text-[17px] leading-relaxed text-muted-foreground">
                    High-contrast tiles at the top categorize tasks by time-sensitivity (e.g., &quot;2 past due&quot;) for a quick status check.
                  </p>
                </div>

                <div>
                  <h3 className="font-serif text-[1.375rem] leading-[1.3] tracking-[-0.02em] mb-3 font-medium">
                    Message Integration
                  </h3>
                  <p className="text-[17px] leading-relaxed text-muted-foreground">
                    &quot;Unread Messages&quot; now lives as a primary tile. Clicking a message surfaces a contextual chat overlay, allowing clinicians to review patient&apos;s requests without losing their place on the dashboard.
                  </p>
                </div>

                <div className="max-w-[750px] my-8">
                  <div className="rounded-xl overflow-hidden">
                    <Image
                      src="/images/paa-5.png"
                      alt="Pending Actions tiles, patient table with urgency indicators, and contextual message cues"
                      width={6056}
                      height={3576}
                      unoptimized
                      className="w-full h-auto object-cover"
                      sizes="(max-width: 768px) 100vw, 750px"
                    />
                  </div>
                  <p className="mt-2 text-sm text-muted-foreground">Pending Actions tiles, patient table with urgency indicators, and contextual message cues</p>
                </div>

                <div>
                  <h3 className="font-serif text-[1.375rem] leading-[1.3] tracking-[-0.02em] mb-3 font-medium">
                    Zero-Layer Actions
                  </h3>
                  <p className="text-[17px] leading-relaxed text-muted-foreground">
                    The task table below provides granular control, allowing clinicians to filter by &quot;Due&quot; date, &quot;Task&quot; type, or &quot;Facility&quot; to manage their specific workload.
                  </p>
                </div>
              </div>

            </section>

            <section id="outcome" className="mb-16 p-8 bg-[#F5F3F0] rounded-xl max-w-[750px]">
              <p className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground mb-2">The Outcome</p>
              <h2 className="font-serif text-[1.75rem] leading-[1.2] tracking-[-0.02em] mb-4 text-balance">
                Shifting from reactive to proactive care
              </h2>

              <div className="space-y-5 text-[17px] leading-relaxed text-muted-foreground max-w-[750px] mb-6">
                <p>
                  The redesigned dashboard is live, shifting the team from reactive fire-fighting to proactive care management. Clinicians now have a clear view of what needs attention and can act on it without getting lost in a flat list of tasks.
                </p>
              </div>

              <div className="space-y-4 max-w-[750px]">
                <div>
                  <h3 className="font-serif text-[1.25rem] leading-[1.3] tracking-[-0.02em] mb-2 font-medium text-foreground">
                    Primary KPI
                  </h3>
                  <p className="text-[17px] leading-relaxed text-muted-foreground">
                    Tracking the reduction in &quot;Past Due&quot; task volume per clinician.
                  </p>
                </div>

                <div>
                  <h3 className="font-serif text-[1.25rem] leading-[1.3] tracking-[-0.02em] mb-2 font-medium text-foreground">
                    Quantitative Metrics
                  </h3>
                  <p className="text-[17px] leading-relaxed text-muted-foreground">
                    We are tracking the reduction in &quot;Past Due&quot; task volume and the average &quot;Time-to-Action&quot; for new document requests.
                  </p>
                </div>

                <div>
                  <h3 className="font-serif text-[1.25rem] leading-[1.3] tracking-[-0.02em] mb-2 font-medium text-foreground">
                    Qualitative Feedback
                  </h3>
                  <p className="text-[17px] leading-relaxed text-muted-foreground">
                    Early feedback indicates a perceived improvement in daily workflow efficiency and much higher clarity regarding task categorization.
                  </p>
                </div>

                <div>
                  <h3 className="font-serif text-[1.25rem] leading-[1.3] tracking-[-0.02em] mb-2 font-medium text-foreground">
                    Next Steps
                  </h3>
                  <p className="text-[17px] leading-relaxed text-muted-foreground">
                    Analysis of user behavior to refine the AI categorization logic for future releases.
                  </p>
                </div>
              </div>
            </section>

            <div className="pt-16">
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
    </div>
  )
}
