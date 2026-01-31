import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { WorkSection } from "@/components/work-section"
import { BodySpecSection } from "@/components/bodyspec-section"
import { LuminaraSection } from "@/components/luminara-section"
import { SquirllSection } from "@/components/squirll-section"
import { PandaDocSection } from "@/components/pandadoc-section"
import { ArticlesSection } from "@/components/articles-section"
import { SpeakingIndustrySection } from "@/components/speaking-industry-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { PersonalProjectsSection } from "@/components/personal-projects-section"
import { Footer } from "@/components/footer"
import { AuthoticsSection } from "@/components/authotics-section"

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <SpeakingIndustrySection />
        <WorkSection />
        <SquirllSection />
        <AuthoticsSection />
        <BodySpecSection />
        <LuminaraSection />
        <PandaDocSection />
        <ArticlesSection />
        <TestimonialsSection />
        <PersonalProjectsSection />
      </main>
      <Footer />
    </div>
  )
}
