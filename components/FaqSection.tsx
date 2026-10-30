import { memo } from "react";

const questions = [
  {
    q: "L'app est-elle gratuite ?",
    a: "Oui, pendant toute la bêta. Les premiers inscrits garderont un badge fondateur et un accès anticipé aux nouvelles fonctions après le lancement.",
  },
  {
    q: "Je débute, est-ce que c'est pour moi ?",
    a: "Oui. Si tu ne fais pas encore de traction, le coach commence par les tractions australiennes et les négatives, et monte à ton rythme.",
  },
  {
    q: "Je ne connais personne qui en fait, ça sert à quoi ?",
    a: "Tu vois les habitués de chaque spot et quand ils y vont. Les défis du spot sont ouverts à tous : c'est le moyen le plus simple de rejoindre un groupe.",
  },
  {
    q: "Et sur Android ?",
    a: "La bêta est sur iPhone pour l'instant. Laisse ton email dans le formulaire : on te prévient dès que la version Android est prête.",
  },
  {
    q: "Qu'est-ce que TestFlight ?",
    a: "C'est l'application officielle d'Apple pour installer une app en test. Tu l'installes depuis l'App Store, puis tu ouvres notre lien d'invitation.",
  },
  {
    q: "Que faites-vous de mes données ?",
    a: "Tes séances et ta position servent uniquement à te proposer des spots et des séances. Ton profil est visible de tes amis seulement, sauf si tu le rends public.",
  },
] as const;

function FaqSectionComponent() {
  return (
    <section className="faq" id="faq">
      <div className="wrap faq-grid">
        <h2>Questions fréquentes</h2>
        <div>
          {questions.map((item, index) => (
            <details key={item.q} open={index === 0}>
              <summary>{item.q}</summary>
              <p>{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

export const FaqSection = memo(FaqSectionComponent);
