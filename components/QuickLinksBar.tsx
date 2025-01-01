import Link from 'next/link'
import { ClipboardList, DollarSign, Mail } from 'lucide-react'

const quickLinks = [
  { name: 'Registration', href: '/tournaments', icon: ClipboardList },
  { name: 'Sponsorship', href: '/sponsorships', icon: DollarSign },
  { name: 'Newsletter', href: '/community', icon: Mail },
]

export default function QuickLinksBar() {
  return (
    <div className="bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center gap-4">
          {quickLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="flex items-center bg-white rounded-full px-6 py-3 shadow-md hover:shadow-lg transition-shadow duration-200"
            >
              <link.icon className="text-blue-600 mr-2" size={24} />
              <span className="font-semibold">{link.name}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

