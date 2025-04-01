"use client";
import React from "react";
import Speech from "./speech";
import FollowLink from "./FollowLink";
import { motion } from "framer-motion";

const RightSection: React.FC = () => {
  return (
    <div className="w-full md:w-1/2 h-full flex flex-col justify-end items-end">
      {/* Follow Links Section */}
      <div className="hidden md:flex flex-col gap-3 p-4 bg-[#2f204e] rounded-br-[10px]">
        <FollowLink src="/github.png" href="https://github.com/dntrieunguyen" alt="GitHub" />
        <FollowLink src="/linkedin.png" href="https://linkedin.com/in/dntrieunguyen" alt="LinkedIn" />
        {/* <FollowLink src="/twitter.png" href="https://twitter.com/yourusername" alt="Twitter" /> */}
        <div className="w-5 h-5">
          <div className="bg-[#dd4c62] text-xs rotate-90 w-max h-full origin-top-left -translate-y-5 px-2 flex items-center rounded-br-[10px]">
            FOLLOW ME
          </div>
        </div>
      </div>

      {/* Speech Bubble */}
      <Speech />

      {/* Certificate Section - Hidden on mobile */}
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="hidden md:flex w-[60%] flex-col items-center gap-2 text-center leading-6 font-light text-[#ddd]"
      >
        <img src="/certificate.png" alt="Certificate" className="w-[70px] h-[70px]" />
        <p>
          Certified professional with expertise in web development and design. Creating beautiful, functional websites
          and applications.
        </p>
      </motion.div>

      {/* Contact Button */}
      <motion.a
        href="#contact"
        className="mb-[50px] relative"
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
      >
        <div className="relative">
          <svg width="160" height="160" viewBox="0 0 160 160">
            <path
              id="circle"
              d="M 80, 80 m -70, 0 a 70,70 0 1,0 140,0 a 70,70 0 1,0 -140,0"
              fill="none"
              stroke="white"
              strokeWidth="1"
            />
            <text className="tracking-[3px] text-xl">
              <textPath xlinkHref="#circle">CONTACT ME • CONTACT ME •</textPath>
            </text>
          </svg>
          <div className="absolute top-0 bottom-0 left-0 right-0 m-auto w-20 h-20 flex items-center justify-center">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M5 12H19M19 12L12 5M19 12L12 19"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </motion.a>
    </div>
  );
};

export default RightSection;
