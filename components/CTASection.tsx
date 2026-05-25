"use client";

import Link from "next/link";
import { memo } from "react";
import { FadeInView } from "@/components/ui/FadeInView";

function CTASectionComponent() {
  return (
    <section id="telecharger" className="scroll-mt-24 pb-20 sm:pb-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <FadeInView>
          <div className="relative overflow-hidden rounded-3xl border border-avenx-primary/20 bg-gradient-to-br from-avenx-card to-avenx-bg px-6 py-14 text-center sm:px-12 sm:py-16">
            <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-avenx-primary/10 blur-3xl" />
            <div className="absolute -bottom-12 -left-12 h-40 w-40 rounded-full bg-avenx-green/8 blur-3xl" />

            <div className="relative">
              <h2 className="text-2xl font-bold text-avenx-snow sm:text-3xl lg:text-4xl">
                Les premiers utilisateurs construisent toujours les plus grandes communautés.
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-avenx-muted sm:text-lg">
                Rejoins AVENX avant ouverture publique.
              </p>

              <Link
                href="mailto:beta@avenx.app?subject=Rejoindre%20la%20b%C3%AAta%20AVENX"
                className="mt-9 inline-flex rounded-full bg-avenx-primary px-8 py-3.5 text-sm font-semibold text-avenx-bg transition hover:bg-avenx-secondary"
              >
                Rejoindre la bêta AVENX
              </Link>

              <p className="mt-4 text-xs font-medium uppercase tracking-wider text-avenx-muted">
                Places limitées
              </p>
            </div>
          </div>
        </FadeInView>
      </div>
    </section>
  );
}

export const CTASection = memo(CTASectionComponent);
