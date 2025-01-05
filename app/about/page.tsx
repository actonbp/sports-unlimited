'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

const teamMembers = [
  {
    name: "Joshua",
    role: "Founder & CEO",
    image: "/images/joshua.jpg",
    bio: "As the Founder and CEO of Sports Unlimited, Joshua's vision and leadership drive our mission to empower youth through sports. His background in community outreach and program development ensures that we create impactful and inclusive programs for all youth."
  },
  {
    name: "Sebastian",
    role: "Co-Founder",
    image: "/images/sebastian.jpg",
    bio: "Sebastian, our Co-Founder, brings over 15 years of experience in youth sports management. With a Master's degree from Duke University, his expertise and passion for empowering young athletes significantly contribute to the strategic direction of Sports Unlimited."
  }
]

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <motion.h1 
        className="text-4xl font-bold mb-8 text-center text-primary"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        About Sports Unlimited
      </motion.h1>
      
      <motion.p 
        className="text-lg mb-8 text-center text-gray-700"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Sports Unlimited is dedicated to empowering youth through sports and making a positive 
        impact in the Durham community.
      </motion.p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="relative flex justify-center"
        >
          <div className="relative h-[500px] w-[80%] rounded-lg overflow-hidden shadow-lg bg-white">
            <Image
              src="/images/test_logo.png"
              alt="Sports Unlimited Team"
              fill
              className="object-contain p-4"
              priority
            />
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h2 className="text-2xl font-semibold mb-4 text-primary">Our Story</h2>
          <p className="text-gray-700 mb-4">
            Founded by a group of passionate coaches and community leaders, Sports Unlimited 
            has grown from a small local initiative to a comprehensive youth sports organization 
            serving thousands of young athletes across Durham.
          </p>
          <p className="text-gray-700 mb-4">
            We believe in the power of sports to transform lives, teach valuable life skills, and 
            create lasting friendships. Our programs are designed to be inclusive, fostering a 
            supportive environment where every child can thrive.
          </p>
        </motion.div>
      </div>

      <motion.section
        className="bg-white p-6 rounded-lg shadow-md mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <h2 className="text-2xl font-semibold mb-4 text-primary">Our Values</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>Inclusivity: We welcome athletes of all backgrounds and skill levels.</li>
          <li>Integrity: We promote fair play, honesty, and respect both on and off the field.</li>
          <li>Excellence: We strive for continuous improvement in all aspects of our programs.</li>
          <li>Community: We are committed to making a positive impact in Durham and beyond.</li>
          <li>Fun: We believe that sports should be enjoyable and create lasting memories.</li>
        </ul>
      </motion.section>

      <motion.section
        className="mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <h2 className="text-2xl font-semibold mb-6 text-primary text-center">Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              className="bg-white p-6 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
            >
              <div className="flex items-center mb-4">
                <Image
                  src={member.image}
                  alt={member.name}
                  width={80}
                  height={80}
                  className="rounded-full mr-4"
                />
                <div>
                  <h3 className="text-xl font-semibold text-primary">{member.name}</h3>
                  <p className="text-gray-600">{member.role}</p>
                </div>
              </div>
              <p className="text-gray-700">{member.bio}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      <motion.section
        className="text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.8 }}
      >
        <h2 className="text-2xl font-semibold mb-4 text-primary">Join Us in Shaping Durham's Future</h2>
        <p className="text-gray-700 mb-6">
          Whether you're an athlete, coach, parent, or community member, there's a place for you at Sports Unlimited. 
          Join us in our mission to empower Durham's youth through the transformative power of sports.
        </p>
        <Link href="/get-involved" className="bg-secondary text-white py-3 px-6 rounded-full text-lg font-semibold hover:bg-opacity-90 transition-colors duration-200 inline-block">
          Get Involved Today
        </Link>
      </motion.section>
    </div>
  )
}

