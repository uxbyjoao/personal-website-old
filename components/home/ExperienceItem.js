import Prose from "../ui/Prose";

import styles from "./ExperienceItem.module.css";

export default function ExperienceItem({ entry }) {
  return (
    <div className={styles["container"]}>
      <div className={styles["date-type-container"]}>
        <span>
          {entry.date.start} ― {entry.date.end}
        </span>
        <span>•</span>
        <span>{entry.type}</span>
      </div>
      <div className={styles["title-organization-container"]}>
        <h4 className={styles["title"]}>{entry.title}</h4>
        <h5 className={styles["organization"]}>{entry.organization}</h5>
      </div>
      <div className={styles["location-container"]}>
        <img src={`/images/flag-${entry.location.flag}.svg`} />
        <span className={styles["location"]}>{entry.location.full}</span>
        {entry.location.remote && (
          <span className={styles["remote-pill"]}>Remote</span>
        )}
      </div>
      <div className={styles["description-container"]}>
        <Prose>{entry.description}</Prose>
      </div>
    </div>
  );
}
