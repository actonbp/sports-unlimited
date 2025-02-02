'use client'

import { useState } from 'react'
import { useStripe, useElements, PaymentElement } from '@stripe/react-stripe-js'

interface PaymentFormProps {
  clientSecret: string
  onSuccess: () => void
  onError: (error: string) => void
}

export default function PaymentForm({ clientSecret, onSuccess, onError }: PaymentFormProps) {
  const stripe = useStripe()
  const elements = useElements()
  const [isProcessing, setIsProcessing] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!stripe || !elements) {
      return
    }

    setIsProcessing(true)

    try {
      const { error } = await stripe.confirmPayment({
        elements,
        confirmParams: {
          return_url: `${window.location.origin}/payment-success`,
        },
      })

      if (error) {
        onError(error.message || 'An error occurred during payment.')
      } else {
        onSuccess()
      }
    } catch (error) {
      onError('An unexpected error occurred.')
    } finally {
      setIsProcessing(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md mx-auto">
      <PaymentElement />
      <button
        type="submit"
        disabled={!stripe || isProcessing}
        className={`w-full mt-4 px-8 py-3 rounded-lg font-semibold text-white transition-all duration-200 
          ${!stripe || isProcessing 
            ? 'bg-gray-400 cursor-not-allowed' 
            : 'bg-secondary hover:bg-opacity-90'}`}
      >
        {isProcessing ? 'Processing...' : 'Pay Now'}
      </button>
    </form>
  )
} 