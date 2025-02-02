'use client'

import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { CheckCircle } from 'lucide-react'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'

export default function PaymentSuccessPage() {
  const searchParams = useSearchParams()
  const paymentIntent = searchParams.get('payment_intent')
  const redirectType = searchParams.get('type') || 'training'

  useEffect(() => {
    if (paymentIntent) {
      // You could verify the payment on the server here
      console.log('Payment Intent:', paymentIntent)
    }
  }, [paymentIntent])

  return (
    <div className="min-h-screen bg-background py-12 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-lg mx-auto bg-white rounded-lg shadow-lg p-8 text-center"
      >
        <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-6" />
        <h1 className="text-3xl font-bold text-primary mb-4">Payment Successful!</h1>
        <p className="text-gray-600 mb-8">
          Thank you for your payment. Your {redirectType} session has been confirmed.
          We'll send you a confirmation email shortly.
        </p>
        <div className="space-y-4">
          <Link
            href={`/${redirectType}`}
            className="block w-full bg-secondary text-white py-3 px-6 rounded-lg font-semibold hover:bg-opacity-90 transition-colors duration-200"
          >
            Return to {redirectType.charAt(0).toUpperCase() + redirectType.slice(1)}
          </Link>
          <Link
            href="/"
            className="block w-full bg-primary text-white py-3 px-6 rounded-lg font-semibold hover:bg-opacity-90 transition-colors duration-200"
          >
            Go to Homepage
          </Link>
        </div>
      </motion.div>
    </div>
  )
} 