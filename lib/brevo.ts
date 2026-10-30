import type { BetaContactPayload } from "@/lib/beta-contact";

const BREVO_CONTACTS_URL = "https://api.brevo.com/v3/contacts";

export type BrevoSyncResult = { ok: true } | { ok: false; skipped: boolean; error: string };

/**
 * Ajoute (ou met à jour) l'inscrit dans la liste bêta du CRM Brevo.
 * Sans BREVO_API_KEY / BREVO_BETA_LIST_ID, la synchro est ignorée.
 */
export async function addBetaTesterToBrevo(data: BetaContactPayload): Promise<BrevoSyncResult> {
  const apiKey = process.env.BREVO_API_KEY;
  const listId = Number(process.env.BREVO_BETA_LIST_ID);

  if (!apiKey || !Number.isInteger(listId) || listId <= 0) {
    return { ok: false, skipped: true, error: "BREVO_API_KEY ou BREVO_BETA_LIST_ID manquante" };
  }

  const response = await fetch(BREVO_CONTACTS_URL, {
    method: "POST",
    headers: {
      "api-key": apiKey,
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      email: data.email,
      attributes: {
        PRENOM: data.firstName,
        NOM: data.lastName,
      },
      listIds: [listId],
      // Une personne qui se réinscrit est mise à jour au lieu de renvoyer une erreur.
      updateEnabled: true,
    }),
  });

  if (!response.ok) {
    const details = await response.text().catch(() => "");
    return { ok: false, skipped: false, error: `HTTP ${response.status} ${details}` };
  }

  return { ok: true };
}
