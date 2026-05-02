import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'PAA: Designing Clinical Intelligence at the Point of Care – Mary Borysova',
  description: 'Lead product designer on a clinical decision support tool for healthcare providers.',
  openGraph: {
    title: 'PAA: Designing Clinical Intelligence at the Point of Care',
    description: 'Lead product designer on a clinical decision support tool for healthcare providers.',
    images: [{ url: '/images/paa_11.png', width: 1200, height: 630, alt: 'PAA case study' }],
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PAA: Designing Clinical Intelligence at the Point of Care',
    description: 'Lead product designer on a clinical decision support tool for healthcare providers.',
    images: ['/images/paa_11.png'],
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
