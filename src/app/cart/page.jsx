"use client";
import { useState } from "react";
import Link from "next/link";
import styles from "./cart.module.css";

export default function CartPage() {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
      price: 109.95,
      quantity: 1,
      image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png",
    },
  ]);

  const increaseQuantity = (id) => {
    setCartItems(
      cartItems.map((item) => {
        if (item.id === id && item.quantity < 10) {
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      }),
    );
  };

  const decreaseQuantity = (id) => {
    setCartItems(
      cartItems.map((item) => {
        if (item.id === id && item.quantity > 1) {
          return { ...item, quantity: item.quantity - 1 };
        }
        return item;
      }),
    );
  };

  const removeItem = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );

  if (cartItems.length === 0) {
    return (
      <div className={styles.emptyContainer}>
        <h2>თქვენი კალათა ცარიელია</h2>
        <Link href="/products" className={styles.shopButton}>
          პროდუქტების ნახვა
        </Link>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>სავაჭრო კალათა</h1>

      <div className={styles.cartContent}>
        <div className={styles.itemsList}>
          {cartItems.map((item) => (
            <div key={item.id} className={styles.cartItem}>
              <img src={item.image} alt={item.title} className={styles.image} />

              <div className={styles.itemDetails}>
                <h3 className={styles.itemTitle}>{item.title}</h3>
                <p className={styles.itemPrice}>${item.price.toFixed(2)}</p>

                {}
                <div className={styles.quantityContainer}>
                  <button
                    onClick={() => decreaseQuantity(item.id)}
                    className={styles.qtyButton}
                    disabled={item.quantity <= 1}
                  >
                    -
                  </button>
                  <span className={styles.quantityText}>{item.quantity}</span>
                  <button
                    onClick={() => increaseQuantity(item.id)}
                    className={styles.qtyButton}
                    disabled={item.quantity >= 10}
                  >
                    +
                  </button>
                </div>
              </div>

              <button
                onClick={() => removeItem(item.id)}
                className={styles.removeButton}
              >
                წაშლა
              </button>
            </div>
          ))}
        </div>

        <div className={styles.summary}>
          <h3>შეკვეთის დეტალები</h3>
          <div className={styles.summaryRow}>
            <span>ჯამი:</span>
            <span>${totalPrice.toFixed(2)}</span>
          </div>
          <button className={styles.checkoutButton}>შეძენა</button>
        </div>
      </div>
    </div>
  );
}
