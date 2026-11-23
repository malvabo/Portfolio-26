import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'TempStars: Building marketplace liquidity for 25K+ dentists – Mary Borysova',
  description: 'Building trust in a marketplace for dental professionals.',
  openGraph: {
    title: 'TempStars: Building marketplace liquidity for 25K+ dentists',
    description: 'Building trust in a marketplace for dental professionals.',
    images: [{ url: '/images/tempstars-phones-hero.png', width: 1200, height: 630, alt: 'TempStars case study' }],
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TempStars: Building marketplace liquidity for 25K+ dentists',
    description: 'Building trust in a marketplace for dental professionals.',
    images: ['/images/tempstars-phones-hero.png'],
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
