'use client'

import { motion } from 'framer-motion'
import { Dumbbell, Target, Clock, Calendar, Mail, Phone, User } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'

// Helper function to generate Sunday dates
const generateSundayDates = () => {
  const dates = []
  let currentDate = new Date('2025-01-19') // First Sunday after Jan 16
  const endDate = new Date('2025-03-31')   // End of March

  while (currentDate <= endDate) {
    dates.push(new Date(currentDate))
    currentDate.setDate(currentDate.getDate() + 7)
  }
  return dates
}

export default function TrainingPage() {
  const [selectedDate, setSelectedDate] = useState(null)
  const [selectedTime, setSelectedTime] = useState(null)
  const [formData, setFormData] = useState({
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

  const handleSubmit = async (e) => {
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

  return (
    <div>
      {/* Banner Section */}
      <section className="relative bg-secondary py-20 px-4">
        <div className="container mx-auto text-center">
          <motion.h1 
            className="text-5xl sm:text-6xl font-bold mb-4 text-white"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Training Programs
          </motion.h1>
          <motion.p 
            className="text-xl sm:text-2xl text-white/90 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Develop your skills with our expert coaching and comprehensive training programs
          </motion.p>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
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
          className="bg-primary text-white p-8 rounded-lg shadow-lg mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h2 className="text-2xl font-semibold mb-6">Upcoming Training Camps</h2>
          <div className="space-y-6">
            <div className="bg-white/10 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Summer Basketball Intensive</h3>
              <p className="mb-2 text-white/90">A week-long camp focusing on basketball fundamentals and advanced techniques.</p>
              <p className="text-sm text-white/80">Date: July 10-15, 2025 | Ages: 12-17</p>
            </div>
            <div className="bg-white/10 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Soccer Skills Workshop</h3>
              <p className="mb-2 text-white/90">Improve your soccer skills with drills and scrimmages led by professional coaches.</p>
              <p className="text-sm text-white/80">Date: August 5-7, 2025 | Ages: 8-14</p>
            </div>
            <div className="bg-white/10 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Multi-Sport Fitness Camp</h3>
              <p className="mb-2 text-white/90">A diverse camp covering various sports and general fitness principles.</p>
              <p className="text-sm text-white/80">Date: August 21-25, 2025 | Ages: 10-16</p>
            </div>
          </div>
        </motion.section>

        <motion.section
          className="bg-secondary text-white p-8 rounded-lg shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <h2 className="text-2xl font-semibold mb-6">Ready to Train?</h2>
          <p className="mb-6">
            Join our training programs and take your game to the next level. Our experienced coaches are ready to help you achieve your goals.
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
          <h2 className="text-2xl font-semibold mb-6 text-primary">Training Sessions</h2>
          
          {/* Calendar Section */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4 text-primary flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              Available Dates
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {sundayDates.map((date, index) => (
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
                Available Time Slots
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

          {/* Session Details */}
          <div className="bg-secondary/10 p-6 rounded-lg mb-6">
            <h3 className="font-semibold text-secondary text-lg mb-4">Session Details:</h3>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-center gap-2">
                <Target className="w-5 h-5 text-secondary" />
                Up to 6 players per session
              </li>
              <li className="flex items-center gap-2">
                <Dumbbell className="w-5 h-5 text-secondary" />
                Professional coaching and skill development
              </li>
              <li className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-secondary" />
                45-minute intensive training
              </li>
              <li className="font-semibold text-secondary mt-4">
                Cost: $50 per session
              </li>
            </ul>
          </div>

          {/* Booking Button */}
          <button 
            className={`w-full sm:w-auto px-8 py-3 rounded-lg font-semibold transition-all duration-300 ${
              selectedDate && selectedTime
                ? 'bg-secondary text-white hover:bg-opacity-90'
                : 'bg-gray-200 text-gray-500 cursor-not-allowed'
            }`}
            disabled={!selectedDate || !selectedTime}
          >
            {selectedDate && selectedTime ? 'Book Session' : 'Select Date & Time'}
          </button>

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
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
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
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
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
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
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
                    required
                    value={formData.age}
                    onChange={(e) => setFormData({ ...formData, age: e.target.value })}
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

