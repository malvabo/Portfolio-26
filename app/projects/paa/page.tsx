"use client"
import { LightboxImage } from "@/components/lightbox-image"

import Link from "next/link"
import { BackLinkSidebar, BackLinkFooter } from "@/components/back-link"
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
            <BackLinkSidebar />
            <nav className="space-y-4" aria-label="Case study sections">
              <a href="#space" className="block text-[15px] text-muted-foreground hover:text-foreground transition-colors">The Space</a>
              <a href="#problem" className="block text-[15px] text-muted-foreground hover:text-foreground transition-colors">The Problem</a>
              <a href="#discovery" className="block text-[15px] text-muted-foreground hover:text-foreground transition-colors">Discovery</a>
              <a href="#explorations" className="block text-[15px] text-muted-foreground hover:text-foreground transition-colors">Design Exploration</a>
              <a href="#ai" className="block text-[15px] text-muted-foreground hover:text-foreground transition-colors">The AI Layer</a>
            </nav>
          </aside>

          <main className="flex-1 px-8 lg:px-12 pb-20 lg:pb-24">

            {/* Header */}
            <div className="mb-8 max-w-[750px]">
              <h1 className="font-serif text-2xl md:text-3xl lg:text-4xl tracking-[-0.02em] leading-[1.2] mb-4">
                PAA: Designing Clinical Intelligence at the Point of Care
              </h1>
              <p className="text-[17px] leading-relaxed text-muted-foreground">
                Role: Lead Product Designer · Platform: Web Dashboard · Team: 2 PMs, Engineering
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-4 mb-6 pb-4 max-w-[750px]">
              <div>
                <p className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground mb-2">Role</p>
                <p className="text-[15px] leading-relaxed">Lead Product Designer</p>
              </div>
              <div>
                <p className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground mb-2">Platform</p>
                <p className="text-[15px] leading-relaxed">Web Dashboard</p>
              </div>
              <div>
                <p className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground mb-2">Team</p>
                <p className="text-[15px] leading-relaxed">2 PMs, Engineering</p>
              </div>
              <div>
                <p className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground mb-2">Stage</p>
                <span className="inline-block px-2 py-0.5 text-[13px] rounded-md bg-[#E8E3DD] text-[#6B5D4F]">Series C</span>
              </div>
            </div>

            {/* Cover image */}
            <div className="mb-12 max-w-[750px]">
              <div className="rounded-xl overflow-hidden transform-gpu">
                <LightboxImage
                  src="/images/Paa11.png"
                  alt="PAA dashboard"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>

            {/* Impact at a glance */}
            <section id="tldr" className="mb-12 p-8 bg-[#F5F3F0] rounded-xl max-w-[750px]">
              <h2 className="font-serif text-[1.75rem] leading-[1.2] tracking-[-0.02em] mb-4">Impact at a glance</h2>
              <ul className="space-y-2 text-[17px] leading-relaxed">
                <li className="flex gap-3">
                  <span className="text-muted-foreground mt-0.5">•</span>
                  <span className="text-muted-foreground"><strong className="font-medium text-foreground">40% time saved</strong> by eliminating patient status hunting and missed document chasing</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-muted-foreground mt-0.5">•</span>
                  <span className="text-muted-foreground">Shifted care teams from reactive fire-fighting to proactive task management</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-muted-foreground mt-0.5">•</span>
                  <span className="text-muted-foreground">Shipped a tiered urgency system, contextual message integration, and AI-generated clinical documentation within a single dashboard surface</span>
                </li>
              </ul>
            </section>

            {/* The Space */}
            <section id="space" className="mb-12">
              <p className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground mb-2">Context</p>
              <h2 className="font-serif text-[1.75rem] leading-[1.2] tracking-[-0.02em] mb-4 max-w-[750px]">
                The environment
              </h2>
              <div className="space-y-4 text-[17px] leading-relaxed text-muted-foreground max-w-[750px]">
                <p>
                  Post-acute care is one of the highest-stakes settings in healthcare. Patients have just left acute hospital settings. Their care plans are complex, payer authorizations are time-sensitive, and regulatory documentation is non-negotiable.
                </p>
                <p>
                  PAA is an AI-based platform built to manage patient care in post-acute settings. When I joined, the platform was early stage, we didn&apos;t have any editable designs and I had to work with a legacy product created by front end engineer and a product manager without any design strategy.
                </p>
              </div>
            </section>

            {/* The Problem */}
            <section id="problem" className="mb-12">
              <p className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground mb-2">Research</p>
              <h2 className="font-serif text-[1.75rem] leading-[1.2] tracking-[-0.02em] mb-4 max-w-[750px]">
                Problem discovery
              </h2>

              <div className="space-y-4 text-[17px] leading-relaxed text-muted-foreground max-w-[750px] mb-8">
                <p>
                  I ran working sessions with clinical staff, case managers, care coordinators, and admissions teams, structured around a single question: what&apos;s the last thing that made you feel behind?
                </p>
                <p>
                  Every task in the legacy dashboard had the same visual weight. Document requests from physicians were buried in a separate chat tab, disconnected from the task list entirely.
                </p>
              </div>

              {/* Image,centered, full content width */}
              <div className="mb-4 max-w-[750px]">
                <div className="rounded-xl overflow-hidden">
                  <LightboxImage
                    src="/images/paa-0.png"
                    alt="Legacy dashboard,a flat, unsorted task table with no visual urgency hierarchy"
                    width={3250}
                    height={1780}
                    unoptimized
                    className="w-full h-auto object-cover"
                    sizes="(max-width: 768px) 100vw, 750px"
                  />
                </div>
                <p className="mt-3 text-sm text-muted-foreground text-center">Every task looked the same. Past due, due today, due next week, identical visual weight.</p>
              </div>

              <div className="space-y-6 text-[17px] leading-relaxed text-muted-foreground max-w-[750px] mt-10">
                <div>
                  <h3 className="font-serif text-[1.375rem] leading-[1.3] tracking-[-0.02em] mb-2 font-medium text-foreground">Prioritization paralysis</h3>
                  <p>Clinicians had to manually re-triage their entire task list every time they logged in. The interface provided no urgency signal, no distinction between a task that would trigger a regulatory penalty and one that could wait a week.</p>
                </div>

                <div>
                  <h3 className="font-serif text-[1.375rem] leading-[1.3] tracking-[-0.02em] mb-2 font-medium text-foreground">Information silos</h3>
                  <p>In post-acute care, payers and physicians constantly request updated clinical notes, authorizations, and care summaries via messaging. That thread lived in a separate tab, invisible from the clinical task view. Clinicians had to context-switch between two surfaces to understand the full picture of a single patient.</p>
                </div>

                <div>
                  <h3 className="font-serif text-[1.375rem] leading-[1.3] tracking-[-0.02em] mb-2 font-medium text-foreground">No escalation trigger</h3>
                  <p>Without urgency cues, overdue tasks stayed overdue.</p>
                </div>

              </div>
            </section>

            {/* Design Exploration */}
            <section id="explorations" className="mb-12">
              <p className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground mb-2">Design Exploration</p>
              <h2 className="font-serif text-[1.75rem] leading-[1.2] tracking-[-0.02em] mb-4 max-w-[750px]">
                Iterating through many design directions
              </h2>

              <div className="space-y-4 text-[17px] leading-relaxed text-muted-foreground max-w-[750px] mb-8">
                <p>My goal was to solve for these 3 key problems and design a dashboard for the clinicians to get answers to the following questions:</p>
                <ul className="space-y-2 list-none">
                  <li className="flex gap-3"><span className="shrink-0 w-1.5 h-1.5 rounded-full bg-muted-foreground/40 mt-2.5" /><span>What do I have to act on now?</span></li>
                  <li className="flex gap-3"><span className="shrink-0 w-1.5 h-1.5 rounded-full bg-muted-foreground/40 mt-2.5" /><span>Among these tasks, which ones are acute?</span></li>
                  <li className="flex gap-3"><span className="shrink-0 w-1.5 h-1.5 rounded-full bg-muted-foreground/40 mt-2.5" /><span>Which tasks are not a priority but require my contribution to unblock others?</span></li>
                </ul>
                <p>
                  I developed 30+ screen iterations, moving from structural concepting to granular stress-testing.
                </p>
              </div>

              {/* Wireframe spread,centered */}
              <div className="mb-10 max-w-[750px]">
                <div className="rounded-xl overflow-hidden">
                  <LightboxImage
                    src="/images/paa-3.png"
                    alt="Early wireframe iterations,progression from unified feed model to two-tier structure"
                    width={4740}
                    height={3450}
                    unoptimized
                    className="w-full h-auto object-cover"
                    sizes="(max-width: 768px) 100vw, 750px"
                  />
                </div>
                <p className="mt-3 text-sm text-muted-foreground text-center">Progression from a unified feed model (left) to the two-tier structure (right)</p>
              </div>

              <div className="space-y-8 text-[17px] leading-relaxed text-muted-foreground max-w-[750px]">
                <div>
                  <h3 className="font-serif text-[1.375rem] leading-[1.3] tracking-[-0.02em] mb-3 font-medium text-foreground">Challenge 1: Structural model</h3>
                  <p>
                    In the early wireframes I explored a unified prioritized feed, everything in one list, sorted by urgency. Clinicians needed to distinguish between immediate risks (regulatory penalties, care gaps) and general maintenance (ongoing tasks that are important but not urgent).
                  </p>
                </div>
              </div>

              <div className="space-y-6 text-[17px] leading-relaxed text-muted-foreground max-w-[750px]">
                <p>I designed a simple model that has a two-tier structure. A compact row of urgency tiles at the top to answer: am I on fire right now? A filterable task table below to answer: what do I work through next?</p>
              </div>

              <div className="my-10 max-w-[750px]">
                <div className="rounded-xl overflow-hidden">
                  <LightboxImage
                    src="/images/paa-4.png"
                    alt="Old state: messages buried in separate tab vs. new contextual drawer with clinical data visible"
                    width={5688}
                    height={2790}
                    unoptimized
                    className="w-full h-auto object-cover"
                    sizes="(max-width: 768px) 100vw, 750px"
                  />
                </div>
                <p className="mt-3 text-sm text-muted-foreground text-center">Old state (messages buried in separate tab) vs. new contextual drawer, clinical data stays visible</p>
              </div>

              <div className="space-y-6 text-[17px] leading-relaxed text-muted-foreground max-w-[750px]">
                <p>This first design iteration was welcome by the clinical team however I have spotted a problem: the tasks were not grouped based on the priority for the clinician.</p>
                <p>Which led me to further ideation and changing the architecture of the top bar. By running card sorting sessions, I collected the data on how the tasks would be best grouped to reflect the acuity for the clinicians. Pending actions with visual markers of &quot;past due&quot; should help the clinician see where to put the effort at first. Patient overview included tasks and status updates to keep the clinician in loop.</p>
              </div>

              <div className="mt-10 mb-8 max-w-[750px]">
                <div className="rounded-xl overflow-hidden">
                  <LightboxImage
                    src="/images/paa-1.png"
                    alt="Clinician pain points across the shift,login, task review, messaging, documentation"
                    width={2895}
                    height={1302}
                    unoptimized
                    className="w-full h-auto object-cover"
                    sizes="(max-width: 768px) 100vw, 750px"
                  />
                </div>
                <p className="mt-3 text-sm text-muted-foreground text-center">Annotated journey map showing moments of context-switching and status hunting</p>
              </div>

              <div className="space-y-8 text-[17px] leading-relaxed text-muted-foreground max-w-[750px]">
                <div>
                  <h3 className="font-serif text-[1.375rem] leading-[1.3] tracking-[-0.02em] mb-3 font-medium text-foreground">Pending Actions tiles</h3>
                  <p>
                    A compact row of high-contrast tiles at the top of the dashboard. Each tile shows an aggregate count by time-sensitivity category, past due, due today, unread messages. The full urgency picture of a shift is readable in under three seconds.
                  </p>
                </div>
              </div>

              <div className="my-10 max-w-[750px]">
                <div className="rounded-xl overflow-hidden">
                  <LightboxImage
                    src="/images/paa-tasks.png"
                    alt="PAA task table detail"
                    width={1600}
                    height={1000}
                    unoptimized
                    className="w-full h-auto object-cover"
                    sizes="(max-width: 768px) 100vw, 750px"
                  />
                </div>
                <p className="mt-3 text-sm text-muted-foreground text-center">Status hierarchy: tiles surface the critical picture, the table handles the detail</p>
              </div>

              <div className="space-y-8 text-[17px] leading-relaxed text-muted-foreground max-w-[750px]">
                <div>
                  <h3 className="font-serif text-[1.375rem] leading-[1.3] tracking-[-0.02em] mb-3 font-medium text-foreground">Challenge 2: The message problem</h3>
                  <p>
                    Document requests needed to be visible from the clinical surface without cluttering it. After several rounds of exploration (inline threads, notification badges, expandable rows), I landed on the Actionable Tile pattern: messages surface as a primary urgency tile, clicking opens a contextual drawer with the patient&apos;s clinical data alongside the thread. The patient context never disappears.
                  </p>
                </div>
              </div>

              <div className="my-10 max-w-[750px]">
                <div className="rounded-xl overflow-hidden">
                  <LightboxImage
                    src="/images/paa-5.png"
                    alt="Final dashboard,Pending Actions tile row at top, task table below with urgency indicators"
                    width={6056}
                    height={3576}
                    unoptimized
                    className="w-full h-auto object-cover"
                    sizes="(max-width: 768px) 100vw, 750px"
                  />
                </div>
                <p className="mt-3 text-sm text-muted-foreground text-center">Final dashboard: urgency tiles, message tile, and filterable task table</p>
              </div>

              <div className="my-10 max-w-[750px]">
                <div className="rounded-xl overflow-hidden">
                  <LightboxImage
                    src="/images/paa-messages.png"
                    alt="PAA two-tier dashboard structure"
                    width={1600}
                    height={1000}
                    unoptimized
                    className="w-full h-auto object-cover"
                    sizes="(max-width: 768px) 100vw, 750px"
                  />
                </div>
              </div>
            </section>

            {/* The Solution */}
            <section id="solution" className="mb-12">
              <div className="space-y-8 text-[17px] leading-relaxed text-muted-foreground max-w-[750px]">
                <div>
                  <h3 className="font-serif text-[1.375rem] leading-[1.3] tracking-[-0.02em] mb-3 font-medium text-foreground">Zero-layer task table</h3>
                  <p>
                    Below the tiles, a filterable task table gives granular control, filter by due date, task type, facility, or patient.
                  </p>
                  <p className="mt-3">
                    The design principle I used here was progressive disclosure. The interface answers the most urgent question first, then gives you tools to go deeper, for example, click on the Upload documents and instantly see the documents without leaving the Home page.
                  </p>
                </div>
              </div>

              <div className="mt-10 max-w-[750px]">
                <div className="rounded-xl overflow-hidden">
                  <LightboxImage
                    src="/images/paa-2.png"
                    alt="Assessment completion screen showing the Generate Documentation CTA"
                    width={2916}
                    height={2085}
                    unoptimized
                    className="w-full h-auto object-cover"
                    sizes="(max-width: 768px) 100vw, 750px"
                  />
                </div>
                <p className="mt-3 text-sm text-muted-foreground text-center">Assessment completion, a clean &quot;Generate Documentation&quot; CTA at the end of a completed form</p>
              </div>

            </section>

            {/* The AI Layer */}
            <section id="ai" className="mb-12">
              <p className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground mb-2">AI Layer</p>
              <h2 className="font-serif text-[1.75rem] leading-[1.2] tracking-[-0.02em] mb-4 max-w-[750px]">
                Documentation at the end of the assessment
              </h2>

              <div className="space-y-4 text-[17px] leading-relaxed text-muted-foreground max-w-[750px] mb-8">
                <p>
                  Shipping the dashboard solved the workflow problem. The second challenge was the one that created the most clinician time loss: documentation.
                </p>

                <div>
                  <h3 className="font-serif text-[1.375rem] leading-[1.3] tracking-[-0.02em] mb-3 mt-4 font-medium text-foreground">The burden</h3>
                  <p>
                    Skilled nursing facilities operate under strict CMS frameworks. Every patient interaction requires documentation. Every care plan requires an update. The documentation determines whether a patient continues to receive covered care.
                  </p>
                  <p className="mt-3">
                    Clinicians were completing structured assessments, capturing functional scores, clinical observations, care plan status, and then writing the same information again, manually, in the narrative format required for SNF qualification and payer authorization.
                  </p>
                </div>
              </div>

              <div className="space-y-6 text-[17px] leading-relaxed text-muted-foreground max-w-[750px]">
                <div>
                  <h3 className="font-serif text-[1.375rem] leading-[1.3] tracking-[-0.02em] mb-3 font-medium text-foreground">Speeding up the qualification workflows</h3>
                  <p>
                    I generated a structured summary that was strictly following SNF criteria to make it easier and faster for clinicians to make a decision and provide the judgement and data behind it to the payors.
                  </p>
                </div>
              </div>

              <div className="my-10 max-w-[750px]">
                <div className="rounded-xl overflow-hidden">
                  <LightboxImage
                    src="/images/paa-discharge.png"
                    alt="PAA discharge documentation"
                    width={1600}
                    height={1000}
                    unoptimized
                    className="w-full h-auto object-cover"
                    sizes="(max-width: 768px) 100vw, 750px"
                  />
                </div>
                <p className="mt-3 text-sm text-muted-foreground text-center">Discharge documentation flow, sequenced for clinical review before submission</p>
              </div>

              <div className="space-y-6 text-[17px] leading-relaxed text-muted-foreground max-w-[750px]">
                <div>
                  <h3 className="font-serif text-[1.375rem] leading-[1.3] tracking-[-0.02em] mb-3 font-medium text-foreground">Protecting system integrity</h3>
                  <p>
                    There was a less obvious risk to design against: gaming. If clinicians could see the AI-generated draft before the assessment was locked, the incentive structure would break. Clinicians could read the output, go back, adjust clinical responses to get a more favorable documentation result.
                  </p>
                  <p className="mt-4">
                    I designed a solution where generation only triggers after the assessment is submitted and locked. Clinicians can edit the narrative draft, but cannot alter the underlying assessment data. Clinical integrity and documentation accuracy stay aligned.
                  </p>
                </div>
              </div>

              <div className="my-10 max-w-[750px]">
                <div className="rounded-xl overflow-hidden">
                  <LightboxImage
                    src="/images/paa-doc2.png"
                    alt="PAA documentation draft"
                    width={1600}
                    height={1000}
                    unoptimized
                    className="w-full h-auto object-cover"
                    sizes="(max-width: 768px) 100vw, 750px"
                  />
                </div>
                <p className="mt-3 text-sm text-muted-foreground text-center">Generated draft narrative, pre-populated from assessment data and CMS criteria, ready for clinician review</p>
              </div>

            </section>


            {/* Impact */}
            <section id="impact" className="mb-12">
              <p className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground mb-2">Impact</p>
              <h2 className="font-serif text-[1.75rem] leading-[1.2] tracking-[-0.02em] mb-4 max-w-[750px]">
                Impact at a glance
              </h2>
              <div className="p-8 bg-[#F5F3F0] rounded-xl max-w-[750px]">
                <ul className="space-y-4">
                  {[
                    "Shipped a tiered urgency system, contextual message integration, and AI-generated clinical documentation within a single dashboard surface",
                    "40% time saved with optimized clinical workflows",
                    "Quality feedback: improved clinician satisfaction",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-foreground shrink-0" />
                      <span className="text-[17px] leading-relaxed text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            {/* What I'd Do Differently */}
            <section id="retro" className="mb-12">
              <p className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground mb-2">Retrospective</p>
              <h2 className="font-serif text-[1.75rem] leading-[1.2] tracking-[-0.02em] mb-4 max-w-[750px]">
                What I&apos;d Do Differently
              </h2>
              <div className="space-y-6 text-[17px] leading-relaxed text-muted-foreground max-w-[750px]">
                <div>
                  <h3 className="font-serif text-[1.375rem] leading-[1.3] tracking-[-0.02em] mb-2 font-medium text-foreground">Build the clinical feedback loop from day one</h3>
                  <p>
                    When I joined, there was no structured channel between design and clinical staff. I pushed to make it a regular fixture, scheduled reviews with care coordinators on real screens. Clinicians don&apos;t tell you what they want, they show you where they hesitate. That cadence should exist before the first wireframe.
                  </p>
                </div>
                <div>
                  <h3 className="font-serif text-[1.375rem] leading-[1.3] tracking-[-0.02em] mb-2 font-medium text-foreground">Get legally clean access to real clinical data earlier</h3>
                  <p>
                    Setting up HIPAA-compliant access to anonymized accounts takes time and legal coordination. We got there late. Testing with realistic task volumes and edge-case clinical profiles earlier would have caught problems we only found in QA. On any healthcare project, this is a first-week priority.
                  </p>
                </div>
              </div>
            </section>

            <div className="pt-8">
              <BackLinkFooter />
            </div>
          </main>
        </div>
      </div>
    </div>
  )
}
