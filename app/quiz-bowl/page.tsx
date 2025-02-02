'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useRouter } from 'next/navigation'

export default function QuizBowlRegistration() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    teamName: '',
    coachName: '',
    coachEmail: '',
    coachPhone: '',
    ageGroup: 'teen',
    numberOfPlayers: 4,
    city: '',
    state: '',
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    try {
      const response = await fetch('/api/tournament-registration', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          tournamentId: 'quiz-bowl-feb',
          tournamentName: 'Quiz Bowl Teen Night Tournament - February 2024'
        }),
      })

      const data = await response.json()
      
      if (data.clientSecret) {
        // Store registration data and redirect to payment
        localStorage.setItem('registrationId', data.registrationId)
        localStorage.setItem('amount', data.amount.toString())
        router.push('/payment')
      } else {
        alert('Error creating registration. Please try again.')
      }
    } catch (error) {
      console.error('Error:', error)
      alert('Error submitting registration. Please try again.')
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold text-primary mb-2">Quiz Bowl Teen Night Tournament</h1>
          <h2 className="text-2xl text-gray-600 mb-8">February 2024 Registration</h2>
          
          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-2">Tournament Details</h3>
              <p className="text-gray-600 mb-4">
                Join us for an exciting evening of competitive quiz bowl! Test your knowledge across various subjects
                and compete against other teen teams.
              </p>
              <ul className="list-disc list-inside text-gray-600 mb-4">
                <li>Base Registration: $20 per team</li>
                <li>Additional Cost: $5 per player</li>
                <li>Recommended Team Size: 4-6 players</li>
                <li>Age Group: 13-19 years</li>
              </ul>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Team Name</label>
                  <input
                    type="text"
                    name="teamName"
                    required
                    value={formData.teamName}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">Number of Players</label>
                  <select
                    name="numberOfPlayers"
                    value={formData.numberOfPlayers}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
                  >
                    {[2,3,4,5,6].map(num => (
                      <option key={num} value={num}>{num} Players</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">Coach Name</label>
                  <input
                    type="text"
                    name="coachName"
                    required
                    value={formData.coachName}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">Coach Email</label>
                  <input
                    type="email"
                    name="coachEmail"
                    required
                    value={formData.coachEmail}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">Coach Phone</label>
                  <input
                    type="tel"
                    name="coachPhone"
                    required
                    value={formData.coachPhone}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">City</label>
                  <input
                    type="text"
                    name="city"
                    required
                    value={formData.city}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">State</label>
                  <input
                    type="text"
                    name="state"
                    required
                    value={formData.state}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
                  />
                </div>
              </div>

              <div className="mt-8">
                <button
                  type="submit"
                  className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-lg font-medium text-white bg-primary hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                >
                  Register and Proceed to Payment
                </button>
              </div>
            </form>
          </div>
        </motion.div>
      </div>
    </div>
  )
} 