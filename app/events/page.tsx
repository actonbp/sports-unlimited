'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Calendar, MapPin, Users, Filter, Search, ChevronDown } from 'lucide-react'
import Image from 'next/image'

interface Event {
  id: string
  title: string
  date: string
  location: string
  category: string
  capacity: string
  description: string
  image: string
  registrationOpen: boolean
}

const events: Event[] = [
  {
    id: '1',
    title: 'Summer Basketball Camp',
    date: 'July 15-20, 2024',
    location: 'Durham Indoor Sports Center',
    category: 'Basketball',
    capacity: '40 spots remaining',
    description: 'Join us for an intensive week of basketball training with professional coaches. Perfect for ages 10-16.',
    image: '/images/basketball-player.jpg',
    registrationOpen: true
  },
  {
    id: '2',
    title: 'Soccer Skills Workshop',
    date: 'August 5-7, 2024',
    location: 'Durham Community Fields',
    category: 'Soccer',
    capacity: '25 spots remaining',
    description: 'Three days of focused soccer skills development, including dribbling, passing, and shooting techniques.',
    image: '/images/durham-skyline.png',
    registrationOpen: true
  },
  {
    id: '3',
    title: 'Fall Sports Open House',
    date: 'September 1, 2024',
    location: 'Sports Unlimited HQ',
    category: 'Multi-Sport',
    capacity: 'Unlimited',
    description: 'Come explore all our fall programs! Meet coaches, try different sports, and enjoy family activities.',
    image: '/images/old_logo.JPG',
    registrationOpen: false
  },
  {
    id: '4',
    title: 'Swimming Competition Prep',
    date: 'October 10-12, 2024',
    location: 'Durham Aquatics Center',
    category: 'Swimming',
    capacity: '15 spots remaining',
    description: 'Intensive training camp for competitive swimmers. Focus on technique, speed, and race strategy.',
    image: '/images/preview-card.png',
    registrationOpen: true
  }
]

const categories = ['All', 'Basketball', 'Soccer', 'Swimming', 'Multi-Sport']

export default function EventsPage() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [searchQuery, setSearchQuery] = useState('')
  const [showFilters, setShowFilters] = useState(false)

  const filteredEvents = events.filter(event => {
    const matchesCategory = selectedCategory === 'All' || event.category === selectedCategory
    const matchesSearch = event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         event.description.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  return (
    <div className="min-h-screen bg-background py-12 px-4">
      <div className="container mx-auto">
        <motion.h1 
          className="text-4xl font-bold text-primary mb-8 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Upcoming Events
        </motion.h1>

        <div className="mb-8 space-y-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative w-full md:w-96">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search events..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              />
            </div>
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center gap-2 px-4 py-2 bg-secondary text-white rounded-lg hover:bg-opacity-90 transition-colors"
            >
              <Filter size={20} />
              Filters
              <ChevronDown className={`transform transition-transform ${showFilters ? 'rotate-180' : ''}`} size={20} />
            </button>
          </div>

          {showFilters && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="flex flex-wrap gap-2 p-4 bg-white rounded-lg shadow-sm"
            >
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    selectedCategory === category
                      ? 'bg-primary text-white'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </motion.div>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredEvents.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="relative h-48">
                <Image
                  src={event.image}
                  alt={event.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 right-4 bg-primary text-white px-3 py-1 rounded-full text-sm">
                  {event.category}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-primary mb-2">{event.title}</h3>
                <p className="text-gray-600 mb-4">{event.description}</p>
                <div className="space-y-2">
                  <div className="flex items-center text-gray-500">
                    <Calendar size={18} className="mr-2" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center text-gray-500">
                    <MapPin size={18} className="mr-2" />
                    <span>{event.location}</span>
                  </div>
                  <div className="flex items-center text-gray-500">
                    <Users size={18} className="mr-2" />
                    <span>{event.capacity}</span>
                  </div>
                </div>
                <button
                  className={`mt-6 w-full py-2 px-4 rounded-lg text-center font-medium transition-colors ${
                    event.registrationOpen
                      ? 'bg-secondary text-white hover:bg-opacity-90'
                      : 'bg-gray-100 text-gray-500 cursor-not-allowed'
                  }`}
                  disabled={!event.registrationOpen}
                >
                  {event.registrationOpen ? 'Register Now' : 'Coming Soon'}
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {filteredEvents.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <p className="text-gray-500 text-lg">No events found matching your criteria.</p>
          </motion.div>
        )}
      </div>
    </div>
  )
} 