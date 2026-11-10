import type { ReactNode } from "react"

/**
 * WIP bucket: images hidden from the case studies for now.
 * Wrap anything with wip(...) to hide it; set SHOW_WIP to true to show
 * everything in the bucket again. Search the code for "wip(" to find them all.
 *
 * Currently in the bucket:
 * - Veeqo: "Drag and drop, explored and dropped" (vq-doc12)
 * - Veeqo: "A plain document table, explored and dropped" (vq-doc8)
 * - PAA: "The AI drafts only from the locked assessment" (paa-discharge)
 * - Conduit: "Journey mapping and artifacts from the stakeholder workshops" (workshop)
 * - Conduit: "Inbox grouped by shipment, with the documents that need attention flagged" (inbox-by-shipment)
 */
export const SHOW_WIP = false

export function wip(node: ReactNode): ReactNode {
  return SHOW_WIP ? node : null
}
