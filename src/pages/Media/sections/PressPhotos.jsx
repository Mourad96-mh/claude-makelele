import { useIntersectionObserver } from "../../../hooks/useIntersectionObserver";
import styles from "./PressPhotos.module.css";

const docs = [
  { id: 1, name: "Dossier de presse 2024", type: "PDF", size: "4.2 MB", href: "#" },
  { id: 2, name: "Photos HD — Pack presse Real Madrid", type: "ZIP", size: "128 MB", href: "#" },
  { id: 3, name: "Photos HD — Pack presse Chelsea", type: "ZIP", size: "96 MB", href: "#" },
  { id: 4, name: "Biographie officielle courte (FR)", type: "PDF", size: "320 KB", href: "#" },
  { id: 5, name: "Biographie officielle courte (EN)", type: "PDF", size: "318 KB", href: "#" },
  { id: 6, name: "Logo & identité visuelle officielle", type: "ZIP", size: "12 MB", href: "#" },
];

export default function PressPhotos() {
  const ref = useIntersectionObserver();

  return (
    <div ref={ref} className={`${styles.wrap} reveal`}>
      <div className={styles.note}>
        <p>
          Ces ressources sont destinées aux professionnels des médias. Toute utilisation à des fins commerciales nécessite une autorisation préalable écrite.
        </p>
      </div>
      <ul className={styles.list}>
        {docs.map((doc) => (
          <li key={doc.id} className={styles.item}>
            <div className={styles.icon}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                <polyline points="14 2 14 8 20 8" />
              </svg>
            </div>
            <div className={styles.meta}>
              <span className={styles.name}>{doc.name}</span>
              <span className={styles.info}>{doc.type} · {doc.size}</span>
            </div>
            <a href={doc.href} className={styles.dl} aria-label={`Télécharger ${doc.name}`}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              Télécharger
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
