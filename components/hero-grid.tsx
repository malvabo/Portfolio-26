"use client"

import { useEffect, useRef } from "react"

// A field of small grey dots behind the hero. Moving the cursor wakes the
// dots around it: they unfold into fine marks, all one colour (plus signs, crosses,
// rings, frames, ticks, corners), then settle back to grey dots.
// Static on touch devices and for reduced-motion users.

const SPACING = 34
const RADIUS = 170 // how far the cursor reaches, px
const DECAY = 0.94 // per frame; lower settles faster
const BASE_GREY = [168, 162, 155] as const
const MARK = [120, 114, 108] as const // every mark wakes to the same warm grey

// A precise, design-tool vocabulary: registration marks, rings, frames and
// ticks, all drawn as fine strokes and kept square to the grid.
type Shape = "dot" | "plus" | "cross" | "ring" | "square" | "tick" | "corner"
const SHAPES: Shape[] = ["dot", "dot", "plus", "plus", "cross", "ring", "square", "tick", "corner"]

type Cell = {
  x: number
  y: number
  shape: Shape
  color: [number, number, number]
  angle: number // quarter turns only, so everything stays aligned
  energy: number
  quiet: boolean // behind text: stays a faint dot so the copy stays readable
}

function drawCell(ctx: CanvasRenderingContext2D, c: Cell) {
  const e = Math.min(1, c.energy)
  const [gr, gg, gb] = BASE_GREY
  const [r, g, b] = c.color
  const mix = (a: number, z: number) => Math.round(a + (z - a) * e)
  const alpha = c.quiet ? 0.25 : 0.55 + 0.4 * e
  const colour = `rgba(${mix(gr, r)},${mix(gg, g)},${mix(gb, b)},${alpha})`
  ctx.fillStyle = colour
  ctx.strokeStyle = colour

  ctx.save()
  ctx.translate(c.x, c.y)

  // At rest every mark is a small dot; it unfolds into its symbol as it wakes.
  if (e < 0.05 || c.shape === "dot") {
    ctx.beginPath()
    ctx.arc(0, 0, c.shape === "dot" ? 1.1 + e * 1.6 : 1.1, 0, Math.PI * 2)
    ctx.fill()
    ctx.restore()
    return
  }

  ctx.rotate(c.angle)
  const s = 2 + e * 6 // half-size of the symbol
  ctx.lineWidth = 1.4
  ctx.lineCap = "square"
  ctx.lineJoin = "miter"
  ctx.beginPath()
  switch (c.shape) {
    case "plus":
      ctx.moveTo(-s, 0)
      ctx.lineTo(s, 0)
      ctx.moveTo(0, -s)
      ctx.lineTo(0, s)
      break
    case "cross": {
      const k = s * 0.75
      ctx.moveTo(-k, -k)
      ctx.lineTo(k, k)
      ctx.moveTo(k, -k)
      ctx.lineTo(-k, k)
      break
    }
    case "ring":
      ctx.arc(0, 0, s * 0.8, 0, Math.PI * 2)
      break
    case "square": {
      const k = s * 0.7
      ctx.rect(-k, -k, k * 2, k * 2)
      break
    }
    case "tick":
      ctx.moveTo(-s, 0)
      ctx.lineTo(s, 0)
      break
    case "corner": {
      const k = s * 0.8
      ctx.moveTo(-k, k)
      ctx.lineTo(-k, -k)
      ctx.lineTo(k, -k)
      break
    }
  }
  ctx.stroke()
  ctx.restore()
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
    let pointer: { x: number; y: number; px: number; py: number } | null = null

    const build = () => {
      const rect = canvas.getBoundingClientRect()
      width = rect.width
      height = rect.height
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      canvas.width = Math.round(width * dpr)
      canvas.height = Math.round(height * dpr)
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)

      // Marks behind the statement stay still so the copy reads cleanly. Measure each
      // rendered line of text, not the whole wrapper: the wrapper is wider than the
      // lines, and using it left a dead strip to the right of the text.
      const pad = 10
      const quietRects: { l: number; t: number; r: number; b: number }[] = []
      for (const el of Array.from(document.querySelectorAll<HTMLElement>("[data-grid-quiet]"))) {
        const walker = document.createTreeWalker(el, NodeFilter.SHOW_TEXT)
        const lines: DOMRect[] = []
        for (let n = walker.nextNode(); n; n = walker.nextNode()) {
          if (!n.textContent?.trim()) continue
          const range = document.createRange()
          range.selectNodeContents(n)
          lines.push(...Array.from(range.getClientRects()))
        }
        for (const r of lines) {
          if (r.width < 1 || r.height < 1) continue
          quietRects.push({
            l: r.left - rect.left - pad,
            t: r.top - rect.top - pad,
            r: r.right - rect.left + pad,
            b: r.bottom - rect.top + pad,
          })
        }
      }
      const isQuiet = (x: number, y: number) => quietRects.some((q) => x > q.l && x < q.r && y > q.t && y < q.b)

      cells = []
      const offX = (width % SPACING) / 2 + SPACING / 2
      const offY = (height % SPACING) / 2 + SPACING / 2
      for (let y = offY; y < height; y += SPACING) {
        for (let x = offX; x < width; x += SPACING) {
          cells.push({
            x,
            y,
            shape: SHAPES[Math.floor(Math.random() * SHAPES.length)],
            color: [MARK[0], MARK[1], MARK[2]],
            angle: (Math.floor(Math.random() * 4) * Math.PI) / 2,
            energy: 0,
            quiet: isQuiet(x, y),
          })
        }
      }
      draw()
    }

    const draw = () => {
      ctx.clearRect(0, 0, width, height)
      for (const c of cells) drawCell(ctx, c)
    }

    const tick = () => {
      let awake = false
      if (pointer) {
        // Faster movement wakes the field more, like stirring water.
        const speed = Math.min(1, Math.hypot(pointer.x - pointer.px, pointer.y - pointer.py) / 25)
        pointer.px = pointer.x
        pointer.py = pointer.y
        if (speed > 0.01) {
          for (const c of cells) {
            const d = Math.hypot(c.x - pointer.x, c.y - pointer.y)
            if (d < RADIUS && !c.quiet) {
              const push = (1 - d / RADIUS) ** 2 * speed * 0.8
              c.energy = Math.min(1.2, c.energy + push)
            }
          }
        }
      }
      for (const c of cells) {
        if (c.energy > 0.002) {
          c.energy *= DECAY
          awake = true
        } else c.energy = 0
      }
      draw()
      if (awake) frame = requestAnimationFrame(tick)
      else running = false
    }

    const start = () => {
      if (!running) {
        running = true
        frame = requestAnimationFrame(tick)
      }
    }

    const onMove = (e: PointerEvent) => {
      const rect = canvas.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top
      if (x < 0 || y < 0 || x > rect.width || y > rect.height) {
        pointer = null
        return
      }
      pointer = pointer ? { ...pointer, x, y } : { x, y, px: x, py: y }
      start()
    }

    build()
    const ro = new ResizeObserver(build)
    ro.observe(canvas)
    // Line breaks settle once the fonts and the text's fade-in have finished; measure again then
    document.fonts?.ready.then(build)
    const settle = window.setTimeout(build, 900)
    if (interactive) window.addEventListener("pointermove", onMove, { passive: true })

    return () => {
      cancelAnimationFrame(frame)
      window.clearTimeout(settle)
      ro.disconnect()
      window.removeEventListener("pointermove", onMove)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{
        // Calmer behind the statement, fading out at the top and bottom edges.
        maskImage:
          "linear-gradient(to bottom, transparent 0, #000 12%, #000 85%, transparent 100%)",
        WebkitMaskImage:
          "linear-gradient(to bottom, transparent 0, #000 12%, #000 85%, transparent 100%)",
      }}
    />
  )
}
