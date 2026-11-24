import type { Metadata } from 'next'

const title = 'Amazon: Paid plans across iOS, Android, devices and web'
const description =
  'Taking Veeqo from a free shipping tool to paid plans: 12+ features on 4 platforms, now bringing in multi-million revenue.'

export const metadata: Metadata = {
  title: `${title} – Mary Borysova`,
  description,
  openGraph: {
    title,
    description,
    images: [{ url: '/images/paid-plans.webp', width: 2000, height: 1296, alt: 'Paid plans case study' }],
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: ['/images/paid-plans.webp'],
  },
}

export default function PaidPlansLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
