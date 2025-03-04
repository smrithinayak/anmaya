"use client";
import { motion } from "framer-motion";
import { orgData } from "../../assets/data";
import {
  Database,
  Server,
  Cloud,
  ShieldCheck,
  BarChart,
  Settings,
} from "lucide-react";

const ServiceCard = ({ icon: Icon, title, description, delay }) => {
  return (
    <motion.div
      className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl shadow-lg p-6 transition-all hover:shadow-2xl hover:scale-105 text-white border border-gray-700"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -5 }}
    >
      <div className="flex flex-col items-start">
        <div className="p-3 bg-blue-600 bg-opacity-30 rounded-xl mb-4 shadow-md">
          <Icon className="w-8 h-8 text-white opacity-60" />
        </div>
        <h3 className="text-xl font-bold mb-3 text-white">{title}</h3>
        <p className="text-gray-300 mb-4">{description}</p>
      </div>
    </motion.div>
  );
};

const ServicePage = () => {
  // Use services directly from orgData
  const services = orgData.services;

  return (
    <div className="py-16 px-4 md:px-8 bg-gray-950">
      <div className="container mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
            Our Services
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            We provide a range of services to support your digital
            transformation.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={service.id}
              icon={service.icon}
              title={service.title}
              description={service.description}
              delay={index * 0.1} // Dynamically calculate delay based on index
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicePage;

// import { useLocation, useNavigate } from "react-router-dom";
// import { motion } from "framer-motion";
// import { orgData } from "../../assets/data";

// const ServiceCard = ({ icon: Icon, title, description, delay }) => {
//   return (
//     <motion.div
//       className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl shadow-lg p-6 transition-all hover:shadow-2xl hover:scale-105 text-white border border-gray-700"
//       initial={{ opacity: 0, y: 50 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.5, delay }}
//       whileHover={{ y: -5 }}
//     >
//       <div className="flex flex-col items-start">
//         <div className="p-3 bg-black rounded-xl mb-4 shadow-md">
//           <Icon className="w-8 h-8 text-white" />
//         </div>
//         <h3 className="text-xl font-bold mb-3 text-white">{title}</h3>
//         <p className="text-gray-300 mb-4">{description}</p>
//       </div>
//     </motion.div>
//   );
// };

// const ServicePage = () => {
//   const navigate = useNavigate();
//   const location = useLocation();

//   // Show full services if on /services/all, otherwise show featured services
//   const isAllServicesPage = location.pathname === "/services/all";
//   const servicesToShow = isAllServicesPage ? orgData.allServices : orgData.featuredServices;

//   return (
//     <div className="py-16 px-4 md:px-8 bg-gray-950 min-h-screen">
//       <div className="container mx-auto">
//         <motion.div
//           className="text-center mb-16"
//           initial={{ opacity: 0, y: -20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//         >
//           <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
//             {isAllServicesPage ? "All Services" : "Our Services"}
//           </h2>
//           <p className="text-gray-400 max-w-2xl mx-auto">
//             {isAllServicesPage
//               ? "Explore our full range of services to support your business."
//               : "We provide a range of services to support your digital transformation."}
//           </p>
//         </motion.div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {servicesToShow.map((service, index) => (
//             <ServiceCard
//               key={service.id}
//               icon={service.icon}
//               title={service.title}
//               description={service.description}
//               delay={index * 0.1}
//             />
//           ))}
//         </div>

//         {!isAllServicesPage && (
//           <div className="text-center mt-8">
//             <button
//               onClick={() => navigate("/services/all")}
//               className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition"
//             >
//               View More Services
//             </button>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default ServicePage;
