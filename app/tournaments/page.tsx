'use client'

import { motion } from 'framer-motion'
import { Calendar, MapPin, Trophy, Clock } from 'lucide-react'
import { useState, useEffect } from 'react'

interface Tournament {
  id: string;
  name: string;
  date: string;
  location: string;
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
    location: 'Durham, NC'
  },
  {
    id: '2',
    name: 'SU Hoops Challenge',
    date: 'February 15, 2025',
    location: 'Durham, NC'
  },
  {
    id: '3',
    name: 'SU Battle on Tobacco Road',
    date: 'February 22, 2025',
    location: 'Durham, NC'
  },
  {
    id: '4',
    name: 'SU March Jam Session',
    date: 'March 1, 2025',
    location: 'Durham, NC'
  },
  {
    id: '5',
    name: 'Tory Trueluck Invitational',
    date: 'March 15, 2025',
    location: 'Durham, NC'
  },
  {
    id: '6',
    name: 'SU Spring Showdown',
    date: 'March 29, 2025',
    location: 'Durham, NC'
  }
]

export default function TournamentsPage() {
  const nextTournament = tournaments[0]; // Assuming tournaments are sorted by date

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
                    <button 
                      className="mt-4 md:mt-0 bg-gray-200 text-gray-800 py-2 px-6 rounded-full hover:bg-gray-300 transition-colors duration-200 flex items-center justify-center space-x-2 cursor-not-allowed"
                    >
                      <Trophy className="w-5 h-5" />
                      <span>Registration Opening Soon</span>
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Contact Section */}
        <motion.div
          className="mt-12 bg-primary text-white p-8 rounded-lg text-center max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <h2 className="text-2xl font-bold mb-4">Want to Stay Updated?</h2>
          <p className="mb-6">Join our mailing list to be notified when tournament registration opens and receive exclusive early-bird pricing!</p>
          <button className="bg-white text-primary px-8 py-3 rounded-full font-semibold hover:bg-opacity-90 transition-colors duration-200">
            Get Notified
          </button>
        </motion.div>
      </div>
    </div>
  )
}

