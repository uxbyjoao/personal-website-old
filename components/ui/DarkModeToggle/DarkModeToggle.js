import { BiMoon, BiSun } from "react-icons/bi";

import styles from "./DarkModeToggle.module.css";

export default function DarkModeToggle({ handleDarkModeToggle, isDarkMode }) {
  return (
    <button
      title="Toggle dark mode"
      className={styles["dark-mode-toggle"]}
      onClick={handleDarkModeToggle}
    >
      {isDarkMode ? (
        <BiSun className={styles["icon"]} size={32} />
      ) : (
        <BiMoon size={32} />
      )}
    </button>
  );
}
