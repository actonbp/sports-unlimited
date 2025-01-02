'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Trophy, AlertCircle, Star, Calendar, Users, Award } from 'lucide-react'

const newsItems = [
  {
    icon: <Trophy className="text-yellow-500" size={20} />,
    text: "Our team SAVE Sports has qualified for the Puma Circuit Elite Division! 🏆"
  },
  {
    icon: <Calendar className="text-blue-500" size={20} />,
    text: "Spring Tournament registration opens February 1st - Early bird discounts available until Feb 15th!"
  },
  {
    icon: <Star className="text-purple-500" size={20} />,
    text: "New Elite Training Program launching in March - Limited spots available for ages 13-18"
  },
  {
    icon: <Users className="text-green-500" size={20} />,
    text: "Coach Mike joins our staff from Duke University - Book your private sessions now!"
  },
  {
    icon: <Award className="text-red-500" size={20} />,
    text: "Congratulations to our U16 team for winning the Regional Championship! 🎉"
  },
  {
    icon: <AlertCircle className="text-orange-500" size={20} />,
    text: "Summer Camp registration is now open - Special discount for early registration!"
  }
]

export default function NewsTicker() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  useEffect(() => {
    if (isPaused) return

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % newsItems.length)
    }, 6000)

    return () => clearInterval(timer)
  }, [isPaused])

  return (
    <div 
      className="bg-primary text-white py-3 relative overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center">
          <span className="font-bold mr-3 whitespace-nowrap">Breaking News:</span>
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
                <span className="mr-2 flex-shrink-0">{newsItems[currentIndex].icon}</span>
                <span className="text-sm md:text-base">{newsItems[currentIndex].text}</span>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  )
}

