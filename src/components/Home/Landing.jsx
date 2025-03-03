import { motion } from "framer-motion";
import { HomeScroll, RevealText } from "../../animations/HomeScroll";

const LandingSection = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const staggerChildren = {
    visible: { transition: { staggerChildren: 0.1 } },
  };
  return (
    <motion.section
      id="home"
      className="py-32 px-6 md:px-12 lg:px-24 text-center "
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={staggerChildren}
    >
      <motion.h2
        className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-b from-white to-gray-900 text-transparent bg-clip-text animate-gradient"
        variants={fadeInUp}
      >
        Consulting Services for Your Business
      </motion.h2>

      <motion.div variants={fadeInUp}>
        <div className="mx-auto w-fit">
          <RevealText delay={0.3} color={"#000000"}>
            <HomeScroll />
          </RevealText>
        </div>
      </motion.div>
      <motion.p
        className="text-xl mb-10 max-w-2xl mx-auto text-gray-300"
        variants={fadeInUp}
      >
        Turning your ideas into reality with cutting-edge technological
        solutions
      </motion.p>
      <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 ">
        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
        <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-5 py-1 text-md font-medium text-white backdrop-blur-3xl">
          <motion.a className="text-white text-bold" href="#contact">
            Get in Touch
          </motion.a>
        </span>
      </button>
    </motion.section>
  );
};

export default LandingSection;
