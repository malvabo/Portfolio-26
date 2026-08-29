import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Conduit: Pipelines importers build themselves – Mary Borysova',
  description: 'Turning a fixed compliance engine into document pipelines each customer configures.',
  openGraph: {
    title: 'Conduit: Pipelines importers build themselves',
    description: 'Turning a fixed compliance engine into document pipelines each customer configures.',
    images: [{ url: '/conduit/home-config.png', width: 1200, height: 630, alt: 'Conduit case study' }],
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Conduit: Pipelines importers build themselves',
    description: 'Turning a fixed compliance engine into document pipelines each customer configures.',
    images: ['/conduit/home-config.png'],
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
