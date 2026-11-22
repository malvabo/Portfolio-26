"use client"

import { usePathname } from "next/navigation"
import { PasswordGate } from "./password-gate"

// Pages that must stay public (shared as a CV link and in founder outreach).
const PUBLIC_PATHS = ["/ai"]

export function RootPasswordGate({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  if (pathname && PUBLIC_PATHS.some((p) => pathname === p || pathname.startsWith(`${p}/`))) {
    return <>{children}</>
  }

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
