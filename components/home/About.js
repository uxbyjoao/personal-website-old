import { Element as ScrollElement } from "react-scroll";

import Heading from "../Heading";
import Prose from "../Prose";

export default function About() {
  return (
    <ScrollElement name="about" className="pt-24">
      <Heading>About me</Heading>
      <Prose>
        <p>
          I was born in <strong>Brazil</strong>, have a{" "}
          <strong>dual citizenship from Portugal</strong>, and currently reside
          in <strong>Germany</strong>. My native language is{" "}
          <strong>Portuguese</strong> and I have{" "}
          <strong>fluent command of English</strong>. I am a{" "}
          <strong>level A2.2 German</strong> speaker, but very eager to improve.
        </p>
        <p>
          I have a <strong>B. A. in Communication Science</strong> from the{" "}
          <strong>University of Fortaleza (UNIFOR)</strong> in Brazil, and am
          currently finishing a <strong>M. Sc. in Usability Engineering</strong>{" "}
          at the <strong>Rhine-Waal University of Applied Sciences</strong> in
          Germany.
        </p>
        <p>
          Currently, I'm working remotely for a company in Canada called{" "}
          <strong>NE2 Group</strong>, where I'm responsible for creating and
          maintaining their design system, as well as designing and redesigning
          their digital products. I also do a little bit of graphic design work
          for them as well, but it's very minor.
        </p>
        <p>
          In my spare time, I like to sing, record and play music (fun fact: I
          was also a professional musician from 2010 to 2017), play games on my
          computer, and code. I also enjoy photography and traveling.
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
