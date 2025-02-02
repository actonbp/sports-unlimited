'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

interface Registration {
  registrationId: string
  teamName: string
  coachName: string
  coachEmail: string
  coachPhone: string
  ageGroup: string
  numberOfPlayers: number
  city: string
  state: string
  tournamentName: string
  registrationDate: string
  status: 'pending' | 'paid'
}

export default function TournamentRegistrationsPage() {
  const [registrations, setRegistrations] = useState<Registration[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [selectedTournament, setSelectedTournament] = useState<string>('')

  // Actual tournaments data
  const tournaments = [
    { id: 'feb2024', name: 'February 9th Tournament 2024' },
    { id: 'feb16', name: 'February 16th Tournament 2024' },
    { id: 'feb23', name: 'February 23rd Tournament 2024' },
    { id: 'mar2', name: 'March 2nd Tournament 2024' },
    { id: 'mar9', name: 'March 9th Tournament 2024' },
    { id: 'mar16', name: 'March 16th Tournament 2024' },
    { id: 'mar23', name: 'March 23rd Tournament 2024' },
    { id: 'mar30', name: 'March 30th Tournament 2024' }
  ]

  useEffect(() => {
    if (selectedTournament) {
      fetchRegistrations(selectedTournament)
    }
  }, [selectedTournament])

  const fetchRegistrations = async (tournamentId: string) => {
    try {
      setLoading(true)
      setError(null)
      const response = await fetch(`/api/tournament-registration?tournamentId=${tournamentId}`)
      if (!response.ok) throw new Error('Failed to fetch registrations')
      const data = await response.json()
      setRegistrations(data.registrations || [])
    } catch (err) {
      setError('Error loading registrations. Please try again.')
      console.error('Error:', err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-primary">Tournament Registrations</h1>
      
      {/* Tournament Selection */}
      <div className="mb-6">
        <select
          value={selectedTournament}
          onChange={(e) => setSelectedTournament(e.target.value)}
          className="w-full md:w-64 p-2 border border-gray-300 rounded-md shadow-sm"
        >
          <option value="">Select Tournament</option>
          {tournaments.map((tournament) => (
            <option key={tournament.id} value={tournament.id}>
              {tournament.name}
            </option>
          ))}
        </select>
      </div>

      {/* Loading State */}
      {loading && (
        <div className="flex justify-center items-center py-8">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
        </div>
      )}

      {/* Error State */}
      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
          {error}
        </div>
      )}

      {/* Registrations Table */}
      {!loading && !error && registrations.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="overflow-x-auto"
        >
          <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Team</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Coach</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Contact</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Grade</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Players</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Location</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {registrations.map((reg) => (
                <tr key={reg.registrationId}>
                  <td className="px-6 py-4 whitespace-nowrap">{reg.teamName}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{reg.coachName}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div>{reg.coachEmail}</div>
                    <div className="text-sm text-gray-500">{reg.coachPhone}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">{reg.ageGroup}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{reg.numberOfPlayers}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{`${reg.city}, ${reg.state}`}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      reg.status === 'paid' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {reg.status.charAt(0).toUpperCase() + reg.status.slice(1)}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>
      )}

      {/* No Registrations State */}
      {!loading && !error && registrations.length === 0 && selectedTournament && (
        <div className="text-center py-8 text-gray-500">
          No registrations found for this tournament.
        </div>
      )}
    </div>
  )
} 