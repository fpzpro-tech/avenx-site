import { NextResponse } from "next/server";
import { Resend } from "resend";
import { formatBetaContactEmailBody, validateBetaContact } from "@/lib/beta-contact";

const FROM_EMAIL = "AVENX Beta <onboarding@resend.dev>";
const SUBJECT = "Nouveau bêta testeur AVENX";

function errorResponse(error: string, status: number) {
  return NextResponse.json({ ok: false as const, error }, { status });
}

function successResponse() {
  return NextResponse.json({ ok: true as const });
}

export async function POST(request: Request) {
  const resendApiKey = process.env.RESEND_API_KEY;
  const contactTo = process.env.BETA_CONTACT_TO;

  if (!resendApiKey) {
    console.error("[beta-contact] RESEND_API_KEY is not configured");
    return errorResponse(
      "Configuration serveur incomplète : RESEND_API_KEY manquante.",
      500,
    );
  }

  if (!contactTo) {
    console.error("[beta-contact] BETA_CONTACT_TO is not configured");
    return errorResponse(
      "Configuration serveur incomplète : BETA_CONTACT_TO manquante.",
      500,
    );
  }

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

  try {
    const resend = new Resend(resendApiKey);

    const { error } = await resend.emails.send({
      from: FROM_EMAIL,
      to: contactTo,
      replyTo: data.email,
      subject: SUBJECT,
      text: formatBetaContactEmailBody(data),
    });

    if (error) {
      console.error("[beta-contact] Resend send failed:", error);
      return errorResponse(
        "Impossible d'envoyer ton inscription pour le moment. Réessaie dans quelques minutes.",
        500,
      );
    }

    return successResponse();
  } catch (err) {
    console.error("[beta-contact] Unexpected error:", err);
    return errorResponse(
      "Une erreur inattendue s'est produite. Réessaie ou contacte-nous à contact@avenx.app.",
      500,
    );
  }
}
