import type { Metadata } from 'next'

// Saved copy of the Conduit case study as of 6 Nov 2026, kept for reference
// while the page is redesigned. Not linked from the site and not indexed.
export const metadata: Metadata = {
  title: 'Conduit (saved version) – Mary Borysova',
  robots: { index: false, follow: false },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
