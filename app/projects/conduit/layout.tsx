import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Conduit: Automating the customs paperwork for importers – Mary Borysova',
  description: 'Every food shipment crossing a border needs a stack of certificates and forms, redone by hand each time. Conduit extracts the data from supplier documents, such as certificates of origin, and fills the importer’s forms, using the fields each customer sets up.',
  openGraph: {
    title: 'Conduit: Automating the customs paperwork for importers',
    description: 'Every food shipment crossing a border needs a stack of certificates and forms, redone by hand each time. Conduit extracts the data from supplier documents, such as certificates of origin, and fills the importer’s forms, using the fields each customer sets up.',
    images: [{ url: '/conduit/home-config.png', width: 1200, height: 630, alt: 'Conduit case study' }],
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Conduit: Automating the customs paperwork for importers',
    description: 'Every food shipment crossing a border needs a stack of certificates and forms, redone by hand each time. Conduit extracts the data from supplier documents, such as certificates of origin, and fills the importer’s forms, using the fields each customer sets up.',
    images: ['/conduit/home-config.png'],
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
