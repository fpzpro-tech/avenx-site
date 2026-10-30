import { memo } from "react";

const problems = [
  {
    title: "Les spots",
    text: "Tu les trouves par hasard, en passant devant, ou dans un groupe Facebook de 2019.",
  },
  {
    title: "Les autres",
    text: "Tu croises toujours les mêmes têtes sur la barre, sans jamais savoir quand ils reviennent.",
  },
  {
    title: "La motivation",
    text: "Seul, tu sautes une séance, puis deux. Personne ne le voit, personne ne te relance.",
  },
] as const;

function ProblemSectionComponent() {
  return (
    <section className="constat">
      <div className="wrap constat-grid">
        <h2>Le street workout, aujourd&apos;hui, ça se passe comme ça.</h2>
        <ul>
          {problems.map((problem) => (
            <li key={problem.title}>
              <strong>{problem.title}</strong>
              <span>{problem.text}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export const ProblemSection = memo(ProblemSectionComponent);
