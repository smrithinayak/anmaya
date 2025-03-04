import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { orgData, navItems } from "../../assets/data";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "visible";
  }, [isOpen]);

  const slideIn = {
    hidden: { x: "100%" },
    visible: {
      x: 0,
      transition: { type: "spring", stiffness: 300, damping: 30 },
    },
    exit: {
      x: "100%",
      transition: { type: "spring", stiffness: 300, damping: 30 },
    },
  };

  const handleLinkClick = (link) => {
    navigate(link);
    setIsOpen(false);
  };

  return (
    <div className="h-auto p-0 m-0">
      <motion.div className="">
        <div className="container mx-auto px-6 lg:px-12 flex justify-between items-center text-gray-100 h-32">
          <motion.div
            className="text-2xl font-bold logo-gradient-custom text-transparent bg-clip-text"
          >
            <Link to={"/"}>
            <div className="">
              <img src={orgData.images.brand} alt="" className="overflow-hidden w-32 h-12 invert-[15%]" /></div></Link>
          </motion.div>

          <ul className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <motion.li key={item.id} whileHover={{ scale: 1.1 }}>
                <div
                  className="relative group transition-colors text-lg font-medium cursor-pointer"
                  onClick={() => handleLinkClick(item.link)}
                >
                  {item.title.toUpperCase()}
                  <span className="absolute left-0 bottom-0 h-[1.8px] w-full bg-gradient-to-r from-transparent via-white to-transparent transition-all duration-300 transform scale-x-0 group-hover:scale-x-100 origin-center" />
                </div>
              </motion.li>
            ))}
          </ul>

          <motion.button
            className="md:hidden text-gray-100 focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
            whileTap={{ scale: 0.95 }}
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>
      </motion.div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-y-0 right-0 w-full h-screen sm:w-80 bg-gradient-to-b from-gray-900 via-black to-gray-900 shadow-lg md:hidden z-50"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={slideIn}
          >
            <div className="flex flex-col h-full justify-center items-center relative pt-16">
              <motion.button
                className="absolute top-4 right-4 text-gray-100 focus:outline-none"
                onClick={() => setIsOpen(false)}
                whileTap={{ scale: 0.95 }}
                aria-label="Close menu"
              >
                <X size={24} />
              </motion.button>

              <div className="w-full overflow-y-auto">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div
                      onClick={() => handleLinkClick(item.link)}
                      className="text-gray-100 hover:text-xl text-lg py-4 block text-center font-medium cursor-pointer"
                    >
                      <div className="w-fit mx-auto">
                        {item.title.toUpperCase()}
                        <div className="h-0.5 w-full bg-gradient-to-r from-transparent via-white to-transparent"></div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
