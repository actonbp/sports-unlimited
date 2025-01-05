'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const navItems = [
  { name: 'Home', href: '/' },
  { name: 'Tournaments', href: '/tournaments' },
  { name: 'Training', href: '/training' },
  { name: 'SAVE', href: '/save' },
  { name: 'Sponsorships', href: '/sponsorships' },
  { name: 'Podcast', href: '/podcast' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
]

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <motion.header 
      className="fixed top-0 w-full z-50 bg-white shadow-sm"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <nav className="container mx-auto px-4 py-2">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center">
            <Image 
              src="/images/old_logo.JPG"
              alt="Sports Unlimited Logo"
              width={200}
              height={100}
              className="h-16 w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <motion.li key={item.name} whileHover={{ scale: 1.05 }}>
                <Link
                  href={item.href}
                  className={`text-gray-700 hover:text-primary transition-colors duration-200 text-base font-medium px-2 py-1 rounded-md
                    ${item.name === 'Tournaments' ? 'text-red-600' : ''}
                    ${item.name === 'Training' ? 'text-blue-600' : ''}
                    ${item.name === 'SAVE' ? 'text-blue-800' : ''}
                    ${item.name === 'Sponsorships' ? 'text-primary' : ''}
                    ${item.name === 'Podcast' ? 'text-purple-600' : ''}
                  `}
                >
                  {item.name}
                </Link>
              </motion.li>
            ))}
            <Link
              href="/registration"
              className="ml-4 bg-red-600 text-white px-4 py-2 rounded-md font-medium hover:bg-red-700 transition-colors duration-200"
            >
              Register Now
            </Link>
          </ul>

          {/* Mobile Navigation Toggle */}
          <motion.button
            className="md:hidden text-gray-700"
            onClick={() => setIsOpen(!isOpen)}
            whileTap={{ scale: 0.95 }}
            aria-expanded={isOpen}
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden mt-4 bg-white rounded-lg shadow-lg"
          >
            <ul role="menu" aria-label="Mobile navigation menu" className="py-2">
              {navItems.map((item) => (
                <motion.li 
                  key={item.name}
                  whileHover={{ scale: 1.02, backgroundColor: 'rgba(0,0,0,0.05)' }}
                >
                  <Link
                    href={item.href}
                    className={`block px-4 py-2 text-gray-700 hover:text-primary transition-colors duration-200 text-base font-medium
                      ${item.name === 'Tournaments' ? 'text-red-600' : ''}
                      ${item.name === 'Training' ? 'text-blue-600' : ''}
                      ${item.name === 'SAVE' ? 'text-blue-800' : ''}
                      ${item.name === 'Sponsorships' ? 'text-primary' : ''}
                      ${item.name === 'Podcast' ? 'text-purple-600' : ''}
                    `}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                </motion.li>
              ))}
              <motion.li whileHover={{ scale: 1.02 }}>
                <Link
                  href="/registration"
                  className="block mx-4 mt-2 bg-red-600 text-white px-4 py-2 rounded-md font-medium text-center hover:bg-red-700 transition-colors duration-200"
                  onClick={() => setIsOpen(false)}
                >
                  Register Now
                </Link>
              </motion.li>
            </ul>
          </motion.div>
        )}
      </nav>
    </motion.header>
  )
}

