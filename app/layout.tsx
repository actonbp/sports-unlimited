import './globals.css'
import { Inter } from 'next/font/google'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Metadata } from 'next'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://sports-unlimited.vercel.app'),
  title: 'Sports Unlimited - Youth Sports in Durham',
  description: 'Join exciting sports tournaments and training programs in Durham. Building community through youth sports.',
  openGraph: {
    title: 'Sports Unlimited - Youth Sports in Durham',
    description: 'Join exciting sports tournaments and training programs in Durham. Building community through youth sports.',
    images: [
      {
        url: '/images/preview-card.png',
        width: 1200,
        height: 630,
        alt: 'Sports Unlimited - Empowering Durham\'s Youth',
      }
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sports Unlimited - Youth Sports in Durham',
    description: 'Join exciting sports tournaments and training programs in Durham. Building community through youth sports.',
    images: ['/images/preview-card.png'],
    creator: '@SportsUnlimited',
  },
  robots: {
    index: true,
    follow: true,
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

