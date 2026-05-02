import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Amazon: Introducing AI insights for sellers – Mary Borysova',
  description: 'Starting from a blank slate – no problem statement, no defined scope – and exploring how AI could surface actionable intelligence inside the platform 50,000+ sellers already lived in.',
  openGraph: {
    title: 'Amazon: Introducing AI insights for sellers',
    description: 'Starting from a blank slate – no problem statement, no defined scope – and exploring how AI could surface actionable intelligence inside the platform 50,000+ sellers already lived in.',
    images: [{ url: '/images/vq_ai9.png', width: 1200, height: 630, alt: 'Vera AI case study' }],
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Amazon: Introducing AI insights for sellers',
    description: 'Starting from a blank slate – no problem statement, no defined scope – and exploring how AI could surface actionable intelligence inside the platform 50,000+ sellers already lived in.',
    images: ['/images/vq_ai9.png'],
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
