import { motion } from "framer-motion";

const Legend = () => {
  return (
    <motion.div
      className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-8 text-sm md:text-base"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 1.5, ease: "easeOut" }}
    >
      <motion.div
        className="flex items-center gap-2"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 2, ease: "easeOut" }}
      >
        <span className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-white"></span>
        <span>deposit amount</span>
      </motion.div>
      <motion.div
        className="flex items-center gap-2"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 2.2, ease: "easeOut" }}
      >
        <span className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-[#6366f1]"></span>
        <span>rewards earned</span>
      </motion.div>
      <motion.div
        className="flex items-center gap-2"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 2.4, ease: "easeOut" }}
      >
        <span className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-[#241e57]"></span>
        <span>total amount</span>
      </motion.div>
    </motion.div>
  );
};

export default Legend;
