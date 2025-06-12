import { motion } from "framer-motion";

const AnimatedArc = () => {
  // Total length of arc is 283
  const quarterLength = 283 * 0.25; // 70.75
  const arcLength = 283;

  return (
    <div className="absolute mt-20 top-0 left-0 w-full h-full overflow-visible">
      <svg
        className="w-[200%] md:w-[250%] h-full absolute left-1/2 -translate-x-1/2 md:top-[-25%]"
        viewBox="0 0 200 150"
        preserveAspectRatio="xMidYMid meet"
      >
        {/* Base dark purple track */}
        <motion.path
          d="M10,150 A90,90 0 0,1 190,150"
          stroke="#1c1047"
          strokeWidth="8"
          strokeLinecap="round"
          fill="none"
          style={{ zIndex: 1 }}
          className="md:stroke-[12]"
          initial={{ strokeDasharray: arcLength, strokeDashoffset: arcLength }}
          animate={{ strokeDashoffset: 0 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        />

        {/* White deposit portion - animated */}
        <motion.path
          d="M10,150 A90,90 0 0,1 190,150"
          stroke="#ffffff"
          strokeWidth="8"
          strokeLinecap="round"
          fill="none"
          style={{ zIndex: 2 }}
          className="md:stroke-[12]"
          initial={{
            strokeDasharray: arcLength,
            strokeDashoffset: arcLength,
            opacity: 0,
          }}
          animate={{
            strokeDashoffset: [
              arcLength, // Start
              arcLength - quarterLength, // Move to 25%
              arcLength - quarterLength, // Wait for purple
              arcLength - quarterLength, // Still waiting
              arcLength - quarterLength * 2, // Move to 50%
              arcLength - quarterLength * 2, // Wait for purple
              arcLength - quarterLength * 2, // Still waiting
              arcLength - quarterLength * 3, // Move to 75%
              arcLength - quarterLength * 3, // Wait for purple
              arcLength - quarterLength * 3, // Still waiting
              arcLength - quarterLength * 4, // Move to 100%
              arcLength - quarterLength * 4, // Hold final
              arcLength, // Reset
            ],
            opacity: [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0],
          }}
          transition={{
            duration: 10,
            times: [
              0, 0.1, 0.15, 0.25, 0.3, 0.35, 0.45, 0.5, 0.55, 0.65, 0.7, 0.9, 1,
            ],
            ease: "easeInOut",
            repeat: Infinity,
            repeatDelay: 1,
            delay: 2, // Start after base arc completes
          }}
        />

        {/* Purple rewards portion - animated */}
        <motion.path
          d="M10,150 A90,90 0 0,1 190,150"
          stroke="#683dff"
          strokeWidth="8"
          strokeLinecap="round"
          fill="none"
          style={{
            zIndex: 3,
            filter:
              "drop-shadow(0px 0px 1px rgb(104, 61, 255)) drop-shadow(0px 0px 2px rgb(104, 61, 255))",
          }}
          className="md:stroke-[12]"
          initial={{
            strokeDasharray: arcLength,
            strokeDashoffset: arcLength,
            opacity: 0,
          }}
          animate={{
            strokeDashoffset: [
              arcLength, // Start
              arcLength, // Wait for white
              arcLength - quarterLength, // Move to 25%
              arcLength - quarterLength, // Hold 25%
              arcLength - quarterLength, // Wait for white
              arcLength - quarterLength * 2, // Move to 50%
              arcLength - quarterLength * 2, // Hold 50%
              arcLength - quarterLength * 2, // Wait for white
              arcLength - quarterLength * 3, // Move to 75%
              arcLength - quarterLength * 3, // Hold 75%
              arcLength - quarterLength * 3, // Wait for white
              arcLength - quarterLength * 4, // Move to 100%
              arcLength, // Reset
            ],
            opacity: [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
          }}
          transition={{
            duration: 10,
            times: [
              0, 0.15, 0.2, 0.25, 0.35, 0.4, 0.45, 0.55, 0.6, 0.65, 0.75, 0.8,
              1,
            ],
            ease: "easeInOut",
            repeat: Infinity,
            repeatDelay: 1,
            delay: 2.5, // Start slightly after white segment
          }}
        />
      </svg>
    </div>
  );
};

export default AnimatedArc;
