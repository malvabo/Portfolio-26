"use client"

import Link from "next/link"
import Image from "next/image"
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
              <a href="#problem" className="block text-[15px] text-muted-foreground hover:text-foreground transition-colors">
                Discovery
              </a>
              <a href="#research" className="block text-[15px] text-muted-foreground hover:text-foreground transition-colors">
                Research
              </a>
              <a href="#solution" className="block text-[15px] text-muted-foreground hover:text-foreground transition-colors">
                Solution
              </a>
              <a href="#outcomes" className="block text-[15px] text-muted-foreground hover:text-foreground transition-colors">
                Outcomes
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
            <Image
              src="/images/tempstars-phones-hero.png"
              alt="Dental centre profile and onboarding – two phones showing clinic detail and You are in a good company"
              width={1200}
              height={800}
              className="w-full h-auto object-contain"
            />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-4 mb-8 pb-8 border-b border-border/30 max-w-[750px]">
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

          <section id="tldr" className="mb-16 p-8 bg-[#F5F3F0] rounded-xl max-w-[750px]">
            <h2 className="font-serif text-[1.75rem] leading-[1.2] tracking-[-0.02em] mb-4 text-balance">At a glance</h2>

            <ul className="space-y-2 text-[17px] leading-relaxed max-w-[750px]">
              <li className="flex gap-3">
                <span className="text-muted-foreground mt-0.5">•</span>
                <span className="text-muted-foreground"><strong className="font-medium text-foreground">Impact:</strong> 20% surge in user activation and a 25% YoY increase in booked shifts.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-muted-foreground mt-0.5">•</span>
                <span className="text-muted-foreground"><strong className="font-medium text-foreground">Velocity:</strong> Slashed the &quot;time-to-first-offer&quot; from 7 days to 2 days.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-muted-foreground mt-0.5">•</span>
                <span className="text-muted-foreground"><strong className="font-medium text-foreground">Policy:</strong> Facilitated stakeholder workshops to overhaul cancellation rules and restore platform trust.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-muted-foreground mt-0.5">•</span>
                <span className="text-muted-foreground"><strong className="font-medium text-foreground">Systems:</strong> Replaced static registration with a progressive, skill-based matching engine.</span>
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
                TempStars is Canada&apos;s largest dental staffing platform, but it faced a critical activation gap: 40% of signups never booked a shift. The product was suffering from an &quot;immature&quot; brand perception and opaque business rules. In a professional marketplace, if the platform doesn&apos;t feel like a partner, users won&apos;t trust it with their livelihood. My objective was to move the platform from a dated utility to a trusted, high-velocity service ecosystem.
              </p>
            </div>
          </section>

          <section id="problem" className="mb-10">
            <p className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground mb-2">Discovery</p>
            <h2 className="font-serif text-[1.75rem] leading-[1.2] tracking-[-0.02em] mb-4 text-balance">
              The challenge of the &quot;ghost user&quot;
            </h2>
            <div className="space-y-3 text-[17px] leading-relaxed text-muted-foreground max-w-[750px]">
              <p>
                I began by auditing the end-to-end user journey to identify where the &quot;trust tax&quot; was highest. It wasn&apos;t just a UI problem; it was a systemic failure in the user&apos;s first 48 hours.
              </p>
              <p>
                <strong className="font-medium text-foreground">The 40% drop-off:</strong> Data showed that users were interested enough to register but too intimidated or confused to commit to a shift.
              </p>
              <p>
                <strong className="font-medium text-foreground">Information scarcity:</strong> Users were frequently leaving the app to &quot;Google&quot; dental offices before applying because our shift cards lacked the critical details (parking, equipment, team size) needed for a split-second professional decision.
              </p>
            </div>
          </section>

          <section id="research" className="mb-10">
            <p className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground mb-2">Research</p>
            <h2 className="font-serif text-[1.75rem] leading-[1.2] tracking-[-0.02em] mb-4 text-balance">
              The diagnosis of root causes
            </h2>
            <div className="space-y-5 text-[17px] leading-relaxed text-muted-foreground max-w-[750px] mb-4">
              <p>
                I moved beyond standard usability testing to map the service blueprint, uncovering two primary drivers of abandonment:
              </p>
            </div>

            <div className="space-y-4 max-w-[750px]">
              <div>
                <h3 className="font-serif text-[1.375rem] leading-[1.3] tracking-[-0.02em] mb-3 font-medium">Policy friction</h3>
                <p className="text-[17px] leading-relaxed text-muted-foreground">
                  Interviews revealed that cancellation policies were punitively one-sided toward clinics. This destroyed platform trust before a user even worked their first hour.
                </p>
              </div>

              <div>
                <h3 className="font-serif text-[1.375rem] leading-[1.3] tracking-[-0.02em] mb-3 font-medium">Low information scent</h3>
                <p className="text-[17px] leading-relaxed text-muted-foreground">
                  The &quot;search&quot; experience didn&apos;t account for the specialized mental models of dental professionals. A hygienist isn&apos;t looking for any job; they are looking for a specific clinical environment.
                </p>
              </div>
            </div>
            <div className="mt-8 rounded-xl overflow-hidden max-w-[750px]">
              <Image
                src={TEMPSTARS_CASE_IMAGES[2].src}
                alt={TEMPSTARS_CASE_IMAGES[2].alt}
                width={TEMPSTARS_CASE_IMAGES[2].width}
                height={TEMPSTARS_CASE_IMAGES[2].height}
                className="w-full h-auto object-contain"
              />
              <p className="mt-2 text-sm text-muted-foreground">UX onboarding survey (HYG Canada) and shifts distribution.</p>
            </div>
          </section>

          <section id="solution" className="mb-10">
            <p className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground mb-2">Solution</p>
            <h2 className="font-serif text-[1.75rem] leading-[1.2] tracking-[-0.02em] mb-4 text-balance">
              Execution: a phased operational recovery
            </h2>

            <div className="space-y-5 text-[17px] leading-relaxed text-muted-foreground max-w-[750px] mb-8">
              <p>I tackled the redesign through three strategic pillars:</p>
            </div>

            <div className="space-y-12 max-w-[750px]">
              <div>
                <h3 className="font-serif text-[1.375rem] leading-[1.3] tracking-[-0.02em] mb-3 font-medium">1. Stakeholder negotiation &amp; policy reform</h3>
                <p className="text-[17px] leading-relaxed text-muted-foreground">
                  I facilitated workshops with the founders to overhaul the cancellation policy. I argued that brand equity among hygienists was our most valuable asset. We successfully balanced the rules to provide more transparency and fairness, which immediately improved sentiment in our beta groups.
                </p>
              </div>

              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-[750px]">
                <div className="relative rounded-xl overflow-hidden bg-[#f5f5f5] h-[320px]">
                  <Image
                    src="/images/tempstars-landing-phone.png"
                    alt="TempStars landing: Dental Temping the way it should be"
                    fill
                    className="object-cover object-top"
                  />
                </div>
                <div className="relative rounded-xl overflow-hidden bg-[#f5f5f5] h-[320px]">
                  <Image
                    src="/images/tempstars-resume-step.png"
                    alt="Last step: add your resume to help dental offices choose you"
                    fill
                    className="object-cover object-top"
                  />
                </div>
              </div>
              <p className="mt-1 text-sm text-muted-foreground max-w-[750px]">TempStars landing: Dental Temping the way it should be; last step: add your resume to help dental offices choose you.</p>

              <div>
                <h3 className="font-serif text-[1.375rem] leading-[1.3] tracking-[-0.02em] mb-3 font-medium">2. Contextual onboarding (progressive disclosure)</h3>
                <p className="text-[17px] leading-relaxed text-muted-foreground">
                  We replaced the static, overwhelming signup with a progressive disclosure model. By asking for specialized skills (e.g., specific software or equipment proficiency) upfront, we could pre-filter the marketplace. This allowed us to surface relevant shifts immediately, reducing the &quot;cognitive noise&quot; for new users.
                </p>
                <div className="mt-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-[750px]">
                    <div className="relative rounded-xl overflow-hidden bg-[#f5f5f5] h-[360px]">
                      <Image
                        src={TEMPSTARS_CASE_IMAGES[5].src}
                        alt={TEMPSTARS_CASE_IMAGES[5].alt}
                        fill
                        className="object-cover object-top"
                      />
                    </div>
                    <div className="relative rounded-xl overflow-hidden bg-[#f5f5f5] h-[360px]">
                      <Image
                        src={TEMPSTARS_CASE_IMAGES[6].src}
                        alt={TEMPSTARS_CASE_IMAGES[6].alt}
                        fill
                        className="object-cover object-top"
                      />
                    </div>
                  </div>
                  <p className="mt-2 text-sm text-muted-foreground max-w-[750px]">Progressive disclosure: extra skills and photo; social proof – &quot;You are in a good company.&quot;</p>
                </div>
              </div>

              <div>
                <h3 className="font-serif text-[1.375rem] leading-[1.3] tracking-[-0.02em] mb-3 font-medium">3. Engineering information density</h3>
                <p className="text-[17px] leading-relaxed text-muted-foreground">
                  I restructured the shift pages to prioritize &quot;decision-making data.&quot; We moved clinical requirements and office logistics to the forefront. By providing high &quot;information scent,&quot; we eliminated the need for external research and gave users the confidence to book in real-time.
                </p>
                <div className="mt-6 rounded-xl overflow-hidden max-w-[750px]">
                  <Image
                    src="/images/tempstars-information-scent-before-after.png"
                    alt="Before: dense shift detail with long PPE list. After: dental centre profile with tabs for dental office, neighborhood, safety, and shift details; map and clear decision data."
                    width={1200}
                    height={800}
                    className="w-full h-auto object-contain"
                  />
                  <p className="mt-2 text-sm text-muted-foreground">Before: dense shift detail with long PPE list. After: dental centre profile with tabs for dental office, neighborhood, safety, and shift details; map and clear decision data.</p>
                </div>
              </div>
            </div>
          </section>

          <section id="outcomes" className="mb-16 p-8 bg-[#F5F3F0] rounded-xl max-w-[750px]">
            <p className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground mb-2">Outcomes</p>
            <h2 className="font-serif text-[1.75rem] leading-[1.2] tracking-[-0.02em] mb-4 text-balance">
              The impact of operational maturity
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
                <strong className="font-medium text-foreground">20% lift in activation:</strong> We successfully converted more &quot;signups&quot; into &quot;active workers&quot; by lowering the barrier to entry and increasing trust.
              </p>
              <p>
                <strong className="font-medium text-foreground">Velocity:</strong> The average &quot;time-to-first-offer&quot; dropped from 7 days to 2 days.
              </p>
              <p>
                <strong className="font-medium text-foreground">Marketplace liquidity:</strong> Booked shifts increased by 25% YoY as a direct result of the trust-based redesign.
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
                Starting with service mapping instead of UI surfaced the real &quot;trust tax.&quot; Fixing cancellation rules and adding information scent to shift cards wasn&apos;t just a design exercise–it was an operational maturing of the business. By combining policy reform with contextual onboarding, we turned TempStars from a &quot;leaky bucket&quot; into a scalable marketplace leader.
              </p>
            </div>
          </section>

          <div className="border-t border-border/50 pt-16">
            <Link
              href="/#work"
              scroll={false}
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
