import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { Metadata } from 'next'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Sports Unlimited - Building Community Through Sports',
  description: 'Join exciting sports tournaments in Durham and showcase your skills! Our events bring together young athletes from across the Triangle area for friendly competition and community building.',
  metadataBase: new URL('https://sports-unlimited.vercel.app'),
  openGraph: {
    title: 'Sports Unlimited - Building Community Through Sports',
    description: 'Join exciting sports tournaments in Durham and showcase your skills! Our events bring together young athletes from across the Triangle area.',
    url: 'https://sports-unlimited.vercel.app',
    siteName: 'Sports Unlimited',
    images: [
      {
        url: 'https://sports-unlimited.vercel.app/opengraph-image',
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
    title: 'Sports Unlimited - Building Community Through Sports',
    description: 'Join exciting sports tournaments in Durham and showcase your skills! Our events bring together young athletes from across the Triangle area.',
    images: ['https://sports-unlimited.vercel.app/twitter-image'],
    creator: '@SportsUnlimited',
  },
  icons: {
    icon: '/favicon.ico',
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
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}

