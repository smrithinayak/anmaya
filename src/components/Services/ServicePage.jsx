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
import DotsLayout from "../Static/layout";

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
    <DotsLayout>
      <div className="container mx-auto py-16 px-6 pb-24">
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
    </DotsLayout>
  );
};

export default ServicePage;







// "use client";
// import { motion } from "framer-motion";
// import { orgData } from "../../assets/data";
// import { Database, Server, Cloud, ShieldCheck, BarChart, Settings } from "lucide-react";
// import { Layout } from "lucide-react";

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
//         <div className="p-3 bg-blue-600 bg-opacity-30 rounded-xl mb-4 shadow-md">
//           <Icon className="w-8 h-8 text-white opacity-60" />
//         </div>
//         <h3 className="text-xl font-bold mb-3 text-white">{title}</h3>
//         <p className="text-gray-300 mb-4">{description}</p>
//       </div>
//     </motion.div>
//   );
// };

// const ServicePage = () => {
//   const services = orgData.services;

//   return (
//     <Layout> {/* Wrapped inside Layout */}
//       <div className="container mx-auto py-16 px-6">
//         <motion.div
//           className="text-center mb-16"
//           initial={{ opacity: 0, y: -20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//         >
//           <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
//             Our Services
//           </h2>
//           <p className="text-gray-400 max-w-2xl mx-auto">
//             We provide a range of services to support your digital transformation.
//           </p>
//         </motion.div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {services.map((service, index) => (
//             <ServiceCard
//               key={service.id}
//               icon={service.icon}
//               title={service.title}
//               description={service.description}
//               delay={index * 0.1}
//             />
//           ))}
//         </div>
//       </div>
//     </Layout>
//   );
// };

// export default ServicePage;



