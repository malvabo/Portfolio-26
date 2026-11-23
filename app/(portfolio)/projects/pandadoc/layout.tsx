import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'PandaDoc: Simplifying document workflows for 50K+ users – Mary Borysova',
  description: 'Driving product-led growth through contextual extension design.',
  openGraph: {
    title: 'PandaDoc: Simplifying document workflows for 50K+ users',
    description: 'Driving product-led growth through contextual extension design.',
    images: [{ url: '/grid-of-pandadoc-ui-screens-and-mockups.jpg', width: 1200, height: 630, alt: 'PandaDoc case study' }],
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PandaDoc: Simplifying document workflows for 50K+ users',
    description: 'Driving product-led growth through contextual extension design.',
    images: ['/grid-of-pandadoc-ui-screens-and-mockups.jpg'],
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
