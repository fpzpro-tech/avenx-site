import { memo } from "react";
import { Phone } from "@/components/ui/Phone";
import { SCREENSHOTS, TESTFLIGHT_URL } from "@/lib/assets";

function HeroSectionComponent() {
  return (
    <section className="hero">
      <div className="wrap hero-grid">
        <div>
          <p className="status label">
            <span className="dot" aria-hidden="true" />
            Bêta ouverte sur iPhone
          </p>
          <h1>
            Le spot est à deux rues. <em>Ta team aussi.</em>
          </h1>
          <p className="lede">
            <strong>
              AVENX te montre les spots de street workout autour de toi, et les gens qui s&apos;y
              entraînent.
            </strong>{" "}
            Tu suis leurs séances, ils suivent les tiennes, et tu ne vas plus jamais à la barre tout
            seul.
          </p>
          <div className="cta-row">
            <a className="btn" href={TESTFLIGHT_URL} target="_blank" rel="noopener noreferrer">
              Rejoindre la bêta iOS
            </a>
            <a className="link" href="#communaute">
              Voir la communauté
            </a>
          </div>
          <p className="fine">Gratuit pendant la bêta. Android prévu après le lancement iOS.</p>
        </div>

        <div className="hero-stage">
          <div className="live" aria-label="Exemple de notification">
            <div className="faces" aria-hidden="true">
              <span className="face f1">K</span>
              <span className="face f2">I</span>
              <span className="face f4">+3</span>
            </div>
            <div>
              Karim, Inès et 3 autres sont au Spot des Berges
              <small>il y a 12 min · 650 m</small>
            </div>
          </div>
          <Phone src={SCREENSHOTS.map} alt="Carte des spots AVENX en France" priority />
          <Phone src={SCREENSHOTS.social} alt="Fil d'activité des amis dans AVENX" priority />
        </div>
      </div>
    </section>
  );
}

export const HeroSection = memo(HeroSectionComponent);
