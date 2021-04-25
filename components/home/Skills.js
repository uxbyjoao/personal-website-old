import { Element as ScrollElement } from "react-scroll";

import Heading from "../Heading";
import Prose from "../Prose";

function IconHeading({ name, children }) {
  return (
    <div className="flex items-center space-x-2 mb-5">
      <img src={`/images/skill-icon-${name}.svg`} />
      <h4 className="text-xl xl:text-2xl font-semibold text-gray-700 dark:text-white transition-colors">
        {children}
      </h4>
    </div>
  );
}

function SkillContainer({ first, children }) {
  return <div className={!first ? "mt-12" : undefined}>{children}</div>;
}

export default function Skills() {
  return (
    <ScrollElement name="skills" className="pt-24">
      <Heading>My Skills</Heading>
      <SkillContainer first>
        <IconHeading name="figma">Figma</IconHeading>
        <Prose>
          <p>
            Figma is my main tool and I have been using it since 2018. It has
            replaced Sketch as my go-to software for design. I have clocked in
            over 2800 hours in Figma in the last two years alone, creating
            everything from high-fidelity prototypes to design systems.
          </p>
        </Prose>
      </SkillContainer>
      <SkillContainer>
        <IconHeading name="adobe">Adobe Creative Suite</IconHeading>
        <Prose>
          <p>
            My background is in graphic design - hence, I am highly proficient
            with the Adobe application suite. Using Photoshop, Illustrator,
            InDesign, and even Lightroom (I'm a hobbyist photographer as well)
            is second nature to me. In fact, I started my UX career designing
            websites in Photoshop for an advertising agency back in 2012.
          </p>
        </Prose>
      </SkillContainer>
      <SkillContainer>
        <IconHeading name="framer">Framer</IconHeading>
        <Prose>
          <p>
            Framer is a tool that I've been learning in order to create higher
            fidelity prototypes and microinteractions. What has drawn me to it
            is the fact that one can use React and JavaScript to create
            components and control the prototypes with more precision.
          </p>
        </Prose>
      </SkillContainer>
      <SkillContainer>
        <IconHeading name="web">
          Front-End Development (HTML/CSS, ES6 JavaScript)
        </IconHeading>
        <Prose>
          <p>
            Around 2017, I took the leap and started to teach myself actual
            front-end development in my spare time. Since then, I have acquired
            what I would say is enough development knowledge to be dangerous as
            a designer. In my current job, I am ocasionally given the oportunity
            to code, and have coded static sites and application prototypes. I
            know my way around React, Vue.js, Firebase, and will even risk
            dabbling with the back-end using Node when I'm feeling daring. This
            website, for example, was developed using Next.js and TailwindCSS.
          </p>
        </Prose>
      </SkillContainer>
      <SkillContainer>
        <IconHeading name="arduino">Arduino</IconHeading>
        <Prose>
          One of the things I'm most interested in is the Internet of Things,
          and as such, I have taught myself how to use the Arduino platform to
          develop simple projects, at a very basic level.
        </Prose>
      </SkillContainer>
    </ScrollElement>
  );
}
