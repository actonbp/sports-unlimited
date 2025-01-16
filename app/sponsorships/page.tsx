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
          className="bg-white p-8 rounded-lg shadow-lg mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h2 className="text-2xl font-semibold mb-6 text-primary">SAVE Sports Travel Basketball Program</h2>
          <div className="prose max-w-none text-gray-700">
            <p className="mb-4">
              The SAVE Sports Travel Basketball program is a program that promotes Sports Against Violence Everywhere. Established in 2007 based out of the Salvation Army Boys & Girls of Durham NC, we invite you to become a sponsor for our 2024-25 travel season.
            </p>
            <p className="mb-4">
              Our basketball teams benefit 56 youth in grades 5th, 8th, and 9th-12th grades. The primary source of funding for our AAU teams is from corporate and private sponsors. This season we joined the NXTPro/Pro16 Puma circuit.
            </p>
            <p className="mb-4">
              In order to participate, we are in need of $3,600.00 per team. This will provide:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Travel uniform for each player</li>
              <li>Tournament fees</li>
              <li>Travel accommodations</li>
              <li>Shoes</li>
              <li>Participation in the national tournament</li>
            </ul>
            <p className="mb-4">
              This year's season will run from February 1, 2025 through July 31, 2025. Our journey covers stops in PA, NC, TN, MA, FL, and VA. In exchange for your sponsorship, your company logo will be placed on each uniform that will be seen as we travel throughout each state.
            </p>
            <p className="mb-4">
              The Salvation Army Boys & Girls Club has provided a safe haven for the youth of our surrounding neighborhoods for 100 years. Our mission is to enable all young people, especially those who need us most, to reach their full potential as productive, caring, responsible citizens. Participation on our AAU basketball teams enables our youth to grow physically, socially and emotionally while strengthening our families and community through sports.
            </p>
            <p>
              Your sponsorship will help ensure the success of our athletes both individually and as teams.
            </p>
          </div>
        </motion.section>

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

