import { NextResponse } from "next/server";
import { Resend } from "resend";
import { addBetaTesterToBrevo } from "@/lib/brevo";
import {
  type BetaContactPayload,
  formatBetaContactEmailBody,
  validateBetaContact,
} from "@/lib/beta-contact";

const FROM_EMAIL = "AVENX Beta <beta@avenx.app>";
const SUBJECT = "Nouveau bêta testeur AVENX";

function errorResponse(error: string, status: number) {
  return NextResponse.json({ ok: false as const, error }, { status });
}

function successResponse() {
  return NextResponse.json({ ok: true as const });
}

async function notifyByEmail(data: BetaContactPayload): Promise<boolean> {
  const resendApiKey = process.env.RESEND_API_KEY;
  const contactTo = process.env.BETA_CONTACT_TO;

  if (!resendApiKey || !contactTo) {
    console.error("[beta-contact] RESEND_API_KEY or BETA_CONTACT_TO is not configured");
    return false;
  }

  try {
    const resend = new Resend(resendApiKey);

    const { error } = await resend.emails.send({
      from: FROM_EMAIL,
      to: "fpzpro@gmail.com", // TODO test — remettre : to: contactTo,
      replyTo: data.email,
      subject: SUBJECT,
      text: formatBetaContactEmailBody(data),
    });

    if (error) {
      console.error("[beta-contact] Resend send failed:", error);
      return false;
    }

    return true;
  } catch (err) {
    console.error("[beta-contact] Unexpected Resend error:", err);
    return false;
  }
}

async function addToCrm(data: BetaContactPayload): Promise<boolean> {
  try {
    const result = await addBetaTesterToBrevo(data);

    if (!result.ok) {
      console.error(
        `[beta-contact] Brevo sync ${result.skipped ? "skipped" : "failed"}:`,
        result.error,
      );
    }

    return result.ok;
  } catch (err) {
    console.error("[beta-contact] Unexpected Brevo error:", err);
    return false;
  }
}

export async function POST(request: Request) {
  let body: unknown;

  try {
    body = await request.json();
  } catch (err) {
    console.error("[beta-contact] Invalid JSON body:", err);
    return errorResponse("Requête invalide.", 400);
  }

  const validation = validateBetaContact(body);

  if (!validation.ok) {
    return errorResponse(validation.error, 400);
  }

  const { data } = validation;

  // L'inscription est enregistrée si au moins un des deux canaux (CRM ou email) a marché.
  const [savedInCrm, notified] = await Promise.all([addToCrm(data), notifyByEmail(data)]);

  if (!savedInCrm && !notified) {
    return errorResponse(
      "Impossible d'envoyer ton inscription pour le moment. Réessaie dans quelques minutes.",
      500,
    );
  }

  return successResponse();
}
