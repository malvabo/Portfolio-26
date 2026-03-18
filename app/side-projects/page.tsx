"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { X } from "lucide-react"

const projects = [
  {
    video: "/images/poetry1.mp4",
    title: "Poetry & Media Generation",
    description: "A tool that makes production of visual social media content in poetry niche easily. Just choose the background, styling for the text, adjust the content on the page and download the asset.",
  },
  {
    video: "/images/script2.mp4",
    title: "Talk Script Analysis Tool",
    description: "A solution that allows to analyze the content of the talk, spot the gaps, localize it for different cultures and find opportunities how to make the story more engaging.",
  },
]

export default function SideProjects() {
  const [active, setActive] = useState<number | null>(null)
  const project = active !== null ? projects[active] : null

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="max-w-7xl mx-auto px-8 lg:px-12 pt-24 pb-24">
        <div className="mb-8 max-w-[750px]">
          <h1 className="font-serif text-2xl md:text-3xl lg:text-4xl tracking-[-0.02em] leading-[1.2]">
            AI experiments
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-[750px]">
          {projects.map((p, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className="text-left group rounded-2xl overflow-hidden border border-border/20 bg-background hover:border-border/40 shadow-[0_1px_4px_rgba(0,0,0,0.06)] hover:shadow-[0_4px_16px_rgba(0,0,0,0.08)] transition-all duration-300 cursor-pointer focus:outline-none"
            >
              <div className="aspect-video bg-[#F5F3F0] overflow-hidden">
                {p.video ? (
                  <video
                    src={p.video}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full" />
                )}
              </div>
              <div className="p-4">
                <p className="text-[15px] font-medium text-foreground mb-1">{p.title}</p>
                <p className="text-[13px] text-muted-foreground leading-relaxed">{p.description}</p>
              </div>
            </button>
          ))}
        </div>
      </main>
      <Footer />

      {/* Modal */}
      {project && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-6"
          onClick={() => setActive(null)}
        >
          <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />
          <div
            className="relative bg-background rounded-2xl shadow-xl w-full max-w-4xl max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between px-6 pt-6 pb-4">
              <h2 className="text-[18px] font-medium text-foreground">{project.title}</h2>
              <button
                onClick={() => setActive(null)}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <X size={20} />
              </button>
            </div>
            <div className="px-6 pb-6 flex flex-col gap-4">
              <div className="rounded-xl overflow-hidden bg-[#F5F3F0] aspect-video">
                {project.video ? (
                  <video
                    key={project.video}
                    src={project.video}
                    autoPlay
                    loop
                    muted
                    playsInline
                    controls
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full" />
                )}
              </div>
              <p className="text-[15px] text-muted-foreground leading-relaxed">{project.description}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
