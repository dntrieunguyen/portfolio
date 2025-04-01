"use client";
import { FollowLinkProps } from "@/types/layout/hero";
import { motion } from "framer-motion";
import Image from "next/image";

// Variants for slide-in animation
const slideInVariants = {
  initial: { y: -100, opacity: 0 },
  animate: { y: 0, opacity: 1 },
};

const FollowLink: React.FC<FollowLinkProps> = ({ src, href, alt = "" }) => (
  <motion.a variants={slideInVariants} href={href}>
    <Image className="w-5 h-5" src={src} alt={alt} width={20} height={20} />
  </motion.a>
);

export default FollowLink;
