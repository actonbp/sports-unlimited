'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Home } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center">
        <motion.h1 
          className="text-9xl font-bold text-secondary mb-4"
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          404
        </motion.h1>
        <motion.h2 
          className="text-4xl font-semibold mb-4 text-primary"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Oops! Page Not Found
        </motion.h2>
        <motion.p 
          className="text-xl mb-8 text-gray-700"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          Looks like you've dribbled off the court!
        </motion.p>
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <Link 
            href="/" 
            className="inline-flex items-center bg-secondary text-accent px-6 py-3 rounded-full text-lg font-semibold hover:bg-opacity-90 transition-colors duration-300"
          >
            <Home size={24} className="mr-2" />
            Back to Home Court
          </Link>
        </motion.div>
      </div>
    </div>
  )
}

