'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Shield, Heart, Users, ChevronDown, ChevronUp, Trophy } from 'lucide-react'

const initiatives = [
    {
        title: "Youth Mentorship Program",
        description: "Pair young athletes with experienced mentors to provide guidance both on and off the field.",
        impact: "Over 500 youth mentored in the past year, with 90% reporting improved confidence and leadership skills."
    },
    {
        title: "Community Sports Clinics",
        description: "Free sports clinics in underserved neighborhoods to promote physical activity and teach fundamental skills.",
        impact: "Reached 1,000+ children across 10 Durham neighborhoods, introducing them to various sports and healthy habits."
    },
    {
        title: "Anti-Bullying Campaign",
        description: "Workshops and awareness programs to combat bullying in schools and sports teams.",
        impact: "Implemented in 15 local schools, resulting in a 30% decrease in reported bullying incidents."
    }
]

export default function SaveSportsPage() {
    const [expandedInitiative, setExpandedInitiative] = useState<number | null>(null)

    return (
        <div>
            <div className="bg-[#0B4F94] text-white py-20 px-4 text-center">
                <motion.h1
                    className="text-5xl sm:text-6xl font-bold mb-4"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    SAVE Sports
                </motion.h1>
                <motion.h2
                    className="text-2xl sm:text-3xl"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    Sports Against Violence Everywhere
                </motion.h2>
            </div>

            <div className="container mx-auto px-4">
                <motion.div
                    className="max-w-4xl mx-auto py-16"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-[#0B4F94] text-center">Mission Statement</h2>
                    <p className="text-xl text-gray-700 text-center leading-relaxed">
                        Sports Against Violence Everywhere emphasizes the use of sports to promote peace, reduce violence, and engage communities. It aims to empower individuals, particularly youth, by helping them develop skills, build relationships, and foster respect and understanding through sports.
                    </p>
                </motion.div>

                <motion.h2
                    className="text-3xl sm:text-4xl font-bold mb-8 text-center text-[#0B4F94]"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    Our Legacy
                </motion.h2>

                <motion.p
                    className="text-lg mb-16 text-center text-gray-700 max-w-3xl mx-auto"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    Founded in 2007 by CEO Joshua Dorsett, SAVE Sports has been a cornerstone of Durham's basketball community.
                    Starting as a grassroots initiative, it has grown into a powerhouse program recently joining the prestigious PUMA circuit.
                </motion.p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
                    <motion.div
                        className="bg-white p-8 rounded-lg shadow-lg"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                    >
                        <div className="text-[#0B4F94] mb-4">
                            <Trophy className="w-12 h-12" />
                        </div>
                        <h3 className="text-2xl font-bold mb-4 text-[#0B4F94]">Elite Development</h3>
                        <p className="text-gray-700">
                            Our program focuses on developing elite athletes while instilling strong values and leadership skills.
                        </p>
                    </motion.div>

                    <motion.div
                        className="bg-white p-8 rounded-lg shadow-lg"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                    >
                        <div className="text-[#0B4F94] mb-4">
                            <Users className="w-12 h-12" />
                        </div>
                        <h3 className="text-2xl font-bold mb-4 text-[#0B4F94]">Community Impact</h3>
                        <p className="text-gray-700">
                            Using basketball as a tool to combat violence and create positive change in our community.
                        </p>
                    </motion.div>
                </div>

                <div className="bg-[#0B4F94] text-white py-12 px-6 rounded-lg text-center">
                    <motion.h2
                        className="text-3xl font-bold mb-6"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        Join SAVE Sports
                    </motion.h2>
                    <motion.p
                        className="text-lg mb-8 max-w-2xl mx-auto"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        Tryouts coming soon! Be part of a program that combines competitive excellence with community impact.
                    </motion.p>
                    <motion.button
                        className="bg-white text-[#0B4F94] px-8 py-3 rounded-full text-lg font-semibold hover:bg-opacity-90 transition-colors duration-200"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                    >
                        Register for Updates
                    </motion.button>
                </div>
            </div>
        </div>
    )
}

