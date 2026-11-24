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
  Stage,
  Moment,
  KeyCall,
  UpNext,
} from "@/components/story-case-study"

// A short version of the portfolio case study: the problem, what we changed, and the result.
export default function TempStarsStory() {
  return (
    <div className="min-h-screen bg-background story-static">
      <ScrollToTop />
      <StoryTopBar project="TempStars" backHref="/ai" backLabel="Mary Borysova" />
      <StoryContents
        items={[
          { id: "overview", label: "Overview" },
          { id: "problem", label: "The problem" },
          { id: "built", label: "What we changed" },
          { id: "impact", label: "Outcome" },
        ]}
      />

      <StoryPage>
        <div id="overview" className="scroll-mt-28" aria-hidden />
        <StoryHero
          image="/images/tempstars-phones-hero.png"
          imageAlt="TempStars app on two phones: a dental clinic profile with neighbourhood details, and onboarding"
          title="TempStars: Building marketplace liquidity for 45K+ dental professionals"
          meta={[
            { label: "Company", value: "TempStars" },
            { label: "Timeline", value: "Shipped 2023" },
            { label: "Role", value: "Product lead" },
            { label: "Team", value: "PM, customer success, data analyst, engineers" },
          ]}
          intro={
            <p>
              TempStars is Canada&apos;s largest dental staffing marketplace, with 45,000 registered dental professionals across North America. 65% of hygienists who signed up never
              booked a shift. I found out why and fixed signup, matching and the policy that was pushing people away.
            </p>
          }
          stats={[
            { value: "+23%", label: "projected booked shifts year over year" },
            { value: "~$2M", label: "a year in projected added revenue" },
            { value: "7d → 2d", label: "time to first offer" },
          ]}
        />

        <div className="h-14 md:h-20" aria-hidden />

        <div id="problem" className="scroll-mt-28" aria-hidden />
        <Lede
          kicker="01 The problem"
          statement="People signed up but never booked. The drop-off happened in the first 48 hours."
        >
          <p>
            I ran 15 interviews with dentists and hygienists, usability sessions on signup and shift search, and a
            funnel analysis to find where people stalled.
          </p>
        </Lede>

        <div className="mt-12">
          <KeyCall
            label="What we found"
            rows={[
              {
                label: "Policy",
                text: "The cancellation policy was one-sided toward clinics, so hygienists lost trust before their first shift.",
              },
              {
                label: "Context",
                text: "Shift cards lacked parking, equipment and office details, so people left the app to research clinics on Google.",
              },
              {
                label: "Matching",
                text: "Every new user saw the same generic list of shifts, whatever their skills.",
              },
            ]}
          />
        </div>

        <div className="mt-12 md:mt-16">
          <Figure
            src="/images/tempstars-survey-charts.png"
            alt="Onboarding survey results and the distribution of shifts across users"
            caption="Survey and funnel data showed where people stalled"
          />
        </div>

        <div className="h-14 md:h-20" aria-hidden />

        <div id="built" className="scroll-mt-28" aria-hidden />
        <Beat kicker="02 What we changed" title="Fix the policy first, then make matching faster and clearer." />

        <div className="mt-10 md:mt-14 space-y-12 md:space-y-16">
          <Moment title="Reworking the cancellation policy">
            <p>
              I ran workshops with the founders and made the case that keeping hygienists was worth more than the
              short-term fee revenue: a churned office cost around $12k in lifetime value a year. The policy changed,
              and sentiment in the beta group improved quickly.
            </p>
          </Moment>

          <Stage
            title="Clinic details where the decision happens"
            visual={
              <Figure
                src="/images/tempstars-information-scent-before-after.png"
                alt="Before and after: a bare shift screen next to a clinic profile with equipment, payment, parking and a neighbourhood map"
                caption="Before and after: the shift screen became a clinic profile"
              />
            }
          >
            <p>
              The shift page now shows what hygienists actually check before applying: equipment, software, payment,
              parking and the neighbourhood. They no longer have to leave the app to decide.
            </p>
          </Stage>

          <Stage
            title="Skills-based matching from signup"
            visual={
              <Figure
                src="/images/tempstars-onboarding-skills-photo.png"
                alt="New onboarding: choosing extra skills and adding a profile photo"
                caption="Onboarding captures skills early, so the first shifts shown are a match"
              />
            }
          >
            <p>
              We replaced the one-size-fits-all signup with a shorter staged flow that captures skills early. With
              engineering, we moved from free-text skills to a standard taxonomy, which powered weighted matching:
              must-have skills first, nice-to-haves after.
            </p>
          </Stage>
        </div>

        <div className="h-14 md:h-20" aria-hidden />

        <div id="impact" className="scroll-mt-28" aria-hidden />
        <Lede kicker="03 Outcome" statement="A week-long wait for a first offer became less than 48 hours.">
          <p>
            Activation rose 20%, as fewer people dropped off at the policy or at signup. Booked shifts grew 23% year
            over year, with more active workers and shifts that were easier to judge. At about $50 per shift, that
            is about $2M a year in projected added revenue for TempStars.
          </p>
          <p>
            The lesson I took from it: operations decisions and design decisions are often the same decision. No
            amount of onboarding polish would have fixed the cancellation policy.
          </p>
        </Lede>

        <div className="mt-16 md:mt-20">
          <UpNext
            href="/cases/conduit"
            image="/conduit/cover.png"
            imageAlt="A coffee Certificate of Origin open in Conduit"
            title="Conduit"
            summary="An AI product for customs compliance."
            meta={["Logistics", "Led product and design end to end"]}
          />
        </div>

        <Narrow className="mt-16">
          <BackLinkFooter />
        </Narrow>
      </StoryPage>
    </div>
  )
}
