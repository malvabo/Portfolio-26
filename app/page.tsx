import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { AnimatedSection } from "@/components/animated-section"
import { StickyDarkSection } from "@/components/sticky-dark-section"
import { WorkSection } from "@/components/work-section"
import { SquirllSection } from "@/components/squirll-section"
import { TempStarsSection } from "@/components/tempstars-section"
// import { PandaDocSection } from "@/components/pandadoc-section"
import { PAASection } from "@/components/paa-section"
import { VeeqoSection } from "@/components/veeqo-section"
import { VeraSection } from "@/components/vera-section"
import { ArticlesSection } from "@/components/articles-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { VisualConceptsSection } from "@/components/visual-concepts-section"
import { WorkshopsSection } from "@/components/workshops-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <StickyDarkSection id="about">
          <div className="container mx-auto px-8 lg:px-12 max-w-7xl">
            <div className="max-w-3xl">
              <p className="uppercase text-[13px] text-white/60 font-mono tracking-wide mb-6">
                {"{ "}about{" }"}
              </p>
              <h2 className="font-sans text-3xl md:text-5xl lg:text-6xl font-normal leading-[1.1] tracking-[-0.02em] text-white">
                Designing AI products that augment human judgment — not replace it.
              </h2>
              <p className="mt-8 text-base md:text-lg text-white/70 leading-relaxed max-w-2xl">
                I lead 0→1 work where the problem is fuzzy and the constraints are real, and I build for production — not for the deck.
              </p>
            </div>
          </div>
        </StickyDarkSection>
        <AnimatedSection delayOnLoad={0}>
          <TestimonialsSection />
        </AnimatedSection>
        <AnimatedSection>
          <WorkSection />
        </AnimatedSection>
        <AnimatedSection>
          <VeraSection />
        </AnimatedSection>
        <AnimatedSection>
          <VeeqoSection />
        </AnimatedSection>
        <AnimatedSection>
          <PAASection />
        </AnimatedSection>
        {/* <AnimatedSection>
          <PandaDocSection />
        </AnimatedSection> */}
        <AnimatedSection>
          <SquirllSection />
        </AnimatedSection>
        <AnimatedSection>
          <TempStarsSection />
        </AnimatedSection>
        <AnimatedSection>
          <ArticlesSection />
        </AnimatedSection>
        <AnimatedSection>
          <VisualConceptsSection />
        </AnimatedSection>
        <AnimatedSection>
          <WorkshopsSection />
        </AnimatedSection>
      </main>
      <Footer />
    </div>
  )
}
