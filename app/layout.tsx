import './globals.css'
import { Inter } from 'next/font/google'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Metadata, Viewport } from 'next'

const inter = Inter({ subsets: ['latin'] })

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
}

export const metadata: Metadata = {
  title: 'Sports Unlimited',
  description: 'Building Community Through Sports',
  metadataBase: new URL('https://sportsunlimitednc.com'),
  openGraph: {
    title: 'Sports Unlimited',
    description: 'Building Community Through Sports',
    url: 'https://sportsunlimitednc.com',
    siteName: 'Sports Unlimited',
    images: [
      {
        url: 'https://sportsunlimitednc.com/opengraph-image.png',
        width: 1200,
        height: 630,
        alt: 'Sports Unlimited - Building Community Through Sports',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sports Unlimited',
    description: 'Building Community Through Sports',
    images: ['https://sportsunlimitednc.com/opengraph-image.png'],
  },
  other: {
    'mobile-web-app-capable': 'yes',
    'format-detection': 'telephone=no',
  },
  manifest: '/manifest.json',
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/icon.png', type: 'image/png', sizes: '32x32' }
    ],
    apple: [
      { url: '/apple-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content={viewport.width} />
      </head>
      <body className={inter.className}>
        <Header />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}

