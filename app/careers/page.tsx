'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

const jobOpenings = [
  {
    title: "Summer Internship Program",
    description: "Join our team as a summer intern and gain valuable experience in sports management, coaching, and community outreach. This program is perfect for college students passionate about youth sports and looking to make a difference in the Durham community.",
    requirements: [
      "Currently enrolled in a related degree program (e.g., Sports Management, Physical Education, Business)",
      "Strong communication and interpersonal skills",
      "Passion for youth sports and community development",
      "Ability to work 20-30 hours per week during the summer months"
    ]
  },
  {
    title: "Youth Sports Coach (Part-time)",
    description: "We're seeking enthusiastic and dedicated coaches to lead our youth sports programs. This role involves teaching fundamental skills, organizing practices, and mentoring young athletes.",
    requirements: [
      "Previous coaching or playing experience in relevant sports",
      "Strong leadership and communication skills",
      "Ability to work evenings and weekends",
      "CPR and First Aid certification (or willingness to obtain)"
    ]
  },
  {
    title: "Sports Program Coordinator",
    description: "Join our administrative team to help organize and manage our various sports programs. This full-time position involves coordinating schedules, managing registrations, and ensuring smooth operations of our events and activities.",
    requirements: [
      "Bachelor's degree in Sports Management, Business Administration, or related field",
      "Excellent organizational and multitasking skills",
      "Proficiency in Microsoft Office and database management",
      "2+ years of experience in sports program management or similar role"
    ]
  }
]

export default function CareersPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <motion.h1 
        className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-center text-primary"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Join Our Team
      </motion.h1>
      
      <motion.p 
        className="text-base sm:text-lg md:text-xl mb-8 text-center text-gray-700"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Be part of our mission to empower youth through sports. Explore our current job openings and internship opportunities.
      </motion.p>

      <motion.div 
        className="mb-16 text-center"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <div className="bg-primary/90 p-12 rounded-lg shadow-lg inline-block max-w-3xl w-full">
          <h2 className="text-6xl md:text-7xl font-bold text-white mb-4">COMING SOON!</h2>
          <p className="text-white/90 text-2xl md:text-3xl mb-8">Stay Tuned for Exciting Opportunities</p>
          <div className="text-white text-xl">
            <p className="font-semibold mb-2">Contact:</p>
            <p>Coach Dorsette</p>
            <p>919-478-7954</p>
            <p>savesportsbball@gmail.com</p>
          </div>
        </div>
      </motion.div>

      <div className="space-y-8 filter blur-[3px] opacity-50">
        {jobOpenings.map((job, index) => (
          <motion.div 
            key={job.title}
            className="bg-white/80 p-6 rounded-lg shadow-md"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 0.5, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
          >
            <h2 className="text-2xl font-semibold mb-4 text-primary">{job.title}</h2>
            <p className="text-gray-700 mb-4">{job.description}</p>
            <h3 className="text-lg font-semibold mb-2 text-primary">Requirements:</h3>
            <ul className="list-disc pl-6 mb-4 text-gray-700">
              {job.requirements.map((req, i) => (
                <li key={i}>{req}</li>
              ))}
            </ul>
            <button 
              disabled
              className="inline-block bg-secondary text-white py-2 px-4 rounded hover:bg-opacity-90 transition-colors duration-200 opacity-75 cursor-not-allowed"
            >
              Coming Soon
            </button>
          </motion.div>
        ))}
      </div>

      <motion.div
        className="mt-12 text-center filter blur-[3px] opacity-50"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 0.5, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <h2 className="text-2xl font-semibold mb-4 text-primary">Ready to Make a Difference?</h2>
        <p className="text-gray-700 mb-6">
          If you're passionate about youth sports and want to contribute to our mission, we'd love to hear from you!
        </p>
        <button 
          disabled
          className="bg-secondary text-white py-3 px-6 rounded-full text-lg font-semibold hover:bg-opacity-90 transition-colors duration-200 inline-block opacity-75 cursor-not-allowed"
        >
          Coming Soon
        </button>
      </motion.div>
    </div>
  )
}

