"use client"

import type { ReactNode } from "react"

/* Shared pieces for case explainers: white cards on a darkened photo stage (same look as the Veeqo diagrams) */

export const ACCENT = "#B4532A"

/** Photo backdrop with a dark wash; content sits on top */
export function ExplainerStage({ bg, children, className = "" }: { bg: string; children: ReactNode; className?: string }) {
  return (
    <div className="relative rounded-lg overflow-hidden">
      <img src={bg} alt="" aria-hidden className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-black/35" aria-hidden />
      <div className={`relative p-4 sm:p-6 md:p-8 ${className}`}>{children}</div>
    </div>
  )
}

export function ExplainerCard({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <div className={`bg-white rounded-md border border-black/10 shadow-[0_8px_24px_rgba(0,0,0,0.18)] p-4 sm:p-5 ${className}`}>
      {children}
    </div>
  )
}

/** Small square-cornered label: dark by default, accent for the new side */
export function ExplainerTag({ children, accent = false }: { children: ReactNode; accent?: boolean }) {
  return (
    <span
      className="inline-block text-white font-mono text-[10px] uppercase tracking-wider px-1.5 py-0.5 leading-none"
      style={{ background: accent ? ACCENT : "#3D3D3D" }}
    >
      {children}
    </span>
  )
}

export function ExplainerTitle({ children }: { children: ReactNode }) {
  return <p className="font-serif text-[1.125rem] tracking-[-0.01em] mt-1.5 mb-4 leading-snug">{children}</p>
}

/** A rotated paper note for pain points */
export function Sticky({ children, color, tilt = 0, className = "" }: { children: ReactNode; color: string; tilt?: number; className?: string }) {
  return (
    <span
      className={`inline-block text-[12px] font-medium text-black/80 px-2.5 py-1.5 leading-snug shadow-[0_2px_6px_rgba(0,0,0,0.12)] ${className}`}
      style={{ background: color, transform: `rotate(${tilt}deg)` }}
    >
      {children}
    </span>
  )
}

export function Chevron({ className = "" }: { className?: string }) {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden className={`shrink-0 ${className}`}>
      <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}
