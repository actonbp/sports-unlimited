'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Shield, Heart, Users, ChevronDown, ChevronUp } from 'lucide-react'

const initiatives = [
  {
    title: "Youth Mentorship Program",
    description: "Pair young athletes with experienced mentors to provide guidance both on and off the field.",
    impact: "Over 500 youth mentored in the past year, with 90% reporting improved confidence and leadership skills."
  },
  {
    title: "Community Sports Clinics",
    description: "Free sports clinics in underserved neighborhoods to promote physical activity and teach fundamental skills.",
    impact: "Reached 1,000+ children across 10 Durham neighborhoods, introducing them to various sports and healthy habits."
  },
  {
    title: "Anti-Bullying Campaign",
    description: "Workshops and awareness programs to combat bullying in schools and sports teams.",
    impact: "Implemented in 15 local schools, resulting in a 30% decrease in reported bullying incidents."
  }
]

export default function SaveSportsPage() {
  const [expandedInitiative, setExpandedInitiative] = useState<number | null>(null)

  return (
    <div className="container mx-auto px-4 py-8">
      <motion.h1 
        className="text-4xl font-bold mb-8 text-center text-primary"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Save Sports
      </motion.h1>
      
      <motion.p 
        className="text-lg mb-8 text-center text-gray-700"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Sports Against Violence Everywhere (SAVE) is our initiative to promote 
        positive values and non-violence through sports in Durham and beyond.
      </motion.p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <motion.div 
          className="bg-white p-6 rounded-lg shadow-md"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Shield className="text-secondary w-12 h-12 mb-4 mx-auto" />
          <h2 className="text-xl font-semibold mb-2 text-center text-primary">Protect</h2>
          <p className="text-gray-700 text-center">We work to create safe spaces for youth to play and grow.</p>
        </motion.div>

        <motion.div 
          className="bg-white p-6 rounded-lg shadow-md"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Heart className="text-secondary w-12 h-12 mb-4 mx-auto" />
          <h2 className="text-xl font-semibold mb-2 text-center text-primary">Nurture</h2>
          <p className="text-gray-700 text-center">We foster an environment of care, respect, and personal growth.</p>
        </motion.div>

        <motion.div 
          className="bg-white p-6 rounded-lg shadow-md"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <Users className="text-secondary w-12 h-12 mb-4 mx-auto" />
          <h2 className="text-xl font-semibold mb-2 text-center text-primary">Unite</h2>
          <p className="text-gray-700 text-center">We bring communities together through the power of sports.</p>
        </motion.div>
      </div>

      <motion.h2
        className="text-3xl font-bold mb-6 text-center text-primary"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        Our Initiatives
      </motion.h2>

      <div className="space-y-6">
        {initiatives.map((initiative, index) => (
          <motion.div
            key={initiative.title}
            className="bg-white rounded-lg shadow-md overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
          >
            <div
              className="p-6 cursor-pointer flex justify-between items-center"
              onClick={() => setExpandedInitiative(expandedInitiative === index ? null : index)}
            >
              <h3 className="text-xl font-semibold text-primary">{initiative.title}</h3>
              {expandedInitiative === index ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
            </div>
            <AnimatePresence>
              {expandedInitiative === index && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="px-6 pb-6"
                >
                  <p className="text-gray-700 mb-4">{initiative.description}</p>
                  <p className="text-gray-700"><strong>Impact:</strong> {initiative.impact}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>

      <motion.div
        className="mt-12 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1 }}
      >
        <h2 className="text-2xl font-bold mb-4 text-primary">Get Involved</h2>
        <p className="text-gray-700 mb-6">
          Join us in our mission to create a positive impact through sports. 
          Whether you're an athlete, coach, or community member, there's a place for you in our SAVE initiative.
        </p>
        <button className="bg-secondary text-white py-3 px-6 rounded-full text-lg font-semibold hover:bg-opacity-90 transition-colors duration-200">
          Volunteer Now
        </button>
      </motion.div>
    </div>
  )
}

