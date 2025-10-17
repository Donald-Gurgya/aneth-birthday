// import Base from "./Compoents/Base";
// import Header from "./Compoents/Header";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Toppings from "./Compoents/Toppings";
// import Order from "./Compoents/Order";
// import Home from "./Compoents/Home";
// import { useState } from "react";
import React from "react";
import { motion } from "framer-motion";
import "./index.css";
import Ballons from "./Compoents/Ballons";

// import Birthday from "./Compoents/Birthday";
const ballons =Array.from({length:10})

function App() {
  // const [pizza, setPizza] = useState({ base: "", toppings: [] });

  // const addBase = (base) => {
  //   setPizza({ ...pizza, base });
  // };

  // const addTopping=(topping)=>{
  //   let newToppings;
  //   if(!pizza.toppings.includes(topping)){
  //     newToppings =[...pizza.toppings,topping]
  //   }
  //   else{
  //     newToppings=pizza.toppings.filter(item=> item != topping)
  //   }
  //   setPizza({...pizza,toppings:newToppings})
  // }
  return (
    <>
      {/* <Header />

      <Routes>
        <Route path="/base" element={<Base  addBase={addBase} pizza={pizza}/>} />
        <Route path="/toppings" element={<Toppings addTopping={addTopping} pizza={pizza}/>} />
        <Route path="/order" element={<Order pizza={pizza} />} />
        <Route index  path="/" element={<Home />} />
      </Routes> */}
        <div className="relative h-screen max-w-full overflow-hidden bg-gradient-to-r from-pink-400 via-purple-500flex flex-col justify-center item-center text-white text-center">
          {
            ballons.map((_,i)=>(
              <Ballons className="text-center" key={i} delay={i * 0.5} / >
            ))
          }
          <motion.h1
          className="mt-10 text-6xl font-bold z-10 text-center"
            initial={{scale:0 ,opacity: 0}}
            animate={{scale:1.1 ,opacity :1}}
            transition={{
              type:"spring",
              stiffness :120,
              damping:10,
            }} >
               🎊 Happy Birthday Aneth! 🎂🎂
            
            

          </motion.h1>
          <motion.div
          className="mt-8 text-5xl z-10 text-center"
           animate={{scale:[1,1.3,1]}}
           transition={{
            duration:1,
            repeat:Infinity,
            ease:"easeInOut",
           }}
           
           >
            💖

          </motion.div>
          <motion.p
          className="mt-4 text-4xl z-10 text-center "
          initial={{opacity:0 , y: 30}}
          animate={{opacity:1,y:0}}
          transition={{delay:1.5 ,duration:1}}
          
          >
                Wishing you a day of full of joy and Happiness Anu Babu Love you ani attyaaa
          </motion.p>
          <motion.p
          className="mt-4 text-4xl z-10 text-center "
          initial={{opacity:0 , y: 30}}
          animate={{opacity:1,y:0}}
          transition={{delay:4 ,duration:3}}
          
          >
               Attyakade gift mag lavkar Delu Mama ne dilela
          </motion.p>

        </div>
     
    </>
  );
}

export default App;
