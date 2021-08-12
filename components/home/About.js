import { Element as ScrollElement } from "react-scroll";

import styles from "./About.module.css";

import Heading from "../ui/Heading";
import Prose from "../ui/Prose";

export default function About() {
  return (
    <ScrollElement name="about" className={styles["container"]}>
      <Heading>About me</Heading>
      <Prose>
        <p>
          In my spare time, I like to sing, record and play music (fun fact: I
          was also a professional musician from 2010 to 2017), play games on my
          computer, and code. I also enjoy photography and travelling.
        </p>
        <p>
          I am fascinated by technology and how transformative it has been in
          our society. I am just old enough to remember a world without the
          internet, and I am astounded by the impact that personal computing
          has, and continues to have, on our world.
        </p>
      </Prose>
    </ScrollElement>
  );
}
