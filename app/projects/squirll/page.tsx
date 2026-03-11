"use client"
import { LightboxImage } from "@/components/lightbox-image"

import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { ScrollToTop } from "@/components/scroll-to-top"
import { Header } from "@/components/header"
import { PasswordGate } from "@/components/password-gate"

export default function SquirllCaseStudy() {
  return (
    <div className="min-h-screen bg-background">
      <ScrollToTop />
      <Header />

      <div className="max-w-7xl mx-auto pt-24 flex flex-col">
        <div className="flex w-full items-start">
          <div className="hidden lg:block w-56 shrink-0 px-8 lg:px-12" aria-hidden />

          <aside className="hidden lg:block w-56 px-8 lg:px-12 fixed top-24 left-8 lg:left-[max(0px,calc((100vw-80rem)/2))]" aria-label="Case study navigation">
            <Link
              href="/#work"
              scroll={false}
              className="block text-xs font-mono tracking-wider uppercase text-muted-foreground hover:text-foreground transition-colors mb-10 leading-none"
            >
              <span className="inline-flex items-baseline gap-2">
                <ArrowLeft className="w-3 h-3 shrink-0" />
                All projects
              </span>
            </Link>
            <nav className="space-y-4" aria-label="Case study sections">
              <a href="#context" className="block text-[15px] text-muted-foreground hover:text-foreground transition-colors">Context</a>
              <a href="#approach" className="block text-[15px] text-muted-foreground hover:text-foreground transition-colors">Approach</a>
              <a href="#color" className="block text-[15px] text-muted-foreground hover:text-foreground transition-colors">Color</a>
              <a href="#typography" className="block text-[15px] text-muted-foreground hover:text-foreground transition-colors">Typography</a>
              <a href="#illustration" className="block text-[15px] text-muted-foreground hover:text-foreground transition-colors">Illustration</a>
              <a href="#dashboard" className="block text-[15px] text-muted-foreground hover:text-foreground transition-colors">Dashboard</a>
              <a href="#accessibility" className="block text-[15px] text-muted-foreground hover:text-foreground transition-colors">Accessibility</a>
              <a href="#outcome" className="block text-[15px] text-muted-foreground hover:text-foreground transition-colors">Outcome</a>
              <a href="#reflections" className="block text-[15px] text-muted-foreground hover:text-foreground transition-colors">Reflections</a>
            </nav>
          </aside>

          <main className="flex-1 px-8 lg:px-12 pb-20 lg:pb-24">

            {/* Header */}
            <div className="mb-8 max-w-[750px]">
              <p className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground mb-3">0→1 · Personal Finance · AI</p>
              <h1 className="font-serif text-2xl md:text-3xl lg:text-4xl tracking-[-0.02em] leading-[1.15] mb-4">
                Squirll: Automating 80% of budgeting with AI.
              </h1>
              <p className="text-[17px] leading-relaxed text-muted-foreground">
                A 0-to-1 AI finance platform. One designer, two founders, seven months.
              </p>
            </div>

            {/* Meta grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-4 mb-6 pb-4 max-w-[750px]">
              <div>
                <p className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground mb-2">Role</p>
                <p className="text-[15px] leading-relaxed">Lead Product Designer</p>
              </div>
              <div>
                <p className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground mb-2">Timeline</p>
                <p className="text-[15px] leading-relaxed">Sep 2024 – Apr 2025</p>
              </div>
              <div>
                <p className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground mb-2">Team</p>
                <p className="text-[15px] leading-relaxed">2 founders, PM, 3 engineers</p>
              </div>
              <div>
                <p className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground mb-2">Platform</p>
                <div className="flex flex-wrap gap-1.5">
                  {["Web", "iOS"].map((platform) => (
                    <span
                      key={platform}
                      className="inline-block px-2 py-0.5 text-[13px] rounded-md bg-[#E8E3DD] text-[#6B5D4F]"
                    >
                      {platform}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Cover image */}
            <div className="mb-12 max-w-[750px]">
              <div className="rounded-xl overflow-hidden">
                <LightboxImage
                  src="/images/squirll-collage-1.jpg"
                  alt="Squirll app interface overview"
                  width={4000}
                  height={3000}
                  className="w-full h-auto object-cover"
                  style={{ transform: "scale(1.15)", transformOrigin: "center" }}
                />
              </div>
            </div>

            {/* Context */}
            <section id="context" className="mb-14">
              <p className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground mb-2">Context</p>
              <h2 className="font-serif text-[1.75rem] leading-[1.2] tracking-[-0.02em] mb-6 max-w-[750px]">
                0→1 AI finance app challenge
              </h2>
              <div className="space-y-4 text-[17px] leading-relaxed text-muted-foreground max-w-[750px]">
                <p>Squirll is an AI-driven personal finance platform that connects to your accounts, reads your patterns, and surfaces what matters automatically. I joined as the sole designer on a contract basis, working directly with two founders, a PM, and a team of three engineers.</p>
                <p>Most people don&apos;t abandon finance apps because the features fail - they abandon them because opening the app feels like a confrontation. Every session is a reckoning with decisions already made. That was the brief beneath the brief.</p>
              </div>
            </section>

            {/* Approach */}
            <section id="approach" className="mb-14">
              <p className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground mb-2">Approach</p>
              <h2 className="font-serif text-[1.75rem] leading-[1.2] tracking-[-0.02em] mb-6 max-w-[750px]">
                Finding the unclaimed space in the category.
              </h2>
              <div className="space-y-4 text-[17px] leading-relaxed text-muted-foreground max-w-[750px]">
                <p>Before any visual direction, I ran a competitor audit across the personal finance category - Copilot, Monarch, YNAB, Cleo. The pattern was consistent: products defaulted to either clinical white interfaces that felt like banking portals, or playful illustration systems that undersold the intelligence of the product. Few were occupying the premium, low-arousal space in between.</p>
                <p>That gap shaped everything that followed.</p>
              </div>

              <div className="p-8 bg-[#F5F3F0] rounded-xl max-w-[750px] my-8">
                <p className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground mb-3">Design principle</p>
                <p className="font-serif text-[1.375rem] leading-[1.4] tracking-[-0.02em] text-foreground mb-3">
                  &ldquo;The product should feel like a premium spa.&rdquo;
                </p>
                <p className="text-[15px] leading-relaxed text-muted-foreground">
                  Not a dashboard, not a financial tool but an environment where the user arrives and immediately feels that something capable is handling things, without being asked to do anything themselves. Defined before any visual work began, I presented to founders and PM as a filter for every decision that followed.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 max-w-[750px] mt-8">
                <div className="rounded-xl overflow-hidden">
                  <LightboxImage
                    src="/images/sq-6.png"
                    alt="Squirll design exploration"
                    className="w-full h-auto object-cover"
                  />
                </div>
                <div className="rounded-xl overflow-hidden">
                  <LightboxImage
                    src="/images/sq-7.png"
                    alt="Squirll design exploration"
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
              <p className="text-sm text-muted-foreground max-w-[750px] mt-3 mb-8">Early drafts shared with the team to align on direction before any visual production began.</p>

              <div className="space-y-4 text-[17px] leading-relaxed text-muted-foreground max-w-[750px]">
                <p>Research on arousal and interface design informed this directly. Dark backgrounds lower arousal, reducing the alertness and vigilance that light backgrounds trigger. The implicit message across light-background finance apps is: <em>pay attention to this</em>. The implicit message we were designing toward was the opposite — <em>this is already taken care of</em>. That framing became the filter for every visual decision that followed.</p>
              </div>
            </section>

            {/* Color */}
            <section id="color" className="mb-14">
              <p className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground mb-2">Color</p>
              <h2 className="font-serif text-[1.75rem] leading-[1.2] tracking-[-0.02em] mb-6 max-w-[750px]">
                Two directions. One decision.
              </h2>
              <div className="space-y-4 text-[17px] leading-relaxed text-muted-foreground max-w-[750px] mb-8">
                <p>I explored two palette directions and brought both to the team. We iterated on both across several sessions with the founders and PM.</p>
              </div>

              <div className="flex flex-col max-w-[750px] mb-8 divide-y divide-[#EBEBEB] border border-[#EBEBEB] bg-white">
                <div className="flex items-start gap-6 p-6 bg-[#F5F3F0]">
                  <span className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground pt-0.5 shrink-0 w-[140px]">Direction 1 · Won</span>
                  <div>
                    <p className="text-[14px] font-medium text-foreground mb-2">Warm dark</p>
                    <div className="flex flex-wrap gap-2 mb-3">
                      <span className="text-[11px] font-medium px-2.5 py-1 rounded-sm bg-amber-50 text-amber-700">Near-black with brown tint</span>
                      <span className="text-[11px] font-medium px-2.5 py-1 rounded-sm bg-amber-50 text-amber-700">Amber primary accent</span>
                      <span className="text-[11px] font-medium px-2.5 py-1 rounded-sm bg-amber-50 text-amber-700">Radial glow on entry</span>
                    </div>
                    <p className="text-[13px] text-muted-foreground leading-relaxed">Product is on your side. Removes the aesthetic memory of bank statements. Amber signals trust, not assessment.</p>
                  </div>
                </div>
                <div className="flex items-start gap-6 p-6">
                  <span className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground pt-0.5 shrink-0 w-[140px]">Direction 2</span>
                  <div>
                    <p className="text-[14px] font-medium text-foreground mb-2">Deep blue</p>
                    <div className="flex flex-wrap gap-2 mb-3">
                      <span className="text-[11px] font-medium px-2.5 py-1 rounded-sm bg-blue-50 text-blue-700">Cold navy base</span>
                      <span className="text-[11px] font-medium px-2.5 py-1 rounded-sm bg-blue-50 text-blue-700">Glowing ice-blue accents</span>
                      <span className="text-[11px] font-medium px-2.5 py-1 rounded-sm bg-blue-50 text-blue-700">Financial authority visual language</span>
                    </div>
                    <p className="text-[13px] text-muted-foreground leading-relaxed">Category default. Credibility borrowed from convention. Solving the wrong problem - Squirll wasn&apos;t competing with banks.</p>
                  </div>
                </div>
              </div>

              <div className="space-y-4 text-[17px] leading-relaxed text-muted-foreground max-w-[750px]">
                <p>The blue had a genuine argument behind it - credibility borrowed from category convention, the kind of trust signal institutions have spent decades building. But the more we worked through it, the clearer it became that it was solving the wrong problem. Squirll wasn&apos;t competing with banks - it was competing with the anxious, approximate version of money management people do in their heads. Warm dark won.</p>
              </div>

              <div className="rounded-xl overflow-hidden max-w-[750px] my-8">
                <LightboxImage
                  src="/images/sq-bl.png"
                  alt="Squirll color direction exploration"
                  className="w-full h-auto object-cover"
                />
              </div>

              <div className="space-y-4 text-[17px] leading-relaxed text-muted-foreground max-w-[750px]">
                <p>The near-black base removes the aesthetic memory of bank statements and spreadsheets, the associations people carry from every finance tool they&apos;ve already abandoned. The radial glow in onboarding anchors the composition and implies that something intelligent is active beneath the surface, without carrying the urgency or anxiety of an alert.</p>
              </div>

              <div className="rounded-xl overflow-hidden max-w-[750px] mt-8">
                <LightboxImage
                  src="/images/sq-bl2.png"
                  alt="Squirll warm dark palette in context"
                  className="w-full h-auto object-cover"
                />
              </div>
            </section>

            {/* Typography */}
            <section id="typography" className="mb-14">
              <p className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground mb-2">Typography</p>
              <h2 className="font-serif text-[1.75rem] leading-[1.2] tracking-[-0.02em] mb-6 max-w-[750px]">
                Geometric sans, and what it costs you.
              </h2>
              <div className="space-y-4 text-[17px] leading-relaxed text-muted-foreground max-w-[750px]">
                <p>I chose geometric sans to position the product in a specific gap in the category - not serif, which carries institutional weight and centuries of financial history, and not grotesque, which reads as pure utility and has become the default language of commodity fintech. Geometric sits between the two: engineered but not cold, modern without being aggressive.</p>
                <p>Geometric alone couldn&apos;t carry the full emotional range the product needed. Its neutrality is an asset in data display and UI chrome, but a limitation at the moments that needed to feel significant - the insight screens, the headlines where the AI surfaces something that actually matters to the user.</p>
              </div>

              <div className="grid grid-cols-2 gap-4 max-w-[750px] my-8">
                <div className="rounded-xl overflow-hidden">
                  <LightboxImage
                    src="/images/squirll-collage-4.jpg"
                    alt="Squirll spending analytics"
                    className="w-full h-auto object-cover aspect-square"
                  />
                </div>
                <div className="rounded-xl overflow-hidden">
                  <LightboxImage
                    src="/images/squirll-collage-3.jpg"
                    alt="Squirll interface details"
                    className="w-full h-auto object-cover aspect-square"
                  />
                </div>
              </div>
              <p className="text-sm text-muted-foreground max-w-[750px] mb-8">Spending analytics; interface details</p>

              <div className="space-y-4 text-[17px] leading-relaxed text-muted-foreground max-w-[750px]">
                <p>I brought in DM Serif Display for those moments only - display sizes, never anything functional. High stroke contrast, editorial weight, classical proportions. The geometric says <em>this is a technology product</em>. The serif says <em>this moment matters</em>. Together they hold a range that neither could hold alone.</p>
              </div>
            </section>

            {/* Illustration */}
            <section id="illustration" className="mb-14">
              <p className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground mb-2">Illustration</p>
              <h2 className="font-serif text-[1.75rem] leading-[1.2] tracking-[-0.02em] mb-6 max-w-[750px]">
                Trust before features.
              </h2>
              <div className="space-y-4 text-[17px] leading-relaxed text-muted-foreground max-w-[750px]">
                <p>Showing actual interface too early in onboarding asks users to parse something before they&apos;ve decided to trust it. I needed illustration that communicated the product promise without requiring any interpretation from the user.</p>
                <p>The orbital cluster - app icons in a loose gravitational composition above an amber radial glow - communicates connection without communicating complexity. I chose real brand logos over abstract icons to signal immediately that the product connects to things already in the user&apos;s life, not a closed system that requires setup.</p>
              </div>

              <div className="rounded-xl overflow-hidden max-w-[750px] my-8">
                <LightboxImage
                  src="/images/squirll-collage-2.jpg"
                  alt="Squirll financial dashboard"
                  className="w-full h-auto object-cover"
                />
              </div>

              <div className="space-y-4 text-[17px] leading-relaxed text-muted-foreground max-w-[750px]">
                <p>For the insights screen I chose 3D over flat, because flat illustration has become so widespread in consumer software that it&apos;s stopped carrying meaning. Three-dimensional form creates associations that flat can&apos;t manufacture - depth, layers, intelligence operating beneath the surface. The cobalt blue of that illustration is the only cool tone in an otherwise warm palette, deliberately separating what the AI is doing from what the user sees as a result.</p>
              </div>

              <div className="rounded-xl overflow-hidden max-w-[750px] mt-8">
                <LightboxImage
                  src="/images/sq-4.jpg"
                  alt="Squirll 3D illustration"
                  className="w-full h-auto object-cover"
                />
              </div>
            </section>

            {/* Dashboard */}
            <section id="dashboard" className="mb-14">
              <p className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground mb-2">Dashboard</p>
              <h2 className="font-serif text-[1.75rem] leading-[1.2] tracking-[-0.02em] mb-6 max-w-[750px]">
                Shape carries emotional weight before content does.
              </h2>
              <div className="space-y-4 text-[17px] leading-relaxed text-muted-foreground max-w-[750px] mb-10">
                <p>The analytics screen uses a line graph rather than bars, and that decision was about what shape communicates before the user reads a single number. Bar charts are columnar and comparative - each bar is a verdict on a period, a measure of how you did. A line is a narrative with direction, continuity, and an implied future. For a user who carries anxiety about their spending history, the shape of how that data is presented changes how it feels to look at it before any conscious interpretation happens.</p>
              </div>

              <div className="rounded-xl overflow-hidden max-w-[750px] my-8">
                <LightboxImage
                  src="/images/sq-3.jpg"
                  alt="Squirll analytics dashboard"
                  className="w-full h-auto object-cover"
                />
              </div>

              <div className="grid gap-4 max-w-[750px]">
                <div className="grid grid-cols-2 gap-4">
                  <div className="rounded-xl overflow-hidden">
                    <LightboxImage
                      src="/images/squirll-collage-5.jpg"
                      alt="Squirll AI features"
                      width={2526}
                      height={2526}
                      className="w-full h-auto object-cover aspect-square"
                    />
                  </div>
                  <div className="rounded-xl overflow-hidden">
                    <LightboxImage
                      src="/images/squirll-collage-6.jpg"
                      alt="Squirll app screens"
                      width={3405}
                      height={3403}
                      className="w-full h-auto object-cover aspect-square"
                    />
                  </div>
                </div>
                <p className="mt-2 text-sm text-muted-foreground">AI features; app screens</p>
              </div>
            </section>

            {/* Craft */}
            <section id="craft" className="mb-14">
              <p className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground mb-2">Craft</p>
              <h2 className="font-serif text-[1.75rem] leading-[1.2] tracking-[-0.02em] mb-6 max-w-[750px]">
                Every decision traceable to a specific user feeling.
              </h2>
              <div className="space-y-4 text-[17px] leading-relaxed text-muted-foreground max-w-[750px]">
                <p>Loss aversion research tells us people feel losses roughly twice as intensely as equivalent gains, which means a finance interface that foregrounds what you spent without reframing it is actively working against engagement every session. Dark mode was a context reset - not a visual preference, but an environment that didn&apos;t carry the associations of every finance tool the user had already walked away from.</p>
              </div>

              <div className="grid grid-cols-2 gap-4 max-w-[750px] my-8">
                <div className="rounded-xl overflow-hidden">
                  <LightboxImage
                    src="/images/squirll-collage-8.jpg"
                    alt="Squirll interface design"
                    className="w-full h-auto object-cover aspect-square"
                  />
                </div>
                <div className="rounded-xl overflow-hidden">
                  <LightboxImage
                    src="/images/squirll-collage-7.jpg"
                    alt="Squirll app experience"
                    className="w-full h-auto object-cover aspect-square"
                  />
                </div>
              </div>
              <p className="text-sm text-muted-foreground max-w-[750px] mb-8">Spending analytics; interface details</p>

              <div className="space-y-4 text-[17px] leading-relaxed text-muted-foreground max-w-[750px]">
                <p>The line graph was a framing decision. The amber accent was a category break. The serif appeared precisely where the product needed to feel human rather than automated.</p>
                <p>Each of these decisions could have gone the other way and still shipped. The difference between a functional interface and a considered one is that these were made with a specific user feeling as the target, argued for in reviews with the team, and connected back to behavior rather than aesthetics.</p>
              </div>
            </section>

            {/* Accessibility */}
            <section id="accessibility" className="mb-14">
              <p className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground mb-2">Accessibility</p>
              <h2 className="font-serif text-[1.75rem] leading-[1.2] tracking-[-0.02em] mb-6 max-w-[750px]">
                Accessibility
              </h2>
              <div className="space-y-4 text-[17px] leading-relaxed text-muted-foreground max-w-[750px]">
                <p>Dark backgrounds with warm accents create specific contrast challenges. I ran WCAG AA checks across every text and data surface - the amber on near-black pairing required the most iteration, particularly at small sizes. Touch targets were held to 44x44px minimum.</p>
              </div>
            </section>

            {/* Outcome */}
            <section id="outcome" className="mb-14">
              <p className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground mb-2">Outcome</p>
              <h2 className="font-serif text-[1.75rem] leading-[1.2] tracking-[-0.02em] mb-6 max-w-[750px]">
                Outcome
              </h2>
              <div className="space-y-4 text-[17px] leading-relaxed text-muted-foreground max-w-[750px]">
                <p>The product launched to a closed beta in April 2025. Early user feedback was positive - the experience was described as feeling distinctly different from other finance apps they had tried, which was exactly the signal we had been designing toward.</p>
              </div>
            </section>

            {/* Reflections */}
            <section id="reflections" className="mb-12">
              <p className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground mb-2">Reflections</p>
              <h2 className="font-serif text-[1.75rem] leading-[1.2] tracking-[-0.02em] mb-6 max-w-[750px]">
                What I&apos;d Revisit
              </h2>
              <div className="space-y-4 text-[17px] leading-relaxed text-muted-foreground max-w-[750px]">
                <p>The geometric sans holds at every size in the scale except one: small data labels on dark. The aperture isn&apos;t wide enough at 11-12px against a dark surface at the contrast ratio we were targeting, and in retrospect I&apos;d evaluate a humanist sans for data labels specifically while keeping geometric everywhere else.</p>
                <p>The consistency felt like a strength during design and revealed itself as a liability in production - the kind of gap that&apos;s hard to catch in Figma and easy to catch testing on device. I&apos;d push that testing earlier next time.</p>
              </div>
            </section>

            <div className="pt-8">
              <Link
                href="/#work"
                className="inline-flex items-center gap-2 text-[17px] hover:opacity-70 transition-opacity"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to all projects
              </Link>
            </div>
          </main>
        </div>
      </div>
    </div>
  )
}
