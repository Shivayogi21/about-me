'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Lottie from 'react-lottie-player'

// import animationData from '../public/animations/hero-bg.json' // Optional Lottie background

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen bg-gradient-to-r from-black via-gray-900 to-gray-500 text-white shadow-md flex items-center justify-center overflow-hidden px-6">
      {/* Optional Lottie Background Animation */}
      {/* <Lottie
        loop
        animationData={animationData}
        play
        className="absolute top-0 left-0 w-full h-full object-cover opacity-20 z-0"
      /> */}

      {/* Main Content */}
      <div className="z-10 max-w-7xl w-full flex flex-col md:flex-row items-center justify-between gap-10">
        {/* Left Side: Text */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-white space-y-6 md:w-1/2"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
            Designing digital experiences that make people stop and scroll.
          </h1>
          <p className="text-lg md:text-xl text-gray-300">
            Hi, I’m <span className="font-bold text-pink-400">Your Name</span>, a passionate front-end developer focused on building modern, accessible, and beautifully interactive websites.
          </p>
        </motion.div>

        {/* Right Side: Profile Image */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="md:w-1/2 flex justify-center"
        >
 <Image
    src="/assets/images/shivayogi.jpg" // ✅ Correct path
    alt="Profile Picture"
    width={300}
    height={300}
    className="rounded-full object-cover border-4 border-white shadow-xl"
  />
        </motion.div>
      </div>
    </section>
  )
}
