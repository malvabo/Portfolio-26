"use client"
import { LightboxImage } from "@/components/lightbox-image"

import Link from "next/link"
import { BackLinkSidebar, BackLinkFooter } from "@/components/back-link"
import { ArrowLeft } from "lucide-react"
import { ScrollToTop } from "@/components/scroll-to-top"
import { Header } from "@/components/header"

const TEMPSTARS_CASE_IMAGES = [
  { src: "/images/tempstars-landing.png", alt: "TempStars app landing: Dental Temping the way it should be", width: 800, height: 1200 },
  { src: "/images/tempstars-before-after.png", alt: "Before and after: shift detail vs dental centre profile with decision-making data", width: 1200, height: 800 },
  { src: "/images/tempstars-survey-charts.png", alt: "UX onboarding survey results and shifts distribution", width: 1200, height: 800 },
  { src: "/images/tempstars-clinic-profile.png", alt: "Dental centre profile with neighborhood map and office details", width: 800, height: 1200 },
  { src: "/images/tempstars-phones-office-onboarding.png", alt: "Clinic detail and onboarding screen on mobile", width: 1200, height: 800 },
  { src: "/images/tempstars-onboarding-skills-photo.png", alt: "Onboarding: extra skills selection and photo upload", width: 1200, height: 800 },
  { src: "/images/tempstars-good-company.png", alt: "You are in a good company – TempStars social proof screen", width: 800, height: 1200 },
]

