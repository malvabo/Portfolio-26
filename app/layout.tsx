import type { Metadata } from 'next'
import { Geist, Lora } from 'next/font/google'
import localFont from 'next/font/local'
import { Analytics } from '@vercel/analytics/next'
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
  title: 'Product Designer – Crafting Digital Experiences That Scale',
  description: 'Lead product designer specializing in user-centered design for high-growth startups. From vision to execution, I create products people love.',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
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
        {children}
        <Analytics />
      </body>
    </html>
  )
}
