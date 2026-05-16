import { Helmet } from "react-helmet-async";
import styles from "./Actualites.module.css";


export default function Actualites() {
  return (
    <>
      <Helmet>
        <title>Claude Makélélé — Actualités | Site Officiel</title>
        <meta name="description" content="Toutes les actualités, articles de presse et événements autour de Claude Makélélé." />
        <meta property="og:title" content="Claude Makélélé — Actualités | Site Officiel" />
        <meta property="og:description" content="Toutes les actualités, articles de presse et événements autour de Claude Makélélé." />
        <meta property="og:image" content="https://claudemakelele.com/claude-maakele.jpeg" />
        <meta property="og:url" content="https://claudemakelele.com/actualites" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Claude Makélélé — Actualités | Site Officiel" />
        <meta name="twitter:description" content="Toutes les actualités, articles de presse et événements autour de Claude Makélélé." />
        <meta name="twitter:image" content="https://claudemakelele.com/claude-maakele.jpeg" />
        <link rel="canonical" href="https://claudemakelele.com/actualites" />
      </Helmet>

      <div className={styles.grid}>

        {/* Cell 1 — Portrait */}
        <div className={styles.cellPortrait}>
          <img src="/imgs/actualites/claude-press.jpeg" alt="Claude Makélélé" loading="eager" />
        </div>

        {/* Cell 2 — Text */}
        <div className={styles.cellText}>
          <span className={styles.eyebrow}>Site Officiel</span>
          <h1 className={styles.name}>Claude Makélélé</h1>
          <p className={styles.bio}>
            Aujourd'hui, Claude Makélélé c'est l'incarnation du symbole{" "}
            <strong>"PREMIUM"</strong> en terme de marketing et{" "}
            <strong>l'ambassadeur naturel de la FIFA – UEFA</strong>.
            Il est convoité par plusieurs sphères institutionnelles de notoriétés mondiales
            pour associer leurs images à celui qui crée dans les différents publics
            l'émotion, l'admiration et le respect.
          </p>
          <p className={styles.bio}>
            En maître de cérémonie de la Champions League, la complicité et la joie
            des retrouvailles avec <strong>Beckham · Benzema · Mbappé · Vinicius…</strong>
            {" "}et toujours en complicité avec <strong>Zidane</strong>.
          </p>
        </div>

        {/* Cell 3 — Photo */}
        <div className={styles.cellGold}>
          <img src="/imgs/actualites/make-1.jpeg" alt="Claude Makélélé" loading="lazy" />
          <div className={styles.goldOverlay}>
            <span className={styles.goldQuote}>"Le moteur invisible de toute grande équipe."</span>
          </div>
        </div>

        {/* Cell 4 — 5 stacked photos */}
        <div className={styles.cellAction}>
          {["ronaldo", 2, 3, 4, 5].map((n) => (
            <div key={n} className={styles.actionItem}>
              <img src={`/imgs/actualites/make-${n}.jpeg`} alt={`Makélélé ${n}`} loading="lazy" />
            </div>
          ))}
        </div>

        {/* Cell 5 — stacked photos make-5 to make-10 */}
        <div className={styles.cellLogos}>
          {[5, 6, 7, 8, 9].map((n) => (
            <div key={n} className={styles.logoItem}>
              <img src={`/imgs/actualites/make-${n}.jpeg`} alt={`Makélélé ${n}`} loading="lazy" />
            </div>
          ))}
        </div>

      </div>
    </>
  );
}
