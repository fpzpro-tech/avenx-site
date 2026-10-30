import { memo } from "react";
import { Phone } from "@/components/ui/Phone";
import { SCREENSHOTS } from "@/lib/assets";

const specs = [
  { label: "Rayon", value: "5, 10 ou 20 km" },
  { label: "Équipement", value: "Barres, dips, anneaux" },
  { label: "En ce moment", value: "Qui est sur place" },
] as const;

function SpotSectionComponent() {
  return (
    <section className="feature" id="spots">
      <div className="wrap feature-grid">
        <div className="feature-text">
          <p className="label">1 · Les spots</p>
          <h2>Trouve un spot, et vois qui y va.</h2>
          <p className="body">
            Chaque spot est ajouté par un pratiquant, avec ce qu&apos;on y trouve vraiment : barres
            fixes, parallèles, espaliers, éclairage le soir. Tu vois aussi qui s&apos;y entraîne en ce
            moment et quels jours il y a du monde.
          </p>
          <dl className="specs">
            {specs.map((spec) => (
              <div key={spec.label}>
                <dt>{spec.label}</dt>
                <dd>{spec.value}</dd>
              </div>
            ))}
          </dl>
        </div>
        <Phone src={SCREENSHOTS.explorer} alt="Écran Explorer : carte des spots et filtres de distance" />
      </div>
    </section>
  );
}

export const SpotSection = memo(SpotSectionComponent);
