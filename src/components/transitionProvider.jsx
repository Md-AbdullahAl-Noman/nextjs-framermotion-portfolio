"use client"

import Navbar from "./navbar"
import { AnimatePresence } from "framer"
import { motion } from "framer"
import { usePathname } from "next/navigation"

export default function TransitionProvider({children}) {
    const pathName=usePathname();
  return (
    <div>
        <AnimatePresence mode="wait">
      <div key={pathName} className="w-screen h-screen bg-gradient-to-b from-blue-200  to-purple-200">
        
        <motion.div className="h-screen w-screen bg-black rounded-b-[100px] z-40 fixed"
        animate={{height:'0vh' }}
        exit={{height:"120vh"}}
        transition={{duration:0.5,ease:'easeOut'}}
        
        />

        <motion.div className="fixed m-auto top-0 bottom-0 left-0 right-0 text-white text-8xl cursor-default z-50 w-fit h-fit"
        initial={{opacity:1}}
        animate={{opacity:0 }}
        exit={{opacity:0}}
        transition={{duration:0.5,ease:'easeOut'}}
        
        >{pathName.substring(1)} </motion.div>
            
        <motion.div className="h-screen w-screen bg-black rounded-t-[100px] bottom-0 z-40 fixed"
        initial={{height:'120vh' }}
        animate={{height:"0vh",transition:{delay:0.5}}}
        
        
        />
            
      
          <div className="h-20">
            <Navbar />
          </div>
          <div className="h-[calc(100vh-5rem)]">{children}</div>
        </div>
        </AnimatePresence>
    </div>
  )
}
