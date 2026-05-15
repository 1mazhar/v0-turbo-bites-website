import type { Metadata, Viewport } from 'next'
import { Bebas_Neue, Barlow, Barlow_Condensed } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const bebasNeue = Bebas_Neue({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-bebas',
})

const barlow = Barlow({
  weight: ['400', '600', '700', '800'],
  subsets: ['latin'],
  variable: '--font-barlow',
})

const barlowCondensed = Barlow_Condensed({
  weight: ['700', '800'],
  subsets: ['latin'],
  variable: '--font-barlow-condensed',
})

export const metadata: Metadata = {
  title: 'Turbo Bites | Attock\'s Finest Fast Food',
  description: 'Fresh Pizza, Burgers, Shawarma & More - Delivered Hot in Attock. Order via WhatsApp!',
  generator: 'v0.app',
}

export const viewport: Viewport = {
  themeColor: '#0a0a0a',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${bebasNeue.variable} ${barlow.variable} ${barlowCondensed.variable}`}>
      <body className="font-sans antialiased bg-background">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
