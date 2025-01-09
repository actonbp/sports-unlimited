import './globals.css'
import { Inter } from 'next/font/google'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Metadata } from 'next'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Sports Unlimited',
  description: 'Building Community Through Sports',
  metadataBase: new URL('https://savesportsnc.com'),
  openGraph: {
    title: 'Sports Unlimited',
    description: 'Building Community Through Sports',
    url: 'https://savesportsnc.com',
    siteName: 'Sports Unlimited',
    images: [
      {
        url: '/images/slides_image-2.jpg',
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
    images: ['/images/slides_image-2.jpg'],
  },
  other: {
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-title': 'Sports Unlimited',
    'format-detection': 'telephone=no',
    'apple-itunes-app': 'app-id=myAppStoreID',
    'og:image:type': 'image/png',
  },
  appleWebApp: {
    title: 'Sports Unlimited',
    statusBarStyle: 'black-translucent',
    startupImage: [
      {
        url: 'https://sports-unlimited.vercel.app/opengraph-image',
        media: '(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2)',
      }
    ],
  },
  icons: {
    icon: '/favicon.ico',
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

