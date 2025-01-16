'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Moon, Sun, Mic, Play } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

const podcastEpisodes = [
  {
    title: "The Impact of Youth Sports on Mental Health",
    description: "Discussing the positive effects of sports on young athletes' mental well-being.",
    duration: "45:30",
  },
  {
    title: "Nutrition for Young Athletes",
    description: "Learn about proper nutrition to fuel performance and growth.",
    duration: "38:15",
  },
  {
    title: "Balancing Academics and Athletics",
    description: "Strategies for success both on the field and in the classroom.",
    duration: "42:00",
  },
  {
    title: "Durham's Rising Stars",
    description: "Interviews with promising young athletes from our community.",
    duration: "50:45",
  },
]

interface PodcastPlatform {
  name: string;
  logo: string;
  url: string;
  altText: string;
}

const podcastPlatforms: PodcastPlatform[] = [
  {
    name: 'Apple Podcasts',
    logo: '/images/logos/apple_podcasts.png',
    url: '#',
    altText: 'Listen on Apple Podcasts'
  },
  {
    name: 'Spotify',
    logo: '/images/logos/spotify_logo.png',
    url: '#',
    altText: 'Listen on Spotify'
  },
  {
    name: 'Google Podcasts',
    logo: '/images/logos/google_podcasts.png',
    url: '#',
    altText: 'Listen on Google Podcasts'
  },
  {
    name: 'Stitcher',
    logo: '/images/logos/stitcher-logo-vector.png',
    url: '#',
    altText: 'Listen on Stitcher'
  }
]

export default function PodcastPage() {
  const [darkMode, setDarkMode] = useState(false)

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'}`}>
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <motion.h1 
            className="text-3xl md:text-4xl font-bold"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Sports Unlimited Podcast
          </motion.h1>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className={`p-2 rounded-full ${darkMode ? 'bg-yellow-400 text-gray-900' : 'bg-gray-800 text-white'}`}
            aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
          >
            {darkMode ? <Sun size={24} /> : <Moon size={24} />}
          </button>
        </div>
        
        <motion.p 
          className="text-lg mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Sports Unlimited's very own Podcast "Full Court Press" will be launching soon! We'll discuss the Durham hoops scene and beyond. We'll also be featuring guests from our community!
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <motion.div 
            className={`p-6 rounded-lg shadow-md ${darkMode ? 'bg-gray-800' : 'bg-white'}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h2 className="text-2xl font-semibold mb-4">Latest Episode</h2>
            <div className="flex items-center mb-4">
              <Mic className="w-8 h-8 mr-2 text-secondary" />
              <h3 className="text-xl font-semibold">{podcastEpisodes[0].title}</h3>
            </div>
            <p className="mb-4">
              {podcastEpisodes[0].description}
            </p>
            <div className="flex items-center justify-between">
              <button 
                className="flex items-center bg-secondary text-white py-2 px-4 rounded hover:bg-opacity-90 transition-colors duration-200 cursor-not-allowed opacity-75"
                disabled
              >
                <Play className="w-4 h-4 mr-2" />
                Coming Soon
              </button>
              <span>{podcastEpisodes[0].duration}</span>
            </div>
          </motion.div>

          <motion.div 
            className={`p-6 rounded-lg shadow-md ${darkMode ? 'bg-gray-800' : 'bg-white'}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h2 className="text-2xl font-semibold mb-4">Listen On</h2>
            <div className="grid grid-cols-2 gap-4">
              {podcastPlatforms.map((platform) => (
                <Link
                  key={platform.name}
                  href={platform.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center p-2 rounded-lg ${darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'} transition-colors duration-200`}
                >
                  <Image
                    src={platform.logo}
                    alt={`${platform.name} icon`}
                    width={32}
                    height={32}
                    className="mr-2"
                  />
                  <span>{platform.name}</span>
                </Link>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          className={`p-6 rounded-lg shadow-md ${darkMode ? 'bg-gray-800' : 'bg-white'}`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <h2 className="text-2xl font-semibold mb-4">All Episodes</h2>
          <ul className="space-y-4">
            {podcastEpisodes.map((episode, index) => (
              <li key={index} className={`p-4 rounded-lg ${darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'} transition-colors duration-200`}>
                <h3 className="text-lg font-semibold">{episode.title}</h3>
                <p className="text-sm mb-2">{episode.description}</p>
                <div className="flex justify-between items-center">
                  <button className="text-secondary hover:underline cursor-not-allowed opacity-75">Coming Soon</button>
                  <span className="text-sm">{episode.duration}</span>
                </div>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </div>
  )
}

