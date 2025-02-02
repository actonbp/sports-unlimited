'use client'

import { motion } from 'framer-motion'
import { Dumbbell, Target, Clock, Calendar, Mail, Phone, User } from 'lucide-react'
import Link from 'next/link'
import { useState, FormEvent, ChangeEvent } from 'react'
import { Elements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'
import PaymentForm from '@/components/PaymentForm'
import { useStripe, useElements } from '@stripe/react-stripe-js'
import { useRouter } from 'next/navigation'

// Initialize Stripe
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!)

// Helper function to generate Sunday dates
const generateSundayDates = () => {
  const dates = []
  // Create date with explicit time to avoid timezone issues
  const startDate = new Date(2025, 0, 19) // January 19th, 2025 (a Sunday)
  const endDate = new Date(2025, 2, 31) // March 31st, 2025

  let currentDate = new Date(startDate)

  // Debug log to verify dates
  console.log('First Sunday:', currentDate.toLocaleDateString('en-US', { 
    weekday: 'long', 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  }))
  console.log('Day of week:', currentDate.getDay()) // 0 = Sunday

  while (currentDate <= endDate) {
    dates.push(new Date(currentDate))
    // Add 7 days to get to next Sunday
    currentDate = new Date(currentDate.getTime() + (7 * 24 * 60 * 60 * 1000))
  }

  return dates
}

interface FormData {
  name: string;
  email: string;
  phone: string;
  age: string;
}

