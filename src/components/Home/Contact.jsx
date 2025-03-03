// import { motion } from "framer-motion";

// const ContactSection = () => {
//     const fadeInUp = {
//         hidden: { opacity: 0, y: 20 },
//         visible: { opacity: 1, y: 0 },
//       };
    
//       const staggerChildren = {
//         visible: { transition: { staggerChildren: 0.1 } },
//       };
//   return (
//     <motion.section
//         id="contact"
//         className="py-24 px-6 md:px-12 lg:px-24 "
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true }}
//         variants={staggerChildren}
//       >
//         <motion.h2 className="text-title-gradient-custom" variants={fadeInUp}>
//           Get in Touch
//         </motion.h2>
//         <motion.form className="max-w-lg mx-auto" variants={staggerChildren}>
//           <motion.div className="mb-6" variants={fadeInUp}>
//             <label
//               htmlFor="name"
//               className="block mb-2 text-lg text-gray-200 transition-all duration-300 transform group-hover:scale-105"
//             >
//               Name
//             </label>
//             <input
//               type="text"
//               id="name"
//               placeholder="Enter your name"
//               className="w-full p-3 bg-gray-800 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all duration-300 shadow-lg hover:shadow-xl placeholder-gray-400 animate-pulse-slow"
//             />
//           </motion.div>
//           <motion.div className="mb-6" variants={fadeInUp}>
//             <label
//               htmlFor="email"
//               className="block mb-2 text-lg text-gray-200 transition-all duration-300 transform group-hover:scale-105"
//             >
//               Email
//             </label>
//             <input
//               type="email"
//               id="email"
//               placeholder="Enter your email"
//               className="w-full p-3 bg-gray-800 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all duration-300 shadow-lg hover:shadow-xl placeholder-gray-400 animate-pulse-slow"
//             />
//           </motion.div>
//           <motion.div className="mb-6" variants={fadeInUp}>
//             <label
//               htmlFor="message"
//               className="block mb-2 text-lg text-gray-200 transition-all duration-300 transform group-hover:scale-105"
//             >
//               Message
//             </label>
//             <textarea
//               id="message"
//               rows={4}
//               placeholder="Write your message here..."
//               className="w-full p-3 bg-gray-800 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all duration-300 shadow-lg hover:shadow-xl placeholder-gray-400 animate-pulse-slow"
//             ></textarea>
//           </motion.div>
//           <div className="flex justify-center">
//             <button
//               type="submit"
//               className="group relative inline-flex h-[calc(48px+8px)] items-center justify-center rounded-full bg-neutral-800 py-1 pl-6 pr-14 font-medium text-neutral-50 mx-auto"
//             >
//               <span className="z-10 pr-2">Send Message</span>
//               <div className="absolute right-1 inline-flex h-12 w-12 items-center justify-end rounded-full bg-neutral-900 transition-[width] group-hover:w-[calc(100%-8px)]">
//                 <div className="mr-3.5 flex items-center justify-center">
//                   <svg
//                     width="15"
//                     height="15"
//                     viewBox="0 0 15 15"
//                     fill="none"
//                     xmlns="http://www.w3.org/2000/svg"
//                     className="h-5 w-5 text-neutral-50"
//                   >
//                     <path
//                       d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z"
//                       fill="currentColor"
//                       fillRule="evenodd"
//                       clipRule="evenodd"
//                     ></path>
//                   </svg>
//                 </div>
//               </div>
//             </button>
//           </div>
//         </motion.form>
//       </motion.section>
//   )
// }

// export default ContactSection