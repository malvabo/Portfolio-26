import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { AnimatedSection } from "@/components/animated-section"
import { WorkSection } from "@/components/work-section"
import { AmazonSection } from "@/components/amazon-section"
import { BodySpecSection } from "@/components/bodyspec-section"
import { TempStarsSection } from "@/components/tempstars-section"
import { SquirllSection } from "@/components/squirll-section"
import { PandaDocSection } from "@/components/pandadoc-section"
import { PAASection } from "@/components/paa-section"
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
        <AnimatedSection delayOnLoad={2.8}>
          <TestimonialsSection />
        </AnimatedSection>
        <AnimatedSection>
          <WorkSection />
        </AnimatedSection>
        <AnimatedSection>
          <AmazonSection />
        </AnimatedSection>
        <AnimatedSection>
          <PAASection />
        </AnimatedSection>
        <AnimatedSection>
          <TempStarsSection />
        </AnimatedSection>
        <AnimatedSection>
          <PandaDocSection />
        </AnimatedSection>
        <AnimatedSection>
          <SquirllSection />
        </AnimatedSection>
        <AnimatedSection>
          <BodySpecSection />
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
