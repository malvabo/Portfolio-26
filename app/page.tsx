import { Header } from "@/components/header"
import { StoryCursor } from "@/components/story-cursor"
import { Hero } from "@/components/hero"
import { HeroPhotos } from "@/components/hero-photos"
import { ShowreelSection } from "@/components/showreel-section"
import { AnimatedSection } from "@/components/animated-section"
import { WorkSection } from "@/components/work-section"
import { SquirllSection } from "@/components/squirll-section"
import { ConduitSection } from "@/components/conduit-section"
// import { PandaDocSection } from "@/components/pandadoc-section"
import { PAASection } from "@/components/paa-section"
import { VeeqoSection } from "@/components/veeqo-section"
import { VeraSection } from "@/components/vera-section"
import { ArticlesSection } from "@/components/articles-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { AmazonSection } from "@/components/amazon-section"
import { VisualConceptsSection } from "@/components/visual-concepts-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen">
      <StoryCursor />
      <Header />
      <main>
        <Hero />
        <HeroPhotos />
        {/* <ShowreelSection /> */}
        <AnimatedSection delayOnLoad={0}>
          <TestimonialsSection />
        </AnimatedSection>
        <AnimatedSection>
          <WorkSection />
        </AnimatedSection>
        {/* Hidden for now; kept to bring back later. */}
        {/* <AnimatedSection>
          <AmazonSection />
        </AnimatedSection> */}
        <AnimatedSection>
          <VeeqoSection />
        </AnimatedSection>
        <AnimatedSection>
          <ConduitSection />
        </AnimatedSection>
        {/* <AnimatedSection>
          <VeraSection />
        </AnimatedSection> */}
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
          <ArticlesSection />
        </AnimatedSection>
        <AnimatedSection>
          <VisualConceptsSection />
        </AnimatedSection>
      </main>
      <Footer />
    </div>
  )
}
