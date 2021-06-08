import styles from "./HeroLink.module.css";

export default function HeroLink({ href, alt, children }) {
  return (
    <a href={href} alt={alt} className={styles["link"]}>
      {children}
    </a>
  );
}
