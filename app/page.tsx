"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Header from "./components/Header";
import AnimatedArc from "./components/AnimatedArc";
import Legend from "./components/Legend";

const Home = () => {
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    // Start animation after component mounts
    setIsAnimating(true);
  }, []);

  return (
    <div className="bg-[#03010f] font-sans text-white relative overflow-hidden pt-[72px] md:pt-[88px]">
      <Header />

      <div className="mt-8  md:mt-16 lg:mt-24">
        <AnimatedArc />

        <main className="flex flex-col items-center justify-center text-center mt-10 relative z-10 px-4 h-screen">
          <div className="mt-[-5%] md:mt-[-10%] max-w-6xl mx-auto">
            <motion.h1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-8 md:mb-16 max-w-4xl leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1, ease: "easeOut" }}
            >
              brands <span className="text-[#6366f1]">contribute</span>
              <br />
              to every deposit.
            </motion.h1>

            <Legend />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Home;
