"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";

const logoSrc = "/brand/vs-icon.png";

export function LogoMarkAnimated({ className }: { className?: string }) {
  const reduce = useReducedMotion();

  return (
    <motion.div
      className={className}
      style={{ overflow: "hidden" }}
      initial={reduce ? false : { clipPath: "inset(0 100% 0 0)" }}
      animate={{ clipPath: "inset(0 0% 0 0)" }}
      transition={{ duration: 1.1, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
    >
      <motion.div
        style={{ width: "100%", height: "100%" }}
        initial={reduce ? false : { opacity: 0, scale: 1.06 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
      >
        <Image
          src={logoSrc}
          alt="VibeScript"
          width={400}
          height={400}
          priority
          style={{ width: "100%", height: "100%", objectFit: "contain" }}
        />
      </motion.div>
    </motion.div>
  );
}
