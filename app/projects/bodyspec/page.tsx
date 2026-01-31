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
            <a href="#tldr" className="block text-[17px] text-muted-foreground hover:text-foreground transition-colors">
              TLDR
            </a>
          </nav>
        </aside>

        <main className="flex-1 px-8 lg:px-12 pt-24 pb-20 lg:pb-24 max-w-4xl">
          <div className="mb-12">
            <p className="font-mono text-xs text-muted-foreground mb-4 tracking-wider uppercase">
              BODYSPEC • MAR 2018 - SEP 2020
            </p>
            <h1 className="font-serif text-2xl md:text-3xl lg:text-4xl tracking-[-0.02em] leading-[1.2] mb-4 text-balance">
              BodySpec product redesign
            </h1>
            <p className="text-[17px] leading-relaxed text-muted-foreground">
              Website and app redesign to increase conversions to appointment booking.
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

            <ul className="space-y-4 text-[17px] leading-relaxed max-w-[750px]">
              <li className="flex gap-3">
                <span className="text-muted-foreground">•</span>
                <span>
                  I led the redesign of BodySpec's website and app, optimizing appointment booking to boost conversions
                  and revenue.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-muted-foreground">•</span>
                <span>
                  I identified key drop-off points through deep user research, streamlining the booking process and
                  clarifying DEXA scan benefits.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-muted-foreground">•</span>
                <span>
                  I simplified navigation, improved content clarity, and enhanced brand trust resulting in a 20%
                  increase in bookings.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-muted-foreground">•</span>
                <span>
                  I achieved a 30% client growth rate, cut booking time by 30%, and helped BodySpec secure $8.6M in
                  funding post-redesign.
                </span>
              </li>
            </ul>
          </section>

          <section id="overview" className="mb-16">
            <p className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground mb-4">Overview</p>
            <h2 className="font-serif text-[2rem] leading-[1.2] tracking-[-0.02em] mb-4 text-balance">
              Redesigning the booking experience
            </h2>
            <div className="space-y-5 text-[17px] leading-relaxed text-muted-foreground max-w-[750px]">
              <p>
                Bodyspec provides DEXA scans, comprehensive health scans that offer insights into body composition, bone
                density, and potential health risks. Bodyspec can accurately measure bone density, body fat and identify
                issues.
              </p>
              <p>
                I wanted to improve their appointment booking process: grow conversion rates, average order value, and
                enhance the aesthetics of the website.
              </p>
            </div>

            <div className="mt-8 p-8 bg-[#F5F3F0] rounded-xl max-w-3xl">
              <p className="text-[17px] leading-relaxed font-medium max-w-[750px]">
                My project involved leading research, facilitating the product strategy and rebranding,
                and designing a new platform to support the company's product strategy.
              </p>
            </div>
          </section>

          <section id="problem" className="mb-16">
            <p className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground mb-4">Discovery</p>
            <h2 className="font-serif text-[2rem] leading-[1.2] tracking-[-0.02em] mb-6 text-balance">
              Step 1: Deep-Dive Discovery
            </h2>
            <div className="space-y-5 text-[17px] leading-relaxed text-muted-foreground max-w-[750px]">
              <p>
                I started off by gaining an understanding of BodySpec's unique services and target audience. I also
                conducted a detailed audit of the existing website.
              </p>
              <p>
                I studied existing feedback to understand client pain points and expectations. Based on analytics, I
                noticed on which step users often drop off and do not finish the booking.
              </p>
              <p>As a result, I found a few main problems that were stopping people from converting.</p>
            </div>

            <div className="mt-8 bg-[oklch(0.94_0.01_85)] border-l-[6px] border-[oklch(0.65_0.08_60)] p-8 rounded-r max-w-3xl">
              <p className="text-[17px] leading-relaxed max-w-[750px]">
                The booking process was too long and not intuitive, and it was unclear what is the value of booking
                multiple scans vs booking just one scan.
              </p>
            </div>
          </section>

          <section id="research" className="mb-16">
            <p className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground mb-4">Research</p>
            <div className="space-y-5 text-[17px] leading-relaxed text-muted-foreground mb-8 max-w-[750px]">
              <p>
                Right after I kicked off the project, I started an offline and online user research campaign involving
                multiple team members in different states working with different types of clients. I collected
                information about user needs, current issues while working with the company, preferences, and many more.
              </p>
            </div>
          </section>

          <section id="solution" className="mb-16">
            <p className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground mb-4">Solution</p>
            <h2 className="font-serif text-[2rem] leading-[1.2] tracking-[-0.02em] mb-6 text-balance">
              Multi-step design approach
            </h2>

            <div className="space-y-16">
              <div>
                <h3 className="font-serif text-2xl leading-[1.2] tracking-[-0.02em] mb-4">Step 2: Content Architecture</h3>
                <p className="text-[17px] leading-relaxed text-muted-foreground mb-6 max-w-[750px]">
                  I redesigned BodySpec's website to guide users through a clear journey:
                </p>
                <ul className="space-y-2.5 text-[17px] leading-relaxed text-muted-foreground max-w-[750px]">
                  <li className="flex gap-3">
                    <span>•</span>
                    <span>
                      Users could easily find the services they needed, whether for general wellness or specific health
                      issues.
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span>•</span>
                    <span>
                      I made technical details about DEXA scans easier to understand without losing any important
                      information.
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span>•</span>
                    <span>
                      By adding credentials, testimonials, and partnerships in the right places, I built trust and
                      showed users that BodySpec is an expert.
                    </span>
                  </li>
                </ul>

                <div className="mt-8 bg-[oklch(0.94_0.01_85)] border-l-[6px] border-[oklch(0.65_0.08_60)] p-8 rounded-r max-w-3xl">
                  <p className="text-[17px] leading-relaxed max-w-[750px]">
                    Simplifying the content increased user engagement, and dropoff of the website visitors from the Home
                    page decreased.
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
                <h3 className="font-serif text-2xl leading-[1.2] tracking-[-0.02em] mb-4">Step 3: Brand Revamp</h3>
                <p className="text-[17px] leading-relaxed text-muted-foreground mb-6 max-w-[750px]">
                  In collaboration, I built a digital presence for BodySpec that mixed professional medical authority
                  with a friendly and approachable look:
                </p>
                <ul className="space-y-2.5 text-[17px] leading-relaxed text-muted-foreground max-w-[750px]">
                  <li className="flex gap-3">
                    <span>•</span>
                    <span>I kept the branding and visuals consistent, balancing a professional and friendly tone.</span>
                  </li>
                  <li className="flex gap-3">
                    <span>•</span>
                    <span>
                      The new site layout made it easy for users to find services and answers to common questions.
                    </span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-serif text-2xl leading-[1.2] tracking-[-0.02em] mb-4">
                  Step 4: Conversion-Optimized Design
                </h3>
                <p className="text-[17px] leading-relaxed text-muted-foreground mb-6 max-w-[750px]">
                  I focused on making the user experience simple and smooth:
                </p>
                <ul className="space-y-2.5 text-[17px] leading-relaxed text-muted-foreground max-w-[750px]">
                  <li className="flex gap-3">
                    <span>•</span>
                    <span>Streamlined booking process with clear buttons and calls-to-action and checkout in 2 clicks.</span>
                  </li>
                  <li className="flex gap-3">
                    <span>•</span>
                    <span>Highlighted and explained DEXA scan benefits in the checkout.</span>
                  </li>
                  <li className="flex gap-3">
                    <span>•</span>
                    <span>Credentials, media features, and reviews throughout the site to build trust.</span>
                  </li>
                </ul>

                <div className="mt-8 bg-[oklch(0.94_0.01_85)] border-l-[6px] border-[oklch(0.65_0.08_60)] p-8 rounded-r max-w-3xl">
                  <p className="text-[17px] leading-relaxed max-w-[750px]">
                    These changes led to a 20% increase in bookings, with many clients booking multiple scan types.
                  </p>
                </div>
              </div>

              <div>
                <h3 className="font-serif text-2xl leading-[1.2] tracking-[-0.02em] mb-4">Step 5: Implementation</h3>
                <p className="text-[17px] leading-relaxed text-muted-foreground max-w-[750px]">
                  I handed off the design with full documentation to the development team and supported them till the
                  website went live.
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
              Significant business impact
            </h2>

            <div className="grid md:grid-cols-3 gap-4 mb-8">
              <div className="bg-background rounded-lg p-6">
                <div className="text-2xl font-serif mb-2 tracking-[-0.02em]">20%</div>
                <p className="text-sm leading-relaxed text-muted-foreground">increase in bookings</p>
              </div>
              <div className="bg-background rounded-lg p-6">
                <div className="text-2xl font-serif mb-2 tracking-[-0.02em]">30%</div>
                <p className="text-sm leading-relaxed text-muted-foreground">client growth rate</p>
              </div>
              <div className="bg-background rounded-lg p-6">
                <div className="text-2xl font-serif mb-2 tracking-[-0.02em]">30%</div>
                <p className="text-sm leading-relaxed text-muted-foreground">reduction in booking time</p>
              </div>
            </div>

            <div className="space-y-5 text-[17px] leading-relaxed text-muted-foreground max-w-[750px]">
              <p>
                A high-performing website is crucial for healthcare services like BodySpec. My redesign ensured
                BodySpec's site became a powerful conversion tool, transforming visitors into booked clients while
                reducing booking abandonment.
              </p>
              <p className="font-medium text-foreground">Aside from revenue increase, the company raised $8.6M after the redesign.</p>
              <p>
                As a result, I launched in beta both the website and app, achieving a 20% increase in user satisfaction
                of current clients, 30% growth in clients, and a 30% reduction in appointment booking time due to
                redesign.
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
