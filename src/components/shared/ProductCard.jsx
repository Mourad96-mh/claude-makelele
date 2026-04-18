import { Link } from "react-router-dom";
import { formatPrice } from "../../utils/formatPrice";
import { useCartStore } from "../../store/cartStore";
import styles from "./ProductCard.module.css";

export default function ProductCard({ product }) {
  const addItem = useCartStore((s) => s.addItem);

  return (
    <div className={styles.card}>
      <Link to={`/boutique/${product.id}`}>
        <div className={styles.imageWrap}>
          {product.image ? (
            <img src={product.image} alt={product.name} loading="lazy" />
          ) : (
            <span className={styles.placeholder}>Photo</span>
          )}
        </div>
        <div className={styles.body}>
          {product.badge && <span className={styles.badge}>{product.badge}</span>}
          <p className={styles.name}>{product.name}</p>
          <p className={styles.price}>{formatPrice(product.price)}</p>
        </div>
      </Link>
      <div style={{ padding: "0 var(--space-md) var(--space-md)" }}>
        <button className={styles.btn} onClick={() => addItem(product)}>
          Ajouter au panier
        </button>
      </div>
    </div>
  );
}
