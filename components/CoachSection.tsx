"use client";

import { motion, useReducedMotion } from "framer-motion";
import { memo } from "react";
import { ScreenshotPhone } from "@/components/ScreenshotPhone";
import { FadeInView } from "@/components/ui/FadeInView";
import { SCREENSHOTS } from "@/lib/assets";
import { fadeUp, staggerContainer } from "@/lib/motion";

const coachCards = [
  {
    label: "Fatigue détectée",
    value: "Charge ajustée",
    detail: "Ton retour post-séance affine le volume du lendemain.",
    color: "border-avenx-purple/30 bg-avenx-purple/5",
    text: "text-avenx-purple",
  },
  {
    label: "Niveau ajusté",
    value: "Lv. 12 → 13",
    detail: "Progression calibrée sur tes performances réelles.",
    color: "border-avenx-primary/30 bg-avenx-primary/5",
    text: "text-avenx-primary",
  },
  {
    label: "Volume adapté",
    value: "-10% séries",
    detail: "Moins de volume quand ta récupération baisse.",
    color: "border-avenx-secondary/30 bg-avenx-secondary/5",
    text: "text-avenx-secondary",
  },
  {
    label: "Récupération analysée",
    value: "72% prêt",
    detail: "Score de préparation avant chaque séance.",
    color: "border-avenx-green/30 bg-avenx-green/5",
    text: "text-avenx-green",
  },
] as const;

function CoachSectionComponent() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="coach" className="scroll-mt-24 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-16">
          <FadeInView>
            <h2 className="text-2xl font-bold tracking-tight text-avenx-snow sm:text-3xl lg:text-4xl">
              Un coach qui apprend vraiment de toi
            </h2>
            <p className="mt-4 max-w-md text-base leading-relaxed text-avenx-muted">
              Chaque séance, chaque retour et chaque jour de repos alimentent un moteur qui adapte ton
              programme — pas un chatbot générique.
            </p>

            <motion.div
              className="mt-8 grid gap-3 sm:grid-cols-2"
              initial={reduceMotion ? false : "hidden"}
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              variants={staggerContainer}
            >
              {coachCards.map((card) => (
                <motion.div
                  key={card.label}
                  variants={fadeUp}
                  className={`rounded-2xl border p-4 ${card.color}`}
                >
                  <p className={`text-xs font-semibold uppercase tracking-wider ${card.text}`}>
                    {card.label}
                  </p>
                  <p className="mt-1 text-lg font-bold text-avenx-snow">{card.value}</p>
                  <p className="mt-1 text-xs leading-relaxed text-avenx-muted">{card.detail}</p>
                </motion.div>
              ))}
            </motion.div>
          </FadeInView>

          <div className="relative flex justify-center lg:justify-end">
            <div className="absolute -inset-8 rounded-full bg-avenx-purple/10 blur-3xl" />
            <ScreenshotPhone
              src={SCREENSHOTS.train}
              alt="Séance du jour et coach IA dans AVENX"
              rotation={-4}
              className="relative"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export const CoachSection = memo(CoachSectionComponent);
