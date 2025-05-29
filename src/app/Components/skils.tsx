'use client'

import {
  SiPython,
  SiSpringboot,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiBootstrap,
  SiReact,
  SiNextdotjs,
  SiMysql,
  SiDocker,
  SiMicrodotblog,
  SiTailwindcss,
  SiOracle,
} from 'react-icons/si'
import { FaJava, FaNetworkWired } from 'react-icons/fa'
import { motion } from 'framer-motion'

const skills = [
  { name: 'Java', icon: <FaJava className="text-orange-600" /> },
  { name: 'Python', icon: <SiPython className="text-yellow-400" /> },
  { name: 'Spring Boot', icon: <SiSpringboot className="text-green-500" /> },
  { name: 'HTML', icon: <SiHtml5 className="text-orange-500" /> },
  { name: 'CSS', icon: <SiCss3 className="text-blue-500" /> },
  { name: 'JavaScript', icon: <SiJavascript className="text-yellow-300" /> },
  { name: 'Bootstrap', icon: <SiBootstrap className="text-purple-600" /> },
  { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-teal-400" /> },
  { name: 'React', icon: <SiReact className="text-cyan-400" /> },
  { name: 'Next.js', icon: <SiNextdotjs className="text-white" /> },
  { name: 'SQL', icon: <SiMysql className="text-blue-400" /> },
  { name: 'Oracle SQL', icon: <SiOracle className="text-red-500" /> },
  { name: 'REST API', icon: <FaNetworkWired className="text-pink-500" /> },
  { name: 'Docker', icon: <SiDocker className="text-blue-300" /> },
  { name: 'Microservices', icon: <SiMicrodotblog className="text-pink-400" /> },
]

// Helper to duplicate array for seamless loop
const loopedSkills = [...skills, ...skills]

export default function SkillsSection() {
  return (
    <section className="w-full bg-gray-900 py-16 text-white overflow-hidden">
      <h2 className="text-4xl font-bold text-center mb-10">
        My <span className="text-pink-500">Skills</span>
      </h2>

      <div className="relative w-full overflow-hidden">
        <motion.div
          initial={{ x: 0 }}
          animate={{ x: '-50%' }}
          transition={{ repeat: Infinity, duration: 25, ease: 'linear' }}
          className="flex gap-12 whitespace-nowrap w-max"
        >
          {loopedSkills.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center min-w-[100px] group"
            >
              <div className="text-4xl md:text-5xl group-hover:scale-110 transition-transform duration-300">
                {skill.icon}
              </div>
              <p className="mt-2 text-sm text-gray-300 whitespace-nowrap">{skill.name}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
