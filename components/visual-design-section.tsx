export function VisualDesignSection() {
  return (
    <section className="py-12 md:py-16 container mx-auto px-6 lg:px-12 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-2 mb-6">
          <span className="uppercase text-[13px] text-muted-foreground/70 font-mono tracking-wide">My designs</span>
        </div>

        <h2 className="font-serif text-2xl md:text-3xl leading-[1.1] tracking-tight text-foreground mb-6">
          From pixels to systems
        </h2>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[1, 2, 3, 4, 5, 6].map((index) => (
            <div 
              key={index}
              className="aspect-square bg-background rounded-lg overflow-hidden border border-border"
            >
              <img 
                src={`/modern-ui-design-sample-.jpg?height=600&width=600&query=modern ui design sample ${index}`}
                alt={`Design sample ${index}`}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
