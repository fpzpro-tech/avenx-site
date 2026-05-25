"use client";

import { motion, useReducedMotion } from "framer-motion";
import { memo } from "react";
import { FadeInView } from "@/components/ui/FadeInView";
import { fadeUp, staggerContainer } from "@/lib/motion";

const founderBenefits = [
  {
    emoji: "🏅",
    title: "Badge fondateur à vie",
    description: "Un statut exclusif réservé aux premiers athlètes AVENX.",
  },
  {
    emoji: "🚀",
    title: "Accès avant lancement public",
    description: "Teste l'app en avant-première avant tout le monde.",
  },
  {
    emoji: "💡",
    title: "Influence les futures fonctionnalités",
    description: "Ton feedback façonne la roadmap produit.",
  },
  {
    emoji: "🤖",
    title: "Accès prioritaire Coach IA",
    description: "Sois parmi les premiers à profiter du coach adaptatif.",
  },
] as const;

function FounderSectionComponent() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="fondateurs" className="scroll-mt-24 border-t border-white/5 bg-avenx-card/30 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <FadeInView className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-bold tracking-tight text-avenx-snow sm:text-3xl lg:text-4xl">
            Pourquoi rejoindre maintenant ?
          </h2>
        </FadeInView>

        <motion.div
          className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
          initial={reduceMotion ? false : "hidden"}
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={staggerContainer}
        >
          {founderBenefits.map((benefit) => (
            <motion.article
              key={benefit.title}
              variants={fadeUp}
              className="group rounded-2xl border border-white/5 bg-avenx-card p-6 transition hover:border-avenx-primary/25 hover:glow-cyan-sm sm:p-7"
            >
              <span className="text-2xl" role="img" aria-hidden>
                {benefit.emoji}
              </span>
              <h3 className="mt-4 text-lg font-semibold text-avenx-snow">{benefit.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-avenx-muted">{benefit.description}</p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export const FounderSection = memo(FounderSectionComponent);
