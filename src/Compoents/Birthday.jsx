import React from "react";
import { motion, spring } from "framer-motion";

const Birthday = () => {
  return (
    <div className="mt-28 flex flex-col justify-evenly mx-auto text-center min-h-fit ">
      <div className=" text-8xl font-semibold tracking-wide space-y-10 text-center ">
        <motion.h1
          initial={{
            opacity: 0,
            y: -300,
            scale: 0.5,
          }}
          transition={{
            type: spring,
            stiffness: 20,
            duration: 1,
            dalay: 0.5,
          }}
          animate={{
            opacity: 1,
            rotate:360,
            y: 0,
            scale: 1.5,
          }}
          className="bg-gradient-to-r from-purple-600 via-blue-500 to-emerald-500 bg-clip-text text-transparent p-5 "
        >
          Happy Birthday
        </motion.h1>
        <motion.h1
        initial={{
            opacity: 0,
            x: "-100vw",
            scale: 0.5,
          }}
          transition={{
            type: spring,
            
            duration: 2,
            dalay: 0.5,
          }}
          animate={{
            opacity: 1,
            rotate:360,
            x: 0,
            scale: 2,
          }}
        className="bg-gradient-to-r from-sky-500 via-green-500 to-blue-500 bg-clip-text text-transparent p-5">
          To You
        </motion.h1>
        <motion.h1
        initial={{
            opacity: 0,
            x:"100vw",
            scale: 0.5,
          }}
          transition={{
            type: spring,
            
            duration: 4,
            dalay: 5,
          }}
          animate={{
            opacity: 1,
            rotateX:360,
            
            x: 0,
            scale:2,
          }} className="bg-gradient-to-r from-purple-900 via-pink-500 to-blue-500 bg-clip-text text-transparent p-5">
          My Love
        </motion.h1>
      </div>
    </div>
  );
};

export default Birthday;
