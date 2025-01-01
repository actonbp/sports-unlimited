'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Calendar, Star, Users, ChevronDown, ChevronLeft, ChevronRight } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import WaitlistPopup from '@/components/WaitlistPopup'
import NewsTicker from '@/components/NewsTicker'

const carouselImages = [
  { src: '/images/basketball-player.jpg', alt: 'Basketball player dunking' },
  { src: '/images/soccer-kids.jpg', alt: 'Kids playing soccer' },
  { src: '/images/tennis-serve.jpg', alt: 'Tennis player serving' },
  { src: '/images/swimming-race.jpg', alt: 'Swimming competition' },
]

export default function Home() {
  const [bounceCount, setBounceCount] = useState(0)
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [currentImage, setCurrentImage] = useState(0)

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
    <div className="min-h-screen bg-background">
      <NewsTicker />
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/durham-skyline.png"
            alt="Durham City Skyline"
            fill
            className="object-contain"
            quality={100}
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-blue-900/20"></div>
        </div>
        <div className="relative z-10 text-center text-white px-4 max-w-md mx-auto">
          <motion.h1 
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Empowering Durham's Youth
          </motion.h1>
          <motion.p 
            className="text-base sm:text-lg md:text-xl mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Join Sports Unlimited for an unforgettable sports experience in the heart of Durham!
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <Link href="/tournaments" className="bg-secondary text-accent px-6 py-3 rounded-full text-base sm:text-lg font-semibold hover:bg-opacity-90 transition-colors duration-300 inline-block">
              Explore Programs
            </Link>
          </motion.div>
        </div>
        <motion.div 
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 0.6, repeat: Infinity, repeatType: "reverse" }}
        >
          <ChevronDown size={32} className="text-accent" />
        </motion.div>
      </section>

      <section className="py-10 sm:py-12 md:py-16 px-4 bg-accent">
        <div className="container mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-6 sm:mb-8 md:mb-10 text-primary">Sports in Action</h2>
          <div className="relative w-full max-w-lg mx-auto h-[250px] sm:h-[300px] md:h-[350px] overflow-hidden rounded-lg shadow-xl">
            <AnimatePresence initial={false}>
              <motion.img
                key={currentImage}
                src={carouselImages[currentImage].src}
                alt={carouselImages[currentImage].alt}
                className="absolute w-full h-full object-cover"
                initial={{ opacity: 0, x: 300 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -300 }}
                transition={{ duration: 0.5 }}
              />
            </AnimatePresence>
            <button
              onClick={prevImage}
              className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 p-2 rounded-full"
              aria-label="Previous image"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 p-2 rounded-full"
              aria-label="Next image"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </section>

      <section className="py-10 sm:py-12 md:py-16 px-4 bg-background">
        <div className="container mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-6 sm:mb-8 md:mb-10 text-primary">Why Choose Sports Unlimited?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[
              { icon: Star, title: "Expert Coaching", description: "Learn from Durham's best coaches who are passionate about youth development" },
              { icon: Users, title: "Team Building", description: "Develop lifelong friendships and essential teamwork skills" },
              { icon: Calendar, title: "Year-round Programs", description: "Stay active all year with our diverse range of sports programs" }
            ].map((item, index) => (
              <motion.div 
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg text-center"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                whileHover={{ scale: 1.03 }}
              >
                <item.icon size={40} className="mx-auto mb-4 text-secondary" />
                <h3 className="text-lg font-semibold mb-2 text-primary">{item.title}</h3>
                <p className="text-sm text-gray-700">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-10 sm:py-12 md:py-16 px-4 bg-primary text-accent">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">Ready to Join the Fun?</h2>
          <p className="text-base sm:text-lg md:text-xl mb-6">Tap the basketball to see how excited we are to have you!</p>
          <motion.div
            className="inline-block cursor-pointer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={handleBounce}
          >
            <Image
              src="/images/basketball.png"
              alt="Basketball"
              width={60}
              height={60}
            />
          </motion.div>
          <p className="mt-4 text-xl sm:text-2xl font-bold">Bounces: {bounceCount}</p>
          <Link href="/registration" className="mt-6 inline-block bg-secondary text-accent px-6 py-3 rounded-full text-base sm:text-lg font-semibold hover:bg-opacity-90 transition-colors duration-300">
            Sign Up Now
          </Link>
        </div>
      </section>

      <section className="py-10 sm:py-12 md:py-16 px-4 bg-background">
        <div className="container mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-6 sm:mb-8 md:mb-10 text-primary">What Our Athletes Say</h2>
          <div className="relative h-48">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className="absolute w-full"
                initial={{ opacity: 0 }}
                animate={{ opacity: currentTestimonial === index ? 1 : 0 }}
                transition={{ duration: 0.5 }}
              >
                <blockquote className="text-center">
                  <p className="text-base sm:text-lg md:text-xl mb-4 text-gray-700 italic">"{testimonial.quote}"</p>
                  <footer className="text-primary font-semibold text-sm sm:text-base">{testimonial.name}, age {testimonial.age}</footer>
                </blockquote>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-10 sm:py-12 md:py-16 px-4 bg-secondary text-accent">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8">Upcoming Events</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[
              { title: "Summer Basketball Camp", date: "July 15-20, 2023" },
              { title: "Soccer Skills Workshop", date: "August 5-7, 2023" },
              { title: "Fall Sports Open House", date: "September 1, 2023" }
            ].map((event, index) => (
              <motion.div
                key={index}
                className="bg-accent text-primary p-4 sm:p-6 rounded-lg shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <h3 className="text-lg sm:text-xl font-semibold mb-2">{event.title}</h3>
                <p className="text-sm text-gray-700">{event.date}</p>
              </motion.div>
            ))}
          </div>
          <Link href="/events" className="mt-6 sm:mt-8 inline-block bg-accent text-secondary px-6 py-3 rounded-full text-base sm:text-lg font-semibold hover:bg-opacity-90 transition-colors duration-300">
            View All Events
          </Link>
        </div>
      </section>

      <WaitlistPopup />
    </div>
  )
}

