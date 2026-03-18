import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

const projects = [
  {
    video: "/images/poetry1.mp4",
    title: "Poetry & Media",
    description: "A tool that helps produce visual social media content in poetry niche easily.",
  },
]

export default function SideProjects() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="max-w-7xl mx-auto px-8 lg:px-12 pt-32 pb-24">
        <div className="mb-12 max-w-[750px]">
          <h1 className="font-serif text-2xl md:text-3xl lg:text-4xl tracking-[-0.02em] leading-[1.2]">
            AI experiments
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-[750px]">
          {projects.map((project, i) => (
            <div key={i} className="flex flex-col gap-3">
              <div className="rounded-xl overflow-hidden bg-[#F5F3F0]">
                <video
                  src={project.video}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-auto"
                />
              </div>
              <div>
                <p className="text-[15px] font-medium text-foreground mb-1">{project.title}</p>
                <p className="text-[14px] text-muted-foreground leading-relaxed">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  )
}
