"use client"

import { StoryTopBar } from "@/components/story-top-bar"
import { StoryContents } from "@/components/story-contents"
import { StoryCursor } from "@/components/story-cursor"
import { ScrollToTop } from "@/components/scroll-to-top"
import { BackLinkFooter } from "@/components/back-link"
import { Award, CalendarRange, Landmark, Rocket, Smile, Sparkles } from "lucide-react"
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

export default function SquirllStory() {
  return (
    <div className="min-h-screen bg-background">
      <ScrollToTop />
      <StoryCursor />
      <StoryTopBar project="Squirll" />
      <StoryContents
        items={[
          { id: "overview", label: "Overview" },
          { id: "problem", label: "Who and why" },
          { id: "discovery", label: "Research" },
          { id: "built", label: "The solution" },
          { id: "process", label: "Key decisions" },
          { id: "impact", label: "Outcome" },
          { id: "next", label: "Takeaway" },
        ]}
      />

      <StoryPage>
        {/* 1. Hero */}
        <div id="overview" className="scroll-mt-28" aria-hidden />
        <StoryHero
          image="/images/squirll-collage-1.jpg"
          imageAlt="Squirll spending analytics on a dark, warm interface"
          title="Squirll: Turning receipts into insights with AI"
          meta={[
            { label: "Company", value: "Squirll" },
            { label: "Timeline", value: "3 months, 2025" },
            { label: "Role", value: "Lead product designer" },
          ]}
          intro={
            <p>
              Squirll is an AI finance platform that connects to your accounts, reads your patterns and surfaces
              what matters. As the only designer, I set the brand and product principles with two founders, a PM
              and three engineers, from a blank page to a closed beta.
            </p>
          }
          stats={[
            { value: "3×", label: "Design Awards: 1 Gold & 2 Silver" },
            { value: "3 months", label: "to build the mobile app" },
          ]}
        />

        <Divider />

        {/* 2. The setup */}
        <div id="problem" className="scroll-mt-28" aria-hidden />
        <Lede kicker="01 Who and why" statement="Most people give up on budgeting apps. They feel like homework, and every screen asks you to pay attention.">
          <p>
            Squirll&apos;s AI does the noticing for you, so the design had to make that obvious from the first screen.
          </p>
        </Lede>

        <Divider />

        {/* 3. Discovery */}
        <div id="discovery" className="scroll-mt-28" aria-hidden />
        <Beat kicker="02 Research" title="Looking for the gap in personal finance">
          <p>Before any visual direction, I ran competitor research across personal finance apps.</p>
        </Beat>

        <div className="mt-14">
          <CardStack
            label="What research showed"
            cards={[
              {
                icon: Landmark,
                image: "/images/squirll-tile-bank.jpg",
                title: "Clinical white feels like a bank",
                body: "Many apps defaulted to bright, sterile screens that read like a banking portal.",
              },
              {
                icon: Smile,
                image: "/images/squirll-tile-playful.jpg",
                title: "Playful undersells the intelligence",
                body: "Others used cheerful illustration, which made the product feel lighter than it was.",
              },
              {
                icon: Sparkles,
                image: "/images/squirll-tile-calm.jpg",
                title: "Premium and calm was empty",
                body: "Almost nobody occupied the quiet, premium space in between. That gap shaped everything after.",
              },
            ]}
          />
        </div>

        <div className="mt-10 md:mt-14 space-y-10">
          <Narrow>
            <Reveal>
              <p className="font-serif text-[1.6rem] md:text-[1.9rem] leading-[1.25] tracking-[-0.02em]">
                &ldquo;The product should feel like a premium spa.&rdquo;
              </p>
              <p className="mt-4 text-[17px] leading-relaxed text-muted-foreground">
                I set this principle with the founders and PM before any visual work: arrive, and feel that something
                capable is already handling things. It became the filter for every decision.
              </p>
            </Reveal>
          </Narrow>
          <Wide>
            <FigurePair
              images={[
                { src: "/images/sq-6-2000.jpg", alt: "Early Squirll direction draft" },
                { src: "/images/sq-7-2000.jpg", alt: "Second early Squirll direction draft" },
              ]}
              caption="Early direction drafts"
            />
          </Wide>
        </div>

        <Divider />

        {/* 4. What we built */}
        <div id="built" className="scroll-mt-28" aria-hidden />
        <Beat
          kicker="03 The solution"
          title="A warm, dark product that signals: this is already taken care of."
        />

        <div className="mt-5 space-y-24 md:space-y-32">
          <Stage
            title="A dashboard that lowers your guard"
            visual={
              <Figure src="/images/sq-3.jpg"
                alt="Squirll analytics dashboard" caption="Analytics line graph view" />
            }
          >
            <p>
              The glowing circle at the centre does one job: before a single number is read, it tells you this is a
              calm place and nothing is being asked of you yet.
            </p>
          </Stage>

          <Stage
            title="Analytics and merchant messages"
            visual={
              <Figure
                src="/images/SQ-44.jpg"
                alt="Squirll analytics and messages screens"
                caption="Analytics and merchant messages"
              />
            }
          >
            <p>
              Analytics shows what you spent with no targets or warnings, so checking in never feels like a test.
              Messages from each shop sit together, away from a busy inbox.
            </p>
          </Stage>

          <Stage
            title="Onboarding that moves"
            visual={
              <div className="space-y-6">
                <Clip src="/images/Sq1.mp4" label="Onboarding orbital glow animation" />
                <Clip src="/images/Sq2.mp4" label="Account linking animation" />
              </div>
            }
          >
            <p>Animated illustrations guide people through linking their accounts, with an orbital glow on entry.</p>
          </Stage>

          <Wide>
            <Figure src="/images/squirll-collage-7.jpg" alt="Receipt upload flow" caption="Uploading a receipt" />
          </Wide>
        </div>

        <Divider />

        {/* 5. Moments */}
        <div id="process" className="scroll-mt-28" aria-hidden />
        <Beat kicker="04" title="Key decisions" />

        <div className="mt-5 space-y-24 md:space-y-32">
          <Moment
            n={1}
            title="A palette that lowers money anxiety"
            visual={
              <FigurePair
                images={[
                  { src: "/images/sq-bl.png", alt: "Deep blue colour direction" },
                  { src: "/images/sq-bl2.png", alt: "Warm dark palette applied" },
                ]}
                caption="The deep blue direction, and the warm dark palette we chose"
              />
            }
          >
            <p>
              I brought two palettes to the team. Deep blue borrowed credibility from banks. Warm dark, near-black with
              amber, felt like the product was on your side.
            </p>
            <p>
              Research on arousal settled it: dark backgrounds lower alertness. Squirll&apos;s real competitor was the anxious mental maths people do about money, so we went warm and dark.
            </p>
          </Moment>

          <Moment
            n={2}
            title="Motion and illustration"
            visual={
              <Figure src="/images/sq-4.jpg"
                alt="AI insight illustration" caption="AI insight illustration" />
            }
          >
            <p>
              I also designed the motion and illustration across the app.
            </p>
          </Moment>

          <Wide>
            <div className="flex flex-col gap-4 md:gap-6">
              <Figure src="/images/squirll-collage-8.jpg" alt="Squirll dark interface details" />
              <Clip src="/images/anim_SQ.mp4" label="Squirll interface animation" />
            </div>
          </Wide>
        </div>

        <Divider />

        {/* 6. Results */}
        <div id="impact" className="scroll-mt-28" aria-hidden />
        <Lede kicker="05 Outcome" statement="Early users said Squirll felt different from every finance app they had tried, which was exactly the point." />

        <div className="mt-14">
          <Results
            label="Outcome"
            items={[
              {
                icon: Rocket,
                image: "/images/squirll-tile-beta.jpg",
                value: "Beta",
                label: "launched April 2025",
                body: "Squirll opened to a closed beta with positive early feedback.",
              },
              {
                icon: Award,
                image: "/images/squirll-tile-award.jpg",
                value: "3",
                label: "Indigo Design Awards",
                body: "Gold for Application, and Silver for Branding in Banking & Finance and for UX, Interface & Navigation.",
              },
              {
                icon: CalendarRange,
                image: "/images/squirll-tile-months.jpg",
                value: "3 months",
                label: "to build the mobile app",
                body: "Brand, product and design system for the iOS app, designed by one designer.",
              },
            ]}
          />
        </div>

        <Divider />

        <div id="next" className="scroll-mt-28" aria-hidden />
        <Narrow className="mb-12">
          <Reveal as="p" className="text-[17px] leading-relaxed text-muted-foreground">
            I would revisit the serif. DM Serif Display earns its place in headlines, but some moments needed a serif
            that reads better at small sizes.
          </Reveal>
        </Narrow>

        <div className="mt-24 md:mt-32">
          <UpNext
            href="/projects/conduit"
            image="/conduit/cover.png"
            imageAlt="A Certificate of Origin open in Conduit"
            title="Conduit"
            summary="Automating the customs paperwork for food importers."
            meta={["Supply chain", "Product and design lead"]}
          />
        </div>

        <Narrow className="mt-16">
          <BackLinkFooter />
        </Narrow>
      </StoryPage>
    </div>
  )
}
