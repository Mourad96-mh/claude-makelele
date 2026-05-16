import { Link } from "react-router-dom";
import SocialIcons from "../ui/SocialIcons";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>

        {/* Logo + tagline */}
        <div className={styles.brand}>
          <Link to="/">
            <img src="/logo.png" alt="Claude Makélélé" className={styles.logoImg} />
          </Link>
        </div>

        {/* Nav links */}
        <nav className={styles.nav}>
          <Link to="/" className={styles.navLink}>Accueil</Link>
          <Link to="/palmares" className={styles.navLink}>Palmarès</Link>
          <Link to="/boutique" className={styles.navLink}>Boutique</Link>
          <Link to="/contact" className={styles.navLink}>Contact</Link>
        </nav>

        {/* Social icons */}
        <div className={styles.social}>
          <SocialIcons />
        </div>

      </div>

      {/* Bottom bar */}
      <div className={styles.bottom}>
        <p className={styles.copy}>
          © {new Date().getFullYear()} Claude Makélélé. Tous droits réservés.
        </p>
        <div className={styles.legalLinks}>
          <Link to="/mentions-legales" className={styles.legalLink}>Mentions légales</Link>
          <Link to="/confidentialite" className={styles.legalLink}>Confidentialité</Link>
        </div>
      </div>
    </footer>
  );
}
