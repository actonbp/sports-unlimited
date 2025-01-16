'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

export default function SaveSportsPage() {
    return (
        <>
            {/* Custom Navigation */}
            <nav className="bg-black text-white py-4 px-6 shadow-lg">
                <div className="container mx-auto flex justify-between items-center">
                    <Link href="/" className="flex items-center gap-2">
                        <Image
                            src="/images/logos/save_logo.PNG"
                            alt="SAVE Sports Logo"
                            width={50}
                            height={50}
                            className="object-contain"
                        />
                    </Link>
                    <div className="flex gap-6">
                        <Link href="/" className="hover:text-[#D21312] transition-colors">
                            Back to Main Site
                        </Link>
                    </div>
                </div>
            </nav>

            <main className="min-h-screen bg-black">
                {/* Hero Section */}
                <section className="relative min-h-[60vh] flex items-center justify-center">
                    <div className="absolute inset-0">
                        <Image
                            src="/images/slides_image-2.jpg"
                            alt="SAVE Sports Background"
                            fill
                            className="object-cover"
                            priority
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                    </div>
                    <div className="relative z-10 text-center px-4">
                        <motion.h1
                            className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6 text-white"
                            initial={{ opacity: 0, y: -50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            SAVE Sports
                        </motion.h1>
                        <motion.p
                            className="text-xl sm:text-2xl md:text-3xl text-white/90 max-w-3xl mx-auto"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            Sports Against Violence Everywhere
                        </motion.p>
                    </div>
                </section>

                {/* Announcement Section */}
                <div className="bg-black py-16">
                    <div className="container mx-auto px-4">
                        <motion.div 
                            className="bg-[#1a1a1a] text-white rounded-lg shadow-xl p-8 max-w-4xl mx-auto border border-[#D21312]"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-8">
                                <Image
                                    src="/images/logos/save_logo.PNG"
                                    alt="SAVE Sports Logo"
                                    width={200}
                                    height={200}
                                    className="object-contain"
                                />
                                <div className="text-[#D21312] text-4xl font-bold">×</div>
                                <Image
                                    src="/images/logos/NXT_logo.JPEG"
                                    alt="PUMA NXT Circuit Logo"
                                    width={200}
                                    height={200}
                                    className="object-contain"
                                />
                            </div>
                            <h2 className="text-3xl font-bold mb-4 text-center">Breaking News!</h2>
                            <p className="text-xl mb-4 text-center text-gray-300">
                                SAVE Sports is proud to announce our official partnership with the prestigious PUMA NXT Circuit!
                            </p>
                            <div className="text-center mt-8">
                                <button className="bg-[#D21312] text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-[#b30f0f] transition-colors duration-300">
                                    Learn More
                                </button>
                            </div>
                        </motion.div>
                    </div>
                </div>

                {/* Contact Information Banner */}
                <div className="bg-[#D21312] py-6">
                    <div className="container mx-auto px-4">
                        <div className="text-center text-white">
                            <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
                            <p className="text-lg mb-2">
                                Coach Dorsette @ 919-478-7954
                            </p>
                            <p className="text-lg">
                                Email: savesportsbball@gmail.com
                            </p>
                        </div>
                    </div>
                </div>

                {/* Tryout Location Banner */}
                <div className="bg-black py-6 border-t border-b border-[#D21312]">
                    <div className="container mx-auto px-4">
                        <div className="text-center text-white">
                            <h2 className="text-2xl font-bold mb-4">Tryout Location</h2>
                            <p className="text-xl mb-2">
                                909 Liberty Street<br />
                                Durham, NC
                            </p>
                        </div>
                    </div>
                </div>

                {/* Tryout Schedule Section */}
                <div className="bg-[#1a1a1a] py-16">
                    <div className="container mx-auto px-4">
                        <motion.div 
                            className="max-w-4xl mx-auto"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <h2 className="text-3xl font-bold mb-8 text-center text-white">SAVE Sports Tryout Dates</h2>
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="bg-black p-6 rounded-lg border border-[#D21312]">
                                    <h3 className="text-xl font-bold mb-3 text-[#D21312]">5th Grade Girls</h3>
                                    <p className="text-white mb-2">January 18</p>
                                    <p className="text-white mb-2">10am-12pm</p>
                                    <p className="text-gray-300">909 Liberty Street<br />Durham, NC</p>
                                </div>

                                <div className="bg-black p-6 rounded-lg border border-[#D21312]">
                                    <h3 className="text-xl font-bold mb-3 text-[#D21312]">8th Grade Boys</h3>
                                    <p className="text-white mb-2">January 19</p>
                                    <p className="text-white mb-2">1-2pm</p>
                                    <p className="text-gray-300">909 Liberty Street<br />Durham, NC</p>
                                </div>

                                <div className="bg-black p-6 rounded-lg border border-[#D21312]">
                                    <h3 className="text-xl font-bold mb-3 text-[#D21312]">15U, 16U, 17U</h3>
                                    <p className="text-white mb-2">January 19</p>
                                    <p className="text-white mb-2">2:30-4pm</p>
                                    <p className="text-gray-300">909 Liberty Street<br />Durham, NC</p>
                                </div>

                                <div className="bg-black p-6 rounded-lg border border-[#D21312]">
                                    <h3 className="text-xl font-bold mb-3 text-[#D21312]">5th-7th Grade Boys</h3>
                                    <p className="text-white mb-2">January 25</p>
                                    <p className="text-white mb-2">10am-12pm</p>
                                    <p className="text-gray-300">909 Liberty Street<br />Durham, NC</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>

                {/* Mission Section */}
                <div className="bg-[#1a1a1a] text-white py-16">
                    <div className="container mx-auto px-4">
                        <motion.div 
                            className="max-w-4xl mx-auto"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.6 }}
                        >
                            <h2 className="text-3xl font-bold mb-8 text-center">Our Mission</h2>
                            <p className="text-xl text-gray-300 text-center mb-12">
                                Sports Against Violence Everywhere emphasizes the use of sports to promote peace, 
                                reduce violence, and engage communities. We empower individuals through athletics, 
                                building character and fostering positive change.
                            </p>
                            <div className="grid md:grid-cols-2 gap-8">
                                <div className="bg-black p-6 rounded-lg border border-[#D21312]">
                                    <h3 className="text-xl font-semibold mb-4 text-[#D21312]">Character Development</h3>
                                    <p className="text-gray-300">
                                        We focus on building strong character through sports, emphasizing leadership, teamwork, and personal growth.
                                    </p>
                                </div>
                                <div className="bg-black p-6 rounded-lg border border-[#D21312]">
                                    <h3 className="text-xl font-semibold mb-4 text-[#D21312]">Athletic Excellence</h3>
                                    <p className="text-gray-300">
                                        Our program develops well-rounded athletes who excel both on and off the court.
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>

                {/* Contact Section */}
                <div className="bg-black text-white py-16">
                    <div className="container mx-auto px-4">
                        <motion.div 
                            className="max-w-4xl mx-auto text-center"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.6 }}
                        >
                            <h2 className="text-3xl font-bold mb-4">Join SAVE Sports</h2>
                            <p className="text-xl mb-4 text-gray-300">
                                Take the first step towards becoming a better athlete and leader.
                            </p>
                            <p className="text-lg mb-6 text-white">
                                Contact Coach Dorsette:<br />
                                Phone: 919-478-7954<br />
                                Email: savesportsbball@gmail.com
                            </p>
                            <Link href="/contact" className="bg-[#D21312] text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-[#b30f0f] transition-colors duration-300 inline-block">
                                Contact Us
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </main>
        </>
    )
}

