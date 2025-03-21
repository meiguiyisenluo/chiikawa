"use client";

import { motion } from "framer-motion";

export default function Template({ children }: { children: React.ReactNode }) {
  const variants = {
    hidden: { opacity: 0, x: 100 },
    enter: { opacity: 1, x: 0 },
  };

  return <>{ children }</>;
  return (
    <motion.main
      data-scroll
      className="mb-auto p-4"
      initial="hidden"
      animate="enter"
      variants={variants}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      {children}
    </motion.main>
  );
}
