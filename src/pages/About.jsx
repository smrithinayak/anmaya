/* eslint-disable react-refresh/only-export-components */
import pageTransition from "../animations/pageTransition";
import AboutPage from "../components/About/AboutPage";

import { motion } from 'framer-motion';
import { Briefcase, Users, BookOpen } from 'lucide-react';

const AboutUs = () => {
  return (
    <section className="bg-gray-900 text-white py-16 px-6">
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto text-center"
      >
        <h2 className="text-4xl font-bold mb-4">About Anmaya Technologies</h2>
        <p className="text-lg text-gray-400">
          Anmaya Technologies is dedicated to bridging the gap between academia and industry by providing cutting-edge
          VLSI and embedded systems training. We specialize in FPGA design, System-on-Chip (SoC) development, and more.
        </p>
      </motion.div>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-gray-800 p-6 rounded-2xl shadow-lg flex flex-col items-center text-center"
        >
          <Briefcase size={48} className="text-blue-400 mb-4" />
          <h3 className="text-xl font-semibold">Industry-Ready Training</h3>
          <p className="text-gray-400 mt-2">We provide hands-on experience with real-world semiconductor industry tools.</p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-gray-800 p-6 rounded-2xl shadow-lg flex flex-col items-center text-center"
        >
          <Users size={48} className="text-green-400 mb-4" />
          <h3 className="text-xl font-semibold">Expert Mentors</h3>
          <p className="text-gray-400 mt-2">Our trainers are industry veterans with years of experience in VLSI and embedded systems.</p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-gray-800 p-6 rounded-2xl shadow-lg flex flex-col items-center text-center"
        >
          <BookOpen size={48} className="text-yellow-400 mb-4" />
          <h3 className="text-xl font-semibold">Interactive Learning</h3>
          <p className="text-gray-400 mt-2">We offer virtual labs, hands-on tutorials, and flexible online learning options.</p>
        </motion.div>
      </div>
    </section>
  );
};

export default pageTransition(About);
