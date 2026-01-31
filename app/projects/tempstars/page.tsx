import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft } from 'lucide-react'

export default function TempStarsProject() {
  return (
    <div className="min-h-screen bg-background">
      <nav className="border-b border-border/50 bg-background/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-5 flex items-center justify-between">
          <Link href="/" className="font-serif text-lg tracking-[-0.02em] hover:opacity-70 transition-opacity">
            Maria Borysova
          </Link>
          <div className="flex items-center gap-6">
            <Link href="/#work" className="text-sm hover:opacity-70 transition-opacity">
              Work
            </Link>
            <Link href="/#articles" className="text-sm hover:opacity-70 transition-opacity">
              Articles
            </Link>
            <Link href="/#contact" className="text-sm hover:opacity-70 transition-opacity">
              Contact
            </Link>
          </div>
        </div>
      </nav>

      <div className="flex max-w-7xl mx-auto">
        <aside className="hidden lg:block w-56 pt-16 px-8 sticky top-20 h-[calc(100vh-5rem)] overflow-y-auto">
          <Link 
            href="/#work" 
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-16"
          >
            <ArrowLeft className="w-4 h-4" />
            All projects
          </Link>
          
          <nav className="space-y-4">
            <a href="#overview" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">
              Overview
            </a>
            <a href="#problem" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">
              Problem
            </a>
            <a href="#research" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">
              Research Insights
            </a>
            <a href="#solution" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">
              Solution Design
            </a>
            <a href="#exploration" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">
              Design Exploration
            </a>
            <a href="#outcomes" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">
              Impact
            </a>
            <a href="#reflection" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">
              Reflection
            </a>
          </nav>
        </aside>

        <main className="flex-1 px-6 lg:px-16 py-16 lg:py-20 max-w-4xl">
          {/* Project Header */}
          <div className="mb-16">
            <p className="font-mono text-[13px] text-muted-foreground mb-8 tracking-wider uppercase">
              TEMPSTARS • SHIPPED 2023
            </p>
            <h1 className="font-serif text-2xl md:text-3xl lg:text-4xl tracking-[-0.02em] leading-[1.2] mb-6 text-balance">
              Redesigning dental temp platform for higher activation
            </h1>
            <p className="text-[15px] leading-relaxed text-muted-foreground">
              TempStars is a dental temp app to quickly and easily find and match hygienists & assistants with dentist offices who need them short-term while their permanent employees are out of the office. Serving over 10,000 dental offices and connecting them with more than 24,000 dental professionals, TempStars is one of Canada's largest dental hiring services.
            </p>
          </div>

          {/* Hero Image */}
          <div className="mb-16 rounded-xl overflow-hidden shadow-sm">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/tJgeSlsjsqcUr6Yq5QvjhoFCRs-exDYr1nXKUTIwXNCKlCCfxKC4CLoQ.webp"
              alt="TempStars Welcome Screen"
              width={1200}
              height={675}
              className="w-full h-auto"
            />
          </div>

          <section className="mb-24 p-12 bg-[#F5F3F0] rounded-xl">
            <p className="font-mono text-[13px] uppercase tracking-wider text-muted-foreground mb-6">TL;DR</p>
            <h2 className="font-serif text-[2rem] leading-[1.2] tracking-[-0.02em] mb-10 text-balance">
              At a glance
            </h2>
            
            <div className="space-y-4 text-[15px] leading-relaxed mb-8">
              <p>I contributed work that led to a 25% increase in booked shifts. My work focused on accessibility, performance, and improving the booking experience,</p>
              <p>Redesigned user onboarding leading to increased activation (20%),</p>
              <p>Led extensive foundational research to build a shared understanding of user needs, personas, and journeys in the team,</p>
              <p>Led collaborative workshops to shape a solution and foster design thinking in a team,</p>
              <p>Designed a new design system yet preserved a familiar UX logic to avoid breaking habits.</p>
            </div>
          </section>

          <section id="overview" className="mb-24">
            <p className="font-mono text-[13px] uppercase tracking-wider text-muted-foreground mb-6">Overview</p>
            <h2 className="font-serif text-[2rem] leading-[1.2] tracking-[-0.02em] mb-8 text-balance">
              How might we reduce the time it takes for dental practices to find qualified staff?
            </h2>
            <div className="space-y-5 text-[15px] leading-relaxed text-muted-foreground">
              <p>
                TempStars connects dental practices with qualified temporary staff. However, the manual scheduling process was time-consuming and led to unfilled shifts, frustrated practices, and lost revenue opportunities.
              </p>
              <p>
                As the lead product designer, I worked to redesign the scheduling experience, introducing intelligent matching and streamlined booking flows that reduced time-to-fill by 60%.
              </p>
            </div>
          </section>

          <section id="problem" className="mb-24">
            <p className="font-mono text-[13px] uppercase tracking-wider text-muted-foreground mb-6">Problem</p>
            <h2 className="font-serif text-[2rem] leading-[1.2] tracking-[-0.02em] mb-12 text-balance">
              Low activation and retention
            </h2>
            
            <p className="text-[15px] leading-relaxed text-muted-foreground mb-10">
              TempStars faced low activation and retention rates, with many users signing up but not engaging with the platform. Additionally, the UI design, created over five years ago, was outdated and inconsistent. Our goal was to improve the activation rate and refresh the user interface to create a cohesive and modern experience.
            </p>
          </section>

          <section id="research" className="mb-24 p-12 bg-[#F5F3F0] rounded-xl">
            <p className="font-mono text-[13px] uppercase tracking-wider text-muted-foreground mb-6">Research</p>
            <h2 className="font-serif text-[2rem] leading-[1.2] tracking-[-0.02em] mb-12 text-balance">
              Research insights
            </h2>

            <div className="space-y-10">
              <div>
                <h3 className="font-serif text-xl leading-[1.3] tracking-[-0.02em] mb-4">
                  Most users don't work even one shift
                </h3>
                <p className="text-[15px] leading-relaxed text-muted-foreground">
                  The most significant drop-off in user engagement occurred in the early stages of the user journey. After registration, more than 40% of users did not interact with the app at all, and over 59% of users dropped off after receiving their first work offer.
                </p>
              </div>

              <div>
                <h3 className="font-serif text-xl leading-[1.3] tracking-[-0.02em] mb-4">
                  Confusing navigation
                </h3>
                <p className="text-[15px] leading-relaxed text-muted-foreground">
                  The biggest usability issue based on the survey was related to the search for the optimal shift. Only 60% mentioned they find this task easy. Hygienists spent a lot of time checking shift pages to see the key info hidden at the very bottom.
                </p>
              </div>

              <div>
                <h3 className="font-serif text-xl leading-[1.3] tracking-[-0.02em] mb-4">
                  Missing information
                </h3>
                <p className="text-[15px] leading-relaxed text-muted-foreground">
                  Users found it challenging to understand if the clinic was a good fit for them. They needed to leave the app and google the info about the dental clinic before sending their proposal.
                </p>
              </div>

              <div>
                <h3 className="font-serif text-xl leading-[1.3] tracking-[-0.02em] mb-4">
                  Complicated rules and lack of trust
                </h3>
                <p className="text-[15px] leading-relaxed text-muted-foreground">
                  Only 60% of users mentioned they find it easy to understand the rules and policies. Users didn't fully understand how the system works and didn't trust it.
                </p>
              </div>
            </div>
          </section>

          <section id="solution" className="mb-24">
            <p className="font-mono text-[13px] uppercase tracking-wider text-muted-foreground mb-6">Solution</p>
            <h2 className="font-serif text-[2rem] leading-[1.2] tracking-[-0.02em] mb-12 text-balance">
              Solution design
            </h2>

            <div className="space-y-16">
              <div>
                <h3 className="font-serif text-2xl leading-[1.2] tracking-[-0.02em] mb-6">
                  Restructured shift page with enriched context and easy navigation
                </h3>
                <p className="text-[15px] leading-relaxed text-muted-foreground mb-8">
                  After a few rounds of testing and redesigning, we landed on a new optimized shift page: it included all the necessary information to make a decision, the hierarchy was logical, and navigation was simplified.
                </p>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-4">
                  <div className="rounded-xl overflow-hidden shadow-sm">
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/g0BRqELs7R8xP0a3vfEuj6JpNw-zT4JfQtcW03ppkXivsKZKtyGi1Rj21.avif"
                      alt="Shift page interface"
                      width={400}
                      height={800}
                      className="w-full h-auto"
                    />
                  </div>
                  <div className="rounded-xl overflow-hidden shadow-sm">
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DFCSr0jaWRhTNSOlGA8fMONAzIs-ssmKFNUsUsXoxRlNZpayxMl0T0Cpef.avif"
                      alt="Shift details view"
                      width={400}
                      height={800}
                      className="w-full h-auto"
                    />
                  </div>
                  <div className="rounded-xl overflow-hidden shadow-sm">
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/P3RlsGuXY0iteIoDu6sWKd4hec-PB4QizRKFAykcDoE54DkbL0V1NpfEP.avif"
                      alt="Navigation example"
                      width={400}
                      height={800}
                      className="w-full h-auto"
                    />
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-serif text-2xl leading-[1.2] tracking-[-0.02em] mb-6">
                  Enriched and redesigned the signup flow for personalized user experience in the app
                </h3>
                <p className="text-[15px] leading-relaxed text-muted-foreground mb-8">
                  The research proved that users with some specific skills often apply only to the jobs that require these unique skills. By collecting this information from the workers upfront, we could show the relevant shifts on top making the match seamless.
                </p>
                <div className="rounded-xl overflow-hidden shadow-sm max-w-md mx-auto">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/g2huuCNJDHhlcEktsNMmZYFYIAg-nrguuXLmckBlHUDpuU0FzXBjScAvMc.webp"
                    alt="Resume upload onboarding"
                    width={600}
                    height={1200}
                    className="w-full h-auto"
                  />
                </div>
              </div>

              <div>
                <h3 className="font-serif text-2xl leading-[1.2] tracking-[-0.02em] mb-6">
                  Introducing user onboarding and simplifying the rules
                </h3>
                <p className="text-[15px] leading-relaxed text-muted-foreground mb-8">
                  Step-by-step explanations of the rules after signup and shift application helped users understand the next steps in the process, and what rights and responsibilities they will have.
                </p>
                <div className="rounded-xl overflow-hidden shadow-sm">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/LIUl9ctOlngQmaOWbIL35lTnT0k-ZqoAyA2YMAMDm4rIqQ8ran2OBG4l77.webp"
                    alt="User onboarding experience"
                    width={1200}
                    height={800}
                    className="w-full h-auto"
                  />
                </div>
              </div>

              <div>
                <h3 className="font-serif text-2xl leading-[1.2] tracking-[-0.02em] mb-6">
                  Personalized shift recommendations and streamlined shift selection
                </h3>
                <p className="text-[15px] leading-relaxed text-muted-foreground mb-8">
                  Introducing the filters and applying some of the filters based on the onboarding form answers helped us personalise their journeys and suggest the optimal shifts for work.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="rounded-xl overflow-hidden shadow-sm">
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/OwoLdmXae2UiPbpR2i0q1wduw-heRuirf0DIipmxvPa2COclxNQz9QZi.avif"
                      alt="Shift recommendations"
                      width={600}
                      height={1200}
                      className="w-full h-auto"
                    />
                  </div>
                  <div className="rounded-xl overflow-hidden shadow-sm">
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/OAX94RAPpVThwwqwE3AwZd97AM-uxXNxEJGt1OdvJSx1ouANBPr0wdgDV.avif"
                      alt="Streamlined selection"
                      width={600}
                      height={1200}
                      className="w-full h-auto"
                    />
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-serif text-2xl leading-[1.2] tracking-[-0.02em] mb-6">
                  A little bit of magic
                </h3>
                <p className="text-[15px] leading-relaxed text-muted-foreground mb-8">
                  I wanted to make the formal and neutral app more engaging and fun for dentists. We reshaped our tone of voice, making our language more friendly and simple. We have compiled illustrations with dentists to spruce up the flows.
                </p>
                <div className="rounded-xl overflow-hidden shadow-sm max-w-md mx-auto">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/NhWlLprsoX9J0Jdzid9CuNFFwnk-bQGOcQVTIGmbi8cWqrmKgIeSmvCWkr.avif"
                    alt="Friendly interface design"
                    width={600}
                    height={1200}
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </section>

          <section id="exploration" className="mb-24 p-12 bg-[#F5F3F0] rounded-xl">
            <p className="font-mono text-[13px] uppercase tracking-wider text-muted-foreground mb-6">Design Process</p>
            <h2 className="font-serif text-[2rem] leading-[1.2] tracking-[-0.02em] mb-12 text-balance">
              Design exploration
            </h2>

            <div className="space-y-12">
              <div>
                <h3 className="font-serif text-xl leading-[1.3] tracking-[-0.02em] mb-4">
                  Mapping onboarding and redesigning shift pages
                </h3>
                <p className="text-[15px] leading-relaxed text-muted-foreground mb-6">
                  We have tested different variants of the shift page and listing of the shifts.
                </p>
                <p className="text-[15px] leading-relaxed text-muted-foreground">
                  On top of that, we decided to also redesign signup and onboarding to tackle the issues discovered during research. Upon consideration of the different variants of onboarding designs, we decided to choose progressive info disclosure. We didn't want to overwhelm our predominantly non tech savvy users right away but needed to guide them step by step.
                </p>
              </div>

              <div>
                <h3 className="font-serif text-xl leading-[1.3] tracking-[-0.02em] mb-4">
                  Restructured shift page with enriched context and easy navigation
                </h3>
                <p className="text-[15px] leading-relaxed text-muted-foreground">
                  After a few rounds of testing and redesigning, we landed on a new optimized shift page: it included all the necessary information to make a decision, the hierarchy was logical, navigation was simplified.
                </p>
              </div>
            </div>
          </section>

          <section id="outcomes" className="mb-24">
            <p className="font-mono text-[13px] uppercase tracking-wider text-muted-foreground mb-6">Results</p>
            <h2 className="font-serif text-[2rem] leading-[1.2] tracking-[-0.02em] mb-12 text-balance">
              Impact
            </h2>

            <p className="text-[15px] leading-relaxed text-muted-foreground mb-10">
              The application is still in development and here are the early results after the beta launch:
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-10">
              <div className="bg-[#F5F3F0] rounded-lg p-8">
                <div className="text-3xl font-serif mb-3 tracking-[-0.02em]">20%</div>
                <p className="text-sm leading-relaxed text-muted-foreground">percentage of activated users (users who worked at least one shift) grew</p>
              </div>
              <div className="bg-[#F5F3F0] rounded-lg p-8">
                <div className="text-3xl font-serif mb-3 tracking-[-0.02em]">25%</div>
                <p className="text-sm leading-relaxed text-muted-foreground">increase in booked shifts</p>
              </div>
              <div className="bg-[#F5F3F0] rounded-lg p-8">
                <div className="text-3xl font-serif mb-3 tracking-[-0.02em]">7 to 2</div>
                <p className="text-sm leading-relaxed text-muted-foreground">days to send an offer reduced on average</p>
              </div>
              <div className="bg-[#F5F3F0] rounded-lg p-8">
                <div className="text-3xl font-serif mb-3 tracking-[-0.02em]">+</div>
                <p className="text-sm leading-relaxed text-muted-foreground">Created a consistent experience across the app and gave TempStars a more mature appearance</p>
              </div>
            </div>
          </section>

          <section id="reflection" className="mb-24 p-12 bg-[#F5F3F0] rounded-xl">
            <p className="font-mono text-[13px] uppercase tracking-wider text-muted-foreground mb-6">Reflection</p>
            <h2 className="font-serif text-[2rem] leading-[1.2] tracking-[-0.02em] mb-12 text-balance">
              Not just UI or Backoffice changes
            </h2>

            <div className="space-y-6 text-[15px] leading-relaxed text-muted-foreground">
              <p>
                One of the biggest challenges for us in this project was to change not only the visual presentation of the rules and policies but also their content. Rules often benefited the clinics more and giving dental professionals more transparency meant much higher respect from them and better brand image long term.
              </p>
              <p>
                After a number of discussions in a team we decided on the alterations to the rules which were perceived as the most untrustworthy: cancelation policy. We expanded the reasons why a dentist may cancel a shift and not get blocked by us. Also we have expanded the reasons why a dentist may want to cancel a shift after arrival to a clinic.
              </p>
            </div>
          </section>

          {/* Next Project */}
          <div className="border-t border-border/50 pt-12">
            <Link 
              href="/#work" 
              className="inline-flex items-center gap-2 text-sm hover:opacity-70 transition-opacity"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to all projects
            </Link>
          </div>
        </main>
      </div>
    </div>
  )
}
