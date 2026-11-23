"use client"

import { usePathname } from "next/navigation"
import { PasswordGate } from "./password-gate"

// Pages linked from the public AI page (aipm.maryborysova.com) stay open.
// The rest of the design portfolio keeps the password.
const PUBLIC_PATHS = ["/projects/veeqo", "/projects/conduit", "/speaking"]

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
