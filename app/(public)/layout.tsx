import type { Metadata } from 'next'
import { Geist, Lora } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import '../globals.css'

// Public root layout: no password gate. Served at aipm.maryborysova.com (see proxy.ts)
// and at /ai on the main domain. The design portfolio keeps its own gated layout.
const geist = Geist({ subsets: ['latin'], variable: '--font-sans', display: 'swap' })
const lora = Lora({ subsets: ['latin'], weight: ['400', '500', '600'], variable: '--font-serif', display: 'swap' })

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.VERCEL_ENV === 'production'
      ? 'https://aipm.maryborysova.com'
      : process.env.VERCEL_URL
        ? `https://${process.env.VERCEL_URL}`
        : 'http://localhost:3000'
  ),
  icons: { icon: '/favicon.png', apple: '/favicon.png' },
}

export default function PublicLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased ${geist.variable} ${lora.variable}`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
