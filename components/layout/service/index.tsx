"use client";
import ComputerModelContainer from "./computer/ComputerModelContainer";
import ConsoleModelContainer from "./console/ConsoleModelContainer";
import Counter from "./Counter";
import MugModelContainer from "./mug/MugModelContainer";
import { motion, useInView, Variants } from "framer-motion";
import { useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { ServiceItem } from "@/types/layout/service";

const textVariants: Variants = {
  initial: {
    x: -100,
    y: -100,
    opacity: 0,
  },
  animate: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
    },
  },
};

const listVariants: Variants = {
  initial: {
    x: -100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.5,
    },
  },
};

const services: ServiceItem[] = [
  {
    id: 1,
    img: "/service1.png",
    title: "Web Development",
    counter: 35,
  },
  {
    id: 2,
    img: "/service2.png",
    title: "Product Design",
    counter: 23,
  },
  {
    id: 3,
    img: "/service3.png",
    title: "Branding",
    counter: 46,
  },
];

const Service = () => {
  const [currentServiceId, setCurrentServiceId] = useState<number>(1);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { margin: "-200px" });

  return (
    <div
      className={cn("h-screen w-full overflow-hidden flex flex-col md:flex-row py-10 px-4 md:px-8 lg:px-16")}
      ref={ref}
      id="services"
    >
      <div className={cn("w-full md:w-1/2 flex flex-col justify-center mb-10 md:mb-0")}>
        <motion.h1
          variants={textVariants}
          animate={isInView ? "animate" : "initial"}
          className={cn(
            "text-4xl md:text-6xl lg:text-7xl xl:text-[88px] font-bold mb-8 md:mb-10 bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent",
          )}
        >
          How do I help?
        </motion.h1>
        <motion.div
          variants={listVariants}
          animate={isInView ? "animate" : "initial"}
          className={cn("flex flex-col gap-5 md:gap-6 max-w-xl")}
        >
          {services.map((service) => (
            <motion.div
              variants={listVariants}
              className={cn(
                "w-full md:w-4/5 p-5 md:p-[30px] rounded-[20px] bg-[#2f213f] hover:bg-[#3a2a4c] flex items-center gap-4 cursor-pointer transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1",
                currentServiceId === service.id && "border-2 border-[#dd4c62]",
              )}
              key={service.id}
              onClick={() => setCurrentServiceId(service.id)}
            >
              <div
                className={cn(
                  "w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300",
                  service.id === 1 ? "bg-[#dd4c62]" : service.id === 2 ? "bg-[#025656]" : "bg-[#5e3bee]",
                )}
              >
                <img src={service.img} alt="" className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-lg md:text-xl font-medium mb-2">{service.title}</h2>
                <h3 className="text-[13px] font-light text-gray-300">{service.counter} Projects</h3>
              </div>
            </motion.div>
          ))}
        </motion.div>
        <div className={cn("flex gap-8 mt-12")}>
          <Counter from={0} to={104} text="Projects Completed" />
          <Counter from={0} to={72} text="Happy Clients" />
        </div>
      </div>
      <div className={cn("w-full md:w-1/2 flex flex-col justify-center items-center")}>
        <div className="w-full h-[300px] md:h-[400px] lg:h-[500px]">
          {currentServiceId === 1 ? (
            <ComputerModelContainer />
          ) : currentServiceId === 2 ? (
            <MugModelContainer />
          ) : (
            <ConsoleModelContainer />
          )}
        </div>
      </div>
    </div>
  );
};

export default Service;
