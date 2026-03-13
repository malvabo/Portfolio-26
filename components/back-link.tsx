"use client"

import { useRouter } from "next/navigation"
import { ArrowLeft } from "lucide-react"

export function BackLinkSidebar() {
  const router = useRouter()
  return (
    <button
      onClick={() => router.back()}
      className="block text-xs font-mono tracking-wider uppercase text-muted-foreground hover:text-foreground transition-colors mb-10 leading-none cursor-pointer"
    >
      <span className="inline-flex items-baseline gap-2">
        <ArrowLeft className="w-3 h-3 shrink-0" />
        All projects
      </span>
    </button>
  )
}

export function BackLinkFooter() {
  const router = useRouter()
  return (
    <button
      onClick={() => router.back()}
      className="inline-flex items-center gap-2 text-[17px] hover:opacity-70 transition-opacity cursor-pointer"
    >
      <ArrowLeft className="w-4 h-4" />
      Back to all projects
    </button>
  )
}
