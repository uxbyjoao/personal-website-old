import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles["footer"]}>
      <p>Copyright &copy; João Lúcio Gomes, All Rights Reserved.</p>
      <p>Icons by FontAwesome.</p>
    </footer>
  );
}
