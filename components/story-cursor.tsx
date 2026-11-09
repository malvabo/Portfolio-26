"use client"

import { useEffect, useRef, useState } from "react"

/**
 * Custom cursor for story case studies.
 * - Default: a small square in the accent colour.
 * - Over text: turns into a text caret sized to the line.
 * - Over anything with data-cursor="Label": a tiny square plus that label
 *   (e.g. "View project").
 * Only runs on devices with a real mouse; touch keeps the native cursor.
 */

type Mode = { kind: "dot" } | { kind: "text"; h: number } | { kind: "label"; text: string }

const ACCENT = "#B4532A"

function caretAt(x: number, y: number): number | null {
  type CaretDoc = Document & {
    caretPositionFromPoint?: (x: number, y: number) => { offsetNode: Node; offset: number } | null
    caretRangeFromPoint?: (x: number, y: number) => Range | null
  }
  const d = document as CaretDoc
  let node: Node | null | undefined
  let offset = 0
  if (d.caretPositionFromPoint) {
    const p = d.caretPositionFromPoint(x, y)
    node = p?.offsetNode
    offset = p?.offset ?? 0
  } else if (d.caretRangeFromPoint) {
    const r = d.caretRangeFromPoint(x, y)
    node = r?.startContainer
    offset = r?.startOffset ?? 0
  }
  if (!node || node.nodeType !== Node.TEXT_NODE) return null
  const text = node as Text
  if (!text.data.trim()) return null

  const start = Math.max(0, Math.min(offset, text.length - 1))
  const range = document.createRange()
  range.setStart(text, start)
  range.setEnd(text, Math.min(start + 1, text.length))
  const rect = range.getBoundingClientRect()
  if (!rect.height) return null
  // Only count it as text when the pointer is actually on the line
  if (y < rect.top - 2 || y > rect.bottom + 2 || x < rect.left - 14 || x > rect.right + 14) return null
  return rect.height
}

export function StoryCursor() {
  const [enabled, setEnabled] = useState(false)
  const [visible, setVisible] = useState(false)
  const [mode, setMode] = useState<Mode>({ kind: "dot" })
  const rootRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const mq = window.matchMedia("(hover: hover) and (pointer: fine)")
    const update = () => setEnabled(mq.matches)
    update()
    mq.addEventListener("change", update)
    return () => mq.removeEventListener("change", update)
  }, [])

  useEffect(() => {
    if (!enabled) return
    const html = document.documentElement
    html.classList.add("story-cursor-on")

    let frame = 0
    let last = { x: 0, y: 0, target: null as Element | null }

    const tick = () => {
      frame = 0
      const { x, y, target } = last
      if (rootRef.current) rootRef.current.style.transform = `translate3d(${x}px, ${y}px, 0)`

      const labelled = target?.closest<HTMLElement>("[data-cursor]")
      if (labelled) {
        const text = labelled.dataset.cursor || ""
        setMode((m) => (m.kind === "label" && m.text === text ? m : { kind: "label", text }))
        return
      }
      const h = caretAt(x, y)
      if (h) {
        const caret = Math.round(Math.min(48, Math.max(16, h * 0.85)))
        setMode((m) => (m.kind === "text" && m.h === caret ? m : { kind: "text", h: caret }))
        return
      }
      setMode((m) => (m.kind === "dot" ? m : { kind: "dot" }))
    }

    const onMove = (e: MouseEvent) => {
      last = { x: e.clientX, y: e.clientY, target: e.target as Element }
      setVisible(true)
      if (!frame) frame = requestAnimationFrame(tick)
    }
    const onLeave = (e: MouseEvent) => {
      if (!e.relatedTarget) setVisible(false)
    }
    const onScroll = () => {
      // Content moves under a still pointer, so re-check what is beneath it
      last.target = document.elementFromPoint(last.x, last.y)
      if (!frame) frame = requestAnimationFrame(tick)
    }

    window.addEventListener("mousemove", onMove, { passive: true })
    document.addEventListener("mouseout", onLeave)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => {
      html.classList.remove("story-cursor-on")
      window.removeEventListener("mousemove", onMove)
      document.removeEventListener("mouseout", onLeave)
      window.removeEventListener("scroll", onScroll)
      if (frame) cancelAnimationFrame(frame)
    }
  }, [enabled])

  if (!enabled) return null

  const size =
    mode.kind === "text" ? { w: 3, h: mode.h } : mode.kind === "label" ? { w: 7, h: 7 } : { w: 9, h: 9 }

  return (
    <div
      ref={rootRef}
      aria-hidden
      className="fixed left-0 top-0 z-[9999] pointer-events-none"
      style={{ opacity: visible ? 1 : 0, transition: "opacity .2s ease-out" }}
    >
      <div
        className="flex items-center gap-2.5"
        style={{ transform: `translate(${-size.w / 2}px, ${-size.h / 2}px)` }}
      >
        <span
          className="block shrink-0"
          style={{
            width: size.w,
            height: size.h,
            background: ACCENT,
            transition: mode.kind === "text" ? "none" : "width .12s ease-out, height .12s ease-out",
          }}
        />
        <span
          className="whitespace-nowrap text-[15px] leading-none font-medium bg-white/90 px-2 py-1.5 shadow-[0_1px_3px_rgba(0,0,0,0.08)]"
          style={{
            color: ACCENT,
            opacity: mode.kind === "label" ? 1 : 0,
            transform: mode.kind === "label" ? "translateX(0)" : "translateX(-4px)",
            transition: "opacity .15s ease-out, transform .2s ease-out",
          }}
        >
          {mode.kind === "label" ? mode.text : ""}
        </span>
      </div>
    </div>
  )
}
