import { NextResponse } from 'next/server'
import Stripe from 'stripe'

// Helper function to check environment variables at runtime
function getRequiredEnvVar(name: string): string {
  const value = process.env[name]
  if (!value) {
    throw new Error(`${name} is not set in environment variables`)
  }
  return value
}

// Initialize Stripe with the correct secret key
const stripe = new Stripe(getRequiredEnvVar('STRIPE_SECRET_KEY'), {
  apiVersion: '2025-01-27.acacia',
})

export async function POST(req: Request) {
  try {
    const { amount, description } = await req.json()

    // Create a PaymentIntent with the order amount and currency
    const paymentIntent = await stripe.paymentIntents.create({
      amount: amount * 100, // Stripe expects amounts in cents
      currency: 'usd',
      description: description,
      automatic_payment_methods: {
        enabled: true,
      },
    })

    return NextResponse.json({
      clientSecret: paymentIntent.client_secret,
    })
  } catch (error) {
    console.error('Error creating payment intent:', error)
    return NextResponse.json(
      { error: 'Error creating payment intent' },
      { status: 500 }
    )
  }
} 