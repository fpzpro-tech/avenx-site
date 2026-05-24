"use client";

import { motion, useReducedMotion } from "framer-motion";
import { memo } from "react";
import { FadeInView } from "@/components/ui/FadeInView";
import { fadeUp, staggerContainer } from "@/lib/motion";

const features = [
  {
    emoji: "📍",
    title: "Trouve des spots",
    description: "Découvre les spots street workout autour de toi.",
  },
  {
    emoji: "🤖",
    title: "Coach IA réel",
    description: "Programme adapté selon fatigue, récupération et progression.",
  },
  {
    emoji: "🏆",
    title: "Progression addictive",
    description: "XP, niveaux, badges et objectifs qui te font revenir.",
  },
  {
    emoji: "👥",
    title: "Communauté",
    description: "Défis, classements, amis et activités partagées.",
  },
] as const;

function FeatureGridComponent() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="border-t border-white/5 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <FadeInView className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-bold tracking-tight text-avenx-snow sm:text-3xl lg:text-4xl">
            Pourquoi AVENX est différent
          </h2>
        </FadeInView>

        <motion.div
          className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
          initial={reduceMotion ? false : "hidden"}
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={staggerContainer}
        >
          {features.map((feature) => (
            <motion.article
              key={feature.title}
              variants={fadeUp}
              className="group rounded-2xl border border-white/5 bg-avenx-card p-6 transition hover:border-avenx-primary/25 hover:glow-cyan-sm sm:p-7"
            >
              <span className="text-2xl" role="img" aria-hidden>
                {feature.emoji}
              </span>
              <h3 className="mt-4 text-lg font-semibold text-avenx-snow">{feature.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-avenx-muted">{feature.description}</p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export const FeatureGrid = memo(FeatureGridComponent);
