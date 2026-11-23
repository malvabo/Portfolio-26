import type { Metadata } from 'next'

// Saved copy of the Squirll case study as of 6 Nov 2026, kept for reference
// now that the story layout is the main page. Not linked and not indexed.
export const metadata: Metadata = {
  title: 'Squirll (saved version) – Mary Borysova',
  robots: { index: false, follow: false },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
