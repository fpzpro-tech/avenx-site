"use client";

import Link from "next/link";
import { memo } from "react";
import { ScreenshotPhone } from "@/components/ScreenshotPhone";
import { FadeInView } from "@/components/ui/FadeInView";
import { StoreButtons } from "@/components/ui/StoreButtons";

function CTASectionComponent() {
  return (
    <section id="telecharger" className="scroll-mt-24 pb-20 sm:pb-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <FadeInView>
          <div className="relative overflow-hidden rounded-3xl border border-avenx-primary/20 bg-gradient-to-br from-avenx-card to-avenx-bg px-6 py-14 sm:px-12 sm:py-16">
            <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-avenx-primary/10 blur-3xl" />
            <div className="absolute -bottom-12 -left-12 h-40 w-40 rounded-full bg-avenx-green/8 blur-3xl" />

            <div className="relative grid items-center gap-10 lg:grid-cols-[1fr_auto] lg:gap-12">
              <div className="text-center lg:text-left">
                <h2 className="text-2xl font-bold text-avenx-snow sm:text-3xl lg:text-4xl">
                  Rejoins les premiers athlètes AVENX
                </h2>
                <p className="mx-auto mt-4 max-w-lg text-avenx-muted lg:mx-0">
                  Télécharge l&apos;app dès sa sortie ou rejoins la bêta pour façonner le futur du street
                  workout.
                </p>

                <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row lg:justify-start">
                  <StoreButtons className="justify-center lg:justify-start" />
                </div>

                <Link
                  href="mailto:beta@avenx.app?subject=B%C3%AAta%20AVENX"
                  className="mt-6 inline-flex rounded-full border border-avenx-green/40 bg-avenx-green/10 px-6 py-3 text-sm font-semibold text-avenx-green transition hover:bg-avenx-green/15"
                >
                  Rejoindre bêta
                </Link>
              </div>

              <div className="flex justify-center lg:justify-end">
                <ScreenshotPhone
                  src="/screenshots/profile.png"
                  alt="Écran Profil — progression et badges AVENX"
                  rotation={4}
                />
              </div>
            </div>
          </div>
        </FadeInView>
      </div>
    </section>
  );
}

export const CTASection = memo(CTASectionComponent);
