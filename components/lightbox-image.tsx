"use client"

import { useState, useEffect } from "react"
import { createPortal } from "react-dom"
import { X, Maximize2 } from "lucide-react"

interface LightboxImageProps {
  src: string
  alt: string
  className?: string
  // Accept (and ignore) Next.js Image-specific props so this is a drop-in replacement
  width?: number | string
  height?: number | string
  unoptimized?: boolean
  sizes?: string
  priority?: boolean
  fill?: boolean
  [key: string]: unknown
}

export function LightboxImage({ src, alt, className, width: _w, height: _h, unoptimized: _u, sizes: _s, priority: _p, fill: _f, ...rest }: LightboxImageProps) {
  const [open, setOpen] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!open) return
    document.body.style.overflow = "hidden"
    const handleKey = (e: KeyboardEvent) => { if (e.key === "Escape") setOpen(false) }
    window.addEventListener("keydown", handleKey)
    return () => {
      document.body.style.overflow = ""
      window.removeEventListener("keydown", handleKey)
    }
  }, [open])

  return (
    <>
      <div className="relative group cursor-zoom-in w-full h-full" onClick={() => setOpen(true)}>
        <img
          src={src}
          alt={alt}
          className={className ?? ""}
          {...rest}
        />
        <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
          <div className="flex items-center gap-1.5 bg-black/50 backdrop-blur-sm text-white/90 rounded-full px-2.5 py-1.5 text-[11px] font-medium tracking-wide">
            <Maximize2 className="w-3 h-3" />
            Expand
          </div>
        </div>
      </div>
      {open && mounted && createPortal(
        <div
          className="fixed inset-0 z-50 bg-black/85 flex items-center justify-center p-6"
          onClick={() => setOpen(false)}
        >
          <button
            className="absolute top-5 right-5 text-white/70 hover:text-white transition-colors bg-black/30 rounded-full p-2"
            onClick={() => setOpen(false)}
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
          <img
            src={src}
            alt={alt}
            className="max-w-[92vw] max-h-[92vh] object-contain rounded-lg shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>,
        document.body
      )}
    </>
  )
}
