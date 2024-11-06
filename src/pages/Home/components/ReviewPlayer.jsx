import React, { useState } from "react";
import ReactPlayer from "react-player/lazy";
import rickroll from "@assets/temp/rickroll.mp4";
import { AnimatePresence, motion } from "framer-motion";

export default function ReviewPlayer({link}) {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayerClick = () => {
    setIsPlaying((prevState) => !prevState);
  };

  return (
    <div className="h-fit rounded-[18px] relative overflow-hidden flex items-center w-fit cursor-pointer">
      {/* <div className="w-auto h-auto"> */}
        {/* <AnimatePresence>
          {!isPlaying && (
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
              className="absolute inset-0 bg-black/[0.1] flex justify-center items-center z-10 cursor-pointer"
              onClick={handlePlayerClick}
            >
              <motion.span
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                className="rounded-full md:w-[75px] md:h-[75px] w-[54px] h-[54px] bg-white/[0.1] flex justify-center items-center"
              >
                <span className="icon icon-videoplay bg-white !h-[44px] !w-[44px] md:scale-100 scale-[60%]" />
              </motion.span>

              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 50 }}
                className="absolute md:bottom-5 md:left-5 bottom-3 left-3"
              >
                <h1 className="text-white font-bold md:text-[20px] text-[14px]">
                  Eshonov Fakhriyor
                </h1>
                <p className="text-white font-normal md:text-[14px] text-[12px]">
                  Lorem ipsum
                </p>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence> */}

        <ReactPlayer
          url={link}
        />
      {/* </div> */}
    </div>
  );
}
