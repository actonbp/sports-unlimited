import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'SAVE Sports - Sports Against Violence Everywhere',
  description: 'Join SAVE Sports and be part of a program that combines competitive excellence with community impact.',
  openGraph: {
    title: 'SAVE Sports',
    description: 'Sports Against Violence Everywhere',
    siteName: 'Sports Unlimited',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SAVE Sports',
    description: 'Sports Against Violence Everywhere',
  },
}

export default function SaveLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-black">
      {children}
    </div>
  )
} 