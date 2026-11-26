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
  Moment,
  KeyCall,
  UpNext,
  Wide,
} from "@/components/story-case-study"
import { JourneyLoop, UserSegments } from "./diagrams"

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
          title="BodySpec: Scaling bookings by 25% for 500K+ monthly visitors"
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
            { value: "+25%", label: "bookings" },
            { value: "+26%", label: "average order value" },
            { value: "$17.2M", label: "Series A the work supported" },
          ]}
        />

        <div className="h-14 md:h-20" aria-hidden />

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

        <div className="h-14 md:h-20" aria-hidden />

        <div id="built" className="scroll-mt-28" aria-hidden />
        <Beat kicker="02 Key decisions" title="Make booking fast, then give people a reason to come back." />

        <div className="mt-10 md:mt-14 space-y-12 md:space-y-16">
          <Moment title="Two clicks to book">
            <p>
              Location search was the bottleneck. The new flow uses the visitor&apos;s location to show nearby slots
              straight away and drops unneeded fields, cutting the path to checkout to two clicks.
            </p>
          </Moment>

          <Moment title="Progress over time, not a single report">
            <p>
              Testing showed people didn&apos;t want simpler results, they wanted to see change. We rebuilt the results
              around progress between scans, which gave people a reason to book the next one.
            </p>
          </Moment>

          <Wide>
            <JourneyLoop />
          </Wide>

          <Moment title="New messaging and website around progress">
            <p>
              I reworked the whole messaging and the website proposal around the same idea: track how your body
              changes, not a one-off scan. The homepage and value proposition now lead with progress, so the reason to
              come back is clear before the first booking.
            </p>
          </Moment>

          <div className="mx-auto max-w-[920px]">
            <UserSegments />
          </div>

          <Moment title="A lean first version to meet the funding deadline">
            <p>
              A Series A was coming and engineering was small. I cut the full rework of the legacy checkout flow, which
              was the most complex piece, and kept only the changes people needed to book faster and see value. Some
              legacy checkout steps stayed for now. Building on the existing data, the release shipped on time, and the
              funding then paid for a second, fuller iteration.
            </p>
          </Moment>

          <figure className="mx-auto max-w-[680px]">
            <div className="rounded-xl overflow-hidden bg-[#EDE8E1] border border-foreground/[0.08]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/bodyspec-location-booking.webp"
                alt="BodySpec booking page on a laptop: locations with open time slots next to a map"
                className="w-full h-auto scale-[1.16]"
              />
            </div>
            <figcaption className="mt-3 text-[13px] text-muted-foreground text-center">Locations and open slots on one screen</figcaption>
          </figure>
        </div>

        <div className="h-14 md:h-20" aria-hidden />

        <div id="impact" className="scroll-mt-28" aria-hidden />
        <Lede kicker="03 Outcome" statement="Bookings up 25%, average order value up 26%.">
          <p>
            The conversion lift was worth an estimated $2M+ in annual recurring revenue, and the live product helped
            BodySpec close its $17.2M Series A.
          </p>
        </Lede>

        <div className="mt-16 md:mt-20">
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
