import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Authotics: 3D AI consultation for custom orthotics – Mary Borysova',
  description: 'Digital consultation experience that makes ordering custom orthotics from home easy and precise.',
  openGraph: {
    title: 'Authotics: 3D AI consultation for custom orthotics',
    description: 'Digital consultation experience that makes ordering custom orthotics from home easy and precise.',
    images: [{ url: '/images/authotics-1.png', width: 1200, height: 630, alt: 'Authotics case study' }],
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Authotics: 3D AI consultation for custom orthotics',
    description: 'Digital consultation experience that makes ordering custom orthotics from home easy and precise.',
    images: ['/images/authotics-1.png'],
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
