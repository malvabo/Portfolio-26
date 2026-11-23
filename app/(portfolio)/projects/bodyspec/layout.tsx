import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'BodySpec: Driving 20% more bookings for 500K+ users – Mary Borysova',
  description: 'How we transformed complex body composition data into an intuitive consumer experience.',
  openGraph: {
    title: 'BodySpec: Driving 20% more bookings for 500K+ users',
    description: 'How we transformed complex body composition data into an intuitive consumer experience.',
    images: [{ url: '/images/bodyspec-location-booking.webp', width: 1200, height: 630, alt: 'BodySpec case study' }],
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BodySpec: Driving 20% more bookings for 500K+ users',
    description: 'How we transformed complex body composition data into an intuitive consumer experience.',
    images: ['/images/bodyspec-location-booking.webp'],
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
