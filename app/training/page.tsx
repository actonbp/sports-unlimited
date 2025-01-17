'use client'

import { motion } from 'framer-motion'
import { Dumbbell, Target, Clock, Calendar, Mail, Phone, User } from 'lucide-react'
import Link from 'next/link'
import { useState, FormEvent, ChangeEvent } from 'react'

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
  const [selectedDate, setSelectedDate] = useState<Date | null>(null)
  const [selectedTime, setSelectedTime] = useState<string | null>(null)
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    age: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const sundayDates = generateSundayDates()
  
  const timeSlots = [
    { time: '10:00 AM - 10:45 AM', available: 6 },
    { time: '11:00 AM - 11:45 AM', available: 6 },
    { time: '12:00 PM - 12:45 PM', available: 6 }
  ]

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    const bookingData = {
      ...formData,
      date: selectedDate,
      time: selectedTime,
    }

    try {
      const response = await fetch('/api/book-training', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(bookingData),
      })

      if (response.ok) {
        alert('Booking request submitted! We will contact you to confirm.')
        setSelectedDate(null)
        setSelectedTime(null)
        setFormData({
          name: '',
          email: '',
          phone: '',
          age: '',
        })
      } else {
        alert('There was an error submitting your booking. Please try again.')
      }
    } catch (error) {
      alert('There was an error submitting your booking. Please try again.')
    }

    setIsSubmitting(false)
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
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {sundayDates.length > 0 ? (
                sundayDates.map((date, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedDate(date)}
                    className={`p-4 rounded-lg border transition-all ${
                      selectedDate && selectedDate.getTime() === date.getTime()
                        ? 'bg-primary text-white border-primary'
                        : 'hover:border-primary hover:bg-primary/5'
                    }`}
                  >
                    <p className="font-semibold">{date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</p>
                    <p className="text-sm">Sunday</p>
                  </button>
                ))
              ) : (
                <p className="col-span-full text-gray-600">No available dates found. Please check back later.</p>
              )}
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
                {timeSlots.map((slot, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedTime(slot.time)}
                    className={`p-4 rounded-lg border transition-all ${
                      selectedTime === slot.time
                        ? 'bg-primary text-white border-primary'
                        : 'hover:border-primary hover:bg-primary/5'
                    }`}
                  >
                    <p className="font-semibold">{slot.time}</p>
                    <p className="text-sm">{slot.available} spots available</p>
                  </button>
                ))}
              </div>
            </motion.div>
          )}

          {/* Booking Form */}
          {selectedDate && selectedTime && (
            <motion.form
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-8 space-y-6 bg-white/50 p-6 rounded-lg border border-secondary/20"
              onSubmit={handleSubmit}
            >
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
                  Date: {selectedDate?.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' })}
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
                {isSubmitting ? 'Submitting...' : 'Submit Booking Request'}
              </button>
            </motion.form>
          )}
        </motion.section>
      </div>
    </div>
  )
}

