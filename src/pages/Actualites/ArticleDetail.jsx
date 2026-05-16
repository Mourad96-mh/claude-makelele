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
        <meta name="description" content={article.excerpt} />
        <meta property="og:title" content={`${article.title} | Claude Makélélé`} />
        <meta property="og:description" content={article.excerpt} />
        <meta property="og:image" content="https://xn--claudemakll-jbbbb.com/claude-maakele.jpeg" />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={`https://xn--claudemakll-jbbbb.com/actualites/${article.slug}`} />
        <meta property="article:published_time" content={article.date} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${article.title} | Claude Makélélé`} />
        <meta name="twitter:description" content={article.excerpt} />
        <meta name="twitter:image" content="https://xn--claudemakll-jbbbb.com/claude-maakele.jpeg" />
        <link rel="canonical" href={`https://xn--claudemakll-jbbbb.com/actualites/${article.slug}`} />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": article.title,
            "description": article.excerpt,
            "datePublished": article.date,
            "author": {"@type": "Person", "name": "Claude Makélélé"},
            "publisher": {"@type": "Organization", "name": "Claude Makélélé — Site Officiel", "url": "https://xn--claudemakll-jbbbb.com"},
            "url": `https://xn--claudemakll-jbbbb.com/actualites/${article.slug}`
          })}
        </script>
      </Helmet>
      <article className={styles.article}>
        <div className="container">
          <Link to="/actualites" className={styles.back}>← Actualités</Link>
          <span className={styles.category}>{article.category}</span>
          <h1 className={styles.title}>{article.title}</h1>
          <time className={styles.date} dateTime={article.date}>{formatDate(article.date)}</time>
          <div className={styles.imgPlaceholder} />
          <p className={styles.body}>{article.excerpt}</p>
        </div>
      </article>
    </PageWrapper>
  );
}
