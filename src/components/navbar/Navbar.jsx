import Link from "next/link";

import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>MyStore</div>
      <div className={styles.links}>
        <Link href="/products">Products</Link>
        <Link href="/profile">Profile</Link>
        <Link href="/cart">Cart</Link>
      </div>
    </nav>
  );
}
