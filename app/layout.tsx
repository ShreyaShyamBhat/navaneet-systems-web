import type { Metadata, Viewport } from 'next'
import { Inter, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
});

const geistMono = Geist_Mono({ 
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

export const metadata: Metadata = {
  title: 'Navaneet Systems | Office Automation & IT Solutions in Hubli',
  description: 'Navaneet Systems - 31+ years of trusted office automation, IT solutions, and professional camera equipment. Authorized Canon & HP dealers in Hubli, Karnataka.',
  keywords: ['photocopiers', 'printers', 'IT solutions', 'Hubli', 'Canon', 'HP', 'office automation', 'cameras', 'North Karnataka'],
  authors: [{ name: 'Navaneet Systems' }],
  creator: 'Navaneet Systems',
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
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://navaneetsystems.com',
    siteName: 'Navaneet Systems',
    title: 'Navaneet Systems | Office Automation & IT Solutions in Hubli',
    description: '31+ years of trusted office automation, IT solutions, and professional camera equipment in North Karnataka.',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#004080',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${geistMono.variable} bg-background`}>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
