"use client";

import { FormEvent, memo, useState } from "react";
import type { BetaContactApiResponse } from "@/lib/beta-contact";
import { validateBetaContact } from "@/lib/beta-contact";
import { TESTFLIGHT_OPEN, TESTFLIGHT_URL } from "@/lib/assets";

const SUCCESS_MESSAGE = "Merci, tu fais partie des premiers athlètes AVENX.";

function BetaContactSectionComponent() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [wantsBeta, setWantsBeta] = useState(!TESTFLIGHT_OPEN);
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
        setWantsBeta(!TESTFLIGHT_OPEN);
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
    <section className="join" id="beta">
      <div className="wrap join-grid">
        <div>
          <h2>Rejoins la bêta.</h2>
          {TESTFLIGHT_OPEN ? (
            <>
              <p className="body">
                Tu as un iPhone ? Installe l&apos;app tout de suite avec TestFlight, et invite tes
                potes avec le même lien : à plusieurs, c&apos;est là que l&apos;app prend tout son
                sens.
              </p>
              <div className="testflight">
                <a className="btn" href={TESTFLIGHT_URL} target="_blank" rel="noopener noreferrer">
                  Ouvrir TestFlight
                </a>
                <p className="fine">Sur Android ? Laisse tes coordonnées, on te prévient.</p>
              </div>
            </>
          ) : (
            <>
              <p className="body">
                Laisse tes coordonnées : on t&apos;envoie ton accès TestFlight par mail dès
                l&apos;ouverture des prochaines places. Invite tes potes à s&apos;inscrire aussi :
                à plusieurs, c&apos;est là que l&apos;app prend tout son sens.
              </p>
              <p className="fine">Sur Android ? Inscris-toi aussi, on te prévient au lancement.</p>
            </>
          )}
        </div>

        {success ? (
          <div className="sent" role="status">
            <p>
              <b>{SUCCESS_MESSAGE}</b> On te recontacte très vite pour ton accès bêta.
            </p>
            <button type="button" className="link" onClick={() => setSuccess(false)}>
              Envoyer une autre inscription
            </button>
          </div>
        ) : (
          <form id="beta-form" onSubmit={handleSubmit} noValidate>
            <div className="row2">
              <label htmlFor="beta-first-name">
                Prénom
                <input
                  id="beta-first-name"
                  name="firstName"
                  type="text"
                  required
                  autoComplete="given-name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  disabled={loading}
                />
              </label>
              <label htmlFor="beta-last-name">
                Nom
                <input
                  id="beta-last-name"
                  name="lastName"
                  type="text"
                  required
                  autoComplete="family-name"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  disabled={loading}
                />
              </label>
            </div>
            <label htmlFor="beta-email">
              Email
              <input
                id="beta-email"
                name="email"
                type="email"
                required
                autoComplete="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="toi@exemple.fr"
                disabled={loading}
              />
            </label>
            <label htmlFor="beta-message">
              Message (optionnel)
              <textarea
                id="beta-message"
                name="message"
                rows={3}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Ton spot, ton niveau, ton téléphone…"
                disabled={loading}
              />
            </label>
            <label className="check" htmlFor="beta-wants">
              <input
                id="beta-wants"
                type="checkbox"
                name="wantsBeta"
                checked={wantsBeta}
                onChange={(e) => setWantsBeta(e.target.checked)}
                disabled={loading}
              />
              <span>Oui, je veux devenir bêta testeur fondateur</span>
            </label>
            {error && (
              <p className="form-error" role="alert">
                {error}
              </p>
            )}
            <button type="submit" className="btn" disabled={loading}>
              {loading ? "Envoi en cours…" : "Rejoindre la bêta AVENX"}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}

export const BetaContactSection = memo(BetaContactSectionComponent);
