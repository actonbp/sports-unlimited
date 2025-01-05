'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Calendar, MapPin, Users, Filter, ChevronDown, ChevronUp, Trophy, Clock, DollarSign } from 'lucide-react'
import Image from 'next/image'

interface Tournament {
  id: string;
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
  image: string;
  sponsor?: string;
}

const tournaments: Tournament[] = [
  {
    id: '1',
    name: "Spring Basketball Classic",
    date: "2025-04-15",
    location: "Durham Community Center",
    description: "Annual spring basketball tournament for youth teams.",
    ageGroup: ["8-10", "11-13", "14-16"],
    registrationLink: "#",
    format: "Round Robin + Single Elimination Playoffs",
    registration: {
      deadline: "2025-04-01",
      fee: "$150 per team"
    },
    image: "/images/spring-basketball-classic.png",
    sponsor: "Nike Basketball"
  },
  {
    id: '2',
    name: "Summer Soccer Cup",
    date: "2025-06-20",
    location: "Durham Sports Complex",
    description: "Summer soccer tournament featuring teams from across the region.",
    ageGroup: ["11-13", "14-16"],
    registrationLink: "#",
    format: "Group Stage + Knockout Rounds",
    registration: {
      deadline: "2025-06-05",
      fee: "$175 per team"
    },
    image: "/images/summer_soccer_cup.png",
    sponsor: "Adidas Soccer"
  },
  {
    id: '3',
    name: "Fall Basketball Tournament",
    date: "2025-09-10",
    location: "Durham Recreation Center",
    description: "Fall basketball tournament for all skill levels.",
    ageGroup: ["8-10", "11-13"],
    registrationLink: "#",
    format: "Double Elimination",
    registration: {
      deadline: "2025-08-25",
      fee: "$125 per team"
    },
    image: "/images/fall_bball_tournament.png",
    sponsor: "Under Armour"
  }
]

export default function TournamentsPage() {
  const [filter, setFilter] = useState('')
  const [selectedTournament, setSelectedTournament] = useState<Tournament | null>(null)
  const [expandedTournament, setExpandedTournament] = useState<string | null>(null)
  const [sortBy, setSortBy] = useState<'date' | 'name' | 'ageGroup'>('date')
  const [filterAgeGroup, setFilterAgeGroup] = useState<string>('all')

  const filteredTournaments = tournaments
    .filter(tournament =>
      (filterAgeGroup === 'all' || tournament.ageGroup.includes(filterAgeGroup)) &&
      (filter === '' ||
        tournament.name.toLowerCase().includes(filter.toLowerCase()) ||
        tournament.description.toLowerCase().includes(filter.toLowerCase())))
    .sort((a, b) => {
      switch (sortBy) {
        case 'date':
          return new Date(a.date).getTime() - new Date(b.date).getTime()
        case 'name':
          return a.name.localeCompare(b.name)
        case 'ageGroup':
          return a.ageGroup[0].localeCompare(b.ageGroup[0])
        default:
          return 0
      }
    })

  const uniqueAgeGroups = Array.from(
    new Set(
      tournaments.flatMap(t => t.ageGroup)
    )
  ).sort()

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

      <motion.div
        className="mb-8 space-y-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex-1">
            <label htmlFor="search" className="block text-sm font-medium text-gray-700 mb-1">
              Search Tournaments
            </label>
            <input
              type="text"
              id="search"
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              placeholder="Search by name or description..."
            />
          </div>
          <div className="sm:w-48">
            <label htmlFor="ageGroup" className="block text-sm font-medium text-gray-700 mb-1">
              Age Group
            </label>
            <select
              id="ageGroup"
              value={filterAgeGroup}
              onChange={(e) => setFilterAgeGroup(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
            >
              <option value="all">All Ages</option>
              {uniqueAgeGroups.map(age => (
                <option key={age} value={age}>{age}</option>
              ))}
            </select>
          </div>
          <div className="sm:w-48">
            <label htmlFor="sortBy" className="block text-sm font-medium text-gray-700 mb-1">
              Sort By
            </label>
            <select
              id="sortBy"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as 'date' | 'name' | 'ageGroup')}
              className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
            >
              <option value="date">Date</option>
              <option value="name">Name</option>
              <option value="ageGroup">Age Group</option>
            </select>
          </div>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredTournaments.map((tournament, index) => (
          <motion.div
            key={tournament.id}
            className="bg-white rounded-lg shadow-lg overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="relative h-48">
              <Image
                src={tournament.image}
                alt={tournament.name}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-primary">{tournament.name}</h3>
              <p className="text-gray-600 mb-4">{tournament.description}</p>
              <div className="space-y-2">
                <div className="flex items-center text-gray-700">
                  <Calendar className="w-5 h-5 mr-2" />
                  <span>{new Date(tournament.date).toLocaleDateString()}</span>
                </div>
                <div className="flex items-center text-gray-700">
                  <Users className="w-5 h-5 mr-2" />
                  <span>Ages: {tournament.ageGroup.join(', ')}</span>
                </div>
                <div className="flex items-center text-gray-700">
                  <MapPin className="w-5 h-5 mr-2" />
                  <span>{tournament.location}</span>
                </div>
                {tournament.sponsor && (
                  <div className="flex items-center text-gray-700">
                    <Trophy className="w-5 h-5 mr-2" />
                    <span>Sponsored by {tournament.sponsor}</span>
                  </div>
                )}
                <div className="flex items-center text-gray-700">
                  <Clock className="w-5 h-5 mr-2" />
                  <span>Registration Deadline: {tournament.registration.deadline}</span>
                </div>
                <div className="flex items-center text-gray-700">
                  <DollarSign className="w-5 h-5 mr-2" />
                  <span>{tournament.registration.fee}</span>
                </div>
              </div>
              <button
                onClick={() => setSelectedTournament(tournament)}
                className="mt-4 w-full bg-primary text-white py-2 px-4 rounded-lg hover:bg-opacity-90 transition-colors duration-200"
              >
                Register Now
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {filteredTournaments.length === 0 && (
        <motion.div
          className="text-center py-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-gray-600 text-lg">No tournaments found matching your criteria.</p>
        </motion.div>
      )}

      {selectedTournament && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <motion.div
            className="bg-white rounded-lg p-6 max-w-md w-full"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
          >
            <h2 className="text-2xl font-bold mb-4">{selectedTournament.name}</h2>
            <p className="mb-4">Are you sure you want to register for this tournament?</p>
            <div className="flex justify-end space-x-4">
              <button
                onClick={() => setSelectedTournament(null)}
                className="px-4 py-2 text-gray-600 hover:text-gray-800"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  // Handle registration logic here
                  alert('Registration successful!')
                  setSelectedTournament(null)
                }}
                className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-opacity-90"
              >
                Confirm Registration
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  )
}

