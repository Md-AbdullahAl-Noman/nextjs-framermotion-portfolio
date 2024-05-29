"use client";
import { motion, useInView, useScroll } from "framer-motion";
import MechanicalBrain from "@/components/mechanicalBrain";
import { useRef } from "react";

export default function About() {
  const containerRef = useRef();

  const { scrollYProgress } = useScroll({ container: containerRef });
  
  const skillRef = useRef();
  const skillViewMotion = useInView(skillRef, { once: true });

  const expRef = useRef();
  const expViewMotion = useInView(expRef, { once: true });

  return (
    <motion.div
      initial={{ y: "-200vh" }}
      animate={{ y: "0" }}
      transition={{ duration: 1 }}
      className="h-full"
    >
      {/* main container */}
      <div className="h-full overflow-auto lg:flex" ref={containerRef}>
        {/* info */}
        <div className="px-5 sm:p-8 md:p-12 lg:p-20 xl:p-48 flex flex-col gap-24 md:gap-32 lg:gap-48 lg:w-2/3 lg:pr-0 xl:1/2">
          {/* bio container */}
          <div className="flex flex-col gap-10 justify-center">
            <h1 className="font-bold text-2xl pb-8">BIOGRAPHY</h1>
            <p className="text-xl pb-6">
              Md Abdullah Al Noman is an ambitious final-year Computer Science
              student at American International University-Bangladesh,
              specializing in artificial intelligence and full-stack
              development. With a CGPA of 3.88, he has consistently demonstrated
              academic excellence and a robust understanding of technical
              frameworks. His project work includes developing AI-driven
              solutions and full-stack applications that enhance operational
              efficiencies and user experiences. An effective communicator and
              team collaborator, Md Abdullah is poised to contribute
              meaningfully to projects that innovate and challenge industry
              standards.
            </p>
            {/* sign */}
            <div className="flex justify-end">
              <motion.img src="/signature.png" alt="Digital Signature" />
            </div>
            {/* BIOGRAPHY SCROLL SVG */}
            <motion.svg
              initial={{ opacity: 0.2, y: -2 }}
              animate={{ opacity: 1, y: "10px" }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width={50}
              height={50}
            >
              <path
                d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                stroke="#000000"
                strokeWidth="1"
              ></path>
              <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
              <path
                d="M15 11L12 14L9 11"
                stroke="#000000"
                strokeWidth="1"
              ></path>
            </motion.svg>
          </div>

          {/* skills container */}
          <div className="flex flex-col gap-10 justify-center">
            {/* skills title */}
            <motion.h1
              className="font-bold text-2xl mb-8"
              initial={{ x: '-200px' }}
              animate={skillViewMotion ? { x: 0 } : {}}
              transition={{ delay: 0.2 }}
              ref={skillRef}
            >
              SKILLS
            </motion.h1>

            {/* Skill List  */}
            <motion.div
              className="flex gap-4 flex-wrap mb-8"
              initial={{ x: '-200px' }}
              animate={skillViewMotion ? { x: 0 } : {}}
              transition={{ delay: 0.3 }}
              ref={skillRef}
            >
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Python
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                C++
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                JavaScript
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Java
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                R
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                PHP
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                C#
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                HTML
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                CSS (Tailwind)
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                React.js
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Nest.js
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Next.js
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Django
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                .NET MVC
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                MySQL
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                PostgreSQL
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                phpMyAdmin
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Zeet
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Assembly AI
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                ChatGPT
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Git
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Visual Studio Code
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Visual Studio
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Jupyter Notebook
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                PyCharm
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Docker
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                AWS
              </div>
            </motion.div>

            {/* skills SCROLL SVG */}
            <motion.svg
              initial={{ opacity: 0.2, y: -2 }}
              animate={{ opacity: 1, y: "10px" }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width={50}
              height={50}
            >
              <path
                d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                stroke="#000000"
                strokeWidth="1"
              ></path>
              <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
              <path
                d="M15 11L12 14L9 11"
                stroke="#000000"
                strokeWidth="1"
              ></path>
            </motion.svg>
          </div>

          {/* experience container */}
          <div className="flex flex-col gap-10 justify-center pb-48 " ref={expRef}>
            {/* exp title */}
            <motion.h1
              className="font-bold text-2xl mb-8"
              initial={{ x: "-300px" }}
              animate={expViewMotion ? { x: "0" } : {}}
              transition={{ delay: 0.2 }}
              
            >
              EXPERIENCE
            </motion.h1>
            {/* exp list */}
            <div>
              {/* list item1 */}
              <div className="flex justify-between h-48">
                {/* left */}
                <motion.div
                  className="w-1/3"
                  initial={{ x: "-300px" }}
                  animate={expViewMotion ? { x: "0" } : {}}
                  transition={{ delay: 0.3 }}
                  ref={expRef}
                >
                  {/* job title */}
                  <div className="bg-white p-2 font-semibold rounded-b-lg rounded-tl-lg w-fit">
                    Junior js developer
                  </div>
                  {/* job desc */}
                  <div className="p-3 text-sm italic">
                    My exploring real world projects starts from here
                  </div>
                  {/* job date */}
                  <div className="p-3 text-red-400 text-sm font-semibold">
                    2024-Present
                  </div>
                  {/* job company */}
                  <div className="p-1 text-sm font-semibold bg-white rounded w-fit">
                    LevantIt
                  </div>
                </motion.div>

                {/* center */}
                <div className="w-1/6">
                  {/* lines */}
                  <div className="w-1 bg-gray-500 h-full rounded relative">
                    {/* line circle */}
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-purple-600 bg-white -left-2"></div>
                  </div>
                </div>

                {/* right */}
                <div className="w-1/3"></div>
              </div>

              {/* list item2 */}
              <div className="flex justify-between h-48">
                {/* left */}
                <div className="w-1/3"></div>

                {/* center */}
                <div className="w-1/6">
                  {/* lines */}
                  <div className="w-1 bg-gray-500 h-full rounded relative">
                    {/* line circle */}
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-purple-600 bg-white -left-2"></div>
                  </div>
                </div>

                {/* right */}
                <div className="w-1/3"></div>
              </div>
            </div>
          </div>
        </div>

        {/* svg */}
        <div className="hidden lg:block w-1/3 sticky top-0 xl-1/2 z-30">
          <MechanicalBrain scrollYProgress={scrollYProgress} />
        </div>
      </div>
    </motion.div>
  );
}
