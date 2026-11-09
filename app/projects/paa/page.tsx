"use client"

import { StoryTopBar } from "@/components/story-top-bar"
import { StoryContents } from "@/components/story-contents"
import { StoryCursor } from "@/components/story-cursor"
import { ScrollToTop } from "@/components/scroll-to-top"
import { BackLinkFooter } from "@/components/back-link"
import { AlarmClock, Handshake, Lock, MessagesSquare, Rows3, Timer } from "lucide-react"
import {
  StoryPage,
  StoryHero,
  Divider,
  Lede,
  Beat,
  Wide,
  Narrow,
  Figure,
  CardStack,
  Stage,
  Moment,
  Results,
  UpNext,
  Reveal,
  Words,
} from "@/components/story-case-study"

export default function PAAStory() {
  return (
    <div className="min-h-screen bg-background">
      <ScrollToTop />
      <StoryCursor />
      <StoryTopBar project="PAA" />
      <StoryContents
        items={[
          { id: "overview", label: "Overview" },
          { id: "problem", label: "Who and why" },
          { id: "discovery", label: "Research" },
          { id: "built", label: "The solution" },
          { id: "process", label: "Key decisions" },
          { id: "impact", label: "Outcome" },
        ]}
      />

      <StoryPage>
        {/* 1. Hero */}
        <div id="overview" className="scroll-mt-28" aria-hidden />
        <StoryHero
          image="/images/paa_11.png"
          imageAlt="PAA clinical dashboard with pending action tiles and a message drawer"
          title="PAA: Scaling clinical efficiency through AI-driven workflows"
          meta={[
            { label: "Company", value: "PAA" },
            { label: "Timeline", value: "6 months, 2024" },
            { label: "Role", value: "Lead product designer" },
          ]}
          intro={
            <p>
              PAA is an AI platform for managing patient care after a hospital stay. I led design from a legacy
              product with no design files to a dashboard that shows clinicians what&apos;s urgent in seconds,
              and cuts paperwork with AI that drafts reports for clinicians to check. I worked with the clinical
              director, operations director and CTO, and owned the interaction model end to end.
            </p>
          }
          stats={[
            { value: "~$14M", label: "a year saved, from 40% less time managing document workflows" },
            { value: "1,000s", label: "clinicians and facility staff using it" },
            { value: "Tier-1", label: "deals with Kaiser, Humana and United Healthcare" },
          ]}
        />

        <Divider />

        {/* 2. The setup */}
        <div id="problem" className="scroll-mt-28" aria-hidden />
        <Lede kicker="01 Who and why" statement="Patients who've just left hospital still need care. Their plans are complex, and every deadline has a regulator or insurer behind it.">
          <p>
            Yet in PAA&apos;s legacy dashboard, a task that could trigger a penalty looked exactly like one that could
            wait a week. Requests from physicians sat in a separate chat tab, cut off from the task list.
          </p>
        </Lede>

        <div className="mt-10 md:mt-14">
          <Wide>
            <Figure
              src="/images/paa-0.png"
              alt="Legacy dashboard with a flat, unsorted task table"
              caption="Past due, due today, due next week: all with the same visual weight"
            />
          </Wide>
        </div>

        <Divider />

        {/* 3. Discovery */}
        <div id="discovery" className="scroll-mt-28" aria-hidden />
        <Beat kicker="02 Research" title="Mapping clinical workflows, from admission to discharge">
          <p>
            I ran working sessions with clinical staff, case managers, care coordinators and admissions teams to map
            each of their workflows step by step, and where they handed work to each other.
          </p>
        </Beat>

        <div className="mt-14">
          <CardStack
            label="What research showed"
            cards={[
              {
                icon: Rows3,
                image: "/images/paa-tile-triage.jpg",
                title: "Prioritization paralysis",
                body: "Clinicians re-sorted their whole list at every login. Nothing separated a regulatory risk from routine work.",
              },
              {
                icon: MessagesSquare,
                image: "/images/paa-tile-silos.jpg",
                title: "Information silos",
                body: "Insurers and doctors asked for notes and approvals by message, in a tab nobody saw from the task view.",
              },
              {
                icon: AlarmClock,
                image: "/images/paa-tile-overdue.jpg",
                title: "No escalation trigger",
                body: "Without any sign of urgency, overdue tasks simply stayed overdue.",
              },
            ]}
          />
        </div>

        <Divider />

        {/* 4. What we built */}
        <div id="built" className="scroll-mt-28" aria-hidden />
        <Beat
          kicker="03 The solution"
          title="A dashboard that answers the most urgent question first, then lets clinicians dig in."
        />

        <div className="mt-5 space-y-24 md:space-y-32">
          <Stage
            title="Pending action tiles"
            visual={
              <Figure
                src="/images/paa-tasks.png"
                alt="Pending action tiles above the task table"
                caption="Tiles surface the critical picture, the table handles the detail"
              />
            }
          >
            <p>
              A row of high-contrast tiles counts what is past due, due today and unread. A clinician can read the
              urgency of a whole shift in under three seconds.
            </p>
          </Stage>

          <Stage
            title="A message drawer that carries the patient’s condition and hospital status"
            visual={
              <Figure
                src="/images/paa-messages.png"
                alt="Messages inbox with a patient's case summary shown above the conversation thread"
                caption="Messages beside the patient's case, with starring and key metadata"
              />
            }
          >
            <p>
              Requests from insurers and doctors lived in a separate tab, so clinicians switched screens to
              understand a single patient. Messages now open in a drawer that shows the patient&apos;s key data
              above the thread: their condition and their current status in hospital.
            </p>
          </Stage>

          <Stage
            title="A task table that goes deeper"
            visual={
              <Figure
                src="/images/paa-2.png"
                alt="Assessment completion screen with a Generate Documentation button"
                caption="Finishing an assessment leads straight to documentation"
              />
            }
          >
            <p>
              Everything else lives in one task table that clinicians can sort and filter, and approve documents from
              without leaving the page.
            </p>
          </Stage>

          <Stage
            title="Faster reports with AI drafts"
            visual={
              <Figure
                src="/images/paa-doc2.png"
                alt="AI-generated documentation draft"
                caption="A report drafted from the assessment, ready for review"
              />
            }
          >
            <p>
              Clinicians filled in a patient assessment, then wrote the same facts out again as a report for the insurer.
              Now the AI turns the assessment into that report, and the clinician reviews and signs it.
            </p>
          </Stage>
        </div>

        <Divider />

        {/* 5. Moments */}
        <div id="process" className="scroll-mt-28" aria-hidden />
        <Beat kicker="04" title="Key decisions" />

        <div className="mt-5 space-y-24 md:space-y-32">
          <Moment
            n={1}
            title="Splitting &ldquo;am I on fire?&rdquo; from &ldquo;what&apos;s next?&rdquo;"
            visual={
              <Figure
                src="/images/paa-3.png"
                alt="Dashboard iterations, each with status tiles above a patient table"
                caption="Dashboard iterations: tiles for what's urgent, a table for what's next"
              />
            }
          >
            <p>
              My early wireframes put everything in one feed sorted by urgency. Clinicians needed to tell immediate
              risks apart from ongoing work, so I split the screen: tiles for &quot;am I on fire right now?&quot; and a
              table for &quot;what do I work through next?&quot;
            </p>
          </Moment>

          <Moment
            n={2}
            title="One locked record, one source of truth"
            visual={
              <Figure
                src="/images/paa-discharge.png"
                blur
                alt="Discharge documentation flow"
                caption="The AI drafts only from the locked assessment"
              />
            }
          >
            <p>
              Clinicians enter the core patient assessment first: the objective, unambiguous data the rest of the care
              plan depends on. When they submit it, it locks. Only then does the AI generate the recommendation and the
              report for the insurer, built from nothing but that record.
            </p>
            <p>
              Nobody can go back and adjust the assessment to steer the AI towards the outcome they want. The locked
              record becomes the single source of truth for every recommendation and report, and it can&apos;t be changed
              after the fact.
            </p>
          </Moment>
        </div>

        <Divider />

        {/* 6. Results */}
        <div id="impact" className="scroll-mt-28" aria-hidden />
        <Lede kicker="05 Outcome" statement="Clinicians got their time back, and major health plans signed contracts for the platform." />

        <div className="mt-14">
          <Results
            items={[
              {
                icon: Timer,
                image: "/images/paa-tile-time.jpg",
                value: "~$14M",
                label: "a year in clinician time",
                body: "From 40% less time managing document workflows.",
              },
              {
                icon: Handshake,
                image: "/images/paa-tile-deals.jpg",
                value: "Tier-1",
                label: "deals unlocked",
                body: "Multi-million deals with Kaiser, Humana and United Healthcare.",
              },
              {
                icon: Lock,
                image: "/images/paa-tile-lock.jpg",
                value: "AI",
                label: "recommendations that can’t be gamed",
                body: "AI-powered recommendations now draw on a locked clinical assessment, so they stay accurate and clinicians can’t steer the outcome.",
              },
            ]}
          />
        </div>

        <div className="mt-24 md:mt-32">
          <UpNext
            href="/projects/squirll"
            image="/images/squirll-collage-1.jpg"
            imageAlt="Squirll budgeting app screens"
            title="Squirll"
            summary="Designing an AI finance app from zero."
            meta={["Fintech", "Lead product designer"]}
          />
        </div>

        <Narrow className="mt-16">
          <BackLinkFooter />
        </Narrow>
      </StoryPage>
    </div>
  )
}
