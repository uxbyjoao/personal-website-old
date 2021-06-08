import styles from "./LanguageItem.module.css";

export default function LanguageItem({ entry }) {
  return (
    <div className={styles["container"]}>
      <img src={`/images/flag-${entry.flag}.svg`} />
      <h4 className={styles["heading"]}>
        <span className={styles["name"]}>{entry.name}</span>
        <span className={styles["separator"]}>•</span>
        <span className={styles["level"]}>{entry.level}</span>
        {entry.certification && (
          <span className={styles["certification-pill"]}>
            {entry.certification}
          </span>
        )}
      </h4>
    </div>
  );
}
