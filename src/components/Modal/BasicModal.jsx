import React, { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { twMerge } from "tailwind-merge";

export default function BasicModal({ isOpen, onClose, className, children }) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          exit={{
            opacity: 0,
          }}
          style={{
            top: `${
              window.pageYOffset || document.documentElement.scrollTop
            }px`,
          }}
          className="w-full h-screen fixed left-0 bg-black/[0.4] backdrop-blur-[5px] flex items-center justify-center z-10 "
        >
          <motion.div
            initial={{
              opacity: 0,
              y: -100,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: 100,
            }}
            className={twMerge(
              "p-10 rounded-[24px] w-[500px] bg-white relative",
              className
            )}
          >
            <span
              onClick={onClose}
              className="icon icon-exit bg-[#F52929] absolute top-5 right-5 w-3 h-3 cursor-pointer active:scale-90"
            />
            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
