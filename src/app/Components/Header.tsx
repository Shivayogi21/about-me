'use client'

import './Header.css'
import { motion } from 'framer-motion'
import { FaEnvelope, FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa'

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
        {/* Name with Gradient */}
        <motion.h1
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-xl sm:text-2xl md:text-3xl font-extrabold tracking-wide bg-gradient-to-r from-[#F6337C] via-purple-500 to-cyan-400 bg-clip-text text-transparent whitespace-nowrap"
        >
          Shivayogi Tyapi
        </motion.h1>

        {/* Social Icons */}
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex gap-4 sm:gap-6 text-lg sm:text-xl md:text-2xl"
        >
          <a
            href="https://github.com/Shivayogi21"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition-transform duration-200"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/shivayogi-tyapi-6622b1245"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition-transform duration-200"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://wa.me/9110432899"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition-transform duration-200"
          >
            <FaWhatsapp />
          </a>
          <a
            href="mailto:shivayogityapi2000@gmail.com"
            className="hover:scale-110 transition-transform duration-200"
          >
            <FaEnvelope />
          </a>
        </motion.div>
      </div>
    </header>
  )
}
