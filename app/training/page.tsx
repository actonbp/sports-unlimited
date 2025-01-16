'use client'

import { motion } from 'framer-motion'
import { Dumbbell, Target, Clock } from 'lucide-react'
import Link from 'next/link'

// Helper function to generate Sunday dates
const generateSundayDates = () => {
  const dates = []
  // Start with January 19th, 2025
  let currentDate = new Date('2025-01-19')
  const endDate = new Date('2025-03-31')

  // Ensure we start on a Sunday
  while (currentDate.getDay() !== 0) {
    currentDate.setDate(currentDate.getDate() + 1)
  }

  while (currentDate <= endDate) {
    dates.push(new Date(currentDate))
    // Add 7 days to get to next Sunday
    currentDate = new Date(currentDate)
    currentDate.setDate(currentDate.getDate() + 7)
  }

  // Debug log to verify dates
  console.log('Training Sundays:', dates.map(date => 
    date.toLocaleDateString('en-US', { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    })
  ))

  return dates
}

export default function TrainingPage() {
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
      </div>
    </div>
  )
}

