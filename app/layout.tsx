import './globals.css'
import { Inter } from 'next/font/google'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Metadata } from 'next'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL("https://sportsunlimitednc.com"),
  title: 'Sports Unlimited - Youth Sports Programs in Durham',
  description: 'Join Sports Unlimited for youth sports programs, tournaments, and training in Durham, NC. Building community through sports.',
  openGraph: {
    title: 'Sports Unlimited - Youth Sports Programs in Durham',
    description: 'Join Sports Unlimited for youth sports programs, tournaments, and training in Durham, NC. Building community through sports.',
    images: ['/images/preview_card.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sports Unlimited - Youth Sports Programs in Durham',
    description: 'Join Sports Unlimited for youth sports programs, tournaments, and training in Durham, NC. Building community through sports.',
    images: ['/images/preview_card.png'],
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
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}

