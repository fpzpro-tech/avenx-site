"use client";

import { FormEvent, memo, useState } from "react";
import { FadeInView } from "@/components/ui/FadeInView";
import type { BetaContactApiResponse } from "@/lib/beta-contact";
import { validateBetaContact } from "@/lib/beta-contact";

const inputClass =
  "w-full rounded-xl border border-white/10 bg-avenx-bg px-4 py-3 text-avenx-snow placeholder:text-avenx-muted/50 transition focus:border-avenx-primary/50 focus:outline-none focus:ring-1 focus:ring-avenx-primary/50";

const SUCCESS_MESSAGE = "Merci, tu fais partie des premiers athlètes AVENX.";

function BetaContactSectionComponent() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [wantsBeta, setWantsBeta] = useState(false);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);

    const payload = { firstName, lastName, email, wantsBeta, message };
    const validation = validateBetaContact(payload);

    if (!validation.ok) {
      setError(validation.error);
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("/api/beta-contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(validation.data),
      });

      const result = (await response.json()) as BetaContactApiResponse;

      if (result.ok) {
        setSuccess(true);
        setFirstName("");
        setLastName("");
        setEmail("");
        setMessage("");
        setWantsBeta(false);
        return;
      }

      setError(
        result.error ??
          "Impossible d'envoyer ton inscription. Réessaie ou écris-nous à contact@avenx.app.",
      );
    } catch {
      setError(
        "Connexion impossible. Vérifie ton réseau et réessaie, ou écris-nous à contact@avenx.app.",
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <section id="beta-form" className="scroll-mt-32 border-t border-white/5 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <FadeInView className="mx-auto max-w-xl">
          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-avenx-primary">
              Bêta fondateurs
            </p>
            <h2 className="mt-3 text-2xl font-bold tracking-tight text-avenx-snow sm:text-3xl">
              Rejoins la bêta AVENX
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-avenx-muted sm:text-base">
              Laisse tes coordonnées pour obtenir un accès prioritaire et le statut fondateur.
            </p>
          </div>

          <div className="glass-card glow-cyan-sm mt-10 rounded-3xl border border-white/8 bg-avenx-card p-6 sm:p-8">
            {success ? (
              <div
                className="rounded-2xl border border-avenx-green/30 bg-avenx-green/10 px-6 py-10 text-center"
                role="status"
              >
                <p className="text-lg font-semibold text-avenx-snow">{SUCCESS_MESSAGE}</p>
                <p className="mt-2 text-sm text-avenx-muted">
                  On te recontacte très vite pour ton accès bêta.
                </p>
                <button
                  type="button"
                  className="mt-6 text-sm font-medium text-avenx-primary transition hover:text-avenx-secondary"
                  onClick={() => setSuccess(false)}
                >
                  Envoyer une autre candidature
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="beta-first-name" className="mb-2 block text-sm font-medium text-avenx-snow">
                      Prénom
                    </label>
                    <input
                      id="beta-first-name"
                      name="firstName"
                      type="text"
                      required
                      autoComplete="given-name"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      className={inputClass}
                      placeholder="Alex"
                      disabled={loading}
                    />
                  </div>
                  <div>
                    <label htmlFor="beta-last-name" className="mb-2 block text-sm font-medium text-avenx-snow">
                      Nom
                    </label>
                    <input
                      id="beta-last-name"
                      name="lastName"
                      type="text"
                      required
                      autoComplete="family-name"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      className={inputClass}
                      placeholder="Martin"
                      disabled={loading}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="beta-email" className="mb-2 block text-sm font-medium text-avenx-snow">
                    Email
                  </label>
                  <input
                    id="beta-email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className={inputClass}
                    placeholder="ton@email.com"
                    disabled={loading}
                  />
                </div>

                <div>
                  <label htmlFor="beta-message" className="mb-2 block text-sm font-medium text-avenx-snow">
                    Message <span className="text-avenx-muted">(optionnel)</span>
                  </label>
                  <textarea
                    id="beta-message"
                    name="message"
                    rows={3}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className={`${inputClass} resize-y`}
                    placeholder="Pourquoi tu veux rejoindre la bêta ?"
                    disabled={loading}
                  />
                </div>

                <label className="flex cursor-pointer items-start gap-3 rounded-xl border border-white/5 bg-avenx-bg/60 px-4 py-3.5">
                  <input
                    type="checkbox"
                    name="wantsBeta"
                    checked={wantsBeta}
                    onChange={(e) => setWantsBeta(e.target.checked)}
                    disabled={loading}
                    className="mt-0.5 size-4 shrink-0 rounded border-white/20 bg-avenx-bg text-avenx-primary accent-avenx-primary focus:ring-avenx-primary/50"
                  />
                  <span className="text-sm leading-relaxed text-avenx-muted">
                    Oui, je veux devenir bêta testeur fondateur
                  </span>
                </label>

                {error && (
                  <p
                    className="rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-200"
                    role="alert"
                  >
                    {error}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full rounded-full bg-avenx-primary px-6 py-3.5 text-sm font-semibold text-avenx-bg transition hover:bg-avenx-secondary disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
                >
                  {loading ? "Envoi en cours…" : "Rejoindre la bêta AVENX"}
                </button>
              </form>
            )}
          </div>
        </FadeInView>
      </div>
    </section>
  );
}

export const BetaContactSection = memo(BetaContactSectionComponent);
