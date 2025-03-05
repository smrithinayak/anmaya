import { motion } from "framer-motion";
import { aboutData, orgData } from "../../assets/data";
import DotsLayout from "../Static/layout";

const AboutPage = () => {
  return (
    <DotsLayout>
      <div className="container mx-auto py-16 px-6 pb-24">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
            {aboutData.title}
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            {aboutData.description}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-2xl font-semibold mb-6 text-white">
              Our Expertise
            </h3>
            <div className="grid grid-cols-3 gap-4">
              {orgData.skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  className="bg-gray-800 rounded-lg p-4 text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <div className="text-3xl mb-2">{skill.icon}</div>
                  <p className="text-sm text-gray-300">{skill.name}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 shadow-lg"
          >
            <h3 className="text-2xl font-semibold mb-6 text-white">
              Our Mission
            </h3>
            <p className="text-gray-300 leading-relaxed">
              At {orgData.name}, we are passionate about delivering innovative 
              technology solutions that transform businesses. Our team of 
              experienced developers is dedicated to creating custom software, 
              web, and mobile applications that meet the unique needs of our clients.
            </p>
            <div className="mt-6 flex items-center">
              <div className="mr-4">
                <div className="text-4xl font-bold text-blue-500">
                  {orgData.techStack.length}+
                </div>
                <p className="text-gray-400 text-sm">Technologies</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-purple-500">
                  {orgData.skills.length}+
                </div>
                <p className="text-gray-400 text-sm">Skills</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </DotsLayout>
  );
};

export default AboutPage;