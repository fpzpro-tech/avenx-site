"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import { memo, type ReactNode } from "react";
import { fadeUp } from "@/lib/motion";

type FadeInViewProps = {
  children: ReactNode;
  className?: string;
  variants?: Variants;
  delay?: number;
  as?: "div" | "section" | "article" | "li";
};

function FadeInViewComponent({
  children,
  className,
  variants = fadeUp,
  delay = 0,
  as = "div",
}: FadeInViewProps) {
  const reduceMotion = useReducedMotion();
  const Component = motion[as];

  if (reduceMotion) {
    const Static = as;
    return <Static className={className}>{children}</Static>;
  }

  return (
    <Component
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      variants={variants}
      transition={{ delay }}
    >
      {children}
    </Component>
  );
}

export const FadeInView = memo(FadeInViewComponent);
