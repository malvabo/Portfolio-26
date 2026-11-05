"use client"

import { Header } from "@/components/header"
import { ScrollToTop } from "@/components/scroll-to-top"
import { BackLinkFooter } from "@/components/back-link"
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
  CardStack,
  Stage,
  Moment,
  Results,
  Closing,
} from "@/components/story-case-study"

export default function BodySpecStory() {
  return (
    <div className="min-h-screen bg-background">
      <ScrollToTop />
      <Header />

      <StoryPage>
        {/* 1. Hero: what it is, who I was, what changed */}
        <StoryHero
          image="https://framerusercontent.com/images/vv2onQFZ97C3KH8T7xcOTJbKZs.png"
          imageAlt="BodySpec app interface showing health metrics"
          title="Turning a one-off body scan into a health habit"
          meta={[
            { label: "Company", value: "BodySpec" },
            { label: "Timeframe", value: "Mar 2018 - Sep 2020" },
            { label: "Role", value: "Lead Product Designer" },
          ]}
          intro={
            <p>
              I led design and research for BodySpec, the gold standard in DEXA body composition scans. Over two years
              I reworked booking, results and reporting so people came back for a second scan, and a third.
            </p>
          }
          stats={[
            { value: "20%", label: "lift in bookings" },
            { value: "30%", label: "less checkout abandonment" },
            { value: "$17.2M", label: "Series A raised" },
          ]}
        />

        <Divider />

        {/* 2. The setup */}
        <Lede statement="BodySpec gave people clinical-grade data about their bodies. Most of them got one scan and never came back.">
          <p>
            People left the clinic with a wall of numbers and no idea what to do with them. The business was stuck in a
            transactional loop, and every new customer had to be won from scratch.
          </p>
        </Lede>

        <div className="mt-16 md:mt-24">
          <Wide>
            <Figure
              src="/images/bodyspec-dexa-dashboard.png"
              alt="BodySpec DEXA results dashboard"
              caption="The scan results people walked away with"
            />
          </Wide>
        </div>

        <Divider />

        {/* 3. How I found out what was wrong */}
        <Beat kicker="Research" title="Turning technicians into a research team">
          <p>
            I couldn&apos;t be in every clinic, so I trained the technicians who ran the scans to run short, structured
            interviews during each visit. Within weeks we had hundreds of conversations from real customers in multiple
            states.
          </p>
        </Beat>

        <div className="mt-14">
          <CardStack
            label="What we heard"
            kicker="Insight"
            cards={[
              {
                emoji: "🌫️",
                title: "The numbers meant nothing",
                body: "People got highly accurate data and had no mental model for it. Lean mass, visceral fat and bone density all read like jargon.",
              },
              {
                emoji: "⏳",
                title: "Booking took five minutes",
                body: "Finding a location and a free slot was the biggest bottleneck. Many people gave up before checkout.",
              },
              {
                emoji: "📈",
                title: "One scan tells no story",
                body: "The value of a scan shows up in the change between two of them. With only one, there was nothing to come back for.",
              },
            ]}
          />
        </div>

        <Divider />

        {/* 4. What we built */}
        <Beat
          kicker="New designs"
          title="The redesign moved BodySpec from a single report to a progress story, in three parts."
        />

        <div className="mt-16 space-y-24 md:space-y-32">
          <Stage
            title="Booking"
            visual={
              <Figure
                src="/images/bodyspec-location-booking.webp"
                alt="BodySpec location booking interface on laptop"
                caption="Geo-aware search pre-fills nearby availability"
              />
            }
          >
            <p>
              Booking now starts from where you are. The site pre-fills nearby clinics and open slots and strips out
              every field that wasn&apos;t needed, so checkout takes two clicks.
            </p>
          </Stage>

          <Stage
            title="Results"
            visual={
              <FigurePair
                images={[
                  { src: "/images/bodyspec-dexa-dashboard-1.png", alt: "Body fat visualization with color-coded zones" },
                  { src: "/images/bodyspec-dexa-dashboard-2.png", alt: "Body fat analysis with peer comparison" },
                ]}
                caption="Color-coded zones and peer percentiles replace raw totals"
              />
            }
          >
            <p>
              The dashboard leads with change over time. Color-coded zones and peer percentiles show people where they
              stand, and the trend line gives them a reason to book the next scan.
            </p>
          </Stage>

          <Stage
            title="Sharing"
            visual={
              <FigurePair
                images={[
                  { src: "/images/bodyspec-homepage-final.png", alt: "BodySpec final homepage" },
                  { src: "/images/bodyspec-booking-flow.png", alt: "BodySpec mobile booking flow" },
                ]}
                caption="Final homepage and mobile booking flow"
              />
            }
          >
            <p>
              Many customers took their results to a trainer or doctor. I rebuilt the PDF report as a visual progress
              map with a plain-language layer on bone density, so those conversations started from understanding.
            </p>
          </Stage>
        </div>

        <Divider />

        {/* 5. Moments from the process */}
        <Narrow>
          <p className="text-[1.6rem] md:text-[2rem] leading-[1.3] tracking-[-0.015em] text-balance">
            A few moments from the process behind the final product.
          </p>
        </Narrow>

        <div className="mt-16 space-y-24 md:space-y-32">
          <Moment n={1} title="Meaning over simplicity">
            <p>
              My first instinct was to strip the dashboard back. Testing showed that cleaner screens didn&apos;t help
              anyone decide what to do next. People wanted to know what the numbers meant for them, so I rebuilt the
              results around their own progress.
            </p>
          </Moment>

          <Moment n={2} title="Shipping before the funding round">
            <p>
              A Series A was coming, and investors needed to see a live product with real engagement. With a small
              engineering team and a fixed date, I scoped a lean V1 around the few metrics people needed to feel value,
              built on the data structures we already had.
            </p>
            <p>
              That release helped close the round. The funding then paid for a second iteration with the richer
              visualizations and personalized insights we had planned from the start.
            </p>
          </Moment>
        </div>

        <Divider />

        {/* 6. What changed */}
        <Lede statement="The redesign brought people back, and gave BodySpec a growth story investors could see." />

        <div className="mt-14">
          <Results
            items={[
              {
                emoji: "📅",
                value: "20%",
                label: "lift in bookings",
                body: "Two-click checkout and location-aware search turned more visits into booked scans.",
              },
              {
                emoji: "🛒",
                value: "30%",
                label: "less checkout abandonment",
                body: "Removing the five-minute booking ordeal kept people in the flow.",
              },
              {
                emoji: "💰",
                value: "$17.2M",
                label: "Series A",
                body: "The live V1 and its engagement numbers formed part of the story behind the round.",
              },
            ]}
          />
        </div>

        <Divider />

        <Closing attribution="What I took away">
          The most useful research came from the people already in the room with our customers.
        </Closing>

        <Narrow className="mt-24">
          <BackLinkFooter />
        </Narrow>
      </StoryPage>
    </div>
  )
}
