// import Pageheader from "../Static/pageheader"


// const AboutPage = () => {
//   return (
//     <div className="about-page">
//       <Pageheader pageText={"About Us"} />
//     </div>
//   )
// }

// export default AboutPage




"use client"

import { useEffect } from "react"
import { motion, useAnimation } from "framer-motion"
import { Cpu, Lightbulb, Users, Globe, Code, Zap, Award } from "lucide-react"

export default function AboutPage() {
  const controls = useAnimation()

  useEffect(() => {
    controls.start("visible")
  }, [controls])

  const fadeUp = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
    },
  }

  const staggerChildren = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
  }

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Background elements */}
      <div className="fixed inset-0 bg-gradient-to-br from-blue-900/20 to-black z-0"></div>
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_center,rgba(14,165,233,0.15),transparent_70%)] z-0"></div>

      {/* Content */}
      <div className="relative z-10">
        {/* Our Mission Section */}
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-4">
            <motion.div className="text-center mb-20" variants={fadeUp} initial="hidden" animate={controls}>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Mission</h2>
              <div className="w-24 h-1 bg-blue-500 mx-auto mb-10"></div>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We're on a mission to transform semiconductor education by creating innovative learning experiences that
                prepare professionals for the challenges of tomorrow's technology landscape.
              </p>
            </motion.div>

            <motion.div
              className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
              variants={staggerChildren}
              initial="hidden"
              animate={controls}
            >
              {[
                {
                  icon: <Cpu className="w-10 h-10" />,
                  title: "Technical Mastery",
                  description:
                    "Developing deep expertise in semiconductor design, fabrication, and testing through hands-on learning.",
                },
                {
                  icon: <Lightbulb className="w-10 h-10" />,
                  title: "Innovation Focus",
                  description:
                    "Fostering creative problem-solving and forward-thinking approaches to semiconductor challenges.",
                },
                {
                  icon: <Users className="w-10 h-10" />,
                  title: "Industry Connection",
                  description:
                    "Building strong relationships between learners and industry leaders to create real-world opportunities.",
                },
                {
                  icon: <Globe className="w-10 h-10" />,
                  title: "Global Impact",
                  description:
                    "Expanding semiconductor knowledge worldwide to address the growing demand for skilled professionals.",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  variants={scaleIn}
                  className="bg-gradient-to-br from-gray-900 to-black p-8 rounded-2xl border border-gray-800 hover:border-blue-500/50 transition-all duration-300 group"
                >
                  <div className="bg-blue-500/10 p-4 rounded-xl w-20 h-20 flex items-center justify-center mb-6 text-blue-400 group-hover:bg-blue-500/20 transition-colors duration-300">
                    {item.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                  <p className="text-gray-400">{item.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Who We Are Section */}
        <section className="py-24 bg-gradient-to-b from-black to-gray-900">
          <div className="max-w-7xl mx-auto px-4">
            <motion.div className="max-w-3xl mx-auto" initial="hidden" animate={controls} variants={fadeUp}>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center">Who We Are</h2>
              <div className="w-24 h-1 bg-blue-500 mx-auto mb-10"></div>
              <p className="text-xl text-gray-300 mb-8 text-center">
                Founded by industry veterans with decades of experience, Anmaya emerged from a vision to address the
                growing gap between academic semiconductor education and industry requirements.
              </p>
              <p className="text-xl text-gray-300 mb-12 text-center">
                Our team combines expertise from leading semiconductor companies, research institutions, and educational
                backgrounds to create a comprehensive learning ecosystem.
              </p>
              <motion.div className="grid grid-cols-2 md:grid-cols-4 gap-6" variants={staggerChildren}>
                {[
                  { value: "15+", label: "Years Experience" },
                  { value: "5000+", label: "Students Trained" },
                  { value: "50+", label: "Industry Partners" },
                  { value: "95%", label: "Placement Rate" },
                ].map((stat, index) => (
                  <motion.div key={index} className="text-center" variants={scaleIn}>
                    <div className="text-4xl font-bold text-blue-400 mb-2">{stat.value}</div>
                    <div className="text-gray-400">{stat.label}</div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* What We Do Section */}
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-4">
            <motion.div className="text-center mb-20" initial="hidden" animate={controls} variants={fadeUp}>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">What We Do</h2>
              <div className="w-24 h-1 bg-blue-500 mx-auto mb-10"></div>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our comprehensive approach to semiconductor education combines theoretical knowledge with practical
                experience, preparing professionals for the challenges of tomorrow.
              </p>
            </motion.div>

            <motion.div
              className="grid md:grid-cols-3 gap-8"
              variants={staggerChildren}
              initial="hidden"
              animate={controls}
            >
              {[
                {
                  icon: <Code className="w-12 h-12" />,
                  title: "Specialized Programs",
                  description:
                    "Tailored educational programs covering chip design, fabrication processes, testing methodologies, and emerging technologies.",
                },
                {
                  icon: <Zap className="w-12 h-12" />,
                  title: "Hands-on Labs",
                  description:
                    "State-of-the-art laboratory facilities providing practical experience with industry-standard tools and equipment.",
                },
                {
                  icon: <Award className="w-12 h-12" />,
                  title: "Industry Certifications",
                  description:
                    "Recognized certifications developed in partnership with leading semiconductor companies to validate expertise.",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  variants={scaleIn}
                  className="bg-gradient-to-br from-blue-900/30 to-gray-900 p-10 rounded-2xl border border-gray-800 hover:border-blue-500/50 transition-all duration-300"
                >
                  <div className="text-blue-400 mb-6">{item.icon}</div>
                  <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                  <p className="text-gray-400">{item.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  )
}


