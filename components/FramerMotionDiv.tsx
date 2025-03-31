"use client";

import { ElementType } from "react";
import { motion } from "framer-motion";

export default function FramerMotionDiv<T extends ElementType>({
  children,
  ...props
}: React.ComponentProps<T> & {
  children: React.ReactNode;
}) {
  return <motion.div {...props}>{children}</motion.div>;
}
