"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer";
import Link from "next/link";

const items = [
  {
    id: 1,
    color: "from-red-300 to-blue-300",
    title: "Machine Learning Model for Laptop Price Prediction",
    desc: "Developed a predictive model using Python, Scikit-learn, and matplotlib to analyze extensive market data, delivering high-accuracy predictions that improved decision-making for consumers and businesses.",
    tools: "Python, Scikit-learn, matplotlib",
    link: "https://github.com/Md-AbdullahAl-Noman?tab=repositories",
  },
  {
    id: 2,
    color: "from-blue-300 to-violet-300",
    title: "AI-Driven Blog Content Generator",
    desc: "Created an automated system using Django, HTML, Tailwind CSS, AJAX, and Assembly AI API, which transforms MP3 files to text and uses ChatGPT API to generate blog posts from YouTube videos.",
    tools: "Django, HTML, Tailwind CSS, AJAX, Assembly AI, ChatGPT",
    link: "https://github.com/Md-AbdullahAl-Noman?tab=repositories",
  },
  {
    id: 3,
    color: "from-violet-300 to-green-200",
    title: "Full Stack Hospital Management System Patient Portal",
    desc: "Developed a comprehensive system using Next.js, React, Nest.js, and PostgreSQL that optimized user interaction and efficiency, enabling better patient care and operational efficiency in healthcare.",
    tools: "Next.js, React, Nest.js, PostgreSQL",
    link: "https://github.com/Md-AbdullahAl-Noman?tab=repositories",
  },
  {
    id: 4,
    color: "from-purple-300 to-red-300",
    title: "Voice-Activated Personal Assistant",
    desc: "Created a voice-controlled assistant using Python, enhancing user accessibility and efficiency, which simplified daily tasks and offered a hands-free way to interact with technology.",
    tools: "Python",
    link: "https://github.com/Md-AbdullahAl-Noman?tab=repositories",
  },
];

export default function Portfolio() {
  const ref = useRef();

  const { scrollYProgress } = useScroll({ target: ref });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-80%"]);

  return (
    <motion.div
      initial={{ y: "-200vh" }}
      animate={{ y: "0" }}
      transition={{ duration: 1 }}
    >
      <div className=" h-[600vh] relative" ref={ref}>
        <div className="w-screen h-[calc(100vh-6rem)] flex items-center justify-center text-8xl text-center">
          My Works
        </div>
        <div className="sticky top-0 h-screen flex gap-4 items-center overflow-hidden">
          <motion.div className="flex" style={ {x}}>
            <div className="w-screen h-screen flex items-center justify-center bg-gradient-to-r from-blue-300 to-red-300"/>
            {items.map((item) => (
              <div
                key={item.id}
                className={`w-screen h-screen flex items-center justify-center bg-gradient-to-r ${item.color}`}
              >
                <div className="flex flex-col gap-8 items-center justify-center  ">
                  <h1 className="text-4xl font-bold text-white">
                    {item.title}
                  </h1>
                  <p className="text-xl text-gray-200 p-4">{item.desc}</p>
                  <p className="text-lg text-gray-400 italic">{item.tools}</p>

                  <div className="">
                    <Link href={item.link} >
                      <button className="mt-4 py-2 px-6 bg-white text-gray-800 font-semibold rounded-lg shadow-md hover:bg-gray-100">
                        Open Project
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
