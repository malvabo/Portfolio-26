"use client"

import { StoryTopBar } from "@/components/story-top-bar"
import { StoryContents } from "@/components/story-contents"
import { StoryCursor } from "@/components/story-cursor"
import { ScrollToTop } from "@/components/scroll-to-top"
import { BackLinkFooter } from "@/components/back-link"
import {
  Building2,
  Gauge,
  Layers,
  MessageCircleQuestion,
  ShieldCheck,
  Swords,
  Users,
} from "lucide-react"
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
  UpNext,
  Reveal,
  Words,
} from "@/components/story-case-study"
import { Architecture, BrandScheme, DecisionTable, Roadmap, SegmentTable } from "./diagrams"

export default function VeeqoStory() {
  return (
    <div className="min-h-screen bg-background">
      <ScrollToTop />
      <StoryCursor />
      <StoryTopBar project="Veeqo" />
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
          image="/images/vq_cover.png"
          imageAlt="Editing an integrated packing slip in the new Veeqo document system"
          title="Moving 50,000 sellers off a third-party editor"
          meta={[
            { label: "Company", value: "Veeqo · Amazon" },
            { label: "Timeline", value: "3 months" },
            { label: "Role", value: "Design lead" },
            { label: "Team", value: "10 people" },
          ]}
          intro={
            <p>
              Veeqo is a multi-channel shipping platform owned by Amazon. Its UK sellers printed every document
              through a third-party editor. I designed the in-house replacement, working across two very
              different seller segments, an unstable API and a growing scope. When our main stakeholder left
              mid-project, I took over the PRD and brought engineering into every design review.
            </p>
          }
          stats={[
            { value: "50k+", label: "sellers migrated" },
            { value: "0%", label: "enterprise churn" },
            { value: "30%", label: "fewer how-to tickets" },
          ]}
        />

        <Divider />

        {/* 2. The setup */}
        <div id="problem" className="scroll-mt-28" aria-hidden />
        <Lede kicker="01 Who and why" statement="Every order prints documents: packing slips, invoices, customs forms, return labels. For UK sellers, all of them ran through an editor nobody could extend.">
          <p>
            Veeqo was moving UK sellers onto the US product. US sellers only had basic editing, so switching off the
            vendor without a real replacement put the biggest UK accounts at risk.
          </p>
          <p>
            The goal was to switch off the vendor, keep every one of those accounts, and give the team control
            so new document types could ship on its own timeline.
          </p>
        </Lede>

        <div className="mt-10 md:mt-14">
          <Wide>
            <Figure
              src="/images/vq-doc7.webp"
              alt="The legacy third-party document editor"
              caption="The legacy third-party editor: no API access, no extensibility"
            />
          </Wide>
        </div>

        <Divider />

        {/* 3. Discovery */}
        <div id="discovery" className="scroll-mt-28" aria-hidden />
        <Beat kicker="02 Research" title="Two kinds of sellers, two very different relationships with their documents">
          <p>
            I worked from our internal research, support tickets and seller interviews in Dovetail, and looked at how
            similar platforms handled templates.
          </p>
        </Beat>

        <div className="mt-12">
          <Reveal className="max-w-[920px] mx-auto">
            <SegmentTable />
          </Reveal>
        </div>

        <div className="mt-16">
          <CardStack
            label="What research showed"
            cards={[
              {
                icon: Building2,
                image: "/images/veeqo-tile-segments.jpg",
                title: "Enterprise documents are infrastructure",
                body: "Years of custom layouts carried business logic. Losing a template meant breaking a fulfilment flow.",
              },
              {
                icon: Swords,
                image: "/images/veeqo-tile-market.jpg",
                title: "Competitors sit at two extremes",
                body: "ShipStation, Shopify and others offered rigid templates or full code editors, with nothing in between.",
              },
              {
                icon: MessageCircleQuestion,
                image: "/images/veeqo-tile-voices.jpg",
                title: "Each segment struggled differently",
                body: "Enterprise tickets were about customisation limits and reliability. Small sellers got stuck on setup and failed generation.",
              },
            ]}
          />
        </div>

        <Divider />

        {/* 4. What we built */}
        <div id="built" className="scroll-mt-28" aria-hidden />
        <Beat
          kicker="03 The solution"
          title="I split the product by need: simple templates for small sellers, HTML and AI for complex ones."
        >
          <p>
            Small sellers get category-aware templates with simple toggles, which cover most of what they need.
            Enterprise and complex sellers get an HTML editor with AI and a library of pre-coded base templates, so
            most of them only change a few lines of CSS.
          </p>
        </Beat>

        <div className="mt-8 md:mt-10 space-y-24 md:space-y-32">
          <Wide>
            <Reveal>
              <Architecture />
            </Reveal>
          </Wide>

          <Stage
            title="Templates that know their document type"
            visual={
              <Figure
                src="/images/vq-doc0.jpg"
                alt="Category-aware template defaults"
                caption="Each document type starts with the fields it usually needs"
              />
            }
          >
            <p>
              Nobody starts from a blank page. An invoice and a pick list each open with their own defaults, and sellers
              can use the ready-made version, start a variant, or pick an HTML base.
            </p>
          </Stage>

          <Stage
            title="Settings ordered by real demand"
            visual={
              <Figure
                src="/images/vq-doc31.png"
                alt="Additional settings panel with fields ordered by priority"
                caption="Most-requested fields first, edge cases after"
              />
            }
          >
            <p>
              I ranked every field by how often it came up in tickets and interviews. The most requested made
              the first release, and edge cases followed.
            </p>
          </Stage>

          <Stage
            title="An HTML editor for people who don't code"
            visual={
              <Figure
                src="/images/vq-doc4.png"
                alt="HTML editor with AI assist and live preview"
                caption="AI assist and a live preview beside the markup"
              />
            }
          >
            <p>
              A searchable field picker replaced memorising variable names. Pick Bin Location from the list and the
              right variable goes straight into the template.
            </p>
          </Stage>

          <Stage
            title="Brands and the documents they use"
            visual={
              <div className="space-y-10">
                <Reveal>
                  <BrandScheme />
                </Reveal>
                <Figure
                  src="/images/vq-doc2.jpg"
                  alt="Document library with template versions mapped to brands"
                  caption="Every brand shows which document versions apply to it by default"
                />
              </div>
            }
          >
            <p>
              Enterprise sellers often run 5 to 10 brands from one account, and each brand needs its own packing slips
              and invoices.
            </p>
            <p>
              Each brand has a default version of every document, and sellers can change which version applies to which
              brand.
            </p>
          </Stage>

          <Stage
            title="Picking a version at print time"
            visual={
              <Figure
                src="/images/vq1.png"
                alt="Choosing a document version while printing"
                caption="A custom template per document type, without leaving the print flow"
              />
            }
          >
            <p>Sellers choose which template to use for each document right where they print.</p>
          </Stage>
        </div>

        <Divider />

        {/* 5. Moments */}
        <div id="process" className="scroll-mt-28" aria-hidden />
        <Beat kicker="04" title="Key decisions" />

        <div className="mt-16 space-y-24 md:space-y-32">
          <Moment
            n={1}
            title="Cutting drag and drop"
            visual={
              <FigurePair
                images={[
                  { src: "/images/vq-doc12.png", alt: "Drag-and-drop editor exploration" },
                  { src: "/images/vq-doc8.png", alt: "Early ideation drafts" },
                ]}
                caption="Drag and drop, and a plain document table, both explored and dropped"
              />
            }
          >
            <p>
              Drag and drop was the obvious start. In critique it proved too expensive to build with the engineers we had, and a
              simple version couldn&apos;t handle enterprise complexity.
            </p>
            <p>
              A plain document table failed too: sellers name documents inconsistently, and without previews the list
              turned into noise.
            </p>
          </Moment>

          <Moment
            n={2}
            title="Hand porting over a 4-month tool"
            visual={
              <Reveal>
                <DecisionTable />
              </Reveal>
            }
          >
            <p>
              An automated migration tool would take four months. Porting enterprise templates by hand would take two
              weeks. I pushed for the manual path, which let us hit the company deadline and keep every top account.
            </p>
          </Moment>

          <Moment
            n={3}
            title="Designing around a slow API"
            visual={
              <div className="grid md:grid-cols-2 gap-4 md:gap-6">
                <Clip src="/images/skeleton.mov" label="Skeleton loading state" />
                <Clip src="/images/skeleton2.mov" label="Second skeleton loading state" />
              </div>
            }
          >
            <p>
              The document API could be slow, so I added loading states that keep the screen feeling responsive while
              documents load.
            </p>
          </Moment>

          <Moment
            n={4}
            title="Custom logic for non-coders"
            visual={
              <Figure
                src="/images/aidocs.jpeg"
                alt="AI documentation and system instructions"
                caption="The rules sellers give their AI to write templates that render"
              />
            }
          >
            <p>
              Most sellers can&apos;t code, so we gave them a shortcut: a ready-made prompt for any AI tool that writes a
              working template for them.
            </p>
            <p>That let sellers migrate on their own and cut the hands-on support we had to give.</p>
          </Moment>
        </div>

        <Divider />

        {/* 6. Results */}
        <div id="impact" className="scroll-mt-28" aria-hidden />
        <Lede kicker="05 Outcome" statement="We switched off the vendor without losing a single top-tier account." />

        <div className="mt-14">
          <Results
            items={[
              {
                icon: Users,
                image: "/images/veeqo-tile-sellers.jpg",
                value: "50k+",
                label: "sellers migrated",
                body: "The core document infrastructure moved over, protecting $15B+ in annual GMV from interruptions.",
              },
              {
                icon: ShieldCheck,
                image: "/images/veeqo-tile-churn.jpg",
                value: "0%",
                label: "enterprise churn",
                body: "Hands-on porting kept every top-tier account's templates working through the move.",
              },
              {
                icon: Gauge,
                image: "/images/veeqo-tile-speed.jpg",
                value: "Minutes",
                label: "to set up a new document",
                body: "New documents, including complex ones, now take minutes to set up instead of months.",
              },
              {
                icon: Layers,
                image: "/images/veeqo-tile-tickets.jpg",
                value: "30%",
                label: "fewer how-to tickets",
                body: "Compared with support volume on the legacy editor.",
              },
            ]}
          />
        </div>

        <Divider />

        <div id="next" className="scroll-mt-28" aria-hidden />
        <Beat kicker="What's next" title="Owning the infrastructure opens the door to document intelligence." />
        <div className="mt-12 space-y-10">
          <Reveal className="max-w-[920px] mx-auto">
            <Roadmap />
          </Reveal>
        </div>



        <div className="mt-24 md:mt-32">
          <UpNext
            href="/projects/paa"
            image="/images/paa_11.png"
            imageAlt="PAA clinical dashboard"
            title="PAA"
            summary="Designing clinical intelligence at the point of care."
            meta={["Healthcare", "Lead product designer"]}
          />
        </div>

        <Narrow className="mt-16">
          <BackLinkFooter />
        </Narrow>
      </StoryPage>
    </div>
  )
}
