const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export type BetaContactPayload = {
  firstName: string;
  lastName: string;
  email: string;
  consent: boolean;
};

export type BetaContactValidation =
  | { ok: true; data: BetaContactPayload }
  | { ok: false; error: string };

export function validateBetaContact(body: unknown): BetaContactValidation {
  if (!body || typeof body !== "object") {
    return { ok: false, error: "Données invalides." };
  }

  const { firstName, lastName, email, consent } = body as Record<string, unknown>;

  const trimmedFirst = typeof firstName === "string" ? firstName.trim() : "";
  const trimmedLast = typeof lastName === "string" ? lastName.trim() : "";
  const trimmedEmail = typeof email === "string" ? email.trim() : "";

  if (!trimmedFirst || !trimmedLast || !trimmedEmail) {
    return { ok: false, error: "Merci de remplir tous les champs obligatoires." };
  }

  if (!EMAIL_REGEX.test(trimmedEmail)) {
    return { ok: false, error: "Adresse email invalide." };
  }

  if (consent !== true) {
    return {
      ok: false,
      error: "Tu dois confirmer ta candidature en cochant la case bêta testeur.",
    };
  }

  return {
    ok: true,
    data: {
      firstName: trimmedFirst,
      lastName: trimmedLast,
      email: trimmedEmail,
      consent: true,
    },
  };
}

export function formatBetaContactEmailBody(data: BetaContactPayload): string {
  const date = new Date().toLocaleString("fr-FR", {
    timeZone: "Europe/Paris",
    dateStyle: "full",
    timeStyle: "short",
  });

  return [
    `Prénom : ${data.firstName}`,
    `Nom : ${data.lastName}`,
    `Email : ${data.email}`,
    `Consentement bêta testeur : Oui`,
    `Date : ${date}`,
  ].join("\n");
}

export function buildBetaContactMailtoUrl(data: BetaContactPayload): string {
  const subject = encodeURIComponent("Nouveau bêta testeur AVENX");
  const body = encodeURIComponent(formatBetaContactEmailBody(data));
  return `mailto:contact@avenx.app?subject=${subject}&body=${body}`;
}
