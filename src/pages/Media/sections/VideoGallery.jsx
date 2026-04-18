import { useIntersectionObserver } from "../../../hooks/useIntersectionObserver";
import styles from "./VideoGallery.module.css";

const videos = [
  {
    id: 1,
    title: "Le rôle Makélélé — Analyse tactique",
    description: "Comment Claude Makélélé a redéfini le poste de milieu récupérateur.",
    youtubeId: "dQw4w9WgXcQ",
    duration: "8:24",
  },
  {
    id: 2,
    title: "Top 20 tackles — Real Madrid",
    description: "Les interventions les plus marquantes en Liga.",
    youtubeId: "dQw4w9WgXcQ",
    duration: "12:05",
  },
  {
    id: 3,
    title: "Finale Ligue des Champions 2002",
    description: "Le match qui a fait de lui une légende européenne.",
    youtubeId: "dQw4w9WgXcQ",
    duration: "5:47",
  },
  {
    id: 4,
    title: "Interview exclusive — Chelsea FC",
    description: "Sa vision du football et son adaptation à la Premier League.",
    youtubeId: "dQw4w9WgXcQ",
    duration: "15:30",
  },
  {
    id: 5,
    title: "Coupe du Monde 1998 — Le sacre",
    description: "Sa contribution au titre mondial avec les Bleus.",
    youtubeId: "dQw4w9WgXcQ",
    duration: "9:12",
  },
  {
    id: 6,
    title: "Hommage — Ballon d'Or FIFA XI 2003",
    description: "Reconnaissance mondiale pour sa saison exceptionnelle.",
    youtubeId: "dQw4w9WgXcQ",
    duration: "3:55",
  },
];

export default function VideoGallery() {
  const ref = useIntersectionObserver();

  return (
    <div ref={ref} className={`${styles.grid} reveal`}>
      {videos.map((video) => (
        <article key={video.id} className={styles.card}>
          <div className={styles.embedWrap}>
            <iframe
              src={`https://www.youtube.com/embed/${video.youtubeId}`}
              title={video.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              loading="lazy"
            />
          </div>
          <div className={styles.info}>
            <span className={styles.duration}>{video.duration}</span>
            <h3 className={styles.title}>{video.title}</h3>
            <p className={styles.desc}>{video.description}</p>
          </div>
        </article>
      ))}
    </div>
  );
}
