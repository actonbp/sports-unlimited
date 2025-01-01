'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Calendar, MapPin, Users, Filter, ChevronDown, ChevronUp } from 'lucide-react'

const tournaments = [
  { 
    id: 1, 
    name: 'Durham Summer Basketball League', 
    date: 'July 15-20, 2023', 
    location: 'Durham Bulls Athletic Park', 
    ageGroup: '12-14',
    description: 'A week-long basketball tournament featuring teams from across Durham. Experience the thrill of competition and showcase your skills!',
    format: 'Round-robin followed by single-elimination playoffs',
    registration: { deadline: 'July 1, 2023', fee: '$150 per team' }
  },
  { 
    id: 2, 
    name: 'Bull City Fall Soccer Tournament', 
    date: 'September 5-10, 2023', 
    location: 'Rock Quarry Park', 
    ageGroup: '15-17',
    description: 'Join us for the largest youth soccer tournament in Durham. Compete against top teams and develop your soccer skills.',
    format: 'Group stage followed by knockout rounds',
    registration: { deadline: 'August 20, 2023', fee: '$200 per team' }
  },
  { 
    id: 3, 
    name: 'Triangle Winter Volleyball Championship', 
    date: 'December 1-5, 2023', 
    location: 'Durham Convention Center', 
    ageGroup: '18-21',
    description: 'An indoor volleyball tournament bringing together the best young talent from the Triangle area. Show off your spikes and digs!',
    format: 'Double elimination',
    registration: { deadline: 'November 15, 2023', fee: '$175 per team' }
  },
]

export default function TournamentsPage() {
  const [filter, setFilter] = useState('')
  const [selectedTournament, setSelectedTournament] = useState(null)
  const [expandedTournament, setExpandedTournament] = useState(null)
  const [sortBy, setSortBy] = useState('date')

  const filteredTournaments = tournaments
    .filter(tournament =>
      tournament.name.toLowerCase().includes(filter.toLowerCase()) ||
      tournament.ageGroup.includes(filter)
    )
    .sort((a, b) => {
      if (sortBy === 'date') {
        return new Date(a.date) - new Date(b.date)
      } else if (sortBy === 'name') {
        return a.name.localeCompare(b.name)
      }
      return 0
    })

  return (
    <div className="container mx-auto px-4 py-8">
      <motion.h1 
        className="text-4xl font-bold mb-8 text-center text-primary"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Tournament Registration
      </motion.h1>
      
      <motion.p
        className="text-lg mb-8 text-center text-gray-700"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Join exciting sports tournaments in Durham and showcase your skills! Our events bring together young athletes from across the Triangle area for friendly competition and community building.
      </motion.p>
      
      <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
        <div className="flex-1">
          <div className="relative">
            <input
              type="text"
              placeholder="Filter by name or age group"
              className="w-full p-2 pl-10 border rounded"
              onChange={(e) => setFilter(e.target.value)}
            />
            <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          </div>
        </div>
        <div className="flex items-center">
          <label htmlFor="sortBy" className="mr-2 text-gray-700">Sort by:</label>
          <select
            id="sortBy"
            className="p-2 border rounded"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
          >
            <option value="date">Date</option>
            <option value="name">Name</option>
          </select>
        </div>
      </div>

      <AnimatePresence>
        {filteredTournaments.map((tournament, index) => (
          <motion.div
            key={tournament.id}
            className="bg-white rounded-lg shadow-md p-6 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="flex justify-between items-start">
              <div>
                <h2 className="text-xl font-semibold mb-4 text-primary">{tournament.name}</h2>
                <div className="flex items-center mb-2">
                  <Calendar className="mr-2 text-secondary" size={20} />
                  <span>{tournament.date}</span>
                </div>
                <div className="flex items-center mb-2">
                  <MapPin className="mr-2 text-secondary" size={20} />
                  <span>{tournament.location}</span>
                </div>
                <div className="flex items-center mb-4">
                  <Users className="mr-2 text-secondary" size={20} />
                  <span>Age Group: {tournament.ageGroup}</span>
                </div>
              </div>
              <button 
                onClick={() => setExpandedTournament(expandedTournament === tournament.id ? null : tournament.id)}
                className="text-primary hover:text-secondary transition-colors duration-200"
              >
                {expandedTournament === tournament.id ? 
                  <ChevronUp size={20} /> : <ChevronDown size={20} />}
              </button>
            </div>
            {expandedTournament === tournament.id && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="mt-4 text-gray-700"
              >
                <p className="mb-2">{tournament.description}</p>
                <p className="mb-2"><strong>Format:</strong> {tournament.format}</p>
                <p className="mb-2"><strong>Registration Deadline:</strong> {tournament.registration.deadline}</p>
                <p><strong>Registration Fee:</strong> {tournament.registration.fee}</p>
              </motion.div>
            )}
            <button 
              onClick={() => setSelectedTournament(tournament)}
              className="mt-4 w-full bg-secondary text-white py-2 px-4 rounded hover:bg-opacity-90 transition-colors duration-200"
            >
              Register Now
            </button>
          </motion.div>
        ))}
      </AnimatePresence>

      {/* Registration Modal */}
      <AnimatePresence>
        {selectedTournament && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedTournament(null)}
          >
            <motion.div
              className="bg-white rounded-lg p-6 w-full max-w-md"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <h2 className="text-2xl font-semibold mb-4 text-primary">Register for {selectedTournament.name}</h2>
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block mb-1">Participant Name</label>
                  <input type="text" id="name" className="w-full p-2 border rounded" required />
                </div>
                <div>
                  <label htmlFor="email" className="block mb-1">Email</label>
                  <input type="email" id="email" className="w-full p-2 border rounded" required />
                </div>
                <div>
                  <label htmlFor="phone" className="block mb-1">Phone</label>
                  <input type="tel" id="phone" className="w-full p-2 border rounded" required />
                </div>
                <div>
                  <label htmlFor="age" className="block mb-1">Age</label>
                  <input type="number" id="age" className="w-full p-2 border rounded" required />
                </div>
                <button type="submit" className="w-full bg-secondary text-white py-2 px-4 rounded hover:bg-opacity-90 transition-colors duration-200">
                  Submit Registration
                </button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

