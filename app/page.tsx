import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { WorkSection } from "@/components/work-section"
import { BodySpecSection } from "@/components/bodyspec-section"
import { LuminaraSection } from "@/components/luminara-section"
import { TempStarsSection } from "@/components/tempstars-section"
import { SquirllSection } from "@/components/squirll-section"
import { PandaDocSection } from "@/components/pandadoc-section"
import { ArticlesSection } from "@/components/articles-section"
import { SpeakingIndustrySection } from "@/components/speaking-industry-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { WorkshopsSection } from "@/components/workshops-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <SpeakingIndustrySection />
        <TestimonialsSection />
        <WorkSection />
        <SquirllSection />
        <BodySpecSection />
        <PandaDocSection />
        <TempStarsSection />
        <LuminaraSection />
        <ArticlesSection />
        <WorkshopsSection />
      </main>
      <Footer />
    </div>
  )
}
