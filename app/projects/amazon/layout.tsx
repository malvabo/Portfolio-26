import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Building the future of shipping at Amazon – Mary Borysova',
  description: 'NDA – full case study available during the interview process.',
  openGraph: {
    title: 'Building the future of shipping at Amazon',
    description: 'NDA – full case study available during the interview process.',
    images: [{ url: '/images/amazon-sales-dashboard.jpg', width: 1200, height: 630, alt: 'Amazon case study' }],
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Building the future of shipping at Amazon',
    description: 'NDA – full case study available during the interview process.',
    images: ['/images/amazon-sales-dashboard.jpg'],
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
