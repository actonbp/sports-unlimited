'use client'

import { useState } from 'react'
import { useStripe, useElements, PaymentElement, Elements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'
import { motion } from 'framer-motion'
import { Loader2 } from 'lucide-react'

// Initialize Stripe
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!)

interface TeamRegistrationData {
  teamName: string
  coachName: string
  coachEmail: string
  coachPhone: string
  ageGroup: string
  numberOfPlayers: string
  city: string
  state: string
}

interface TournamentRegistrationProps {
  tournamentId: string
  tournamentName: string
  date: string
  registrationFee: number
  onSuccess: () => void
  onError: (error: string) => void
}

function PaymentForm({ clientSecret, registrationFee, tournamentId, onSuccess, onError }: { 
  clientSecret: string
  registrationFee: number
  tournamentId: string
  onSuccess: () => void
  onError: (error: string) => void 
}) {
  const stripe = useStripe()
  const elements = useElements()
  const [isLoading, setIsLoading] = useState(false)

  const handlePayment = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!stripe || !elements) return

    setIsLoading(true)
    try {
      const { error } = await stripe.confirmPayment({
        elements,
        confirmParams: {
          return_url: `${window.location.origin}/tournament-registration-success?tournament=${tournamentId}`,
        },
      })

      if (error) {
        onError(error.message || 'Payment failed')
      }
    } catch (error) {
      onError('An unexpected error occurred')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <form onSubmit={handlePayment} className="space-y-4">
      <PaymentElement />
      <button
        type="submit"
        disabled={!stripe || isLoading}
        className="w-full bg-secondary text-white py-3 px-6 rounded-lg font-semibold hover:bg-opacity-90 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
      >
        {isLoading ? (
          <>
            <Loader2 className="animate-spin mr-2" size={20} />
            Processing Payment...
          </>
        ) : (
          `Pay $${registrationFee}`
        )}
      </button>
    </form>
  )
}

export default function TournamentRegistration({
  tournamentId,
  tournamentName,
  date,
  registrationFee,
  onSuccess,
  onError
}: TournamentRegistrationProps) {
  const [step, setStep] = useState<'form' | 'payment'>('form')
  const [isLoading, setIsLoading] = useState(false)
  const [teamData, setTeamData] = useState<TeamRegistrationData>({
    teamName: '',
    coachName: '',
    coachEmail: '',
    coachPhone: '',
    ageGroup: '',
    numberOfPlayers: '',
    city: '',
    state: ''
  })
  const [clientSecret, setClientSecret] = useState('')

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setTeamData(prev => ({ ...prev, [name]: value }))
  }

  const validateForm = () => {
    // Add validation logic here
    return true
  }

  const handleTeamSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!validateForm()) return

    setIsLoading(true)
    try {
      // Create a payment intent and save team registration data
      const response = await fetch('/api/tournament-registration', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          tournamentId,
          teamData,
          amount: registrationFee
        })
      })

      const data = await response.json()
      if (data.clientSecret) {
        setClientSecret(data.clientSecret)
        setStep('payment')
      } else {
        onError('Failed to initialize payment')
      }
    } catch (error) {
      onError('An error occurred during registration')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-primary mb-6">
        Register for {tournamentName}
      </h2>
      
      {step === 'form' ? (
        <form onSubmit={handleTeamSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Team Name
              </label>
              <input
                type="text"
                name="teamName"
                value={teamData.teamName}
                onChange={handleInputChange}
                className="w-full p-2 border rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
                required
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Grade Level
              </label>
              <select
                name="ageGroup"
                value={teamData.ageGroup}
                onChange={handleInputChange}
                className="w-full p-2 border rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
                required
              >
                <option value="">Select Grade Level</option>
                <option value="3rd">3rd Grade</option>
                <option value="4th">4th Grade</option>
                <option value="5th">5th Grade</option>
                <option value="6th">6th Grade</option>
                <option value="7th">7th Grade</option>
                <option value="8th">8th Grade</option>
                <option value="9th">9th Grade</option>
                <option value="10th">10th Grade</option>
                <option value="11th">11th Grade</option>
                <option value="12th">12th Grade</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Coach Name
              </label>
              <input
                type="text"
                name="coachName"
                value={teamData.coachName}
                onChange={handleInputChange}
                className="w-full p-2 border rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Coach Email
              </label>
              <input
                type="email"
                name="coachEmail"
                value={teamData.coachEmail}
                onChange={handleInputChange}
                className="w-full p-2 border rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Coach Phone
              </label>
              <input
                type="tel"
                name="coachPhone"
                value={teamData.coachPhone}
                onChange={handleInputChange}
                className="w-full p-2 border rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Number of Players
              </label>
              <input
                type="number"
                name="numberOfPlayers"
                value={teamData.numberOfPlayers}
                onChange={handleInputChange}
                min="5"
                max="15"
                className="w-full p-2 border rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                City
              </label>
              <input
                type="text"
                name="city"
                value={teamData.city}
                onChange={handleInputChange}
                className="w-full p-2 border rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                State
              </label>
              <input
                type="text"
                name="state"
                value={teamData.state}
                onChange={handleInputChange}
                className="w-full p-2 border rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
                required
              />
            </div>
          </div>

          <div className="mt-6">
            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-secondary text-white py-3 px-6 rounded-lg font-semibold hover:bg-opacity-90 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
            >
              {isLoading ? (
                <>
                  <Loader2 className="animate-spin mr-2" size={20} />
                  Processing...
                </>
              ) : (
                `Proceed to Payment - $${registrationFee}`
              )}
            </button>
          </div>
        </form>
      ) : (
        <Elements stripe={stripePromise} options={{ clientSecret }}>
          <PaymentForm 
            clientSecret={clientSecret}
            registrationFee={registrationFee}
            tournamentId={tournamentId}
            onSuccess={onSuccess}
            onError={onError}
          />
        </Elements>
      )}
    </div>
  )
} 