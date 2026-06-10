import type { Metadata } from 'next'
import { Geist, Lora } from 'next/font/google'
import localFont from 'next/font/local'
import { Analytics } from '@vercel/analytics/next'
import { RootPasswordGate } from '@/components/root-password-gate'
import { CustomCursor } from '@/components/custom-cursor'
import './globals.css'

const _geist = Geist({ 
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap'
})

const _lora = Lora({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-serif',
  display: 'swap'
})

const _messier = localFont({
  src: './fonts/MessierWrits.ttf',
  variable: '--font-handwriting',
  display: 'swap'
})

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}`
      : 'http://localhost:3000'
  ),
  title: 'Mary Borysova – Scaling complex systems through AI & behavioral design',
  description: 'Lead product designer specializing in user-centered design for high-growth startups. From vision to execution, I create products people love.',
  generator: 'v0.app',
  icons: {
    icon: '/favicon.png',
    apple: '/favicon.png',
  },
  openGraph: {
    title: 'Mary Borysova – Product Designer',
    description: 'Lead product designer specializing in user-centered design for high-growth startups. From vision to execution, I create products people love.',
    url: '/',
    siteName: 'Mary Borysova',
    images: [{ url: '/professional-product-designer.png', width: 1200, height: 630, alt: 'Mary Borysova – Product Designer' }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mary Borysova – Product Designer',
    description: 'Lead product designer specializing in user-centered design for high-growth startups. From vision to execution, I create products people love.',
    images: ['/professional-product-designer.png'],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased ${_geist.variable} ${_lora.variable} ${_messier.variable}`}>
        <RootPasswordGate>{children}</RootPasswordGate>
        <CustomCursor />
        <Analytics />
      </body>
    </html>
  )
}
