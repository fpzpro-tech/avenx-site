"use client";

import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { memo } from "react";
import { ScreenshotPhone } from "@/components/ScreenshotPhone";
import { TESTFLIGHT_URL } from "@/lib/assets";
import { fadeUp } from "@/lib/motion";

function HeroSectionComponent() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="decouvrir" className="relative scroll-mt-24 overflow-x-hidden bg-hero-glow pt-28 sm:pt-32">
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
              Bêta fondateurs · Places limitées
            </motion.p>

            <motion.h1
              variants={fadeUp}
              className="text-4xl font-bold leading-[1.05] tracking-tight text-avenx-snow sm:text-5xl lg:text-[3.35rem]"
            >
              Deviens un des premiers{" "}
              <span className="text-gradient-cyan">fondateurs AVENX</span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="mt-6 max-w-lg text-base leading-relaxed text-avenx-muted sm:text-lg"
            >
              Rejoins les premiers athlètes qui construisent le futur du street workout. Accès bêta
              privé, statut fondateur et avantages à vie.
            </motion.p>

            <motion.div variants={fadeUp} className="mt-9 flex flex-col flex-wrap gap-3 sm:flex-row sm:items-center">
              <a
                href={TESTFLIGHT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-avenx-green px-7 py-3.5 text-sm font-semibold text-avenx-bg transition hover:brightness-110"
              >
                Télécharger sur TestFlight →
              </a>
              <Link
                href="#beta-form"
                className="inline-flex items-center justify-center rounded-full border border-white/15 bg-avenx-card/60 px-7 py-3.5 text-sm font-semibold text-avenx-snow transition hover:border-avenx-primary/40 hover:bg-avenx-card"
              >
                Rejoindre la bêta
              </Link>
              <Link
                href="#application"
                className="inline-flex items-center justify-center rounded-full border border-white/15 bg-avenx-card/60 px-7 py-3.5 text-sm font-semibold text-avenx-snow transition hover:border-avenx-primary/40 hover:bg-avenx-card"
              >
                Voir l&apos;application
              </Link>
            </motion.div>

            <motion.p variants={fadeUp} className="mt-5 text-sm font-medium text-avenx-green">
              Plus que 100 places fondateurs
            </motion.p>
          </motion.div>

          <div className="relative flex w-full justify-center px-2 py-4 sm:px-4 lg:justify-end lg:py-6">
            <div className="pointer-events-none absolute left-1/2 top-1/2 size-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-avenx-primary/10 blur-3xl lg:left-auto lg:right-12 lg:translate-x-0" />
            <ScreenshotPhone
              src="/screenshots/map.png"
              alt="Carte des spots street workout dans AVENX"
              rotation={-6}
              priority
              className="relative"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export const HeroSection = memo(HeroSectionComponent);
