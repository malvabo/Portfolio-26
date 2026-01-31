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
              PandaDoc: Enhancing Productivity for 50K Businesses
            </h1>
            <p className="text-[17px] text-muted-foreground leading-relaxed">
              Extension design to speed up document workflows for 50k businesses
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
                  Driving growth & engagement: created a PandaDoc Chrome Extension to streamline document workflows for
                  50K+ businesses.
                </span>
              </li>
              <li className="flex gap-4">
                <span className="text-muted-foreground mt-1">•</span>
                <span>
                  I identified key pain points: tracking document views, real-time drafting, and simplifying template
                  selection.
                </span>
              </li>
              <li className="flex gap-4">
                <span className="text-muted-foreground mt-1">•</span>
                <span>
                  Launched in phases: prioritized core features, introduced starred templates, and planned rich
                  notifications for future updates.
                </span>
              </li>
              <li className="flex gap-4">
                <span className="text-muted-foreground mt-1">•</span>
                <span>
                  I collaborated with marketing to optimize marketplace traction, with metrics tracking retention, new
                  user acquisition, and conversion rates.
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
              Bringing document automation to 50K businesses
            </h2>
            <div className="space-y-5 text-[17px] leading-relaxed text-muted-foreground max-w-[750px]">
              <p>
                PandaDoc is a document automation software to streamline the process to create, approve, and eSign
                proposals, templates and contracts. PandaDoc is the #1 proposal, contract and document solution by G2.
              </p>
              <p>
                I wanted to build an extension that would serve as a valuable asset for current users promoting paid
                features and also would help me attract new users from the marketplace.
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
                  "Have they already reviewed my proposal?"
                </h3>
                <p className="text-[17px] leading-relaxed text-muted-foreground">
                  Every successful sales rep tracks the updates of their proposals and materials shared. Users were
                  confused with the number of emails with updates PandaDoc sent.
                </p>
              </div>

              <div>
                <h3 className="font-serif text-xl leading-[1.3] tracking-[-0.02em] mb-2">
                  "I need to draft the docs real time during the calls"
                </h3>
                <p className="text-[17px] leading-relaxed text-muted-foreground">
                  Timing is of essence for sales and marketing reps. They often draft docs as they go over the
                  requirements and solutions with clients on calls.
                </p>
              </div>

              <div>
                <h3 className="font-serif text-xl leading-[1.3] tracking-[-0.02em] mb-2">
                  "There are too many templates and I usually need a few"
                </h3>
                <p className="text-[17px] leading-relaxed text-muted-foreground">
                  Some users needed to find a template quickly while drafting documents. Finding the right template
                  required extra energy and attention.
                </p>
              </div>
            </div>
          </section>

          <section id="solution" className="mb-16">
            <p className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground mb-4">Solution</p>
            <h2 className="font-serif text-[2rem] leading-[1.2] tracking-[-0.02em] mb-6 text-balance">
              Divide and conquer: project stages
            </h2>

            <div className="space-y-8 max-w-[750px]">
              <p className="text-[17px] leading-relaxed text-muted-foreground">
                After discussions with developers I decided to move "rich" notifications feature to version 2 since it
                required more resources.
              </p>

              <p className="text-[17px] leading-relaxed text-muted-foreground">
                I designed "starred" templates for quick access to users' most commonly used templates. This feature was
                added to version 3.
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
              Rolled out to beta testers
            </h2>

            <div className="space-y-5 text-[17px] leading-relaxed text-muted-foreground max-w-[750px]">
              <p>
                The PandaDoc Extension is an ongoing project. This extension was rolled out to a specific cohort of
                active users, the team will collect the data and make decisions on the next steps based on the market
                traction and feedback.
              </p>
              <p className="font-medium text-foreground text-[17px]">Metrics to be monitored further:</p>
              <ul className="space-y-3 text-[17px]">
                <li className="flex gap-4">
                  <span className="mt-1">•</span>
                  <span>Retention to the extension</span>
                </li>
                <li className="flex gap-4">
                  <span className="mt-1">•</span>
                  <span>Number of new accounts coming from the extension source</span>
                </li>
                <li className="flex gap-4">
                  <span className="mt-1">•</span>
                  <span>Conversion to paid of the new and current accounts coming from the extension source</span>
                </li>
              </ul>
            </div>
          </section>

          <section id="reflection" className="mb-16">
            <p className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground mb-4">Reflection</p>
            <h2 className="font-serif text-[2rem] leading-[1.2] tracking-[-0.02em] mb-6 text-balance">
              Lessons learned
            </h2>
            <div className="space-y-5 text-[17px] leading-relaxed text-muted-foreground max-w-[750px]">
              <p>
                The project highlighted the importance of user research and iterative design. By understanding the needs
                of my users, I was able to create a more intuitive and efficient document management solution.
              </p>
              <p>
                Collaborating with developers early in the process also proved beneficial. It allowed me to prioritize
                features that were feasible to implement within my timeframe and resources.
              </p>
              <p>
                Feedback from beta testers has been invaluable in guiding further development. Their insights have
                helped me refine the extension and improve the user experience.
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
