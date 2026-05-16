import { Helmet } from "react-helmet-async";
import styles from "./ReseauxSociaux.module.css";

const col4Images = [
  { src: "/imgs/reseaux/make-ambassadeur.jpeg", alt: "Makélélé ambassadeur" },
  { src: "/imgs/reseaux/make-with2boys.jpeg", alt: "Makélélé avec deux joueurs" },
  { src: "/imgs/reseaux/make-psgAcade.jpeg", alt: "Makélélé PSG Académie" },
  { src: "/imgs/reseaux/claude-acade.jpeg", alt: "Makélélé académie" },
];

const col5Images = [
  { src: "/imgs/reseaux/claude-support.jpeg", alt: "Makélélé support" },
  { src: "/imgs/reseaux/make-2.0.jpeg", alt: "Makélélé 2.0" },
  { src: "/imgs/reseaux/make-support.jpeg", alt: "Makélélé avec supporters" },
  { src: "/imgs/reseaux/make-ambassadeur.jpeg", alt: "Makélélé ambassadeur" },
];

export default function ReseauxSociaux() {
  return (
    <>
      <Helmet>
        <title>Partenariats & Réseaux Sociaux | Claude Makélélé — Site Officiel</title>
        <meta name="description" content="Suivez Claude Makélélé sur Instagram, X, Facebook. Ambassadeur de prestige, consultant DAZN, partenaire du PSG." />
        <meta property="og:title" content="Partenariats & Réseaux Sociaux | Claude Makélélé — Site Officiel" />
        <meta property="og:description" content="Suivez Claude Makélélé sur Instagram, X, Facebook. Ambassadeur de prestige, consultant DAZN, partenaire du PSG." />
        <meta property="og:image" content="https://claudemakelele.com/claude-maakele.jpeg" />
        <meta property="og:url" content="https://claudemakelele.com/partenariats" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Partenariats & Réseaux Sociaux | Claude Makélélé — Site Officiel" />
        <meta name="twitter:description" content="Suivez Claude Makélélé sur Instagram, X, Facebook. Ambassadeur de prestige, consultant DAZN, partenaire du PSG." />
        <meta name="twitter:image" content="https://claudemakelele.com/claude-maakele.jpeg" />
        <link rel="canonical" href="https://claudemakelele.com/partenariats" />
      </Helmet>

      <div className={styles.grid}>
        {/* Cell 1 — make-avion */}
        <div className={styles.cellPortrait}>
          <img
            src="/imgs/reseaux/make-avion.jpeg"
            alt="Claude Makélélé en déplacement"
            loading="eager"
          />
        </div>

        {/* Cell 2 — Text */}
        <div className={styles.cellText}>
          <span className={styles.eyebrow}>Réseaux Sociaux</span>
          <h1 className={styles.name}>Claude Makélélé</h1>
          <p className={styles.intro}>
            Aujourd'hui incarne des valeurs crédibles pour les annonceurs et
            partenaires comme consultant DAZN, ambassadeur du PSG.
          </p>
          <ul className={styles.valuesList}>
            <li>
              Rayonnement mondial — Real Madrid, Chelsea, PSG, équipe de France
            </li>
            <li>Maturité professionnelle &amp; expertise</li>
            <li>Équilibre, efficacité, fiabilité, performance</li>
            <li>La référence absolue du milieu de terrain moderne mondial</li>
          </ul>

          <ul className={styles.socialLinks}>
            <li>
              <a
                href="https://www.instagram.com/makeleleofficial/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <circle cx="12" cy="12" r="4"/>
                  <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" stroke="none"/>
                </svg>
                <span>@makeleleofficial</span>
                <em>585K abonnés</em>
              </a>
            </li>
            <li>
              <a
                href="https://x.com/ClaudeMakelele"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
                <span>@ClaudeMakelele</span>
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/Makeleleofficial/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                </svg>
                <span>Makeleleofficial</span>
                <em>1,2M likes</em>
              </a>
            </li>
          </ul>
        </div>

        {/* Cell 3 — make-journalist */}
        <div className={styles.cellPhoto}>
          <img
            src="/imgs/reseaux/make-journalist.jpeg"
            alt="Makélélé face à la presse"
            loading="lazy"
          />
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
