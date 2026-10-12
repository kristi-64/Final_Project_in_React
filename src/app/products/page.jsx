"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import styles from "./products.module.css";

export default function ProductsPage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div className={styles.loading}>იტვირთება...</div>;
  }

  return (
    <div className={styles.container}>
      <div className={styles.grid}>
        {products.map((product) => (
          <Link
            href={`/products/details/${product.id}`}
            key={product.id}
            className={styles.card}
          >
            <div>
              <p className={styles.ships}>Ships to Georgia</p>
              <div className={styles.imageContainer}>
                <img src={product.image} alt={product.title} />
              </div>
              <h2 className={styles.title}>{product.title}</h2>
            </div>
            <div>
              <div className={styles.rating}>
                {"★".repeat(Math.round(product.rating.rate))}
                <span>{product.rating.count} reviews</span>
              </div>
              <p className={styles.price}>{product.price.toFixed(2)}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
