import './globals.css'
import { Inter } from 'next/font/google'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  metadataBase: new URL('https://sportsunlimitednc.com'),
  title: 'Sports Unlimited - Durham Youth Sports',
  description: 'Join Sports Unlimited for an unforgettable sports experience in the heart of Durham! Empowering Durham\'s youth through sports and community.',
  openGraph: {
    title: 'Sports Unlimited - Durham Youth Sports',
    description: 'Join Sports Unlimited for an unforgettable sports experience in the heart of Durham! Empowering Durham\'s youth through sports and community.',
    url: 'https://sportsunlimitednc.com',
    siteName: 'Sports Unlimited',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sports Unlimited LLC',
    description: 'Empowering Youth, One Game at a Time',
    images: ['/images/og-image.jpg'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="h-full">
      <body className={`${inter.className} min-h-full bg-background text-gray-900 antialiased`}>
        <div className="flex min-h-screen flex-col">
          <Header />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  )
}

