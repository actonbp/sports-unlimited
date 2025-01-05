'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'Tournaments', path: '/tournaments' },
  { name: 'Training', path: '/training' },
  { name: 'Community', path: '/community' },
  { name: 'About', path: '/about' },
  { name: 'Contact', path: '/contact' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-white/90 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-primary">
              Sports Unlimited
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            <div className="relative flex space-x-1">
              {navItems.map((item) => {
                const isActive = pathname === item.path
                return (
                  <Link
                    key={item.path}
                    href={item.path}
                    className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200
                      ${scrolled 
                        ? (isActive ? 'text-primary' : 'text-gray-600 hover:text-primary')
                        : (isActive ? 'text-white' : 'text-gray-200 hover:text-white')
                      }
                    `}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="bubble"
                        className={`absolute inset-0 rounded-lg ${
                          scrolled ? 'bg-blue-50' : 'bg-white/10'
                        }`}
                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                      />
                    )}
                    <span className="relative z-10">{item.name}</span>
                  </Link>
                )
              })}
            </div>
            <Link
              href="/registration"
              className={`ml-4 px-4 py-2 rounded-lg bg-secondary text-white font-medium text-sm
                transition-all duration-200 hover:bg-opacity-90 hover:scale-105
                ${scrolled ? 'shadow-md' : 'shadow-lg shadow-white/10'}
              `}
            >
              Register Now
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-lg ${
                scrolled ? 'text-gray-600' : 'text-white'
              }`}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <motion.div
        initial={false}
        animate={{ height: isOpen ? 'auto' : 0 }}
        transition={{ duration: 0.3 }}
        className="md:hidden overflow-hidden bg-white shadow-lg"
      >
        <div className="px-4 pt-2 pb-3 space-y-1">
          {navItems.map((item) => {
            const isActive = pathname === item.path
            return (
              <Link
                key={item.path}
                href={item.path}
                className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200
                  ${isActive 
                    ? 'bg-blue-50 text-primary'
                    : 'text-gray-600 hover:bg-gray-50 hover:text-primary'
                  }
                `}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            )
          })}
          <Link
            href="/registration"
            className="block px-3 py-2 rounded-md text-base font-medium bg-secondary text-white hover:bg-opacity-90 transition-colors duration-200"
            onClick={() => setIsOpen(false)}
          >
            Register Now
          </Link>
        </div>
      </motion.div>
    </nav>
  )
} 