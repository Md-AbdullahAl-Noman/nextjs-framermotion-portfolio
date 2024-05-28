"use client"
import Image from "next/image";
import { motion } from "framer";
import Link from "next/link";

const Homepage = () => {

  return (
    <motion.div initial={{y:'-200vh'}} animate={{y:"0"}} transition={{duration:1}} className=" h-full overflow-auto">
    <div className="h-full flex flex-col lg:flex-row px-5 sm:px-8 md:px-12 lg:px-20 xl:px-48">
      {/* Image container */}
      <div className="h-1/2 lg:h-full w-full lg:w-1/2 relative">
        <Image
          src="/finalpic.png"
          alt=""
          fill
          className="object-contain"
        />
      </div>

      {/* Text */}
      <div className="h-1/2 lg:h-full w-full lg:w-1/2 flex flex-col gap-8 items-center justify-center mt-5 lg:mt-0">
        {/* Title */}
        <h1 className="text-2xl md:text-4xl font-bold text-center lg:text-left">
          Skilled in AI & Full-Stack Development | Notable Projects in Machine
          Learning & Web Development
        </h1>

        {/* Description */}
        <p className="md:text-xl text-center lg:text-left">
          Welcome! I am Md Abdullah Al Noman, a passionate final-year Computer
          Science student enthusiastic about AI, full-stack development, and
          project management. I am proficient in Python, JavaScript, React.js,
          Django, and more. My notable works include a Machine Learning Model
          for Laptop Price Prediction, an AI-Driven Blog Content Generator, a
          Full Stack Hospital Management System Patient Portal, and a
          Voice-Activated Personal Assistant.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4">
          <Link href="/portfolio">
          <button className="p-4 rounded-lg ring-2 ring-black bg-black text-white">
            View My Works
          </button>
          </Link>
          <Link href="/contact">
          <button className="p-4 rounded-lg ring-2 ring-black bg-white text-black">
            Contact Me
          </button>
          </Link>
        </div>
      </div>
    </div>
    </motion.div>
  );
};

export default Homepage;
