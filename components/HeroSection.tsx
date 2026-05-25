"use client";

import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { memo } from "react";
import { ScreenshotPhone } from "@/components/ScreenshotPhone";
import { SCREENSHOTS } from "@/lib/assets";
import { fadeUp } from "@/lib/motion";

const heroPhones = [
  {
    src: SCREENSHOTS.explorer,
    alt: "Explorer les spots street workout dans AVENX",
    rotation: -10,
    offsetY: 28,
    offsetX: -24,
    zIndex: 1,
    scale: 0.9,
    floatDelay: 0.4,
    className: "absolute left-0 top-10 hidden sm:block",
  },
  {
    src: SCREENSHOTS.map,
    alt: "Carte des spots street workout dans AVENX",
    rotation: 0,
    offsetY: 0,
    offsetX: 0,
    zIndex: 4,
    scale: 1,
    floatDelay: 0,
    priority: true,
    className: "absolute left-1/2 top-0 -translate-x-1/2",
  },
  {
    src: SCREENSHOTS.train,
    alt: "Séance du jour et coach IA dans AVENX",
    rotation: 8,
    offsetY: 36,
    offsetX: 24,
    zIndex: 2,
    scale: 0.92,
    floatDelay: 0.8,
    className: "absolute right-0 top-8 hidden sm:block",
  },
  {
    src: SCREENSHOTS.social,
    alt: "Communauté et classements dans AVENX",
    rotation: 12,
    offsetY: 48,
    offsetX: 8,
    zIndex: 1,
    scale: 0.86,
    floatDelay: 1.2,
    className: "absolute right-4 top-24 hidden lg:block",
  },
] as const;

function HeroSectionComponent() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="decouvrir" className="relative scroll-mt-24 overflow-hidden bg-hero-glow pt-28 sm:pt-32">
      <div className="absolute inset-0 bg-grid-pattern opacity-20" />
      <div className="relative mx-auto max-w-6xl px-4 pb-20 sm:px-6 sm:pb-28 lg:px-8 lg:pb-32">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-12">
          <motion.div
            initial={reduceMotion ? false : "hidden"}
            animate="visible"
            variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
          >
            <motion.p
              variants={fadeUp}
              className="mb-5 inline-flex items-center gap-2 rounded-full border border-avenx-primary/25 bg-avenx-primary/8 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-avenx-primary"
            >
              Street workout · Coach IA · Communauté
            </motion.p>

            <motion.h1
              variants={fadeUp}
              className="text-4xl font-bold leading-[1.05] tracking-tight text-avenx-snow sm:text-5xl lg:text-[3.35rem]"
            >
              Trouve ton spot.
              <br />
              <span className="text-gradient-cyan">Progresse.</span>
              <br />
              Reviens demain.
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="mt-6 max-w-lg text-base leading-relaxed text-avenx-muted sm:text-lg"
            >
              Découvre les spots street workout autour de toi, entraîne-toi avec des séances adaptées
              et progresse avec un coach IA qui apprend réellement de ton niveau.
            </motion.p>

            <motion.div variants={fadeUp} className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link
                href="#spots"
                className="inline-flex items-center justify-center rounded-full bg-avenx-primary px-7 py-3.5 text-sm font-semibold text-avenx-bg transition hover:bg-avenx-secondary"
              >
                Explorer AVENX
              </Link>
              <Link
                href="#telecharger"
                className="inline-flex items-center justify-center rounded-full border border-white/15 bg-avenx-card/60 px-7 py-3.5 text-sm font-semibold text-avenx-snow transition hover:border-avenx-primary/40 hover:bg-avenx-card"
              >
                Télécharger
              </Link>
            </motion.div>

            <motion.div variants={fadeUp} className="mt-8 flex items-center gap-3">
              <div className="flex -space-x-2">
                {["M", "L", "K", "S"].map((initial) => (
                  <span
                    key={initial}
                    className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-avenx-bg bg-avenx-card text-[10px] font-bold text-avenx-primary"
                  >
                    {initial}
                  </span>
                ))}
              </div>
              <p className="text-sm text-avenx-muted">
                <span className="font-semibold text-avenx-snow">+500 sportifs</span> en bêta
              </p>
            </motion.div>
          </motion.div>

          <div className="relative mx-auto h-[400px] w-full max-w-[300px] sm:h-[440px] sm:max-w-[420px] lg:max-w-[480px]">
            <div className="absolute inset-0 rounded-full bg-avenx-primary/10 blur-3xl" />
            <div className="relative mx-auto h-full w-full">
              {heroPhones.map((phone) => (
                <ScreenshotPhone
                  key={phone.src}
                  src={phone.src}
                  alt={phone.alt}
                  rotation={phone.rotation}
                  offsetY={phone.offsetY}
                  offsetX={phone.offsetX}
                  zIndex={phone.zIndex}
                  scale={phone.scale}
                  floatDelay={phone.floatDelay}
                  priority={"priority" in phone ? phone.priority : false}
                  className={phone.className}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export const HeroSection = memo(HeroSectionComponent);
