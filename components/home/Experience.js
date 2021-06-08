import { Element as ScrollElement } from "react-scroll";

import Heading from "../ui/Heading";
import ExperienceItem from "./ExperienceItem";

import styles from "./Experience.module.css";

import experienceList from "../../data/experience";

export default function Experience() {
  return (
    <ScrollElement name="experience" className={styles["container"]}>
      <Heading>Past Work Experience</Heading>
      <div className={styles["list-container"]}>
        {experienceList.map((entry, key) => (
          <ExperienceItem entry={entry} key={key} />
        ))}
      </div>
    </ScrollElement>
  );
}
