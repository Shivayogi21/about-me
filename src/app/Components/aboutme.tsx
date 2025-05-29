'use client'

import { motion } from 'framer-motion'
import OrbitingDots from './OrbitingDots' // canvas effect
import Image from 'next/image'

export default function AboutMe() {
  return (
    <section
      id="about"
      className="relative min-h-screen flex flex-col md:flex-row items-center justify-center px-6 py-16 bg-gray-900 text-white overflow-hidden"
    >
      {/* Orbiting Animation Behind Image */}
      <div className="relative w-[320px] h-[320px] flex justify-center items-center mb-10 md:mb-0 md:mr-16">
        <OrbitingDots />
        <Image
          src="/assets/images/shivayogi.jpg"
          alt="Shivayogi Tyapi"
          width={250}
          height={250}
          className="rounded-full object-cover border-4 border-white shadow-xl relative z-10"
        />
      </div>

      {/* Intro Text */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-2xl text-center md:text-left space-y-6"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-white">
          About <span className="text-pink-500">Me</span>
        </h2>
        <p className="text-lg text-gray-300 leading-relaxed">
          I'm <span className="font-bold text-pink-600">Shivayogi Tyapi</span>, a passionate full-stack Java developer with strong roots in backend engineering and modern frontend design.
          With hands-on experience at companies as an INTERN, like <span className="text-pink-400">RSB MedTech</span> and <span className="text-pink-400">Numetry Technologies</span>,
          I've built high-performance REST APIs, secured scalable systems, and developed premium websites using <span className="text-white font-semibold">Spring Boot, React, and Next.js</span>.
        </p>
        <p className="text-lg text-gray-300 leading-relaxed">
          I specialize in <span className="text-white font-semibold">Microservices, Docker, Spring Security, and REST APIs</span>, and I’m constantly pushing boundaries to build intuitive, responsive, and futuristic digital experiences.
          I combine my engineering mindset with design-driven thinking to deliver seamless user experiences.
        </p>
        <p className="text-lg text-gray-400 italic">
          "I don’t just write code — I engineer digital experiences that are fast, functional, and unforgettable."
        </p>
      </motion.div>
    </section>
  )
}
