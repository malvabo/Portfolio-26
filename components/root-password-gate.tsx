"use client"

import { PasswordGate } from "./password-gate"

export function RootPasswordGate({ children }: { children: React.ReactNode }) {
  return (
    <PasswordGate
      password="Mary2026"
      showBackLink={false}
      storageKey="portfolio-unlocked"
      title="This portfolio is password protected."
    >
      {children}
    </PasswordGate>
  )
}
