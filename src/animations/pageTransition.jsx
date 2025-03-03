/* eslint-disable react/display-name */
import { motion } from "framer-motion";
import './animationStyles.css';

const pageTransition = (OgComponent) => {
  return () => (
    <>
      <OgComponent />
      <motion.div
        className="transition-in"
        key="transition-in"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 0 }}
        exit={{ scaleX: 1 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        onAnimationComplete={(definition) => {
          if (definition === "exit") {
            document.body.style.overflow = "hidden";
          }
        }}
      ></motion.div>
      <motion.div
        className="transition-out"
        key="transition-out"
        initial={{ scaleX: 1 }}
        animate={{ scaleX: 0 }}
        exit={{ scaleX: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut", delay: 0.2 }}></motion.div>
    </>
  );
};

export default pageTransition;
