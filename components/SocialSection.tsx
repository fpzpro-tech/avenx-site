"use client";

import { motion, useReducedMotion } from "framer-motion";
import { memo } from "react";
import { ScreenshotPhone } from "@/components/ScreenshotPhone";
import { FadeInView } from "@/components/ui/FadeInView";
import { fadeUp, staggerContainer } from "@/lib/motion";

const socialHighlights = [
  { label: "Activité", text: "Feed en direct des séances de tes amis" },
  { label: "Leaderboards", text: "Classements XP par ville et par défi" },
  { label: "Défis", text: "Objectifs hebdo qui poussent la régularité" },
  { label: "Badges", text: "Récompenses pour milestones et streaks" },
  { label: "Amis", text: "Suis qui s'entraîne et où" },
] as const;

function SocialSectionComponent() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="communaute"
      className="scroll-mt-24 border-t border-white/5 bg-avenx-card/30 py-20 sm:py-28"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-16">
          <div className="order-2 lg:order-1 relative flex justify-center lg:justify-start">
            <div className="absolute -inset-8 rounded-full bg-avenx-primary/8 blur-3xl" />
            <ScreenshotPhone
              src="/screenshots/social.png"
              alt="Écran Social — communauté et classements"
              rotation={5}
            />
          </div>

          <div className="order-1 lg:order-2">
            <FadeInView>
              <h2 className="text-2xl font-bold tracking-tight text-avenx-snow sm:text-3xl lg:text-4xl">
                Le Strava du street workout
              </h2>
              <p className="mt-4 max-w-md text-base leading-relaxed text-avenx-muted">
                Partage tes séances, grimpe au classement et relève des défis avec des athlètes qui
                s&apos;entraînent comme toi — dehors, sans salle.
              </p>
            </FadeInView>

            <motion.ul
              className="mt-8 space-y-3"
              initial={reduceMotion ? false : "hidden"}
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              variants={staggerContainer}
            >
              {socialHighlights.map((item) => (
                <motion.li
                  key={item.label}
                  variants={fadeUp}
                  className="flex items-start gap-4 rounded-xl border border-white/5 bg-avenx-bg/60 px-4 py-3.5"
                >
                  <span className="mt-0.5 h-2 w-2 shrink-0 rounded-full bg-avenx-primary" />
                  <div>
                    <p className="text-sm font-semibold text-avenx-snow">{item.label}</p>
                    <p className="text-sm text-avenx-muted">{item.text}</p>
                  </div>
                </motion.li>
              ))}
            </motion.ul>

            <FadeInView className="mt-6" delay={0.15}>
              <p className="text-xs font-medium uppercase tracking-wider text-avenx-green">
                Feed vivant · Mises à jour en temps réel
              </p>
            </FadeInView>
          </div>
        </div>
      </div>
    </section>
  );
}

export const SocialSection = memo(SocialSectionComponent);
