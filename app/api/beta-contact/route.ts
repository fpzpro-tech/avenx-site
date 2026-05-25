import { Resend } from "resend";
import { NextResponse } from "next/server";
import {
  formatBetaContactEmailBody,
  validateBetaContact,
} from "@/lib/beta-contact";

export async function POST(request: Request) {
  let body: unknown;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Requête invalide." }, { status: 400 });
  }

  const validation = validateBetaContact(body);

  if (!validation.ok) {
    return NextResponse.json({ error: validation.error }, { status: 400 });
  }

  const { data } = validation;
  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    return NextResponse.json(
      {
        fallback: true,
        error:
          "Envoi automatique indisponible. Utilise ton client mail pour finaliser l'inscription.",
      },
      { status: 503 },
    );
  }

  try {
    const resend = new Resend(apiKey);
    const from = process.env.RESEND_FROM_EMAIL ?? "AVENX <onboarding@resend.dev>";

    const { error } = await resend.emails.send({
      from,
      to: "contact@avenx.app",
      replyTo: data.email,
      subject: "Nouveau bêta testeur AVENX",
      text: formatBetaContactEmailBody(data),
    });

    if (error) {
      console.error("[beta-contact] Resend error:", error);
      return NextResponse.json(
        {
          error:
            "Impossible d'envoyer ton inscription pour le moment. Réessaie dans quelques minutes.",
        },
        { status: 500 },
      );
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("[beta-contact] Unexpected error:", err);
    return NextResponse.json(
      {
        error:
          "Une erreur inattendue s'est produite. Réessaie ou contacte-nous à contact@avenx.app.",
      },
      { status: 500 },
    );
  }
}
