'use client'

import { motion } from 'framer-motion'
import { Dumbbell, Target, Clock } from 'lucide-react'

export default function TrainingPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <motion.h1 
        className="text-4xl font-bold mb-8 text-center text-primary"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Training Programs
      </motion.h1>
      
      <motion.p 
        className="text-lg mb-8 text-center text-gray-700"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Discover our comprehensive training programs designed to help athletes of all levels 
        improve their skills, build strength, and achieve their goals.
      </motion.p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <motion.div 
          className="bg-white p-6 rounded-lg shadow-md"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Dumbbell className="text-secondary w-12 h-12 mb-4 mx-auto" />
          <h2 className="text-xl font-semibold mb-2 text-center text-primary">Strength & Conditioning</h2>
          <p className="text-gray-700 text-center">Build a strong foundation with our specialized strength and conditioning programs.</p>
        </motion.div>

        <motion.div 
          className="bg-white p-6 rounded-lg shadow-md"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Target className="text-secondary w-12 h-12 mb-4 mx-auto" />
          <h2 className="text-xl font-semibold mb-2 text-center text-primary">Skill Development</h2>
          <p className="text-gray-700 text-center">Hone your sport-specific skills with guidance from experienced coaches.</p>
        </motion.div>

        <motion.div 
          className="bg-white p-6 rounded-lg shadow-md"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <Clock className="text-secondary w-12 h-12 mb-4 mx-auto" />
          <h2 className="text-xl font-semibold mb-2 text-center text-primary">Performance Analysis</h2>
          <p className="text-gray-700 text-center">Track your progress and identify areas for improvement with our performance analysis tools.</p>
        </motion.div>
      </div>

      <motion.section
        className="bg-white p-6 rounded-lg shadow-md"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <h2 className="text-2xl font-semibold mb-4 text-primary">Upcoming Training Camps</h2>
        <ul className="space-y-4">
          <li>
            <h3 className="text-lg font-semibold text-primary">Summer Basketball Intensive</h3>
            <p className="text-gray-700">A week-long camp focusing on basketball fundamentals and advanced techniques.</p>
            <p className="text-sm text-gray-500">Date: July 10-15, 2023 | Ages: 12-17</p>
          </li>
          <li>
            <h3 className="text-lg font-semibold text-primary">Soccer Skills Workshop</h3>
            <p className="text-gray-700">Improve your soccer skills with drills and scrimmages led by professional coaches.</p>
            <p className="text-sm text-gray-500">Date: August 5-7, 2023 | Ages: 8-14</p>
          </li>
          <li>
            <h3 className="text-lg font-semibold text-primary">Multi-Sport Fitness Camp</h3>
            <p className="text-gray-700">A diverse camp covering various sports and general fitness principles.</p>
            <p className="text-sm text-gray-500">Date: August 21-25, 2023 | Ages: 10-16</p>
          </li>
        </ul>
      </motion.section>
    </div>
  )
}

