'use client'

import { motion } from 'framer-motion'
import { DollarSign, Users, Trophy } from 'lucide-react'
import Link from 'next/link'

export default function SponsorshipsPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#1e3a8a] via-[#1e3a8a] to-[#172554] py-32 px-4">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto text-center relative z-10">
          <motion.h1 
            className="text-6xl sm:text-7xl font-bold mb-6 text-white tracking-tight"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Sponsorships
          </motion.h1>
          <motion.p 
            className="text-xl sm:text-2xl text-white/90 max-w-3xl mx-auto font-medium"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Partner with Sports Unlimited to make a difference in youth sports and our Durham community
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-8"
          >
            <Link 
              href="#sponsorship-options"
              className="inline-block bg-white text-[#1e3a8a] px-8 py-4 rounded-full text-lg font-semibold hover:bg-opacity-90 transition-all duration-300 hover:scale-105 transform shadow-lg"
            >
              View Sponsorship Options
            </Link>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* Benefits Grid */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
          >
            <DollarSign className="w-12 h-12 text-secondary mb-4" />
            <h3 className="text-xl font-semibold mb-3">Financial Support</h3>
            <p className="text-gray-600">
              Your contributions help us provide equipment, facilities, and resources for our young athletes.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
          >
            <Users className="w-12 h-12 text-secondary mb-4" />
            <h3 className="text-xl font-semibold mb-3">Community Engagement</h3>
            <p className="text-gray-600">
              Sponsor our events to connect with the Durham community and promote your brand.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
          >
            <Trophy className="w-12 h-12 text-secondary mb-4" />
            <h3 className="text-xl font-semibold mb-3">Recognition</h3>
            <p className="text-gray-600">
              Get your name or brand featured in our events, website, and promotional materials.
            </p>
          </motion.div>
        </div>
      </div>

      {/* SAVE Sports Program Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-gradient-to-br from-secondary/5 to-secondary/10 py-16"
      >
        <div className="container mx-auto px-4">
          <div className="bg-white p-8 rounded-xl shadow-lg max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-secondary">SAVE Sports Travel Basketball Program</h2>
            
            <div className="space-y-6 text-gray-700">
              <p>
                The SAVE Sports Travel Basketball program promotes Sports Against Violence Everywhere. Established in 2007 based out of the Salvation Army Boys & Girls of Durham NC, we invite you to become a sponsor for our 2024-25 travel season.
              </p>

              <p>
                Our basketball teams benefit 56 youth in grades 5th, 8th, and 9th-12th grades. The primary source of funding for our AAU teams is from corporate and private sponsors. This season we joined the NXTPro/Pro16 Puma circuit.
              </p>

              <div className="bg-secondary/5 p-6 rounded-lg my-8">
                <h3 className="text-xl font-semibold mb-4 text-secondary">Sponsorship Needs - $3,600.00 per team</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Travel uniform for each player</li>
                  <li>Tournament fees</li>
                  <li>Travel accommodations</li>
                  <li>Shoes</li>
                  <li>Participation in the national tournament</li>
                </ul>
              </div>

              <p>
                This year's season will run from February 1, 2025 through July 31, 2025. Our journey covers stops in PA, NC, TN, MA, FL, and VA. In exchange for your sponsorship, your company logo will be placed on each uniform that will be seen as we travel throughout each state.
              </p>

              <p>
                The Salvation Army Boys & Girls Club has provided a safe haven for the youth of our surrounding neighborhoods for 100 years. Our mission is to enable all young people, especially those who need us most, to reach their full potential as productive, caring, responsible citizens. Participation on our AAU basketball teams enables our youth to grow physically, socially and emotionally while strengthening our families and community through sports.
              </p>

              <p className="font-medium text-secondary">
                Your sponsorship will help ensure the success of our athletes both individually and as teams.
              </p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Sponsorship Opportunities */}
      <section id="sponsorship-options" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold mb-12 text-center"
          >
            Sponsorship Opportunities
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-secondary text-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all hover:scale-105 transform"
            >
              <h3 className="text-2xl font-semibold mb-4">Tournament Sponsorship</h3>
              <p className="mb-6">
                Sponsor one of our major tournaments and reach hundreds of athletes and families.
              </p>
              <Link 
                href="/contact"
                className="inline-block bg-white text-secondary px-6 py-3 rounded-full font-semibold hover:bg-opacity-90 transition-all"
              >
                Learn More
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-secondary text-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all hover:scale-105 transform"
            >
              <h3 className="text-2xl font-semibold mb-4">Equipment Sponsorship</h3>
              <p className="mb-6">
                Help provide quality equipment and gear for our youth athletes.
              </p>
              <Link 
                href="/contact"
                className="inline-block bg-white text-secondary px-6 py-3 rounded-full font-semibold hover:bg-opacity-90 transition-all"
              >
                Learn More
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-secondary text-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all hover:scale-105 transform"
            >
              <h3 className="text-2xl font-semibold mb-4">Program Sponsorship</h3>
              <p className="mb-6">
                Support our year-round training programs and youth development initiatives.
              </p>
              <Link 
                href="/contact"
                className="inline-block bg-white text-secondary px-6 py-3 rounded-full font-semibold hover:bg-opacity-90 transition-all"
              >
                Learn More
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}

