import { motion } from "framer-motion";
import AwardItem from "./AwardItem";
import ScrollButton from "./ScrollButton";
import { useTranslations } from "next-intl";

// Variants for animations
const slideInVariants = {
  initial: { x: -100, opacity: 0 },
  animate: { x: 0, opacity: 1, transition: { duration: 1, staggerChildren: 0.2 } },
};

const LeftSection: React.FC = () => {
  const t = useTranslations("hero");

  return (
    <div className="w-full md:w-1/2 h-full flex flex-col justify-between items-center md:items-start text-center md:text-left gap-9 md:gap-0">
      {/* Animated Title */}
      <motion.h1
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="mt-[50px] text-[48px] md:text-[72px] lg:text-[88px] xl:text-[100px] text-pink-500"
      >
        {t("greeting")}
        <br />
        <span className="text-white">{t("name")}</span>
      </motion.h1>

      {/* Awards Section */}
      <motion.div
        variants={slideInVariants}
        initial="initial"
        animate="animate"
        className="w-full md:w-[60%] xl:w-[30%]"
      >
        <motion.h2 variants={slideInVariants}>{t("title")}</motion.h2>
        <motion.p variants={slideInVariants} className="text-sm text-[#ddd] my-4">
          {t("description")}
        </motion.p>
        <motion.div variants={slideInVariants} className="flex gap-2 justify-center md:justify-start">
          <AwardItem src="/award1.png" />
          <AwardItem src="/award2.png" />
          <AwardItem src="/award3.png" />
        </motion.div>
      </motion.div>

      {/* Scroll Button */}
      <ScrollButton href="#services" />
    </div>
  );
};

export default LeftSection;
