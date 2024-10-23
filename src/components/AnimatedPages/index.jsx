import React from "react";
import { motion } from "framer-motion";

export default function AnimatedPages({ children }) {
  const pageVariants = {
    initial: { opacity: 0, y: 60 },
    in: { opacity: 1, y: 0 },
    out: { opacity: 0, y: -60 },
  };

  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={{ duration: 0.2 }}
    >
      {children}
    </motion.div>
  );
}
