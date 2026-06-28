import { motion, useScroll } from "framer-motion";

function ScrollProgress() {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      style={{ scaleX: scrollYProgress }}
      className="fixed left-0 top-0 z-[999] h-1 w-full origin-left bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500"
    />
  );
}

export default ScrollProgress;