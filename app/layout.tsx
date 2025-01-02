import './globals.css'
import { Inter } from 'next/font/google'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Metadata } from 'next'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://sports-unlimited.vercel.app'),
  title: 'Sports Unlimited',
  description: 'Building community through sports in Durham, NC',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://sports-unlimited.vercel.app',
    siteName: 'Sports Unlimited',
    title: 'Sports Unlimited',
    description: 'Building community through sports in Durham, NC',
    images: [{
      url: 'https://sports-unlimited.vercel.app/images/preview_card.png',
      width: 1200,
      height: 630,
      alt: 'Sports Unlimited Preview'
    }]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sports Unlimited',
    description: 'Building community through sports in Durham, NC',
    images: ['https://sports-unlimited.vercel.app/images/preview_card.png']
  }
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
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}

