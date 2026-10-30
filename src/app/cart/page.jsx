"use client";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  removeFromCart,
  incrementQuantity,
  decrementQuantity,
} from "@/store/cartSlice";

import styles from "./cart.module.css";

export default function CartPage() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const totalQuantity = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );

  return (
    <div className={styles.container}>
      <h2>თქვენი კალათა</h2>
      {cartItems.length === 0 ? (
        <p>კალათა ცარიელია</p>
      ) : (
        <div>
          <div className={styles.itemsList}>
            {cartItems.map((item) => (
              <div key={item.id} className={styles.cartItem}>
                <img src={item.image} alt={item.title} width={50} />
                <div>
                  <h4>{item.title}</h4>
                  <p>ფასი: ${item.price}</p>
                </div>
                <div className={styles.actions}>
                  <button onClick={() => dispatch(decrementQuantity(item.id))}>
                    -
                  </button>
                  <span>{item.quantity}</span>
                  <button onClick={() => dispatch(incrementQuantity(item.id))}>
                    +
                  </button>
                </div>
                <button
                  className={styles.removeBtn}
                  onClick={() => dispatch(removeFromCart(item.id))}
                >
                  წაშლა
                </button>
              </div>
            ))}
          </div>

          <div className={styles.summary}>
            <h3>სულ პროდუქტი: {totalQuantity} ცალი</h3>
            <h3>ჯამური გადასახადი: ${totalPrice.toFixed(2)}</h3>
          </div>
        </div>
      )}
    </div>
  );
}
