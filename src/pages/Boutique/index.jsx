import { Helmet } from "react-helmet-async";
import styles from "./Boutique.module.css";

export default function Boutique() {
  return (
    <>
      <Helmet>
        <title>Boutique — En Construction | Claude Makélélé</title>
        <meta name="description" content="La boutique officielle Claude Makélélé arrive bientôt." />
        <meta name="robots" content="noindex, follow" />
        <link rel="canonical" href="https://xn--claudemakll-jbbbb.com/boutique" />
      </Helmet>

      <div className={styles.construction}>
        <div className={styles.constructionInner}>
          <span className={styles.constructionIcon}>
            <svg width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
              <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
            </svg>
          </span>
          <p className={styles.constructionEyebrow}>Boutique Officielle</p>
          <h1 className={styles.constructionTitle}>En Construction</h1>
          <p className={styles.constructionText}>
            La boutique officielle Claude Makélélé sera bientôt disponible.<br />
            Revenez prochainement pour découvrir notre collection.
          </p>
          <div className={styles.constructionDivider} />
          <p className={styles.constructionContact}>
            Pour toute demande de produit ou partenariat, contactez-nous via la page{" "}
            <a href="/contact" className={styles.constructionLink}>Contact</a>.
          </p>
        </div>
      </div>
    </>
  );
}
