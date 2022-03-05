import styles from "../styles/Nav.module.css";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <h1>
        <Link href="/">
          <a>Myverse</a>
        </Link>
      </h1>
      <ul className={styles.list}>
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <a>About</a>
          </Link>
        </li>
        <li>
          <Link href="/contact">
            <a>Contact Me</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
