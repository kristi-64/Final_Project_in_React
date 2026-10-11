import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerLinks}>
        <span>Condition of use</span>
        <span>Privacy Notice</span>
        <span>Interest-Based ads</span>
      </div>
      <div>© 1996-2026, Amazon.com, Inc. or its affiliates</div>
    </footer>
  );
}
