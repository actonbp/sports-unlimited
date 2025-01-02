import { FC } from 'react'
import Link from 'next/link'

const navigationItems = [
  { name: 'Tournaments', href: '/tournaments' },
  { name: 'Training', href: '/training' },
  { name: 'SAVE', href: '/save' },
  { name: 'Sponsorships', href: '/sponsorships' },
  { name: 'Podcast', href: '/podcast' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' }
]

const Navbar: FC = () => {
  return (
    <nav className="hidden md:flex space-x-8">
      {navigationItems.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className="text-accent hover:text-secondary transition-colors duration-200"
        >
          {item.name}
        </Link>
      ))}
    </nav>
  )
}

export default Navbar 