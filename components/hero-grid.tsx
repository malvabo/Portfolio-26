"use client"

import { useEffect, useRef } from "react"

// A field of small grey marks behind the hero. Moving the cursor wakes the
// marks around it: they grow and take on colour, then settle back to grey.
// Static on touch devices and for reduced-motion users.

const SPACING = 34
const RADIUS = 170 // how far the cursor reaches, px
const DECAY = 0.94 // per frame; lower settles faster
const BASE_GREY = [168, 162, 155] as const
const PALETTE: [number, number, number][] = [
  [139, 127, 214], // lavender
  [95, 168, 160], // teal
  [214, 138, 107], // terracotta
  [199, 162, 74], // ochre
  [107, 143, 194], // blue
  [197, 122, 154], // rose
  [111, 175, 123], // green
]

type Shape = "dot" | "star4" | "star6" | "pill" | "circle"
const SHAPES: Shape[] = ["dot", "dot", "star4", "star6", "pill", "circle"]

type Cell = {
  x: number
  y: number
  shape: Shape
  color: [number, number, number]
  angle: number
  energy: number
  quiet: boolean // behind text: stays a faint dot so the copy stays readable
}

function star(ctx: CanvasRenderingContext2D, points: number, outer: number, inner: number) {
  ctx.beginPath()
  for (let i = 0; i < points * 2; i++) {
    const r = i % 2 === 0 ? outer : inner
    const a = (Math.PI * i) / points
    ctx.lineTo(Math.cos(a) * r, Math.sin(a) * r)
  }
  ctx.closePath()
  ctx.fill()
}

function drawCell(ctx: CanvasRenderingContext2D, c: Cell) {
  const e = Math.min(1, c.energy)
  const [gr, gg, gb] = BASE_GREY
  const [r, g, b] = c.color
  const mix = (a: number, z: number) => Math.round(a + (z - a) * e)
  const alpha = c.quiet ? 0.25 : 0.55 + 0.4 * e
  ctx.fillStyle = `rgba(${mix(gr, r)},${mix(gg, g)},${mix(gb, b)},${alpha})`

  ctx.save()
  ctx.translate(c.x, c.y)
  ctx.rotate(c.angle)
  const s = 1.3 + e * 9 // resting size → woken size

  if (e < 0.05 || c.shape === "dot") {
    ctx.beginPath()
    ctx.arc(0, 0, c.shape === "dot" ? s * 0.75 : 1.2, 0, Math.PI * 2)
    ctx.fill()
  } else if (c.shape === "circle") {
    ctx.beginPath()
    ctx.arc(0, 0, s * 0.8, 0, Math.PI * 2)
    ctx.fill()
  } else if (c.shape === "star4") {
    star(ctx, 4, s * 1.2, s * 0.32)
  } else if (c.shape === "star6") {
    star(ctx, 6, s * 1.1, s * 0.4)
  } else {
    const w = s * 1.9
    const h = s * 0.75
    ctx.beginPath()
    ctx.roundRect(-w / 2, -h / 2, w, h, h / 2)
    ctx.fill()
  }
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

      // Areas marked data-grid-quiet (the statement) keep their marks still.
      const pad = 12
      const quietRects = Array.from(document.querySelectorAll<HTMLElement>("[data-grid-quiet]")).map((el) => {
        const r = el.getBoundingClientRect()
        return {
          l: r.left - rect.left - pad,
          t: r.top - rect.top - pad,
          r: r.right - rect.left + pad,
          b: r.bottom - rect.top + pad,
        }
      })
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
            color: PALETTE[Math.floor(Math.random() * PALETTE.length)],
            angle: Math.random() * Math.PI,
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
    if (interactive) window.addEventListener("pointermove", onMove, { passive: true })

    return () => {
      cancelAnimationFrame(frame)
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
