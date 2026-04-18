import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import PageWrapper from "../../components/layout/PageWrapper";
import Button from "../../components/ui/Button";
import Badge from "../../components/ui/Badge";
import { products } from "../../data/products";
import { useCartStore } from "../../store/cartStore";
import { formatPrice } from "../../utils/formatPrice";
import styles from "./ProductDetail.module.css";

export default function ProductDetail() {
  const { id } = useParams();
  const product = products.find((p) => p.id === Number(id));
  const addItem = useCartStore((s) => s.addItem);

  if (!product) {
    return (
      <PageWrapper>
        <div className={styles.notFound}>
          <p>Produit introuvable.</p>
          <Link to="/boutique">← Retour à la boutique</Link>
        </div>
      </PageWrapper>
    );
  }

  function handleAdd() {
    addItem(product);
  }

  return (
    <>
      <Helmet>
        <title>{product.name} | Boutique Claude Makélélé</title>
        <meta name="description" content={product.description} />
        <link rel="canonical" href={`https://claudemakelele.com/boutique/${product.id}`} />
      </Helmet>

      <PageWrapper>
        <div className={styles.wrap}>
          <div className="container">
            <Link to="/boutique" className={styles.back}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M19 12H5M12 19l-7-7 7-7" />
              </svg>
              Boutique
            </Link>

            <div className={styles.layout}>
              <div className={styles.imageSide}>
                <div className={styles.imagePlaceholder}>
                  <span className={styles.imagePricePlaceholder}>{formatPrice(product.price)}</span>
                  <span className={styles.imageCat}>{product.category}</span>
                </div>
              </div>

              <div className={styles.infoSide}>
                {product.badge && <Badge label={product.badge} />}
                <h1 className={styles.name}>{product.name}</h1>
                <p className={styles.price}>{formatPrice(product.price)}</p>
                <p className={styles.desc}>{product.description}</p>

                <div className={styles.actions}>
                  <Button variant="primary" onClick={handleAdd}>
                    Ajouter au panier
                  </Button>
                  <Link to="/contact" className={styles.linkBtn}>
                    Demande spéciale
                  </Link>
                </div>

                <div className={styles.meta}>
                  <p><span>Catégorie</span> {product.category}</p>
                  <p><span>Livraison</span> Offerte dès 80€</p>
                  <p><span>Retours</span> 30 jours</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </PageWrapper>
    </>
  );
}
