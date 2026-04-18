import { Link } from "react-router-dom";
import { formatDate } from "../../utils/formatDate";
import styles from "./NewsCard.module.css";

export default function NewsCard({ article }) {
  return (
    <Link to={`/actualites/${article.slug}`} className={styles.card}>
      <div className={styles.imgWrap}>
        {article.image ? (
          <img src={article.image} alt={article.title} loading="lazy" />
        ) : (
          <div className={styles.placeholder}>Photo</div>
        )}
      </div>
      <div className={styles.body}>
        <p className={styles.category}>{article.category}</p>
        <h3 className={styles.title}>{article.title}</h3>
        <p className={styles.excerpt}>{article.excerpt}</p>
        <time className={styles.date}>{formatDate(article.date)}</time>
      </div>
    </Link>
  );
}
