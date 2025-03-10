import { orgData } from "../../assets/data";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const ProjectPage = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white flex flex-col items-center">
      <div className="w-full py-12 px-6 md:px-12 lg:px-24">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <motion.h2 className="text-title-gradient-custom mb-12" variants={fadeInUp}>
            Websites
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {orgData.websites.map((project, index) => (
              <motion.div
                key={project.title}
                className="bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="object-cover w-full h-full transition-transform duration-300 hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                  <p className="text-gray-300 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span key={tag} className="px-3 py-1 text-sm bg-gray-700 rounded-full text-gray-300">
                        {tag}
                      </span>
                    ))}
                  </div>
                  {project.link && (
                    <motion.a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-blue-400 hover:text-purple-500 transition-colors"
                      whileHover={{ scale: 1.05 }}
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Visit Website
                    </motion.a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.h2 className="text-title-gradient-custom mb-12 mt-16" variants={fadeInUp}>
          Apps
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {orgData.apps.map((app, index) => (
            <motion.div
              key={app.title}
              className="bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={app.image || "/images/default.jpg"}
                  alt={app.title}
                  className="object-cover w-full h-full transition-transform duration-300 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold">{app.title}</h3>
                <p className="text-gray-300 mb-4">{app.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {app.tags?.map((tag) => (
                    <span key={tag} className="px-3 py-1 text-sm bg-gray-700 rounded-full text-gray-300">
                      {tag}
                    </span>
                  )) || <span className="text-gray-400 text-sm">No tags available</span>}
                </div>
                {app.link && (
                  <motion.a
                    href={app.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-blue-400 hover:text-purple-500 transition-colors"
                    whileHover={{ scale: 1.05 }}
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Visit App
                  </motion.a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;
