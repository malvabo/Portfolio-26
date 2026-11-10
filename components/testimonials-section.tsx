import Image from "next/image"

export function TestimonialsSection() {
  const testimonials = [
    {
      title: "Strong recommendation",
      text: "I've worked under the leadership of Maria. Her superb communication skills, leadership qualities, enthusiastic personality are the reasons why I recommend her strongly.",
      author: "Kateryna Lezhukh",
      role: "Founder at Quema (presently)",
      linkedin: "#",
      avatar: "/images/kateryna-lezhukh.png",
    },
    {
      title: "Drives projects to completion",
      text: "Immerses themselves entirely in the project to drive it to completion. Works to reduce uncertainty for everyone else to understand user needs.",
      author: "Konstantin Valiotti",
      role: "Director of Product at PandaDoc",
      linkedin: "#",
      avatar:
        "https://framerusercontent.com/images/78dofovJbAtympTLqZLY1jA24.jpeg?scale-down-to=512&width=800&height=800",
    },
    {
      title: "Thorough and analytical",
      text: "She questions the status quo and asks the tough questions that push the team to build with purpose.",
      author: "Carla Ruiz Entrecanales",
      role: "Venture Builder at ColdStart",
      linkedin: "#",
      avatar: "https://framerusercontent.com/images/Hd1E2e8ZG1g4zNUsGWNhHe5seg.jpeg?width=387&height=387",
    },
  ]

  return (
    <section className="relative pt-12 md:pt-14 pb-8 md:pb-10 container mx-auto px-8 lg:px-12 overflow-hidden">
      <div className="relative max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-[#f1f1f1] rounded-xl p-6 md:p-7 h-full flex flex-col">
              <p className="text-base leading-relaxed text-foreground mb-4 flex-grow font-sans">
                {testimonial.text}
              </p>

              <div className="flex items-center gap-3 pt-4 border-t border-border/30">
                <div className="w-10 h-10 rounded-full overflow-hidden bg-muted flex-shrink-0 ring-2 ring-white shadow-sm">
                  <Image
                    src={testimonial.avatar || "/placeholder.svg"}
                    alt={testimonial.author}
                    width={40}
                    height={40}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">{testimonial.author}</p>
                  <p className="text-xs font-medium text-muted-foreground mt-0.5">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
