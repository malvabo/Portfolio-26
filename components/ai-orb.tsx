// Small inline circle with atom-like orbits, shown after the word "AI" in the homepage hero.
export function AiOrb() {
  const orbits = [0, 60, 120]
  return (
    <span
      aria-hidden
      className="ai-orb relative inline-block align-[-0.12em] ml-[0.18em] mr-[0.06em] h-[0.92em] w-[0.92em] rounded-full border border-[#B4532A]/35 bg-[#B4532A]/[0.06] overflow-hidden"
    >
      <style>{`
        @keyframes aiOrbSpin { to { transform: rotate(360deg); } }
        @keyframes aiOrbPulse { 0%,100% { opacity: .5; } 50% { opacity: 1; } }
        .ai-orb .orbit { transform-origin: 16px 16px; animation: aiOrbSpin 6s linear infinite; }
        .ai-orb .orbit-2 { animation-duration: 8.5s; animation-direction: reverse; }
        .ai-orb .orbit-3 { animation-duration: 11s; }
        .ai-orb .core { animation: aiOrbPulse 2.4s ease-in-out infinite; }
        @media (prefers-reduced-motion: reduce) {
          .ai-orb .orbit, .ai-orb .core { animation: none; }
        }
      `}</style>
      <svg viewBox="0 0 32 32" className="absolute inset-0 h-full w-full">
        {orbits.map((deg, i) => (
          <g key={deg} transform={`rotate(${deg} 16 16)`}>
            <g className={`orbit orbit-${i + 1}`}>
              <ellipse cx="16" cy="16" rx="12" ry="4.6" fill="none" stroke="#B4532A" strokeOpacity="0.4" strokeWidth="0.9" />
              <circle cx="28" cy="16" r="1.5" fill="#B4532A" />
            </g>
          </g>
        ))}
        <circle className="core" cx="16" cy="16" r="1.8" fill="#B4532A" />
      </svg>
    </span>
  )
}
