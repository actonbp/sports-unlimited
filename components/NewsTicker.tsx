'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Trophy, AlertCircle, Star } from 'lucide-react'

const newsItems = [
  {
    icon: <Trophy className="text-yellow-500" />,
    text: "Our team SAVE Sports has made it to the Puma Circuit! 🏆 Congratulations to all our athletes and coaches!"
  },
  {
    icon: <AlertCircle className="text-blue-500" />,
    text: "Spring Tournament registration opens next week! Early bird discounts available!"
  },
  {
    icon: <Star className="text-purple-500" />,
    text: "New elite training program launching in March - Limited spots available!"
  }
]

export default function NewsTicker() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % newsItems.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="bg-primary text-white py-3 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex items-center">
          <span className="font-bold mr-3">Breaking News:</span>
          <div className="flex-1 overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -50, opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="flex items-center"
              >
                <span className="mr-2">{newsItems[currentIndex].icon}</span>
                <span>{newsItems[currentIndex].text}</span>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  )
}

