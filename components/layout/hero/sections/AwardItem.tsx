import { AwardItemProps } from "@/types/layout/hero";
import { motion } from "framer-motion";

// Variants for slide-in animation
const slideInVariants = {
  initial: { x: -100, opacity: 0 },
  animate: { x: 0, opacity: 1 },
};

const AwardItem: React.FC<AwardItemProps> = ({ src, alt = "" }) => (
  <motion.img 
    variants={slideInVariants} 
    className="w-9 h-9 p-2 bg-white rounded-full" 
    src={src} 
    alt={alt} 
  />
);

export default AwardItem;
