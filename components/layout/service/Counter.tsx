"use client";
import { useInView, animate } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { CounterProps } from "@/types/layout/service";

const Counter = ({ from, to, text }: CounterProps) => {
  const [count, setCount] = useState<number>(from);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref);

  useEffect(() => {
    const animation = animate(from, to, {
      duration: 4,
      ease: "easeOut",
      onUpdate: (prev: number) => {
        setCount(Math.floor(prev));
      },
    });

    return () => animation.cancel();
  }, [isInView, from, to]);

  return (
    <div className={cn("flex flex-col gap-2 group")} ref={ref}>
      <h1 className="text-4xl md:text-5xl font-bold text-[#dd4c62] group-hover:scale-110 transition-transform duration-300">
        {count}+
      </h1>
      <p className="text-sm md:text-base w-[120px] text-gray-300">{text}</p>
    </div>
  );
};

export default Counter;
