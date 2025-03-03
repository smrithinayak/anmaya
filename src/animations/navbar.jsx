/* eslint-disable react/prop-types */
import { useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";

const NavShift = ({children}) => {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const prev = scrollY.getPrevious();
    if (latest > prev && latest > 50) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  return (
    <motion.header
      variants={{
        visible: { 
          y: 0, 
          transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }
        },
        hidden: { 
          y: "-100%", 
          transition: { duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }
        },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
      className="header fixed top-0 left-0 w-full z-40 md:h-32"
    >
        {children}
    </motion.header>
  );
};

export default NavShift;
