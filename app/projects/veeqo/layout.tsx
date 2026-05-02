import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Amazon: Redesigning a document system for 50,000+ sellers – Mary Borysova',
  description: "Migrating Veeqo's document infrastructure off a third-party dependency, across two seller segments, an unstable API, and a scope that kept growing.",
  openGraph: {
    title: 'Amazon: Redesigning a document system for 50,000+ sellers',
    description: "Migrating Veeqo's document infrastructure off a third-party dependency, across two seller segments, an unstable API, and a scope that kept growing.",
    images: [{ url: '/images/vq_cover.png', width: 1200, height: 630, alt: 'Veeqo case study' }],
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Amazon: Redesigning a document system for 50,000+ sellers',
    description: "Migrating Veeqo's document infrastructure off a third-party dependency, across two seller segments, an unstable API, and a scope that kept growing.",
    images: ['/images/vq_cover.png'],
  },
}

export default function VeeqoLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
