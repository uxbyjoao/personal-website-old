import { BiSun, BiMoon } from "react-icons/bi";

import styles from "./DarkModeToggle.module.css";

export default function DarkModeToggle({ handleDarkModeToggle, currentMode }) {
  return (
    <button
      title="Toggle dark mode"
      className={styles["dark-mode-toggle"]}
      onClick={handleDarkModeToggle}
    >
      {currentMode === "dark" ? (
        <BiSun className={styles["icon"]} size={32} />
      ) : (
        <BiMoon size={32} />
      )}
    </button>
  );
}
