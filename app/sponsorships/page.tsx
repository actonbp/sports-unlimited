'use client'

import { motion } from 'framer-motion'
import { DollarSign, Users, Trophy } from 'lucide-react'
import Link from 'next/link'

export default function SponsorshipsPage() {
  return (
    <div>
      {/* Banner Section */}
      <section className="relative bg-primary py-20 px-4">
        <div className="container mx-auto text-center">
          <motion.h1 
            className="text-5xl sm:text-6xl font-bold mb-4 text-white"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Sponsorships
          </motion.h1>
          <motion.p 
            className="text-xl sm:text-2xl text-white/90 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Partner with Sports Unlimited to make a difference in youth sports and our Durham community
          </motion.p>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <motion.div 
            className="bg-white p-8 rounded-lg shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <DollarSign className="text-secondary w-12 h-12 mb-4" />
            <h2 className="text-2xl font-semibold mb-4 text-primary">Financial Support</h2>
            <p className="text-gray-700">
              Your contributions help us provide equipment, facilities, and resources for our young athletes.
            </p>
          </motion.div>

          <motion.div 
            className="bg-white p-8 rounded-lg shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Users className="text-secondary w-12 h-12 mb-4" />
            <h2 className="text-2xl font-semibold mb-4 text-primary">Community Engagement</h2>
            <p className="text-gray-700">
              Sponsor our events to connect with the Durham community and promote your brand.
            </p>
          </motion.div>

          <motion.div 
            className="bg-white p-8 rounded-lg shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <Trophy className="text-secondary w-12 h-12 mb-4" />
            <h2 className="text-2xl font-semibold mb-4 text-primary">Recognition</h2>
            <p className="text-gray-700">
              Get your name or brand featured in our events, website, and promotional materials.
            </p>
          </motion.div>
        </div>

        <motion.section
          className="bg-secondary text-white p-8 rounded-lg shadow-lg mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <h2 className="text-2xl font-semibold mb-6">Sponsorship Opportunities</h2>
          <div className="space-y-6">
            <div className="bg-white/10 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Tournament Sponsorship</h3>
              <p>Sponsor one of our major tournaments and reach hundreds of athletes and families.</p>
            </div>
            <div className="bg-white/10 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Equipment Sponsorship</h3>
              <p>Help provide quality equipment and gear for our youth athletes.</p>
            </div>
            <div className="bg-white/10 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Program Sponsorship</h3>
              <p>Support our year-round training programs and youth development initiatives.</p>
            </div>
          </div>
        </motion.section>

        <motion.section
          className="bg-primary text-white p-8 rounded-lg shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          <h2 className="text-2xl font-semibold mb-6">Become a Sponsor</h2>
          <p className="mb-6">
            Interested in becoming a sponsor? We offer various sponsorship packages to suit different needs and budgets. 
            Contact us to discuss how we can work together to support youth sports in Durham.
          </p>
          <Link 
            href="/contact" 
            className="inline-block bg-white text-primary px-8 py-3 rounded-full text-lg font-semibold hover:bg-opacity-90 transition-all duration-300 hover:scale-105 transform"
          >
            Contact Us
          </Link>
        </motion.section>
      </div>
    </div>
  )
}

