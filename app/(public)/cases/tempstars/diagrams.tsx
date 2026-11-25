"use client"

import { ExplainerCard, ExplainerStage, ExplainerTitle } from "@/components/explainer-stage"

/* TempStars: the three questions a hygienist asks before taking a first shift.
   Each column is one question, in the order they meet it: what they got before, and what they get now. */

const QUESTIONS = [
  {
    where: "At signup",
    ask: "Will I see shifts that fit me?",
    before: "The same generic list for everyone",
    after: "Matched on must-have skills first",
  },
  {
    where: "On the shift page",
    ask: "What is this clinic like?",
    before: "Leave the app and search on Google",
    after: "Equipment, pay and parking on the page",
  },
  {
    where: "Before accepting",
    ask: "What if the clinic cancels?",
    before: "A policy that protects the clinic",
    after: "A fairer policy for both sides",
  },
]

const BEFORE = "bg-[#F4E6D4] text-[#7A4B12]"
const AFTER = "bg-[#E1E8F5] text-[#28447A]"

function Legend() {
  return (
    <div className="flex items-center gap-4 text-[11px] text-muted-foreground" aria-hidden>
      <span className="inline-flex items-center gap-1.5">
        <span className="w-3 h-3 rounded-sm bg-[#F4E6D4]" /> Why they stalled
      </span>
      <span className="inline-flex items-center gap-1.5">
        <span className="w-3 h-3 rounded-sm bg-[#E1E8F5]" /> What they get now
      </span>
    </div>
  )
}

export function FirstWeek() {
  return (
    <ExplainerStage bg="/images/veeqo-tile-speed.jpg">
      <ExplainerCard className="sm:!p-6">
        <div className="flex flex-wrap items-start justify-between gap-x-6 gap-y-2">
          <ExplainerTitle>Three questions before a first shift</ExplainerTitle>
          <Legend />
        </div>

        <ol className="grid gap-3 md:grid-cols-3 md:gap-0 md:divide-x divide-black/10 border-t border-black/10 pt-4">
          {QUESTIONS.map((q) => (
            <li key={q.ask} className="md:px-4 md:first:pl-0 md:last:pr-0 pb-3 md:pb-0 border-b md:border-b-0 border-black/10 last:border-b-0">
              <p className="text-[10px] font-mono uppercase tracking-wider text-muted-foreground">{q.where}</p>
              <p className="mt-1 text-[14px] font-medium leading-snug text-foreground">{q.ask}</p>
              <div className="mt-3 space-y-1.5 text-[12px] leading-snug">
                <p className={`rounded px-2 py-1.5 ${BEFORE}`}>
                  <span className="sr-only">Before: </span>
                  {q.before}
                </p>
                <p className={`rounded px-2 py-1.5 font-medium ${AFTER}`}>
                  <span className="sr-only">After: </span>
                  {q.after}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </ExplainerCard>
    </ExplainerStage>
  )
}
