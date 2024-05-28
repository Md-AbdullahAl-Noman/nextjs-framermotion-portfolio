/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import NavLink from "./navLink";
import { motion } from "framer-motion";

const links = [
  { text: "Home", url: "/" },
  { text: "About", url: "/about" },
  { text: "Portfolio", url: "/portfolio" },
  { text: "Contact", url: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const topbarVariants = {
    closed: {
      rotate: 0,
    },
    opened: { rotate: 45, backgroundColor: "rgb(255,255,255 )" },
  };
  const middlebarVariants = {
    closed: {
      opacity: 1,
    },
    opened: { opacity: 0 },
  };

  const bottombarVariants = {
    closed: {
      rotate: 0,
    },
    opened: { rotate: -45, backgroundColor: "rgb(255,255,255 )" },
  };

  const listVariants = {
    closed: {
      x: "100vw",
    },
    opened: {
      x: 0,
      transition: {
        straggerChildren: 0.2,
      },
    },
  };

  const itemsVariants = {
    closed: {
      x: -10,
      opacity: 0,
    },

    opened: {
      x: 0,
      opacity: 1,
    },
  };

  return (
    <div className="h-full flex items-center justify-between px-5 sm:px-8 md:px-12 lg:px-20 xl:px-48 ">
      <div className="hidden md:flex gap-4 w-1/3">
        {links.map((link) => (
          <NavLink link={link} key={link.text} />
        ))}
      </div>

      {/*logo */}
      <div className="md:hidden lg:flex xl:w-1/3 xl:justify-center">
        <Link
          href="/"
          className="text-sm bg-purple-800 rounded-md p-1 font-semibold flex items-center justify-between"
        >
          <span className="text-white mr-1">Noman's</span>
          <span className="w-16 h-8 rounded bg-white text-black flex items-center justify-between">
            Portfolio
          </span>
        </Link>
      </div>

      <div className="hidden md:flex gap-4 w-1/3">
        <Link href="https://github.com/Md-AbdullahAl-Noman">
          <Image src="/github.png" alt="" height={24} width={24} />
        </Link>
        <Link href="https://www.linkedin.com/in/abdullah-al-noman-ds/">
          <Image src="/linkedin.png" alt="" height={24} width={24} />
        </Link>
        <Link href="#">
          <Image src="/facebook.png" alt="" height={24} width={24} />
        </Link>
        <Link href="#">
          <Image src="/twitter.png" alt="" height={24} width={24} />
        </Link>
      </div>

      {/*menu list */}
      <div className="md:hidden lg:flex ">
        <button
          className=" w-10 h-8 flex flex-col justify-between z-50 relative "
          onClick={() => setOpen(!open)}
        >
          <motion.div
            variants={topbarVariants}
            animate={open ? "opened" : "closed"}
            className="w-10 h-1 bg-black rounded origin-left"
          ></motion.div>
          <motion.div
            varians={middlebarVariants}
            className="w-10 h-1 bg-black rounded"
          ></motion.div>
          <motion.div
            variants={bottombarVariants}
            animate={open ? "opened" : "closed"}
            className="w-10 h-1 bg-black rounded origin-left"
          ></motion.div>
        </button>

        {open && (
          <motion.div
            variants={listVariants}
            initial="closed"
            animate="opened"
            className="absolute top-0 left-0 w-screen h-screen bg-black text-white flex flex-col items-center justify-center gap-8 text-2xl z-40 "
          >
            {links.map((link) => (
              <motion.div variants={itemsVariants} key={link.text} className="">
                <Link href={link.url}>{link.text}</Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </div>
  );
}