export default function TrainingPage() {
  const [selectedDate, setSelectedDate] = useState<string>('')
  const [selectedTime, setSelectedTime] = useState<string>('')
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    age: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showPayment, setShowPayment] = useState(false)
  const [paymentError, setPaymentError] = useState('')
  const [clientSecret, setClientSecret] = useState('')
  const sundayDates = generateSundayDates()
  const router = useRouter()
  
  const availableDates = [
    { date: 'Feb 9', day: 'Sunday' },
    { date: 'Feb 16', day: 'Sunday' },
    { date: 'Feb 23', day: 'Sunday' },
    { date: 'Mar 2', day: 'Sunday' },
    { date: 'Mar 9', day: 'Sunday' },
    { date: 'Mar 16', day: 'Sunday' },
    { date: 'Mar 23', day: 'Sunday' },
    { date: 'Mar 30', day: 'Sunday' }
  ]

  const availableTimes = [
    { time: '10:00 AM - 10:45 AM', spots: 6 },
    { time: '11:00 AM - 11:45 AM', spots: 6 },
    { time: '12:00 PM - 12:45 PM', spots: 6 }
  ]

  const handleDateSelect = (date: string) => {
    setSelectedDate(date)
  }

  const handleTimeSelect = (time: string) => {
    setSelectedTime(time)
    if (selectedDate && time) {
      router.push(`/training/book?date=${selectedDate}&time=${time}`)
    }
  }

  const handlePaymentSuccess = async () => {
    try {
      const response = await fetch('/api/book-training', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          date: selectedDate,
          time: selectedTime,
          paid: true,
        }),
      })

      if (response.ok) {
        alert('Booking confirmed! We will send you a confirmation email.')
        setSelectedDate('')
        setSelectedTime('')
        setFormData({
          name: '',
          email: '',
          phone: '',
          age: '',
        })
        setShowPayment(false)
      } else {
        throw new Error('Failed to save booking')
      }
    } catch (error) {
      console.error('Error saving booking:', error)
      alert('There was an error saving your booking. Please contact support.')
    }
  }

  const handlePaymentError = (error: string) => {
    setPaymentError(error)
    setTimeout(() => setPaymentError(''), 5000)
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Create payment intent when showing payment form
      const response = await fetch('/api/create-payment-intent', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          amount: 50,
          description: `Training Session - ${selectedDate} ${selectedTime}`,
        }),
      })

      const data = await response.json()
      setClientSecret(data.clientSecret)
      setShowPayment(true)
    } catch (error) {
      console.error('Error creating payment intent:', error)
      setPaymentError('Failed to initialize payment. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  return (
    <div>
      {/* Banner Section */}
      <section className="relative bg-gradient-to-br from-secondary via-secondary to-primary py-32 px-4">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container mx-auto text-center relative z-10">
          <motion.h1 
            className="text-6xl sm:text-7xl font-bold mb-6 text-white tracking-tight"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Training Programs
          </motion.h1>
          <motion.p 
            className="text-xl sm:text-2xl text-white/90 max-w-3xl mx-auto font-medium"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Develop your skills with our expert coaching and comprehensive training programs
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-8"
          >
            <Link 
              href="#training-sessions"
              className="inline-block bg-white text-secondary px-8 py-4 rounded-full text-lg font-semibold hover:bg-opacity-90 transition-all duration-300 hover:scale-105 transform shadow-lg"
            >
              View Available Sessions
            </Link>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* Main Content */}
      <div id="training-sessions" className="container mx-auto px-4 py-12">
        <motion.section
          className="bg-white p-8 rounded-lg shadow-lg mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h2 className="text-2xl font-semibold mb-6 text-primary">Training Philosophy</h2>
          <p className="text-gray-700 mb-4">
            Our training programs focus on developing well-rounded athletes through a combination of:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>Fundamental skill development</li>
            <li>Strategic game understanding</li>
            <li>Physical conditioning and injury prevention</li>
            <li>Mental preparation and resilience</li>
            <li>Team dynamics and leadership skills</li>
          </ul>
        </motion.section>

        <motion.section
          className="bg-secondary text-white p-8 rounded-lg shadow-lg mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <h2 className="text-2xl font-semibold mb-6">Want a Different Time or Custom Session?</h2>
          <p className="mb-6">
            If you'd like to schedule training at a different time or design your own custom training session, we're here to help! Contact us to discuss your specific needs and goals.
          </p>
          <Link 
            href="/contact" 
            className="inline-block bg-white text-secondary px-8 py-3 rounded-full text-lg font-semibold hover:bg-opacity-90 transition-all duration-300 hover:scale-105 transform"
          >
            Contact Us
          </Link>
        </motion.section>

        <motion.section
          className="bg-white p-8 rounded-lg shadow-lg mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h2 className="text-2xl font-semibold mb-6 text-primary">Available Training Sessions</h2>
          
          {/* Calendar Section */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4 text-primary flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              Select a Date
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {availableDates.map((dateObj, index) => (
                <motion.button
                  key={dateObj.date}
                  onClick={() => handleDateSelect(dateObj.date)}
                  className={`p-4 rounded-lg border-2 transition-all ${
                    selectedDate === dateObj.date 
                    ? 'border-secondary bg-secondary text-white' 
                    : 'border-gray-200 hover:border-secondary'
                  }`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="font-bold">{dateObj.date}</div>
                  <div className="text-sm">{dateObj.day}</div>
                </motion.button>
              ))}
            </div>
          </div>

          {/* Time Slots Section */}
          {selectedDate && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-8"
            >
              <h3 className="text-xl font-semibold mb-4 text-primary flex items-center gap-2">
                <Clock className="w-5 h-5" />
                Select a Time
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {availableTimes.map((timeObj, index) => (
                  <motion.button
                    key={timeObj.time}
                    onClick={() => handleTimeSelect(timeObj.time)}
                    className={`p-4 rounded-lg border-2 transition-all ${
                      selectedTime === timeObj.time 
                      ? 'border-secondary bg-secondary text-white' 
                      : 'border-gray-200 hover:border-secondary'
                    }`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <div className="font-bold">{timeObj.time}</div>
                    <div className="text-sm">{timeObj.spots} spots available</div>
                  </motion.button>
                ))}
              </div>
            </motion.div>
          )}

          {/* Booking Form */}
          {selectedDate && selectedTime && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-8 space-y-6 bg-white/50 p-6 rounded-lg border border-secondary/20"
            >
              {!showPayment ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <h3 className="text-xl font-semibold text-primary">Complete Your Booking</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name
                      </label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                          type="text"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleInputChange}
                          className="pl-10 w-full p-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                          placeholder="John Doe"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                          type="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleInputChange}
                          className="pl-10 w-full p-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                          placeholder="john@example.com"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                          type="tel"
                          name="phone"
                          required
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="pl-10 w-full p-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                          placeholder="(123) 456-7890"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Age
                      </label>
                      <input
                        type="number"
                        name="age"
                        required
                        value={formData.age}
                        onChange={handleInputChange}
                        className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                        placeholder="15"
                        min="5"
                        max="99"
                      />
                    </div>
                  </div>

                  <div className="bg-secondary/5 p-4 rounded-lg">
                    <h4 className="font-semibold text-secondary mb-2">Booking Summary</h4>
                    <p className="text-gray-600">
                      Date: {selectedDate}
                    </p>
                    <p className="text-gray-600">Time: {selectedTime}</p>
                    <p className="text-gray-600">Cost: $50</p>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full sm:w-auto px-8 py-3 rounded-lg font-semibold transition-all duration-300 
                      ${isSubmitting 
                        ? 'bg-gray-400 cursor-not-allowed' 
                        : 'bg-secondary text-white hover:bg-opacity-90'}`}
                  >
                    {isSubmitting ? 'Processing...' : 'Proceed to Payment'}
                  </button>
                </form>
              ) : (
                <div className="space-y-6">
                  <h3 className="text-xl font-semibold text-primary">Complete Payment</h3>
                  {paymentError && (
                    <div className="bg-red-50 text-red-500 p-4 rounded-lg mb-4">
                      {paymentError}
                    </div>
                  )}
                  {clientSecret && (
                    <Elements stripe={stripePromise} options={{ clientSecret }}>
                      <PaymentForm
                        clientSecret={clientSecret}
                        onSuccess={handlePaymentSuccess}
                        onError={handlePaymentError}
                      />
                    </Elements>
                  )}
                  <button
                    onClick={() => setShowPayment(false)}
                    className="w-full sm:w-auto px-8 py-3 rounded-lg font-semibold text-gray-600 hover:text-gray-800 transition-colors duration-200"
                  >
                    Back to Form
                  </button>
                </div>
              )}
            </motion.div>
          )}
        </motion.section>
      </div>
    </div>
  )
}

