import styles from  "../styles/page.module.css";
export default function AboutPage() {
  return (
    <div className={styles["center-container"]}>
      <h1>About</h1>
      <p>This is an app to find the latest DJ and other music events</p>
      <p>Version: 1.0.0</p>
    </div>
  );
}
