'use client'

import { motion } from 'framer-motion'
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa'

const projects = [
  {
    title: 'RSB MedTech Company Website',
    duration: 'Aug 2024 – Oct 2024',
    role: 'ront-end-Developer Intern',
    stack: ['Next.js', 'React', 'Tailwind CSS', 'Node.js', 'MongoDB'],
    description:
      'Built a responsive website for RSB MedTech to enhance user engagement, SEO, and cross-device compatibility.',
    github: 'https://github.com/Shivayogi21/rsbooster',
    live: 'https://rsbooster-c1e9-git-main-shivayogi21s-projects.vercel.app/',
  },
  {
    title: 'REST API for Social Media App',
    duration: 'Jan 2024 – Mar 2024',
    role: 'Backend Developer Intern',
    stack: ['Java', 'Spring Boot', 'MySQL', 'Docker'],
    description:
      'Developed RESTful APIs to handle user management with JWT security, CRUD operations and MySQL persistence.',
    github: 'https://github.com/Shivayogi21/Restful_WebServices',
  },
  {
    title: 'Myntra E-Commerce Clone',
    duration: 'Jan 2024 – Mar 2024',
    role: 'Frontend Developer Intern',
    stack: ['HTML', 'CSS', 'JavaScript'],
    description:
      'Cloned Myntra UI with cart, filters, and product pages, focusing on responsive design and user experience.',
    github: 'https://github.com/Shivayogi21/Myntra-Clone',
  },
  {
    title: 'Microservices Architecture App',
    duration: 'Jul 2023 – Sep 2023',
    role: 'Back-End Developer Intern',
    stack: ['Spring Boot', 'Spring Cloud', 'Eureka', 'Gateway'],
    description:
      'Built a microservices system including inventory, product, order, and notification services with service discovery.',
    github: 'https://github.com/Shivayogi21/',
  },
]

export default function ProjectsSection() {
  return (
    <section className="w-full bg-gray-900 py-20 px-6 text-white">
      <h2 className="text-center text-4xl font-bold mb-16">
        Featured <span className="text-pink-500">Projects</span>
      </h2>

      <div className="grid gap-10 md:grid-cols-2 max-w-7xl mx-auto">
        {projects.map((project, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.2 }}
            viewport={{ once: true }}
            className="bg-white/5 backdrop-blur-md rounded-xl shadow-xl p-6 border border-gray-700 hover:scale-[1.02] transition-transform duration-300"
          >
            <h3 className="text-2xl font-semibold text-pink-400">
              {project.title}
            </h3>
            <p className="text-sm text-gray-400">{project.role} | {project.duration}</p>
            <p className="mt-4 text-gray-300">{project.description}</p>
            <div className="flex flex-wrap gap-2 mt-4">
              {project.stack.map((tech, i) => (
                <span
                  key={i}
                  className="bg-pink-600/20 border border-pink-500 text-sm px-3 py-1 rounded-full text-pink-300"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="mt-6 flex gap-4">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-gray-300 hover:text-white transition"
                >
                  <FaGithub /> GitHub
                </a>
              )}
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-gray-300 hover:text-white transition"
                >
                  <FaExternalLinkAlt /> Live Site
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
