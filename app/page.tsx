'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Calendar, Star, Users, ChevronDown, ChevronLeft, ChevronRight } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import WaitlistPopup from '@/components/WaitlistPopup'
import NewsTicker from '@/components/NewsTicker'

const heroImages = [
  '/images/slides_image-1.jpg',
  '/images/slides_image-2.jpg',
  '/images/slides_image-3.jpg',
  '/images/slides_image-4.png',
  '/images/slides_image-5.jpg',
]

const carouselImages = [
  {
    src: '/images/IMG_7701.jpg',
    alt: 'Player Registration',
    title: 'Player Registration'
  },
  {
    src: '/images/IMG_7702.jpg',
    alt: 'Team Meeting',
    title: 'Team Meeting'
  },
  {
    src: '/images/IMG_7703.jpg',
    alt: 'Community Event',
    title: 'Community Event'
  },
  {
    src: '/images/IMG1.png',
    alt: 'Action Shot',
    title: 'Action Shot'
  }
]

export default function Home() {
  const [currentImage, setCurrentImage] = useState(0)
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [bounceCount, setBounceCount] = useState(0)

  const testimonials = [
    { name: "Sarah J.", age: 14, quote: "Sports Unlimited changed my life. I've made new friends and improved my basketball skills!" },
    { name: "Michael T.", age: 16, quote: "The coaches here are amazing. They've helped me become a better athlete and person." },
    { name: "Emily R.", age: 12, quote: "I love the positive environment at Sports Unlimited. It's always fun to come here!" },
  ]

  useEffect(() => {
    const testimonialInterval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    const imageInterval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % carouselImages.length)
    }, 5000)

    return () => {
      clearInterval(testimonialInterval)
      clearInterval(imageInterval)
    }
  }, [testimonials.length])

  const handleBounce = () => {
    setBounceCount(prevCount => prevCount + 1)
  }

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % carouselImages.length)
  }

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + carouselImages.length) % carouselImages.length)
  }

  return (
    <div>
      <section className="relative min-h-screen bg-black">
        <div className="absolute inset-0 w-full h-full overflow-hidden">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="/videos/front_video.MOV" type="video/quicktime" />
          </video>
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>

        <div className="relative z-10 text-center text-white px-4 max-w-3xl mx-auto flex flex-col justify-center items-center min-h-screen">
          <motion.h1 
            className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6 drop-shadow-[0_5px_5px_rgba(0,0,0,0.7)] text-white [text-shadow:_2px_2px_10px_rgb(0_0_0_/_70%)]"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            We Play Hard
          </motion.h1>
          <motion.p 
            className="text-xl sm:text-2xl md:text-3xl mb-8 drop-shadow-[0_3px_3px_rgba(0,0,0,0.7)] [text-shadow:_1px_1px_8px_rgb(0_0_0_/_60%)]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Building Community Through Sports
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <Link 
              href="/tournaments" 
              className="bg-gradient hover:opacity-90 text-white px-6 py-3 rounded-full text-base sm:text-lg font-semibold transition-all duration-300 inline-block drop-shadow-[0_2px_2px_rgba(0,0,0,0.5)]"
            >
              Explore Tournaments
            </Link>
          </motion.div>
        </div>
        <motion.div 
          className="absolute bottom-16 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 0.6, repeat: Infinity, repeatType: "reverse" }}
        >
          <ChevronDown size={32} className="text-white" />
        </motion.div>
        <NewsTicker />
      </section>

      <section className="py-10 sm:py-12 md:py-16 px-4 bg-black text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 text-white">Ready to Play Hard?</h2>
          <p className="text-base sm:text-lg md:text-xl mb-6 text-white/90">Tap the basketball to see how excited we are to have you!</p>
          <div className="relative h-[200px] flex items-center justify-center">
            <motion.div
              className="absolute bottom-0 bg-white/20 h-2 w-[80px] rounded-full"
              animate={bounceCount > 0 ? {
                width: ["80px", "40px", "80px"],
                opacity: [0.2, 0.5, 0.2],
                x: "-50%",
              } : {}}
              style={{ left: "50%" }}
              transition={{ duration: 1, ease: "easeOut" }}
            />
            <motion.div
              className="inline-block cursor-pointer absolute bottom-0"
              whileHover={{ scale: 1.1, rotate: 10 }}
              whileTap={{ scale: 0.9 }}
              onClick={handleBounce}
              animate={bounceCount > 0 ? {
                y: [0, -120, 0],
                scaleY: [1, 1.1, 0.8, 1],
                scaleX: [1, 0.9, 1.1, 1],
                rotate: [0, 360, 720],
                transition: {
                  duration: 1,
                  ease: "easeOut",
                  times: [0, 0.5, 1],
                  scaleY: {
                    times: [0, 0.4, 0.7, 1]
                  },
                  scaleX: {
                    times: [0, 0.4, 0.7, 1]
                  }
                }
              } : {}}
            >
              <div className="relative z-10 w-[120px] h-[120px] rounded-full overflow-hidden">
                <Image
                  src="/images/basketball.jpg"
                  alt="Basketball"
                  width={120}
                  height={120}
                  className="w-full h-full object-contain"
                  priority
                  loading="eager"
                  quality={100}
                />
              </div>
            </motion.div>
          </div>
          <motion.p 
            className="mt-4 text-xl sm:text-2xl font-bold text-white"
            animate={bounceCount > 0 ? { scale: [1, 1.2, 1] } : {}}
            transition={{ duration: 0.5 }}
          >
            Bounces: {bounceCount}
          </motion.p>
          <Link 
            href="/registration" 
            className="mt-6 inline-block bg-white text-black px-6 py-3 rounded-full text-base sm:text-lg font-semibold hover:bg-opacity-90 transition-colors duration-300 hover:scale-105 transform"
          >
            Sign Up Now
          </Link>
        </div>
      </section>

      <section className="py-10 sm:py-12 md:py-16 px-4 bg-primary text-white">
        <div className="container mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-6 sm:mb-8 md:mb-10 text-white">Why Choose Sports Unlimited?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[
              { icon: Star, title: "Expert Coaching", description: "Learn from Durham's best coaches who are passionate about youth development" },
              { icon: Users, title: "Team Building", description: "Develop lifelong friendships and essential teamwork skills" },
              { icon: Calendar, title: "Year-round Programs", description: "Stay active all year with our diverse range of sports programs" }
            ].map((item, index) => (
              <motion.div 
                key={index}
                className="bg-white/10 p-6 rounded-lg shadow-lg text-center transform hover:scale-105 transition-transform duration-200"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                whileHover={{ scale: 1.03 }}
              >
                <item.icon size={40} className="mx-auto mb-4 text-white" />
                <h3 className="text-lg font-semibold mb-2 text-white">{item.title}</h3>
                <p className="text-white/90">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-10 sm:py-12 md:py-16 px-4 bg-secondary text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8 text-white">Upcoming Events</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[
              { title: "Summer Basketball Camp", date: "July 15-20, 2025" },
              { title: "Soccer Skills Workshop", date: "August 5-7, 2025" },
              { title: "Fall Sports Open House", date: "September 1, 2025" }
            ].map((event, index) => (
              <motion.div
                key={index}
                className="bg-white/10 p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-200"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <h3 className="text-lg sm:text-xl font-semibold mb-2 text-white">{event.title}</h3>
                <p className="text-white/80">{event.date}</p>
              </motion.div>
            ))}
          </div>
          <Link 
            href="/events" 
            className="mt-8 inline-block bg-white text-secondary px-8 py-3 rounded-full text-lg font-semibold hover:bg-opacity-90 transition-all duration-300 hover:scale-105 transform shadow-lg"
          >
            View All Events
          </Link>
        </div>
      </section>

      <WaitlistPopup />
    </div>
  )
}

