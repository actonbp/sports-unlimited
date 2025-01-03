import './globals.css'
import { Inter } from 'next/font/google'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Metadata } from 'next'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Sports Unlimited',
  description: 'Building Community Through Sports in Durham, NC',
  metadataBase: new URL('https://sportsunlimitednc.com'),
  openGraph: {
    title: 'Sports Unlimited',
    description: 'Building Community Through Sports in Durham, NC',
    images: ['/images/durham-skyline.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sports Unlimited',
    description: 'Building Community Through Sports in Durham, NC',
    images: ['/images/durham-skyline.jpg'],
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

