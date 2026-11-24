import type { Metadata } from 'next'

const title = 'BodySpec: Scaling bookings by 20% for 500K+ users'
const description =
  'Redesigning the BodySpec platform and mobile app to lift booking conversion and turn one-off scans into repeat visits.'

export const metadata: Metadata = {
  title: `${title} – Mary Borysova`,
  description,
  openGraph: {
    title,
    description,
    images: [{ url: '/images/bodyspec-mobile-location.png', width: 1586, height: 1235, alt: 'BodySpec case study' }],
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: ['/images/bodyspec-mobile-location.png'],
  },
}

export default function BodySpecLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
