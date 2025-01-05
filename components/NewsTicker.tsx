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
      className="bg-black/80 text-white py-1.5 absolute bottom-0 left-0 right-0 z-20 border-t border-gray-700"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="relative flex items-center">
        <div className="flex-shrink-0 bg-red-600 px-4 py-1 font-bold tracking-wider text-sm border-r border-gray-700">
          UPDATES
        </div>
        <div className="flex-1 overflow-hidden">
          <div className="animate-ticker inline-flex items-center whitespace-nowrap">
            {[...Array(2)].map((_, arrayIndex) => (
              <div key={arrayIndex} className="inline-flex items-center">
                {newsItems.map((item, index) => (
                  <div
                    key={`${arrayIndex}-${index}`}
                    className="inline-flex items-center px-4 space-x-2"
                  >
                    <span className="flex-shrink-0">{item.icon}</span>
                    <span className="text-sm font-medium">{item.text}</span>
                    <span className="text-gray-400 mx-2">•</span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

