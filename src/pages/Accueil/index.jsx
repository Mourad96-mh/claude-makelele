import { Helmet } from "react-helmet-async";
import styles from "./Accueil.module.css";

const logos = [
  { src: "/madrid-logo.jpeg", alt: "Real Madrid" },
  { src: "/chelsea-logo.jpeg", alt: "Chelsea FC" },
  { src: "/psg-logo.jpeg", alt: "Paris Saint-Germain" },
  { src: "/french-logo.jpeg", alt: "Équipe de France" },
];

export default function Accueil() {
  return (
    <>
      <Helmet>
        <title>Claude Makélélé | Site Officiel</title>
        <meta name="description" content="Site officiel de Claude Makélélé — légende du football mondial, icône du Real Madrid, Chelsea et de l'équipe de France." />
        <meta property="og:title" content="Claude Makélélé | Site Officiel" />
        <meta property="og:description" content="Site officiel de Claude Makélélé — légende du football mondial, icône du Real Madrid, Chelsea et de l'équipe de France." />
        <meta property="og:image" content="https://xn--claudemakll-jbbbb.com/claude-maakele.jpeg" />
        <meta property="og:url" content="https://xn--claudemakll-jbbbb.com/" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Claude Makélélé | Site Officiel" />
        <meta name="twitter:description" content="Site officiel de Claude Makélélé — légende du football mondial, icône du Real Madrid, Chelsea et de l'équipe de France." />
        <meta name="twitter:image" content="https://xn--claudemakll-jbbbb.com/claude-maakele.jpeg" />
        <link rel="canonical" href="https://xn--claudemakll-jbbbb.com/" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Claude Makélélé",
            "birthDate": "1973-02-18",
            "birthPlace": {"@type": "Place", "name": "Kinshasa, République Démocratique du Congo"},
            "nationality": "Français",
            "jobTitle": "Footballeur professionnel (retraité)",
            "url": "https://xn--claudemakll-jbbbb.com",
            "image": "https://xn--claudemakll-jbbbb.com/claude-maakele.jpeg",
            "description": "Claude Makélélé est un footballeur français, légende du Real Madrid, Chelsea, PSG et de l'équipe de France, créateur du « rôle Makélélé ».",
            "sameAs": [
              "https://www.instagram.com/makeleleofficial/",
              "https://x.com/ClaudeMakelele",
              "https://www.facebook.com/Makeleleofficial/",
              "https://fr.wikipedia.org/wiki/Claude_Mak%C3%A9l%C3%A9l%C3%A9"
            ]
          })}
        </script>
      </Helmet>

      <div className={styles.grid}>

        {/* Cell 1 — Portrait */}
        <div className={styles.cellPortrait}>
          <img src="/claude-maakele.jpeg" alt="Claude Makélélé" loading="eager" />
        </div>

        {/* Cell 2 — Text */}
        <div className={styles.cellText}>
          <span className={styles.eyebrow}>Site Officiel</span>
          <h1 className={styles.name}>Claude Makélélé</h1>
          <p className={styles.bio}>
            Une légende d'une lignée d'exception de valeurs d'excellence rares :
          </p>
          <ul className={styles.legendList}>
            <li>Un architecte d'une science tactique moderne du milieu de terrain pour les nouvelles stars du football mondial.</li>
            <li>Une légende qui a donné son nom générique au dictionnaire — <em>"The Makélélé Role"</em>.</li>
            <li>La métaphore de Zidane au Real Madrid : <em>"Pourquoi rajouter une couche dorée sur la Bentley quand vous perdez le moteur ?"</em></li>
            <li>Le socle de la fondation solide.</li>
            <li>L'insubmersible.</li>
            <li>La sentinelle du milieu de terrain.</li>
            <li>Le travailleur de l'ombre.</li>
            <li>La légende qui a contribué à l'apogée du Real Madrid, de Chelsea, du PSG et de l'équipe de France.</li>
            <li>La légende qui a sacrifié son marketing d'image pour ses coéquipiers et son club.</li>
            <li>La légende au retour sur investissement gagnant.</li>
          </ul>
        </div>

        {/* Cell 3 — Gold texture */}
        <div className={styles.cellGold}>
          <img src="/gold.jpeg" alt="Or" loading="lazy" />
          <div className={styles.goldOverlay}>
            <span className={styles.goldQuote}>"Le moteur invisible de toute grande équipe."</span>
          </div>
        </div>

        {/* Cell 4 — Action photo */}
        <div className={styles.cellAction}>
          <img src="/makelele-real.jpeg" alt="Makélélé au Real Madrid" loading="lazy" />
        </div>

        {/* Cell 5 — Logos */}
        <div className={styles.cellLogos}>
          {logos.map((logo) => (
            <div key={logo.alt} className={styles.logoItem}>
              <img src={logo.src} alt={logo.alt} loading="lazy" />
            </div>
          ))}
        </div>

      </div>
    </>
  );
}
