'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Calendar, MapPin, Users, Filter, ChevronDown, ChevronUp } from 'lucide-react'

interface Tournament {
  name: string;
  date: string;
  location: string;
  description: string;
  ageGroup: string[];
  registrationLink: string;
  format: string;
  registration: {
    deadline: string;
    fee: string;
  };
}

const tournaments: Tournament[] = [
  {
    name: "Spring Basketball Classic",
    date: "2024-04-15",
    location: "Durham Community Center",
    description: "Annual spring basketball tournament for youth teams.",
    ageGroup: ["8-10", "11-13", "14-16"],
    registrationLink: "#",
    format: "Round Robin + Single Elimination Playoffs",
    registration: {
      deadline: "2024-04-01",
      fee: "$150 per team"
    }
  },
  {
    name: "Summer Soccer Cup",
    date: "2024-06-20",
    location: "Durham Sports Complex",
    description: "Summer soccer tournament featuring teams from across the region.",
    ageGroup: ["11-13", "14-16"],
    registrationLink: "#",
    format: "Group Stage + Knockout Rounds",
    registration: {
      deadline: "2024-06-05",
      fee: "$175 per team"
    }
  },
  {
    name: "Fall Basketball Tournament",
    date: "2024-09-10",
    location: "Durham Recreation Center",
    description: "Fall basketball tournament for all skill levels.",
    ageGroup: ["8-10", "11-13"],
    registrationLink: "#",
    format: "Double Elimination",
    registration: {
      deadline: "2024-08-25",
      fee: "$125 per team"
    }
  }
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
        const dateA = new Date(a.date).getTime();
        const dateB = new Date(b.date).getTime();
        return dateA - dateB;
      } else if (sortBy === 'name') {
        return a.name.localeCompare(b.name);
      }
      return 0;
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
            key={tournament.name}
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
                onClick={() => setExpandedTournament(expandedTournament === tournament.name ? null : tournament.name)}
                className="text-primary hover:text-secondary transition-colors duration-200"
              >
                {expandedTournament === tournament.name ? 
                  <ChevronUp size={20} /> : <ChevronDown size={20} />}
              </button>
            </div>
            {expandedTournament === tournament.name && (
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

