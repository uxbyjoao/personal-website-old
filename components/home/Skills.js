import { Element as ScrollElement } from "react-scroll";

import Heading from "../ui/Heading";
import SkillItem from "./SkillItem";
import LanguageItem from "./LanguageItem";

import styles from "./Skills.module.css";

import skillList from "../../data/skills";
import languagesList from "../../data/languages";

export default function Skills() {
  return (
    <ScrollElement name="skills" className={styles["container"]}>
      <Heading>My Skills</Heading>
      <div className={styles["skill-list-container"]}>
        {skillList.map((entry, key) => (
          <SkillItem entry={entry} key={key} />
        ))}
      </div>
      <div className={styles["language-list-container"]}>
        {languagesList.map((entry, key) => (
          <LanguageItem entry={entry} key={key} />
        ))}
      </div>
    </ScrollElement>
  );
}
