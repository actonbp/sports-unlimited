'use client'

import { motion } from 'framer-motion'
import { Trophy, Users, Target, Calendar } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export default function SAVEPage() {
  return (
    <div className="min-h-screen bg-background">
      <section className="relative py-20 px-4 bg-primary">
        <div className="container mx-auto text-center text-accent">
          <motion.h1 
            className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            SAVE Sports
          </motion.h1>
          <motion.p 
            className="text-xl sm:text-2xl md:text-3xl mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Sports Against Violence Everywhere
          </motion.p>
        </div>
      </section>

      <section className="py-12 px-4 bg-accent">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-6 text-primary">Our Legacy</h2>
              <p className="text-lg text-gray-700">Founded in 2007 by CEO Joshua Dorsett, SAVE Sports has been a cornerstone of Durham's basketball community. Starting as a grassroots initiative, it has grown into a powerhouse program recently joining the prestigious PUMA circuit.</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-white p-6 rounded-lg shadow-lg"
              >
                <Trophy className="w-12 h-12 text-secondary mb-4" />
                <h3 className="text-xl font-bold mb-3 text-primary">Elite Development</h3>
                <p className="text-gray-700">Our program focuses on developing elite athletes while instilling strong values and leadership skills.</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="bg-white p-6 rounded-lg shadow-lg"
              >
                <Users className="w-12 h-12 text-secondary mb-4" />
                <h3 className="text-xl font-bold mb-3 text-primary">Community Impact</h3>
                <p className="text-gray-700">Using basketball as a tool to combat violence and create positive change in our community.</p>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-center bg-primary text-accent p-8 rounded-lg shadow-lg"
            >
              <h2 className="text-2xl font-bold mb-4">Join SAVE Sports</h2>
              <p className="text-lg mb-6">Tryouts coming soon! Be part of a program that combines competitive excellence with community impact.</p>
              <Link href="/registration" className="bg-secondary text-accent px-8 py-3 rounded-full text-lg font-semibold hover:bg-opacity-90 transition-colors duration-300 inline-block">
                Register for Updates
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
} 