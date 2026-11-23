"use client"

import { usePathname } from "next/navigation"
import { PasswordGate } from "./password-gate"

// Speaking is linked from the public AI page (aipm.maryborysova.com), so it stays open.
// The design portfolio, including its case studies, keeps the password. The PM versions
// of the Veeqo and Conduit cases live in app/(public)/cases and have no gate.
const PUBLIC_PATHS = ["/speaking"]

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
