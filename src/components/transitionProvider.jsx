"use client";
import { AnimatePresence, motion } from "framer-motion";
import Navbar from "@/components/navbar";
import { usePathname } from "next/navigation";

const TransitionProvider = ({ children }) => {
  const pathName = usePathname();

  return (
    <AnimatePresence mode="wait">
      <div
        key={pathName}
        className="w-screen h-screen bg-gradient-to-b from-blue-50 to-red-100"
      >
        <motion.div
          className="h-screen w-screen fixed bg-red-800 rounded-b-[100px] z-40"
          animate={{ height: "0vh" }}
          exit={{ height: "140vh", opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        />
        <motion.div
          className="h-screen w-screen fixed bg-red-800 rounded-t-[100px] bottom-0 z-30"
          initial={{ height: "140vh", opacity: 0.5 }}
          animate={{ height: "0vh", transition: { delay: 0.5 }, opacity: 0 }}
        />
        <div className="h-24 ">
          <Navbar />
        </div>
        <div className="h-[calc(100vh-6rem)] justify-center">{children}</div>
      </div>
    </AnimatePresence>
  );
};

export default TransitionProvider;
