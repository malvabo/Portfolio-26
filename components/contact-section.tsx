"use client"
import { Mail, Linkedin, Twitter, ArrowRight } from "lucide-react"
import { useState } from "react"

export function ContactSection() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null)

  const contactMethods = [
    {
      id: "email",
      icon: Mail,
      title: "Send an email",
      description: "hello@maria.design",
      href: "mailto:hello@maria.design",
      gradient: "from-amber-400 via-orange-400 to-rose-400",
    },
    {
      id: "linkedin",
      icon: Linkedin,
      title: "Connect on LinkedIn",
      description: "Professional network",
      href: "https://linkedin.com",
      gradient: "from-blue-400 via-indigo-400 to-purple-400",
    },
    {
      id: "twitter",
      icon: Twitter,
      title: "Follow on Twitter",
      description: "Latest updates",
      href: "https://twitter.com",
      gradient: "from-cyan-400 via-sky-400 to-blue-400",
    },
  ]

  return (
    <section id="contact" className="py-12 md:py-16 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl leading-tight mb-4 text-balance tracking-[-0.02em]">
              Let's create something exceptional together
            </h2>
            <p className="text-base leading-relaxed text-muted-foreground max-w-2xl mx-auto">
              Available for select projects starting Q2 2025. Whether you need product strategy, design leadership, or
              hands-on execution, let's talk.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {contactMethods.map((method) => {
              const Icon = method.icon
              const isHovered = hoveredCard === method.id

              return (
                <a
                  key={method.id}
                  href={method.href}
                  target={method.id !== "email" ? "_blank" : undefined}
                  rel={method.id !== "email" ? "noopener noreferrer" : undefined}
                  className="group relative block"
                  onMouseEnter={() => setHoveredCard(method.id)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <div className="relative h-full bg-background border-2 border-border rounded-2xl p-8 transition-all duration-500 hover:border-transparent overflow-hidden">
                    <div
                      className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-700 scale-50 group-hover:scale-100`}
                      style={{
                        background: `radial-gradient(circle at center, ${
                          method.id === "email"
                            ? "#fbbf24, #fb923c, #fb7185"
                            : method.id === "linkedin"
                              ? "#60a5fa, #818cf8, #a78bfa"
                              : "#22d3ee, #38bdf8, #3b82f6"
                        })`,
                      }}
                    />

                    <div className="relative z-10 flex flex-col items-center text-center gap-4">
                      <div className="w-16 h-16 rounded-full bg-muted group-hover:bg-white/20 transition-all duration-500 flex items-center justify-center group-hover:scale-110">
                        <Icon className="h-8 w-8 transition-colors duration-500 group-hover:text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold mb-1 transition-colors duration-500 group-hover:text-white">
                          {method.title}
                        </h3>
                        <p className="text-sm text-muted-foreground transition-colors duration-500 group-hover:text-white/80">
                          {method.description}
                        </p>
                      </div>
                      <ArrowRight className="h-5 w-5 opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:translate-x-2 text-white mt-2" />
                    </div>
                  </div>
                </a>
              )
            })}
          </div>

          <div className="max-w-md mx-auto bg-[#F5F3F0] rounded-2xl p-6 text-center">
            <div className="flex items-center justify-center gap-3 mb-3">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-sm font-medium">Available Q2 2025</span>
            </div>
            <p className="text-sm text-muted-foreground">Currently accepting select project inquiries</p>
          </div>
        </div>
      </div>
    </section>
  )
}
