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
          { id: "problem", label: "Who and why" },
          { id: "discovery", label: "Research" },
          { id: "built", label: "The solution" },
          { id: "process", label: "Key decisions" },
          { id: "impact", label: "Outcome" },
          { id: "next", label: "What's next" },
        ]}
      />

      <StoryPage>
        {/* 1. Hero */}
        <div id="overview" className="scroll-mt-28" aria-hidden />
        <StoryHero
          image="/conduit/cover.png"
          imageAlt="A coffee Certificate of Origin open in Conduit, with the fields to extract listed beside it"
          title="Automating customs paperwork for food importers"
          meta={[
            { label: "Company", value: "Conduit" },
            { label: "Timeline", value: "Four weeks" },
            { label: "Role", value: "Product and design lead" },
          ]}
          intro={
            <p>
              Conduit reads supplier documents and fills in the compliance forms food importers file. I led product and design for the first version, built in four weeks,
              and its design system from scratch. I worked directly with the founders and changed what the
              product does: importers set their own compliance rules, and Conduit gets the data right.
            </p>
          }
          stats={[
            { value: "1-3 min", label: "to verify a shipment, down from 20" },
            { value: "95%", label: "lower cost per document" },
            { value: "5", label: "teams rolled out to" },
          ]}
        />

        <Divider />

        {/* 2. The setup */}
        <div id="problem" className="scroll-mt-28" aria-hidden />
        <Lede kicker="01 Who and why" statement="Every food shipment that crosses a border travels with a stack of certificates, and compliance teams retype the details from each one.">
          <p>
            A single wrong weight or missing certificate number is enough to hold the shipment at the border.
          </p>
        </Lede>

        <div className="mt-10 md:mt-14">
          <Wide>
            <FigurePair
              images={[
                { src: "/conduit/supply-drying.webp", alt: "A worker turning cocoa beans by hand on a drying rack" },
                { src: "/conduit/supply-warehouse.webp", alt: "Warehouse workers cutting open sacks of cocoa beans" },
              ]}
              caption="The shipments the paperwork follows, from the farm to the warehouse"
              aspect="3/2"
            />
          </Wide>
        </div>

        <Divider />

        {/* 3. Discovery */}
        <div id="discovery" className="scroll-mt-28" aria-hidden />
        <Beat kicker="02 Research" title="Sitting with the people who do the paperwork">
          <p>
            I interviewed suppliers and importers to see how documents moved between them, and where the work piled
            up.
          </p>
        </Beat>

        <div className="mt-14">
          <CardStack
            label="What research showed"
            cards={[
              {
                icon: Files,
                image: "/conduit/tile-documents.jpg",
                title: "Hundreds of documents at once",
                body: "Large importers receive a certificate of origin and supplier documents for every shipment, and they arrive in batches.",
              },
              {
                icon: Keyboard,
                image: "/conduit/tile-hands.jpg",
                title: "Everything is retyped",
                body: "Compliance teams find the product name, origin, weight and certificate number, then copy them into internal forms by hand.",
              },
              {
                icon: OctagonAlert,
                image: "/conduit/tile-sacks.jpg",
                title: "Mistakes show up at the border",
                body: "Incomplete or incorrect data holds the shipment, and teams often find out only once it is already stuck.",
              },
            ]}
          />
        </div>

        <div className="mt-10 md:mt-14 space-y-10">
          <Narrow>
            <Reveal as="p" className="text-[17px] leading-relaxed text-muted-foreground">
              With the founders and product partners, I mapped the journey end to end and narrowed the first release
              to four jobs: extract the data, catch bad documents early, flag shipments at risk and cut manual filing errors.
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
          kicker="03 The solution"
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
              Documents arrive grouped by shipment, and anything that needs a person's decision or a new file
              from the exporter is flagged. Importers can see which shipments are at risk without opening them.
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
              Importers choose which fields to pull from each document type, or start from Conduit's suggestions and adjust them.
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
              Importers map fields directly on the form preview, test it on a sample document and adjust it before it goes live.
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
        <Beat kicker="04" title="Key decisions" />

        <div className="mt-16 space-y-24 md:space-y-32">
          <Moment
            n={1}
            title="Dropping the rules engine"
            visual={
              <Figure
                src="/conduit/ideation.png"
                alt="Six inbox directions explored side by side, each annotated with why it failed"
                caption="Inbox directions, each annotated with why it failed"
              />
            }
          >
            <p>
              The plan was for Conduit to pass or fail each document. Research showed that every importer
              checks documents against its own policy. A single pass or fail rule couldn&apos;t serve them all.
            </p>
            <p>
              I recommended letting each importer choose what to check. Conduit only extracts the data from their
              documents and fills in the importer&apos;s forms. The founders agreed, and we built that instead.
            </p>
          </Moment>

          <Moment
            n={2}
            title="Confidence on every field"
            visual={
              <Figure
                src="/conduit/states.png"
                alt="Extracted fields as confident, needs review, not found and corrected"
                caption="The states a field can arrive in"
              />
            }
          >
            <p>
              Reading a scanned certificate is never certain, and an officer who accepts a wrong value signs their name
              to it. Each extracted field carries a confidence level, and anything below the threshold is flagged for
              review.
            </p>
          </Moment>

          <Moment
            n={3}
            title="A design system from day one"
            visual={
              <Figure
                src="/conduit/ds.webp"
                alt="The design system: foundations, motion spec, colour tokens and input states"
                caption="Foundations, components, states and motion"
              />
            }
          >
            <p>
              There was no design system to start from. I built the foundations, components, states and motion in
              parallel with the product, so a product built in four weeks could still scale afterwards.
            </p>
          </Moment>

          <Moment
            n={4}
            title="Answers with their sources"
            visual={
              <Figure
                src="/conduit/ask-1.png"
                alt="Asking Conduit a question about processed documents, with sources attached"
                caption="Every answer arrives with the documents it came from"
              />
            }
          >
            <p>
              Pipelines handle the repetitive work, but officers still dig through files for answers. I added a
              conversational layer: ask what is missing before a shipment clears, or what expires this month, and get
              the answer with sources attached.
            </p>
          </Moment>
        </div>

        <Divider />

        {/* 6. Results */}
        <div id="impact" className="scroll-mt-28" aria-hidden />
        <Lede kicker="05 Outcome" statement="Importers stopped retyping certificates, and found problems before the border did." />

        <div className="mt-14">
          <Results
            items={[
              {
                icon: Timer,
                image: "/conduit/tile-time.jpg",
                value: "1-3 min",
                label: "to verify a shipment",
                body: "Down from 20 minutes, saving up to two hours per shipment once pipelines replaced manual checks.",
              },
              {
                icon: Coins,
                image: "/conduit/tile-beans.jpg",
                value: "95%",
                label: "lower cost per document",
                body: "Measured against the cost of processing each document by hand.",
              },
              {
                icon: Users,
                image: "/conduit/tile-team.jpg",
                value: "5 teams",
                label: "rolled out to",
                body: "Designed and built in four weeks, with a design system ready to grow with it.",
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
            href="/projects/veeqo"
            image="/images/vq_cover.png"
            imageAlt="Editing a packing slip in the Veeqo document system"
            title="Veeqo"
            summary="Rebuilding the document system behind 50,000+ sellers."
            meta={["Shipping", "Product designer"]}
          />
        </div>

        <Narrow className="mt-16">
          <BackLinkFooter />
        </Narrow>
      </StoryPage>
    </div>
  )
}
