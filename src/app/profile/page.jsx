import styles from "./profile.module.css";

export default async function ProfilePage() {
  const res = await fetch("https://fakestoreapi.com/users/3");
  const user = await res.json();

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>მომხმარებლის პროფილი</h1>
      <div className={styles.card}>
        <div className={styles.infoGroup}>
          <span className={styles.label}>სახელი:</span>
          <span className={styles.value}>
            {user.name.firstname} {user.name.lastname}
          </span>
        </div>
        <div className={styles.infoGroup}>
          <span className={styles.label}> მომხმარებელი:</span>
          <span className={styles.value}>{user.username}</span>
        </div>
        <div className={styles.infoGroup}>
          <span className={styles.label}>ელ-ფოსტა:</span>
          <span className={styles.value}>{user.email}</span>
        </div>
        <div className={styles.infoGroup}>
          <span className={styles.label}>ტელეფონი:</span>
          <span className={styles.value}>{user.phone}</span>
        </div>
        <div className={styles.infoGroup}>
          <span className={styles.label}>ქალაქი:</span>
          <span className={styles.value}>{user.address.city}</span>
        </div>
      </div>
    </div>
  );
}
