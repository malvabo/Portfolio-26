import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Squirll: Turning receipts into insights with AI – Mary Borysova',
  description: 'A 0-to-1 AI finance platform. One designer, two founders, a mobile app in three months.',
  openGraph: {
    title: 'Squirll: Turning receipts into insights with AI',
    description: 'A 0-to-1 AI finance platform. One designer, two founders, a mobile app in three months.',
    images: [{ url: '/images/squirll-collage-1.jpg', width: 1200, height: 630, alt: 'Squirll case study' }],
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Squirll: Turning receipts into insights with AI',
    description: 'A 0-to-1 AI finance platform. One designer, two founders, a mobile app in three months.',
    images: ['/images/squirll-collage-1.jpg'],
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
