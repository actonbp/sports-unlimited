'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Calendar, MapPin, Users, ChevronDown, ChevronUp } from 'lucide-react'

const communityEvents = [
  {
    title: "Durham Sports Fair",
    date: "August 15, 2023",
    location: "Durham Central Park",
    description: "Join us for a day of sports demonstrations, local team meet-and-greets, and family-friendly activities.",
    activities: [
      "Sports equipment swap",
      "Mini-tournaments for kids",
      "Healthy eating workshops",
      "Local athlete autograph sessions"
    ]
  },
  {
    title: "Youth Coaching Workshop",
    date: "September 22, 2023",
    location: "Durham Community Center",
    description: "Learn effective coaching techniques for youth sports and how to create a positive team environment.",
    topics: [
      "Age-appropriate training methods",
      "Building team cohesion",
      "Effective communication with young athletes",
      "Promoting sportsmanship"
    ]
  },
  {
    title: "Community Fun Run",
    date: "October 8, 2023",
    location: "American Tobacco Trail",
    description: "A family-friendly 5K run/walk to promote fitness and community spirit.",
    details: [
      "All ages and abilities welcome",
      "Post-run celebration with music and refreshments",
      "Fundraiser for local youth sports programs"
    ]
  }
]

export default function CommunityPage() {
  const [email, setEmail] = useState('')
  const [expandedEvent, setExpandedEvent] = useState(null)

  const handleSubmit = (e) => {
    e.preventDefault()
    // Here you would typically handle the form submission
    console.log('Submitted email:', email)
    setEmail('')
    alert('Thank you for subscribing to our newsletter!')
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
        className="text-lg mb-8 text-center text-gray-700"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Join our vibrant community of athletes, coaches, and sports enthusiasts in Durham. 
        Together, we're building a stronger, more connected city through the power of sports.
      </motion.p>
      
      <motion.section 
        className="mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <h2 className="text-2xl font-semibold mb-4 text-primary">Newsletter Signup</h2>
        <div className="max-w-md mx-auto">
          <p className="mb-4 text-gray-700">Stay updated with our latest events, tournaments, and community news.</p>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="email" className="block mb-1 text-gray-700">Email Address</label>
              <input 
                type="email" 
                id="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-2 border rounded" 
                placeholder="Enter your email"
                required 
              />
            </div>
            <button 
              type="submit"
              className="w-full bg-secondary text-white py-2 px-4 rounded hover:bg-opacity-90 transition-colors duration-200"
            >
              Subscribe to Newsletter
            </button>
          </form>
        </div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <h2 className="text-2xl font-semibold mb-6 text-primary">Upcoming Community Events</h2>
        <div className="space-y-6">
          {communityEvents.map((event, index) => (
            <motion.div
              key={event.title}
              className="bg-white rounded-lg shadow-md overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
            >
              <div
                className="p-6 cursor-pointer flex justify-between items-center"
                onClick={() => setExpandedEvent(expandedEvent === index ? null : index)}
              >
                <h3 className="text-xl font-semibold text-primary">{event.title}</h3>
                {expandedEvent === index ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
              </div>
              <AnimatePresence>
                {expandedEvent === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-6 pb-6"
                  >
                    <div className="flex items-center mb-2">
                      <Calendar className="mr-2 text-secondary" size={20} />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center mb-4">
                      <MapPin className="mr-2 text-secondary" size={20} />
                      <span>{event.location}</span>
                    </div>
                    <p className="text-gray-700 mb-4">{event.description}</p>
                    {event.activities && (
                      <>
                        <h4 className="font-semibold mb-2">Activities:</h4>
                        <ul className="list-disc pl-5 mb-4">
                          {event.activities.map((activity, i) => (
                            <li key={i} className="text-gray-700">{activity}</li>
                          ))}
                        </ul>
                      </>
                    )}
                    {event.topics && (
                      <>
                        <h4 className="font-semibold mb-2">Topics:</h4>
                        <ul className="list-disc pl-5 mb-4">
                          {event.topics.map((topic, i) => (
                            <li key={i} className="text-gray-700">{topic}</li>
                          ))}
                        </ul>
                      </>
                    )}
                    {event.details && (
                      <>
                        <h4 className="font-semibold mb-2">Details:</h4>
                        <ul className="list-disc pl-5 mb-4">
                          {event.details.map((detail, i) => (
                            <li key={i} className="text-gray-700">{detail}</li>
                          ))}
                        </ul>
                      </>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </motion.section>

      <motion.section
        className="mt-12 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <h2 className="text-2xl font-semibold mb-4 text-primary">Get Involved</h2>
        <p className="text-gray-700 mb-6">
          Want to make a difference in our community through sports? We're always looking for volunteers, 
          coaches, and supporters to help us create positive change.
        </p>
        <button className="bg-secondary text-white py-3 px-6 rounded-full text-lg font-semibold hover:bg-opacity-90 transition-colors duration-200">
          Join Our Team
        </button>
      </motion.section>
    </div>
  )
}

