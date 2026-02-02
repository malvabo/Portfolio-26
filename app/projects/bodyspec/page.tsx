"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowLeft } from "lucide-react"
import { ScrollToTop } from "@/components/scroll-to-top"
import { Header } from "@/components/header"

export default function BodySpecCaseStudy() {
  return (
    <div className="min-h-screen bg-background">
      <ScrollToTop />
      <Header />

      <div className="flex max-w-7xl mx-auto">
        <aside className="hidden lg:block w-56 px-8 lg:px-12 pt-24">
          <Link
            href="/#work"
            scroll={false}
            className="flex items-center gap-2 text-[15px] leading-4 font-sans text-muted-foreground hover:text-foreground transition-colors mb-16"
          >
            <ArrowLeft className="w-4 h-4" />
            All projects
          </Link>

          <nav className="space-y-4">
            <a href="#overview" className="block text-[17px] text-muted-foreground hover:text-foreground transition-colors">
              Overview
            </a>
            <a href="#problem" className="block text-[17px] text-muted-foreground hover:text-foreground transition-colors">
              Discovery
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
            <a href="#tldr" className="block text-[17px] text-muted-foreground hover:text-foreground transition-colors">
              TLDR
            </a>
          </nav>
        </aside>

        <main className="flex-1 px-8 lg:px-12 pt-24 pb-20 lg:pb-24 max-w-4xl">
          <div className="mb-12">
            <p className="font-mono text-xs text-muted-foreground mb-6 tracking-wider uppercase">HEALTH TECH</p>
            <p className="font-mono text-xs text-muted-foreground mb-4 tracking-wider uppercase">
              BODYSPEC • MAR 2018 - SEP 2020
            </p>
            <h1 className="font-serif text-2xl md:text-3xl lg:text-4xl tracking-[-0.02em] leading-[1.2] mb-4 text-balance">
              BodySpec: booking experience and platform redesign
            </h1>
            <p className="text-[17px] leading-relaxed text-muted-foreground">
              Research-led redesign of web and app to reduce funnel friction and increase appointment bookings across 500K+ users
            </p>
          </div>

          <div className="mb-12 rounded-xl overflow-hidden">
            <Image
              src="https://framerusercontent.com/images/vv2onQFZ97C3KH8T7xcOTJbKZs.png"
              alt="BodySpec app interface showing health metrics"
              width={2048}
              height={1365}
              className="w-full h-auto object-cover"
              style={{ objectPosition: "center 20%" }}
            />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-4 mb-8 pb-8 border-b border-border/30">
            <div>
              <p className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground mb-2">Role</p>
              <p className="text-[15px] leading-relaxed">Lead Product Designer, Research Lead</p>
            </div>
            <div>
              <p className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground mb-2">Timeline</p>
              <p className="text-[15px] leading-relaxed">Mar 2018 - Sep 2020</p>
            </div>
            <div>
              <p className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground mb-2">Team</p>
              <p className="text-[15px] leading-relaxed">Team of 12</p>
            </div>
            <div>
              <p className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground mb-2">Platform</p>
              <p className="text-[15px] leading-relaxed">Web, iOS</p>
            </div>
          </div>

          <section id="tldr" className="mb-16 p-8 bg-[#F5F3F0] rounded-xl max-w-3xl">
            <p className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground mb-4">TLDR</p>
            <h2 className="font-serif text-[2rem] leading-[1.2] tracking-[-0.02em] mb-6 text-balance">At a glance</h2>

            <ul className="space-y-5 text-[17px] leading-relaxed max-w-[750px]">
              <li className="flex gap-4">
                <span className="text-muted-foreground mt-1">•</span>
                <span>
                  BodySpec offers DEXA scans for body composition and bone density. The team led a full redesign of
                  web and app to improve the booking experience and conversion for a growing user base.
                </span>
              </li>
              <li className="flex gap-4">
                <span className="text-muted-foreground mt-1">•</span>
                <span>
                  Research identified drop-off points in the funnel, an overlong booking flow, and unclear value of
                  booking multiple scans. The redesign addressed these through content architecture, clearer value
                  narrative, and a streamlined checkout.
                </span>
              </li>
              <li className="flex gap-4">
                <span className="text-muted-foreground mt-1">•</span>
                <span>
                  The work included content and information architecture, brand refresh, and conversion-focused
                  design—with credentials and social proof placed to build trust at key decision points.
                </span>
              </li>
              <li className="flex gap-4">
                <span className="text-muted-foreground mt-1">•</span>
                <span>
                  Outcomes: 20% increase in bookings, 30% reduction in booking time, 30% client growth. The company
                  raised $8.6M after the redesign.
                </span>
              </li>
            </ul>
          </section>

          <section id="overview" className="mb-16">
            <p className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground mb-4">Overview</p>
            <h2 className="font-serif text-[2rem] leading-[1.2] tracking-[-0.02em] mb-6 text-balance">
              Context and rationale
            </h2>
            <div className="space-y-5 text-[17px] leading-relaxed text-muted-foreground max-w-[750px]">
              <p>
                BodySpec provides DEXA (dual-energy X-ray absorptiometry) scans for body composition, bone density, and
                related health insights. The service serves a broad audience—from wellness-focused users to those
                monitoring specific conditions—and had scaled to a large user base. The existing web and app experience
                had not kept pace: the booking flow was long, the value of different scan options was unclear, and
                drop-off was high at key steps in the funnel.
              </p>
              <p>
                The objective was to align the product experience with the company’s growth goals: increase
                conversion to booked appointments, support higher average order value (e.g. multiple scan types), and
                strengthen trust through clearer positioning and proof. The project combined research, product
                strategy and rebranding, and end-to-end design of the booking experience and supporting content.
              </p>
            </div>
          </section>

          <section id="problem" className="mb-16">
            <p className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground mb-4">Discovery</p>
            <h2 className="font-serif text-[2rem] leading-[1.2] tracking-[-0.02em] mb-6 text-balance">
              What we learned
            </h2>
            <div className="space-y-5 text-[17px] leading-relaxed text-muted-foreground max-w-[750px]">
              <p>
                The team started with a deep understanding of BodySpec’s services and audience, and an audit of the
                existing site and analytics. Existing feedback and funnel data showed where users left the flow and
                where expectations did not match the experience.
              </p>
              <p>
                Three issues stood out: the booking process was long and unintuitive; the value of booking multiple
                scan types (e.g. full body vs. regional) was unclear, so users either abandoned or under-purchased;
                and trust signals (credentials, outcomes, social proof) were missing or buried at moments when
                users were deciding whether to book.
              </p>
            </div>

            <div className="mt-8 bg-[oklch(0.94_0.01_85)] border-l-[6px] border-[oklch(0.65_0.08_60)] p-8 rounded-r max-w-3xl">
              <p className="text-[17px] leading-relaxed max-w-[750px]">
                The booking process was too long and not intuitive; the value of booking multiple scans versus a
                single scan was unclear. These became the main problems to solve.
              </p>
            </div>
          </section>

          <section id="research" className="mb-16">
            <p className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground mb-4">Research</p>
            <h2 className="font-serif text-[2rem] leading-[1.2] tracking-[-0.02em] mb-6 text-balance">
              Research approach and insights
            </h2>
            <div className="space-y-5 text-[17px] leading-relaxed text-muted-foreground max-w-[750px]">
              <p>
                Research combined offline and online methods, with team members across regions and touchpoints
                (website, in-clinic, follow-up). The goal was to capture why users came to BodySpec, where they
                hesitated or dropped off, and what would make them more likely to book or add scan types.
              </p>
              <p>
                Findings reinforced the discovery: users struggled to compare scan options, did not see enough
                evidence of expertise and outcomes, and found the booking path confusing. These insights drove
                the content architecture (what to explain where), the placement of credentials and testimonials,
                and the structure of the booking flow itself.
              </p>
            </div>
          </section>

          <section id="solution" className="mb-16">
            <p className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground mb-4">Solution</p>
            <h2 className="font-serif text-[2rem] leading-[1.2] tracking-[-0.02em] mb-6 text-balance">
              Design approach
            </h2>

            <div className="space-y-16">
              <div>
                <h3 className="font-serif text-2xl leading-[1.2] tracking-[-0.02em] mb-4">Content and information architecture</h3>
                <p className="text-[17px] leading-relaxed text-muted-foreground mb-6 max-w-[750px]">
                  The site was restructured so users could move from awareness to booking with a clear path:
                </p>
                <ul className="space-y-2.5 text-[17px] leading-relaxed text-muted-foreground max-w-[750px]">
                  <li className="flex gap-3">
                    <span>•</span>
                    <span>
                      Services were organized so users could find what they needed—whether general wellness or
                      condition-specific scans—without getting lost.
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span>•</span>
                    <span>
                      DEXA scan details were simplified for a general audience while keeping technical accuracy,
                      so the value of each option was understandable.
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span>•</span>
                    <span>
                      Credentials, testimonials, and partnerships were placed at decision points (e.g. before
                      location or scan selection) to build trust when it mattered most.
                    </span>
                  </li>
                </ul>

                <div className="mt-8 bg-[oklch(0.94_0.01_85)] border-l-[6px] border-[oklch(0.65_0.08_60)] p-8 rounded-r max-w-3xl">
                  <p className="text-[17px] leading-relaxed max-w-[750px]">
                    Clearer content and structure reduced drop-off from the homepage and early funnel steps.
                  </p>
                </div>
              </div>

              <div className="rounded-xl overflow-hidden mb-8">
                <Image
                  src="/images/bodyspec-location-booking.webp"
                  alt="BodySpec location booking interface on laptop"
                  width={1200}
                  height={900}
                  className="w-full h-auto"
                />
              </div>

              <div>
                <h3 className="font-serif text-2xl leading-[1.2] tracking-[-0.02em] mb-4">Brand and visual refresh</h3>
                <p className="text-[17px] leading-relaxed text-muted-foreground mb-6 max-w-[750px]">
                  In collaboration with the broader team, the digital presence was updated to balance medical
                  credibility with approachability:
                </p>
                <ul className="space-y-2.5 text-[17px] leading-relaxed text-muted-foreground max-w-[750px]">
                  <li className="flex gap-3">
                    <span>•</span>
                    <span>Branding and visuals were aligned across web and app for a consistent, professional tone.</span>
                  </li>
                  <li className="flex gap-3">
                    <span>•</span>
                    <span>
                      Layout and navigation made it easier to find services and answers to common questions
                      before booking.
                    </span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-serif text-2xl leading-[1.2] tracking-[-0.02em] mb-4">
                  Conversion-focused booking flow
                </h3>
                <p className="text-[17px] leading-relaxed text-muted-foreground mb-6 max-w-[750px]">
                  The booking experience was simplified and aligned with research:
                </p>
                <ul className="space-y-2.5 text-[17px] leading-relaxed text-muted-foreground max-w-[750px]">
                  <li className="flex gap-3">
                    <span>•</span>
                    <span>Fewer steps, clear primary actions, and a streamlined path to checkout.</span>
                  </li>
                  <li className="flex gap-3">
                    <span>•</span>
                    <span>DEXA scan benefits and scan-type comparison surfaced in the flow so users could choose with confidence.</span>
                  </li>
                  <li className="flex gap-3">
                    <span>•</span>
                    <span>Credentials, media, and reviews reinforced trust at key moments in the funnel.</span>
                  </li>
                </ul>

                <div className="mt-8 bg-[oklch(0.94_0.01_85)] border-l-[6px] border-[oklch(0.65_0.08_60)] p-8 rounded-r max-w-3xl">
                  <p className="text-[17px] leading-relaxed max-w-[750px]">
                    These changes contributed to a 20% increase in bookings, with more users booking multiple scan types.
                  </p>
                </div>
              </div>

              <div>
                <h3 className="font-serif text-2xl leading-[1.2] tracking-[-0.02em] mb-4">Handoff and launch</h3>
                <p className="text-[17px] leading-relaxed text-muted-foreground max-w-[750px]">
                  Designs were handed off with documentation to the development team, with support through launch
                  for both website and app.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mt-8">
                <div className="rounded-xl overflow-hidden">
                  <Image
                    src="/images/bodyspec-homepage-final.png"
                    alt="BodySpec final homepage design with hero and benefits"
                    width={1200}
                    height={1200}
                    className="w-full h-auto"
                  />
                </div>
                <div className="rounded-xl overflow-hidden">
                  <Image
                    src="/images/bodyspec-booking-flow.png"
                    alt="BodySpec mobile app booking interface"
                    width={1200}
                    height={1200}
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </section>

          <section id="outcomes" className="mb-16 p-8 bg-[#F5F3F0] rounded-xl max-w-3xl">
            <p className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground mb-4">Outcomes</p>
            <h2 className="font-serif text-[2rem] leading-[1.2] tracking-[-0.02em] mb-6 text-balance">
              Results and impact
            </h2>

            <div className="grid md:grid-cols-3 gap-4 mb-8">
              <div className="bg-background rounded-lg p-6">
                <div className="text-2xl font-serif mb-2 tracking-[-0.02em]">20%</div>
                <p className="text-sm leading-relaxed text-muted-foreground">increase in bookings</p>
              </div>
              <div className="bg-background rounded-lg p-6">
                <div className="text-2xl font-serif mb-2 tracking-[-0.02em]">30%</div>
                <p className="text-sm leading-relaxed text-muted-foreground">reduction in booking time</p>
              </div>
              <div className="bg-background rounded-lg p-6">
                <div className="text-2xl font-serif mb-2 tracking-[-0.02em]">30%</div>
                <p className="text-sm leading-relaxed text-muted-foreground">client growth rate</p>
              </div>
            </div>

            <div className="space-y-5 text-[17px] leading-relaxed text-muted-foreground max-w-[750px]">
              <p>
                The redesigned website and app launched in beta. The team observed a 20% increase in bookings, a 30%
                reduction in time to complete a booking, and a 30% increase in client growth. More users booked
                multiple scan types, indicating that the value narrative and flow were clearer.
              </p>
              <p>
                The company raised $8.6M in funding after the redesign. The project demonstrated how research-led
                design—funnel insight, content architecture, and trust at decision points—can align product
                experience with business goals in healthcare.
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
                Framing the work around the user’s journey—from “what is a DEXA scan?” to “why book here?” to
                “which scan?”—made it easier to prioritize. Research that identified drop-off and confusion
                points gave the team a shared picture of what to fix first, rather than redesigning everything at
                once.
              </p>
              <p>
                In healthcare, trust and clarity matter at every step. Placing credentials, outcomes, and social
                proof at decision points (not only on the homepage) was informed by research and had a measurable
                impact on conversion. The same principle applies to explaining technical content: simplify for
                the audience without losing accuracy.
              </p>
              <p>
                Close collaboration with strategy, brand, and development ensured the design could be implemented
                and that the product narrative was consistent. Documented handoff and support through launch
                helped the team ship with confidence.
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
  )
}
