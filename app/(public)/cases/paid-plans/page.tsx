"use client"

import { StoryTopBar } from "@/components/story-top-bar"
import { StoryContents } from "@/components/story-contents"
import { ScrollToTop } from "@/components/scroll-to-top"
import { BackLinkFooter } from "@/components/back-link"
import { StoryPage, StoryHero, Lede, Beat, Narrow, Moment, KeyCall, UpNext } from "@/components/story-case-study"

const Gap = () => <div className="h-14 md:h-20" aria-hidden />

// Short case: taking a free product to paid plans without losing the sellers who relied on it.
export default function PaidPlansStory() {
  return (
    <div className="min-h-screen bg-background story-static">
      <ScrollToTop />
      <StoryTopBar project="Paid plans" backHref="/ai" backLabel="Mary Borysova" />
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
          image="/images/paid-plans.webp"
          imageAlt="Pricing page with three plans: Shipping (free), Inventory from £17 a month and High Volume from £313 a month"
          title="Amazon: Paid plans across iOS, Android, devices and web"
          meta={[
            { label: "Company", value: "Veeqo, an Amazon company" },
            { label: "Scope", value: "0 to 1 monetisation" },
            { label: "Role", value: "Product design lead" },
            { label: "Worked with", value: "20+ people across product, engineering, data, finance, brand and go-to-market" },
          ]}
          intro={
            <p>
              Veeqo was a free shipping and operations platform for Amazon sellers, earning only a small commission on
              shipping labels. I was responsible for the rollout of paid plans across iOS, Android, devices and web: 12+
              features, launched on every platform, without breaking the daily work of sellers who had always had
              everything for free.
            </p>
          }
          stats={[
            { value: "Multi-million", label: "in revenue from the new plans" },
            { value: "12+", label: "paid features" },
            { value: "4", label: "platforms: iOS, Android, devices and web" },
          ]}
        />

        <Gap />

        <div id="problem" className="scroll-mt-28" aria-hidden />
        <Lede
          kicker="01 The problem"
          statement="The business needed recurring revenue. Sellers were used to paying nothing."
        >
          <p>
            Label commissions were thin, and high-volume sellers were using the most expensive features, like
            multichannel inventory sync, demand forecasting and digital picking, at no cost. Paid plans would fund the
            advanced roadmap. Done carelessly, they would push loyal sellers to leave.
          </p>
        </Lede>

        <div className="mt-12">
          <KeyCall
            label="What we learned"
            rows={[
              {
                label: "Limits",
                text: "Sellers disliked caps on users, warehouses or SKUs. Those limits felt like a penalty for growing.",
              },
              {
                label: "Timing",
                text: "A seller who hits a wall mid-shift doesn't upgrade, they leave. Gating alone would not drive conversion.",
              },
              {
                label: "Product",
                text: "The product had no concept of plans, limits or upgrade paths, so the whole experience had to be built.",
              },
            ]}
          />
        </div>

        <Gap />

        <div id="built" className="scroll-mt-28" aria-hidden />
        <Beat
          kicker="02 Key decisions"
          title="Keep shipping free, charge for growth, and never stop a seller mid-shift."
        />

        <div className="mt-10 md:mt-14 space-y-12 md:space-y-16">
          <Moment title="Price on order volume, not on seats">
            <p>
              Shipping stayed free with unlimited users, SKUs and warehouses. The paid Inventory and High Volume plans
              scale with monthly seller-fulfilled orders, and Amazon FBA orders don&apos;t count, so sellers never feel
              charged twice. The price grows with the seller&apos;s business, not with their team.
            </p>
          </Moment>

          <Moment title="No hard stops in the middle of work">
            <p>
              We considered blocking modals and I argued against them, because they interrupt fast warehouse work. New
              features like forecasting and ERP integrations open with an explanation and a free trial without a card.
              Existing accounts moving to the new model got notice in advance and grace-period banners, so no operation
              stopped without warning.
            </p>
          </Moment>

          <Moment title="One system across 12+ features and 4 platforms">
            <p>
              Instead of each team building its own upgrade prompt, we agreed one set of rules for gating, trials and
              messaging, and rolled it out across iOS, Android, devices and web. Sellers see the same plan logic
              wherever they work.
            </p>
          </Moment>

          <Moment title="Downgrades without losing data">
            <p>
              A seller who moves back to the free plan keeps paid features until the end of the billing cycle, with no
              data lost. That made it safe to try a plan, and took the risk out of saying yes.
            </p>
          </Moment>
        </div>

        <Gap />

        <div id="impact" className="scroll-mt-28" aria-hidden />
        <Lede kicker="03 Outcome" statement="A free tool became a paid product, and the plans now bring in multi-million revenue.">
          <p>
            Shipping stayed free, and growing sellers moved to the Inventory and High Volume plans for inventory sync
            and warehouse features. The new revenue funds the advanced roadmap. After launch we saw that sellers with
            seasonal spikes needed an earlier warning before moving into a higher volume band, which went into the
            billing notifications roadmap.
          </p>
          <p>
            The lesson I took from it: pricing is part of the user experience. No upgrade screen fixes a pricing metric
            that feels unfair, so the most important work happened before any screen was designed.
          </p>
        </Lede>

        <div className="mt-16 md:mt-20">
          <UpNext
            href="/cases/paa"
            image="/images/paa_11.png"
            imageAlt="PAA clinical dashboard with pending action tiles and a message drawer"
            title="PAA"
            summary="AI workflows for post-hospital care."
            meta={["Healthcare", "Product design lead"]}
          />
        </div>

        <Narrow className="mt-16">
          <BackLinkFooter />
        </Narrow>
      </StoryPage>
    </div>
  )
}
