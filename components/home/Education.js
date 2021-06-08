import { Element as ScrollElement } from "react-scroll";

import Heading from "../ui/Heading";
import EducationItem from "./EducationItem";

import styles from "./Education.module.css";

import educationList from "../../data/education";

export default function Education() {
  return (
    <ScrollElement name="education" className={styles["container"]}>
      <Heading>My Education</Heading>
      <div className={styles["list-container"]}>
        {educationList.map((entry, key) => (
          <EducationItem entry={entry} key={key} />
        ))}
      </div>
    </ScrollElement>
  );
}
