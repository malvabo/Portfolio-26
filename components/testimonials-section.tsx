import Image from "next/image"

export function TestimonialsSection() {
  const testimonials = [
    {
      title: "Critical in AI development",
      keyPhrase: "excellent communicator",
      text: "On a personal level, she was a joy to work with—friendly, funny and an excellent communicator.",
      author: "Ophelie Jaschke",
      role: "CEO at lenox AI",
      linkedin: "#",
      avatar:
        "https://framerusercontent.com/images/efv2jdJ0YVFcD3jXRKJ9b14U.jpeg?scale-down-to=512&width=800&height=800",
    },
    {
      title: "Outstanding skills",
      keyPhrase: "meticulous attention to details",
      text: "Great at understanding user needs and pays meticulous attention to details.",
      author: "Igor Stefaniuk",
      role: "Principal Product Manager at PandaDoc",
      linkedin: "#",
      avatar:
        "https://framerusercontent.com/images/prBHH86UxUaOP1ZIk3IsNlTTxg.jpeg?scale-down-to=512&width=560&height=560",
    },
    {
      title: "Invaluable asset to any team",
      keyPhrase: "invaluable asset to any team",
      text: "Their ability to understand, incorporate feedback, and take action make them an invaluable asset to any team. Fast, communicative, and a pleasure to work with.",
      author: "Roy Shi",
      role: "CEO at Bodyspec",
      linkedin: "#",
      avatar: "https://framerusercontent.com/images/ifGTqzqKAHeynuxWWbsSMMbwfMg.jpeg?width=378&height=378",
    },
    {
      title: "Thorough and analytical",
      keyPhrase: "push the team to build with purpose",
      text: "They question the status quo and ask the tough questions that push the team to build with purpose.",
      author: "Carla Ruiz Entrecanales",
      role: "Venture Builder at ColdStart",
      linkedin: "#",
      avatar: "https://framerusercontent.com/images/Hd1E2e8ZG1g4zNUsGWNhHe5seg.jpeg?width=387&height=387",
    },
    {
      title: "Incredibly talented designer",
      keyPhrase: "go above and beyond",
      text: "A pleasure to work with—positive attitude and always go above and beyond.",
      author: "Nikolay Stefanov",
      role: "R&D Manager at BGO Software",
      linkedin: "#",
      avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjzNikjRgqk-muIvC_aUGKYtBR38ySOKFEew&s",
    },
    {
      title: "Drives projects to completion",
      keyPhrase: "Immerses themselves entirely",
      text: "Immerses themselves entirely in the project to drive it to completion.",
      author: "Konstantin Valiotti",
      role: "Director of Product at PandaDoc",
      linkedin: "#",
      avatar:
        "https://framerusercontent.com/images/78dofovJbAtympTLqZLY1jA24.jpeg?scale-down-to=512&width=800&height=800",
    },
  ]

  function highlightPhrase(text: string, phrase: string) {
    const idx = text.toLowerCase().indexOf(phrase.toLowerCase())
    if (idx === -1) return text
    const before = text.slice(0, idx)
    const matched = text.slice(idx, idx + phrase.length)
    const after = text.slice(idx + phrase.length)
    return (
      <>
        {before}
        <mark className="bg-amber-200/90 text-amber-950 rounded-sm px-0.5">{matched}</mark>
        {after}
      </>
    )
  }

  return (
    <section className="relative py-8 md:py-10 container mx-auto px-8 lg:px-12 overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute top-1/4 left-1/3 w-[800px] h-[800px] rounded-full bg-gradient-to-br from-purple-500 to-pink-500 blur-[120px]" />
      </div>

      <div className="relative max-w-7xl mx-auto">
        <div className="flex items-center gap-2 mb-2">
          <span className="uppercase text-[13px] text-muted-foreground/70 font-mono tracking-wide">TESTIMONIALS</span>
        </div>

        <h2 className="font-serif text-2xl md:text-3xl leading-[1.1] tracking-tight text-foreground mb-10">
          What teams I've worked with say
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-[#f1f1f1] rounded-xl p-5 h-full flex flex-col">
              <p className="text-sm md:text-base leading-relaxed text-foreground/90 mb-4 flex-grow font-serif">
                &ldquo;{highlightPhrase(testimonial.text, testimonial.keyPhrase)}&rdquo;
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