export default function TempStarsCaseStudy() {
  return (
    <div className="min-h-screen bg-background">
      <ScrollToTop />
      <Header />

      <div className="max-w-7xl mx-auto pt-24 flex flex-col">
        {/* Row 2: spacer + main content */}
        <div className="flex w-full items-start">
          <div className="hidden lg:block w-56 shrink-0 px-8 lg:px-12" aria-hidden />
          <aside className="hidden lg:block w-56 px-8 lg:px-12 fixed top-24 left-8 lg:left-[max(0px,calc((100vw-80rem)/2))]" aria-label="Case study navigation">
            <BackLinkSidebar />
            <nav className="space-y-4" aria-label="Case study sections">
              <a href="#tldr" className="block text-[15px] text-muted-foreground hover:text-foreground transition-colors">
                TLDR
              </a>
              <a href="#overview" className="block text-[15px] text-muted-foreground hover:text-foreground transition-colors">
                Overview
              </a>
              <a href="#problem" className="block text-[15px] text-muted-foreground hover:text-foreground transition-colors">
                Discovery
              </a>
              <a href="#research" className="block text-[15px] text-muted-foreground hover:text-foreground transition-colors">
                Research
              </a>
              <a href="#collaboration" className="block text-[15px] text-muted-foreground hover:text-foreground transition-colors">
                Collaboration
              </a>
              <a href="#solution" className="block text-[15px] text-muted-foreground hover:text-foreground transition-colors">
                Solution
              </a>
              <a href="#outcomes" className="block text-[15px] text-muted-foreground hover:text-foreground transition-colors">
                Outcomes
              </a>
              <a href="#roadmap" className="block text-[15px] text-muted-foreground hover:text-foreground transition-colors">
                Roadmap
              </a>
              <a href="#reflection" className="block text-[15px] text-muted-foreground hover:text-foreground transition-colors">
                Reflection
              </a>
            </nav>
          </aside>
          <main className="flex-1 px-8 lg:px-12 pb-20 lg:pb-24">
          <div className="mb-12 max-w-[750px]">
            <h1 className="font-serif text-2xl md:text-3xl lg:text-4xl tracking-[-0.02em] leading-[1.2] mb-4">
              TempStars: Building marketplace liquidity for 25K+ dentists
            </h1>
            <p className="text-[17px] leading-relaxed text-muted-foreground">
              Building trust in a marketplace for dental professionals
            </p>
          </div>

          <div className="mb-12 rounded-xl overflow-hidden max-w-[750px]">
            <LightboxImage
              src="/images/tempstars-phones-hero.png"
              alt="Dental centre profile and onboarding – two phones showing clinic detail and You are in a good company"
              width={1200}
              height={800}
              className="w-full h-auto object-contain"
            />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-4 mb-4 pb-8 max-w-[750px]">
            <div>
              <p className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground mb-2">Role</p>
              <p className="text-[15px] leading-relaxed">Lead Product Designer, Research</p>
            </div>
            <div>
              <p className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground mb-2">Timeline</p>
              <p className="text-[15px] leading-relaxed">Shipped 2023</p>
            </div>
            <div>
              <p className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground mb-2">Team</p>
              <p className="text-[15px] leading-relaxed">Cross-functional</p>
            </div>
            <div>
              <p className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground mb-2">Platform</p>
              <div className="flex flex-wrap gap-1.5">
                {["Web", "Mobile"].map((platform) => (
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

          <section id="tldr" className="mb-10 p-8 bg-[#F5F3F0] rounded-xl max-w-[750px]">
            <h2 className="font-serif text-[1.75rem] leading-[1.2] tracking-[-0.02em] mb-4 text-balance">At a glance</h2>

            <ul className="space-y-2 text-[17px] leading-relaxed max-w-[750px]">
              <li className="flex gap-3">
                <span className="text-muted-foreground mt-0.5">•</span>
                <span className="text-muted-foreground"><strong className="font-medium text-foreground">Impact:</strong> 20% increase in user activation and a 25% YoY increase in booked shifts.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-muted-foreground mt-0.5">•</span>
                <span className="text-muted-foreground"><strong className="font-medium text-foreground">Velocity:</strong> Reduced time-to-first-offer from 7 days to 2 days.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-muted-foreground mt-0.5">•</span>
                <span className="text-muted-foreground"><strong className="font-medium text-foreground">Policy:</strong> Ran workshops with founders to revise cancellation rules that were pushing hygienists away.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-muted-foreground mt-0.5">•</span>
                <span className="text-muted-foreground"><strong className="font-medium text-foreground">Systems:</strong> Replaced a generic signup flow with progressive onboarding tied to skill-based matching.</span>
              </li>
            </ul>
          </section>

          <section id="overview" className="mb-10">
            <p className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground mb-2">Overview</p>
            <h2 className="font-serif text-[1.75rem] leading-[1.2] tracking-[-0.02em] mb-4 text-balance">
              Context and rationale
            </h2>
            <div className="space-y-3 text-[17px] leading-relaxed text-muted-foreground max-w-[750px]">
              <p>
                TempStars is Canada&apos;s largest dental staffing platform. When I joined, 40% of signups never booked a shift. The product looked dated, the business rules were unclear to users, and hygienists didn&apos;t feel like the platform was working in their interest. My job was to understand why people weren&apos;t coming back and fix the underlying problems.
              </p>
            </div>
          </section>

          <section id="problem" className="mb-10">
            <p className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground mb-2">Discovery</p>
            <h2 className="font-serif text-[1.75rem] leading-[1.2] tracking-[-0.02em] mb-4 text-balance">
              Understanding inactive users
            </h2>
            <div className="space-y-3 text-[17px] leading-relaxed text-muted-foreground max-w-[750px]">
              <p>
                I started by mapping the end-to-end user journey to understand where people were dropping off. The problems were concentrated in the first 48 hours after signup.
              </p>
              <p>
                <strong className="font-medium text-foreground">The 40% drop-off:</strong> Users were registering but not booking. Some were put off by the cancellation policy before they even took a shift. Others simply didn&apos;t have enough information to feel confident applying.
              </p>
              <p>
                <strong className="font-medium text-foreground">Missing context:</strong> Users were leaving the app to look up dental offices on Google before applying, because shift cards didn&apos;t include the details they needed - parking, equipment, team size, office culture.
              </p>
            </div>
          </section>

          <section id="research" className="mb-10">
            <p className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground mb-2">Research</p>
            <h2 className="font-serif text-[1.75rem] leading-[1.2] tracking-[-0.02em] mb-4 text-balance">
              Finding the root causes
            </h2>
            <div className="space-y-5 text-[17px] leading-relaxed text-muted-foreground max-w-[750px] mb-6">
              <p>
                I ran a mixed-methods research programme to move beyond surface-level symptoms - mapping the full service experience, not just the app.
              </p>
            </div>

            <div className="max-w-[750px] mb-8 border border-[#EBEBEB] rounded-xl overflow-hidden divide-y divide-[#EBEBEB]">
              <div className="flex gap-6 p-4">
                <span className="font-medium text-foreground text-[15px] shrink-0 w-40">User interviews</span>
                <span className="text-[15px] text-muted-foreground">15 in-depth sessions with dentists and hygienists to map mental models, motivations, and friction points across the full job-search journey.</span>
              </div>
              <div className="flex gap-6 p-4">
                <span className="font-medium text-foreground text-[15px] shrink-0 w-40">Usability studies</span>
                <span className="text-[15px] text-muted-foreground">Moderated sessions on the existing onboarding and shift-search flows to pinpoint where users stalled or abandoned.</span>
              </div>
              <div className="flex gap-6 p-4">
                <span className="font-medium text-foreground text-[15px] shrink-0 w-40">Data analysis</span>
                <span className="text-[15px] text-muted-foreground">Analysed quantitative data to identify drop-off points and surface the biggest issues - 40% signup-to-activation gap, 7-day time-to-first-offer, and shift abandonment rates by user segment.</span>
              </div>
            </div>

            <div className="space-y-4 max-w-[750px]">
              <div>
                <h3 className="font-serif text-[1.375rem] leading-[1.3] tracking-[-0.02em] mb-3 font-medium">Policy friction</h3>
                <p className="text-[17px] leading-relaxed text-muted-foreground">
                  Interviews revealed that cancellation policies were punitively one-sided toward clinics. This destroyed platform trust before a user even worked their first hour.
                </p>
              </div>

              <div className="rounded-xl overflow-hidden max-w-[750px]">
                <img
                  src="/images/ts_workshop.png"
                  alt="Workshop"
                  className="w-full h-auto"
                />
              </div>

              <div className="rounded-xl overflow-hidden max-w-[750px]">
                <LightboxImage
                  src={TEMPSTARS_CASE_IMAGES[2].src}
                  alt={TEMPSTARS_CASE_IMAGES[2].alt}
                  width={TEMPSTARS_CASE_IMAGES[2].width}
                  height={TEMPSTARS_CASE_IMAGES[2].height}
                  className="w-full h-auto object-contain"
                />
                <p className="mt-2 text-sm text-muted-foreground text-center">UX onboarding survey (HYG Canada) and shifts distribution</p>
              </div>

              <div>
                <h3 className="font-serif text-[1.375rem] leading-[1.3] tracking-[-0.02em] mb-3 font-medium">Low information scent</h3>
                <p className="text-[17px] leading-relaxed text-muted-foreground">
                  The &quot;search&quot; experience didn&apos;t account for the specialised mental models of dental professionals. A hygienist isn&apos;t looking for any job; they are looking for a specific clinical environment.
                </p>
              </div>
            </div>
          </section>

          <section id="collaboration" className="mb-10">
            <p className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground mb-2">Collaboration</p>
            <h2 className="font-serif text-[1.75rem] leading-[1.2] tracking-[-0.02em] mb-8 max-w-[750px]">
              Collaboration with the team
            </h2>

            <div className="space-y-10 max-w-[750px]">
              <div>
                <h3 className="font-serif text-[1.375rem] leading-[1.3] tracking-[-0.02em] mb-3 font-medium">Weekly feasibility sprints</h3>
                <p className="text-[17px] leading-relaxed text-muted-foreground">
                  We ran weekly feasibility sprints where I shared lo-fi wireframes of the matching logic before high-fidelity design began. This prevented us from designing matching filters that the database couldn&apos;t query in real-time.
                </p>
                <p className="text-[17px] leading-relaxed text-muted-foreground mt-4">
                  I also shared service blueprints, customer journey maps, and issue priority maps with the team to keep everyone aligned on the full picture - not just the screens.
                </p>
                <div className="mt-6 rounded-xl overflow-hidden max-w-[750px]">
                  <LightboxImage
                    src="/images/TS_5.png"
                    alt="Service blueprints and journey maps shared with the team"
                    className="w-full h-auto"
                  />
                </div>
              </div>

            </div>
          </section>

          <section id="solution" className="mb-10">
            <p className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground mb-2">Solution</p>
            <h2 className="font-serif text-[1.75rem] leading-[1.2] tracking-[-0.02em] mb-4 text-balance">
              Rolling it out in phases
            </h2>

            <div className="space-y-5 text-[17px] leading-relaxed text-muted-foreground max-w-[750px] mb-8">
              <p>I tackled the redesign through three strategic pillars:</p>
            </div>

            <div className="space-y-12 max-w-[750px]">
              <div>
                <h3 className="font-serif text-[1.375rem] leading-[1.3] tracking-[-0.02em] mb-3 font-medium">1. Stakeholder negotiation &amp; policy reform</h3>
                <p className="text-[17px] leading-relaxed text-muted-foreground">
                  I ran workshops with the founders to revisit the cancellation policy. The existing rules were heavily weighted toward clinics, and hygienists knew it. I made the case that retaining hygienists mattered more than the short-term fee revenue - a churned office represented around $12k in lost LTV over 12 months. The policy change improved sentiment quickly in our beta group and unblocked a lot of users who had been hesitant to commit.
                </p>
                <div className="mt-6 rounded-xl overflow-hidden max-w-[750px]">
                  <LightboxImage
                    src="/images/TS-11.png"
                    alt="Workshop session — revisiting cancellation policy with founders"
                    className="w-full h-auto"
                  />
                </div>
              </div>

              <div>
                <h3 className="font-serif text-[1.375rem] leading-[1.3] tracking-[-0.02em] mb-3 font-medium">Broad ideation before convergence</h3>
                <p className="text-[17px] leading-relaxed text-muted-foreground">
                  Before committing to a direction, I generated 10+ distinct design approaches to the core problem. I shared these broadly - with the team and with power users - to gather early signal on what resonated before investing in high-fidelity work. This helped surface assumptions quickly and avoided anchoring too early on any single solution.
                </p>
                <div className="mt-6 rounded-xl overflow-hidden max-w-[750px]">
                  <LightboxImage
                    src="/images/TS-12.png"
                    alt="10+ design approaches explored before converging on a direction"
                    className="w-full h-auto"
                  />
                </div>
              </div>

              <div>
                <h3 className="font-serif text-[1.375rem] leading-[1.3] tracking-[-0.02em] mb-3 font-medium">2. Contextual onboarding (progressive disclosure)</h3>
                <p className="text-[17px] leading-relaxed text-muted-foreground">
                  We replaced the one-size-fits-all signup with a shorter, staged flow. By capturing specific skills early - software experience, equipment familiarity - we could show relevant shifts straight away rather than presenting an undifferentiated list. Fewer steps upfront, but more useful results on the other side.
                </p>
                <div className="mt-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-[750px]">
                    <div className="relative rounded-xl overflow-hidden bg-[#f5f5f5] h-[360px]">
                      <LightboxImage
                        src={TEMPSTARS_CASE_IMAGES[5].src}
                        alt={TEMPSTARS_CASE_IMAGES[5].alt}
                        fill
                        className="object-cover object-top"
                      />
                    </div>
                    <div className="relative rounded-xl overflow-hidden bg-[#f5f5f5] h-[360px]">
                      <LightboxImage
                        src={TEMPSTARS_CASE_IMAGES[6].src}
                        alt={TEMPSTARS_CASE_IMAGES[6].alt}
                        fill
                        className="object-cover object-top"
                      />
                    </div>
                  </div>
                  <p className="mt-2 text-sm text-muted-foreground max-w-[750px] text-center">Skills selection, photo upload, and social proof screen</p>
                </div>
                <p className="text-[17px] leading-relaxed text-muted-foreground mt-6">
                  I collaborated with Engineering to move from free-text skills to a standardised skill taxonomy. This allowed us to build a weighted matching algorithm. I defined the UX logic for &quot;hard skills&quot; (must-haves like experience with specific equipment) vs. &quot;soft preferences&quot; (nice-to-haves like specific software knowledge).
                </p>
              </div>

              <div>
                <h3 className="font-serif text-[1.375rem] leading-[1.3] tracking-[-0.02em] mb-3 font-medium">Edge-case logic</h3>
                <p className="text-[17px] leading-relaxed text-muted-foreground">
                  I designed the logic for partial matches. If no 100% match was found within 10 miles, how should the system decay the constraints? I mapped the hierarchy prioritising license verification over proximity to ensure patient safety while maintaining fulfillment rates.
                </p>
              </div>

              <div>
                <h3 className="font-serif text-[1.375rem] leading-[1.3] tracking-[-0.02em] mb-3 font-medium">3. More useful shift pages</h3>
                <p className="text-[17px] leading-relaxed text-muted-foreground">
                  I restructured the shift detail page to surface the information hygienists actually needed before applying - clinical setup, office culture, parking, location context. The goal was simple: stop users having to leave the app to make a decision.
                </p>
                <div className="mt-6 flex gap-4 max-w-[750px]">
                  <div className="flex-1 rounded-xl overflow-hidden bg-black aspect-[9/16]">
                    <video
                      src="/images/TS1.mp4"
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 rounded-xl overflow-hidden aspect-[9/16]">
                    <LightboxImage
                      src="/images/tempstars-resume-step.png"
                      alt="TempStars resume step screen"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="roadmap" className="mb-10">
            <p className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground mb-2">Roadmap</p>
            <h2 className="font-serif text-[1.75rem] leading-[1.2] tracking-[-0.02em] mb-8 max-w-[750px]">
              Stages set in motion
            </h2>

            <div className="max-w-[750px]">
              <div className="relative">
                <div className="hidden md:block absolute top-[28px] left-[calc(16.67%-8px)] right-[calc(16.67%-8px)] h-px bg-[#EBEBEB] z-0" />
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 relative z-10">

                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-4 h-4 rounded-full bg-foreground shrink-0" />
                      <span className="font-mono text-[10px] uppercase tracking-wider text-foreground">Phase 1 · Immediate</span>
                    </div>
                    <div className="border border-[#EBEBEB] rounded-xl p-4 bg-white space-y-2">
                      <p className="text-[13px] font-medium text-foreground mb-3">The Fix</p>
                      {["Sunset the punitive cancellation policy", "Launch Skill-Based Matching MVP", "Stabilise the leaky bucket"].map((item) => (
                        <div key={item} className="flex items-start gap-2">
                          <span className="text-emerald-500 mt-0.5 text-[13px]">✓</span>
                          <span className="text-[13px] text-muted-foreground">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-4 h-4 rounded-full border-2 border-foreground bg-background shrink-0" />
                      <span className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">Phase 2 · 6–12 Months</span>
                    </div>
                    <div className="border border-[#EBEBEB] rounded-xl p-4 bg-[#F5F3F0] space-y-2">
                      <p className="text-[13px] font-medium text-foreground mb-3">Scaling</p>
                      {["Transition from Search & Book to Algorithmic Dispatch", "Proactively push shifts to best-suited hygienists before they search", "Data-driven matching from new skill engine"].map((item) => (
                        <div key={item} className="flex items-start gap-2">
                          <span className="text-muted-foreground/40 mt-0.5 text-[13px]">○</span>
                          <span className="text-[13px] text-muted-foreground">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-4 h-4 rounded-full border-2 border-[#EBEBEB] bg-background shrink-0" />
                      <span className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">Phase 3 · 24 Months+</span>
                    </div>
                    <div className="border border-[#EBEBEB] rounded-xl p-4 bg-white space-y-2">
                      <p className="text-[13px] font-medium text-foreground mb-3">Ecosystem Expansion</p>
                      {["Launch TempStars Academy", "Identify skill shortages from taxonomy data", "Offer certified training - marketplace becomes career platform", "Trust Score and Skill Taxonomy as growth levers"].map((item) => (
                        <div key={item} className="flex items-start gap-2">
                          <span className="text-muted-foreground/30 mt-0.5 text-[13px]">○</span>
                          <span className="text-[13px] text-muted-foreground">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </section>

          <section id="outcomes" className="mb-16 p-8 bg-[#F5F3F0] rounded-xl max-w-[750px]">
            <p className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground mb-2">Outcomes</p>
            <h2 className="font-serif text-[1.75rem] leading-[1.2] tracking-[-0.02em] mb-4 text-balance">
              The impact
            </h2>

            <div className="grid md:grid-cols-3 gap-4 mb-8">
              <div className="bg-background rounded-lg p-6">
                <div className="text-2xl font-serif mb-2 tracking-[-0.02em]">20%</div>
                <p className="text-sm leading-relaxed text-muted-foreground">Lift in activation (signups → active workers)</p>
              </div>
              <div className="bg-background rounded-lg p-6">
                <p className="text-sm font-medium text-foreground mb-2">Velocity</p>
                <p className="text-sm leading-relaxed text-muted-foreground">Time-to-first-offer: 7 days → 2 days</p>
              </div>
              <div className="bg-background rounded-lg p-6">
                <div className="text-2xl font-serif mb-2 tracking-[-0.02em]">25%</div>
                <p className="text-sm leading-relaxed text-muted-foreground">YoY increase in booked shifts</p>
              </div>
            </div>

            <div className="space-y-3 text-[17px] leading-relaxed text-muted-foreground max-w-[750px]">
              <p>
                <strong className="font-medium text-foreground">20% lift in activation:</strong> More signups converted to active workers. Fewer people were bouncing at the policy or the onboarding stage.
              </p>
              <p>
                <strong className="font-medium text-foreground">Velocity:</strong> Time-to-first-offer dropped from 7 days to 2 days, mainly because the matching was more targeted from day one.
              </p>
              <p>
                <strong className="font-medium text-foreground">Booked shifts:</strong> Up 25% YoY. A combination of more active workers in the system and shifts being easier to evaluate and apply for.
              </p>
            </div>
          </section>

          <section id="reflection" className="mb-10">
            <p className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground mb-2">Reflection</p>
            <h2 className="font-serif text-[1.75rem] leading-[1.2] tracking-[-0.02em] mb-4 text-balance">
              Lessons in design leadership
            </h2>
            <div className="space-y-3 text-[17px] leading-relaxed text-muted-foreground max-w-[750px]">
              <p>
                Starting with service mapping rather than jumping into UI meant we caught problems that wouldn&apos;t have been visible from the screens alone. The cancellation policy was the clearest example - it was a bigger blocker than any UX issue, and no amount of onboarding polish would have fixed it. Getting that sorted first made the rest of the work land properly. The main thing I&apos;d take from this project: product decisions and design decisions are often the same decision.
              </p>
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
