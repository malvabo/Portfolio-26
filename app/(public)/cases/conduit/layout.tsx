import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Conduit: Automating the customs paperwork for importers – Mary Borysova',
  description: 'Every food shipment crossing a border needs a stack of certificates and forms, redone by hand each time. Conduit reads those documents and fills the forms, on the rules each customer sets.',
  openGraph: {
    title: 'Conduit: Automating the customs paperwork for importers',
    description: 'Every food shipment crossing a border needs a stack of certificates and forms, redone by hand each time. Conduit reads those documents and fills the forms, on the rules each customer sets.',
    images: [{ url: '/conduit/home-config.png', width: 1200, height: 630, alt: 'Conduit case study' }],
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Conduit: Automating the customs paperwork for importers',
    description: 'Every food shipment crossing a border needs a stack of certificates and forms, redone by hand each time. Conduit reads those documents and fills the forms, on the rules each customer sets.',
    images: ['/conduit/home-config.png'],
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
