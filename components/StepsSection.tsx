import { memo } from "react";

const steps = [
  { title: "Installe la bêta", text: "Via TestFlight, l'app d'Apple pour tester les applis avant leur sortie." },
  { title: "Ajoute tes potes", text: "Depuis tes contacts ou par pseudo. Tu vois tout de suite où ils s'entraînent." },
  { title: "Choisis ton spot", text: "Le plus proche, ou celui où il y a du monde ce soir." },
  { title: "Poste ta séance", text: "Elle arrive dans le fil de tes amis et compte pour le classement du spot." },
] as const;

function StepsSectionComponent() {
  return (
    <section className="steps">
      <div className="wrap">
        <h2>De l&apos;installation à ta première séance en groupe.</h2>
        <ol>
          {steps.map((step) => (
            <li key={step.title}>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export const StepsSection = memo(StepsSectionComponent);
