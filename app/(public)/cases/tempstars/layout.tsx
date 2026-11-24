import type { Metadata } from 'next'

const title = 'TempStars: Fixing a 65% onboarding drop-off'
const description =
  "Fixing a 65% drop-off between signup and first booking on Canada's largest dental staffing marketplace."

export const metadata: Metadata = {
  title: `${title} – Mary Borysova`,
  description,
  openGraph: {
    title,
    description,
    images: [{ url: '/images/tempstars-phones-hero.png', width: 2048, height: 1152, alt: 'TempStars case study' }],
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: ['/images/tempstars-phones-hero.png'],
  },
}

export default function TempStarsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
