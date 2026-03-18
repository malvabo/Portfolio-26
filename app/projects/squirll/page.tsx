"use client"
import { LightboxImage } from "@/components/lightbox-image"

import Link from "next/link"
import { BackLinkSidebar, BackLinkFooter } from "@/components/back-link"
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
            <BackLinkSidebar />
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
                Squirll: Defining the Design Language and Brand Expression
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
              <div className="rounded-xl overflow-hidden aspect-[16/9]">
                <LightboxImage
                  src="/images/squirll-collage-1.jpg"
                  alt="Squirll spending analytics"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Context */}
            <section id="context" className="mb-14">
              <p className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground mb-2">Context</p>
              <h2 className="font-serif text-[1.75rem] leading-[1.2] tracking-[-0.02em] mb-6 max-w-[750px]">
                Building a finance app from scratch
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
                Finding our position in the market
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
              <p className="mt-3 text-sm text-muted-foreground max-w-[750px] text-center mb-6">Early direction drafts</p>

              <div className="space-y-4 text-[17px] leading-relaxed text-muted-foreground max-w-[750px]">
                <p>Research on arousal and interface design informed this directly. Dark backgrounds lower arousal, reducing the alertness and vigilance that light backgrounds trigger. The implicit message across light-background finance apps is: <em>pay attention to this</em>. The implicit message we were designing toward was the opposite – <em>this is already taken care of</em>. That framing became the filter for every visual decision that followed.</p>
              </div>
            </section>

            {/* Color */}
            <section id="color" className="mb-14">
              <p className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground mb-2">Color</p>
              <h2 className="font-serif text-[1.75rem] leading-[1.2] tracking-[-0.02em] mb-6 max-w-[750px]">
                Exploring two color directions
              </h2>
              <div className="space-y-4 text-[17px] leading-relaxed text-muted-foreground max-w-[750px] mb-8">
                <p>I explored two palette directions and brought both to the team. We iterated on both across several sessions with the founders and PM.</p>
              </div>

              <div className="flex flex-col max-w-[750px] mb-8 divide-y divide-[#EBEBEB] border border-[#EBEBEB] bg-white">
                <div className="flex items-start gap-6 p-6">
                  <span className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground pt-0.5 shrink-0 w-[140px]">Direction 1</span>
                  <div>
                    <p className="text-[14px] font-medium text-foreground mb-2">Warm dark</p>
                    <div className="flex flex-wrap gap-2 mb-3">
                      <span className="text-[11px] font-medium px-2.5 py-1 rounded-sm bg-[#EBEBEB] text-muted-foreground">Near-black with brown tint</span>
                      <span className="text-[11px] font-medium px-2.5 py-1 rounded-sm bg-[#EBEBEB] text-muted-foreground">Amber primary accent</span>
                      <span className="text-[11px] font-medium px-2.5 py-1 rounded-sm bg-[#EBEBEB] text-muted-foreground">Radial glow on entry</span>
                    </div>
                    <p className="text-[15px] text-muted-foreground leading-relaxed">Feels like the product is on your side. Amber signals trust, not assessment.</p>
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
                    <p className="text-[15px] text-muted-foreground leading-relaxed">Category default – credibility borrowed from convention, solving the wrong problem.</p>
                  </div>
                </div>
              </div>

              <div className="space-y-4 text-[17px] leading-relaxed text-muted-foreground max-w-[750px]">
                <p>The blue had a genuine argument behind it - credibility borrowed from category convention, the kind of trust signal institutions have spent decades building. But the more we worked through it, the clearer it became that it was solving the wrong problem. Squirll wasn&apos;t competing with banks - it was competing with the anxious, approximate version of money management people do in their heads. Warm dark won.</p>
              </div>

              <div className="rounded-xl overflow-hidden max-w-[750px] mt-8">
                <LightboxImage
                  src="/images/sq-bl2.png"
                  alt="Squirll warm dark palette in context"
                  className="w-full h-auto object-cover"
                />
              </div>
              <p className="mt-3 text-sm text-muted-foreground max-w-[750px] text-center mb-6">Warm dark palette applied</p>

              <div className="space-y-4 text-[17px] leading-relaxed text-muted-foreground max-w-[750px]">
                <p>The near-black base removes the aesthetic memory of bank statements and spreadsheets, the associations people carry from every finance tool they&apos;ve already abandoned. The radial glow in onboarding anchors the composition and implies that something intelligent is active beneath the surface, without carrying the urgency or anxiety of an alert.</p>
              </div>

              <div className="rounded-xl overflow-hidden max-w-[750px] mt-8">
                <LightboxImage
                  src="/images/sq-bl.png"
                  alt="Squirll color direction exploration"
                  className="w-full h-auto object-cover"
                />
              </div>
              <p className="mt-3 text-sm text-muted-foreground max-w-[750px] text-center">Color direction exploration</p>
            </section>

            {/* Typography */}
            <section id="typography" className="mb-14">
              <p className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground mb-2">Typography</p>
              <h2 className="font-serif text-[1.75rem] leading-[1.2] tracking-[-0.02em] mb-6 max-w-[750px]">
                Choosing the right typefaces
              </h2>
              <div className="space-y-4 text-[17px] leading-relaxed text-muted-foreground max-w-[750px]">
                <p>Sans-serif carried all functional UI – readable, neutral, nothing in the way. DM Serif Display came in for titles and insight headlines only: the moments where the product needed to feel like it was saying something that mattered, not just displaying data.</p>
              </div>

              <div className="rounded-xl overflow-hidden max-w-[750px] mt-8">
                <LightboxImage
                  src="/images/sq-4.jpg"
                  alt="Squirll 3D illustration"
                  className="w-full h-auto object-cover"
                />
              </div>
              <p className="mt-3 text-sm text-muted-foreground max-w-[750px] text-center">3D AI insight illustration</p>

            </section>

            {/* Illustration */}
            <section id="illustration" className="mb-14">
              <p className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground mb-2">Illustration</p>
              <h2 className="font-serif text-[1.75rem] leading-[1.2] tracking-[-0.02em] mb-6 max-w-[750px]">
                Building trust through illustration
              </h2>
              <div className="space-y-4 text-[17px] leading-relaxed text-muted-foreground max-w-[750px]">
                <p>Showing actual interface too early in onboarding asks users to parse something before they&apos;ve decided to trust it. I needed illustration that communicated the product promise without requiring any interpretation from the user.</p>
              </div>

              <div className="grid grid-cols-2 gap-4 max-w-[750px] mt-8">
                {["Sq1", "Sq2"].map((name) => (
                  <div key={name} className="rounded-xl overflow-hidden bg-black aspect-square">
                    <video
                      src={`/images/${name}.mp4`}
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
              <p className="mt-3 text-sm text-muted-foreground max-w-[750px] text-center mb-8">Animated onboarding illustrations - orbital radial glow and account-linking motion</p>

              <div className="rounded-xl overflow-hidden max-w-[750px] mt-8">
                <LightboxImage
                  src="/images/squirll-collage-2.jpg"
                  alt="Squirll financial dashboard"
                  className="w-full h-auto object-cover"
                />
              </div>
              <p className="mt-3 text-sm text-muted-foreground max-w-[750px] text-center mb-8">Onboarding orbital illustration</p>

              <div className="space-y-4 text-[17px] leading-relaxed text-muted-foreground max-w-[750px]">
                <p>For the insights screen I chose 3D over flat, because flat illustration has become so widespread in consumer software that it&apos;s stopped carrying meaning. Three-dimensional form creates associations that flat can&apos;t manufacture - depth, layers, intelligence operating beneath the surface. The cobalt blue of that illustration is the only cool tone in an otherwise warm palette, deliberately separating what the AI is doing from what the user sees as a result.</p>
              </div>

              <div className="flex gap-4 mt-8 max-w-[750px]">
                <div className="flex-1 rounded-xl overflow-hidden bg-black aspect-square">
                  <video
                    src="/images/Sq-full.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1 rounded-xl overflow-hidden aspect-square">
                  <LightboxImage
                    src="/images/squirll-collage-7.jpg"
                    alt="Squirll app experience"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <p className="mt-3 text-sm text-muted-foreground max-w-[750px] text-center">Uploading a receipt flow</p>
            </section>

            {/* Dashboard */}
            <section id="dashboard" className="mb-14">
              <p className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground mb-2">Dashboard</p>
              <h2 className="font-serif text-[1.75rem] leading-[1.2] tracking-[-0.02em] mb-6 max-w-[750px]">
                Designing the dashboard
              </h2>
              <div className="space-y-4 text-[17px] leading-relaxed text-muted-foreground max-w-[750px] mb-10">
                <p>The glowing circle at the centre of the dashboard is doing one thing: lowering the user&apos;s guard. Before any number is read, the composition signals that this is a calm environment – something is in control, and it isn&apos;t asking anything of you yet.</p>
              </div>

              <div className="rounded-xl overflow-hidden max-w-[750px] mt-8">
                <LightboxImage
                  src="/images/sq-3.jpg"
                  alt="Squirll analytics dashboard"
                  className="w-full h-auto object-cover"
                />
              </div>
              <p className="mt-3 text-sm text-muted-foreground max-w-[750px] text-center mb-6">Analytics line graph view</p>

              <div className="rounded-xl overflow-hidden max-w-[750px] mt-8">
                <LightboxImage
                  src="/images/SQ-44.jpg"
                  alt="Squirll analytics and messages screens"
                  className="w-full h-auto object-cover"
                />
              </div>
              <p className="mt-3 text-sm text-muted-foreground max-w-[750px] text-center">Analytics and merchant messages</p>
            </section>

            {/* Craft */}
            <section id="craft" className="mb-14">
              <p className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground mb-2">Craft</p>
              <h2 className="font-serif text-[1.75rem] leading-[1.2] tracking-[-0.02em] mb-6 max-w-[750px]">
                Craft and attention to detail
              </h2>
              <div className="space-y-4 text-[17px] leading-relaxed text-muted-foreground max-w-[750px]">
                <p>The difference between a functional interface and a considered one is that these were made with a specific user feeling as the target, argued for in reviews with the team, and connected back to behavior rather than aesthetics.</p>
              </div>

              <div className="flex gap-4 max-w-[750px] mt-8">
                <div className="flex-1 rounded-xl overflow-hidden aspect-square">
                  <LightboxImage
                    src="/images/squirll-collage-8.jpg"
                    alt="Squirll interface design"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1 rounded-xl overflow-hidden bg-black aspect-square">
                  <video
                    src="/images/anim_SQ.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <p className="mt-3 text-sm text-muted-foreground max-w-[750px] text-center">Dark mode interface details</p>
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
                <p>I&apos;d explore a different serif pairing – one optimised for readability at smaller sizes, not just editorial impact at display scale. DM Serif Display earns its place in headlines, but there are moments in the product where something with better small-size legibility would have served the user better.</p>
              </div>
            </section>

            <div className="pt-8">
              <BackLinkFooter />
            </div>
          </main>
        </div>
      </div>
    </div>
  )
}
