import Prose from "../ui/Prose";

import styles from "./SkillItem.module.css";

export default function SkillItem({ entry }) {
  return (
    <div>
      <div className={styles["name-icon-container"]}>
        {/* eslint-disable-next-line */}
        <img
          src={`/images/skill-${entry.icon}.svg`}
          alt={`${entry.name}'s logo`}
        />
        <h4 className={styles["name"]}>{entry.name}</h4>
      </div>
      <Prose>
        <div className={styles["proficiency-container"]}>
          <span className={styles["proficiency"]}>{entry.level}</span>
          <span className={styles["separator"]}>•</span>
        </div>
        {entry.description}
      </Prose>
    </div>
  );
}
