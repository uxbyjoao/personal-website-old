import styles from "./DarkModeToggle.module.css";

export default function DarkModeToggle({ handleDarkModeToggle }) {
  return (
    <button
      className={styles["dark-mode-toggle"]}
      onClick={handleDarkModeToggle}
    >
      mode
    </button>
  );
}
