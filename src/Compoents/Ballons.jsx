import React from 'react'
import { animate, easeOut, motion } from "framer-motion";

const ballons =Array.from({length:10})
const Ballons = ({delay}) => {
  return (
    <motion.div
    initial={ { y: 600 ,x:Math.random() *window.innerWidth}}
    animate={{y: -200}}
    transition={{
        duration: 6 + Math.random() *3,
        delay,
        repeat:Infinity,
        repeatType:"loop",
        ease:"easeOut",
    }}
    className='absolute text-9xl text-center'>
      🎈🎉
    </motion.div>
  )
}

export default Ballons
