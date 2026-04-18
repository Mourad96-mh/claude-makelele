import { useState } from "react";
import { Helmet } from "react-helmet-async";
import PageWrapper from "../../components/layout/PageWrapper";
import SectionTitle from "../../components/ui/SectionTitle";
import ProductCard from "../../components/shared/ProductCard";
import { products } from "../../data/products";
import styles from "./Boutique.module.css";

const categories = ["Tous", "Maillots", "Accessoires", "Livres & Biographies", "Éditions limitées"];

export default function Boutique() {
  const [activeCategory, setActiveCategory] = useState("Tous");

  const filtered = activeCategory === "Tous"
    ? products
    : products.filter((p) => p.category === activeCategory);

  return (
    <>
      <Helmet>
        <title>Boutique Officielle | Claude Makélélé</title>
        <meta name="description" content="Boutique officielle Claude Makélélé — maillots, accessoires, livres et éditions limitées." />
        <link rel="canonical" href="https://claudemakelele.com/boutique" />
      </Helmet>

      <PageWrapper>
        <section className={styles.hero}>
          <div className="container">
            <p className={styles.eyebrow}>Boutique Officielle</p>
            <h1 className={styles.title}>Collection</h1>
            <p className={styles.subtitle}>Produits officiels signés par la légende</p>
          </div>
        </section>

        <section className={styles.content}>
          <div className="container">
            <nav className={styles.filters} aria-label="Filtrer par catégorie">
              {categories.map((cat) => (
                <button
                  key={cat}
                  className={`${styles.filter} ${activeCategory === cat ? styles.active : ""}`}
                  onClick={() => setActiveCategory(cat)}
                >
                  {cat}
                </button>
              ))}
            </nav>

            {filtered.length === 0 ? (
              <p className={styles.empty}>Aucun produit dans cette catégorie.</p>
            ) : (
              <div className={styles.grid}>
                {filtered.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </section>
      </PageWrapper>
    </>
  );
}
