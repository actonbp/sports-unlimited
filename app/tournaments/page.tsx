'use client'

import { motion } from 'framer-motion'
import { Calendar, MapPin, Trophy, Clock } from 'lucide-react'
import { useState, useEffect } from 'react'
import { Elements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'
import TournamentRegistration from '@/components/TournamentRegistration'

// Initialize Stripe
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!)

interface Tournament {
  id: string;
  name: string;
  date: string;
  location: string;
  registrationFee: number;
  isInPersonOnly?: boolean;
}

function CountdownTimer({ targetDate }: { targetDate: string }) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const target = new Date(targetDate).getTime();
      const difference = target - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="flex space-x-4 justify-center">
      <div className="text-center">
        <div className="text-3xl font-bold text-primary">{timeLeft.days}</div>
        <div className="text-sm text-gray-600">Days</div>
      </div>
      <div className="text-center">
        <div className="text-3xl font-bold text-primary">{timeLeft.hours}</div>
        <div className="text-sm text-gray-600">Hours</div>
      </div>
      <div className="text-center">
        <div className="text-3xl font-bold text-primary">{timeLeft.minutes}</div>
        <div className="text-sm text-gray-600">Minutes</div>
      </div>
      <div className="text-center">
        <div className="text-3xl font-bold text-primary">{timeLeft.seconds}</div>
        <div className="text-sm text-gray-600">Seconds</div>
      </div>
    </div>
  );
}

const tournaments: Tournament[] = [
  {
    id: '1',
    name: 'SU Winter Showcase',
    date: 'February 8, 2025',
    location: 'Durham, NC',
    registrationFee: 140,
    isInPersonOnly: true // This tournament is in-person registration only
  },
  {
    id: '2',
    name: 'SU Hoops Challenge',
    date: 'February 15, 2025',
    location: 'Durham, NC',
    registrationFee: 140
  },
  {
    id: '3',
    name: 'SU Battle on Tobacco Road',
    date: 'February 22, 2025',
    location: 'Durham, NC',
    registrationFee: 140
  },
  {
    id: '4',
    name: 'SU March Jam Session',
    date: 'March 1, 2025',
    location: 'Durham, NC',
    registrationFee: 140
  },
  {
    id: '5',
    name: 'Tory Trueluck Invitational',
    date: 'March 15, 2025',
    location: 'Durham, NC',
    registrationFee: 140
  },
  {
    id: '6',
    name: 'SU Spring Showdown',
    date: 'March 29, 2025',
    location: 'Durham, NC',
    registrationFee: 140
  }
]

export default function TournamentsPage() {
  const [selectedTournament, setSelectedTournament] = useState<Tournament | null>(null)
  const [registrationError, setRegistrationError] = useState('')
  const nextTournament = tournaments[0]

  const handleRegistrationSuccess = () => {
    setSelectedTournament(null)
    // You could add a success message or other feedback here
  }

  const handleRegistrationError = (error: string) => {
    setRegistrationError(error)
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Banner Section */}
      <section className="relative bg-primary py-20 px-4">
        <div className="container mx-auto text-center">
          <motion.h1 
            className="text-5xl sm:text-6xl font-bold mb-4 text-white"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            2025 Tournament Schedule
          </motion.h1>
          <motion.p 
            className="text-xl sm:text-2xl text-white/90 max-w-3xl mx-auto mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Join us for an exciting season of competitive basketball
          </motion.p>
          
          {/* Countdown to next tournament */}
          <motion.div
            className="bg-white/10 backdrop-blur-sm rounded-lg p-6 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h2 className="text-xl font-semibold text-white mb-4">Next Tournament: {nextTournament.name}</h2>
            <CountdownTimer targetDate={nextTournament.date} />
          </motion.div>
        </div>
      </section>

      {/* Registration Fee Info */}
      <div className="bg-secondary/10 py-6">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-block bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-bold text-primary mb-2">Tournament Registration Fee</h2>
            <p className="text-lg">
              <span className="font-semibold text-secondary">$140</span>
              <span className="text-gray-600 ml-2">per team</span>
            </p>
          </div>
        </div>
      </div>

      {/* Tournament Schedule */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto space-y-4">
          {tournaments.map((tournament, index) => (
            <motion.div
              key={tournament.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex flex-col md:flex-row">
                {/* Calendar-style date display */}
                <div className="bg-secondary text-white p-4 md:w-32 flex flex-col items-center justify-center">
                  <div className="text-sm font-medium">{new Date(tournament.date).toLocaleString('default', { month: 'short' })}</div>
                  <div className="text-3xl font-bold">{new Date(tournament.date).getDate()}</div>
                  <div className="text-sm">{new Date(tournament.date).getFullYear()}</div>
                </div>

                <div className="flex-1 p-6">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div>
                      <h3 className="text-xl font-bold text-primary mb-2 md:mb-0">{tournament.name}</h3>
                      <div className="space-y-1 md:space-y-0 md:space-x-6 md:flex md:items-center text-gray-600">
                        <div className="flex items-center">
                          <MapPin className="w-5 h-5 mr-2 text-secondary" />
                          <span>{tournament.location}</span>
                        </div>
                        <div className="flex items-center">
                          <Clock className="w-5 h-5 mr-2 text-secondary" />
                          <span>Coming Soon</span>
                        </div>
                      </div>
                    </div>
                    {tournament.isInPersonOnly ? (
                      <button 
                        className="mt-4 md:mt-0 bg-secondary text-white py-2 px-6 rounded-full hover:bg-secondary/90 transition-colors duration-200 flex items-center justify-center space-x-2"
                      >
                        <Trophy className="w-5 h-5" />
                        <span>Register in Person<br />or Contact Coach Dorsette</span>
                      </button>
                    ) : (
                      <button 
                        onClick={() => setSelectedTournament(tournament)}
                        className="mt-4 md:mt-0 bg-secondary text-white py-2 px-6 rounded-full hover:bg-secondary/90 transition-colors duration-200 flex items-center justify-center space-x-2"
                      >
                        <Trophy className="w-5 h-5" />
                        <span>Register Now</span>
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Registration Modal */}
        {selectedTournament && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-lg shadow-xl max-h-[90vh] overflow-y-auto w-full max-w-3xl">
              <div className="p-4 border-b border-gray-200 flex justify-between items-center">
                <h2 className="text-xl font-bold text-primary">Tournament Registration</h2>
                <button 
                  onClick={() => setSelectedTournament(null)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  ×
                </button>
              </div>
              <div className="p-4">
                <Elements stripe={stripePromise}>
                  <TournamentRegistration
                    tournamentId={selectedTournament.id}
                    tournamentName={selectedTournament.name}
                    date={selectedTournament.date}
                    registrationFee={selectedTournament.registrationFee}
                    onSuccess={handleRegistrationSuccess}
                    onError={handleRegistrationError}
                  />
                </Elements>
              </div>
            </div>
          </div>
        )}

        {/* Contact Section */}
        <motion.div
          className="mt-12 bg-primary text-white p-8 rounded-lg text-center max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <h2 className="text-2xl font-bold mb-4">Questions About Registration?</h2>
          <p className="mb-6">Contact Coach Dorsette at 919-478-7954 or email sportsunlimited919@gmail.com</p>
        </motion.div>
      </div>
    </div>
  )
}

