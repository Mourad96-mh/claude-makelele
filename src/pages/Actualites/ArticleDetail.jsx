import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { news } from "../../data/news";
import { formatDate } from "../../utils/formatDate";
import PageWrapper from "../../components/layout/PageWrapper";
import styles from "./ArticleDetail.module.css";

export default function ArticleDetail() {
  const { slug } = useParams();
  const article = news.find((a) => a.slug === slug);

  if (!article) {
    return (
      <PageWrapper>
        <div className={styles.notFound}>
          <p>Article introuvable.</p>
          <Link to="/actualites">← Retour aux actualités</Link>
        </div>
      </PageWrapper>
    );
  }

  return (
    <PageWrapper>
      <Helmet>
        <title>{article.title} | Claude Makélélé</title>
      </Helmet>
      <article className={styles.article}>
        <div className="container">
          <Link to="/actualites" className={styles.back}>← Actualités</Link>
          <span className={styles.category}>{article.category}</span>
          <h1 className={styles.title}>{article.title}</h1>
          <time className={styles.date}>{formatDate(article.date)}</time>
          <div className={styles.imgPlaceholder} />
          <p className={styles.body}>{article.excerpt}</p>
        </div>
      </article>
    </PageWrapper>
  );
}
