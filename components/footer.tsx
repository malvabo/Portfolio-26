export function Footer() {
  return (
    <footer className="py-12 md:py-16 border-t border-border/40">
      <div className="container mx-auto px-8 lg:px-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[14px] text-muted-foreground">© 2025 Maria Borysova. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="text-[14px] text-muted-foreground hover:text-foreground transition-colors">
              Privacy
            </a>
            <a href="#" className="text-[14px] text-muted-foreground hover:text-foreground transition-colors">
              Terms
            </a>
          </div>
        </div>
        <p className="text-[13px] text-muted-foreground/80 text-center mt-8">Designed with love and lots of mint tea</p>
      </div>
    </footer>
  )
}
