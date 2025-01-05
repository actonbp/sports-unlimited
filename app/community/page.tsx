'use client'

import { useState, FormEvent } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Calendar, Users, Heart, Share2, MessageCircle } from 'lucide-react'
import Image from 'next/image'

interface CommunityEvent {
  id: string
  title: string
  date: string
  location: string
  description: string
  image: string
  attendees: number
  likes: number
  comments: number
  details?: string[]
}

const communityEvents: CommunityEvent[] = [
  {
    id: '1',
    title: 'Community Sports Day',
    date: '2025-07-15',
    location: 'Durham Central Park',
    description: 'Join us for a day of sports, games, and community building!',
    image: '/images/community-sports-day.jpg',
    attendees: 150,
    likes: 45,
    comments: 12,
    details: [
      'Multiple sports activities for all ages',
      'Food trucks and refreshments',
      'Live music and entertainment',
      'Family-friendly environment'
    ]
  },
  {
    id: '2',
    title: 'Youth Basketball Tournament',
    date: '2025-08-01',
    location: 'Durham Community Center',
    description: 'Annual youth basketball tournament featuring teams from across the Triangle.',
    image: '/images/youth-basketball.jpg',
    attendees: 200,
    likes: 67,
    comments: 23,
    details: [
      'Age groups: 8-10, 11-13, 14-16',
      'Professional referees',
      'Trophies and medals',
      'Concession stands available'
    ]
  },
  {
    id: '3',
    title: 'Sports Equipment Drive',
    date: '2025-08-15',
    location: 'Multiple Locations',
    description: 'Help us collect sports equipment for underprivileged youth in our community.',
    image: '/images/equipment-drive.jpg',
    attendees: 75,
    likes: 89,
    comments: 34,
    details: [
      'Drop-off locations throughout Durham',
      'All sports equipment welcome',
      'Tax-deductible donations',
      'Supporting local youth programs'
    ]
  }
]

export default function CommunityPage() {
  const [email, setEmail] = useState('')
  const [expandedEvent, setExpandedEvent] = useState<string | null>(null)
  const [likedEvents, setLikedEvents] = useState<Set<string>>(new Set())
  const [subscribing, setSubscribing] = useState(false)
  const [subscribeSuccess, setSubscribeSuccess] = useState(false)

  const handleSubscribe = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSubscribing(true)

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000))
      setSubscribeSuccess(true)
      setEmail('')
    } catch (error) {
      console.error('Subscription failed:', error)
    } finally {
      setSubscribing(false)
    }
  }

  const handleLike = (eventId: string) => {
    setLikedEvents(prev => {
      const newLiked = new Set(prev)
      if (newLiked.has(eventId)) {
        newLiked.delete(eventId)
      } else {
        newLiked.add(eventId)
      }
      return newLiked
    })
  }

  const handleShare = async (event: CommunityEvent) => {
    try {
      await navigator.share({
        title: event.title,
        text: event.description,
        url: window.location.href
      })
    } catch (error) {
      console.log('Sharing failed:', error)
    }
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <motion.h1 
        className="text-4xl font-bold mb-8 text-center text-primary"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Community
      </motion.h1>
      
      <motion.p 
        className="text-lg mb-12 text-center text-gray-700"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Join our vibrant community of athletes, coaches, and sports enthusiasts in Durham. 
        Together, we're building a stronger, more connected city through the power of sports.
      </motion.p>

      <motion.section 
        className="mb-16 bg-white p-8 rounded-lg shadow-lg"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <h2 className="text-2xl font-semibold mb-6 text-primary">Newsletter Signup</h2>
        <div className="max-w-md mx-auto">
          <p className="mb-4 text-gray-700">Stay updated with our latest events, tournaments, and community news.</p>
          <form onSubmit={handleSubscribe} className="space-y-4">
            <div>
              <label htmlFor="email" className="block mb-2 text-gray-700">Email Address</label>
              <input 
                type="email" 
                id="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent" 
                placeholder="Enter your email"
                required 
                disabled={subscribing}
              />
            </div>
            <button 
              type="submit"
              disabled={subscribing}
              className="w-full bg-primary text-white py-3 px-6 rounded-lg font-semibold hover:bg-opacity-90 transition-colors duration-200 disabled:opacity-50 flex items-center justify-center"
            >
              {subscribing ? (
                <>
                  <motion.div
                    className="w-5 h-5 border-2 border-white border-t-transparent rounded-full mr-2"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  />
                  Subscribing...
                </>
              ) : (
                'Subscribe to Newsletter'
              )}
            </button>
          </form>
          <AnimatePresence>
            {subscribeSuccess && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="mt-4 p-4 bg-green-100 text-green-700 rounded-lg"
              >
                Thanks for subscribing! We'll keep you updated with our latest news.
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.section>

      <motion.section
        className="mb-16"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <h2 className="text-2xl font-semibold mb-8 text-primary">Upcoming Community Events</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {communityEvents.map((event) => (
            <motion.div
              key={event.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.2 }}
            >
              <div className="relative h-48">
                <Image
                  src={event.image}
                  alt={event.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-primary">{event.title}</h3>
                <p className="text-gray-600 mb-4">{event.description}</p>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-gray-700">
                    <Calendar className="w-5 h-5 mr-2" />
                    <span>{new Date(event.date).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <Users className="w-5 h-5 mr-2" />
                    <span>{event.attendees} attending</span>
                  </div>
                </div>
                <div className="flex items-center justify-between pt-4 border-t">
                  <button
                    onClick={() => handleLike(event.id)}
                    className={`flex items-center space-x-1 ${
                      likedEvents.has(event.id) ? 'text-red-500' : 'text-gray-500'
                    } hover:text-red-500 transition-colors duration-200`}
                  >
                    <Heart className={`w-5 h-5 ${likedEvents.has(event.id) ? 'fill-current' : ''}`} />
                    <span>{event.likes + (likedEvents.has(event.id) ? 1 : 0)}</span>
                  </button>
                  <button
                    onClick={() => handleShare(event)}
                    className="flex items-center space-x-1 text-gray-500 hover:text-primary transition-colors duration-200"
                  >
                    <Share2 className="w-5 h-5" />
                    <span>Share</span>
                  </button>
                  <button
                    onClick={() => setExpandedEvent(expandedEvent === event.id ? null : event.id)}
                    className="flex items-center space-x-1 text-gray-500 hover:text-primary transition-colors duration-200"
                  >
                    <MessageCircle className="w-5 h-5" />
                    <span>{event.comments}</span>
                  </button>
                </div>
                <AnimatePresence>
                  {expandedEvent === event.id && event.details && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="mt-4 pt-4 border-t"
                    >
                      <h4 className="font-semibold mb-2 text-primary">Event Details:</h4>
                      <ul className="list-disc pl-5 space-y-1">
                        {event.details.map((detail, index) => (
                          <li key={index} className="text-gray-700">{detail}</li>
                        ))}
                      </ul>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      <motion.section
        className="text-center bg-primary text-white py-12 px-6 rounded-lg"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <h2 className="text-2xl font-semibold mb-4">Get Involved</h2>
        <p className="text-lg mb-6 max-w-2xl mx-auto">
          Want to make a difference in our community through sports? We're always looking for volunteers, 
          coaches, and supporters to help us create positive change.
        </p>
        <button className="bg-white text-primary py-3 px-8 rounded-full text-lg font-semibold hover:bg-opacity-90 transition-colors duration-200">
          Join Our Team
        </button>
      </motion.section>
    </div>
  )
}

