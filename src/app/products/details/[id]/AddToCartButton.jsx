"use client";

import { useDispatch } from "react-redux";
import { addToCart } from "@/store/cartSlice";
import styles from "./details.module.css";

export default function AddToCartButton({ product }) {
  const dispatch = useDispatch();

  return (
    <button
      className={styles.cartButton}
      onClick={() =>
        dispatch(
          addToCart({
            id: product.id,
            title: product.title,
            price: product.price,
            image: product.image,
          }),
        )
      }
    >
      კალათაში დამატება
    </button>
  );
}
