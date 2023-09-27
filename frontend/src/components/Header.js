import Link from "next/link";
import styles from "../app/styles/header.module.css";
export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link href="/">Music Events</Link>
      </div>
      <nav>
        <ul>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/events">Events</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
