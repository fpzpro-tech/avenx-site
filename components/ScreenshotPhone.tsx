"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { memo } from "react";
import { floatTransition, floatY } from "@/lib/motion";

export type ScreenshotPhoneProps = {
  src: string;
  alt: string;
  priority?: boolean;
  className?: string;
  wide?: boolean;
  rotation?: number;
  offsetY?: number;
  offsetX?: number;
  zIndex?: number;
  scale?: number;
  floatDelay?: number;
};

function ScreenshotPhoneComponent({
  src,
  alt,
  priority = false,
  className = "",
  wide = false,
  rotation = 0,
  offsetY = 0,
  offsetX = 0,
  zIndex = 1,
  scale = 1,
  floatDelay = 0,
}: ScreenshotPhoneProps) {
  const reduceMotion = useReducedMotion();
  const widthClass = wide
    ? "w-full max-w-[280px] sm:max-w-[300px] lg:max-w-[320px]"
    : "w-[min(100%,200px)] sm:w-[210px] lg:w-[220px]";

  return (
    <motion.div
      className={`relative ${widthClass} ${className}`}
      style={{
        zIndex,
        rotate: rotation,
        translate: `${offsetX}px ${offsetY}px`,
        scale,
      }}
      animate={reduceMotion ? undefined : { y: floatY }}
      transition={{ ...floatTransition, delay: floatDelay }}
    >
      <div className="glass-card glow-cyan relative overflow-hidden rounded-[2.25rem] border border-white/10 p-[3px]">
        <div className="absolute inset-x-8 top-2 z-10 mx-auto h-[22px] w-[72px] rounded-full bg-black/60 backdrop-blur-sm" />
        <div className="relative aspect-[9/19.5] overflow-hidden rounded-[2rem] bg-avenx-bg">
          <Image
            src={src}
            alt={alt}
            fill
            sizes="(max-width: 640px) 180px, 220px"
            className="object-cover object-center"
            priority={priority}
            loading={priority ? undefined : "lazy"}
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/[0.06] via-transparent to-black/20" />
        </div>
      </div>
    </motion.div>
  );
}

export const ScreenshotPhone = memo(ScreenshotPhoneComponent);
