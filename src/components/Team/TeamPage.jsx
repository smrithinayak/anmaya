

"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import { teamMembers } from "../../assets/data";
import DotsLayout from "../Static/layout";


const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5 },
  },
};

function TeamPage() {
  return (
    <DotsLayout> 
      <div className="relative z-10 container mx-auto py-16 px-6 pb-24">
        
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
            Our Team
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Meet the talented individuals who make our company thrive with their expertise and dedication.
          </p>
        </motion.div>

      
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {teamMembers.map((member) => (
            <motion.div
              key={member.id}
              className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 shadow-lg"
              variants={itemVariants}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >
              <h3 className="text-xl font-bold mb-1 text-white">{member.name}</h3>
              <p className="text-blue-400 mb-4">{member.role}</p>
              <p className="text-gray-300 mb-6">{member.bio}</p>

             
              <div className="flex space-x-4">
                {member.socials.linkedin && (
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
                )}
                {member.socials.github && (
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
                )}
                {member.socials.email && (
                  <motion.a
                    href={`mailto:${member.socials.email}`}
                    className="text-gray-400 hover:text-blue-400 transition-colors"
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Mail className="w-5 h-5" />
                    <span className="sr-only">Email</span>
                  </motion.a>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </DotsLayout>
  );
}

export default TeamPage;
