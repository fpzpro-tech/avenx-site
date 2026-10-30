import { memo } from "react";

// Contenu d'exemple : illustre le fil, le classement, les défis et l'XP de l'app.
const posts = [
  {
    initial: "I",
    tone: "f2",
    name: "Inès",
    context: "au Spot des Berges · 18:42",
    what: "Premier muscle-up validé",
    detail: "après 7 semaines",
    respect: 41,
    respected: true,
    extra: "12 commentaires",
  },
  {
    initial: "K",
    tone: "f1",
    name: "Karim",
    context: "au City stade Jean-Moulin · 17:10",
    what: "5 × 10 tractions · 4 × 15 dips",
    detail: "38 min",
    respect: 9,
    respected: false,
    extra: "Te défie sur les tractions",
  },
  {
    initial: "T",
    tone: "f3",
    name: "Théo",
    context: "a ajouté un spot · 15:03",
    what: "Parc des Sports, barres + anneaux",
    detail: "éclairé le soir",
    respect: 23,
    respected: false,
    extra: "6 y vont ce soir",
  },
] as const;

const leaderboard = [
  { rank: 1, name: "Karim", xp: "2 120 XP", king: true },
  { rank: 2, name: "Maëlle", xp: "1 870 XP" },
  { rank: 3, name: "Toi", xp: "1 710 XP", me: true },
  { rank: 4, name: "Inès", xp: "1 505 XP" },
] as const;

const badges = [
  { label: "Premier muscle-up" },
  { label: "10 spots visités" },
  { label: "Roi du spot ×2" },
  { label: "30 jours d'affilée", locked: true },
] as const;

const gains = [
  { label: "Séance terminée au Spot des Berges", xp: "+70 XP" },
  { label: "Nouveau record : 12 tractions d'affilée", xp: "+150 XP" },
  { label: "Séance à plusieurs (3 potes)", xp: "+40 XP" },
  { label: "Défi 1 000 dips en équipe, contribution", xp: "+120 XP" },
  { label: "Nouveau spot ajouté et validé", xp: "+50 XP" },
] as const;

const points = [
  {
    title: "Ton fil, tes potes",
    text: "Tu suis qui tu veux. Leurs séances, leurs records et leurs nouveaux spots arrivent dans ton fil.",
  },
  {
    title: "De l'XP à chaque séance",
    text: "Séances, records, défis, nouveaux spots : tout rapporte de l'XP. Tu montes de niveau, et le Roi du spot change chaque semaine.",
  },
  {
    title: "Des défis entre spots",
    text: "Un quartier contre un autre, une équipe contre une autre. C'est ce qui fait revenir le jeudi soir.",
  },
] as const;

function CommunitySectionComponent() {
  return (
    <section className="comm" id="communaute">
      <div className="wrap">
        <div className="comm-head">
          <div>
            <p className="label">2 · La communauté</p>
            <h2>
              Seul on s&apos;entraîne. <em>Ensemble on progresse.</em>
            </h2>
          </div>
          <p>
            Comme une sortie vélo sur Strava,{" "}
            <strong>chaque séance AVENX apparaît dans le fil de tes amis.</strong>{" "}
            Ils réagissent, te
            défient, et chaque séance te rapporte de l&apos;XP : tu montes de niveau, tu débloques des
            badges et tu grimpes au classement de ton spot.
          </p>
        </div>

        <div className="comm-grid">
          <div className="panel">
            <div className="panel-head">
              <h3>Fil d&apos;activité</h3>
              <span className="mono">Tes amis · aujourd&apos;hui</span>
            </div>
            {posts.map((post) => (
              <article className="post" key={post.name}>
                <span className={`face ${post.tone}`} aria-hidden="true">
                  {post.initial}
                </span>
                <div>
                  <p className="post-who">
                    <b>{post.name}</b> <span>{post.context}</span>
                  </p>
                  <p className="post-what">
                    {post.what} <span>{post.detail}</span>
                  </p>
                  <div className="post-react">
                    <span className={post.respected ? "chip on" : "chip"}>Respect · {post.respect}</span>
                    <span className="chip">{post.extra}</span>
                  </div>
                </div>
              </article>
            ))}
            <p className="panel-note">
              Exemples de publications. Les vraies viennent des séances enregistrées dans l&apos;app.
            </p>
          </div>

          <div className="stack">
            <div className="panel">
              <div className="panel-head">
                <h3>Roi du spot</h3>
                <span className="mono">Spot des Berges · semaine 44</span>
              </div>
              <table className="board">
                <tbody>
                  {leaderboard.map((row) => (
                    <tr key={row.rank} className={"me" in row ? "me" : undefined}>
                      <td className="rank">{row.rank}</td>
                      <td>
                        {row.name}
                        {"king" in row && <span className="crown">Roi du spot</span>}
                      </td>
                      <td className="score">{row.xp}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="panel">
              <div className="challenge">
                <p className="label">Défi du spot</p>
                <h4>1 000 dips en équipe</h4>
                <p>Les habitués du Spot des Berges contre ceux du City stade, jusqu&apos;à dimanche.</p>
                <div className="bar" role="img" aria-label="640 dips sur 1 000">
                  <i />
                </div>
                <div className="bar-legend">
                  <span>640 / 1 000</span>
                  <span>23 participants · J-3</span>
                </div>
              </div>
            </div>
          </div>

          <div className="panel xp">
            <div>
              <p className="label">Ta progression</p>
              <div className="lvl">
                <b>14</b>
                <span>
                  Niveau
                  <br />
                  Barre de fer
                </span>
              </div>
              <div className="bar" role="img" aria-label="2 340 XP sur 3 000 pour le niveau 15">
                <i />
              </div>
              <div className="bar-legend">
                <span>2 340 / 3 000 XP</span>
                <span>Niveau 15 dans 660 XP</span>
              </div>
              <div className="badges">
                {badges.map((badge) => (
                  <span key={badge.label} className={"locked" in badge ? "badge locked" : "badge"}>
                    {badge.label}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <p className="label">Cette semaine</p>
              <ul className="gains">
                {gains.map((gain) => (
                  <li key={gain.label}>
                    <span>{gain.label}</span>
                    <span>{gain.xp}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="comm-points">
          {points.map((point) => (
            <div key={point.title}>
              <h3>{point.title}</h3>
              <p>{point.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export const CommunitySection = memo(CommunitySectionComponent);
