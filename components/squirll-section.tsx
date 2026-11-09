import { LightboxImage } from "@/components/lightbox-image"

export function SquirllSection() {
  return (
    <section id="squirll" className="container mx-auto px-8 lg:px-12 pt-2 md:pt-3 pb-8 md:pb-12 scroll-mt-24">
      <div className="max-w-7xl mx-auto">
      <span className="inline-block mb-3 px-2.5 py-0.5 text-[11px] font-mono uppercase tracking-widest rounded-md bg-[#E8E3DD] text-[#6B5D4F]">0→1 Early Stage</span>
      <h2 className="text-[22px] md:text-[26px] leading-[1.15] font-serif mb-8 tracking-tight">
        Squirll: Turning receipts into insights with AI
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 mb-10">
        <div>
          <h3 className="text-xs font-normal mb-3 uppercase tracking-wide text-muted-foreground opacity-80">About</h3>
          <p className="text-base leading-relaxed text-foreground">
            I led the design of an AI-driven budgeting platform that does the heavy lifting for you. Computer vision reads receipts and fills in the data, turning a tedious manual task into a seamless, autopilot experience.
          </p>
        </div>

        <div>
          <h3 className="text-xs font-normal mb-3 uppercase tracking-wide text-muted-foreground opacity-80">
            Results
          </h3>
          <div className="space-y-4">
            <div>
              <a
                href="https://indigoaward.com/winners/12153"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl font-medium text-foreground mb-0.5 hover:underline block"
              >
                3× Design Awards
              </a>
              <div className="text-sm text-muted-foreground opacity-80">1 Gold &amp; 2 Silver: Application, Branding, UX &amp; Navigation</div>
            </div>
            <div>
              <div className="text-xl font-medium text-foreground mb-0.5">12 weeks</div>
              <div className="text-sm text-muted-foreground opacity-80">to launch the application</div>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-xs font-normal mb-3 uppercase tracking-wide text-muted-foreground opacity-80">Role</h3>
          <div className="text-base leading-relaxed text-foreground space-y-0.5">
            <p>Lead Product Designer</p>
            <p>3 months, 2025</p>
            <div className="flex flex-wrap gap-1.5 mt-2">
              {["Web", "iOS"].map((platform) => (
                <span
                  key={platform}
                  className="inline-block px-2 py-0.5 text-[13px] rounded-md bg-[#E8E3DD] text-[#6B5D4F]"
                >
                  {platform}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="relative aspect-[4/3] overflow-hidden rounded-lg bg-black">
            <video src="/images/Sq1.mp4" autoPlay loop muted playsInline className="w-full h-full object-cover" />
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-lg bg-black">
            <video src="/images/Sq2.mp4" autoPlay loop muted playsInline className="w-full h-full object-cover" />
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-lg bg-gray-50 border border-gray-200">
            <LightboxImage src="/images/squirll-collage-2.jpg" alt="Squirll onboarding orbital illustration" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </section>
  )
}
