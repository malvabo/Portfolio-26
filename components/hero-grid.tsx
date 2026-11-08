"use client"

import { useEffect, useRef } from "react"

// A field of small grey squares behind the hero. The squares around the
// cursor grow and take on the cursor's accent colour; they stay lit while the cursor
// rests and fade back once it moves away or leaves the hero.
// Static on touch devices and for reduced-motion users.

const SPACING = 24
const RADIUS = 140 // how far the cursor reaches, px
const EASE_IN = 0.18 // how quickly squares light up (per frame)
const EASE_OUT = 0.06 // how quickly they fade back (per frame)
const REST = [176, 172, 166] as const // resting grey
const INK = [180, 83, 42] as const // the story cursor's accent square, #B4532A
const TEXT_DIM = 0.75 // behind the statement squares light up at reduced strength

type Cell = { x: number; y: number; energy: number; target: number; dim: boolean; jitter: number }

function drawCell(ctx: CanvasRenderingContext2D, c: Cell) {
  const e = Math.min(1, c.energy) * (c.dim ? TEXT_DIM : 1)
  const mix = (a: number, z: number) => Math.round(a + (z - a) * e)
  ctx.fillStyle = `rgba(${mix(REST[0], INK[0])},${mix(REST[1], INK[1])},${mix(REST[2], INK[2])},${0.4 + 0.5 * e})`
  // 1.5px at rest, up to ~3.5px fully lit; jitter keeps the edge of the patch organic.
  const size = 1.5 + e * (1.6 + c.jitter * 0.6)
  const half = size / 2
  // Sharp squares, like the cursor.
  ctx.fillRect(c.x - half, c.y - half, size, size)
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

    let cells: Cell[] = []
    let width = 0
    let height = 0
    let frame = 0
    let running = false
    let pointer: { x: number; y: number } | null = null

    const build = () => {
      const rect = canvas.getBoundingClientRect()
      width = rect.width
      height = rect.height
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      canvas.width = Math.round(width * dpr)
      canvas.height = Math.round(height * dpr)
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)

      // Squares behind the statement (data-grid-quiet) light up more softly.
      const pad = 10
      const dimRects = Array.from(document.querySelectorAll<HTMLElement>("[data-grid-quiet]")).map((el) => {
        const r = el.getBoundingClientRect()
        return { l: r.left - rect.left - pad, t: r.top - rect.top - pad, r: r.right - rect.left + pad, b: r.bottom - rect.top + pad }
      })
      const isDim = (x: number, y: number) => dimRects.some((q) => x > q.l && x < q.r && y > q.t && y < q.b)

      const prev = new Map(cells.map((c) => [`${c.x},${c.y}`, c.energy]))
      cells = []
      const offX = (width % SPACING) / 2 + SPACING / 2
      const offY = (height % SPACING) / 2 + SPACING / 2
      for (let y = offY; y < height; y += SPACING) {
        for (let x = offX; x < width; x += SPACING) {
          cells.push({ x, y, energy: prev.get(`${x},${y}`) ?? 0, target: 0, dim: isDim(x, y), jitter: Math.random() })
        }
      }
      draw()
    }

    const draw = () => {
      ctx.clearRect(0, 0, width, height)
      for (const c of cells) drawCell(ctx, c)
    }

    const tick = () => {
      let active = false
      for (const c of cells) {
        if (pointer) {
          const d = Math.hypot(c.x - pointer.x, c.y - pointer.y)
          c.target = d < RADIUS ? (1 - d / RADIUS) ** 1.6 : 0
        } else c.target = 0
        const rate = c.target > c.energy ? EASE_IN : EASE_OUT
        c.energy += (c.target - c.energy) * rate
        if (Math.abs(c.target - c.energy) > 0.003) active = true
        else c.energy = c.target
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

    let lastClient: { x: number; y: number } | null = null
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
    // Scrolling moves the hero under a still cursor, so re-aim the patch.
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
    if (interactive) {
      window.addEventListener("pointermove", onMove, { passive: true })
      window.addEventListener("scroll", onScroll, { passive: true })
      document.documentElement.addEventListener("pointerleave", onLeave)
    }

    return () => {
      cancelAnimationFrame(frame)
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
