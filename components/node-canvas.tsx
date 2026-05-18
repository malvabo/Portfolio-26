export function NodeCanvas() {
  return (
    <div className="relative w-full h-full bg-[#0d0d0d] overflow-hidden select-none">
      {/* SVG connecting lines */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        viewBox="0 0 500 280"
        preserveAspectRatio="xMidYMid meet"
      >
        {/* Line from Text node to Prompt node */}
        <path
          d="M 210 90 C 260 90, 260 100, 310 100"
          fill="none"
          stroke="#555"
          strokeWidth="1.5"
          strokeDasharray="4 3"
        />
        {/* Line from ScriptSense node to Prompt node */}
        <path
          d="M 290 185 C 350 185, 370 140, 390 120"
          fill="none"
          stroke="#555"
          strokeWidth="1.5"
          strokeDasharray="4 3"
        />
        {/* Connector dots */}
        <circle cx="210" cy="90" r="4" fill="#555" />
        <circle cx="310" cy="100" r="4" fill="#555" />
        <circle cx="290" cy="185" r="4" fill="#555" />
        <circle cx="390" cy="120" r="4" fill="#555" />
      </svg>

      {/* Text node — top left */}
      <div
        className="absolute rounded-xl overflow-hidden"
        style={{ left: "4%", top: "8%", width: "38%" }}
      >
        <div className="border border-white/20 rounded-xl overflow-hidden bg-[#1a1a1a]">
          {/* Header */}
          <div className="flex items-center justify-between px-3 py-2 border-b border-white/10">
            <div className="flex items-center gap-2">
              <svg className="w-3 h-3 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <span className="text-white/90 text-[11px] font-medium">Text</span>
            </div>
            <div className="flex gap-1.5">
              <button className="text-white/40 hover:text-white/70 transition-colors">
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                </svg>
              </button>
              <button className="text-white/40 hover:text-white/70 transition-colors">
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
          {/* Content */}
          <div className="px-3 pt-2.5 pb-3">
            <p className="text-white/80 text-[10px] leading-relaxed font-medium mb-0.5">Gradients are central to Gemini&apos;s</p>
            <p className="text-white/40 text-[9px]">555 words</p>
          </div>
          {/* Footer */}
          <div className="px-3 pb-2.5">
            <button className="text-white/50 text-[9px] hover:text-white/70 transition-colors">Edit</button>
          </div>
        </div>
      </div>

      {/* Prompt node — top right */}
      <div
        className="absolute rounded-xl overflow-hidden"
        style={{ right: "4%", top: "8%", width: "38%" }}
      >
        <div className="border border-white/10 rounded-xl overflow-hidden bg-[#1e1e1e]">
          {/* Header */}
          <div className="flex items-center justify-between px-3 py-2 border-b border-white/10">
            <div className="flex items-center gap-2">
              <svg className="w-3 h-3 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              <span className="text-white/90 text-[11px] font-medium">Prompt</span>
            </div>
            <button className="text-white/40 hover:text-white/70 transition-colors">
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          {/* Content */}
          <div className="px-3 py-2.5">
            <p className="text-white/70 text-[9.5px] leading-relaxed">
              Position as an industry authority. Highlight forward-thinking trends and bold perspectives.
            </p>
          </div>
          {/* Footer */}
          <div className="px-3 pb-2.5 border-t border-white/10 pt-2">
            <button className="text-white/40 text-[9px] hover:text-white/60 transition-colors flex items-center gap-1">
              <svg className="w-2.5 h-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              Choose a template
            </button>
          </div>
        </div>
      </div>

      {/* From ScriptSense node — bottom center */}
      <div
        className="absolute rounded-xl overflow-hidden"
        style={{ left: "22%", bottom: "6%", width: "38%" }}
      >
        <div className="border border-white/10 rounded-xl overflow-hidden bg-[#1e1e1e]">
          {/* Header */}
          <div className="flex items-center justify-between px-3 py-2 border-b border-white/10">
            <div className="flex items-center gap-2">
              <svg className="w-3 h-3 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <span className="text-white/90 text-[11px] font-medium">From ScriptSense</span>
            </div>
            <div className="flex gap-1.5">
              <button className="text-white/40 hover:text-white/70 transition-colors">
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                </svg>
              </button>
              <button className="text-white/40 hover:text-white/70 transition-colors">
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
          {/* Content */}
          <div className="px-3 pt-2.5 pb-3">
            <p className="text-white/80 text-[10px] leading-relaxed font-medium mb-0.5">AI Writing &amp; Drafting: Tools</p>
            <p className="text-white/40 text-[9px]">110 words</p>
          </div>
          {/* Footer */}
          <div className="px-3 pb-2.5">
            <button className="text-white/50 text-[9px] hover:text-white/70 transition-colors">Edit</button>
          </div>
        </div>
      </div>
    </div>
  )
}
