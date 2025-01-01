'use client'

import { motion } from 'framer-motion'
import { Calendar, Mic, User } from 'lucide-react'

const tiles = [
  {
    title: 'Upcoming Tournaments',
    icon: Calendar,
    content: 'Summer Basketball League - July 15-20',
  },
  {
    title: 'Latest Podcast Episode',
    icon: Mic,
    content: 'The Impact of Youth Sports on Mental Health',
  },
  {
    title: 'Featured Athlete of the Week',
    icon: User,
    content: 'Sarah Johnson - Rising Basketball Star',
  },
]

export default function DynamicContentTiles() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {tiles.map((tile, index) => (
          <motion.div
            key={tile.title}
            className="bg-white rounded-lg shadow-md p-6"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="flex items-center mb-4">
              <tile.icon className="text-blue-600 mr-2" size={24} />
              <h2 className="text-xl font-semibold">{tile.title}</h2>
            </div>
            <p>{tile.content}</p>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

