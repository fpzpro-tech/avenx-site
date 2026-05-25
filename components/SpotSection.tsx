"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { memo, useRef } from "react";
import { ScreenshotPhone } from "@/components/ScreenshotPhone";
import { FadeInView } from "@/components/ui/FadeInView";
import { SCREENSHOTS } from "@/lib/assets";
import { fadeUp, staggerContainer } from "@/lib/motion";

const spotCards = [
  {
    title: "Spots validés",
    description: "Barres, parallèles et équipements validés par la communauté.",
    accent: "text-avenx-primary",
  },
  {
    title: "Sessions collectives",
    description: "Rejoins des entraînements en cours sur ton spot favori.",
    accent: "text-avenx-green",
  },
  {
    title: "Athlètes proches",
    description: "Vois qui s'entraîne autour de toi en temps réel.",
    accent: "text-avenx-secondary",
  },
  {
    title: "Challenges locaux",
    description: "Défis de quartier pour pousser ton niveau ensemble.",
    accent: "text-avenx-purple",
  },
] as const;

function SpotSectionComponent() {
  const reduceMotion = useReducedMotion();
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const mapY = useTransform(scrollYProgress, [0, 1], [24, -24]);

  return (
    <section id="spots" ref={ref} className="scroll-mt-24 border-t border-white/5 bg-avenx-card/30 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <FadeInView className="mx-auto mb-14 max-w-2xl text-center lg:text-left">
          <h2 className="text-2xl font-bold tracking-tight text-avenx-snow sm:text-3xl lg:text-4xl">
            Ton terrain devient ton terrain de jeu
          </h2>
        </FadeInView>

        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <motion.div
            style={reduceMotion ? undefined : { y: mapY }}
            className="relative flex justify-center lg:justify-start"
          >
            <ScreenshotPhone
              src={SCREENSHOTS.explorer}
              alt="Carte et liste des spots street workout dans AVENX"
              rotation={-3}
              wide
            />
          </motion.div>

          <motion.div
            className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1"
            initial={reduceMotion ? false : "hidden"}
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={staggerContainer}
          >
            {spotCards.map((card) => (
              <motion.article
                key={card.title}
                variants={fadeUp}
                className="glass-card rounded-2xl border border-white/5 p-5 transition hover:border-avenx-primary/20 sm:p-6"
              >
                <h3 className={`text-base font-semibold ${card.accent}`}>{card.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-avenx-muted">{card.description}</p>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export const SpotSection = memo(SpotSectionComponent);
