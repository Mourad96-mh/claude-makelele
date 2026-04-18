import { Helmet } from "react-helmet-async";
import styles from "./ReseauxSociaux.module.css";

const col4Images = [
  { src: "/reseaux/make-ambassadeur.jpeg", alt: "Makélélé ambassadeur" },
  { src: "/reseaux/make-with2boys.jpeg",   alt: "Makélélé avec deux joueurs" },
  { src: "/reseaux/make-psgAcade.jpeg",    alt: "Makélélé PSG Académie" },
  { src: "/reseaux/claude-acade.jpeg",     alt: "Makélélé académie" },
];

const col5Images = [
  { src: "/reseaux/claude-support.jpeg",   alt: "Makélélé support" },
  { src: "/reseaux/make-2.0.jpeg",         alt: "Makélélé 2.0" },
  { src: "/reseaux/make-support.jpeg",     alt: "Makélélé avec supporters" },
  { src: "/reseaux/make-ambassadeur.jpeg", alt: "Makélélé ambassadeur" },
];

export default function ReseauxSociaux() {
  return (
    <>
      <Helmet>
        <title>Réseaux Sociaux | Claude Makélélé — Site Officiel</title>
        <meta name="description" content="Suivez Claude Makélélé sur Instagram, X, Facebook, YouTube et LinkedIn." />
        <meta property="og:title" content="Réseaux Sociaux | Claude Makélélé — Site Officiel" />
        <meta property="og:image" content="/og-image.jpg" />
        <link rel="canonical" href="https://claudemakelele.com/reseaux-sociaux" />
      </Helmet>

      <div className={styles.grid}>

        {/* Cell 1 — make-avion */}
        <div className={styles.cellPortrait}>
          <img src="/reseaux/make-avion.jpeg" alt="Claude Makélélé en déplacement" loading="eager" />
        </div>

        {/* Cell 2 — Text */}
        <div className={styles.cellText}>
          <span className={styles.eyebrow}>Réseaux Sociaux</span>
          <h1 className={styles.name}>Claude Makélélé</h1>
          <p className={styles.intro}>
            Aujourd'hui incarne des valeurs crédibles pour les annonceurs et partenaires comme consultant DAZN, ambassadeur du PSG.
          </p>
          <ul className={styles.valuesList}>
            <li>Rayonnement mondial — Real Madrid, Chelsea, PSG, équipe de France</li>
            <li>Maturité professionnelle &amp; expertise</li>
            <li>Équilibre, efficacité, fiabilité, performance</li>
            <li>La référence absolue du milieu de terrain moderne mondial</li>
          </ul>
        </div>

        {/* Cell 3 — make-journalist */}
        <div className={styles.cellPhoto}>
          <img src="/reseaux/make-journalist.jpeg" alt="Makélélé face à la presse" loading="lazy" />
        </div>

        {/* Cell 4 — 4 stacked images */}
        <div className={styles.cellAction}>
          {col4Images.map((img) => (
            <div key={img.alt} className={styles.actionItem}>
              <img src={img.src} alt={img.alt} loading="lazy" />
            </div>
          ))}
        </div>

        {/* Cell 5 — 4 stacked images */}
        <div className={styles.cellLogos}>
          {col5Images.map((img, i) => (
            <div key={`${img.alt}-${i}`} className={styles.logoItem}>
              <img src={img.src} alt={img.alt} loading="lazy" />
            </div>
          ))}
        </div>

      </div>
    </>
  );
}
