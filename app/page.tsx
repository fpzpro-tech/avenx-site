"use client";

import { FormEvent, useState } from "react";

/* ——— Icônes ——— */

function AppleIcon() {
  return (
    <svg className="h-6 w-6 shrink-0" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
    </svg>
  );
}

function PlayIcon() {
  return (
    <svg className="h-6 w-6 shrink-0" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M3.609 1.814L13.792 12 3.61 22.186a1.003 1.003 0 0 1-1.61-.793V2.607a1.003 1.003 0 0 1 1.61-.793zm12.043 4.918l7.547 4.35a1 1 0 0 1 0 1.732l-7.547 4.35A1 1 0 0 1 14.5 15.35V8.65a1 1 0 0 1 1.152-1.918z" />
    </svg>
  );
}

/* ——— Données ——— */

const navLinks = [
  { href: "#fonctionnalites", label: "Fonctionnalités" },
  { href: "#application", label: "Application" },
  { href: "#ia", label: "IA adaptative" },
  { href: "#boutique", label: "Boutique" },
  { href: "#contact", label: "Contact" },
] as const;

const benefits = [
  {
    title: "Programme adapté",
    description:
      "Séances générées selon ton niveau, ton matériel et tes objectifs. L’IA ajuste volume et difficulté au fil du temps.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z"
      />
    ),
  },
  {
    title: "Progression intelligente",
    description:
      "Scores de préparation, déload et montées en charge pour progresser sans te cramer.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M2.25 18L9 11.25l4.306 4.307a11.194 11.194 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941"
      />
    ),
  },
  {
    title: "Entraînements sans salle",
    description:
      "Street workout, parc ou maison — tout au poids du corps, adapté à ton lieu et ton équipement.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
      />
    ),
  },
  {
    title: "Suivi des séances",
    description:
      "Historique, feedback post-séance et insights coach pour rester régulier et comprendre ta charge.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"
      />
    ),
  },
] as const;

const screenshots = [
  "Séance du jour",
  "Séance guidée",
  "Progression",
  "Coach IA",
] as const;

const iaFeatures = [
  {
    title: "Feedback post-séance",
    text: "Trop facile, bien dosé ou trop dur — chaque retour affine la prochaine séance.",
  },
  {
    title: "Adaptation continue",
    text: "Volume, exercices et intensité évoluent avec ta préparation et ta récupération.",
  },
  {
    title: "Coach dans la poche",
    text: "Messages quotidiens, raisons de la séance du jour et recommandations de déload.",
  },
] as const;

const shopCategories = [
  { title: "Compléments alimentaires", emoji: "💊" },
  { title: "Élastiques", emoji: "🔗" },
  { title: "Barres et accessoires", emoji: "🏋️" },
  { title: "Programmes premium", emoji: "⭐" },
] as const;

/* ——— Sous-composants (fichier unique) ——— */

function StoreButtons({ large = false }: { large?: boolean }) {
  const pad = large ? "gap-3 px-6 py-4" : "gap-2.5 px-5 py-3";
  const sub = large ? "text-xs" : "text-[10px]";
  const main = large ? "text-base" : "text-sm";

  const btn = `inline-flex items-center rounded-xl border border-white/10 bg-avenx-slate/80 ${pad} text-avenx-snow transition hover:border-avenx-gold/40 hover:bg-avenx-slate focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-avenx-gold`;

  return (
    <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:justify-center">
      <a
        href="#"
        aria-disabled="true"
        className={btn}
        onClick={(e) => e.preventDefault()}
      >
        <AppleIcon />
        <span className="text-left">
          <span className={`block ${sub} text-avenx-mist`}>Bientôt sur</span>
          <span className={`block font-semibold ${main}`}>App Store</span>
        </span>
      </a>
      <a
        href="#"
        aria-disabled="true"
        className={btn}
        onClick={(e) => e.preventDefault()}
      >
        <PlayIcon />
        <span className="text-left">
          <span className={`block ${sub} text-avenx-mist`}>Bientôt sur</span>
          <span className={`block font-semibold ${main}`}>Google Play</span>
        </span>
      </a>
    </div>
  );
}

function ScreenshotPlaceholder({
  label,
  highlight = false,
}: {
  label: string;
  highlight?: boolean;
}) {
  return (
    <div
      className={`relative aspect-[9/19] w-full max-w-[200px] overflow-hidden rounded-[2rem] border bg-gradient-to-b from-avenx-slate to-avenx-charcoal sm:max-w-[220px] ${
        highlight ? "border-avenx-gold/30 shadow-[0_0_40px_rgba(232,185,35,0.12)]" : "border-white/10"
      }`}
    >
      <div className="absolute inset-0 bg-grid-pattern opacity-40" />
      <div className="absolute inset-x-0 top-0 h-7 rounded-b-2xl bg-avenx-black/70" />
      <div className="flex h-full flex-col items-center justify-center gap-2 p-5">
        <span className="text-[10px] font-semibold uppercase tracking-wider text-avenx-gold">
          AVENX
        </span>
        <span className="text-center text-xs font-medium text-avenx-mist">{label}</span>
        <div className="mt-2 h-20 w-full rounded-lg bg-white/5" />
        <div className="h-2.5 w-3/4 rounded-full bg-white/5" />
        <div className="h-2.5 w-1/2 rounded-full bg-white/5" />
      </div>
    </div>
  );
}

function SectionEyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-avenx-gold">
      {children}
    </p>
  );
}

/* ——— Page ——— */

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [contactSent, setContactSent] = useState(false);

  function handleContact(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setContactSent(true);
  }

  return (
    <div className="flex min-h-screen flex-col">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-white/5 bg-avenx-black/85 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <a href="#" className="group inline-flex items-center gap-2" aria-label="AVENX — Accueil">
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-avenx-gold/10 ring-1 ring-avenx-gold/30 transition group-hover:bg-avenx-gold/20">
              <span className="font-bold text-avenx-gold">A</span>
            </span>
            <span className="text-lg font-semibold tracking-[0.2em] text-avenx-snow">AVENX</span>
          </a>

          <nav className="hidden items-center gap-1 md:flex" aria-label="Navigation">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-lg px-3 py-2 text-sm font-medium text-avenx-mist transition hover:bg-white/5 hover:text-avenx-snow"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <a
            href="#telecharger"
            className="hidden rounded-full bg-avenx-gold px-5 py-2.5 text-sm font-semibold text-avenx-black transition hover:bg-avenx-gold-light md:inline-flex"
          >
            Télécharger
          </a>

          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-avenx-snow md:hidden"
            aria-expanded={menuOpen}
            aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
            onClick={() => setMenuOpen((o) => !o)}
          >
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {menuOpen && (
          <nav className="border-t border-white/5 px-4 py-4 md:hidden" aria-label="Navigation mobile">
            <ul className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="block rounded-lg px-4 py-3 text-avenx-snow hover:bg-white/5"
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#telecharger"
                  className="mt-2 block rounded-full bg-avenx-gold px-4 py-3 text-center font-semibold text-avenx-black"
                  onClick={() => setMenuOpen(false)}
                >
                  Télécharger
                </a>
              </li>
            </ul>
          </nav>
        )}
      </header>

      <main>
        {/* Hero */}
        <section className="relative overflow-hidden bg-hero-glow">
          <div className="absolute inset-0 bg-grid-pattern opacity-25" />
          <div className="relative mx-auto max-w-6xl px-4 pb-20 pt-12 sm:px-6 sm:pb-28 sm:pt-16 lg:px-8 lg:pb-32 lg:pt-20">
            <div className="mx-auto max-w-3xl text-center">
              <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-avenx-gold/20 bg-avenx-gold/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-avenx-gold">
                Calisthenics · Street workout · IA adaptative
              </p>
              <h1 className="text-3xl font-bold leading-tight tracking-tight text-avenx-snow sm:text-4xl lg:text-5xl lg:leading-[1.1]">
                AVENX — Ton coach calisthenics{" "}
                <span className="text-gradient-gold">intelligent</span>
              </h1>
              <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-avenx-mist sm:text-lg">
                Des entraînements au poids du corps adaptés à ton niveau, ton matériel et ta
                progression.
              </p>
              <div id="telecharger" className="mt-10 scroll-mt-24">
                <StoreButtons large />
              </div>
            </div>

            <div className="mt-14 flex justify-center gap-3 sm:mt-16 sm:gap-5">
              <ScreenshotPlaceholder label="Séance du jour" highlight />
              <div className="hidden translate-y-6 sm:block">
                <ScreenshotPlaceholder label="Progression" />
              </div>
              <div className="hidden translate-y-12 lg:block">
                <ScreenshotPlaceholder label="Coach IA" />
              </div>
            </div>
          </div>
        </section>

        {/* Bénéfices */}
        <section
          id="fonctionnalites"
          className="scroll-mt-20 border-t border-white/5 bg-avenx-charcoal py-20 sm:py-28"
        >
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <SectionEyebrow>Fonctionnalités</SectionEyebrow>
              <h2 className="text-2xl font-bold tracking-tight text-avenx-snow sm:text-3xl lg:text-4xl">
                Tout ce qu&apos;il faut pour progresser
              </h2>
              <p className="mt-4 text-base leading-relaxed text-avenx-mist sm:text-lg">
                Un coach dans ta poche — programmes, suivi et adaptation en continu.
              </p>
            </div>

            <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {benefits.map((b) => (
                <article
                  key={b.title}
                  className="group rounded-2xl border border-white/5 bg-avenx-slate/50 p-6 transition hover:border-avenx-gold/20 hover:shadow-[0_0_40px_rgba(232,185,35,0.08)] sm:p-8"
                >
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-avenx-gold/10 text-avenx-gold ring-1 ring-avenx-gold/20">
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      {b.icon}
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-avenx-snow">{b.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-avenx-mist">{b.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Captures app */}
        <section id="application" className="scroll-mt-20 py-20 sm:py-28">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <SectionEyebrow>Application</SectionEyebrow>
              <h2 className="text-2xl font-bold tracking-tight text-avenx-snow sm:text-3xl lg:text-4xl">
                Conçue pour l&apos;entraînement réel
              </h2>
              <p className="mt-4 text-base leading-relaxed text-avenx-mist sm:text-lg">
                Interface premium, guidage séance par séance, retours coach après chaque workout.
              </p>
            </div>

            <div className="mt-14 flex flex-wrap items-end justify-center gap-5 sm:gap-8">
              {screenshots.map((label, i) => (
                <ScreenshotPlaceholder key={label} label={label} highlight={i === 0} />
              ))}
            </div>
            <p className="mt-8 text-center text-sm text-avenx-mist">
              Captures d&apos;écran à venir — placeholders pour la V1 du site.
            </p>
          </div>
        </section>

        {/* IA adaptative */}
        <section
          id="ia"
          className="scroll-mt-20 border-t border-white/5 bg-avenx-charcoal py-20 sm:py-28"
        >
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
              <div>
                <SectionEyebrow>IA adaptative</SectionEyebrow>
                <h2 className="text-2xl font-bold tracking-tight text-avenx-snow sm:text-3xl lg:text-4xl">
                  Un moteur qui apprend de chaque séance
                </h2>
                <p className="mt-4 text-base leading-relaxed text-avenx-mist sm:text-lg">
                  AVENX combine calisthenics, street workout et intelligence adaptative : ton
                  programme n&apos;est jamais figé, il évolue avec toi.
                </p>
                <ul className="mt-8 space-y-4">
                  {iaFeatures.map((f, i) => (
                    <li
                      key={f.title}
                      className="flex gap-4 rounded-2xl border border-white/5 bg-avenx-slate/40 p-5"
                    >
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-avenx-gold/10 text-sm font-bold text-avenx-gold">
                        {i + 1}
                      </span>
                      <div>
                        <h3 className="font-semibold text-avenx-snow">{f.title}</h3>
                        <p className="mt-1 text-sm text-avenx-mist">{f.text}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="relative flex justify-center">
                <div className="absolute -inset-4 rounded-3xl bg-avenx-gold/5 blur-2xl" />
                <div className="relative rounded-2xl border border-avenx-gold/20 bg-avenx-slate/60 p-6 sm:p-8">
                  <p className="text-xs font-semibold uppercase tracking-wider text-avenx-gold">
                    Exemple coach AVENX
                  </p>
                  <p className="mt-4 text-lg font-medium leading-snug text-avenx-snow">
                    « Séance du jour adaptée : volume -10 % après ton retour &quot;bien dosé&quot;.
                    Focus tirages et gainage. »
                  </p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {["Trop facile", "Bien dosé", "Trop dur"].map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-white/10 bg-avenx-charcoal px-3 py-1 text-xs text-avenx-mist"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Boutique */}
        <section id="boutique" className="scroll-mt-20 py-20 sm:py-28">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <SectionEyebrow>Boutique AVENX</SectionEyebrow>
              <h2 className="text-2xl font-bold tracking-tight text-avenx-snow sm:text-3xl lg:text-4xl">
                La boutique AVENX arrive bientôt
              </h2>
              <p className="mt-4 text-base leading-relaxed text-avenx-mist sm:text-lg">
                Équipement, nutrition et programmes sélectionnés pour les athlètes calisthenics.
              </p>
            </div>

            <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {shopCategories.map((cat) => (
                <article
                  key={cat.title}
                  className="rounded-2xl border border-white/5 bg-avenx-slate/40 p-6 text-center transition hover:border-avenx-gold/20 sm:p-8"
                >
                  <span className="text-3xl" role="img" aria-hidden>
                    {cat.emoji}
                  </span>
                  <h3 className="mt-4 font-semibold text-avenx-snow">{cat.title}</h3>
                  <span className="mt-3 inline-block rounded-full bg-white/5 px-3 py-1 text-xs text-avenx-mist">
                    Bientôt disponible
                  </span>
                </article>
              ))}
            </div>

            <div className="mx-auto mt-12 max-w-md text-center">
              <a
                href="#contact"
                className="inline-flex rounded-full border border-avenx-gold/30 px-6 py-3 text-sm font-semibold text-avenx-gold transition hover:bg-avenx-gold/10"
              >
                Proposer un partenariat
              </a>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section
          id="contact"
          className="scroll-mt-20 border-t border-white/5 bg-avenx-charcoal py-20 sm:py-28"
        >
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
              <div>
                <SectionEyebrow>Contact</SectionEyebrow>
                <h2 className="text-2xl font-bold tracking-tight text-avenx-snow sm:text-3xl">
                  Parlons AVENX
                </h2>
                <p className="mt-4 text-avenx-mist">
                  Support utilisateur, partenariats ou presse — l&apos;équipe AVENX te répond.
                </p>

                <div className="mt-8 space-y-4">
                  <div className="rounded-xl border border-avenx-gold/20 bg-avenx-gold/5 p-5">
                    <h3 className="font-semibold text-avenx-snow">Partenariat</h3>
                    <p className="mt-1 text-sm text-avenx-mist">
                      Marques, parcs street workout, coachs — construisons l&apos;écosystème AVENX.
                    </p>
                  </div>
                  <div className="rounded-xl border border-white/5 bg-avenx-slate/40 p-5">
                    <h3 className="font-semibold text-avenx-snow">Support utilisateur</h3>
                    <p className="mt-1 text-sm text-avenx-mist">
                      Problème de compte, abonnement ou bug ? Précise iOS ou Android dans ton
                      message.
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-white/5 bg-avenx-slate/30 p-6 sm:p-8">
                {contactSent ? (
                  <div
                    className="rounded-xl border border-avenx-gold/30 bg-avenx-gold/5 p-8 text-center"
                    role="status"
                  >
                    <p className="text-lg font-semibold text-avenx-snow">Message envoyé</p>
                    <p className="mt-2 text-sm text-avenx-mist">
                      Merci — l&apos;équipe AVENX te répondra dès que possible. (Envoi simulé,
                      backend à connecter.)
                    </p>
                    <button
                      type="button"
                      className="mt-6 text-sm font-medium text-avenx-gold hover:underline"
                      onClick={() => setContactSent(false)}
                    >
                      Envoyer un autre message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleContact} className="space-y-5">
                    <div>
                      <label htmlFor="name" className="mb-2 block text-sm font-medium text-avenx-snow">
                        Nom
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        autoComplete="name"
                        className="w-full rounded-xl border border-white/10 bg-avenx-charcoal px-4 py-3 text-avenx-snow placeholder:text-avenx-mist/50 focus:border-avenx-gold/50 focus:outline-none focus:ring-1 focus:ring-avenx-gold/50"
                        placeholder="Ton nom"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="mb-2 block text-sm font-medium text-avenx-snow">
                        Email
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        autoComplete="email"
                        className="w-full rounded-xl border border-white/10 bg-avenx-charcoal px-4 py-3 text-avenx-snow placeholder:text-avenx-mist/50 focus:border-avenx-gold/50 focus:outline-none focus:ring-1 focus:ring-avenx-gold/50"
                        placeholder="ton@email.com"
                      />
                    </div>
                    <div>
                      <label htmlFor="message" className="mb-2 block text-sm font-medium text-avenx-snow">
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={5}
                        className="w-full resize-y rounded-xl border border-white/10 bg-avenx-charcoal px-4 py-3 text-avenx-snow placeholder:text-avenx-mist/50 focus:border-avenx-gold/50 focus:outline-none focus:ring-1 focus:ring-avenx-gold/50"
                        placeholder="Comment pouvons-nous t'aider ?"
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full rounded-full bg-avenx-gold px-6 py-3.5 text-sm font-semibold text-avenx-black transition hover:bg-avenx-gold-light sm:w-auto"
                    >
                      Envoyer
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* CTA final */}
        <section className="py-20 sm:py-28">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="relative overflow-hidden rounded-3xl border border-avenx-gold/20 bg-gradient-to-br from-avenx-slate to-avenx-charcoal px-6 py-14 text-center shadow-[0_0_40px_rgba(232,185,35,0.1)] sm:px-12 sm:py-16">
              <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-avenx-gold/10 blur-3xl" />
              <div className="relative">
                <h2 className="text-2xl font-bold text-avenx-snow sm:text-3xl">
                  Prêt à transformer ton entraînement ?
                </h2>
                <p className="mx-auto mt-4 max-w-lg text-avenx-mist">
                  Télécharge AVENX dès sa sortie sur les stores.
                </p>
                <div className="mt-8 flex justify-center">
                  <StoreButtons />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/5 bg-avenx-charcoal">
        <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div className="inline-flex items-center gap-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-avenx-gold/10 text-sm font-bold text-avenx-gold">
                A
              </span>
              <span className="font-semibold tracking-[0.15em] text-avenx-snow">AVENX</span>
            </div>
            <p className="text-sm text-avenx-mist">
              © {new Date().getFullYear()} AVENX. Coach calisthenics intelligent.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
