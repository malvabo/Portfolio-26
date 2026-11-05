"use client"

import { StoryTopBar } from "@/components/story-top-bar"
import { ScrollToTop } from "@/components/scroll-to-top"
import { BackLinkFooter } from "@/components/back-link"
import { StoryContents } from "@/components/story-contents"
import { StoryCursor } from "@/components/story-cursor"
import { Coins, Files, Keyboard, OctagonAlert, Timer, Users } from "lucide-react"
import {
  StoryPage,
  StoryHero,
  Divider,
  Lede,
  Beat,
  Wide,
  Narrow,
  Figure,
  FigurePair,
  Clip,
  CardStack,
  Stage,
  Moment,
  Results,
  Closing,
  UpNext,
  Reveal,
  Words,
} from "@/components/story-case-study"

export default function ConduitStory() {
  return (
    <div className="min-h-screen bg-background">
      <ScrollToTop />
      <StoryCursor />
      <StoryTopBar project="Conduit" />

      <StoryContents
        items={[
          { id: "overview", label: "Overview" },
          { id: "problem", label: "The problem" },
          { id: "discovery", label: "Discovery" },
          { id: "built", label: "What I built" },
          { id: "process", label: "Process" },
          { id: "impact", label: "Impact" },
          { id: "next", label: "What's next" },
        ]}
      />

      <StoryPage>
        {/* 1. Hero */}
        <div id="overview" className="scroll-mt-28" aria-hidden />
        <StoryHero
          image="/conduit/cover.png"
          imageAlt="A coffee Certificate of Origin open in Conduit, with the fields to extract listed beside it"
          title="Automating the customs paperwork for food importers"
          meta={[
            { label: "Company", value: "Conduit" },
            { label: "Timeline", value: "Four weeks" },
            { label: "Role", value: "Product and design lead" },
          ]}
          intro={
            <p>
              I led product and design for Conduit, a tool that reads supplier documents and fills the compliance forms
              importers need, on the rules each customer sets. I also built its design system from scratch.
            </p>
          }
          stats={[
            { value: "1–3 min", label: "to verify a shipment, down from 20" },
            { value: "95%", label: "lower cost per document" },
            { value: "5", label: "teams onboarded" },
          ]}
        />

        <Divider />

        {/* 2. The setup */}
        <div id="problem" className="scroll-mt-28" aria-hidden />
        <Lede statement="Every food shipment crossing a border carries a stack of certificates. Someone copies the details out of them by hand, every single time.">
          <p>
            One wrong weight or a missing certificate number, and the shipment sits at the border while the team works
            out what went wrong.
          </p>
        </Lede>

        <div className="mt-16 md:mt-24">
          <Wide>
            <FigurePair
              images={[
                { src: "/conduit/supply-drying.webp", alt: "A worker turning cocoa beans by hand on a drying rack" },
                { src: "/conduit/supply-warehouse.webp", alt: "Warehouse workers cutting open sacks of cocoa beans" },
              ]}
              caption="The shipments the paperwork follows, from the farm to the warehouse"
            />
          </Wide>
        </div>

        <Divider />

        {/* 3. Discovery */}
        <div id="discovery" className="scroll-mt-28" aria-hidden />
        <Beat kicker="Discovery" title="Sitting with the people who do the paperwork">
          <p>
            I interviewed suppliers and importers to see how documents moved between them, and where the work piled
            up.
          </p>
        </Beat>

        <div className="mt-14">
          <CardStack
            label="What I learned"
            cards={[
              {
                icon: Files,
                image: "/conduit/pixel-documents.png",
                title: "Hundreds of documents at once",
                body: "Large importers receive certificates of origin and supplier documents for every shipment, all arriving at the same time.",
              },
              {
                icon: Keyboard,
                image: "/conduit/pixel-hands.png",
                title: "Everything is retyped",
                body: "Compliance teams find the product name, origin, weight and certificate number, then copy them into internal forms by hand.",
              },
              {
                icon: OctagonAlert,
                image: "/conduit/pixel-sacks.png",
                title: "Mistakes show up at the border",
                body: "Incomplete or incorrect data holds the shipment, and teams often find out only once it is already stuck.",
              },
            ]}
          />
        </div>

        <div className="mt-16 md:mt-24 space-y-10">
          <Narrow>
            <Reveal as="p" className="text-[17px] leading-relaxed text-muted-foreground">
              With the founders and product partners, I mapped the full journey and chose what to build first:
              extracting data, spotting bad documents early, flagging shipments at risk and cutting manual filing
              errors.
            </Reveal>
          </Narrow>
          <Wide>
            <Figure
              src="/conduit/workshop.webp"
              alt="A service blueprint above a workshop board of sticky notes"
              caption="Journey mapping and artifacts from the stakeholder workshops"
            />
          </Wide>
        </div>

        <Divider />

        {/* 4. What we built */}
        <div id="built" className="scroll-mt-28" aria-hidden />
        <Beat
          kicker="New designs"
          title="I designed reusable pipelines that importers set up once and run on every shipment."
        />

        <div className="mt-16 space-y-24 md:space-y-32">
          <Stage
            title="Monitoring"
            visual={
              <Figure
                src="/conduit/dash.png"
                alt="Inbox grouped by shipment, with documents that need review flagged"
                caption="Inbox grouped by shipment, with the documents that need attention flagged"
              />
            }
          >
            <p>
              Documents arrive grouped by shipment. Anything that needs a human decision, or a new file from the
              exporter, is marked, so importers see the risky shipments at a glance.
            </p>
          </Stage>

          <Stage
            title="Extraction"
            visual={
              <Clip
                src="/conduit/parsing.mp4"
                label="Building an extraction workflow on a real supplier document"
                caption="Building an extraction pipeline on a real certificate"
              />
            }
          >
            <p>
              Importers pick the fields to pull from each document, or start from suggested fields and adjust them.
            </p>
          </Stage>

          <Stage
            title="Injection"
            visual={
              <Clip
                src="/conduit/prepop.mp4"
                label="Mapping fields on a form preview"
                caption="Mapping fields straight onto the form they fill"
              />
            }
          >
            <p>
              Importers map fields directly on the form preview, do a sample run, check the result and tweak it before
              it goes live.
            </p>
          </Stage>

          <Stage
            title="Audit and connect"
            visual={
              <FigurePair
                images={[
                  { src: "/conduit/runs.png", alt: "Runs page listing every processed document with its status" },
                  { src: "/conduit/home-api.png", alt: "Direct API call dialog for running a saved pipeline" },
                ]}
                caption="Runs for auditing every execution, and the API for connecting existing systems"
              />
            }
          >
            <p>
              Every run is recorded with its status, so compliance teams can see what happened to each document. An API
              connects the pipelines to the tools importers already use.
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
            title="Showing the document being read"
            visual={
              <Clip
                src="/conduit/ani.mp4"
                label="The reading-the-document animation"
                caption="The reading animation, from the design system's Motion section"
              />
            }
          >
            <p>
              Processing takes a few seconds. I replaced the generic spinner with motion that shows the document being
              read, so people can see what the system is doing.
            </p>
          </Moment>

          <Moment
            n={2}
            title="Building the design system alongside the product"
            visual={
              <FigurePair
                images={[
                  { src: "/conduit/ds-states.png", alt: "Button states documented with treatment rules" },
                  { src: "/conduit/ds-size.png", alt: "Empty-state illustration sizing documented with classes" },
                ]}
                caption="States and rules written down in the system, ready for the next screen"
              />
            }
          >
            <p>
              There was no design system to start from. I built the foundations, components, states and motion in
              parallel with the product, so a four-week MVP could still scale afterwards.
            </p>
          </Moment>

          <Moment
            n={3}
            title="Asking the documents questions"
            visual={
              <Figure
                src="/conduit/ask-0.png"
                alt="An answer in a side panel naming blocked and expiring documents, with sources"
                caption="Every answer arrives with the documents it came from"
              />
            }
          >
            <p>
              Pipelines handle the repetitive work, but officers still dig through files for answers. I added a
              conversational layer: ask what is missing before a shipment clears, or what expires this month, and get
              the answer with sources attached.
            </p>
            <p>
              If the right documents haven&apos;t been processed yet, Conduit suggests the pipeline to run and waits for
              approval.
            </p>
          </Moment>
        </div>

        <Divider />

        {/* 6. Results */}
        <div id="impact" className="scroll-mt-28" aria-hidden />
        <Lede statement="Importers stopped retyping certificates, and found problems before the border did." />

        <div className="mt-14">
          <Results
            items={[
              {
                icon: Timer,
                image: "/conduit/pixel-time.png",
                value: "1–3 min",
                label: "to verify a shipment",
                body: "Down from 20 minutes, saving up to two hours per shipment once pipelines replaced manual checks.",
              },
              {
                icon: Coins,
                image: "/conduit/pixel-beans.png",
                value: "95%",
                label: "lower cost per document",
                body: "Measured against the cost of processing each document by hand.",
              },
              {
                icon: Users,
                image: "/conduit/pixel-team.png",
                value: "5 teams",
                label: "onboarded",
                body: "The MVP was designed and built in four weeks, with a design system ready to grow with it.",
              },
            ]}
          />
        </div>

        <Divider />

        <div id="next" className="scroll-mt-28" aria-hidden />
        <Narrow className="mb-12">
          <Reveal as="p" className="text-[17px] leading-relaxed text-muted-foreground">
            Next, an agent could notice a missing document, find the supplier file, run the right pipeline and flag
            anything it can&apos;t resolve.
          </Reveal>
        </Narrow>
        <Closing attribution="Where it goes next">
          People stay in charge of decisions and approvals, while Conduit handles the steps in between.
        </Closing>

        <div className="mt-24 md:mt-32">
          <UpNext
            href="/projects/bodyspec"
            image="/images/bodyspec-mobile-location.png"
            imageAlt="A hand holding a phone with the BodySpec booking map"
            title="BodySpec"
            summary="Turning a one-off body scan into a health habit."
            meta={["Health tech", "Lead product designer"]}
          />
        </div>

        <Narrow className="mt-16">
          <BackLinkFooter />
        </Narrow>
      </StoryPage>
    </div>
  )
}
