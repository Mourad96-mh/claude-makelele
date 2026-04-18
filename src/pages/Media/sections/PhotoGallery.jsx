import { useState } from "react";
import { useIntersectionObserver } from "../../../hooks/useIntersectionObserver";
import styles from "./PhotoGallery.module.css";

const photos = [
  { id: 1, src: null, alt: "Real Madrid 2002 — Finale Ligue des Champions", year: "2002" },
  { id: 2, src: null, alt: "Coupe du Monde 1998 — Équipe de France", year: "1998" },
  { id: 3, src: null, alt: "Chelsea FC — Portrait officiel", year: "2006" },
  { id: 4, src: null, alt: "PSG — Dernier match en club", year: "2011" },
  { id: 5, src: null, alt: "Real Madrid — El Clásico", year: "2003" },
  { id: 6, src: null, alt: "Équipe de France — Portrait", year: "2004" },
  { id: 7, src: null, alt: "Chelsea — Premier League", year: "2005" },
  { id: 8, src: null, alt: "Real Madrid — La Liga", year: "2004" },
  { id: 9, src: null, alt: "Celta Vigo — Liga espagnole", year: "2000" },
];

export default function PhotoGallery() {
  const [lightbox, setLightbox] = useState(null);
  const ref = useIntersectionObserver();

  function open(photo) {
    setLightbox(photo);
    document.body.style.overflow = "hidden";
  }

  function close() {
    setLightbox(null);
    document.body.style.overflow = "";
  }

  function handleKeyDown(e) {
    if (e.key === "Escape") close();
    if (e.key === "ArrowRight") {
      const idx = photos.findIndex((p) => p.id === lightbox.id);
      const next = photos[(idx + 1) % photos.length];
      setLightbox(next);
    }
    if (e.key === "ArrowLeft") {
      const idx = photos.findIndex((p) => p.id === lightbox.id);
      const prev = photos[(idx - 1 + photos.length) % photos.length];
      setLightbox(prev);
    }
  }

  return (
    <>
      <div ref={ref} className={`${styles.grid} reveal`}>
        {photos.map((photo) => (
          <button
            key={photo.id}
            className={styles.item}
            onClick={() => open(photo)}
            aria-label={`Ouvrir la photo : ${photo.alt}`}
          >
            <div className={styles.placeholder}>
              <span className={styles.placeholderYear}>{photo.year}</span>
              <span className={styles.placeholderLabel}>CM</span>
            </div>
            <div className={styles.overlay}>
              <svg className={styles.zoomIcon} width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.35-4.35" />
                <path d="M11 8v6M8 11h6" />
              </svg>
            </div>
            <p className={styles.caption}>{photo.alt}</p>
          </button>
        ))}
      </div>

      {lightbox && (
        <div
          className={`${styles.lightbox} ${styles.open}`}
          onClick={close}
          onKeyDown={handleKeyDown}
          role="dialog"
          aria-modal="true"
          aria-label={lightbox.alt}
          tabIndex={0}
        >
          <button className={styles.lightboxClose} onClick={close} aria-label="Fermer">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M18 6 6 18M6 6l12 12" />
            </svg>
          </button>
          <div className={styles.lightboxContent} onClick={(e) => e.stopPropagation()}>
            <div className={styles.lightboxPlaceholder}>
              <span className={styles.lightboxYear}>{lightbox.year}</span>
              <span className={styles.lightboxAlt}>{lightbox.alt}</span>
            </div>
          </div>
          <p className={styles.lightboxCaption}>{lightbox.alt}</p>
        </div>
      )}
    </>
  );
}
