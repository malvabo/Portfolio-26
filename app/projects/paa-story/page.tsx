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
  Closing,
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
          { id: "problem", label: "The problem" },
          { id: "discovery", label: "Discovery" },
          { id: "built", label: "What I built" },
          { id: "process", label: "Process" },
          { id: "impact", label: "Impact" },
          { id: "next", label: "Takeaway" },
        ]}
      />

      <StoryPage>
        {/* 1. Hero */}
        <div id="overview" className="scroll-mt-28" aria-hidden />
        <StoryHero
          image="/images/paa_11.png"
          imageAlt="PAA clinical dashboard with pending action tiles and a message drawer"
          title="Designing clinical intelligence at the point of care"
          meta={[
            { label: "Company", value: "PAA" },
            { label: "Timeline", value: "6 months, 2020" },
            { label: "Role", value: "Lead product designer" },
          ]}
          intro={
            <p>
              PAA is an AI platform for managing patient care after a hospital stay. I led design from a legacy product
              with no editable designs to a dashboard clinicians could triage in seconds, plus AI documentation that
              kept clinical data honest.
            </p>
          }
          stats={[
            { value: "40%", label: "time saved on clinical workflows" },
            { value: "30+", label: "screen iterations" },
            { value: "Tier-1", label: "health plan deals unlocked" },
          ]}
        />

        <Divider />

        {/* 2. The setup */}
        <div id="problem" className="scroll-mt-28" aria-hidden />
        <Lede statement="Patients in post-acute care have just left the hospital. Their care plans are complex, and every deadline has a regulator or a payer behind it.">
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
        <Beat kicker="Discovery" title="Asking clinicians what last made them feel behind">
          <p>
            I ran working sessions with clinical staff, case managers, care coordinators and admissions teams, all
            built around that one question.
          </p>
        </Beat>

        <div className="mt-14">
          <CardStack
            label="What I learned"
            cards={[
              {
                icon: Rows3,
                image: "/images/paa-tile-triage.jpg",
                title: "Prioritization paralysis",
                body: "Clinicians re-triaged their whole list at every login. Nothing separated a regulatory risk from routine work.",
              },
              {
                icon: MessagesSquare,
                image: "/images/paa-tile-silos.jpg",
                title: "Information silos",
                body: "Payers and physicians asked for notes and authorizations by message, in a tab nobody saw from the task view.",
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
          kicker="New designs"
          title="A dashboard that answers the most urgent question first, then lets clinicians dig in."
        />

        <div className="mt-16 space-y-24 md:space-y-32">
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
            title="Messages with the patient in view"
            visual={
              <Figure
                src="/images/paa-messages.png"
                alt="Message drawer beside the patient's clinical data"
                caption="The thread and the patient's clinical data, side by side"
              />
            }
          >
            <p>
              Document requests became an urgency tile. Opening one slides out a drawer with the thread next to the
              patient&apos;s clinical data, so the patient never leaves the screen.
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
              Below the tiles, a filterable table sorts by due date, task type, facility or patient. Clinicians can
              review and approve documents without leaving the home page.
            </p>
          </Stage>

          <Stage
            title="AI drafts for SNF documentation"
            visual={
              <Figure
                src="/images/paa-doc2.png"
                alt="AI-generated documentation draft"
                caption="A draft narrative built from assessment data and CMS criteria, ready for review"
              />
            }
          >
            <p>
              Clinicians used to fill in a structured assessment, then rewrite the same facts as a narrative for SNF
              qualification and payer authorization. Now the assessment produces a structured summary that follows SNF
              criteria, ready for the clinician&apos;s judgement.
            </p>
          </Stage>
        </div>

        <Divider />

        {/* 5. Moments */}
        <div id="process" className="scroll-mt-28" aria-hidden />
        <Narrow>
          <Words className="text-[1.6rem] md:text-[2rem] leading-[1.3] tracking-[-0.015em] text-balance">
            A few moments from the process behind the final product.
          </Words>
        </Narrow>

        <div className="mt-16 space-y-24 md:space-y-32">
          <Moment
            n={1}
            title="From one feed to two tiers"
            visual={
              <Figure
                src="/images/paa-3.png"
                alt="Wireframes moving from a unified feed to a two-tier structure"
                caption="From a single prioritized feed (left) to tiles plus a table (right)"
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
            title="Letting card sorting shape the tiles"
            visual={
              <Figure
                src="/images/paa-4.png"
                alt="Old messages tab compared with the new contextual drawer"
                caption="Before: messages in a separate tab. After: a drawer that keeps clinical data visible"
              />
            }
          >
            <p>
              The first version landed well, but the tasks weren&apos;t grouped by what mattered to clinicians. Card
              sorting with clinical staff showed how to group them by acuity, with clear past-due markers pointing to
              where effort should go first.
            </p>
          </Moment>

          <Moment
            n={3}
            title="Locking the assessment before the AI writes"
            visual={
              <Figure
                src="/images/paa-discharge.png"
                alt="Discharge documentation flow"
                caption="Documentation is generated only after the assessment is locked"
              />
            }
          >
            <p>
              If clinicians could see the AI draft before submitting, they could go back and tweak answers to get a
              better result. So generation only starts once the assessment is locked. The narrative stays editable, the
              clinical data doesn&apos;t.
            </p>
          </Moment>
        </div>

        <Divider />

        {/* 6. Results */}
        <div id="impact" className="scroll-mt-28" aria-hidden />
        <Lede statement="Clinicians got their time back, and the platform became something major health plans would buy." />

        <div className="mt-14">
          <Results
            items={[
              {
                icon: Timer,
                image: "/images/paa-tile-time.jpg",
                value: "40%",
                label: "time saved",
                body: "Measured after launch across care coordinator workflows.",
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
                value: "Locked",
                label: "data before drafts",
                body: "The lock-before-generate sequence kept AI documentation true to the clinical record.",
              },
            ]}
          />
        </div>

        <Divider />

        <div id="next" className="scroll-mt-28" aria-hidden />
        <Narrow className="mb-12">
          <Reveal as="p" className="text-[17px] leading-relaxed text-muted-foreground">
            Next time I would set up regular reviews with clinicians on real screens before the first wireframe, and
            secure HIPAA-compliant test data in the first week. Both came late here, and both caught problems we only
            found in QA.
          </Reveal>
        </Narrow>
        <Closing attribution="What I took away">
          Clinicians don&apos;t tell you what they want. They show you where they hesitate.
        </Closing>

        <div className="mt-24 md:mt-32">
          <UpNext
            href="/projects/squirll"
            image="/images/squirll-collage-1.jpg"
            imageAlt="Squirll budgeting app screens"
            title="Squirll"
            summary="Designing a budgeting app people do not quit."
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
