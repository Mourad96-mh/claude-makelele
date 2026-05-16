import { NavLink } from "react-router-dom";
import { useCartStore } from "../../store/cartStore";
import { useUiStore } from "../../store/uiStore";
import SocialIcons from "../ui/SocialIcons";
import styles from "./Navbar.module.css";

const navLinks = [
  { to: "/", label: "Accueil", end: true },
  { to: "/actualites", label: "Actualités" },
  { to: "/palmares", label: "Palmarès" },
  { to: "/boutique", label: "Boutique" },
  { to: "/partenariats", label: "Partenariats" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const count = useCartStore((s) => s.items.reduce((n, i) => n + i.qty, 0));
  const { menuOpen, toggleMenu, closeMenu, openCart } = useUiStore();

  return (
    <nav className={styles.navbar}>
      <NavLink to="/" className={styles.logo} onClick={closeMenu}>
        <img src="/logo.png" alt="Claude Makélélé" className={styles.logoImg} />
      </NavLink>

      {/* Desktop links */}
      <div className={`${styles.links} ${menuOpen ? styles.open : ""}`}>
        {navLinks.map(({ to, label, end }) => (
          <NavLink
            key={to}
            to={to}
            end={end}
            className={({ isActive }) =>
              `${styles.link} ${isActive ? styles.active : ""}`
            }
            onClick={closeMenu}
          >
            {label}
          </NavLink>
        ))}
      </div>

      <div className={styles.navRight}>
        {/* Social icons — desktop only */}
        <SocialIcons className={styles.navSocials} />

{/* Burger mobile */}
        <button
          className={`${styles.burger} ${menuOpen ? styles.open : ""}`}
          onClick={toggleMenu}
          aria-label="Menu"
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </nav>
  );
}
