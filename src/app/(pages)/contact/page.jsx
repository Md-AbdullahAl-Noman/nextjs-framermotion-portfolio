"use client"
import { motion } from 'framer'

export default function Contact() {
  return (
    <motion.div initial={{y:'-200vh'}} animate={{y:"0"}} transition={{duration:1}} className=" h-full">
    <div className=''> 
      Contact
    </div>
    </motion.div>
  )
}
