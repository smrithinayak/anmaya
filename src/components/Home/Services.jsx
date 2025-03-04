import { motion } from "framer-motion";
import { orgData } from "../../assets/data";
import { useNavigate } from "react-router-dom";

const ServicesSection = () => {
  const navigate = useNavigate();
  const toAllServices = () => {
    navigate("/services");
  };
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const staggerChildren = {
    visible: { transition: { staggerChildren: 0.1 } },
  };

  // Slice the first 3 services
  const displayedServices = orgData.services.slice(0, 3);

  return (
    <motion.section
      id="services"
      className="py-24 px-6 md:px-12 lg:px-24 "
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={staggerChildren}
    >
      <motion.h2 className="text-title-gradient-custom" variants={fadeInUp}>
        Our Services
      </motion.h2>
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12"
        variants={staggerChildren}
      >
        {displayedServices.map((service) => (
          <motion.div
            key={service.id}
            className="card-bg-gradient-custom p-8 shadow-lg hover:shadow-xl transition-all duration-300 rounded-xl"
            variants={fadeInUp}
            whileHover={{
              boxShadow: "0 0 20px rgba(59, 130, 246, 0.3)",
            }}
          >
            <service.icon className="h-10 w-10 mb-4 animate-bounce" />
            <h3 className="card-text-gradient-custom">{service.title}</h3>
            <p className="text-gray-300">{service.description}</p>
          </motion.div>
        ))}
      </motion.div>
      <div className="w-full flex justify-center mt-12">
        <button
          onClick={toAllServices}
          className="relative border-[1px] border-gray-800 hover:border-white inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold text-gray-800 transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-gray-50 group"
        >
          <span className="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-gray-700 group-hover:h-full"></span>
          <span className="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
            <svg
              className="w-5 h-5 text-nuetral-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              ></path>
            </svg>
          </span>
          <span className="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
            <svg
              className="w-5 h-5 text-gray-50"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              ></path>
            </svg>
          </span>
          <span className="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white">
            View All Services
          </span>
        </button>
      </div>
    </motion.section>
  );
};

export default ServicesSection;
