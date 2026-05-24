"use client";

import { memo } from "react";
import { FadeInView } from "@/components/ui/FadeInView";

function FutureSectionComponent() {
  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <FadeInView>
          <article className="relative overflow-hidden rounded-3xl border border-white/8 bg-avenx-card p-8 sm:p-12">
            <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-avenx-purple/10 blur-3xl" />
            <div className="absolute -bottom-16 -left-16 h-48 w-48 rounded-full bg-avenx-primary/8 blur-3xl" />

            <div className="relative max-w-2xl">
              <span className="inline-flex rounded-full border border-avenx-purple/30 bg-avenx-purple/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-avenx-purple">
                Bientôt
              </span>
              <h2 className="mt-5 text-2xl font-bold tracking-tight text-avenx-snow sm:text-3xl">
                Analyse mouvement IA
              </h2>
              <p className="mt-4 text-base leading-relaxed text-avenx-muted sm:text-lg">
                Filme ton mouvement. AVENX détectera automatiquement les erreurs techniques et les
                corrections à appliquer — pour progresser avec précision, pas au feeling.
              </p>

              <div className="mt-8 grid gap-3 sm:grid-cols-3">
                {["Caméra", "Analyse", "Feedback"].map((step, i) => (
                  <div
                    key={step}
                    className="rounded-xl border border-white/5 bg-avenx-bg/50 px-4 py-3 text-center"
                  >
                    <span className="text-xs font-semibold text-avenx-primary">0{i + 1}</span>
                    <p className="mt-1 text-sm font-medium text-avenx-snow">{step}</p>
                  </div>
                ))}
              </div>
            </div>

            <div
              className="pointer-events-none absolute inset-0 opacity-[0.04]"
              style={{
                backgroundImage:
                  "repeating-linear-gradient(0deg, transparent, transparent 2px, white 2px, white 3px)",
              }}
              aria-hidden
            />
          </article>
        </FadeInView>
      </div>
    </section>
  );
}

export const FutureSection = memo(FutureSectionComponent);
