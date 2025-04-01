"use client";
import React from "react";
import { Background, LeftSection, RightSection } from "./sections";

const Hero: React.FC = () => (
  <div className="h-full overflow-hidden flex flex-col md:flex-row">
    <LeftSection />
    <RightSection />
    <Background />
  </div>
);

export default Hero;
