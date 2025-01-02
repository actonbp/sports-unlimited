import Link from 'next/link'
import { Facebook, Instagram, Twitter, Youtube } from 'lucide-react'

const navItems = [
  { name: 'Home', href: '/' },
  { name: 'Tournaments', href: '/tournaments' },
  { name: 'Training', href: '/training' },
  { name: 'SAVE Sports', href: '/save' },
  { name: 'About Us', href: '/about' },
  { name: 'Sponsorships', href: '/sponsorships' },
]

const socialLinks = [
  { name: 'Facebook', icon: Facebook, href: '#' },
  { name: 'Instagram', icon: Instagram, href: '#' },
  { name: 'Twitter', icon: Twitter, href: '#' },
  { name: 'YouTube', icon: Youtube, href: '#' },
]

export default function Footer() {
  return (
    <footer className="bg-primary text-accent py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {navItems.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="hover:text-secondary transition-colors duration-200">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-4">Contact Us</h3>
            <p>123 Main Street</p>
            <p>Durham, NC 27701</p>
            <p>Phone: (919) 555-0123</p>
            <p>Email: info@sportsunlimited.com</p>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-4 mb-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="hover:text-secondary transition-colors duration-200"
                  aria-label={link.name}
                >
                  <link.icon size={24} />
                </a>
              ))}
            </div>
            <h4 className="text-xl font-semibold mb-2">Join Our Team</h4>
            <Link 
              href="/careers" 
              className="bg-secondary text-accent px-4 py-2 rounded hover:bg-opacity-90 transition-colors duration-200 inline-block"
            >
              View Openings
            </Link>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-accent border-opacity-20 text-center">
          <p>&copy; 2023 Sports Unlimited LLC. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

