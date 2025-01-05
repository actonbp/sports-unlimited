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
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}

