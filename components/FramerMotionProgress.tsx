"use client";

import { motion, useScroll, useSpring } from "framer-motion";

export default function FramerMotionProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      style={{ scaleX }}
      className="fixed top-0 left-0 w-full h-[5px] bg-blue-500 origin-left z-50"
    />
  );
}
