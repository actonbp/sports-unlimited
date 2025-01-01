'use client'

import { motion } from 'framer-motion'
import { Trophy } from 'lucide-react'

export default function NewsTicker() {
  return (
    <div className="bg-primary text-accent py-2 overflow-hidden">
      <motion.div
        className="flex items-center justify-center space-x-2"
        initial={{ x: '100%' }}
        animate={{ x: '-100%' }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'linear',
        }}
      >
        <div className="flex items-center whitespace-nowrap">
          <span className="font-bold mr-2">Breaking News:</span>
          <span>Our team SAVE Sports has made it to the Puma Circuit!</span>
          <Trophy className="ml-2 inline-block" size={16} />
          <span className="ml-2">Congratulations to all our athletes and coaches!</span>
        </div>
      </motion.div>
    </div>
  )
}

