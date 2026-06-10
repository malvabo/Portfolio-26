"use client"

import { useEffect, useRef } from "react"

interface DotConfig {
  radius: number
  size: number
  speed: number
  phase: number
  opacity: number
}

const DOT_CONFIGS: DotConfig[] = [
  { radius: 5,   size: 2.0, speed: 1.1,  phase: 0.0, opacity: 0.95 },
  { radius: 4,   size: 1.5, speed: 1.7,  phase: 0.4, opacity: 0.70 },
  { radius: 6.5, size: 1.2, speed: 0.85, phase: 0.9, opacity: 0.55 },
  { radius: 3.5, size: 1.8, speed: 2.2,  phase: 1.4, opacity: 0.80 },
  { radius: 6,   size: 1.2, speed: 1.45, phase: 1.9, opacity: 0.60 },
  { radius: 4.8, size: 1.5, speed: 0.95, phase: 2.5, opacity: 0.75 },
]

export function OrbitDots({ size = 16 }: { size?: number }) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const dpr = window.devicePixelRatio || 1
    canvas.width = size * dpr
    canvas.height = size * dpr
    ctx.scale(dpr, dpr)

    const cx = size / 2
    const cy = size / 2
    let raf: number

    const draw = () => {
      const t = performance.now() / 1000
      ctx.clearRect(0, 0, size, size)

      for (const cfg of DOT_CONFIGS) {
        const angle = t * cfg.speed + cfg.phase
        const x = cx + cfg.radius * Math.cos(angle)
        const y = cy + cfg.radius * Math.sin(angle)
        const pulse = (Math.sin(t * cfg.speed * 2.3 + cfg.phase) + 1) / 2
        const alpha = cfg.opacity * (0.5 + 0.5 * pulse)
        const r = (cfg.size * (0.75 + 0.25 * pulse)) / 2

        ctx.beginPath()
        ctx.arc(x, y, r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(30, 58, 95, ${alpha})`
        ctx.fill()
      }

      raf = requestAnimationFrame(draw)
    }

    raf = requestAnimationFrame(draw)
    return () => cancelAnimationFrame(raf)
  }, [size])

  return (
    <canvas
      ref={canvasRef}
      width={size}
      height={size}
      style={{ width: size, height: size }}
      aria-hidden
    />
  )
}
