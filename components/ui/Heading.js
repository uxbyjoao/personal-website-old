import styles from "./Heading.module.css";

export default function Heading({ children }) {
  return (
    <>
      <h3 className={styles["heading"]}>{children}</h3>
      <hr className={styles["hor-rule"]} />
    </>
  );
}
