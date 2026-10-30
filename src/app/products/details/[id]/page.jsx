import Link from "next/link";
import styles from "./details.module.css";
import AddToCartButton from "./AddToCartButton";

export default async function ProductDetailPage({ params }) {
  const { id } = await params;

  const res = await fetch(`https://fakestoreapi.com/products/${id}`);
  const product = await res.json();

  return (
    <div className={styles.container}>
      <Link href="/products" className={styles.backButton}>
        უკან
      </Link>
      <div className={styles.productWrapper}>
        <div className={styles.imageContainer}>
          <img src={product.image} alt={product.title} />
        </div>

        <div className={styles.details}>
          <h1 className={styles.title}>{product.title}</h1>
          <span className={styles.category}>{product.category}</span>

          <div className={styles.raiting}>
            <span>★ {product.raiting?.rate} </span>
            <span className={styles.count}>
              ({product.raitng?.count} reviews)
            </span>
          </div>
          <p className={styles.price}>${product.price?.toFixed(2)}</p>

          <div className={styles.descriptionSection}>
            <h3>აღწერა</h3>
            <p className={styles.description}>{product.description}</p>
          </div>
          <AddToCartButton product={product} />
        </div>
      </div>{" "}
    </div>
  );
}
