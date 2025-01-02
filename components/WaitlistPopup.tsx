'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Loader2 } from 'lucide-react'

interface FormData {
  firstName: string
  lastName: string
  email: string
  phone: string
  playerAge: string
  interests: string[]
}

const initialFormData: FormData = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  playerAge: '',
  interests: []
}

export default function WaitlistPopup() {
  const [isOpen, setIsOpen] = useState(true)
  const [formData, setFormData] = useState<FormData>(initialFormData)
  const [submitted, setSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [errors, setErrors] = useState<Partial<FormData>>({})

  const interestOptions = [
    'Travel Team',
    'Local Tournaments',
    'Training Programs',
    'Summer Camps',
    'Private Coaching'
  ]

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    // Clear error when user starts typing
    if (errors[name as keyof FormData]) {
      setErrors(prev => ({ ...prev, [name]: undefined }))
    }
  }

  const handleInterestChange = (interest: string) => {
    setFormData(prev => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter(i => i !== interest)
        : [...prev.interests, interest]
    }))
  }

  const validateForm = (): boolean => {
    const newErrors: Partial<FormData> = {}
    
    if (!formData.firstName) newErrors.firstName = 'First name is required'
    if (!formData.lastName) newErrors.lastName = 'Last name is required'
    if (!formData.email) {
      newErrors.email = 'Email is required'
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email'
    }
    if (!formData.playerAge) newErrors.playerAge = 'Player age is required'
    if (formData.interests.length === 0) newErrors.interests = ['Please select at least one interest']

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!validateForm()) return

    setIsLoading(true)
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500))
    setIsLoading(false)
    setSubmitted(true)
    
    setTimeout(() => {
      setIsOpen(false)
    }, 3000)
  }

  if (!isOpen) return null

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div
          className="bg-white rounded-lg p-8 max-w-xl w-full relative max-h-[90vh] overflow-y-auto"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
        >
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
          >
            <X size={24} />
          </button>

          {!submitted ? (
            <>
              <h2 className="text-2xl font-bold mb-4 text-primary">Join Our Waitlist!</h2>
              <p className="text-gray-600 mb-6">
                Be the first to know when new programs and tournaments are available. Get exclusive early access and special offers!
              </p>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                      First Name*
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-primary focus:border-transparent ${
                        errors.firstName ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="John"
                    />
                    {errors.firstName && (
                      <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>
                    )}
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                      Last Name*
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-primary focus:border-transparent ${
                        errors.lastName ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="Doe"
                    />
                    {errors.lastName && (
                      <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>
                    )}
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address*
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-primary focus:border-transparent ${
                      errors.email ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="you@example.com"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number (Optional)
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="(123) 456-7890"
                  />
                </div>

                <div>
                  <label htmlFor="playerAge" className="block text-sm font-medium text-gray-700 mb-1">
                    Player Age*
                  </label>
                  <input
                    type="number"
                    id="playerAge"
                    name="playerAge"
                    value={formData.playerAge}
                    onChange={handleChange}
                    min="5"
                    max="18"
                    className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-primary focus:border-transparent ${
                      errors.playerAge ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="Age"
                  />
                  {errors.playerAge && (
                    <p className="text-red-500 text-sm mt-1">{errors.playerAge}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Interested In* (Select all that apply)
                  </label>
                  <div className="space-y-2">
                    {interestOptions.map(interest => (
                      <label key={interest} className="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          checked={formData.interests.includes(interest)}
                          onChange={() => handleInterestChange(interest)}
                          className="rounded border-gray-300 text-primary focus:ring-primary"
                        />
                        <span className="text-gray-700">{interest}</span>
                      </label>
                    ))}
                  </div>
                  {errors.interests && (
                    <p className="text-red-500 text-sm mt-1">{errors.interests[0]}</p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-primary text-white py-2 px-4 rounded-md hover:bg-opacity-90 transition-colors duration-200 flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="animate-spin" size={20} />
                      <span>Processing...</span>
                    </>
                  ) : (
                    <span>Join Waitlist</span>
                  )}
                </button>
              </form>
            </>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center py-8"
            >
              <h3 className="text-xl font-semibold text-green-600 mb-2">Thank You, {formData.firstName}!</h3>
              <p className="text-gray-600">
                You've been added to our waitlist. We'll notify you when we have updates about {formData.interests.join(', ')}!
              </p>
            </motion.div>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

