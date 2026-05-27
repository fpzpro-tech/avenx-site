const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export type BetaContactPayload = {
  firstName: string;
  lastName: string;
  email: string;
  wantsBeta: boolean;
  message: string;
};

export type BetaContactValidation =
  | { ok: true; data: BetaContactPayload }
  | { ok: false; error: string };

export type BetaContactApiResponse =
  | { ok: true }
  | { ok: false; error: string };

export function validateBetaContact(body: unknown): BetaContactValidation {
  if (!body || typeof body !== "object") {
    return { ok: false, error: "Données invalides." };
  }

  const { firstName, lastName, email, wantsBeta, message } = body as Record<string, unknown>;

  const trimmedFirst = typeof firstName === "string" ? firstName.trim() : "";
  const trimmedLast = typeof lastName === "string" ? lastName.trim() : "";
  const trimmedEmail = typeof email === "string" ? email.trim() : "";
  const trimmedMessage = typeof message === "string" ? message.trim() : "";

  if (!trimmedFirst || !trimmedLast || !trimmedEmail) {
    return { ok: false, error: "Merci de remplir tous les champs obligatoires." };
  }

  if (!EMAIL_REGEX.test(trimmedEmail)) {
    return { ok: false, error: "Adresse email invalide." };
  }

  if (wantsBeta !== true) {
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
      wantsBeta: true,
      message: trimmedMessage,
    },
  };
}

export function formatBetaContactEmailBody(data: BetaContactPayload): string {
  const date = new Date().toLocaleString("fr-FR", {
    timeZone: "Europe/Paris",
    dateStyle: "full",
    timeStyle: "short",
  });

  const lines = [
    `Prénom : ${data.firstName}`,
    `Nom : ${data.lastName}`,
    `Email : ${data.email}`,
    `Consentement bêta testeur : ${data.wantsBeta ? "Oui" : "Non"}`,
    `Date : ${date}`,
  ];

  if (data.message) {
    lines.push(`Message : ${data.message}`);
  }

  return lines.join("\n");
}
