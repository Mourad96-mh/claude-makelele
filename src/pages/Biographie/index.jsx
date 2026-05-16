import { Helmet } from "react-helmet-async";
import styles from "./Biographie.module.css";

const col4Images = [
  { src: "/imgs/biographie/claude-messi.jpeg",      alt: "Makélélé et Messi" },
  { src: "/imgs/biographie/claude-ronaldinho.jpeg",  alt: "Makélélé et Ronaldinho" },
  { src: "/imgs/biographie/claude-real.jpeg",        alt: "Makélélé au Real Madrid" },
  { src: "/imgs/biographie/claude-psg.jpeg",         alt: "Makélélé au PSG" },
  { src: "/imgs/biographie/claude-champions.jpeg",   alt: "Champions League" },
];

const col5Images = [
  { src: "/imgs/biographie/claude-chelsea.jpeg",  alt: "Makélélé à Chelsea" },
  { src: "/imgs/biographie/claude-zid.jpeg",      alt: "Makélélé et Zidane" },
  { src: "/imgs/biographie/real-fans.jpeg",       alt: "Fans du Real Madrid" },
  { src: "/imgs/biographie/bernabeau.jpeg",       alt: "Stade Santiago Bernabéu" },
  { src: "/imgs/biographie/claude-title.jpeg",    alt: "Makélélé avec un trophée" },
];

export default function Biographie() {
  return (
    <>
      <Helmet>
        <title>Claude Makélélé — Biographie | Site Officiel</title>
        <meta name="description" content="Découvrez la biographie de Claude Makélélé, son parcours de Brest au Real Madrid, ses trophées et son style tactique légendaire." />
        <meta property="og:title" content="Claude Makélélé — Biographie | Site Officiel" />
        <meta property="og:description" content="Découvrez la biographie de Claude Makélélé, son parcours de Brest au Real Madrid, ses trophées et son style tactique légendaire." />
        <meta property="og:image" content="https://claudemakelele.com/claude-maakele.jpeg" />
        <meta property="og:url" content="https://claudemakelele.com/palmares" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Claude Makélélé — Biographie | Site Officiel" />
        <meta name="twitter:description" content="Découvrez la biographie de Claude Makélélé, son parcours de Brest au Real Madrid, ses trophées et son style tactique légendaire." />
        <meta name="twitter:image" content="https://claudemakelele.com/claude-maakele.jpeg" />
        <link rel="canonical" href="https://claudemakelele.com/palmares" />
      </Helmet>

      <div className={styles.grid}>

        {/* Cell 1 — Champions League portrait */}
        <div className={styles.cellPortrait}>
          <img src="/imgs/biographie/claude-championsLeague.jpeg" alt="Claude Makélélé en Ligue des Champions" loading="eager" />
        </div>

        {/* Cell 2 — Champions League portrait 2 */}
        <div className={styles.cellPortrait2}>
          <img src="/imgs/biographie/claude-championsLeague1.jpeg" alt="Claude Makélélé — Champions League" loading="eager" />
        </div>

        {/* Cell 3 — Text */}
        <div className={styles.cellText}>
          <span className={styles.eyebrow}>Biographie</span>
          <h1 className={styles.name}>Claude Makélélé</h1>
          <p className={styles.intro}>
            Une légende et une carrière fulgurante dans des clubs de prestiges planétaires.
          </p>
          <ul className={styles.clubsList}>
            {[
              "Real Madrid",
              "Chelsea",
              "PSG",
              "Équipe de France",
              "Nantes",
              "Marseille",
              "Celta Vigo",
            ].map((club) => (
              <li key={club} className={styles.clubsItem}>
                <span className={styles.clubDot} />
                {club}
              </li>
            ))}
          </ul>
        </div>

        {/* Cell 4 — 5 stacked images */}
        <div className={styles.cellAction}>
          {col4Images.map((img) => (
            <div key={img.alt} className={styles.actionItem}>
              <img src={img.src} alt={img.alt} loading="lazy" />
            </div>
          ))}
        </div>

        {/* Cell 5 — 5 stacked images */}
        <div className={styles.cellLogos}>
          {col5Images.map((img) => (
            <div key={img.alt} className={styles.logoItem}>
              <img src={img.src} alt={img.alt} loading="lazy" />
            </div>
          ))}
        </div>

      </div>
    </>
  );
}
