import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles["footer"]}>
      <p>Copyright &copy; João Lúcio Gomes, All Rights Reserved.</p>
      <p>
        Icons by <a href="https://remixicon.com/">Remix Icon</a>.
      </p>
    </footer>
  );
}
