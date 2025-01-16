'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Trophy, AlertCircle, Star, Calendar, Users, Award } from 'lucide-react'

const newsItems = [
  {
    icon: <Trophy className="text-yellow-500" size={20} />,
    text: "SAVE Sports Elite will be playing in the Puma NXTPro Circuit this upcoming 2025 season! 🏆"
  },
  {
    icon: <Calendar className="text-blue-500" size={20} />,
    text: "SAVE Sports Travel Basketball tryouts begin January 18th!"
  },
  {
    icon: <Star className="text-purple-500" size={20} />,
    text: "Sports Unlimited's first tournament of the season is on February 8th"
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

