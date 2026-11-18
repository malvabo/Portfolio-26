import { HeroGrid } from "@/components/hero-grid"

// The footer shares the hero's dot field: moving the cursor here wakes the
// same plus signs and marks, so the page opens and closes on one gesture.
const FOOTER_MASK = "linear-gradient(to bottom, transparent 0, #000 35%, #000 100%)"

export function Footer() {
  return (
    <footer className="relative overflow-hidden py-12 md:py-16 border-t border-border/40">
      <HeroGrid mask={FOOTER_MASK} />
      <div className="relative container mx-auto px-8 lg:px-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p data-grid-quiet className="text-[14px] text-muted-foreground">
            © 2026 Mary Borysova. All rights reserved.
          </p>
          <div data-grid-quiet className="flex gap-6">
            <a href="#" className="text-[14px] text-muted-foreground hover:text-foreground transition-colors">
              Privacy
            </a>
            <a href="#" className="text-[14px] text-muted-foreground hover:text-foreground transition-colors">
              Terms
            </a>
          </div>
        </div>
        <p data-grid-quiet className="text-[13px] text-muted-foreground/80 mt-8">
          Designed with love and lots of mint tea
        </p>
      </div>
    </footer>
  )
}
