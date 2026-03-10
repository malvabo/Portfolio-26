import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Amazon — Document System Migration (Veeqo)',
  description:
    'Replacing a critical document system for 50,000+ Amazon sellers. A platform migration across two seller segments, an unstable API, and a scope that kept growing.',
}

export default function VeeqoLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
