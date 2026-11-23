import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Luminara: Designing one experience for clients and clinicians – Mary Borysova',
  description: 'Design of luxury mental health service experience for both clients and providers.',
  openGraph: {
    title: 'Luminara: Designing one experience for clients and clinicians',
    description: 'Design of luxury mental health service experience for both clients and providers.',
    images: [{ url: '/images/luminara-1.png', width: 1200, height: 630, alt: 'Luminara case study' }],
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Luminara: Designing one experience for clients and clinicians',
    description: 'Design of luxury mental health service experience for both clients and providers.',
    images: ['/images/luminara-1.png'],
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
