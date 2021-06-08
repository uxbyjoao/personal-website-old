import styles from "./EducationItem.module.css";

export default function EducationItem({ entry }) {
  return (
    <div>
      <h4 className={styles["title"]}>{entry.title}</h4>
      <div className={styles["flag"]}>
        <img
          src={`/images/flag-${entry.flag}.svg`}
          alt={`${entry.flag} flag`}
        />
        <span className={styles["year"]}>{entry.year}</span>
        <span className={styles["institution"]}>{entry.institution}</span>
      </div>
    </div>
  );
}
