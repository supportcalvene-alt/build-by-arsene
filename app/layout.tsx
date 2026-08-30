import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Archivo, Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const archivo = Archivo({
  subsets: ['latin'],
  weight: ['600', '700', '800', '900'],
  variable: '--font-archivo',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'BUILD BY ARSENE — Premium Website Design Agency in the UAE',
  description:
    'BUILD BY ARSENE crafts premium, high-converting websites for ambitious local businesses across the UAE. 48-hour delivery, mobile optimized, local SEO ready.',
  generator: 'v0.app',
  keywords: [
    'website design UAE',
    'premium web design Dubai',
    'restaurant website',
    'barbershop website',
    'local business website',
    'BUILD BY ARSENE',
  ],
  openGraph: {
    title: 'BUILD BY ARSENE — Premium Website Design Agency',
    description:
      'Premium websites for ambitious businesses. Built to attract attention, generate leads, and make your business impossible to ignore.',
    type: 'website',
  },
}

export const viewport: Viewport = {
  themeColor: '#050505',
  colorScheme: 'dark',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${archivo.variable} bg-background`}>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
