'use client'

import { motion } from 'framer-motion'
import { DollarSign, Users, Trophy } from 'lucide-react'
import Link from 'next/link'

export default function SponsorshipsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <motion.h1 
        className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-8 text-center text-primary"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Sponsorships
      </motion.h1>
      
      <motion.p 
        className="text-lg mb-8 text-center text-gray-700"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Partner with Sports Unlimited to make a difference in youth sports and our Durham community. 
        Your support helps us provide opportunities for young athletes to grow, learn, and excel.
      </motion.p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-8 sm:mb-12">
        <motion.div 
          className="bg-white p-6 rounded-lg shadow-md"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <DollarSign className="text-secondary w-12 h-12 mb-4 mx-auto" />
          <h2 className="text-xl font-semibold mb-2 text-center text-primary">Financial Support</h2>
          <p className="text-gray-700 text-center">Your contributions help us provide equipment, facilities, and resources for our young athletes.</p>
        </motion.div>

        <motion.div 
          className="bg-white p-6 rounded-lg shadow-md"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Users className="text-secondary w-12 h-12 mb-4 mx-auto" />
          <h2 className="text-xl font-semibold mb-2 text-center text-primary">Community Engagement</h2>
          <p className="text-gray-700 text-center">Sponsor our events to connect with the Durham community and promote your brand.</p>
        </motion.div>

        <motion.div 
          className="bg-white p-6 rounded-lg shadow-md"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <Trophy className="text-secondary w-12 h-12 mb-4 mx-auto" />
          <h2 className="text-xl font-semibold mb-2 text-center text-primary">Recognition</h2>
          <p className="text-gray-700 text-center">Get your name or brand featured in our events, website, and promotional materials.</p>
        </motion.div>
      </div>

      <motion.section
        className="bg-white p-4 sm:p-6 rounded-lg shadow-md"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <h2 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4 text-primary">Become a Sponsor</h2>
        <p className="text-sm sm:text-base text-gray-700 mb-4">
          Interested in becoming a sponsor? We offer various sponsorship packages to suit different needs and budgets. 
          Contact us to discuss how we can work together to support youth sports in Durham.
        </p>
        <Link href="/contact" className="bg-secondary text-white py-2 px-4 rounded hover:bg-opacity-90 transition-colors duration-200 inline-block text-sm sm:text-base">
          Contact Us
        </Link>
      </motion.section>
    </div>
  )
}

