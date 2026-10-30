import { memo } from "react";

const inputs = [
  { title: "Ton niveau de départ.", text: "Tractions, pompes et dips que tu sais faire le premier jour." },
  { title: "Tes séances passées.", text: "Ce que tu as réussi, raté ou sauté." },
  { title: "Ton ressenti.", text: "Une note de fatigue après chaque séance." },
] as const;

// Séance d'exemple : la ligne "changed" montre un ajustement du coach.
const exercises = [
  { name: "Tractions pronation", sets: "4 × 6", rest: "2:00" },
  { name: "Tractions australiennes", sets: "2 × 12", rest: "1:30", change: "−1 série" },
  { name: "Dips barres parallèles", sets: "3 × 8", rest: "1:30" },
  { name: "Gainage hollow body", sets: "3 × 30 s", rest: "0:45" },
] as const;

function ProgramSectionComponent() {
  return (
    <section className="prog" id="programmes">
      <div className="wrap prog-grid">
        <div>
          <p className="label">En complément · Les programmes</p>
          <h2>Et pour progresser, une séance prête chaque jour.</h2>
          <p className="body">
            Le coach te propose une séance adaptée à ton niveau et au matériel du spot. Il s&apos;appuie
            sur des informations simples.
          </p>
          <ul className="inputs">
            {inputs.map((input) => (
              <li key={input.title}>
                <span>
                  <b>{input.title}</b> {input.text}
                </span>
              </li>
            ))}
          </ul>
          <p className="limits">
            <b>Ce que le coach ne fait pas.</b> Il ne remplace ni un kiné ni un médecin. En cas de
            douleur, il arrête de charger la zone.
          </p>
        </div>

        <div className="session">
          <div className="session-head">
            <h3>Mardi · Tirage + gainage</h3>
            <span className="mono">≈ 32 min · Spot des Berges</span>
          </div>
          <div className="session-scroll">
            <table>
              <thead>
                <tr>
                  <th>Exercice</th>
                  <th>Séries × reps</th>
                  <th>Repos</th>
                </tr>
              </thead>
              <tbody>
                {exercises.map((exercise) => (
                  <tr key={exercise.name} className={"change" in exercise ? "changed" : undefined}>
                    <td>
                      {exercise.name}
                      {"change" in exercise && <span className="tag">{exercise.change}</span>}
                    </td>
                    <td className="mono">{exercise.sets}</td>
                    <td className="mono">{exercise.rest}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="session-foot">
            Exemple. Une série en moins : tu avais noté 4/5 de fatigue dimanche. Une fois finie, la
            séance part dans le fil de tes amis.
          </p>
        </div>
      </div>
    </section>
  );
}

export const ProgramSection = memo(ProgramSectionComponent);
