import { motion } from "framer-motion";

const Header = () => {
  return (
    <motion.header
      className="fixed top-0 left-0 right-0 flex justify-between items-center p-4 md:p-8 z-50 bg-[#03010f]/80 backdrop-blur-sm"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="text-2xl md:text-3xl lg:text-4xl font-semibold px-4 md:px-6">
        compound
      </div>
      <button className="bg-[#4f46e5] hover:bg-[#6366f1] text-white px-6 py-2 md:px-8 md:py-2.5 rounded-full font-medium text-xs md:text-sm transition-colors">
        START SAVING
      </button>
    </motion.header>
  );
};

export default Header;
