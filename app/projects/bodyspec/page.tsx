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
              <a href="#problem" className="block text-[15px] text-muted-foreground hover:text-foreground transition-colors">
                Discovery
              </a>
              <a href="#research" className="block text-[15px] text-muted-foreground hover:text-foreground transition-colors">
                Research
              </a>
              <a href="#solution" className="block text-[15px] text-muted-foreground hover:text-foreground transition-colors">
                Solution
              </a>
              <a href="#constraints" className="block text-[15px] text-muted-foreground hover:text-foreground transition-colors">
                Constraints
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
              BodySpec: Driving 20% more bookings for 500K+ users
            </h1>
            <p className="text-[17px] leading-relaxed text-muted-foreground">
              How we transformed complex body composition data into an intuitive consumer experience.
            </p>
          </div>

          <div className="mb-12 rounded-xl overflow-hidden max-w-[750px]">
            <Image
              src="https://framerusercontent.com/images/vv2onQFZ97C3KH8T7xcOTJbKZs.png"
              alt="BodySpec app interface showing health metrics"
              width={2048}
              height={1365}
              className="w-full h-auto object-cover"
              style={{ objectPosition: "center 20%" }}
            />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-4 mb-4 pb-8 max-w-[750px]">
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
              <div className="flex flex-wrap gap-1.5">
                {["Web", "iOS"].map((platform) => (
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
                <span className="text-muted-foreground"><strong className="font-medium text-foreground">Impact:</strong> 30% reduction in checkout abandonment and 20% lift in total bookings.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-muted-foreground mt-0.5">•</span>
                <span className="text-muted-foreground"><strong className="font-medium text-foreground">Scale:</strong> Trained technicians across multiple states to act as a distributed research engine.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-muted-foreground mt-0.5">•</span>
                <span className="text-muted-foreground"><strong className="font-medium text-foreground">Strategy:</strong> Shifted user behavior from &quot;one-off scans&quot; to longitudinal health tracking.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-muted-foreground mt-0.5">•</span>
                <span className="text-muted-foreground"><strong className="font-medium text-foreground">Outcome:</strong> Provided the UX foundation for a successful $17.2M Series A funding round.</span>
              </li>
            </ul>
          </section>


          <section id="problem" className="mb-10">
            <p className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground mb-2">Discovery</p>
            <h2 className="font-serif text-[1.75rem] leading-[1.2] tracking-[-0.02em] mb-4 text-balance">
              The challenge: breaking the &quot;one-off&quot; cycle
            </h2>
            <div className="space-y-3 text-[17px] leading-relaxed text-muted-foreground max-w-[750px]">
              <p>
                BodySpec is the gold standard for body composition, but the product was stuck in a transactional loop. People would get one scan, feel overwhelmed by the data, and never return. My goal was to move the service from a clinical “one-off” to a longitudinal health habit.
              </p>
            </div>
          </section>

          <section id="research" className="mb-10">
            <p className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground mb-2">Research</p>
            <h2 className="font-serif text-[1.75rem] leading-[1.2] tracking-[-0.02em] mb-4 text-balance">
              Building a distributed intelligence engine
            </h2>
            <div className="space-y-3 text-[17px] leading-relaxed text-muted-foreground max-w-[750px]">
              <p>
                I knew I couldn’t be everywhere at once, so I turned our frontline staff into a research team. I developed a framework and trained our technicians across multiple states to conduct structured interviews during the scan process. This gave us hundreds of data points on real-world friction–insights we never would have caught in a lab.
              </p>
              <p>
                Through these technician-led interviews and my own usability testing, I identified a massive “post-scan drop-off.” Users were getting highly accurate data but had no mental model for how to use it. This realization shifted our entire strategy toward longitudinal tracking and health literacy.
              </p>
            </div>
          </section>

          <section id="solution" className="mb-10">
            <p className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground mb-2">Solution</p>
            <h2 className="font-serif text-[1.75rem] leading-[1.2] tracking-[-0.02em] mb-4 text-balance">
              The execution
            </h2>

            <div className="space-y-16">
              <div>
                <h3 className="font-serif text-[1.375rem] leading-[1.3] tracking-[-0.02em] mb-3 font-medium">Reducing interaction cost</h3>
                <div className="space-y-3 text-[17px] leading-relaxed text-muted-foreground max-w-[750px]">
                  <p>
                    Through a deep-dive audit and research studies, I identified the “location search” as the primary bottleneck. I redesigned the experience to be context-aware, pre-filling availability based on geo-location and reducing the path to checkout to just two clicks.
                  </p>
                  <p>
                    We also redesigned the results dashboard to emphasize longitudinal trends. By showing users how their body composition changed over time, we incentivized repeat scans and transformed BodySpec into a habit-forming platform.
                  </p>
              </div>

                <div className="mt-8 rounded-xl overflow-hidden max-w-[750px]">
                <Image
                  src="/images/bodyspec-location-booking.webp"
                  alt="BodySpec location booking interface on laptop"
                  width={1200}
                  height={900}
                  className="w-full h-auto"
                />
                <p className="mt-2 text-sm text-muted-foreground">BodySpec location booking interface on laptop</p>
              </div>
              </div>

              <div>
                <h3 className="font-serif text-[1.375rem] leading-[1.3] tracking-[-0.02em] mb-3 font-medium">Transforming data into narrative</h3>
                <div className="space-y-3 text-[17px] leading-relaxed text-muted-foreground max-w-[750px]">
                  <p>
                    The core value of BodySpec lies in the DEXA scan, a clinical-grade data set that is notoriously difficult for the average person to interpret. My goal was to transform a wall of numbers into an actionable health narrative across both the mobile app and the downloadable PDF reports.
                  </p>
                  <p>
                    <span className="text-foreground font-medium">The Mobile Dashboard</span><br />
                    I designed a high-glanceability mobile interface that uses color-coded zones and relative-to-peer percentiles. Instead of just seeing Total Mass, users now see a breakdown of lean muscle vs. visceral fat, helping them understand their body beyond the scale.
                  </p>
                  <p>
                    <span className="text-foreground font-medium">The PDF Report</span><br />
                    Recognizing that many users share these results with personal trainers or doctors, I redesigned the PDF report to be both a deep-dive data sheet and a visual progress map. I simplified the regional assessment graphs (arms, legs, trunk) and added a &quot;What does this mean?&quot; layer to the Bone Mineral Density (BMD) scores to reduce user anxiety and prompt informed conversations with healthcare providers.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mt-8 max-w-[750px]">
                  <div className="rounded-xl overflow-hidden">
                    <Image
                      src="/images/bodyspec-dexa-dashboard-1.png"
                      alt="BodySpec DEXA scan dashboard showing body fat percentage visualization with color-coded zones"
                      width={1200}
                      height={900}
                      className="w-full h-auto"
                    />
                  </div>
                  <div className="rounded-xl overflow-hidden">
                    <Image
                      src="/images/bodyspec-dexa-dashboard-2.png"
                      alt="BodySpec body fat analysis with peer comparison charts and percentile data"
                      width={1200}
                      height={900}
                      className="w-full h-auto"
                    />
                  </div>
                </div>
                <p className="mt-2 text-sm text-muted-foreground max-w-[750px]">BodySpec DEXA scan dashboard showing body fat percentage visualization with color-coded zones; body fat analysis with peer comparison charts and percentile data</p>
              </div>

              <div>
                <h3 className="font-serif text-[1.375rem] leading-[1.3] tracking-[-0.02em] mb-3 font-medium">The 2-click commitment</h3>
                <p className="text-[17px] leading-relaxed text-muted-foreground max-w-[750px]">
                  The legacy booking flow was a five-minute ordeal. Using the friction points identified in my tests, I redesigned the experience to be context-aware. By pre-filling availability based on geo-location and stripping out unnecessary fields, we reduced the path to checkout to just two clicks.
                </p>

              <div className="grid md:grid-cols-2 gap-6 mt-8 max-w-[750px]">
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
                <p className="mt-2 text-sm text-muted-foreground max-w-[750px]">BodySpec final homepage design with hero and benefits; mobile app booking interface</p>
              </div>
            </div>
          </section>

          <section id="constraints" className="mb-10">
            <p className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground mb-2">Constraints</p>
            <h2 className="font-serif text-[1.75rem] leading-[1.2] tracking-[-0.02em] mb-4 text-balance">
              Balancing technical debt with investor deadlines
            </h2>
            <div className="space-y-3 text-[17px] leading-relaxed text-muted-foreground max-w-[750px]">
              <p>
                While the vision for the BodySpec redesign was expansive, we faced a critical constraint: a high-stakes investment round was approaching, and we needed a live, functional product to demonstrate growth and engagement to potential backers. With limited engineering resources and a rigid deadline, I had to pivot from the &apos;ideal&apos; architectural solution to a high-velocity design strategy.
              </p>
              <p>
                I facilitated a &quot;middle ground&quot; approach—identifying the absolute core metrics users needed to see to feel value. We prioritized a lean, front-end heavy implementation that utilized existing data structures to ensure we hit the launch date. This &apos;V1&apos; allowed us to secure the necessary funding, which I then leveraged to lead a second, more robust iteration that integrated the complex data visualizations and personalized AI insights we originally envisioned.
              </p>
            </div>
          </section>

          <section id="outcomes" className="mb-10 p-8 bg-[#F5F3F0] rounded-xl max-w-[750px]">
            <p className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground mb-2">Outcomes</p>
            <h2 className="font-serif text-[1.75rem] leading-[1.2] tracking-[-0.02em] mb-4 text-balance">
              The impact
            </h2>

            <div className="grid md:grid-cols-3 gap-4 mb-4">
              <div className="bg-background rounded-lg p-6">
                <div className="text-2xl font-serif mb-2 tracking-[-0.02em]">20%</div>
                <p className="text-sm leading-relaxed text-muted-foreground">lift in bookings</p>
              </div>
              <div className="bg-background rounded-lg p-6">
                <div className="text-2xl font-serif mb-2 tracking-[-0.02em]">30%</div>
                <p className="text-sm leading-relaxed text-muted-foreground">reduction in checkout abandonment</p>
              </div>
              <div className="bg-background rounded-lg p-6">
                <div className="text-2xl font-serif mb-2 tracking-[-0.02em]">$17.2M</div>
                <p className="text-sm leading-relaxed text-muted-foreground">Series A funding</p>
              </div>
            </div>

            <div className="space-y-3 text-[17px] leading-relaxed text-muted-foreground max-w-[750px]">
              <p>
                The results were immediate: we saw a 20% lift in bookings and a 30% reduction in checkout abandonment. Beyond the UI, this work provided the strategic foundation that supported BodySpec’s $17.2M Series A funding.
              </p>
            </div>
          </section>

          <section id="reflection" className="mb-10">
            <p className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground mb-2">Reflection</p>
            <h2 className="font-serif text-[1.75rem] leading-[1.2] tracking-[-0.02em] mb-4 text-balance">
              Lessons learned
            </h2>
            <div className="space-y-3 text-[17px] leading-relaxed text-muted-foreground max-w-[750px]">
              <p>
                Turning frontline staff into a research engine gave us scale and real-world friction we couldn’t get in a lab. The “post-scan drop-off” insight–that users had no mental model for their data–reframed the product from one-off scan to longitudinal habit, and that shift drove the entire design direction.
              </p>
              <p>
                Reducing interaction cost (location search, two-click checkout) and surfacing longitudinal trends in the dashboard turned BodySpec into a habit-forming platform. The work showed how research-led design can provide both immediate conversion gains and the strategic narrative that supports fundraising.
              </p>
            </div>
          </section>

          <div className="pt-16">
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
