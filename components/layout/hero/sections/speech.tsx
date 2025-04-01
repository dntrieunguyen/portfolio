"use client";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

const Speech = () => {
  const t = useTranslations("hero");

  return (
    <motion.div
      className="hidden md:flex w-full xl:w-1/2 items-end gap-2 justify-between mb-4"
      animate={{ opacity: [0, 1] }}
      transition={{ duration: 1 }}
    >
      <div className="w-full h-[100px] bg-white text-[#555] p-3 text-lg rounded-[20px_20px_0px_20px]">
        <TypeAnimation
          sequence={[1000, t("speech.first"), 1000, t("speech.second"), 1000]}
          wrapper="span"
          speed={40}
          deletionSpeed={60}
          repeat={Infinity}
        />
      </div>
      <img src="/man.png" alt="" className="w-[50px] h-[50px] rounded-full object-cover bg-[#dd4c62]" />
    </motion.div>
  );
};

export default Speech;
