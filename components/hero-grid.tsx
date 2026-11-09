"use client"

import { useEffect, useRef } from "react"

// "Order from chaos": a field of tiny dashes behind the hero, each at a
// random angle like scattered paperwork. Near the cursor they turn to point
// at it and take a hint of the accent, then drift back to their own angle
// once the cursor moves on. Static on touch devices and for reduced motion.

const SPACING = 20
const RADIUS = 150 // how far the cursor reaches, px
const REST = [176, 172, 166] as const // resting grey
const ACCENT = [180, 83, 42] as const // same accent as the cursor, #B4532A
const TEXT_DIM = 0.75 // dashes behind the statement react a little more softly

type Dash = { x: number; y: number; a0: number; a: number; e: number; dim: boolean }

// Shortest turn between two line angles (a dash has no head, so π-periodic)
function turn(a: number, b: number) {
  let d = (b - a) % Math.PI
  if (d > Math.PI / 2) d -= Math.PI
  if (d < -Math.PI / 2) d += Math.PI
  return d
}

function drawDash(ctx: CanvasRenderingContext2D, d: Dash) {
  const e = d.e * (d.dim ? TEXT_DIM : 1)
  const mix = (a: number, b: number) => Math.round(a + (b - a) * e * 0.85)
  ctx.strokeStyle = `rgba(${mix(REST[0], ACCENT[0])},${mix(REST[1], ACCENT[1])},${mix(REST[2], ACCENT[2])},${0.4 + e * 0.45})`
  const half = (3 + e * 2.5) / 2
  const ca = Math.cos(d.a) * half
  const sa = Math.sin(d.a) * half
  ctx.beginPath()
  ctx.moveTo(d.x - ca, d.y - sa)
  ctx.lineTo(d.x + ca, d.y + sa)
  ctx.stroke()
}

export function HeroGrid() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches
    const interactive = finePointer && !reduceMotion

    let dashes: Dash[] = []
    let width = 0
    let height = 0
    let frame = 0
    let running = false
    let pointer: { x: number; y: number } | null = null
    let lastClient: { x: number; y: number } | null = null

    const draw = () => {
      ctx.clearRect(0, 0, width, height)
      ctx.lineWidth = 1
      ctx.lineCap = "butt"
      for (const d of dashes) drawDash(ctx, d)
    }

    const build = () => {
      const rect = canvas.getBoundingClientRect()
      width = rect.width
      height = rect.height
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      canvas.width = Math.round(width * dpr)
      canvas.height = Math.round(height * dpr)
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)

      const pad = 10
      // Soften only the dashes directly behind each line of text, not the whole
      // (wider) text block, so the space right of the copy reacts fully
      const dimRects: { l: number; t: number; r: number; b: number }[] = []
      for (const el of Array.from(document.querySelectorAll<HTMLElement>("[data-grid-quiet]"))) {
        const walker = document.createTreeWalker(el, NodeFilter.SHOW_TEXT)
        for (let n = walker.nextNode(); n; n = walker.nextNode()) {
          if (!n.textContent?.trim()) continue
          const range = document.createRange()
          range.selectNodeContents(n)
          for (const r of Array.from(range.getClientRects())) {
            if (r.width < 1 || r.height < 1) continue
            dimRects.push({ l: r.left - rect.left - pad, t: r.top - rect.top - pad, r: r.right - rect.left + pad, b: r.bottom - rect.top + pad })
          }
        }
      }
      const isDim = (x: number, y: number) => dimRects.some((q) => x > q.l && x < q.r && y > q.t && y < q.b)

      // Keep each dash's resting angle across resizes so the field doesn't reshuffle
      const prev = new Map(dashes.map((d) => [`${d.x},${d.y}`, d]))
      dashes = []
      const offX = (width % SPACING) / 2 + SPACING / 2
      const offY = (height % SPACING) / 2 + SPACING / 2
      for (let y = offY; y < height; y += SPACING) {
        for (let x = offX; x < width; x += SPACING) {
          const old = prev.get(`${x},${y}`)
          const a0 = old?.a0 ?? Math.random() * Math.PI
          dashes.push({ x, y, a0, a: old?.a ?? a0, e: old?.e ?? 0, dim: isDim(x, y) })
        }
      }
      draw()
    }

    const tick = () => {
      let active = false
      for (const d of dashes) {
        let target = d.a0
        let pull = 0
        if (pointer) {
          const dx = pointer.x - d.x
          const dy = pointer.y - d.y
          const dist = Math.hypot(dx, dy)
          if (dist < RADIUS) {
            pull = 1 - dist / RADIUS
            target = Math.atan2(dy, dx)
          }
        }
        d.e += (pull - d.e) * 0.1
        const goal = d.e > 0.02 ? target : d.a0
        const step = turn(d.a, goal) * (0.06 + d.e * 0.18)
        d.a += step
        if (Math.abs(step) > 0.0005 || Math.abs(pull - d.e) > 0.003) active = true
      }
      draw()
      if (active) frame = requestAnimationFrame(tick)
      else running = false
    }

    const start = () => {
      if (!running) {
        running = true
        frame = requestAnimationFrame(tick)
      }
    }

    const locate = (clientX: number, clientY: number) => {
      const rect = canvas.getBoundingClientRect()
      const x = clientX - rect.left
      const y = clientY - rect.top
      const inside = x >= 0 && y >= 0 && x <= rect.width && y <= rect.height
      if (!inside && !pointer) return
      pointer = inside ? { x, y } : null
      start()
    }
    const onMove = (e: PointerEvent) => {
      lastClient = { x: e.clientX, y: e.clientY }
      locate(e.clientX, e.clientY)
    }
    const onScroll = () => {
      if (lastClient) locate(lastClient.x, lastClient.y)
    }
    const onLeave = () => {
      lastClient = null
      pointer = null
      start()
    }

    build()
    const ro = new ResizeObserver(build)
    ro.observe(canvas)
    // Line breaks settle once fonts load and the text fades in; measure again then
    document.fonts?.ready.then(build)
    const settle = window.setTimeout(build, 900)
    if (interactive) {
      window.addEventListener("pointermove", onMove, { passive: true })
      window.addEventListener("scroll", onScroll, { passive: true })
      document.documentElement.addEventListener("pointerleave", onLeave)
    }

    return () => {
      cancelAnimationFrame(frame)
      window.clearTimeout(settle)
      ro.disconnect()
      window.removeEventListener("pointermove", onMove)
      window.removeEventListener("scroll", onScroll)
      document.documentElement.removeEventListener("pointerleave", onLeave)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{
        maskImage: "linear-gradient(to bottom, transparent 0, #000 12%, #000 85%, transparent 100%)",
        WebkitMaskImage: "linear-gradient(to bottom, transparent 0, #000 12%, #000 85%, transparent 100%)",
      }}
    />
  )
}
