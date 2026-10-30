import Link from "next/link";

import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>MyStore</div>
      <div className={styles.links}>
        <Link href="/products">პროდუქტი</Link>
        <Link href="/profile">პროფილი</Link>
        <Link href="/cart">კალათა</Link>
        <div className={styles.authLinks}>
          <Link
            href="/login"
            style={{
              backgroundColor: "blue",
              color: "white",
              padding: "5px 10px",
              borderRadius: "5px",
            }}
          >
            შესვლა
          </Link>
          <Link
            href="/register"
            style={{
              backgroundColor: "lightgrey",
              color: "white",
              padding: "5px 10px",
              borderRadius: "5px",
            }}
          >
            რეგისტრაცია
          </Link>
        </div>
      </div>
    </nav>
  );
}
