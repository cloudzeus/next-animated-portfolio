"use client";
import { motion } from "framer-motion";

const TestAnimation = () => {
  return (
    <div className="h-full flex items-center justify-center relative">
      <motion.div
        className="h-40 w-40 bg-red-500 relative"
        initial={{ x: -100 }}
        animate={{ x: 400, y: 300, opacity: 0.5 }}
        transition={{ duration: 1 }}
      ></motion.div>
    </div>
  );
};

export default TestAnimation;
