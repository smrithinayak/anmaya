"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Mail } from "lucide-react"

// Team member data
const teamMembers = [
  {
    id: 1,
    name: "Vipul Nayak",
    role: "Monkey",
    bio: "Passionate about creating innovative solutions that make a difference.",
    image: "/placeholder.svg?height=300&width=300",
    socials: {
      linkedin: "https://linkedin.com",
      github: "https://github.com",
      email: "jane@example.com",
    },
  },
  {
    id: 2,
    name: "Smrithi",
    role: "Genius",
    bio: "Tech enthusiast with over 10 years of experience in software development.",
    image: "/placeholder.svg?height=300&width=300",
    socials: {
      linkedin: "https://linkedin.com",
      github: "https://github.com",
      email: "john@example.com",
    },
  },
  {
    id: 3,
    name: "Sanya R Poojari",
    role: "Genius",
    bio: "Creative mind focused on crafting beautiful and intuitive user experiences.",
    image: "/placeholder.svg?height=300&width=300",
    socials: {
      linkedin: "https://linkedin.com",
      github: "https://github.com",
      email: "alex@example.com",
    },
  },
]

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
}

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
}

export default function Team() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="py-12 text-center">
        <button
          onClick={() => window.history.back()}
          className="absolute top-6 left-6 text-gray-400 hover:text-blue-400 transition-colors"
        >
          ← Back
        </button>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Team</h1>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Meet the talented individuals who make our company thrive with their expertise and dedication.
        </p>
      </header>

      {/* Team Members */}
      <motion.div
        className="max-w-6xl mx-auto px-6 py-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {teamMembers.map((member) => (
          <motion.div
            key={member.id}
            className="bg-gray-900 rounded-xl overflow-hidden shadow-lg"
            variants={itemVariants}
            whileHover={{ y: -10, transition: { duration: 0.3 } }}
          >
            <div className="h-64 overflow-hidden">
              <img
                src={member.image || "/placeholder.svg"}
                alt={member.name}
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-1">{member.name}</h3>
              <p className="text-blue-400 mb-4">{member.role}</p>
              <p className="text-gray-400 mb-6">{member.bio}</p>

              {/* Social links */}
              <div className="flex space-x-4">
                <motion.a
                  href={member.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Linkedin className="w-5 h-5" />
                  <span className="sr-only">LinkedIn</span>
                </motion.a>
                <motion.a
                  href={member.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Github className="w-5 h-5" />
                  <span className="sr-only">GitHub</span>
                </motion.a>
                <motion.a
                  href={`mailto:${member.socials.email}`}
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Mail className="w-5 h-5" />
                  <span className="sr-only">Email</span>
                </motion.a>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}

