"use client"

import { StoryTopBar } from "@/components/story-top-bar"
import { StoryContents } from "@/components/story-contents"
import { ScrollToTop } from "@/components/scroll-to-top"
import { BackLinkFooter } from "@/components/back-link"
import {
  StoryPage,
  StoryHero,
  Lede,
  Beat,
  Narrow,
  Figure,
  Stage,
  Moment,
  KeyCall,
  UpNext,
} from "@/components/story-case-study"
import { ReportFlow } from "./diagrams"

const Gap = () => <div className="h-14 md:h-20" aria-hidden />

// A short, product-focused version of the PAA case: the business problem, the calls that mattered, the result.
export default function PAAStory() {
  return (
    <div className="min-h-screen bg-background story-static">
      <ScrollToTop />
      <StoryTopBar project="PAA" backHref="/ai" backLabel="Mary Borysova" />
      <StoryContents
        items={[
          { id: "overview", label: "Overview" },
          { id: "problem", label: "The problem" },
          { id: "discovery", label: "What we found" },
          { id: "built", label: "Key decisions" },
          { id: "impact", label: "Outcome" },
        ]}
      />

      <StoryPage>
        <div id="overview" className="scroll-mt-28" aria-hidden />
        <StoryHero
          image="/images/paa_11.png"
          imageAlt="PAA clinical dashboard with pending action tiles and a message drawer"
          title="PAA: Scaling clinical efficiency through AI-driven workflows"
          meta={[
            { label: "Company", value: "PAA, Series C" },
            { label: "Timeline", value: "6 months, 2024" },
            { label: "Role", value: "Product design lead" },
            { label: "Worked with", value: "Clinical director, operations director, CTO" },
          ]}
          intro={
            <p>
              PAA is an AI platform for managing patient care after a hospital stay. Clinicians were losing hours to
              paperwork and missing deadlines that carried penalties. I led the clinician workspace end to end:
              deciding what to fix first, setting how AI may work with clinical data, and getting the clinical,
              operations and engineering leads behind it.
            </p>
          }
          stats={[
            { value: "~$14M", label: "a year in clinician time saved" },
            { value: "40%", label: "less time managing document workflows" },
            { value: "Tier-1", label: "deals with Kaiser, Humana and United Healthcare" },
          ]}
        />

        <Gap />

        <div id="problem" className="scroll-mt-28" aria-hidden />
        <Lede
          kicker="01 The problem"
          statement="Every deadline had a regulator or insurer behind it, and the product treated them all the same."
        >
          <p>
            In the legacy dashboard, a task that could trigger a penalty looked exactly like one that could wait a week.
            Requests from doctors and insurers sat in a separate tab, and clinicians wrote every insurer report by hand
            from an assessment they had already filled in. The cost was clinician time, missed deadlines and slower
            approvals.
          </p>
        </Lede>

        <Gap />

        <div id="discovery" className="scroll-mt-28" aria-hidden />
        <Beat kicker="02 What we found" title="Mapping the work, from admission to discharge">
          <p>
            I ran working sessions with clinical staff, case managers, care coordinators and admissions teams to map
            each workflow and every handoff between them. Three problems stood out, and I ranked them by what they cost
            the business.
          </p>
        </Beat>

        <div className="mt-12">
          <KeyCall
            label="Ranked by cost"
            rows={[
              {
                label: "Triage",
                text: "Nothing separated a regulatory risk from routine work, so clinicians re-sorted their whole list at every login and overdue tasks stayed overdue.",
              },
              {
                label: "Paperwork",
                text: "Reports for insurers repeated the assessment by hand. This was the biggest single drain on clinician time.",
              },
              {
                label: "Context",
                text: "Requests from doctors and insurers lived in a tab nobody saw from the task view, so answers came late.",
              },
            ]}
          />
        </div>

        <Gap />

        <div id="built" className="scroll-mt-28" aria-hidden />
        <Beat kicker="03 Key decisions" title="Fix triage first, then let AI take the paperwork, on rules clinicians and insurers can trust." />

        <div className="mt-10 md:mt-14 space-y-12 md:space-y-16">
          <Stage
            title="Start with what's urgent"
            visual={
              <Figure
                src="/images/paa-tasks.png"
                alt="Pending action tiles above the task table"
                caption="Past due, due today and unread first; everything else in one table"
              />
            }
          >
            <p>
              Before adding AI, I made sure clinicians could see the risk in their day. The workspace now opens on what
              is past due, due today and unread, so a clinician reads the urgency of a whole shift in seconds. Everything
              else lives in one table they can sort, filter and approve from.
            </p>
          </Stage>

          <Stage
            title="AI drafts the report, the clinician signs it"
            visual={
              <Figure
                src="/images/paa-doc2.png"
                alt="AI-generated documentation draft"
                caption="A report drafted from the assessment, ready for review"
              />
            }
          >
            <p>
              The biggest time cost was rewriting the assessment as a report for the insurer. Now the AI drafts that
              report from the assessment, and the clinician reviews and signs it. A person stays accountable for every
              report that leaves the building.
            </p>
          </Stage>

          <Moment title="One locked record as the source of truth">
            <p>
              For AI recommendations to be trusted, the input had to be trustworthy. Clinicians submit the core
              assessment first and it locks. Only then does the AI generate the recommendation and the report, from
              nothing but that record. Nobody can go back and adjust the assessment to steer the outcome.
            </p>
          </Moment>

          <div className="mx-auto max-w-[760px]">
            <ReportFlow />
          </div>

          <Moment title="Requests next to the patient">
            <p>
              Messages from doctors and insurers now open beside the patient&apos;s case, with their condition and
              hospital status above the thread, so clinicians answer without switching screens.
            </p>
          </Moment>
        </div>

        <Gap />

        <div id="impact" className="scroll-mt-28" aria-hidden />
        <Lede kicker="04 Outcome" statement="Clinicians got their time back, and major health plans signed on.">
          <p>
            Time spent managing document workflows fell 40%, worth about $14M a year in clinician time. Thousands of
            clinicians and facility staff use the platform, and PAA closed multi-million deals with Kaiser, Humana and
            United Healthcare.
          </p>
        </Lede>

        <div className="mt-16 md:mt-20">
          <UpNext
            href="/cases/conduit"
            image="/conduit/cover.png"
            imageAlt="A coffee Certificate of Origin open in Conduit"
            title="Conduit"
            summary="An AI product for customs compliance."
            meta={["Logistics", "Product lead"]}
          />
        </div>

        <Narrow className="mt-16">
          <BackLinkFooter />
        </Narrow>
      </StoryPage>
    </div>
  )
}
