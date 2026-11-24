"use client"

import { StoryTopBar } from "@/components/story-top-bar"
import { StoryContents } from "@/components/story-contents"
import { ScrollToTop } from "@/components/scroll-to-top"
import { BackLinkFooter } from "@/components/back-link"
import {
  StoryPage,
  StoryHero,
  Divider,
  Lede,
  Beat,
  Narrow,
  Figure,
  Stage,
  Moment,
  KeyCall,
  UpNext,
} from "@/components/story-case-study"

// A short version of the portfolio case study: the problem, the calls that mattered, and the result.
export default function BodySpecStory() {
  return (
    <div className="min-h-screen bg-background story-static">
      <ScrollToTop />
      <StoryTopBar project="BodySpec" backHref="/ai" backLabel="Mary Borysova" />
      <StoryContents
        items={[
          { id: "overview", label: "Overview" },
          { id: "problem", label: "The problem" },
          { id: "built", label: "Key decisions" },
          { id: "impact", label: "Outcome" },
        ]}
      />

      <StoryPage>
        <div id="overview" className="scroll-mt-28" aria-hidden />
        <StoryHero
          image="/images/bodyspec-mobile-location.png"
          imageAlt="BodySpec mobile app: choosing a scan location on a map"
          title="BodySpec: Scaling bookings by 20% for 500K+ users"
          meta={[
            { label: "Company", value: "BodySpec, Series A" },
            { label: "Timeline", value: "2023" },
            { label: "Role", value: "Product lead" },
            { label: "Team", value: "12 people" },
          ]}
          intro={
            <p>
              BodySpec runs body composition scans across the US. People booked one scan and rarely came back. I
              redesigned the platform and mobile app end to end to improve conversions and increase average order
              value.
            </p>
          }
          stats={[
            { value: "+20%", label: "bookings" },
            { value: "−30%", label: "checkout abandonment" },
            { value: "$17.2M", label: "Series A the work supported" },
          ]}
        />

        <Divider />

        <div id="problem" className="scroll-mt-28" aria-hidden />
        <Lede
          kicker="01 The problem"
          statement="Booking took five minutes, and after one scan most people never returned."
        >
          <p>
            Revenue depended on repeat visits, but the product treated each scan as a one-off transaction.
          </p>
        </Lede>

        <div className="mt-12">
          <KeyCall
            label="How I found out why"
            rows={[
              {
                label: "Research",
                text: "I trained technicians in several states to run short structured interviews during scans, which gave us hundreds of real data points.",
              },
              {
                label: "Booking",
                text: "Finding a location and a time slot was the main reason people dropped out of checkout.",
              },
              {
                label: "Retention",
                text: "People got accurate results but no sense of what to do next, so there was no reason to book again.",
              },
            ]}
          />
        </div>

        <Divider />

        <div id="built" className="scroll-mt-28" aria-hidden />
        <Beat kicker="02 Key decisions" title="Make booking fast, then give people a reason to come back." />

        <div className="mt-10 md:mt-14 space-y-24 md:space-y-32">
          <Stage
            title="Two clicks to book"
            visual={
              <Figure
                src="/images/bodyspec-location-booking.webp"
                alt="BodySpec booking page on a laptop: locations with open time slots next to a map"
                caption="Locations and open slots on one screen"
              />
            }
          >
            <p>
              Location search was the bottleneck. The new flow uses the visitor&apos;s location to show nearby slots
              straight away and drops unneeded fields, cutting the path to checkout to two clicks.
            </p>
          </Stage>

          <Moment title="Progress over time, not a single report">
            <p>
              Testing showed people didn&apos;t want simpler results, they wanted to see change. We rebuilt the results
              around progress between scans, which gave people a reason to book the next one.
            </p>
          </Moment>

          <Moment title="A lean first version to meet the funding deadline">
            <p>
              A Series A was coming and engineering was small. I cut the scope to what people needed to see value and
              built it on the existing data, so it shipped on time. The funding then paid for a second, fuller
              iteration.
            </p>
          </Moment>
        </div>

        <Divider />

        <div id="impact" className="scroll-mt-28" aria-hidden />
        <Lede kicker="03 Outcome" statement="Bookings rose 20% and checkout abandonment fell 30%.">
          <p>
            The conversion lift was worth an estimated $2M+ in annual recurring revenue, and the live product helped
            BodySpec close its $17.2M Series A.
          </p>
        </Lede>

        <div className="mt-24 md:mt-32">
          <UpNext
            href="/cases/tempstars"
            image="/images/tempstars-phones-hero.png"
            imageAlt="TempStars app on two phones: a dental clinic profile and onboarding"
            title="TempStars"
            summary="Faster matching for Canada's largest dental marketplace."
            meta={["Marketplace", "Product lead"]}
          />
        </div>

        <Narrow className="mt-16">
          <BackLinkFooter />
        </Narrow>
      </StoryPage>
    </div>
  )
}
