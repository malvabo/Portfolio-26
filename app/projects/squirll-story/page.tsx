"use client"

import { StoryTopBar } from "@/components/story-top-bar"
import { StoryContents } from "@/components/story-contents"
import { StoryCursor } from "@/components/story-cursor"
import { ScrollToTop } from "@/components/scroll-to-top"
import { BackLinkFooter } from "@/components/back-link"
import { CalendarRange, Contrast, Landmark, Rocket, Smile, Sparkles } from "lucide-react"
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

export default function SquirllStory() {
  return (
    <div className="min-h-screen bg-background">
      <ScrollToTop />
      <StoryCursor />
      <StoryTopBar project="Squirll" />
      <StoryContents
        items={[
          { id: "overview", label: "Overview" },
          { id: "problem", label: "The problem" },
          { id: "discovery", label: "Discovery" },
          { id: "built", label: "What I built" },
          { id: "process", label: "Process" },
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
          title="Designing a budgeting app people don't quit"
          meta={[
            { label: "Company", value: "Squirll" },
            { label: "Timeline", value: "Sep 2024 - Apr 2025" },
            { label: "Role", value: "Lead product designer" },
          ]}
          intro={
            <p>
              Squirll is an AI finance platform that connects to your accounts, reads your patterns and surfaces what
              matters. I was its only designer, working with two founders, a PM and three engineers, from a blank page
              to a closed beta.
            </p>
          }
          stats={[
            { value: "0 → 1", label: "web and iOS" },
            { value: "7", label: "months to beta" },
            { value: "1", label: "designer" },
          ]}
        />

        <Divider />

        {/* 2. The setup */}
        <div id="problem" className="scroll-mt-28" aria-hidden />
        <Lede statement="Most people give up on budgeting apps. They feel like homework, and every screen asks you to pay attention.">
          <p>
            Squirll&apos;s AI could do the noticing for people. The design had to make that feel true the moment the app
            opened.
          </p>
        </Lede>

        <Divider />

        {/* 3. Discovery */}
        <div id="discovery" className="scroll-mt-28" aria-hidden />
        <Beat kicker="Discovery" title="Looking for the gap in personal finance">
          <p>Before any visual direction, I audited Copilot, Monarch, YNAB and Cleo.</p>
        </Beat>

        <div className="mt-14">
          <CardStack
            label="What I learned"
            cards={[
              {
                icon: Landmark,
                image: "/images/squirll-pixel-bank.png",
                title: "Clinical white feels like a bank",
                body: "Many apps defaulted to bright, sterile screens that read like a banking portal.",
              },
              {
                icon: Smile,
                image: "/images/squirll-pixel-playful.png",
                title: "Playful undersells the intelligence",
                body: "Others leaned on cheerful illustration that made a capable product look like a toy.",
              },
              {
                icon: Sparkles,
                image: "/images/squirll-pixel-calm.png",
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
                { src: "/images/sq-6.png", alt: "Early Squirll direction draft" },
                { src: "/images/sq-7.png", alt: "Second early Squirll direction draft" },
              ]}
              caption="Early direction drafts"
            />
          </Wide>
        </div>

        <Divider />

        {/* 4. What we built */}
        <div id="built" className="scroll-mt-28" aria-hidden />
        <Beat
          kicker="New designs"
          title="A warm, dark product that signals: this is already taken care of."
        />

        <div className="mt-16 space-y-24 md:space-y-32">
          <Stage
            title="A dashboard that lowers your guard"
            visual={
              <Figure src="/images/sq-3.jpg" alt="Squirll analytics dashboard" caption="Analytics line graph view" />
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
              A sans-serif carries all functional UI. DM Serif Display appears only in titles and insight headlines, the
              moments where the product has something to say.
            </p>
          </Stage>

          <Stage
            title="Onboarding that moves"
            visual={
              <div className="grid md:grid-cols-2 gap-4 md:gap-6">
                <Clip src="/images/Sq1.mp4" label="Onboarding orbital glow animation" />
                <Clip src="/images/Sq2.mp4" label="Account linking animation" />
              </div>
            }
          >
            <p>Animated illustrations guide people through linking their accounts, with an orbital glow on entry.</p>
          </Stage>

          <Stage
            title="Uploading a receipt"
            visual={
              <div className="space-y-6">
                <Clip src="/images/Sq-full.mp4" label="Squirll app walkthrough" />
                <Figure src="/images/squirll-collage-7.jpg" alt="Receipt upload flow" caption="Uploading a receipt" />
              </div>
            }
          >
            <p>Snap a receipt and Squirll files it, so the app keeps doing the work in the background.</p>
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
            title="Choosing warm dark over deep blue"
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
              Research on arousal settled it: dark backgrounds lower alertness. Squirll wasn&apos;t competing with banks.
              It was competing with the anxious mental maths people do about money, so we went warm and dark.
            </p>
          </Moment>

          <Moment
            n={2}
            title="3D for the AI, flat for nothing"
            visual={
              <Figure src="/images/sq-4.jpg" alt="3D AI insight illustration" caption="The 3D AI insight illustration" />
            }
          >
            <p>
              Flat illustration is everywhere and has stopped meaning much. 3D suggests depth and intelligence under the
              surface. Its cobalt blue is the only cool tone in the palette, which sets the AI&apos;s work apart from
              what the user sees.
            </p>
          </Moment>

          <Moment
            n={3}
            title="Making amber on black readable"
            visual={
              <div className="grid md:grid-cols-2 gap-4 md:gap-6">
                <Figure src="/images/squirll-collage-8.jpg" alt="Squirll dark interface details" />
                <Clip src="/images/anim_SQ.mp4" label="Squirll interface animation" />
              </div>
            }
          >
            <p>
              Warm accents on dark backgrounds are hard to get right. I ran WCAG AA checks on every text and data
              surface, iterated most on amber at small sizes, and kept touch targets at 44px or larger.
            </p>
          </Moment>
        </div>

        <Divider />

        {/* 6. Results */}
        <div id="impact" className="scroll-mt-28" aria-hidden />
        <Lede statement="Early users said Squirll felt different from every finance app they had tried, which was exactly the point." />

        <div className="mt-14">
          <Results
            label="Outcome"
            items={[
              {
                icon: Rocket,
                image: "/images/squirll-pixel-beta.png",
                value: "Beta",
                label: "launched April 2025",
                body: "Squirll opened to a closed beta with positive early feedback.",
              },
              {
                icon: Contrast,
                image: "/images/squirll-pixel-contrast.png",
                value: "AA",
                label: "contrast on every surface",
                body: "Every text and data surface passed WCAG AA, with 44px minimum touch targets.",
              },
              {
                icon: CalendarRange,
                image: "/images/squirll-pixel-months.png",
                value: "7 months",
                label: "from blank page to beta",
                body: "Brand, product and design system for web and iOS, built by one designer.",
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
        <Closing attribution="What I took away">
          In a finance app, how calm it feels is part of what it does.
        </Closing>

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
